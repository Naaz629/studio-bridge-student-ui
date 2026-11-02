import { SharedText } from "./ClassResults"
import { displayStudent } from "./class-display"
import { useReducer, useRef, useState } from "react"
import { useClassroom } from "./ClassRoom"
import {
  initialPeerDiscussions,
  peerDiscussionReducer,
} from "./peer-discussion"

export default function LivePeers({
  activityId,
  q,
  expanded = false,
}: {
  activityId: string
  q: number
  expanded?: boolean
}) {
  const room = useClassroom()
  const [discussion, dispatch] = useReducer(peerDiscussionReducer, {
    1: { ...initialPeerDiscussions[2], messages: [] },
  })
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  const pending = useRef(false)
  const retryId = useRef<string | null>(null)
  const rows = room.responses.filter(
    (row) => row.activity_id === activityId && row.kind === "peer_reply" && (row.payload.q === undefined || row.payload.q === q),
  )
  async function post() {
    const text = discussion[1].draft.trim()
    if (!text || pending.current) return
    pending.current = true
    setBusy(true)
    const id = retryId.current || crypto.randomUUID()
    retryId.current = id
    try {
      const result = await room.api.submitResponse({
        id,
        activityId,
        kind: "peer_reply",
        payload: { q, parentId: discussion[1].replyTo, text },
      })
      if (result.error) {
        setError(result.error)
        return
      }
      dispatch({ type: "post", activityId: 1, id })
      setError("")
      retryId.current = null
    } finally {
      pending.current = false
      setBusy(false)
    }
  }
  return (
    <section className="live-peers" aria-label="Peer discussion">
      <h4>Replies between students</h4>
      {rows.map((row) => (
        <article key={row.id}>
          <strong>{displayStudent(row.student, room.identity, row.payload.clientId)}</strong>
          <SharedText text={String(row.payload.text || "")} english={typeof row.payload.text_en === "string" ? row.payload.text_en : undefined} />
          <button
            type="button"
            onClick={() =>
              dispatch({ type: "reply", activityId: 1, peerId: row.id })
            }
          >
            Reply
          </button>
        </article>
      ))}
      {!rows.length && <p>Be the first to share your thinking.</p>}
      {discussion[1].replyTo && (
        <small>
          Replying to a classmate{" "}
          <button
            type="button"
            onClick={() =>
              dispatch({ type: "reply", activityId: 1, peerId: null })
            }
          >
            Cancel
          </button>
        </small>
      )}
      <details open={expanded || !!discussion[1].replyTo || undefined}><summary>Write a reply</summary>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          void post()
        }}
      >
        <textarea
          aria-label="Reply to classmates"
          value={discussion[1].draft}
          disabled={busy}
          placeholder="Share your thinking with classmates…"
          onChange={(e) => {
            dispatch({ type: "draft", activityId: 1, text: e.target.value })
            retryId.current = null
          }}
        />
        <button
          className="extra-primary"
          type="submit"
          disabled={busy || !discussion[1].draft.trim()}
        >
          {busy ? "Sending…" : "Send reply"}
        </button>
      </form>
      </details>
      {error && <small role="status">{error}</small>}
    </section>
  )
}
