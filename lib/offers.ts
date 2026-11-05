/**
 * Server allowlist of Checkout SKUs. The client may send a sku. It must never
 * send a Stripe price id. Lookup keys are built here as
 * `${STRIPE_SITE_KEY}_${suffix}` and resolved with prices.list({ lookup_keys }).
 *
 * Amounts are the approved USD prices. Do not add or change them here.
 * Default lookup keys:
 *   osint101_founding_m_usd5
 *   osint101_founding_y_usd48
 *   osint101_analyst_m_usd19
 *   osint101_analyst_y_usd180
 *
 * The unused siteConfig "standard" tier ($9 / $90) is not a Checkout product.
 */

export const STATEMENT_DESCRIPTOR_SUFFIX = "OSINT101"
export const CHECKOUT_CURRENCY = "usd"

export type CheckoutSku = "founding_m" | "founding_y" | "analyst_m" | "analyst_y"
export type CheckoutMode = "subscription"
export type BillingInterval = "month" | "year"

export interface CheckoutOffer {
  sku: CheckoutSku
  /** Appended after `${siteKey}_`. */
  lookupKeySuffix: string
  mode: CheckoutMode
  interval: BillingInterval
  /** entitlements.product_id, linked to the Clerk user id. */
  entitlementId: string
  /** Plan family. Monthly and yearly are separate entitlement rows. */
  plan: "founding" | "analyst"
  /** USD dollars. Stripe unit_amount must equal this × 100, currency usd. */
  priceUsd: number
  /** Button and page label, e.g. "$5/mo" or "$48/yr". */
  priceLabel: string
  /** Shown on the Stripe subscription. */
  statementDescription: string
  /**
   * Per-product gate. False keeps Buy as "Coming soon" and POST /api/checkout
   * returns 503 even when both Stripe flags are true.
   *
   * All four stay false: the lesson text is in the repo, but a purchase does
   * not yet deliver a distinct file or an entitlement-gated experience.
   * Advanced Case File access still follows sign-in. Do not flip these until
   * that gate reads the entitlement row.
   */
  available: boolean
}

export const CHECKOUT_OFFERS: Record<CheckoutSku, CheckoutOffer> = {
  founding_m: {
    sku: "founding_m",
    lookupKeySuffix: "founding_m_usd5",
    mode: "subscription",
    interval: "month",
    entitlementId: "founding_m",
    plan: "founding",
    priceUsd: 5,
    priceLabel: "$5/mo",
    statementDescription: "OSINT101 Founding",
    available: false,
  },
  founding_y: {
    sku: "founding_y",
    lookupKeySuffix: "founding_y_usd48",
    mode: "subscription",
    interval: "year",
    entitlementId: "founding_y",
    plan: "founding",
    priceUsd: 48,
    priceLabel: "$48/yr",
    statementDescription: "OSINT101 Founding",
    available: false,
  },
  analyst_m: {
    sku: "analyst_m",
    lookupKeySuffix: "analyst_m_usd19",
    mode: "subscription",
    interval: "month",
    entitlementId: "analyst_m",
    plan: "analyst",
    priceUsd: 19,
    priceLabel: "$19/mo",
    statementDescription: "OSINT101 Analyst",
    available: false,
  },
  analyst_y: {
    sku: "analyst_y",
    lookupKeySuffix: "analyst_y_usd180",
    mode: "subscription",
    interval: "year",
    entitlementId: "analyst_y",
    plan: "analyst",
    priceUsd: 180,
    priceLabel: "$180/yr",
    statementDescription: "OSINT101 Analyst",
    available: false,
  },
}

const SKUS = new Set<string>(Object.keys(CHECKOUT_OFFERS))

export function offerFromSku(sku: unknown): CheckoutOffer | null {
  if (typeof sku !== "string" || !SKUS.has(sku)) return null
  return CHECKOUT_OFFERS[sku as CheckoutSku]
}

/** Site prefix for lookup keys. Not a secret. Defaults to osint101. */
export function stripeSiteKey(): string {
  const key = process.env.STRIPE_SITE_KEY?.trim()
  if (key && /^[a-z0-9_-]+$/i.test(key)) return key
  return "osint101"
}

export function lookupKeyFor(offer: CheckoutOffer, site = stripeSiteKey()): string {
  return `${site}_${offer.lookupKeySuffix}`
}

/**
 * Client flag. Inlined at build time, so changing it needs a redeploy.
 * Anything other than the string "true" (including unset) leaves Buy disabled.
 */
export function publicStripeEnabled(): boolean {
  return process.env.NEXT_PUBLIC_STRIPE_ENABLED === "true"
}

/** True only when the client flag is on and this product is marked available. */
export function offerIsPurchasable(offer: CheckoutOffer): boolean {
  return publicStripeEnabled() && offer.available
}
