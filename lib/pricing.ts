import { siteConfig } from "@/lib/site-config"
import { SELF_URL } from "@/lib/network"

export type PlanId = "free" | "field_pack" | "full_library"

export interface PricingPlan {
  id: PlanId
  name: string
  price: number
  priceLabel: string
  billingLabel: string
  description: string
  features: string[]
  cta: string
  href: string
  highlighted: boolean
  availability: "InStock" | "PreOrder"
}

export const PRICING_CURRENCY = "AUD"
export const PRICING_UPDATED = "2026-11-09"
export const PAYMENTS_LIVE = false

export const BILLING_NOTE =
  "Card billing and checkout are not live. Paid packs are coming soon — join the list. When billing opens, card payments will be charged by TTPN Pty Ltd. Nothing is charged today. Signing in does not purchase or unlock a pack."

const PAID_CTA = "Coming soon / join the list"

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    priceLabel: "A$0",
    billingLabel: "no charge",
    description:
      "Available now. Three beginner modules, the education-only Case File Planner, two PDFs, and two briefings.",
    features: [
      "Modules: OSINT Fundamentals; OSINT Methodology & Structured Workflow; Email & Username Intelligence",
      "Case File Planner (education-only)",
      "PDFs: Investigation Plan Template; Source Evaluation Template",
      "Briefings: Sherlock; Reading Email Headers",
    ],
    cta: "Start the free modules",
    href: "/modules/osint-fundamentals",
    highlighted: false,
    availability: "InStock",
  },
  {
    id: "field_pack",
    name: "Field Pack",
    price: 15,
    priceLabel: "A$15",
    billingLabel: "one-off",
    description:
      "Planned one-off for the intermediate tracks, four worksheets, and three HTML guides. Checkout is not live.",
    features: [
      "Modules: Domain and Website Investigations; Company & Organisational Intelligence; Digital Identity Analysis; People Profiling",
      "Modules: Social Media Investigations; Telegram OSINT; Breach Data Analysis; OSINT Reporting",
      "PDFs: Username Tracker; Social Media Investigation Sheet; Search Operator Cheatsheet; OSINT Operations Checklist",
      "Guides: OSINT Investigation Checklist; Advanced Search Operators; People Profiling Workflow",
    ],
    cta: PAID_CTA,
    href: "/pricing#join",
    highlighted: false,
    availability: "PreOrder",
  },
  {
    id: "full_library",
    name: "Full Library",
    price: 39,
    priceLabel: "A$39",
    billingLabel: "one-off",
    description:
      "Planned one-off for the Field Pack list plus the rest of the archive on the site today. Checkout is not live.",
    features: [
      "Includes the Field Pack modules, PDFs, and guides",
      "Remaining modules: Kali Linux Mastery; Digital Forensics; Geolocation; GEOINT; Network Recon; Dark Web Research; Cryptocurrency Investigations; Social Media Intelligence",
      "Remaining briefings: Holehe; Maigret; theHarvester; dnstwist; crt.sh; STIX/TAXII",
      "Remaining PDFs: OSINT Report Template; Digital Footprint Tracker; Dark Web Monitor Log; Geolocation Analysis Sheet",
      "Remaining guides: Kali cheatsheet; Tools master list; Legal/ethical guidelines",
    ],
    cta: PAID_CTA,
    href: "/pricing#join",
    highlighted: true,
    availability: "PreOrder",
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
    paymentsLive: PAYMENTS_LIVE,
    merchantOfRecord: "TTPN Pty Ltd",
    billingNote: BILLING_NOTE,
    itemListElement: pricingPlans.map((plan, index) => ({
      "@type": "Offer",
      position: index + 1,
      name: plan.name,
      sku: plan.id,
      url: `${SELF_URL}${plan.href}`,
      price: plan.price,
      priceCurrency: PRICING_CURRENCY,
      priceLabel: plan.priceLabel,
      billing: plan.billingLabel,
      description: plan.description,
      category: plan.id === "free" ? "Free" : "OneOff",
      availability: `https://schema.org/${plan.availability}`,
      includes: plan.features,
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
