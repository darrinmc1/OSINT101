import { NextResponse } from "next/server"
import { pricingJson } from "@/lib/pricing"

export function GET() {
  return NextResponse.json(pricingJson())
}
