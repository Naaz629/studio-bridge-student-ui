import { supabase } from "./supabase"
import type {
  ClassIdentity,
  QuestionRow,
  ReactionKind,
  ResponseRow,
} from "./class-types"

export type SendResult<T> = {
  data: T | null
  error: string | null
}
export function createClassApi(
  identity: ClassIdentity | null,
  activityId: string | null,
  report: (message: string) => void,
) {
  const actor = identity?.anonymous ? "Anonymous" : identity?.name || "Student"
  async function action<T>(work: () => Promise<T>): Promise<SendResult<T>> {
    if (!identity || !supabase)
      return { data: null, error: "Not connected · saved on this device" }
    try {
      const data = await work()
      report("")
      return { data, error: null }
    } catch {
      const error =
        "Not connected · saved on this device. Retry to send to your tutor."
      report(error)
      return { data: null, error }
    }
  }
  async function log(type: string, payload: Record<string, unknown>) {
    const result = await supabase!
      .from("events")
      .insert({
        session: identity!.code,
        role: "student",
        type,
        actor,
        payload,
      })
    // A successful primary write is not retried just because the separate log failed.
    if (result.error)
      throw new Error("Action saved, but the activity log is unavailable")
  }
  async function logged<T>(
    type: string,
    payload: Record<string, unknown>,
    work: () => Promise<T>,
  ): Promise<SendResult<T>> {
    const result = await action(work)
    if (result.data) {
      try {
        await log(type, payload)
      } catch {
        report("Saved to class · activity log unavailable")
      }
    }
    return result
  }
  async function insertOnce<T>(
    table: string,
    row: Record<string, unknown>,
  ): Promise<T> {
    const result = await supabase!.from(table).insert(row).select().single()
    if (!result.error) return result.data as T
    // Stable client-generated UUIDs make retry safe if the server saved a request
    // but the browser lost the acknowledgement.
    if (result.error.code === "23505") {
      const old = await supabase!
        .from(table)
        .select()
        .eq("id", row.id)
        .eq("session", identity!.code)
        .single()
      if (!old.error) return old.data as T
    }
    throw result.error
  }
  return {
    askQuestion(input: {
      id?: string
      text: string
      anonymous: boolean
      slide: number
      lang?: string
      text_en?: string
    }) {
      const row = {
        ...input,
        id: input.id || crypto.randomUUID(),
        session: identity?.code,
        student: input.anonymous ? null : actor,
        anonymous: input.anonymous,
        text_en: input.text_en || null,
        upvotes: 1,
      }
      return logged<QuestionRow>(
        "question_asked",
        { question: row.id, slide: input.slide },
        () => insertOnce("questions", row),
      )
    },
    upvoteQuestion(id: string) {
      return logged<QuestionRow>(
        "question_upvoted",
        { question: id },
        async () => {
          const old = await supabase!
            .from("questions")
            .select("upvotes")
            .eq("session", identity!.code)
            .eq("id", id)
            .single()
          if (old.error) throw old.error
          const next = await supabase!
            .from("questions")
            .update({ upvotes: old.data.upvotes + 1 })
            .eq("session", identity!.code)
            .eq("id", id)
            .select()
            .single()
          if (next.error) throw next.error
          return next.data as QuestionRow
        },
      )
    },
    sendReaction(kind: ReactionKind) {
      return logged("reaction_sent", { kind }, async () => {
        const result = await supabase!
          .from("reactions")
          .insert({ session: identity!.code, student: actor, kind })
          .select()
          .single()
        if (result.error) throw result.error
        return result.data
      })
    },
    submitResponse(input: {
      id?: string
      activityId: string
      kind: string
      payload: Record<string, unknown>
      team?: string
    }) {
      // A closed or replaced activity must never receive a late response.
      if (!activityId || input.activityId !== activityId)
        return Promise.resolve({
          data: null,
          error:
            "This activity is no longer live. Your response stays on this device.",
        } as SendResult<ResponseRow>)
      const id = input.id || crypto.randomUUID()
      return logged<ResponseRow>(
        "response_submitted",
        { response: id, activityId, kind: input.kind, ...input.payload },
        async () => {
          const current = await supabase!
            .from("sessions")
            .select("state")
            .eq("code", identity!.code)
            .single()
          if (
            current.error ||
            current.data.state?.activityId !== input.activityId
          )
            throw new Error("Activity closed")
          return insertOnce("responses", {
            id,
            session: identity!.code,
            activity_id: input.activityId,
            kind: input.kind,
            student: actor,
            team: input.team || null,
            payload: { ...input.payload, clientId: identity!.clientId },
          })
        },
      )
    },
    uploadArtefact(photo: {
      url: string
      name: string
    }) {
      return action(async () => {
        const file = await (await fetch(photo.url)).blob()
        if (
          !["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
          file.size > 15 * 1024 * 1024
        )
          throw new Error("Invalid image")
        const filename =
          photo.name.replace(/[^a-zA-Z0-9._-]/g, "-") || "artefact.jpg"
        const path = `${identity!.code}/${Date.now()}-${crypto.randomUUID()}-${filename}`
        const result = await supabase!.storage
          .from("artefacts")
          .upload(path, file, { contentType: file.type, upsert: false })
        if (result.error) throw result.error
        const url = supabase!.storage.from("artefacts").getPublicUrl(path)
          .data.publicUrl
        try {
          await log("artefact_uploaded", { path, url, activityId })
        } catch {
          report("Photo uploaded · activity log unavailable")
        }
        return url
      })
    },
  }
}
