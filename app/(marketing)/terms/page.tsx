import ContentPage from "@/components/ContentPage"
import { sitePages } from "@/data/siteContent"

export default function TermsPage() {
  return (
    <ContentPage
      title={sitePages.terms.title}
      eyebrow={sitePages.terms.eyebrow}
      description={sitePages.terms.description}
      body={sitePages.terms.body}
    />
  )
}
