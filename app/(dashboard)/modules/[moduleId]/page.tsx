import type { Metadata } from "next"
import { notFound } from "next/navigation"
import LearningModule from "@/components/LearningModule"
import { AccountGate } from "@/components/account-gate"
import { learningModules } from "@/data/modules"
import { moduleTier } from "@/lib/offer"
import { pageMeta } from "@/lib/page-meta"
import { decideAccess, getViewer, recordUsage } from "@/lib/viewer"

type Params = { moduleId: string }

export function generateMetadata({ params }: { params: Params }): Metadata {
  const mod = learningModules[params.moduleId]
  if (!mod) {
    return { title: "Module not found", robots: { index: false, follow: false } }
  }
  return pageMeta({
    title: mod.title,
    description: mod.description,
    path: `/modules/${mod.id}`,
  })
}

export const dynamic = "force-dynamic"

export default async function ModuleDetailPage({ params }: { params: Params }) {
  const mod = learningModules[params.moduleId]
  if (!mod) notFound()

  const required = moduleTier(mod.id)
  const viewer = await getViewer()
  const decision = decideAccess(viewer, required)
  if (decision.status !== "allowed") {
    return <AccountGate decision={decision} title={mod.title} required={required} />
  }

  await recordUsage(viewer, "module_view", mod.id, `/modules/${mod.id}`)
  return <LearningModule module={mod} />
}
