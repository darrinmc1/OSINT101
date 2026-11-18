import type { Metadata } from "next"
import ContentPage from "@/components/ContentPage"
import { PendingLegalReview } from "@/components/legal-notice"
import { sitePages } from "@/data/siteContent"
import { pageMeta } from "@/lib/page-meta"
import { REFUND_SUMMARY } from "@/lib/pricing"

export const metadata: Metadata = pageMeta({
  title: sitePages.terms.title,
  description: sitePages.terms.description,
  path: "/terms",
})

export default function TermsPage() {
  return (
    <ContentPage
      title={sitePages.terms.title}
      eyebrow={sitePages.terms.eyebrow}
      description={sitePages.terms.description}
      body={sitePages.terms.body}
      notice={
        <PendingLegalReview>
          <p>{REFUND_SUMMARY}</p>
        </PendingLegalReview>
      }
    />
  )
}
