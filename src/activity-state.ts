export type ActivityKind = "choice" | "rating" | "discussion" | "artefact"

export type ActivityRun = {
  id: number
  page: number
  kind: ActivityKind
  answer: number | null
  submitted: boolean
  cardCounts?: number[]
  photo?: { url: string; name: string; group: string; caption: string }
}

export const activityTemplates = {
  choice: {
    label: "Multiple choice",
    title: "What makes a useful persona?",
    description: "Think about the evidence behind the people you design for.",
    options: [
      "Patterns grounded in research with real users",
      "A detailed description of your ideal customer",
      "Assumptions based on age and demographics",
      "A fictional character that everyone agrees on",
    ],
  },
  discussion: { label: "Discussion", title: "Discuss with your peers.", description: "Use your cards to share what you think.", options: ["Agree", "Disagree", "Take a turn", "Clarify", "Share an idea"] },
  artefact: { label: "Group artefact", title: "Show what your group made.", description: "Capture your persona, reframed brief or a work-in-progress sketch.", options: [] },
  rating: {
    label: "Confidence check",
    title: "How confident are you with reframing?",
    description:
      "How ready do you feel to turn a research insight into a useful problem statement?",
    options: [],
  },
} satisfies Record<ActivityKind, {
  label: string
  title: string
  description: string
  options: string[]
}>

export const initialActivities: ActivityRun[] = [
  { id: 1, page: 3, kind: "choice", answer: null, submitted: false },
  { id: 2, page: 5, kind: "rating", answer: null, submitted: false },
  { id: 3, page: 7, kind: "discussion", answer: null, submitted: false },
  { id: 4, page: 9, kind: "artefact", answer: null, submitted: false },
]

export type ActivityAction = {
  type: "select"
  id: number
  answer: number
} | { type: "submit"; id: number } | { type: "play"; id: number; card: number } | { type: "photo"; id: number; photo: NonNullable<ActivityRun["photo"]> }

export function activityReducer(
  state: ActivityRun[],
  action: ActivityAction,
): ActivityRun[] {
  return state.map((run) => {
    if (run.id !== action.id) return run
    if (action.type === "play") {
      if (run.kind !== "discussion" || !Number.isInteger(action.card) || action.card < 0 || action.card > 4) return run
      const counts = [...(run.cardCounts || [0,0,0,0,0])]; counts[action.card]++
      return { ...run, answer: action.card, submitted: true, cardCounts: counts }
    }
    if (run.submitted) return run
    if (action.type === "photo") return run.kind === "artefact" ? { ...run, photo: action.photo } : run
    if (action.type === "submit") {
      return (run.kind === "artefact" ? !run.photo : run.answer === null) ? run : { ...run, submitted: true }
    }
    const min = run.kind === "rating" ? 1 : 0
    const max =
      run.kind === "rating" ? 5 : activityTemplates.choice.options.length - 1
    return Number.isInteger(action.answer) &&
      action.answer >= min &&
      action.answer <= max
      ? { ...run, answer: action.answer }
      : run
  })
}

export function activityAnswer(run: ActivityRun): string {
  if (run.kind === "artefact") return run.photo ? [run.photo.group, run.photo.name, run.photo.caption].filter(Boolean).join(" · ") : "No photo submitted"
  if (run.kind === "discussion") return run.submitted ? `${(run.cardCounts || []).reduce((a,b) => a+b,0)} cards played · Last card: ${activityTemplates.discussion.options[run.answer || 0]}` : "No cards played yet"
  if (run.answer === null) return "No response"
  return run.kind === "rating"
    ? `${run.answer} / 5`
    : activityTemplates.choice.options[run.answer]
}
