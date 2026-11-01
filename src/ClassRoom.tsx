import {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { createClassApi } from "./class-api"
import { findClass, useClassSession } from "./class-session"
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
function useRoomValue(identity: ClassIdentity | null, leave: () => void) {
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
  return { ...live, identity, api, leave, sendError, currentActivityId }
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
  children,
}: {
  identity: ClassIdentity | null
  leave: () => void
  children: ReactNode
}) {
  const value = useRoomValue(identity, leave)
  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>
}
export default function ClassRoom({ children }: { children: ReactNode }) {
  const [identity, setIdentity] = useState(restore)
  const [demo, setDemo] = useState(false)
  const [code, setCode] = useState("")
  const [name, setName] = useState("")
  const [anonymous, setAnonymous] = useState(false)
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
    setDemo(false)
    setError("")
  }
  async function join() {
    if (joining.current) return
    if (!/^[A-Z0-9]{4}$/i.test(code.trim())) {
      setError("Enter the four-character class code from your tutor.")
      return
    }
    if (!anonymous && !name.trim()) {
      setError("Enter your name or choose Anonymous.")
      return
    }
    joining.current = true
    setBusy(true)
    setError("")
    try {
      const row = await findClass(code.trim())
      const next = {
        code: row.code.toUpperCase(),
        name: anonymous ? "Anonymous" : name.trim(),
        anonymous,
        clientId: crypto.randomUUID(),
      }
      try {
        localStorage.setItem(storageKey, JSON.stringify(next))
      } catch {
        /* Continue without persistence. */
      }
      setIdentity(next)
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Couldn’t join. Please try again.",
      )
    } finally {
      joining.current = false
      setBusy(false)
    }
  }
  if (identity || demo)
    return (
      <JoinedClass
        key={identity?.clientId || "demo"}
        identity={identity}
        leave={leave}
      >
        {children}
      </JoinedClass>
    )
  return (
    <main className="class-join-page">
      <section className="class-join-card">
        <img
          className="class-join-logo"
          src="/assets/studio-bridge-logo.svg"
          alt="Studio Bridge"
        />
        <span className="eyebrow">YOUR STUDIO, TOGETHER</span>
        <h1>Join your class.</h1>
        <p>Bring your questions, ideas and work into the conversation.</p>
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
          <label htmlFor="class-code">Class code</label>
          <input
            id="class-code"
            className="class-code-input"
            maxLength={4}
            autoCapitalize="characters"
            autoComplete="off"
            spellCheck={false}
            value={code}
            disabled={busy}
            onChange={(e) =>
              setCode(e.target.value.replace(/[^a-z0-9]/gi, "").toUpperCase())
            }
            placeholder="K7QF"
            aria-describedby="class-code-hint"
          />
          <small id="class-code-hint">
            Ask your tutor for the four-character code.
          </small>
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
            {busy ? "Joining…" : "Join class"} <span aria-hidden="true">→</span>
          </button>
        </form>
        <button
          className="class-demo-link"
          onClick={() => setDemo(true)}
          type="button"
        >
          Explore the demo
        </button>
      </section>
    </main>
  )
}
export function ClassBadge() {
  const room = useClassroom()
  return (
    <div className="class-badge-row">
      <span className="class-code-chip">
        {room.identity ? `Class ${room.identity.code}` : "Demo"}
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
      <button type="button" onClick={room.leave}>
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
