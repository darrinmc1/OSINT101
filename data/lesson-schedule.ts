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
  latestModuleId: "theharvester-email-hosts",
  latestTitle: "theHarvester: Collect Public Emails and Hosts, Then Sort the Noise",
  latestHref: "/modules/theharvester-email-hosts",
  nextTitle: "HIBP (API) (not written yet)",
  nextBlurb:
    "Breach exposure checks on an email you own are next in the writing queue. There is no HIBP lesson on this site yet.",
}
