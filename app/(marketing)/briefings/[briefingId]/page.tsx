import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AccountGate } from "@/components/account-gate"
import { briefingById } from "@/lib/offer"
import { decideAccess, getViewer, recordUsage } from "@/lib/viewer"

export const dynamic = "force-dynamic"

export function generateMetadata({ params }: { params: { briefingId: string } }): Metadata {
  const briefing = briefingById(params.briefingId)
  return { title: briefing?.title ?? "Briefing" }
}

export default async function BriefingPage({ params }: { params: { briefingId: string } }) {
  const briefing = briefingById(params.briefingId)
  if (!briefing) notFound()

  const viewer = await getViewer()
  const decision = decideAccess(viewer, briefing.tier)
  if (decision.status !== "allowed") {
    return <AccountGate decision={decision} title={briefing.title} required={briefing.tier} />
  }

  await recordUsage(viewer, "briefing_view", briefing.id, `/briefings/${briefing.id}`)

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">Briefing</p>
      <h1 className="mt-3 text-4xl font-extrabold text-white">{briefing.title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-slate-300">{briefing.summary}</p>
      <p className="mt-6 text-sm leading-relaxed text-slate-400">
        This page is a reading note for the course. It does not search usernames, query inboxes, or contact any outside target. The longer production lesson text for this briefing is on the live course archive and is not copied into this preview branch.
      </p>
    </article>
  )
}
