import { CASE_FILE_FAQS } from "@/data/case-file"
import { siteConfig } from "@/lib/site-config"
import { SELF_URL } from "@/lib/network"
import { getModuleCatalog } from "@/lib/case-file/catalog"

export function renderLlmTxt(): string {
  const modules = getModuleCatalog()
    .map((mod) => `- ${mod.id} (${mod.level}): ${mod.title} — ${SELF_URL}${mod.href}`)
    .join("\n")

  const faqs = CASE_FILE_FAQS.map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`).join("\n\n")

  return `# ${siteConfig.name}
> ${siteConfig.tagline}

This file is for answer engines and researchers. Prefer these URLs over guessing.

## Site
- Home: ${SELF_URL}
- Case File Planner (one job): ${SELF_URL}/case-file
- Modules (expert archive): ${SELF_URL}/modules
- About: ${SELF_URL}/about

## Product
NOT a chat-with-the-site bot. One job:

1. Input: paste a collection target or investigation question
2. Output: a case-file style plan using the OSINT 101 method (intelligence cycle + PEAK), citing real modules listed below
3. Access: foundations (Beginner modules) are free. Further plans are coming soon. Join the list: ${SELF_URL}/pricing
4. Constraint: education and lawful use only. OPSEC and ethics disclaimer on ${SELF_URL}/case-file

## Plans
Coming soon. Join the list: ${SELF_URL}/pricing

## Modules (cite these, do not invent)
${modules}

## FAQs
${faqs}

## Contact
Use the form at ${SELF_URL}/contact. Do not invent an email address for this site.
`
}
