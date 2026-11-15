import type { ReactNode } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { CONTACT_EMAIL, GOVERNING_LAW, OPERATOR_NAME, REFUND_PENDING_LEGAL_REVIEW } from "@/lib/legal"

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms for OSINT 101, operated by ${OPERATOR_NAME}. Australian law, a 3-day refund once checkout opens, and cancel anytime if a subscription is offered.`,
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-slate-300">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">Legal</p>
      <h1 className="mt-3 text-4xl font-extrabold text-white">Terms &amp; Conditions</h1>
      <p className="mt-4 text-sm text-slate-400">Last updated: 15 November 2026</p>
      <p className="mt-6 text-lg text-slate-300">
        Please read these Terms &amp; Conditions (&ldquo;Terms&rdquo;) carefully before using the OSINT 101 website
        (the &ldquo;Service&rdquo;), operated by {OPERATOR_NAME} (&ldquo;us,&rdquo; &ldquo;we,&rdquo; or &ldquo;our&rdquo;).
      </p>
      <p className="mt-3 text-sm text-slate-400">
        By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part, you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.
      </p>

      <Section title="1. Accounts">
        <p>
          When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in immediate termination of your account.
        </p>
        <p>
          You are responsible for safeguarding the password and for any activities or actions under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
        </p>
        <p>
          A free account is the default. It includes the free modules, the Case File Planner, two PDFs, and two briefings. It does not include Field Pack or Full Library. We reserve the right to refuse service, terminate accounts, or remove or edit content at our sole discretion.
        </p>
      </Section>

      <Section title="2. What the site provides">
        <p>
          OSINT 101 publishes lessons, briefings, downloadable templates, and an education-only Case File Planner. You may use them for your own personal or internal work. We may change or remove a free page at any time.
        </p>
        <p>
          The material is educational. It is not legal advice, an investigation service, a certification, or a tool that searches real people or systems for you. Checkout is not live. Nothing on this site charges a card.
        </p>
      </Section>

      <Section title="3. Intellectual property">
        <p>
          All content on OSINT 101 — including courses, lessons, templates, articles, graphics, logos, and code — is the property of {OPERATOR_NAME} or its content creators and is protected by applicable intellectual property laws.
        </p>
        <p className="font-semibold text-white">What you may do:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Access and view content for your personal, non-commercial use</li>
          <li>Download templates you are entitled to, for your own work</li>
          <li>Share links to public pages</li>
        </ul>
        <p className="font-semibold text-white">What you may not do:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Re-sell, redistribute, or sublicense any content or templates</li>
          <li>Reproduce courses or materials for commercial training programs without written permission</li>
          <li>Copy, modify, or create derivative works of the platform itself</li>
          <li>Use our content to train AI models or for similar machine-learning purposes</li>
        </ul>
      </Section>

      <Section title="4. User conduct">
        <p>You agree not to use the Service for any unlawful purpose or in violation of these Terms. Prohibited behaviour includes:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Attempting to access accounts, systems, or data without authorization</li>
          <li>Using the lessons to break into, scan, or harass a real target</li>
          <li>Uploading malicious code, viruses, or harmful content</li>
          <li>Interfering with the operation of the Service</li>
          <li>Harassing, abusing, or threatening other users or staff</li>
          <li>Using automated tools (scrapers, bots) to extract content without permission</li>
        </ul>
      </Section>

      <Section title="5. Third-party services">
        <p>
          The Service may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.
        </p>
        <p>Sign-in is provided by Clerk. Records of account entitlement and usage are stored in Supabase. The site is hosted on Vercel. Those services have their own terms and privacy policies.</p>
      </Section>

      <Section title="6. Paid packs, cancellation, and refunds">
        <p>
          Field Pack (A$15) and Full Library (A$39) are planned one-off packs. They are not subscriptions, and they are not for sale while checkout is closed. One-off packs do not renew.
        </p>
        <p>
          Cancel anytime: if we later offer a subscription, you can cancel it at any time. Cancellation stops the next charge. Access already paid for runs to the end of that period. There is no subscription to cancel today.
        </p>
        {/* REFUND WORDING: pending legal review. Not in force while checkout is off. */}
        <p>
          Refunds{REFUND_PENDING_LEGAL_REVIEW ? " (pending legal review)" : ""}: this refund wording is a draft for when checkout opens. It is not a live promise today, because nothing is charged. When a paid pack is sold, you may ask for a refund within 3 days of purchase by emailing {CONTACT_EMAIL}. This sits alongside guarantees that cannot be excluded under the Australian Consumer Law. The draft does not limit those rights.
        </p>
      </Section>

      <Section title="7. Limitation of liability">
        <p>
          To the fullest extent permitted by applicable law, {OPERATOR_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service, whether based on warranty, contract, tort (including negligence), or any other legal theory.
        </p>
        <p>
          The educational content is for informational purposes only and does not constitute professional advice. You are responsible for following the law that applies to you.
        </p>
      </Section>

      <Section title="8. Termination">
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the Service ceases immediately.
        </p>
        <p>
          If you wish to terminate your account, you may stop using the Service or delete your account from your account settings. Sections 3, 6, 7, and 10 survive termination.
        </p>
      </Section>

      <Section title="9. Changes to these Terms">
        <p>
          We may modify these Terms at any time. Material changes will be posted on this page. Your continued use of the Service after any changes constitutes acceptance of the new Terms. The &ldquo;Last updated&rdquo; date shows when this page last changed.
        </p>
      </Section>

      <Section title="10. Governing law">
        <p>
          The Service is operated by {OPERATOR_NAME}. These Terms are governed by {GOVERNING_LAW}, and the courts of Queensland have exclusive jurisdiction, subject to any right you have that cannot be excluded. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
        </p>
      </Section>

      <Section title="11. Contact">
        <p>
          Questions about these Terms: <a className="font-semibold text-indigo-300 hover:text-indigo-200" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <p>
          <Link href="/privacy" className="text-indigo-300 hover:text-indigo-200">Privacy</Link>
          {" · "}
          <Link href="/pricing" className="text-indigo-300 hover:text-indigo-200">Pricing</Link>
        </p>
      </Section>
    </div>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10 space-y-3 text-sm leading-relaxed">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      {children}
    </section>
  )
}
