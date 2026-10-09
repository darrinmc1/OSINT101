import type { Metadata } from "next"
import ContentPage from "@/components/ContentPage"
import { ContactForm } from "@/components/contact-form"
import { sitePages } from "@/data/siteContent"
import { pageMeta } from "@/lib/page-meta"

export const metadata: Metadata = pageMeta({
  title: sitePages.contact.title,
  description: sitePages.contact.description,
  path: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <ContentPage
        title={sitePages.contact.title}
        eyebrow={sitePages.contact.eyebrow}
        description={sitePages.contact.description}
        body={sitePages.contact.body}
      />
      <div className="mx-auto max-w-5xl px-6 pb-16">
        <ContactForm />
      </div>
    </>
  )
}
