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
  latestModuleId: "amass-passive-enum",
  latestTitle: "Amass: Collect Published Names for a Domain You Operate, and Leave Active Mode Off",
  latestHref: "/modules/amass-passive-enum",
  nextTitle: "subfinder (not written yet)",
  nextBlurb:
    "ProjectDiscovery passive subdomain discovery is next in the writing queue. Chaining those names into dnsx stays a separate decision. There is no subfinder lesson on this site yet.",
}
