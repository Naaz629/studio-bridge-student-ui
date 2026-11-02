import type { ActivityKind } from "./activity-state"
export type LessonPage = { kind: "slide"; slide: number } | { kind: "activity"; activityKind: ActivityKind; afterSlide: number }
const practiceAfter: Partial<Record<number, ActivityKind>> = { 2: "choice", 3: "rating", 4: "discussion", 5: "artefact" }
export const lessonPages: LessonPage[] = Array.from({ length: 19 }, (_, index) => {
  const slide = index + 1
  const pages: LessonPage[] = [{ kind: "slide", slide }]
  const activityKind = practiceAfter[slide]
  if (activityKind) pages.push({ kind: "activity", activityKind, afterSlide: slide })
  return pages
}).flat()
export function pageForSlide(slide: number) {
  const safe = Math.max(1, Math.min(19, Math.trunc(slide) || 1))
  return lessonPages.findIndex(page => page.kind === "slide" && page.slide === safe) + 1
}
export function sourceSlideForPage(page: number) {
  const item = lessonPages[Math.max(0, Math.min(lessonPages.length - 1, page - 1))]
  return item.kind === "slide" ? item.slide : item.afterSlide
}
