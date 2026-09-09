/**
 * Card checkout is parked. Waitlist is the live CTA.
 *
 * Flip-ready: set NEXT_PUBLIC_PAYMENTS_ENABLED=true to restore Buy/Upgrade
 * hrefs and labels. Do not delete CHECKOUT paths — they are the enable switch.
 */
export const PAYMENTS_ENABLED =
  process.env.NEXT_PUBLIC_PAYMENTS_ENABLED === "true"

/** Parked checkout targets. Restored when PAYMENTS_ENABLED is true. */
export const CHECKOUT = {
  pro: "/sign-up?plan=pro",
  premium: "/sign-up?plan=pro",
} as const

export const WAITLIST_HREF = "/#waitlist"
export const WAITLIST_LABEL = "Join the waitlist"

export function checkoutHref(liveHref: string): string {
  return PAYMENTS_ENABLED ? liveHref : WAITLIST_HREF
}

export function checkoutLabel(liveLabel: string): string {
  return PAYMENTS_ENABLED ? liveLabel : WAITLIST_LABEL
}
