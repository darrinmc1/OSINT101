import { NextResponse } from "next/server"
import { pricingJson } from "@/lib/pricing"

export const dynamic = "force-static"

export function GET() {
  return NextResponse.json(pricingJson(), {
    headers: { "Cache-Control": "public, max-age=3600" },
  })
}
