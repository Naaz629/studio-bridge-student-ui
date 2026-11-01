// Run against an isolated test class (never a live teaching session).
// Requires work/test-class.json and the public Vite Supabase environment variables.
import assert from "node:assert/strict"
import { readFileSync, mkdirSync } from "node:fs"
import { loadEnv } from "vite"
import { createClient } from "@supabase/supabase-js"
import { chromium } from "@playwright/test"
const { code } = JSON.parse(readFileSync("work/test-class.json", "utf8"))
const env = loadEnv("development", process.cwd(), "VITE_")
const db = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY, {
  auth: { persistSession: false },
})
const browser = await chromium.launch({
  ...(process.env.STUDIO_BRIDGE_CHROME
    ? { executablePath: process.env.STUDIO_BRIDGE_CHROME }
    : {}),
  headless: true,
})
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
})
const page = await context.newPage()
const errors = []
page.on("pageerror", (error) => errors.push(error.message))
mkdirSync("work/qa", { recursive: true })
async function rows(table, filters = {}) {
  let query = db.from(table).select("*").eq("session", code)
  for (const [k, v] of Object.entries(filters)) query = query.eq(k, v)
  const r = await query
  if (r.error) throw r.error
  return r.data
}
async function waitFor(test, label) {
  for (let i = 0; i < 80; i++) {
    const result = await test()
    if (result) return result
    await new Promise((r) => setTimeout(r, 150))
  }
  throw new Error("Timed out: " + label)
}
async function startActivity(kind, spec = {}) {
  const id = `${code}-test-${kind}`
  const a = await db
    .from("activities")
    .upsert({ id, session: code, kind, slide: 4, spec })
  if (a.error) throw a.error
  const s = await db
    .from("sessions")
    .update({
      state: {
        slide: 4,
        activityId: id,
        activityKind: kind,
        updatedAt: new Date().toISOString(),
      },
    })
    .eq("code", code)
  if (s.error) throw s.error
  await page.getByLabel("Live class activity").waitFor()
  return id
}
async function sent(kind, q) {
  return waitFor(
    async () =>
      (await rows("responses", { kind })).find(
        (r) => q === undefined || r.payload.q === q,
      ),
    "response " + kind + " " + q,
  )
}
try {
  await db
    .from("sessions")
    .update({ state: { slide: 3, activityId: null } })
    .eq("code", code)
  await page.goto(process.env.STUDENT_TEST_URL || "http://127.0.0.1:8443/")
  await page.getByRole("button", { name: "Join a class", exact: true }).click()
  await page.getByRole("heading", { name: "Join your class." }).waitFor()
  await page.screenshot({ path: "work/qa/join.png" })
  await page
    .getByLabel("Your name", { exact: true })
    .fill("Integration Student")
  await page.getByLabel("Class code", { exact: true }).fill(code.toLowerCase())
  await page.getByRole("button", { name: "Join class", exact: true }).click()
  await page
    .getByText("Class " + code, { exact: true })
    .first()
    .waitFor()
  await page.locator(".slide-image").waitFor()
  await waitFor(
    async () =>
      (await page.locator(".slide-image").getAttribute("src"))?.endsWith(
        "page-03.jpg",
      ),
    "initial slide",
  )
  console.log("PASS join / original slide numbering")
  await page
    .locator(".ask-composer textarea")
    .fill("Integration question: which evidence matters?")
  await page
    .locator(".ask-composer")
    .getByRole("button", { name: "Send question" })
    .click()
  const question = await waitFor(
    async () =>
      (await rows("questions")).find((r) =>
        r.text.startsWith("Integration question:"),
      ),
    "question insert",
  )
  await db
    .from("questions")
    .update({ status: "ans", answer: "Look for repeated research patterns." })
    .eq("id", question.id)
  await page
    .getByText("Look for repeated research patterns.", { exact: true })
    .waitFor()
  const card = page
    .locator(".question-card")
    .filter({ hasText: "Integration question:" })
  assert.match(await card.getAttribute("class"), /answered/)
  await card.locator(".question-actions > button").first().click()
  await waitFor(
    async () =>
      (await rows("questions")).find((r) => r.id === question.id)?.upvotes ===
      2,
    "upvote",
  )
  console.log("PASS questions / tutor answer / green state / upvote")
  await page.getByRole("button", { name: /Got it,/ }).click()
  await waitFor(
    async () => (await rows("reactions")).some((r) => r.kind === "got"),
    "reaction",
  )
  await db
    .from("sessions")
    .update({ state: { slide: 4, activityId: null } })
    .eq("code", code)
  await waitFor(
    async () =>
      (await page.locator(".slide-image").getAttribute("src"))?.endsWith(
        "page-04.jpg",
      ),
    "live slide update",
  )
  console.log("PASS reactions / realtime slide update")
  await startActivity("concept", {
    questions: [
      {
        type: "mc",
        text: "Which evidence supports this persona?",
        options: [{ t: "Repeated observations", ok: true }, { t: "A guess" }],
      },
      { type: "scale", text: "How ready are you?", lo: "Not yet", hi: "Ready" },
      {
        type: "open",
        text: "Explain your reasoning.",
        hint: "Use one observation.",
      },
      {
        type: "mc",
        text: "Which frame leaves room?",
        options: [{ t: "A human need" }, { t: "A fixed solution" }],
      },
      { type: "scale", text: "How confident now?" },
    ],
  })
  await page
    .getByRole("heading", { name: "Which evidence supports this persona?" })
    .waitFor()
  await page
    .getByRole("button", { name: "A Repeated observations", exact: true })
    .click()
  await page
    .getByRole("button", { name: "Submit response →", exact: true })
    .click()
  const choice = await sent("choice", 0)
  assert.equal(choice.payload.answer, 0)
  await page
    .getByRole("button", { name: "View peer responses", exact: true })
    .click()
  await page
    .getByLabel("Reply to classmates")
    .fill("I noticed this pattern in several interviews.")
  await page.getByRole("button", { name: "Send reply", exact: true }).click()
  await sent("peer_reply", 0)
  await page.getByRole("button", { name: "Question 2", exact: true }).click()
  await page
    .locator(".tutor-scale")
    .getByRole("button", { name: "5", exact: true })
    .click()
  await page
    .getByRole("button", { name: "Submit response →", exact: true })
    .click()
  assert.equal((await sent("rating", 1)).payload.answer, 5)
  await page.getByRole("button", { name: "Question 3", exact: true }).click()
  await page
    .getByRole("textbox", { name: "Your response", exact: true })
    .fill("The same need appeared in three interviews.")
  await page
    .getByRole("button", { name: "Submit response →", exact: true })
    .click()
  await sent("open", 2)
  await page.getByRole("button", { name: "Question 4", exact: true }).click()
  await page
    .getByRole("button", { name: "A A human need", exact: true })
    .click()
  await page
    .getByRole("button", { name: "Submit response →", exact: true })
    .click()
  await sent("choice", 3)
  await page.getByRole("button", { name: "Question 5", exact: true }).click()
  await page
    .locator(".tutor-scale")
    .getByRole("button", { name: "4", exact: true })
    .click()
  await page
    .getByRole("button", { name: "Submit response →", exact: true })
    .click()
  await sent("rating", 4)
  await page.screenshot({ path: "work/qa/concept.png" })
  console.log(
    "PASS all 5 concept questions / q indexes / open answer / peer reply",
  )
  await startActivity("discussion")
  await page.getByRole("button", { name: /Play Agree card/ }).click()
  await sent("discussion")
  await page.screenshot({ path: "work/qa/discussion.png" })
  console.log("PASS discussion card")
  await startActivity("artefact")
  await page
    .getByLabel("Choose artefact photo")
    .setInputFiles({
      name: "test-artefact.png",
      mimeType: "image/png",
      buffer: Buffer.from(
        "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aORcAAAAASUVORK5CYII=",
        "base64",
      ),
    })
  await page.getByLabel("Group name").fill("Integration group")
  await page
    .getByLabel("The thinking behind it")
    .fill("Repeated needs informed our persona.")
  await page.getByRole("button", { name: /Submit artefact/ }).click()
  const photo = await sent("artefact")
  assert.equal(photo.team, "Integration group")
  assert.match(photo.payload.url, /\/storage\/v1\/object\/public\/artefacts\//)
  assert.equal((await fetch(photo.payload.url)).status, 200)
  console.log("PASS photo upload / public storage URL / team / caption")
  await startActivity("reflection", {
    question: "What changed in your understanding?",
    hint: "Connect it to your research.",
  })
  await page
    .getByRole("textbox", { name: "Your response", exact: true })
    .fill("I now separate evidence from assumptions.")
  await page
    .getByRole("button", { name: "Submit response →", exact: true })
    .click()
  await sent("reflection")
  await page.reload()
  await page.getByRole("button", { name: "Join a class", exact: true }).click()
  await page.getByRole("button", { name: "Join class", exact: true }).click()
  await page
    .getByText("Class " + code, { exact: true })
    .first()
    .waitFor()
  await page.getByText("Response sent", { exact: false }).waitFor()
  console.log("PASS reflection / rejoin restores saved details and response")
  await db
    .from("sessions")
    .update({ state: { slide: 5, activityId: null } })
    .eq("code", code)
  await page.locator(".slide-image").waitFor()
  await waitFor(
    async () =>
      (await page.locator(".slide-image").getAttribute("src"))?.endsWith(
        "page-05.jpg",
      ),
    "activity closed",
  )
  await page.screenshot({ path: "work/qa/live.png" })
  await page.getByRole("button", { name: "Hide questions sidebar" }).click()
  await page.screenshot({ path: "work/qa/live-collapsed.png" })
  await page.getByRole("button", { name: "Show questions sidebar" }).click()
  await context.setOffline(true)
  await page
    .locator(".ask-composer textarea")
    .fill("Offline question kept for retry")
  await page
    .locator(".ask-composer")
    .getByRole("button", { name: "Send question" })
    .click()
  await page.getByText("Not sent ·", { exact: false }).waitFor()
  await context.setOffline(false)
  await page.getByRole("button", { name: "Retry sending", exact: true }).click()
  await waitFor(
    async () =>
      (await rows("questions")).some(
        (r) => r.text === "Offline question kept for retry",
      ),
    "retry question",
  )
  console.log(
    "PASS activity close / sidebar toggle / offline fallback and retry",
  )
  await page.getByRole("button", { name: "My Learning", exact: true }).click()
  await page
    .getByRole("heading", { name: "My Learning", exact: true })
    .waitFor()
  const conceptEntry = page
    .locator(".learning-entry")
    .filter({
      has: page.getByRole("heading", { name: "Concept check", exact: true }),
    })
  await conceptEntry.getByRole("button", { name: /View response/ }).click()
  await page
    .getByRole("heading", { name: "Which evidence supports this persona?" })
    .waitFor()
  await page
    .getByText("Activity closed · viewing your responses.", { exact: true })
    .waitFor()
  await page.getByRole("button", { name: "Question 2", exact: true }).click()
  await page.getByRole("heading", { name: "How ready are you?" }).waitFor()
  await page.getByRole("button", { name: "Back to live", exact: true }).click()
  await page.locator(".slide-image").waitFor()
  console.log("PASS My Learning / previous activity review / return to live")

  const events = await rows("events")
  for (const type of [
    "question_asked",
    "question_upvoted",
    "reaction_sent",
    "response_submitted",
    "artefact_uploaded",
  ])
    assert.ok(
      events.some((r) => r.type === type),
      "Missing log " + type,
    )
  assert.equal(errors.length, 0, errors.join("\n"))
  await page.getByRole("button", { name: "Leave class", exact: true }).click()
  await page.getByRole("button", { name: "Join a class", exact: true }).waitFor()
  await page.reload()
  await page.getByRole("button", { name: "Join a class", exact: true }).waitFor()
  await page.locator(".slide-image").waitFor()
  console.log(
    "PASS event logs / leave class / original demo / no browser errors",
  )
} finally {
  await browser.close()
}
