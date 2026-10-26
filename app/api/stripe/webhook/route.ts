import { NextRequest, NextResponse } from "next/server"
import type Stripe from "stripe"
import { sendAdminNotification } from "@/lib/email"
import { grantEntitlement, revokeEntitlement } from "@/lib/entitlements"
import { offerFromSku, stripeSiteKey } from "@/lib/offers"
import { stripe, stripePaymentsEnabled } from "@/lib/stripe"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(req: NextRequest) {
  if (!stripePaymentsEnabled()) {
    return NextResponse.json({ error: "Payments are not enabled" }, { status: 503 })
  }
  if (!stripe) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 })
  }

  const body = await req.text()
  const sig = req.headers.get("stripe-signature")
  const secret = process.env.STRIPE_WEBHOOK_SECRET

  if (!sig || !secret) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, secret)
  } catch (err) {
    console.error("[stripe webhook] signature verification failed", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  if (
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded"
  ) {
    await handleCheckoutSession(event.data.object)
  } else if (event.type.startsWith("customer.subscription.")) {
    await handleSubscription(event.type, event.data.object as Stripe.Subscription)
  }

  return NextResponse.json({ received: true })
}

async function handleCheckoutSession(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.userId
  const sku = session.metadata?.sku
  const site = session.metadata?.site
  if (!userId || site !== stripeSiteKey()) {
    console.warn("[stripe webhook] checkout session missing site/user metadata", session.id)
    return
  }

  const offer = offerFromSku(sku)
  if (!offer) return

  // Memberships are granted from customer.subscription.* so an incomplete
  // subscription cannot leave an entitlement behind. The launch coupon, when
  // applied, is duration "once" on the Stripe coupon and only affects the
  // first invoice.
  console.log(
    "[stripe webhook] subscription checkout completed; entitlement follows customer.subscription.*"
  )
}

async function handleSubscription(eventType: string, sub: Stripe.Subscription) {
  const userId = sub.metadata?.userId
  const sku = sub.metadata?.sku
  const site = sub.metadata?.site
  if (!userId || site !== stripeSiteKey()) {
    console.warn("[stripe webhook] subscription missing site/user metadata", eventType, sub.id)
    return
  }

  const offer = offerFromSku(sku)
  if (!offer || offer.mode !== "subscription") return

  const revoke =
    eventType === "customer.subscription.deleted" ||
    sub.status === "canceled" ||
    sub.status === "unpaid" ||
    sub.status === "incomplete_expired"

  if (revoke) {
    const revoked = await revokeEntitlement(userId, offer.entitlementId)
    console.log(
      `[stripe webhook] entitlement ${revoked ? "revoked" : "REVOKE FAILED"}: user=${userId} sku=${offer.sku} status=${sub.status}`
    )
    return
  }

  if (sub.status !== "active" && sub.status !== "trialing") return

  const granted = await grantEntitlement(userId, offer.entitlementId)
  console.log(
    `[stripe webhook] entitlement ${granted ? "granted" : "FAILED"}: user=${userId} sku=${offer.sku} status=${sub.status}`
  )

  if (eventType !== "customer.subscription.created") return

  await sendAdminNotification({
    kind: "purchase",
    payload: {
      userId,
      sku: offer.sku,
      productId: offer.entitlementId,
      status: sub.status,
      granted,
    },
  }).catch(() => {})
}
