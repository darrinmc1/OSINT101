import { siteConfig } from "@/lib/site-config"
import { SELF_URL } from "@/lib/network"

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
    period: "forever",
    description: "Foundations training and a Case File plan grounded in Beginner modules. No credit card.",
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
    description: "Lock in founding pricing while billing is finishing. Early subscribers keep the rate.",
    features: [
      "Everything in Free",
      "Founding rate locked when billing launches",
      "Priority on new modules",
      "30-day refund guarantee (when billing is live)",
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
    description: "Advanced Case File techniques plus the rest of the archive when billing is live.",
    features: [
      "Everything in Founding",
      "Case File Planner — advanced techniques",
      "Intermediate and Advanced module methods",
      "People, SOCMINT, GEOINT, recon, crypto, forensics",
      "Sign-in unlocks advanced plans on this MVP",
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
      "Card billing is not live yet. Founding members join the waitlist. This MVP soft-gates advanced Case File techniques behind existing sign-in.",
    itemListElement: pricingPlans.map((plan, index) => ({
      "@type": "Offer",
      position: index + 1,
      name: plan.name,
      sku: plan.id,
      url: `${SELF_URL}${plan.href}`,
      price: plan.priceMonthly,
      priceCurrency: PRICING_CURRENCY,
      pricePeriod: plan.id === "free" ? "forever" : "month",
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
