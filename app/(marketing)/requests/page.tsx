import type { Metadata } from "next"
import ContentPage from "@/components/ContentPage"
import { sitePages } from "@/data/siteContent"
import { pageMeta } from "@/lib/page-meta"

export const metadata: Metadata = pageMeta({
  title: sitePages.requests.title,
  description: sitePages.requests.description,
  path: "/requests",
})

export default function RequestsPage() {
  return (
    <ContentPage
      title={sitePages.requests.title}
      eyebrow={sitePages.requests.eyebrow}
      description={sitePages.requests.description}
      body={sitePages.requests.body}
    />
  )
}
