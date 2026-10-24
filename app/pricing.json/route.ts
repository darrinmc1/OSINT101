import { NextResponse } from "next/server"
import { siteConfig } from "@/lib/site-config"

export function GET() {
  return NextResponse.json({
    name: siteConfig.name,
    note: "All content is free while we finish setting up.",
  })
}
