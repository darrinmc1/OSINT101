/**
 * Limited launch offer for waitlist members and new buyers.
 * 50% off the first billing period only. The Stripe coupon itself must be
 * created with duration "once" — this module never creates Stripe objects.
 *
 * LAUNCH_OFFER_ENDS is an ISO date (YYYY-MM-DD). The offer is active through
 * the end of that UTC date, then the label hides and checkout stops attaching
 * the coupon. Default end date: 2026-12-18.
 *
 * STRIPE_LAUNCH_COUPON_ID is a coupon id, or a promotion code id (promo_…).
 * Stripe cannot change redeem_by after creation, so extending the offer means
 * a new coupon or promotion code plus a new LAUNCH_OFFER_ENDS value.
 */

export const DEFAULT_LAUNCH_OFFER_ENDS = "2026-12-18"

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const

export function launchOfferEndsOn(): string {
  const raw = process.env.LAUNCH_OFFER_ENDS?.trim()
  if (!raw || !/^\d{4}-\d{2}-\d{2}$/.test(raw)) return DEFAULT_LAUNCH_OFFER_ENDS
  const [year, month, day] = raw.split("-").map(Number)
  const parsed = new Date(Date.UTC(year, month - 1, day))
  if (
    parsed.getUTCFullYear() !== year ||
    parsed.getUTCMonth() !== month - 1 ||
    parsed.getUTCDate() !== day
  ) {
    return DEFAULT_LAUNCH_OFFER_ENDS
  }
  return raw
}

/** Inclusive of the end date. Compared as UTC calendar dates. */
export function isLaunchOfferActive(now = new Date()): boolean {
  const today = now.toISOString().slice(0, 10)
  return today <= launchOfferEndsOn()
}

/**
 * Visible label, or null once the offer has ended.
 * The default date renders "Launch offer: 50% off until 18 Dec".
 */
export function launchOfferLabel(now = new Date()): string | null {
  if (!isLaunchOfferActive(now)) return null
  const [year, month, day] = launchOfferEndsOn().split("-").map(Number)
  const monthName = MONTHS[month - 1]
  const when = year === 2026 ? `${day} ${monthName}` : `${day} ${monthName} ${year}`
  return `Launch offer: 50% off until ${when}`
}

export type LaunchOfferDiscount =
  | { coupon: string }
  | { promotion_code: string }

/**
 * Server-side Checkout discount while the offer is active and an id is set.
 * A value starting with promo_ is a promotion code id. Anything else is a coupon id.
 * Returns null after the end date, or when the env id is unset — checkout then
 * runs at the list price.
 */
export function launchOfferDiscount(now = new Date()): LaunchOfferDiscount | null {
  if (!isLaunchOfferActive(now)) return null
  const id = process.env.STRIPE_LAUNCH_COUPON_ID?.trim()
  if (!id) return null
  if (id.startsWith("promo_")) return { promotion_code: id }
  return { coupon: id }
}
