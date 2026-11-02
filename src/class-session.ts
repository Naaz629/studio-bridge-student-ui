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
    async function readRows(table: string) {
      const data: unknown[] = []
      for (let from = 0; ; from += 1000) {
        const page = await client!.from(table).select("*").eq("session", code).order("created_at", { ascending: table !== "questions" }).order("id").range(from, from + 999)
        if (page.error) throw page.error
        data.push(...page.data)
        if (page.data.length < 1000) return { data, error: null }
      }
    }
    async function refresh() {
      const version = ++request
      try {
        const results = await Promise.all([
          client!
            .from("sessions")
            .select("code,unit,week,state")
            .eq("code", code)
            .single(),
          readRows("activities"), readRows("questions"), readRows("responses"), readRows("reactions"),
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
          if (active && p.new && "code" in p.new) { request++; setSession(p.new as ClassRow); scheduleRefresh() }
        },
      )
    let refreshTimer = 0
    function scheduleRefresh() {
      window.clearTimeout(refreshTimer)
      refreshTimer = window.setTimeout(() => { if (active) void refresh() }, 80)
    }
    for (const table of ["activities", "questions", "responses", "reactions"]) {
      channel.on(
        "postgres_changes",
        { event: "*", schema: "public", table, filter: `session=eq.${code}` },
        () => {
          scheduleRefresh()
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
      request++
      window.clearInterval(interval)
      window.clearTimeout(refreshTimer)
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
