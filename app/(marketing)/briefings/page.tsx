import Link from "next/link"
import type { Metadata } from "next"
import { BRIEFINGS, tierLabel } from "@/lib/offer"

export const metadata: Metadata = {
  title: "Briefings",
  description: "OSINT 101 briefings. Sherlock and Reading Email Headers are free with an account. The rest are in the Full Library, which is not on sale yet.",
}

export default function BriefingsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-extrabold text-white">Briefings</h1>
      <p className="mt-4 max-w-2xl text-slate-400">
        Short reading notes. They do not run a scan. Sherlock and Reading Email Headers are free with an account. The others are Full Library and stay on Coming soon until checkout opens.
      </p>
      <ul className="mt-10 space-y-4">
        {BRIEFINGS.map((briefing) => (
          <li key={briefing.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">{tierLabel(briefing.tier)}</p>
            <h2 className="mt-2 text-xl font-bold text-white">{briefing.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{briefing.summary}</p>
            <Link href={`/briefings/${briefing.id}`} className="mt-4 inline-flex text-sm font-semibold text-indigo-300 hover:text-indigo-200">
              {briefing.tier === "free" ? "Create a free account to read" : "Coming soon"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
