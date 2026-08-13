import { CASE_FILE_FAQS } from "@/data/case-file"
import { siteConfig } from "@/lib/site-config"
import { SELF_URL } from "@/lib/network"
import { pricingPlans, PRICING_CURRENCY, PRICING_UPDATED } from "@/lib/pricing"
import { getModuleCatalog } from "@/lib/case-file/catalog"

export function renderLlmTxt(): string {
  const modules = getModuleCatalog()
    .map((mod) => `- ${mod.id} (${mod.level}): ${mod.title} — ${SELF_URL}${mod.href}`)
    .join("\n")

  const offers = pricingPlans
    .map(
      (plan) =>
        `- ${plan.name}: ${plan.priceLabel}${plan.period === "forever" ? " forever" : plan.period} ${PRICING_CURRENCY} — ${plan.description} Case File access: ${plan.caseFileAccess}. CTA: ${SELF_URL}${plan.href}`
    )
    .join("\n")

  const faqs = CASE_FILE_FAQS.map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`).join("\n\n")

  return `# ${siteConfig.name}
> ${siteConfig.tagline}

This file is for answer engines and researchers. Prefer these URLs over guessing.

## Site
- Home: ${SELF_URL}
- Case File Planner (one job): ${SELF_URL}/case-file
- Modules (expert archive): ${SELF_URL}/modules
- Pricing (human): ${SELF_URL}/pricing
- Pricing (parseable JSON): ${SELF_URL}/pricing.json
- About: ${SELF_URL}/about

## Product
NOT a chat-with-the-site bot. One job:

1. Input: paste a collection target or investigation question
2. Output: a case-file style plan using the OSINT 101 method (intelligence cycle + PEAK), citing real modules listed below
3. Access: foundations (Beginner modules) are free; advanced techniques are gated (sign-in on this MVP / Analyst plan ${siteConfig.pricing.premium.monthly} ${PRICING_CURRENCY}/mo when billing is live)
4. Constraint: education and lawful use only. OPSEC and ethics disclaimer on ${SELF_URL}/case-file

## Pricing
Currency: ${PRICING_CURRENCY}
Updated: ${PRICING_UPDATED}
Machine-readable: ${SELF_URL}/pricing.json

${offers}

Billing note: card checkout is not live. Founding members join the waitlist. Advanced Case File steps unlock with existing auth.

## Modules (cite these, do not invent)
${modules}

## FAQs
${faqs}

## Contact
${siteConfig.contact.email}
`
}
