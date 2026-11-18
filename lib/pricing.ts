import { siteConfig } from "@/lib/site-config"
import { SELF_URL } from "@/lib/network"

/**
 * The only price map. Pages, /pricing.json, and the terms line read this.
 *
 * Replaced (do not bring these back):
 * - USD Founding $5/month and $48/year
 * - USD Standard $9/month and $90/year
 * - USD Premium $19/month and $180/year
 * - Yearly lock-in, "founding rate kept", and the 30-day refund line
 */

export const PRICING_CURRENCY = "AUD"
export const PRICING_UPDATED = "2026-11-18"
export const FREE_ACCOUNT_CTA = "Create a free account"
export const FREE_ACCOUNT_HREF = "/sign-up"

export const priceMap = {
  currency: PRICING_CURRENCY,
  gst: "inc GST",
  seller: "TTPN Pty Ltd",
  governingLaw: "Queensland, Australia",
  refundDays: 3,
  free: {
    id: "free",
    name: "Free",
    priceLabel: "A$0",
    items: [
      { name: "Case File Planner", href: "/case-file" },
      { name: "OSINT Fundamentals", href: "/modules/osint-fundamentals" },
      { name: "Investigation Plan Template", href: "/downloads" },
    ],
  },
  plan: {
    id: "base",
    name: "Base",
    priceMonthlyAud: 9,
    introFirstMonthAud: 5,
    period: "month" as const,
  },
  packs: [
    {
      id: "download-pack",
      name: "Download pack",
      priceAud: 9,
      period: "one-off" as const,
      detail: "The blank worksheets other than the free Investigation Plan. One payment. It does not renew.",
    },
    {
      id: "field-collection",
      name: "Field collection",
      priceAud: 19,
      period: "one-off" as const,
      detail: "The specialist lesson set, bought once. It does not renew.",
    },
  ],
} as const

export const INTRO_RENEWAL_LINE = `The intro price applies to the first month only, then renews at A$${priceMap.plan.priceMonthlyAud}/month, cancel anytime.`

export const REFUND_SUMMARY = `If you are charged, you can ask ${priceMap.seller} for a refund within ${priceMap.refundDays} days of the charge. Email ${siteConfig.contact.email}. You can cancel a subscription anytime.`

export function pricingJson() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} pricing`,
    url: `${SELF_URL}/pricing`,
    currency: PRICING_CURRENCY,
    priceIncludesGST: true,
    dateModified: PRICING_UPDATED,
    seller: priceMap.seller,
    billingNote:
      "No checkout on this site. Create a free account with your email. " + INTRO_RENEWAL_LINE,
    itemListElement: [
      {
        "@type": "Offer",
        position: 1,
        name: priceMap.free.name,
        sku: priceMap.free.id,
        price: 0,
        priceCurrency: PRICING_CURRENCY,
        description: "Free, and labelled free.",
        url: `${SELF_URL}${FREE_ACCOUNT_HREF}`,
        includes: priceMap.free.items.map((item) => item.name),
      },
      {
        "@type": "Offer",
        position: 2,
        name: priceMap.plan.name,
        sku: priceMap.plan.id,
        price: priceMap.plan.priceMonthlyAud,
        priceCurrency: PRICING_CURRENCY,
        pricePeriod: "month",
        introFirstMonth: priceMap.plan.introFirstMonthAud,
        description: `A$${priceMap.plan.priceMonthlyAud}/month inc GST. First month A$${priceMap.plan.introFirstMonthAud} after a free account with an email. ${INTRO_RENEWAL_LINE}`,
        url: `${SELF_URL}${FREE_ACCOUNT_HREF}`,
      },
      ...priceMap.packs.map((pack, index) => ({
        "@type": "Offer",
        position: index + 3,
        name: pack.name,
        sku: pack.id,
        price: pack.priceAud,
        priceCurrency: PRICING_CURRENCY,
        pricePeriod: "one-off",
        description: pack.detail,
        url: `${SELF_URL}${FREE_ACCOUNT_HREF}`,
      })),
    ],
  }
}

export function pricingFaqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
}
