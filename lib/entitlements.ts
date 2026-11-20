/**
 * Stored account entitlement. Nothing in this app sets a paid value:
 * there is no checkout. A missing or unknown value stays free.
 *
 * base: the A$9/month lesson archive
 * download_pack: the A$9 one-off worksheets
 * field_collection: the A$19 one-off specialist lessons
 */
export type Entitlement = "free" | "base" | "download_pack" | "field_collection"

export type AccessNeed = "free" | "base" | "download_pack" | "field_collection"

export const ENTITLEMENTS: Entitlement[] = ["free", "base", "download_pack", "field_collection"]

export function isEntitlement(value: unknown): value is Entitlement {
  return (
    value === "free" ||
    value === "base" ||
    value === "download_pack" ||
    value === "field_collection"
  )
}

export function parseEntitlement(value: unknown): Entitlement {
  return isEntitlement(value) ? value : "free"
}

/** Paid needs stay closed unless the stored row covers them. Free always covers free. */
export function entitlementCovers(have: Entitlement, need: AccessNeed): boolean {
  if (need === "free") return true
  if (need === "download_pack") return have === "download_pack"
  if (need === "field_collection") return have === "field_collection" || have === "base"
  return have === "base"
}
