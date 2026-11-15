import type { ReactNode } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { CONTACT_EMAIL, GOVERNING_LAW, OPERATOR_NAME } from "@/lib/legal"

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${OPERATOR_NAME} handles an OSINT 101 account: sign-in, entitlement, and the pages, briefings, and downloads each user opens.`,
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-slate-300">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">Legal</p>
      <h1 className="mt-3 text-4xl font-extrabold text-white">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-400">Last updated: 15 November 2026</p>
      <p className="mt-6 text-lg text-slate-300">
        {OPERATOR_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates OSINT 101 (the &ldquo;Service&rdquo;). This page explains what we collect when you create a free account and use the lessons.
      </p>

      <Section title="1. Information you give us">
        <ul className="list-disc space-y-1 pl-6">
          <li>Name and email address, when you create an account or write to us</li>
          <li>Account sign-in details, which Clerk stores for authentication</li>
          <li>Anything you type into the contact form, the mailing list, feedback, or the Case File Planner</li>
        </ul>
      </Section>

      <Section title="2. What we record about use">
        <p>Once you are signed in, we store a usage event for that account so we can see what each person opens, uses, and looks at:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Module views</li>
          <li>Briefing views</li>
          <li>PDF downloads</li>
          <li>Case File Planner opens</li>
          <li>Resource guide views</li>
        </ul>
        <p>
          Each event stores your account id, the item id, the path, and the time. It does not store a dossier, a scan of a third party, or the text you paste into the planner. Your entitlement is stored as one of free, field_pack, or full_library, and a new account starts at free.
        </p>
        <p>
          An admin view shows the account count and these events. It is limited to email addresses listed in the server environment. It is not a public page.
        </p>
      </Section>

      <Section title="3. Analytics and hosting">
        <p>
          Google Analytics is optional. When it is on, it receives ordinary page-view data: pages, device, and a rough location. That feed is separate from the per-account usage log above. When it is off, that tag is not loaded.
        </p>
        <p>Vercel hosts the site and keeps standard request logs. Clerk keeps the sign-in session. Supabase stores the profile and the usage events. Resend or Mailchimp are used only if you join the mailing list or we send a message you asked for.</p>
      </Section>

      <Section title="4. How we use it">
        <ul className="list-disc space-y-1 pl-6">
          <li>To let you into the free lessons and, later, a pack you are entitled to</li>
          <li>To see how many people have accounts and which lessons they open</li>
          <li>To answer a message you send</li>
          <li>To spot abuse of the account or the site</li>
        </ul>
        <p>We do not sell the usage log. We do not use it to run searches against people you are reading about.</p>
      </Section>

      <Section title="5. Cookies">
        <p>
          Clerk sets a session cookie so you stay signed in. That cookie is required for the account. You can block it in the browser; the free lessons then stay behind the sign-up wall.
        </p>
      </Section>

      <Section title="6. Retention and your rights">
        <p>
          We keep the account and its usage events while the account exists. You can ask us to correct or delete them. We will respond within 30 days, unless a law requires us to keep a record.
        </p>
        <p>The Service is not for anyone under 16. We do not knowingly collect their personal information.</p>
        <p>These practices are governed by {GOVERNING_LAW}, including the Australian Privacy Principles where they apply.</p>
      </Section>

      <Section title="7. Contact">
        <p>
          Privacy questions: <a className="font-semibold text-indigo-300 hover:text-indigo-200" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <p>
          <Link href="/terms" className="text-indigo-300 hover:text-indigo-200">Terms</Link>
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
