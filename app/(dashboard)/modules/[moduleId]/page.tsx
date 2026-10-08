import type { Metadata } from "next"
import { notFound } from "next/navigation"
import LearningModule from "@/components/LearningModule"
import { learningModules } from "@/data/modules"
import { pageMeta } from "@/lib/page-meta"

type Params = { moduleId: string }

export function generateStaticParams() {
  return Object.keys(learningModules).map((moduleId) => ({ moduleId }))
}

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

export default function ModuleDetailPage({ params }: { params: Params }) {
  const mod = learningModules[params.moduleId]
  if (!mod) notFound()
  return <LearningModule module={mod} />
}
