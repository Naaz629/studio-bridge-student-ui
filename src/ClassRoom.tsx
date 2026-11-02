import { DEMO_CLASS_CODE } from "./class-display"
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { createClassApi } from "./class-api"
import { useClassSession } from "./class-session"
import type { ClassIdentity } from "./class-types"
import { supabase } from "./supabase"
import "./classroom.css"

const storageKey = "studio-bridge-class"
function restore(): ClassIdentity | null {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || "null")
    return value &&
      /^[A-Z0-9]{4}$/.test(value.code) &&
      typeof value.name === "string" &&
      typeof value.anonymous === "boolean" &&
      typeof value.clientId === "string"
      ? value
      : null
  } catch {
    return null
  }
}
function useRoomValue(identity: ClassIdentity | null, leave: () => void, openJoin: () => void) {
  const live = useClassSession(identity)
  const [sendError, setSendError] = useState("")
  const activityId = live.state.activityId || null
  const api = useMemo(
    () => createClassApi(identity, activityId, setSendError),
    [identity, activityId],
  )
  // Event handlers doing uploads can check the latest tutor state after awaiting.
  const currentActivityId = useRef(activityId)
  currentActivityId.current = activityId
  const activeNames = new Set([...live.questions, ...live.reactions, ...live.responses]
    .filter(row => Date.parse(row.created_at) > Date.now() - 5 * 60 * 1000)
    .map(row => row.student).filter((name): name is string => !!name && name !== identity?.name))
  const activeStudents = activeNames.size + (identity ? 1 : 0)
  return { ...live, identity, api, leave, openJoin, sendError, currentActivityId, activeStudents }
}
type RoomValue = ReturnType<typeof useRoomValue>
const RoomContext = createContext<RoomValue | null>(null)
export function useClassroom() {
  const room = useContext(RoomContext)
  if (!room) throw new Error("Classroom provider missing")
  return room
}
function JoinedClass({
  identity,
  leave,
  openJoin,
  children,
}: {
  identity: ClassIdentity | null
  leave: () => void
  openJoin: () => void
  children: ReactNode
}) {
  const value = useRoomValue(identity, leave, openJoin)
  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>
}
export default function ClassRoom({ children }: { children: ReactNode }) {
  const [savedIdentity] = useState(restore)
  const [identity, setIdentity] = useState<ClassIdentity | null>(() => {
    const current = savedIdentity ? { ...savedIdentity, code: DEMO_CLASS_CODE } : { code: DEMO_CLASS_CODE, name: "Anonymous", anonymous: true, clientId: crypto.randomUUID() }
    try { localStorage.setItem(storageKey, JSON.stringify(current)) } catch { /* In-memory fallback. */ }
    return current
  })
  const [joinOpen, setJoinOpen] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const [name, setName] = useState(savedIdentity?.anonymous ? "" : savedIdentity?.name || "")
  const [anonymous, setAnonymous] = useState(savedIdentity?.anonymous || false)
  useEffect(() => {
    if (joinOpen && !dialog.current?.open) dialog.current?.showModal()
    else if (!joinOpen && dialog.current?.open) dialog.current?.close()
  }, [joinOpen])
  const [error, setError] = useState("")
  const [busy, setBusy] = useState(false)
  const joining = useRef(false)
  function leave() {
    try {
      localStorage.removeItem(storageKey)
    } catch {
      /* Local mode still works. */
    }
    setIdentity(null)
    setJoinOpen(false)
    setError("")
  }
  async function join() {
    if (joining.current) return
    if (!anonymous && !name.trim()) {
      setError("Enter your name or choose Anonymous.")
      return
    }
    joining.current = true
    setBusy(true)
    setError("")
    try {
      const next = {
        code: DEMO_CLASS_CODE,
        name: anonymous ? "Anonymous" : name.trim(),
        anonymous,
        clientId: identity?.clientId || savedIdentity?.clientId || crypto.randomUUID(),
      }
      try {
        localStorage.setItem(storageKey, JSON.stringify(next))
      } catch {
        /* Continue without persistence. */
      }
      setIdentity(next)
      setJoinOpen(false)
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Couldn’t join. Please try again.",
      )
    } finally {
      joining.current = false
      setBusy(false)
    }
  }
  return (
    <>
      <JoinedClass key={identity?.clientId || "demo"} identity={identity} leave={leave} openJoin={() => { setError(""); setJoinOpen(true) }}>
        {children}
      </JoinedClass>
      <dialog ref={dialog} className="class-join-modal" aria-labelledby="class-join-title"
        onCancel={event => { if (busy) event.preventDefault(); else setJoinOpen(false) }}
        onClose={() => setJoinOpen(false)}
        onClick={event => { if (event.target === event.currentTarget && !busy) setJoinOpen(false) }}>
      <section className="class-join-card">
        <button className="class-join-close" type="button" aria-label="Close join dialog" disabled={busy} onClick={() => setJoinOpen(false)}>×</button>
        <img
          className="class-join-logo"
          src="/assets/studio-bridge-logo.svg"
          alt="Studio Bridge"
        />
        <span className="eyebrow">YOUR STUDIO, TOGETHER</span>
        <h1 id="class-join-title">Your classroom name.</h1>
        <p>You’re joining the shared live classroom. Choose how classmates see you.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            void join()
          }}
        >
          <label htmlFor="student-name">Your name</label>
          <input
            id="student-name"
            autoComplete="given-name"
            maxLength={80}
            disabled={anonymous || busy}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="What should we call you?"
          />
          <label className="class-anonymous">
            <input
              type="checkbox"
              checked={anonymous}
              disabled={busy}
              onChange={(e) => setAnonymous(e.target.checked)}
            />{" "}
            Join as Anonymous
          </label>
          {error && (
            <p className="class-join-error" role="alert">
              {error}
            </p>
          )}
          {!supabase && (
            <p className="class-join-error">
              Not connected · live classes are unavailable.
            </p>
          )}
          <button
            className="extra-primary class-join-submit"
            disabled={busy || !supabase}
            type="submit"
          >
            {busy ? "Joining…" : "Save & connect"} <span aria-hidden="true">→</span>
          </button>
        </form>
        <button
          className="class-demo-link"
          disabled={busy}
          onClick={() => setJoinOpen(false)}
          type="button"
        >
          Continue in demo
        </button>
      </section>
      </dialog>
    </>
  )
}
export function ClassBadge() {
  const room = useClassroom()
  return (
    <div className="class-badge-row">
      <span className="class-code-chip">
        {room.identity ? "Live class" : "Demo"}
      </span>
      <span
        className="class-connection"
        role="status"
        title={room.sendError || undefined}
      >
        {room.identity && room.connected && !room.sendError
          ? "● Connected"
          : "○ Not connected"}
      </span>
      {room.identity && <><span className="class-presence"><span className="live-dot" /> {room.activeStudents} in class</span><button type="button" onClick={room.openJoin}>Your name</button></>}
      <button type="button" onClick={room.identity ? room.leave : room.openJoin}>
        {room.identity ? "Leave class" : "Join a class"}
      </button>
      {room.sendError && (
        <small className="class-send-note" role="status">
          {room.sendError}
        </small>
      )}
    </div>
  )
}
