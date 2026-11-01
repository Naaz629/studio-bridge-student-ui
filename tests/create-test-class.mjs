import { mkdirSync, writeFileSync } from "node:fs"
import { createClient } from "@supabase/supabase-js"
import { loadEnv } from "vite"
const env = loadEnv("development", process.cwd(), "VITE_")
const db = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY, {
  auth: { persistSession: false },
})
let code
for (let i = 0; i < 8; i++) {
  code = "T" + Math.random().toString(36).slice(2, 5).toUpperCase()
  const { data } = await db
    .from("sessions")
    .select("code")
    .eq("code", code)
    .maybeSingle()
  if (!data) break
}
const result = await db
  .from("sessions")
  .insert({
    code,
    unit: "Studio Bridge integration test",
    week: 6,
    state: { slide: 3, activityId: null, activityKind: null },
  })
if (result.error) throw result.error
mkdirSync("work", { recursive: true })
writeFileSync("work/test-class.json", JSON.stringify({ code }))
console.log("Isolated test class created:", code)
const path = `${code}/integration-test.png`
const png = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aORcAAAAASUVORK5CYII=",
  "base64",
)
const upload = await db.storage
  .from("artefacts")
  .upload(path, png, { contentType: "image/png" })
console.log("Storage upload:", upload.error ? upload.error.message : "OK")
if (!upload.error) {
  const { data } = db.storage.from("artefacts").getPublicUrl(path)
  console.log("Public image:", (await fetch(data.publicUrl)).status)
}
