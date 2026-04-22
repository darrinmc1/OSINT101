import ContentPage from "@/components/ContentPage"
import { sitePages } from "@/data/siteContent"

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
