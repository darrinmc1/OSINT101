import ContentPage from "@/components/ContentPage"
import { sitePages } from "@/data/siteContent"

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
