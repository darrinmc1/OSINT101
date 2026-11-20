import { NextRequest, NextResponse } from "next/server"
import { learningModules } from "@/data/modules"
import { resourceLibrary } from "@/data/siteContent"
import { getAccountsDb } from "@/lib/accounts-db"
import { moduleTier, pdfById, resourceTier } from "@/lib/offer"
import type { UsageEventType } from "@/lib/usage-types"
import { USAGE_EVENT_TYPES } from "@/lib/usage-types"
import { decideAccess, getViewer, recordUsage } from "@/lib/viewer"

export const dynamic = "force-dynamic"

function cleanPath(value: unknown): string | null {
  if (typeof value !== "string") return null
  const path = value.split("?")[0]?.split("#")[0] ?? ""
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("..")) return null
  if (path.length > 180) return null
  return path
}

function isEventType(value: unknown): value is UsageEventType {
  return typeof value === "string" && (USAGE_EVENT_TYPES as string[]).includes(value)
}

function allowed(eventType: UsageEventType, resourceId: string): boolean {
  if (eventType === "module_view") return Boolean(learningModules[resourceId])
  if (eventType === "briefing_view") return false
  if (eventType === "download") return Boolean(pdfById(resourceId))
  if (eventType === "resource_view") return resourceLibrary.some((entry) => entry.id === resourceId)
  if (eventType === "case_file_view") return resourceId === "case-file"
  return false
}

function requiredTier(eventType: UsageEventType, resourceId: string) {
  if (eventType === "module_view") return moduleTier(resourceId)
  if (eventType === "download") return pdfById(resourceId)?.tier ?? "download_pack"
  if (eventType === "resource_view") return resourceTier(resourceId)
  return "free" as const
}

function fromBeaconPath(path: string): { eventType: UsageEventType; resourceId: string } | null {
  const moduleMatch = path.match(/^\/modules\/([a-z0-9-]+)$/)
  if (moduleMatch && learningModules[moduleMatch[1]]) {
    return { eventType: "module_view", resourceId: moduleMatch[1] }
  }
  const resourceMatch = path.match(/^\/resources\/([a-z0-9-]+)$/)
  if (resourceMatch && resourceLibrary.some((entry) => entry.id === resourceMatch[1])) {
    return { eventType: "resource_view", resourceId: resourceMatch[1] }
  }
  if (path === "/case-file") return { eventType: "case_file_view", resourceId: "case-file" }
  return null
}

export async function POST(req: NextRequest) {
  if (!process.env.CLERK_SECRET_KEY || !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return NextResponse.json({ ok: true, stored: false, reason: "auth_not_configured" })
  }

  const viewer = await getViewer()
  if (!viewer.userId) {
    return NextResponse.json({ ok: true, stored: false, reason: "signed_out" })
  }

  const body = await req.json().catch(() => ({}))
  const path = cleanPath((body as { path?: unknown }).path)
  let eventType: UsageEventType | null = null
  let resourceId = ""

  if (isEventType((body as { eventType?: unknown }).eventType)) {
    eventType = (body as { eventType: UsageEventType }).eventType
    resourceId = typeof (body as { resourceId?: unknown }).resourceId === "string"
      ? (body as { resourceId: string }).resourceId.slice(0, 120)
      : ""
    if (!resourceId || !allowed(eventType, resourceId)) {
      return NextResponse.json({ error: "Invalid event" }, { status: 400 })
    }
  } else if (path) {
    const inferred = fromBeaconPath(path)
    if (!inferred) {
      return NextResponse.json({ ok: true, stored: false, reason: "untracked_path" })
    }
    eventType = inferred.eventType
    resourceId = inferred.resourceId
  } else {
    return NextResponse.json({ ok: false, error: "Bad path" }, { status: 400 })
  }

  const decision = decideAccess(viewer, requiredTier(eventType, resourceId))
  if (decision.status !== "allowed") {
    return NextResponse.json({ ok: true, stored: false, reason: "not_included" })
  }

  if (!getAccountsDb()) {
    return NextResponse.json({ ok: true, stored: false, reason: "not_connected" })
  }

  await recordUsage(viewer, eventType, resourceId, path || `/${resourceId}`)
  return NextResponse.json({ ok: true, stored: true })
}
