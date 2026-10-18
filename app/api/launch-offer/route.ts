import { NextResponse } from "next/server"
import { launchOfferLabel } from "@/lib/launch-offer"

export const dynamic = "force-dynamic"

/** Public label only. Does not reveal coupon ids. */
export function GET() {
  const label = launchOfferLabel()
  return NextResponse.json(
    { active: label !== null, label },
    { headers: { "Cache-Control": "no-store" } }
  )
}
