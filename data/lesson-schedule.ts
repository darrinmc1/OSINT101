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
  latestModuleId: "findme-username-simple",
  latestTitle: "FindMe: The Simple Username CLI (And When to Stop Collecting Tools)",
  latestHref: "/modules/findme-username-simple",
  nextTitle: "theHarvester",
  nextBlurb:
    "Passive email and host collection from search engines and APIs — next up in the backlog.",
}
