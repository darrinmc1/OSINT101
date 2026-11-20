import type { AccessNeed } from "@/lib/entitlements"
import { priceMap } from "@/lib/pricing"

/**
 * What a free account opens, and what stays closed until an entitlement is
 * stored. Checkout does not set entitlements.
 *
 * Free matches the live price map: Case File Planner, OSINT Fundamentals,
 * and the Investigation Plan Template.
 */

export const FREE_MODULE_IDS = ["osint-fundamentals"] as const

export const FIELD_COLLECTION_MODULE_IDS = [
  "domain-investigations",
  "business-osint",
  "digital-identity-analysis",
  "people-profiling",
  "social-media-investigations",
  "telegram-osint",
  "breach-data-analysis",
  "osint-reporting",
] as const

export const FIELD_COLLECTION_RESOURCE_IDS = [
  "osint-checklist",
  "search-operators",
  "people-profiling",
] as const

export interface PdfOffer {
  id: string
  file: string
  title: string
  tier: AccessNeed
}

export const PDF_OFFERS: PdfOffer[] = [
  { id: "investigation-plan-template", file: "investigation-plan-template.pdf", title: "Investigation Plan Template", tier: "free" },
  { id: "source-evaluation-template", file: "source-evaluation-template.pdf", title: "Source Evaluation Template", tier: "download_pack" },
  { id: "username-tracker-template", file: "username-tracker-template.pdf", title: "Username Tracker", tier: "download_pack" },
  { id: "social-media-investigation-template", file: "social-media-investigation-template.pdf", title: "Social Media Investigation Sheet", tier: "download_pack" },
  { id: "search-operator-cheatsheet", file: "search-operator-cheatsheet.pdf", title: "Search Operator Cheatsheet", tier: "download_pack" },
  { id: "osint-operations-checklist", file: "osint-operations-checklist.pdf", title: "OSINT Operations Checklist", tier: "download_pack" },
  { id: "osint-report-template", file: "osint-report-template.pdf", title: "OSINT Report Template", tier: "download_pack" },
  { id: "digital-footprint-tracker", file: "digital-footprint-tracker.pdf", title: "Digital Footprint Tracker", tier: "download_pack" },
  { id: "dark-web-monitor-log", file: "dark-web-monitor-log.pdf", title: "Dark Web Monitor Log", tier: "download_pack" },
  { id: "geolocation-analysis-sheet", file: "geolocation-analysis-sheet.pdf", title: "Geolocation Analysis Sheet", tier: "download_pack" },
]

export function moduleTier(moduleId: string): AccessNeed {
  if ((FREE_MODULE_IDS as readonly string[]).includes(moduleId)) return "free"
  if ((FIELD_COLLECTION_MODULE_IDS as readonly string[]).includes(moduleId)) return "field_collection"
  return "base"
}

export function resourceTier(resourceId: string): AccessNeed {
  if ((FIELD_COLLECTION_RESOURCE_IDS as readonly string[]).includes(resourceId)) return "field_collection"
  return "base"
}

export function pdfById(id: string): PdfOffer | undefined {
  return PDF_OFFERS.find((pdf) => pdf.id === id)
}

export function tierLabel(tier: AccessNeed): string {
  if (tier === "free") return "Free"
  if (tier === "base") return "Base plan"
  if (tier === "download_pack") return "Download pack"
  return "Field collection"
}

export function tierPriceLabel(tier: AccessNeed): string {
  if (tier === "free") return "A$0"
  if (tier === "base") return `A$${priceMap.plan.priceMonthlyAud}/month inc GST`
  if (tier === "download_pack") {
    const pack = priceMap.packs.find((item) => item.id === "download-pack")
    return `A$${pack?.priceAud ?? 9} one-off`
  }
  const pack = priceMap.packs.find((item) => item.id === "field-collection")
  return `A$${pack?.priceAud ?? 19} one-off`
}
