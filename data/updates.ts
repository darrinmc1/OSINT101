// =============================================================================
// WHAT'S NEW & UPDATED
// Homepage cards. Only link a page that exists and matches the title.
// Skip auto-generated "Refreshed:" blurbs: they pointed at the wrong routes.
// =============================================================================

export interface SiteUpdate {
  id: string
  title: string
  description: string
  date: string
  kind: "new" | "updated"
  href: string
}

export const ALL_UPDATES: SiteUpdate[] = [
  {
    id: "core-modules-2026-10-22",
    title: "Core tracks, written out",
    description:
      "The 19 longer modules now have worked steps, an exercise, and a stated legal line. Start with the intelligence cycle.",
    date: "2026-10-22",
    kind: "updated",
    href: "/modules/osint-fundamentals",
  },
  {
    id: "tool-lessons-2026-10-19",
    title: "Twelve tool briefings",
    description:
      "Sherlock, Holehe, Maigret, and the rest. Own accounts only. Holehe does not notify the address. Numint stays offline.",
    date: "2026-10-19",
    kind: "new",
    href: "/modules/sherlock-username-search",
  },
  {
    id: "findme-lesson-2026-10-19",
    title: "FindMe: when to stop collecting tools",
    description:
      "Run one plain username search on your own handle, then retire a redundant checker instead of installing another.",
    date: "2026-10-19",
    kind: "new",
    href: "/modules/findme-username-simple",
  },
  {
    id: "case-file-planner",
    title: "Case File Planner",
    description:
      "Paste a collection question and get a cited plan. It does not collect anything for you. Foundations are free to read.",
    date: "2026-08-13",
    kind: "new",
    href: "/case-file",
  },
  {
    id: "worksheet-pdfs",
    title: "Blank worksheet PDFs",
    description:
      "Investigation plan, source evaluation, report, and a few specialist sheets. Forms, not filled case studies.",
    date: "2026-07-25",
    kind: "new",
    href: "/downloads",
  },
]

export const latestUpdates = ALL_UPDATES.slice(0, 5)
