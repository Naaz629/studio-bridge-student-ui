import { activityAnswer, activityTemplates, type ActivityRun } from "./activity-state"
import { useState } from "react"
import "./my-learning.css"

export type LearningEntry = {
  id: string
  kind: "Question" | "Response" | "Activity"
  title: string
  detail: string
  slide: number
  week: number
  completed?: boolean
  image?: string
}

export const initialLearningEntries: LearningEntry[] = [
  { id: "q6", kind: "Question", title: "How do I separate a pattern from an assumption?", detail: "Your question · Discussed in class", slide: 10, week: 6 },
  { id: "r6", kind: "Response", title: "A persona needs evidence, not just a backstory.", detail: "Your reply to Maya · 3 classmates found it helpful", slide: 8, week: 6 },
  { id: "q5", kind: "Question", title: "Can a note belong to more than one cluster?", detail: "Your question · Discussed in class", slide: 10, week: 5 },
  { id: "r5", kind: "Response", title: "We grouped by behaviour rather than interview question.", detail: "Your reply · 2 classmates found it helpful", slide: 10, week: 5 },
]

const weekTopics: Record<number, { title: string; outcome: string; concept: string }> = {
  6: { title: "Personas & reframing", outcome: "Use research evidence to represent user needs and reframe a design problem.", concept: "Evidence → Patterns → Persona → Problem framing" },
  5: { title: "Finding patterns", outcome: "Synthesise research observations into patterns and meaningful insights.", concept: "Observations → Affinity mapping → Insights" },
  4: { title: "Listening to people", outcome: "Ask open-ended questions to understand people’s experiences and needs.", concept: "Curiosity → Interviews → Research evidence" },
}

function LearningIcon({ kind }: { kind: string }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "Question" ? <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-2 2v-10a9.5 9.5 0 0 1 19-.5Z" />
      : kind === "Response" ? <><path d="m4 12 5 5L20 6" /><path d="M20 13v6H4V3h11" /></>
      : kind === "badge" ? <><circle cx="12" cy="9" r="6" /><path d="m8 14-2 8 6-3 6 3-2-8M10 9l1.5 1.5L14 7" /></>
      : <><rect x="4" y="3" width="16" height="18" rx="3" /><path d="M8 8h8M8 12h5M8 16h8" /></>}
  </svg>
}

