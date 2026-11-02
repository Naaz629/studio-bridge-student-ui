import { useEffect, useState } from "react"
import { supabase } from "./supabase"
import type {
  ClassIdentity,
  ClassRow,
  QuestionRow,
  ReactionRow,
  ResponseRow,
  TutorActivity,
} from "./class-types"

export async function findClass(code: string): Promise<ClassRow> {
  if (!supabase)
    throw new Error("Not connected. You can explore the demo instead.")
  const result = await supabase
    .from("sessions")
    .select("code,unit,week,state")
    .ilike("code", code.toUpperCase())
    .maybeSingle()
  if (result.error)
    throw new Error("Not connected. Check your connection and try again.")
  if (!result.data)
    throw new Error(
      "Class not found. Check the four-character code with your tutor.",
    )
  return result.data as ClassRow
}

export function useClassSession(identity: ClassIdentity | null) {
  const [session, setSession] = useState<ClassRow | null>(null)
  const [activities, setActivities] = useState<TutorActivity[]>([])
  const [questions, setQuestions] = useState<QuestionRow[]>([])
  const [responses, setResponses] = useState<ResponseRow[]>([])
  const [reactions, setReactions] = useState<ReactionRow[]>([])
  const [connected, setConnected] = useState(false)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setSession(null)
    setActivities([])
    setQuestions([])
    setResponses([])
    setReactions([])
    setLoaded(false)
    setConnected(false)
    const client = supabase
    if (!identity || !client) return
    let active = true,
      request = 0,
      subscribed = false
    const code = identity.code
    async function refresh() {
      const version = ++request
      try {
        const results = await Promise.all([
          client!
            .from("sessions")
            .select("code,unit,week,state")
            .eq("code", code)
            .single(),
          client!
            .from("activities")
            .select("*")
            .eq("session", code)
            .order("created_at"),
          client!
            .from("questions")
            .select("*")
            .eq("session", code)
            .order("created_at", { ascending: false }),
          client!
            .from("responses")
            .select("*")
            .eq("session", code)
            .order("created_at"),
          client!
            .from("reactions")
            .select("*")
            .eq("session", code)
            .order("created_at"),
        ])
        if (!active || version !== request) return
        if (results.some((r) => r.error)) throw new Error("Class unavailable")
        setSession(results[0].data as ClassRow)
        setActivities(results[1].data as TutorActivity[])
        setQuestions(results[2].data as QuestionRow[])
        setResponses(results[3].data as ResponseRow[])
        setReactions(results[4].data as ReactionRow[])
        setLoaded(true)
        setConnected(subscribed)
      } catch {
        if (active && version === request) setConnected(false)
      }
    }
    // A busy class sends many changes per second: merge them into one refresh every 400 ms.
    let refreshTimer = 0
    function queueRefresh() {
      if (refreshTimer) return
      refreshTimer = window.setTimeout(() => {
        refreshTimer = 0
        void refresh()
      }, 400)
    }
    // Subscribe before the snapshot, then refresh on SUBSCRIBED and reconnect:
    // a tutor update cannot fall into the initial fetch/subscription gap.
    const channel = client
      .channel(`student-${code}-${identity.clientId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "sessions",
          filter: `code=eq.${code}`,
        },
        (p) => {
          if (active && p.new && "code" in p.new) setSession(p.new as ClassRow)
        },
      )
    for (const table of ["activities", "questions", "responses", "reactions"]) {
      channel.on(
        "postgres_changes",
        { event: "*", schema: "public", table, filter: `session=eq.${code}` },
        () => {
          queueRefresh()
        },

      )
    }
    channel.subscribe((status) => {
      if (!active) return
      subscribed = status === "SUBSCRIBED"
      if (subscribed) void refresh()
      else setConnected(false)
    })
    void refresh()
    const interval = window.setInterval(refresh, 15000)
    const offline = () => setConnected(false)
    window.addEventListener("online", refresh)
    window.addEventListener("offline", offline)
    return () => {
      active = false
      window.clearTimeout(refreshTimer)
      request++
      window.clearInterval(interval)
      window.removeEventListener("online", refresh)
      window.removeEventListener("offline", offline)
      void client.removeChannel(channel)
    }
  }, [identity?.code, identity?.clientId])
  return {
    session,
    state: session?.state || {},
    activities,
    questions,
    responses,
    reactions,
    connected,
    loaded,
  }
}
