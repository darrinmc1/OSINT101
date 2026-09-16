import Link from "next/link"
import { Check, Shield, FileSearch, BookOpen } from "lucide-react"

const availableNow = [
  "Core OSINT learning modules",
  "Case File Planner with limited free use",
  "Resource library, blog and practical guides",
  "XP and badge progression",
  "No paid checkout required",
]

const inDevelopment = [
  "Expanded Case File Planner access",
  "Additional advanced modules and exercises",
  "More downloadable investigation helpers",
  "Certificates and expanded progression features",
  "Paid access only after billing is live and tested",
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-300">
            <Shield className="h-4 w-4" /> Early access
          </div>
          <h1 className="text-4xl font-extrabold md:text-5xl">Learn OSINT free while we finish the paid layer.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Checkout is not live yet, so OSINT101 is not publishing a paid price or a “most popular” plan. Use the working training and tools now, then join early access if you want to know when expanded access is ready.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <section className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-7">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
              <BookOpen className="h-5 w-5" />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">Available now</p>
            <h2 className="mt-2 text-2xl font-bold">Training and practical tools</h2>
            <ul className="mt-6 space-y-3">
              {availableNow.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/modules" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 font-bold text-slate-950 hover:bg-emerald-400">
              Browse modules
            </Link>
          </section>

          <section className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-7">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">
              <FileSearch className="h-5 w-5" />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">In development</p>
            <h2 className="mt-2 text-2xl font-bold">Expanded investigation workspace</h2>
            <ul className="mt-6 space-y-3">
              {inDevelopment.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/sign-up" className="mt-8 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-bold text-white hover:bg-white/10">
              Join early access
            </Link>
          </section>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <h2 className="text-xl font-bold">Want to see the moat first?</h2>
          <p className="mt-2 text-sm text-slate-400">Try the Case File Planner and build a structured investigation plan instead of only reading another OSINT article.</p>
          <Link href="/case-file" className="mt-5 inline-flex rounded-xl bg-indigo-500 px-5 py-3 font-bold text-white hover:bg-indigo-400">
            Open Case File Planner
          </Link>
        </div>
      </div>
    </main>
  )
}
