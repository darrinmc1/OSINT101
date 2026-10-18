import { siteConfig } from "@/lib/site-config"
import { SELF_URL } from "@/lib/network"
import { launchOfferLabel } from "@/lib/launch-offer"
import { REFUND_POLICY } from "@/lib/refund-policy"

export type PlanId = "free" | "founding" | "analyst"

export interface PricingPlan {
  id: PlanId
  name: string
  priceMonthly: number
  priceYearly: number
  priceLabel: string
  period: string
  description: string
  features: string[]
  cta: string
  href: string
  highlighted: boolean
  caseFileAccess: "foundations" | "advanced"
}

export const PRICING_CURRENCY = "USD"
export const PRICING_UPDATED = "2026-08-13"

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    priceLabel: "$0",
    period: "",
    description: "Beginner modules and a Case File plan grounded in those lessons. No credit card.",
    features: [
      "All Beginner modules",
      "Case File Planner — foundations",
      "Intelligence cycle + OPSEC checklist",
      "Citations to real OSINT 101 lessons",
      "Community access",
    ],
    cta: "Open a Case File",
    href: "/case-file",
    highlighted: false,
    caseFileAccess: "foundations",
  },
  {
    id: "founding",
    name: "Founding",
    priceMonthly: siteConfig.pricing.founder.monthly,
    priceYearly: siteConfig.pricing.founder.yearly,
    priceLabel: `$${siteConfig.pricing.founder.monthly}`,
    period: "/month",
    description: "Founding membership at $5/mo or $48/yr. Beginner training, plus a note when new modules are added.",
    features: [
      "Everything in Free",
      "Note when new modules are added",
      "$5/mo or $48/yr",
    ],
    cta: "Join the founding list",
    href: "/improvements",
    highlighted: true,
    caseFileAccess: "foundations",
  },
  {
    id: "analyst",
    name: "Analyst",
    priceMonthly: siteConfig.pricing.premium.monthly,
    priceYearly: siteConfig.pricing.premium.yearly,
    priceLabel: `$${siteConfig.pricing.premium.monthly}`,
    period: "/month",
    description: "Analyst membership at $19/mo or $180/yr. Intermediate and advanced lessons, plus advanced Case File techniques.",
    features: [
      "Everything in Founding",
      "Case File Planner advanced techniques",
      "Intermediate and advanced modules",
      "People, SOCMINT, GEOINT, recon, crypto, and forensics lessons",
    ],
    cta: "See Analyst access",
    href: "/case-file",
    highlighted: false,
    caseFileAccess: "advanced",
  },
]

export function pricingJson() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} pricing`,
    url: `${SELF_URL}/pricing`,
    currency: PRICING_CURRENCY,
    dateModified: PRICING_UPDATED,
    billingNote:
      "Card checkout stays closed unless payments are enabled. Prices are USD: Founding $5/mo or $48/yr, Analyst $19/mo or $180/yr.",
    refundPolicy: REFUND_POLICY,
    launchOffer: launchOfferLabel(),
    itemListElement: pricingPlans.map((plan, index) => ({
      "@type": "Offer",
      position: index + 1,
      name: plan.name,
      sku: plan.id,
      url: `${SELF_URL}${plan.href}`,
      price: plan.priceMonthly,
      priceCurrency: PRICING_CURRENCY,
      pricePeriod: plan.id === "free" ? "none" : "month",
      priceYearly: plan.priceYearly,
      description: plan.description,
      category: "Subscription",
      availability: plan.id === "free" ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
      includes: plan.features,
      caseFileAccess: plan.caseFileAccess,
    })),
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
