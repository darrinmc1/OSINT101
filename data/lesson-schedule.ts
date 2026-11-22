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
  latestModuleId: "exiftool-file-metadata",
  latestTitle: "ExifTool: Read the tags on a file you already have, then decide what to strip",
  latestHref: "/modules/exiftool-file-metadata",
  nextTitle: "Metagoofil (not written yet)",
  nextBlurb:
    "Public document search, and the metadata those documents carry, is next in the writing queue. The Australian Privacy Principles notes for publishing documents stay in that lesson. There is no Metagoofil lesson on this site yet.",
}
