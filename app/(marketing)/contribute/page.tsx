import type { Metadata } from "next"
import ContentPage from "@/components/ContentPage"
import { sitePages } from "@/data/siteContent"
import { pageMeta } from "@/lib/page-meta"

export const metadata: Metadata = pageMeta({
  title: sitePages.contribute.title,
  description: sitePages.contribute.description,
  path: "/contribute",
})

export default function ContributePage() {
  return (
    <ContentPage
      title={sitePages.contribute.title}
      eyebrow={sitePages.contribute.eyebrow}
      description={sitePages.contribute.description}
      body={sitePages.contribute.body}
    />
  )
}
