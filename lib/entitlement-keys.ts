/**
 * Empire HQ sites share one Supabase `public.entitlements` table, so every
 * stored product_id is namespaced as `<STRIPE_SITE_KEY>:<sku>`
 * (for example `abcofcyber:pro`). Writes always store the prefixed id and
 * reads only return this site's rows, with product_id mapped back to the
 * bare sku so the rest of the app keeps comparing plain skus.
 */

export const ENTITLEMENT_SEPARATOR = ":"

export function entitlementPrefix(siteKey: string): string {
  const key = siteKey.trim()
  if (!key) throw new Error("entitlements: empty site key")
  return `${key}${ENTITLEMENT_SEPARATOR}`
}

/** `<site>:<sku>`. An id that already carries this site's prefix is kept as is. */
export function toStoredProductId(sku: string, siteKey: string): string {
  const prefix = entitlementPrefix(siteKey)
  if (sku.startsWith(prefix)) return sku
  return `${prefix}${sku}`
}

/** The bare sku for this site's rows; null for another site's or an unprefixed row. */
export function skuFromStoredProductId(stored: string, siteKey: string): string | null {
  const prefix = entitlementPrefix(siteKey)
  if (typeof stored !== "string" || !stored.startsWith(prefix)) return null
  const sku = stored.slice(prefix.length)
  return sku ? sku : null
}

/** SQL LIKE pattern for this site's rows. Escapes LIKE wildcards in the key (`_` is allowed in site keys). */
export function siteProductIdPattern(siteKey: string): string {
  return `${entitlementPrefix(siteKey).replace(/[\\%_]/g, (c) => `\\${c}`)}%`
}

/** Keeps only this site's rows and maps product_id back to the bare sku. */
export function scopeToSite<T extends { product_id: string }>(rows: readonly T[], siteKey: string): T[] {
  const out: T[] = []
  for (const row of rows) {
    const sku = skuFromStoredProductId(row.product_id, siteKey)
    if (sku !== null) out.push({ ...row, product_id: sku })
  }
  return out
}