export default function MyLearning({ entries, activities, onReviewSlide }: { entries: LearningEntry[]; activities: ActivityRun[]; onReviewSlide: (page: number) => void }) {
  const [week, setWeek] = useState(6)
  const [filter, setFilter] = useState("All")
  const [reflections, setReflections] = useState<Record<string, string>>(() => {
    try { return JSON.parse(localStorage.getItem("studio-bridge-reflections") || "{}") } catch { return {} }
  })
  const [saved, setSaved] = useState(false)
  const [badge, setBadge] = useState<string | null>(null)
  const additions = Math.max(0, entries.length - initialLearningEntries.length)
  const completedActivities = activities.filter(activity => activity.submitted).length
  const points = 112 + (additions + completedActivities) * 4
  const activityEntries: LearningEntry[] = activities.map(activity => ({
    id: `activity-${activity.id}`, kind: "Activity", title: activityTemplates[activity.kind].title,
    detail: activity.submitted ? `Your response · ${activityAnswer(activity)}` : activityTemplates[activity.kind].description,
    slide: activity.page, week: 6, completed: activity.submitted, image: activity.submitted ? activity.photo?.url : undefined,
  }))
  const replies = entries.filter(e => e.id.startsWith("live-response")).length
  const newQuestions = entries.filter(e => e.id.startsWith("live-question")).length
  const milestones = Math.min(12, 8 + completedActivities)
  const visible = [...entries, ...activityEntries].filter(e => e.week === week && (filter === "All" || e.kind === filter))
  const topic = weekTopics[week]
  const [draft, setDraft] = useState(reflections["6"] || "")
  function changeWeek(next: number) {
    setReflections(current => ({ ...current, [week]: draft }))
    setDraft(reflections[next] || "")
    setWeek(next)
    setSaved(false)
  }
  function saveReflection() {
    const next = { ...reflections, [week]: draft }
    setReflections(next)
    localStorage.setItem("studio-bridge-reflections", JSON.stringify(next))
    setSaved(true)
  }
  return <main className="learning-page">
    <header className="learning-intro">
      <div><div className="eyebrow">IDEA9106 · DESIGN THINKING</div><h1>My Learning</h1><p>A little curiosity, a clearer perspective. See how far you’ve come.</p></div>
      <span className="learning-term"><span className="live-dot" /> Week 6 of 12</span>
    </header>
    <div className="learning-columns">
      <div className="learning-overview">
        <section className="learning-card journey-card">
          <div className="learning-card-top"><h2>Your learning journey</h2><span className="learning-points">{points}<small> points</small><button type="button" className="points-help" aria-label="How to earn points" aria-expanded={badge === "points"} aria-controls="points-guide" onClick={() => setBadge(badge === "points" ? null : "points")}>i</button></span></div>
          {badge === "points" && <section className="learning-disclosure" id="points-guide" aria-label="How to earn points">
            <div className="points-guide-heading"><div><strong>How to earn points</strong><p>Little contributions add up.</p></div><span>YOUR LEARNING</span></div>
            <div className="points-guide-list">
              <div className="points-guide-row"><span className="points-guide-icon"><LearningIcon kind="Question" /></span><div><strong>Ask a question</strong><small>Share what you’re curious about in Live.</small></div><b>+4 <small>pts</small></b></div>
              <div className="points-guide-row"><span className="points-guide-icon response"><LearningIcon kind="Response" /></span><div><strong>Join a peer discussion</strong><small>Post a reply or share your perspective.</small></div><b>+4 <small>pts</small></b></div>
              <div className="points-guide-row"><span className="points-guide-icon activity"><LearningIcon kind="Activity" /></span><div><strong>Complete a class activity</strong><small>Submit your response to a slide activity.</small></div><b>+4 <small>pts</small></b></div>
            </div>
            <p className="points-guide-note">Points celebrate participation and don’t affect your grades. Each activity earns points once.</p>
          </section>}
          <p className="learning-card-description">Small steps, growing understanding.</p>
          <div className="journey-track" role="progressbar" aria-label="Learning milestones" aria-valuenow={milestones} aria-valuemin={0} aria-valuemax={12}><span style={{ width: `${milestones / 12 * 100}%` }} /></div>
          <div className="journey-labels"><strong>{milestones} milestones reached</strong><span>12 milestones</span></div>
          <div className="learning-stats">
            <div><strong>{3 + newQuestions}</strong><span>Questions asked</span></div><div><strong>{6 + replies}</strong><span>Peer replies</span></div><div><strong>{completedActivities} / {activities.length}</strong><span>Class activities</span></div>
          </div>
          <div className="badge-section"><h3>Your badges <span>2 earned</span></h3>
            <div className="learning-badges">
              {[["Helpful Peer", "Supporting classmates with useful replies.", "sage"], ["Curious Mind", "Asking thoughtful questions that open a discussion.", "lavender"]].map(([name, detail, tone]) =>
                <button type="button" key={name} className={`learning-badge ${tone}`} onClick={() => setBadge(badge === name ? null : name)} aria-expanded={badge === name}>
                  <span className="badge-medal"><LearningIcon kind="badge" /></span><span><strong>{name}</strong><small>{name === "Helpful Peer" ? "Learning together" : "Keep asking why"}</small></span>
                  {badge === name && <p>{detail}</p>}
                </button>)}
            </div>
          </div>
        </section>
        <section className="learning-card next-step">
          <div className="learning-card-top"><span className="eyebrow">AI Advice</span><LearningIcon kind="Activity" /></div>
          <h2>Try the concept in real life.</h2><p>Notice a frustrating everyday experience. What user need sits underneath it? Reframe it as a “How might we…” question.</p>
          <button type="button" onClick={() => onReviewSlide(15)}>Revisit problem framing <span aria-hidden="true">↗</span></button>
        </section>
        <section className="learning-card class-goal">
          <div className="learning-card-top"><h2>A shared class goal</h2><span className="learning-mini-tag">Together</span></div>
          <p>Help our studio reach <strong>100 useful answers.</strong></p>
          <div className="class-goal-progress"><progress value="72" max="100" aria-label="Class useful answers" /><strong>72<span> / 100</span></strong></div>
          <small>Every helpful reply makes learning a little easier for someone.</small>
        </section>
      </div>
      <div className="learning-week">
        <section className="learning-card weekly-activity">
          <div className="learning-card-top"><h2>Your activity</h2><label className="learning-week-picker"><span className="sr-only">Activity week</span><select value={week} onChange={e => changeWeek(Number(e.target.value))}>{[6, 5, 4].map(w => <option key={w} value={w}>Week {w}</option>)}</select></label></div>
          <p className="learning-card-description">{topic.title}</p>
          <div className="learning-filters" role="group" aria-label="Filter learning activity">{["All", "Question", "Response", "Activity"].map(f => <button type="button" key={f} aria-pressed={filter === f} className={filter === f ? "selected" : ""} onClick={() => setFilter(f)}>{f === "All" ? "All" : f === "Activity" ? "Activities" : f + "s"}</button>)}</div>
          <div className="learning-entry-list">
            {visible.map(entry => <article className="learning-entry" key={entry.id}>
              <span className={`learning-entry-icon ${entry.kind.toLowerCase()}`}><LearningIcon kind={entry.kind} /></span>
              <div><div className="learning-entry-meta"><small>{entry.kind}</small>{entry.kind === "Activity" && <span className={entry.completed ? "activity-record-status done" : "activity-record-status"}>{entry.completed ? "Submitted" : "To do"}</span>}</div><h3>{entry.title}</h3><p>{entry.detail}</p>{entry.image && <img className="learning-artefact-thumbnail" src={entry.image} alt="Your submitted group artefact" />}{week === 6 && <button type="button" onClick={() => onReviewSlide(entry.slide)}>{entry.kind === "Activity" ? entry.completed ? "View response" : "Open activity" : "View slide"} · Slide {entry.slide} <span aria-hidden="true">↗</span></button>}</div>
            </article>)}
            {!visible.length && <p className="learning-empty">No {filter.toLowerCase()}s recorded for this week yet.</p>}
          </div>
        </section>
        <section className="learning-card reflection-card">
          <div className="learning-card-top"><h2>Your take</h2><span className="learning-mini-tag">Week {week}</span></div>
          <p className="learning-card-description">Make the connection in your own words.</p>
          <div className="learning-outcome"><span className="eyebrow">LEARNING OUTCOME</span><p>{topic.outcome}</p><span className="concept-chain">{topic.concept}</span></div>
          <label htmlFor="learning-reflection">What changed in your understanding?</label>
          <textarea id="learning-reflection" value={draft} onChange={e => { setDraft(e.target.value); setSaved(false) }} placeholder="One thing I understand differently now is… I could apply this by…" />
          <div className="reflection-footer"><span role="status">{saved ? "Reflection saved on this device" : "Only visible to you"}</span><button type="button" disabled={!draft.trim()} onClick={saveReflection}>{saved ? "Saved ✓" : "Save reflection"}</button></div>
        </section>
      </div>
    </div>
  </main>
}
