import { NextResponse } from "next/server"
import { briefingById, moduleTier, resourceTier } from "@/lib/offer"
import { learningModules } from "@/data/modules"
import { resourceLibrary } from "@/data/siteContent"
import { decideAccess, getViewer, recordUsage, type UsageEventType } from "@/lib/viewer"

export const dynamic = "force-dynamic"

const EVENTS = new Set<UsageEventType>([
  "module_view",
  "briefing_view",
  "download",
  "case_file_view",
  "resource_view",
])

function allowed(eventType: UsageEventType, resourceId: string): boolean {
  if (eventType === "module_view") return Boolean(learningModules[resourceId])
  if (eventType === "briefing_view") return Boolean(briefingById(resourceId))
  if (eventType === "resource_view") return resourceLibrary.some((entry) => entry.id === resourceId)
  if (eventType === "case_file_view") return resourceId === "case-file"
  return false
}

function requiredTier(eventType: UsageEventType, resourceId: string) {
  if (eventType === "module_view") return moduleTier(resourceId)
  if (eventType === "briefing_view") return briefingById(resourceId)?.tier ?? "full_library"
  if (eventType === "resource_view") return resourceTier(resourceId)
  return "free" as const
}

export async function POST(req: Request) {
  const viewer = await getViewer()
  if (!viewer.userId) {
    return NextResponse.json({ error: "Create a free account" }, { status: 401 })
  }

  const body = await req.json().catch(() => ({}))
  const eventType = body?.eventType as UsageEventType
  const resourceId = typeof body?.resourceId === "string" ? body.resourceId.slice(0, 120) : ""
  const path = typeof body?.path === "string" ? body.path.slice(0, 200) : ""

  if (!EVENTS.has(eventType) || !resourceId || !allowed(eventType, resourceId)) {
    return NextResponse.json({ error: "Invalid event" }, { status: 400 })
  }

  const decision = decideAccess(viewer, requiredTier(eventType, resourceId))
  if (decision.status !== "allowed") {
    return NextResponse.json({ error: "Not included in this account" }, { status: 403 })
  }

  await recordUsage(viewer, eventType, resourceId, path || `/${resourceId}`)
  return NextResponse.json({ ok: true })
}
