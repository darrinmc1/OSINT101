import { siteConfig } from "@/lib/site-config"
import { SELF_URL } from "@/lib/network"

export type PlanId = "free" | "founding" | "case-file-pro"

export interface PricingPlan {
  id: PlanId
  name: string
  sku: string
  priceMonthly: number | null
  priceYearly: number | null
  priceLabel: string
  period: string
  description: string
  features: string[]
  cta: string
  href: string
  highlighted: boolean
  paid: boolean
  caseFileAccess: "foundations" | "advanced"
}

export const PRICING_CURRENCY = "USD"
export const PRICING_UPDATED = "2026-08-14"

/** Paid SKU for the existing Case File advanced-techniques gate. */
export const CASE_FILE_PRO = {
  id: "case-file-pro" as const,
  sku: "case-file-pro",
  name: "Case File Pro",
  priceMonthly: 19,
  priceLabel: "$19",
  period: "/mo",
  displayPrice: "$19/mo",
  cta: "checkout coming",
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    sku: "case-file-foundations",
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
    paid: false,
    caseFileAccess: "foundations",
  },
  {
    id: "founding",
    name: "Founding",
    sku: "founding",
    priceMonthly: null,
    priceYearly: null,
    priceLabel: "waitlist",
    period: "",
    description: "Join the list while billing finishes. The paid Case File gate is Case File Pro at $19/mo.",
    features: [
      "Everything in Free",
      "Early access when billing launches",
      "Priority on new modules",
      "30-day refund guarantee (when billing is live)",
    ],
    cta: "Join the founding list",
    href: "/improvements",
    highlighted: false,
    paid: false,
    caseFileAccess: "foundations",
  },
  {
    id: CASE_FILE_PRO.id,
    name: CASE_FILE_PRO.name,
    sku: CASE_FILE_PRO.sku,
    priceMonthly: CASE_FILE_PRO.priceMonthly,
    priceYearly: null,
    priceLabel: CASE_FILE_PRO.priceLabel,
    period: CASE_FILE_PRO.period,
    description: "Paid SKU for the existing Case File Planner gate: Intermediate and Advanced techniques. $19/mo. Checkout is not live.",
    features: [
      "Everything in Free",
      "Case File Planner — advanced techniques (paid, $19/mo)",
      "Intermediate and Advanced module methods",
      "People, SOCMINT, GEOINT, recon, crypto, forensics",
      "Sign-in still required; card checkout coming",
    ],
    cta: CASE_FILE_PRO.cta,
    href: "/pricing",
    highlighted: true,
    paid: true,
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
      "Card billing is not live. No Stripe checkout. Paid SKU is Case File Pro — $19/mo. This MVP still unlocks advanced Case File techniques with existing Clerk sign-in.",
    itemListElement: pricingPlans.map((plan, index) => ({
      "@type": "Offer",
      position: index + 1,
      name: plan.name,
      sku: plan.sku,
      url: `${SELF_URL}${plan.href}`,
      ...(plan.priceMonthly === null
        ? { priceSpecification: { description: plan.priceLabel } }
        : { price: plan.priceMonthly, priceCurrency: PRICING_CURRENCY }),
      pricePeriod: plan.id === "free" ? "forever" : plan.id === CASE_FILE_PRO.id ? "month" : "waitlist",
      priceYearly: plan.priceYearly,
      description: plan.description,
      category: "Subscription",
      availability: plan.id === "free" ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
      includes: plan.features,
      paid: plan.paid,
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
