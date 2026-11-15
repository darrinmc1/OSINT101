export type Entitlement = "free" | "field_pack" | "full_library"

export const ENTITLEMENTS: Entitlement[] = ["free", "field_pack", "full_library"]

const RANK: Record<Entitlement, number> = {
  free: 0,
  field_pack: 1,
  full_library: 2,
}

export function isEntitlement(value: unknown): value is Entitlement {
  return value === "free" || value === "field_pack" || value === "full_library"
}

/** Higher packs include the lower ones. Missing or unknown values stay free. */
export function parseEntitlement(value: unknown): Entitlement {
  return isEntitlement(value) ? value : "free"
}

export function entitlementCovers(have: Entitlement, need: Entitlement): boolean {
  return RANK[have] >= RANK[need]
}
