import { NextRequest, NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { createCheckoutSession } from "@/lib/checkout"
import { offerFromSku } from "@/lib/offers"
import { stripePaymentsEnabled } from "@/lib/stripe"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/**
 * Creating a Checkout Session is closed unless STRIPE_ENABLED === "true".
 * The client sends { sku }. A raw priceId is rejected.
 */
export async function POST(req: NextRequest) {
  if (!stripePaymentsEnabled()) {
    return NextResponse.json({ error: "Payments are not enabled" }, { status: 503 })
  }

  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Expected JSON body" }, { status: 400 })
  }
  if ("priceId" in body || "stripePriceId" in body) {
    return NextResponse.json({ error: "priceId is not accepted; send sku" }, { status: 400 })
  }

  const offer = offerFromSku(body.sku)
  if (!offer) {
    return NextResponse.json({ error: "Unknown sku" }, { status: 400 })
  }
  if (!offer.available) {
    return NextResponse.json({ error: "This product is not available yet" }, { status: 503 })
  }

  let userId: string | null = null
  try {
    const session = await auth()
    userId = session.userId
  } catch {
    userId = null
  }
  if (!userId) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }

  const origin = req.nextUrl.origin
  const result = await createCheckoutSession({ offer, userId, origin })
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: result.status })
  }

  return NextResponse.json({ url: result.url })
}
