import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { pricingFaqJsonLd, pricingJson, pricingPlans } from "@/lib/pricing"
import { CASE_FILE_FAQS } from "@/data/case-file"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SELF_URL } from "@/lib/network"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "OSINT 101 pricing: Free foundations and Case File plans, founding $5/mo, Analyst $19/mo for advanced techniques. Machine-readable at /pricing.json.",
  alternates: { canonical: "/pricing" },
}

const pricingFaqs = [
  ...CASE_FILE_FAQS.filter((faq) => faq.question.toLowerCase().includes("free") || faq.question.toLowerCase().includes("legal")),
  {
    question: "How much does OSINT 101 cost?",
    answer:
      "Foundations and the Case File Planner foundations lane are $0. Founding is $5/month (waitlist while billing finishes). Analyst is $19/month and includes advanced Case File techniques. Parseable offers: https://www.osint101.com/pricing.json.",
  },
  {
    question: "Is there a crypto or x402 checkout?",
    answer: "No. Paid access uses the existing founding/waitlist and upcoming card billing pattern. There is no x402 payment path.",
  },
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <JsonLd data={pricingJson()} />
      <JsonLd data={pricingFaqJsonLd(pricingFaqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "OSINT 101 Pricing",
          url: `${SELF_URL}/pricing`,
          relatedLink: [`${SELF_URL}/pricing.json`, `${SELF_URL}/llm.txt`],
        }}
      />
      <main className="min-h-screen pt-16 bg-slate-950 text-slate-50">
        <section className="border-b border-white/10 py-16 text-center">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300 mb-3">Pricing</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple, parseable pricing</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Foundations are free. Advanced Case File techniques sit on the Analyst plan. Machine-readable copy lives at{" "}
              <Link href="/pricing.json" className="text-indigo-300 underline underline-offset-2">
                /pricing.json
              </Link>
              .
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-12">
          <div className="grid gap-6 md:grid-cols-3 items-start">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-xl border p-6 md:p-8 ${
                  plan.highlighted
                    ? "border-indigo-400 bg-white/5 shadow-lg ring-1 ring-indigo-400"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <h2 className="font-bold text-xl mb-2">{plan.name}</h2>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.priceLabel}</span>
                  <span className="text-sm text-slate-500">{plan.period}</span>
                </div>
                <p className="text-sm text-slate-400 mb-6">{plan.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300 mb-4">
                  Case File: {plan.caseFileAccess}
                </p>
                <Link
                  href={plan.href}
                  className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors mb-8 ${
                    plan.highlighted
                      ? "bg-indigo-600 text-white hover:bg-indigo-500"
                      : "border border-white/15 text-slate-200 hover:bg-white/5"
                  }`}
                >
                  {plan.cta} <ArrowRight className="h-4 w-4" />
                </Link>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle
                        className={`h-4 w-4 mt-0.5 shrink-0 ${
                          plan.highlighted ? "text-indigo-400" : "text-slate-500"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="mx-auto max-w-3xl px-4 md:px-6 pb-20">
          <h2 className="text-2xl font-bold mb-4">Pricing FAQs</h2>
          <Accordion type="single" collapsible className="rounded-2xl border border-white/10 px-4">
            {pricingFaqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`p-faq-${index}`}>
                <AccordionTrigger className="text-left text-slate-100">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-slate-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
      <Footer />
    </>
  )
}
