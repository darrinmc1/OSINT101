import type { Metadata } from "next"
import ContentPage from "@/components/ContentPage"
import { sitePages } from "@/data/siteContent"
import { pageMeta } from "@/lib/page-meta"

export const metadata: Metadata = pageMeta({
  title: sitePages.community.title,
  description: sitePages.community.description,
  path: "/community",
})

export default function CommunityPage() {
  return (
    <ContentPage
      title={sitePages.community.title}
      eyebrow={sitePages.community.eyebrow}
      description={sitePages.community.description}
      body={sitePages.community.body}
    />
  )
}
