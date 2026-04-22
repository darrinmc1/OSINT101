import ContentPage from "@/components/ContentPage"
import { sitePages } from "@/data/siteContent"

export default function ContactPage() {
  return (
    <ContentPage
      title={sitePages.contact.title}
      eyebrow={sitePages.contact.eyebrow}
      description={sitePages.contact.description}
      body={sitePages.contact.body}
    />
  )
}
