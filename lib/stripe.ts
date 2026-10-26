import Stripe from "stripe"

const key = process.env.STRIPE_SECRET_KEY

export const stripe = key
  ? new Stripe(key, { apiVersion: "2025-02-24.acacia" })
  : null

/**
 * Runtime server gate. Unset, "false", or any value other than the string
 * "true" keeps checkout and the webhook closed. Do not trust the client flag.
 */
export function stripePaymentsEnabled(): boolean {
  return process.env.STRIPE_ENABLED === "true"
}
