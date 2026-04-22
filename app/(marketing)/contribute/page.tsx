import ContentPage from "@/components/ContentPage"
import { sitePages } from "@/data/siteContent"

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
