import type { Entitlement } from "@/lib/entitlements"

/**
 * Locked offer. Payments are not live.
 * Free: 3 beginner modules, the Case File, 2 PDFs, 2 briefings.
 * Field Pack A$15 one-off. Full Library A$39 one-off.
 * Anything not listed as free or Field Pack is Full Library.
 */

export const FREE_MODULE_IDS = [
  "osint-fundamentals",
  "osint-methodology",
  "email-osint",
] as const

export const FIELD_PACK_MODULE_IDS = [
  "domain-investigations",
  "business-osint",
  "digital-identity-analysis",
  "people-profiling",
  "social-media-investigations",
  "telegram-osint",
  "breach-data-analysis",
  "osint-reporting",
] as const

export const FIELD_PACK_RESOURCE_IDS = [
  "osint-checklist",
  "search-operators",
  "people-profiling",
] as const

export interface PdfOffer {
  id: string
  file: string
  title: string
  tier: Entitlement
}

export const PDF_OFFERS: PdfOffer[] = [
  { id: "investigation-plan-template", file: "investigation-plan-template.pdf", title: "Investigation Plan Template", tier: "free" },
  { id: "source-evaluation-template", file: "source-evaluation-template.pdf", title: "Source Evaluation Template", tier: "free" },
  { id: "username-tracker-template", file: "username-tracker-template.pdf", title: "Username Tracker", tier: "field_pack" },
  { id: "social-media-investigation-template", file: "social-media-investigation-template.pdf", title: "Social Media Investigation Sheet", tier: "field_pack" },
  { id: "search-operator-cheatsheet", file: "search-operator-cheatsheet.pdf", title: "Search Operator Cheatsheet", tier: "field_pack" },
  { id: "osint-operations-checklist", file: "osint-operations-checklist.pdf", title: "OSINT Operations Checklist", tier: "field_pack" },
  { id: "osint-report-template", file: "osint-report-template.pdf", title: "OSINT Report Template", tier: "full_library" },
  { id: "digital-footprint-tracker", file: "digital-footprint-tracker.pdf", title: "Digital Footprint Tracker", tier: "full_library" },
  { id: "dark-web-monitor-log", file: "dark-web-monitor-log.pdf", title: "Dark Web Monitor Log", tier: "full_library" },
  { id: "geolocation-analysis-sheet", file: "geolocation-analysis-sheet.pdf", title: "Geolocation Analysis Sheet", tier: "full_library" },
]

export interface BriefingOffer {
  id: string
  title: string
  tier: Entitlement
  summary: string
}

/**
 * Short briefings named in the locked offer.
 * This branch does not include the production lesson bodies (those sit on
 * hotfix/email-capture-prod). These pages are the gate and the usage log,
 * and they do not run any search tool.
 */
export const BRIEFINGS: BriefingOffer[] = [
  {
    id: "sherlock",
    title: "Sherlock",
    tier: "free",
    summary:
      "A reading briefing on username search: what a hit means, why the same name is often a different person, and why this site does not run a username scan for you.",
  },
  {
    id: "reading-email-headers",
    title: "Reading Email Headers",
    tier: "free",
    summary:
      "A reading briefing on how to read an email header you already have: Received lines, authentication results, and what a header does not prove.",
  },
  {
    id: "holehe",
    title: "Holehe",
    tier: "full_library",
    summary: "A reading briefing on email-to-account checks. Included in the Full Library. Checkout is not live.",
  },
  {
    id: "maigret",
    title: "Maigret",
    tier: "full_library",
    summary: "A reading briefing on username correlation. Included in the Full Library. Checkout is not live.",
  },
  {
    id: "theharvester",
    title: "theHarvester",
    tier: "full_library",
    summary: "A reading briefing on public domain collection. Included in the Full Library. Checkout is not live.",
  },
  {
    id: "dnstwist",
    title: "dnstwist",
    tier: "full_library",
    summary: "A reading briefing on lookalike domains. Included in the Full Library. Checkout is not live.",
  },
  {
    id: "crt-sh",
    title: "crt.sh",
    tier: "full_library",
    summary: "A reading briefing on certificate transparency. Included in the Full Library. Checkout is not live.",
  },
  {
    id: "stix-taxii",
    title: "STIX/TAXII",
    tier: "full_library",
    summary: "A reading briefing on structured threat sharing. Included in the Full Library. Checkout is not live.",
  },
]

export function moduleTier(moduleId: string): Entitlement {
  if ((FREE_MODULE_IDS as readonly string[]).includes(moduleId)) return "free"
  if ((FIELD_PACK_MODULE_IDS as readonly string[]).includes(moduleId)) return "field_pack"
  return "full_library"
}

export function resourceTier(resourceId: string): Entitlement {
  if ((FIELD_PACK_RESOURCE_IDS as readonly string[]).includes(resourceId)) return "field_pack"
  return "full_library"
}

export function pdfById(id: string): PdfOffer | undefined {
  return PDF_OFFERS.find((pdf) => pdf.id === id)
}

export function briefingById(id: string): BriefingOffer | undefined {
  return BRIEFINGS.find((briefing) => briefing.id === id)
}

export function tierLabel(tier: Entitlement): string {
  if (tier === "free") return "Free"
  if (tier === "field_pack") return "Field Pack"
  return "Full Library"
}
