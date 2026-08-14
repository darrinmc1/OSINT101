import Link from "next/link"
import { Lock, BookOpen, Shield } from "lucide-react"
import { CASE_FILE_PRO } from "@/lib/pricing"
import type { CaseFilePlan, PlanStep } from "@/lib/case-file/types"

const phaseLabel: Record<PlanStep["phase"], string> = {
  direction: "Direction",
  collection: "Collection",
  processing: "Processing",
  analysis: "Analysis",
  dissemination: "Dissemination",
  opsec: "OPSEC",
}

function StepCard({ step }: { step: PlanStep }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-300">
          {phaseLabel[step.phase]}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-slate-500">
          {step.tier === "foundations" ? "Foundations" : "Advanced"}
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed mb-3">{step.detail}</p>
      <p className="text-xs text-slate-500 mb-4">{step.why}</p>
      <ul className="flex flex-wrap gap-2">
        {step.citations.map((citation) => (
          <li key={`${step.id}-${citation.moduleId}-${citation.sectionTitle}`}>
            <Link
              href={citation.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-200 hover:bg-indigo-500/20"
            >
              <BookOpen className="h-3 w-3" />
              {citation.moduleTitle} — {citation.sectionTitle}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}

export function CaseFilePlanView({ plan }: { plan: CaseFilePlan }) {
  return (
    <div className="space-y-8">
      <header className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
            Case file · {plan.classification}
          </p>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-slate-400">
            <span>{plan.engine === "ai" ? "AI-assisted, catalog-cited" : "Catalog method"}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={plan.generatedAt}>{new Date(plan.generatedAt).toLocaleString()}</time>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white mb-4">
          {plan.objective}
        </h2>
        <p className="text-sm text-slate-400 italic">Original ask: {plan.query}</p>
      </header>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-start gap-3 mb-4">
          <Shield className="h-5 w-5 text-amber-400 mt-0.5 shrink-0" />
          <div>
            <h3 className="font-bold text-white">Ethics &amp; OPSEC</h3>
            <p className="text-sm text-slate-400 mt-1">{plan.disclaimer}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Legal</h4>
            <ul className="space-y-1 text-sm text-slate-300">
              {plan.legal.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">OPSEC</h4>
            <ul className="space-y-1 text-sm text-slate-300">
              {plan.opsec.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Out of scope</h4>
            <ul className="space-y-1 text-sm text-slate-300">
              {plan.outOfScope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">Intelligence cycle</h3>
        <ol className="grid md:grid-cols-5 gap-3">
          {Object.entries(plan.intelligenceCycle).map(([key, value]) => (
            <li key={key} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-300 mb-2">
                {key}
              </p>
              <p className="text-sm text-slate-300">{value}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold text-white">Foundations (free)</h3>
        {plan.foundations.map((item) => (
          <StepCard key={item.id} step={item} />
        ))}
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold text-white">Advanced techniques</h3>
        {plan.advancedUnlocked ? (
          plan.advanced.length ? (
            plan.advanced.map((item) => <StepCard key={item.id} step={item} />)
          ) : (
            <p className="text-sm text-slate-400">
              This question is covered by foundation modules. Advanced lanes were not required.
            </p>
          )
        ) : (
          <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 p-6">
            <div className="flex items-start gap-3 mb-4">
              <Lock className="h-5 w-5 text-violet-300 mt-0.5" />
              <div>
                <p className="font-bold text-white">{CASE_FILE_PRO.name} — {CASE_FILE_PRO.displayPrice}</p>
                <p className="text-sm text-slate-400 mt-1">
                  Intermediate and Advanced module methods (people profiling, SOCMINT, GEOINT, recon, dark web, crypto, forensics) are a paid gate: {CASE_FILE_PRO.name} — {CASE_FILE_PRO.displayPrice}. Checkout coming. Clerk sign-in still unlocks this MVP.
                </p>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 gap-2 mb-5">
              {plan.advancedTeasers.map((mod) => (
                <li key={mod.moduleId}>
                  <Link
                    href={mod.href}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-950/40 px-3 py-2 text-sm text-slate-300 hover:border-violet-400/40"
                  >
                    <span>{mod.moduleTitle}</span>
                    <span className="text-[10px] uppercase tracking-wider text-violet-300">{mod.level}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/sign-in"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2 text-sm font-bold text-white"
              >
                Sign in
              </Link>
              <Link href="/pricing" className="inline-flex items-center rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200">
                {CASE_FILE_PRO.name} — {CASE_FILE_PRO.displayPrice}
              </Link>
              <span className="inline-flex items-center rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-400">
                checkout coming
              </span>
            </div>
          </div>
        )}
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">Stop conditions</h3>
        <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
          {plan.stopConditions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-3">Study next</h3>
        <ul className="flex flex-wrap gap-2">
          {plan.studyNext.map((mod) => (
            <li key={mod.moduleId}>
              <Link
                href={mod.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300 hover:border-indigo-400/40"
              >
                {mod.moduleTitle}
                <span className="text-slate-500">{mod.level}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
