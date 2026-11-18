import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ContentPage from "@/components/ContentPage"
import { pageMeta } from "@/lib/page-meta"
import { INTRO_RENEWAL_LINE, REFUND_SUMMARY, priceMap } from "@/lib/pricing"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = pageMeta({
  title: "Refunds",
  description: `Refunds for ${priceMap.seller}. A ${priceMap.refundDays}-day refund request, cancel anytime.`,
  path: "/refunds",
})

const body = `
## If a charge happens

${REFUND_SUMMARY}

${INTRO_RENEWAL_LINE}

The seller is ${priceMap.seller}. The contact address is ${siteConfig.contact.email}. The law is ${priceMap.governingLaw}.

A download pack is a one-off. It does not renew, and it is not a pass that lasts after you have the files. There is no unlimited plan.

Write to ${siteConfig.contact.email} with the account email and the date of the charge. The contact form also reaches the same people, if you would rather not use the mailbox.

Nothing on this website takes a card today. The refund line is here so the offer is written down before anyone is charged.
`

export default function RefundsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 pt-16">
        <ContentPage
          title="Refunds"
          eyebrow="Three days"
          description="Three days, then it is a conversation. Cancel a subscription whenever you like."
          body={body}
        />
      </main>
      <Footer />
    </>
  )
}
