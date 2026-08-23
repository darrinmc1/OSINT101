import Link from "next/link"
import { Check, X } from "lucide-react"

const FREE_FEATURES = [
  "All written guides & tutorials",
  "Beginner → advanced modules",
  "Full OSINT tool directory",
  "Community forum",
  "No account required",
]

const PRO_FEATURES = [
  "Everything in Free",
  "Live instructor-led workshops",
  "Downloadable cheat sheets",
  "Certificate of completion",
  "Priority support & Discord",
]

export default function PricingSnapshot() {
  return (
    <section className="py-20 px-4 bg-muted/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Free vs. Premium — at a glance</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The core OSINT 101 curriculum is <strong>completely free</strong>. Premium tiers
            (coming soon) unlock live training, credentials and team features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 mb-3">
                Always free
              </span>
              <h3 className="text-2xl font-bold">Free</h3>
              <p className="text-4xl font-extrabold mt-1">
                $0
                <span className="text-base font-normal text-muted-foreground"> / forever</span>
              </p>
            </div>
            <ul className="space-y-3">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/learn"
              className="mt-8 block text-center rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:bg-accent transition-colors"
            >
              Start learning free
            </Link>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-primary bg-primary/5 p-8 relative">
            <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground">
              Coming soon
            </span>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
                Premium
              </span>
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-4xl font-extrabold mt-1">
                $9
                <span className="text-base font-normal text-muted-foreground"> / month</span>
              </p>
            </div>
            <ul className="space-y-3">
              {PRO_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/pricing"
              className="mt-8 block text-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              See full pricing
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Questions?{" "}
          <Link href="/pricing" className="underline underline-offset-2 hover:text-foreground">
            View full pricing &amp; FAQ
          </Link>
        </p>
      </div>
    </section>
  )
}
