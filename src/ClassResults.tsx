import { useState } from "react"
import { useClassroom } from "./ClassRoom"
import { displayStudent, ownResponse } from "./class-display"
import type { ConceptQuestion, ResponseRow } from "./class-types"

export function SharedText({ text, english }: { text: string; english?: string }) {
  const [original, setOriginal] = useState(false)
  return <><p>{english || text}</p>{english && english !== text && <div className="question-translation-info"><span>Translated from Chinese</span><button type="button" onClick={() => setOriginal(!original)}>{original ? "Hide original" : "View original"}</button></div>}{original && <p lang="zh-CN" className="shared-original">{text}</p>}</>
}
export function ResponseList({ rows, title }: { rows: ResponseRow[]; title: string }) {
  const room = useClassroom()
  const [all, setAll] = useState(false)
  const others = rows.filter(row => !ownResponse(row, room.identity)).slice().reverse()
  return <section className="class-results" aria-label={title}><h4>{title} <small>{others.length}</small></h4>
    {others.length ? (all ? others : others.slice(0,3)).map(row => <article className="class-response" key={row.id}><strong>{displayStudent(row.student, room.identity, row.payload.clientId)}</strong><SharedText text={String(row.payload.text || "")} english={typeof row.payload.text_en === "string" ? row.payload.text_en : undefined} /></article>) : <p>Classmates’ responses will appear here.</p>}
    {others.length > 3 && <button className="class-results-more" type="button" onClick={() => setAll(!all)}>{all ? "Show fewer" : `View all ${others.length}`}</button>}
  </section>
}
export default function ClassResults({ activityId, q, question, reflection = false, answer }: { activityId: string; q: number; question: ConceptQuestion; reflection?: boolean; answer: unknown }) {
  const room = useClassroom()
  const rows = room.responses.filter(row => row.activity_id === activityId && (reflection ? row.kind === "reflection" : row.payload.q === q))
  if (question.type === "mc") {
    const counts = (question.options || []).map((_, index) => rows.filter(row => row.kind === "choice" && row.payload.answer === index).length)
    const total = counts.reduce((sum,n) => sum+n,0)
    return <section className="class-results" aria-label="Class results"><h4>Class results <small>{total} responses</small></h4>{question.options?.map((option,index) => <div className="class-result-bar" key={index}><div><span>{String.fromCharCode(65+index)} · {option.t}{answer === index ? " · Your answer" : ""}</span><b>{total ? Math.round(counts[index]/total*100) : 0}%</b></div><progress aria-label={option.t} value={counts[index]} max={total || 1} /><small>{counts[index]} responses</small></div>)}</section>
  }
  if (question.type === "scale") {
    const values = rows.filter(row => row.kind === "rating" && typeof row.payload.answer === "number" && row.payload.answer >= 1 && row.payload.answer <=5).map(row => Number(row.payload.answer))
    return <section className="class-results" aria-label="Class average"><h4>Class average <small>{values.length} responses</small></h4><strong className="class-average">{values.length ? (values.reduce((sum,n) => sum+n,0)/values.length).toFixed(1) : "—"}<small> / 5</small></strong><p>Your answer: {String(answer)} / 5</p></section>
  }
  return <><div className="class-own-answer"><small>Your response</small><p>{String(answer)}</p></div><ResponseList rows={rows.filter(row => row.kind === (reflection ? "reflection" : "open"))} title={reflection ? "Classmates’ reflections" : "Classmates’ answers"} /></>
}
export function ArtefactGallery({ activityId }: { activityId: string }) {
  const room = useClassroom()
  const rows = room.responses.filter(row => row.activity_id === activityId && row.kind === "artefact" && !ownResponse(row,room.identity) && typeof row.payload.url === "string" && /^https?:\/\//.test(row.payload.url)).slice().reverse()
  return <section className="class-artefact-gallery" aria-label="Class artefacts"><h3>Made by your classmates</h3>{!rows.length && <p>Classmates’ artefacts will appear here.</p>}<div>{rows.map(row => <figure key={row.id}><img src={String(row.payload.url)} alt={String(row.payload.name || "Classmate’s artefact")} loading="lazy" /><figcaption><strong>{displayStudent(row.student,room.identity,row.payload.clientId)}</strong>{row.team && <small>{row.team}</small>}<p>{String(row.payload.caption || "")}</p></figcaption></figure>)}</div></section>
}
