import type { Metadata } from "next"
import ContentPage from "@/components/ContentPage"
import { sitePages } from "@/data/siteContent"
import { pageMeta } from "@/lib/page-meta"

export const metadata: Metadata = pageMeta({
  title: sitePages.privacy.title,
  description: sitePages.privacy.description,
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <ContentPage
      title={sitePages.privacy.title}
      eyebrow={sitePages.privacy.eyebrow}
      description={sitePages.privacy.description}
      body={sitePages.privacy.body}
    />
  )
}
