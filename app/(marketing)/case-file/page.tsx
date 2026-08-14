import type { Metadata } from "next"
import { CaseFilePlanner } from "@/components/case-file-planner"
import { JsonLd } from "@/components/json-ld"
import { CASE_FILE_FAQS } from "@/data/case-file"
import { CASE_FILE_PRO, pricingFaqJsonLd } from "@/lib/pricing"
import { SELF_URL } from "@/lib/network"
import { siteConfig } from "@/lib/site-config"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Case File Planner",
  description:
    "Paste a collection target or investigation question. Get a case-file plan using the OSINT 101 method, citing real modules. Foundations free; advanced techniques are Case File Pro — $19/mo.",
  alternates: { canonical: "/case-file" },
  openGraph: {
    title: "Case File Planner | OSINT 101",
    description:
      "One job: turn an investigation question into a cited OSINT 101 case file. Not a chatbot.",
    url: `${SELF_URL}/case-file`,
  },
}

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: `${siteConfig.name} Case File Planner`,
  url: `${SELF_URL}/case-file`,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: [
    {
      "@type": "Offer",
      name: "Foundations",
      price: "0",
      priceCurrency: "USD",
      description: "Beginner modules and Case File foundations are free.",
    },
    {
      "@type": "Offer",
      name: CASE_FILE_PRO.name,
      sku: CASE_FILE_PRO.sku,
      price: String(CASE_FILE_PRO.priceMonthly),
      priceCurrency: "USD",
      description: `${CASE_FILE_PRO.name} — ${CASE_FILE_PRO.displayPrice}. Paid SKU for advanced Case File techniques. ${CASE_FILE_PRO.cta}.`,
    },
  ],
  featureList: [
    "Paste a collection target or investigation question",
    "Case-file plan using the intelligence cycle",
    "Citations to real OSINT 101 modules",
    "Ethics and OPSEC disclaimer",
  ],
}

export default function CaseFilePage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <JsonLd data={appJsonLd} />
      <JsonLd data={pricingFaqJsonLd(CASE_FILE_FAQS)} />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300 mb-3">
            One job · not a chatbot
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white mb-4">
            Case File Planner
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-6">
            Paste a collection target or investigation question. Get a case-file style plan that uses the OSINT 101 method and cites real modules from the archive. Foundations are free. Advanced techniques are a paid gate. Sign-in still unlocks this MVP.
          </p>
          <p className="inline-flex flex-wrap items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-100">
            <span className="font-semibold">{CASE_FILE_PRO.name} — {CASE_FILE_PRO.displayPrice}</span>
            <span className="text-indigo-300">· paid</span>
            <span className="text-slate-400">· {CASE_FILE_PRO.cta}</span>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <CaseFilePlanner />
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl font-bold text-white mb-4">FAQs</h2>
        <Accordion type="single" collapsible className="rounded-2xl border border-white/10 px-4">
          {CASE_FILE_FAQS.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-slate-100">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-slate-400">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}
