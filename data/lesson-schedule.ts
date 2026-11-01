/**
 * Weekly lesson spotlight for the homepage.
 * Keep claims plain: no dates, counts, or "every Monday" promises we cannot keep.
 * Update `latestModuleId` when a lesson ships; set `nextBacklogTitle` from lesson-backlog.md.
 */
export type LessonSpotlight = {
  latestModuleId: string
  latestTitle: string
  latestHref: string
  nextTitle: string
  nextBlurb: string
}

/** Manual spotlight — bump when merging a new Consensus/backlog lesson. */
export const lessonSpotlight: LessonSpotlight = {
  latestModuleId: "hibp-breach-exposure",
  latestTitle: "HIBP: Check an Address You Control and Record the Breach Entry",
  latestHref: "/modules/hibp-breach-exposure",
  nextTitle: "Amass (passive only) (not written yet)",
  nextBlurb:
    "Attack-surface enumeration with -passive is next in the writing queue. Active modes stay out of scope. There is no Amass lesson on this site yet.",
}
