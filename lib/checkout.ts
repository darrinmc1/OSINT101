import type Stripe from "stripe"
import { isExpiredLaunchDiscountError, launchOfferDiscount } from "@/lib/launch-offer"
import {
  CHECKOUT_CURRENCY,
  STATEMENT_DESCRIPTOR_SUFFIX,
  lookupKeyFor,
  stripeSiteKey,
  type CheckoutOffer,
} from "@/lib/offers"
import { stripe } from "@/lib/stripe"

export interface CheckoutReady {
  url: string
}

export interface CheckoutFailed {
  error: string
  status: number
}

/**
 * Subscription Checkout cannot set payment_intent_data.statement_descriptor_suffix
 * (Stripe rejects that field unless mode is payment). Card subscription charges
 * use the Product statement_descriptor. OSINT101 contains no asterisk, so it can
 * be stored on the Product; with the account shortened descriptor set to TTPN
 * the statement preview is TTPN* OSINT101.
 */
async function ensureSubscriptionDescriptor(price: Stripe.Price): Promise<void> {
  if (!stripe) throw new Error("Stripe not configured")

  const product = price.product
  if (typeof product !== "string" && "deleted" in product && product.deleted) {
    throw new Error("Stripe product is deleted")
  }

  const productId = typeof product === "string" ? product : product.id
  const current = typeof product === "string" ? null : product.statement_descriptor

  if (current === STATEMENT_DESCRIPTOR_SUFFIX) return

  await stripe.products.update(productId, {
    statement_descriptor: STATEMENT_DESCRIPTOR_SUFFIX,
  })
}

export async function createCheckoutSession(args: {
  offer: CheckoutOffer
  userId: string
  origin: string
}): Promise<CheckoutReady | CheckoutFailed> {
  if (!args.offer.available) {
    return { error: "This product is not available yet", status: 503 }
  }

  if (!stripe) {
    return { error: "Stripe not configured", status: 503 }
  }

  const site = stripeSiteKey()
  const lookupKey = lookupKeyFor(args.offer, site)
  if (!lookupKey.startsWith(`${site}_`)) {
    return { error: "Invalid lookup key", status: 500 }
  }

  const listed = await stripe.prices.list({
    lookup_keys: [lookupKey],
    active: true,
    limit: 1,
    expand: ["data.product"],
  })
  const price = listed.data[0]
  if (!price) {
    console.error("[checkout] no active price for lookup key", lookupKey)
    return { error: "Price is not available", status: 404 }
  }

  const expectedCents = args.offer.priceUsd * 100
  if (price.currency !== CHECKOUT_CURRENCY || price.unit_amount !== expectedCents) {
    console.error("[checkout] price currency or amount does not match the allowlist", {
      lookupKey,
      currency: price.currency,
      unit_amount: price.unit_amount,
    })
    return { error: "Price is not available", status: 409 }
  }

  if (
    price.recurring?.interval !== args.offer.interval ||
    (price.recurring.interval_count ?? 1) !== 1
  ) {
    return { error: "Price mode mismatch", status: 409 }
  }

  try {
    await ensureSubscriptionDescriptor(price)
  } catch (err) {
    console.error("[checkout] subscription statement descriptor update failed", err)
    return { error: "Checkout unavailable", status: 502 }
  }

  const metadata = {
    site,
    sku: args.offer.sku,
    userId: args.userId,
  }

  const discount = launchOfferDiscount()

  const params: Stripe.Checkout.SessionCreateParams = {
    mode: "subscription",
    currency: CHECKOUT_CURRENCY,
    line_items: [{ price: price.id, quantity: 1 }],
    success_url: `${args.origin}/dashboard?purchased=${encodeURIComponent(args.offer.entitlementId)}`,
    cancel_url: `${args.origin}/pricing`,
    client_reference_id: args.userId,
    metadata,
    subscription_data: {
      description: args.offer.statementDescription,
      metadata,
    },
  }

  let session: Stripe.Checkout.Session
  try {
    session = await createSession(params, discount)
  } catch (err) {
    // The date gate and Stripe redeem_by can disagree. An expired coupon must
    // not block checkout: retry once at the list price. Do not log the id.
    if (discount && isExpiredLaunchDiscountError(err)) {
      console.error("[checkout] launch coupon expired; retrying at list price")
      try {
        session = await createSession(params, null)
      } catch (retryErr) {
        console.error("[checkout] session create failed", stripeErrorBrief(retryErr))
        return { error: "Checkout unavailable", status: 502 }
      }
    } else {
      console.error("[checkout] session create failed", discount ? stripeErrorBrief(err) : err)
      return { error: "Checkout unavailable", status: 502 }
    }
  }

  if (!session.url) {
    return { error: "Checkout unavailable", status: 502 }
  }

  return { url: session.url }
}

async function createSession(
  params: Stripe.Checkout.SessionCreateParams,
  discount: ReturnType<typeof launchOfferDiscount>,
): Promise<Stripe.Checkout.Session> {
  if (!stripe) throw new Error("Stripe not configured")
  return stripe.checkout.sessions.create({
    ...params,
    // discounts and allow_promotion_codes cannot be set together.
    // The launch coupon is attached only while the shared offer check is open.
    ...(discount ? { discounts: [discount] } : {}),
  })
}

/** Code and type only, so a Stripe message cannot print the coupon id. */
function stripeErrorBrief(err: unknown): { type?: string; code?: string } {
  if (!err || typeof err !== "object") return {}
  const record = err as { type?: unknown; code?: unknown; raw?: { code?: unknown } }
  return {
    type: typeof record.type === "string" ? record.type : undefined,
    code:
      typeof record.code === "string"
        ? record.code
        : typeof record.raw?.code === "string"
          ? record.raw.code
          : undefined,
  }
}
