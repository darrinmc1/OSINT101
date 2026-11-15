import { notFound } from "next/navigation"
import ResourceDetailPage from "@/components/ResourceDetailPage"
import { AccountGate } from "@/components/account-gate"
import { resourceLibrary } from "@/data/siteContent"
import { resourceTier } from "@/lib/offer"
import { decideAccess, getViewer, recordUsage } from "@/lib/viewer"

export const dynamic = "force-dynamic"

export default async function ResourceDetailRoutePage({ params }: { params: { resourceId: string } }) {
  const resource = resourceLibrary.find((entry) => entry.id === params.resourceId)
  if (!resource) notFound()

  const required = resourceTier(resource.id)
  const viewer = await getViewer()
  const decision = decideAccess(viewer, required)
  if (decision.status !== "allowed") {
    return <AccountGate decision={decision} title={resource.title} required={required} />
  }

  await recordUsage(viewer, "resource_view", resource.id, `/resources/${resource.id}`)
  return <ResourceDetailPage />
}
