import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ResourceDetailPage from "@/components/ResourceDetailPage"
import { resourceLibrary } from "@/data/siteContent"
import { pageMeta } from "@/lib/page-meta"

type Params = { resourceId: string }

export function generateStaticParams() {
  return resourceLibrary.map((resource) => ({ resourceId: resource.id }))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const resource = resourceLibrary.find((entry) => entry.id === params.resourceId)
  if (!resource) {
    return { title: "Resource not found", robots: { index: false, follow: false } }
  }
  return pageMeta({
    title: resource.title,
    description: resource.description,
    path: `/resources/${resource.id}`,
  })
}

export default function ResourceDetailRoutePage({ params }: { params: Params }) {
  const resource = resourceLibrary.find((entry) => entry.id === params.resourceId)
  if (!resource) notFound()
  return <ResourceDetailPage />
}
