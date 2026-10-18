import { CASE_FILE_FAQS } from "@/data/case-file"
import { siteConfig } from "@/lib/site-config"
import { SELF_URL } from "@/lib/network"
import { pricingPlans, PRICING_CURRENCY, PRICING_UPDATED } from "@/lib/pricing"
import { getModuleCatalog } from "@/lib/case-file/catalog"
import { launchOfferLabel } from "@/lib/launch-offer"
import { REFUND_POLICY } from "@/lib/refund-policy"
import { getSupportEmail } from "@/lib/support-email"

export function renderLlmTxt(): string {
  const modules = getModuleCatalog()
    .map((mod) => `- ${mod.id} (${mod.level}): ${mod.title} — ${SELF_URL}${mod.href}`)
    .join("\n")

  const offers = pricingPlans
    .map((plan) => {
      const yearly = plan.priceYearly > 0 ? ` or $${plan.priceYearly}/yr` : ""
      const period = plan.period ? plan.period : ""
      return `- ${plan.name}: ${plan.priceLabel}${period}${yearly} ${PRICING_CURRENCY} — ${plan.description} Case File access: ${plan.caseFileAccess}. CTA: ${SELF_URL}${plan.href}`
    })
    .join("\n")

  const faqs = CASE_FILE_FAQS.map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`).join("\n\n")
  const offer = launchOfferLabel()
  const support = getSupportEmail()

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
- Terms: ${SELF_URL}/terms

## Product
NOT a chat-with-the-site bot. One job:

1. Input: paste a collection target or investigation question
2. Output: a case-file style plan using the OSINT 101 method (intelligence cycle + PEAK), citing real modules listed below
3. Access: beginner modules are free. Analyst is $${siteConfig.pricing.premium.monthly} ${PRICING_CURRENCY}/mo or $${siteConfig.pricing.premium.yearly} ${PRICING_CURRENCY}/yr when billing is open. Founding is $${siteConfig.pricing.founder.monthly} ${PRICING_CURRENCY}/mo or $${siteConfig.pricing.founder.yearly} ${PRICING_CURRENCY}/yr.
4. Constraint: education and lawful use only. OPSEC and ethics disclaimer on ${SELF_URL}/case-file

## Pricing
Currency: ${PRICING_CURRENCY}
Updated: ${PRICING_UPDATED}
Machine-readable: ${SELF_URL}/pricing.json

${offers}

${offer ? `${offer}. Waitlist members and new buyers. The discount applies once, to the first billing period.\n` : "The launch offer is not open.\n"}
Billing note: card checkout stays closed unless payments are enabled.

## Refunds
${REFUND_POLICY}

## Modules (cite these, do not invent)
${modules}

## FAQs
${faqs}
${support ? `
## Contact
${support}
` : ""}`
}
