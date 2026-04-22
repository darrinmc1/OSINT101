import ContentPage from "@/components/ContentPage"
import { sitePages } from "@/data/siteContent"

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
