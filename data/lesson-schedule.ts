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
  latestModuleId: "subfinder-passive-enum",
  latestTitle: "subfinder: Collect Published Subdomains for a Domain You Operate",
  latestHref: "/modules/subfinder-passive-enum",
  nextTitle: "ExifTool (not written yet)",
  nextBlurb:
    "Reading metadata on files you already have is next in the writing queue. Geolocation ethics, and whether you strip a tag or keep it, stay in that lesson. There is no ExifTool lesson on this site yet.",
}
