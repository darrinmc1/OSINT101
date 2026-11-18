import type { Metadata } from "next"
import { SignUp } from "@clerk/nextjs"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { hasClerkPublishableKey } from "@/lib/clerk"
import { pageMeta } from "@/lib/page-meta"
import { INTRO_RENEWAL_LINE } from "@/lib/pricing"

export const metadata: Metadata = {
  ...pageMeta({
    title: "Sign up",
    description: "Create a free OSINT 101 account with your email. Nothing is charged.",
    path: "/sign-up",
  }),
  robots: { index: false, follow: false },
}

export default function SignUpPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 px-4 pb-16 pt-28 text-slate-50">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-3xl font-extrabold">Create a free account</h1>
          <p className="mt-3 text-sm text-slate-400">
            Use your email. The first month of the base plan is A$5 for people who do.{" "}
            {INTRO_RENEWAL_LINE} This form does not take a card.
          </p>
        </div>
        <div className="mx-auto mt-8 flex max-w-sm justify-center">
          {hasClerkPublishableKey() ? (
            <SignUp
              appearance={{ elements: { card: { boxShadow: "none", border: "1px solid rgba(255,255,255,0.1)", background: "#1e293b" } } }}
              signInUrl="/sign-in"
            />
          ) : (
            <div className="w-full space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
              <p className="text-sm text-slate-300">
                The account form is Clerk, and this environment does not have the Clerk keys.
                They already exist on the Production environment in Vercel. Add those same keys
                to Preview, and allow this preview host in the Clerk dashboard. No new keys.
              </p>
              <Link href="/pricing" className="inline-block text-sm font-bold text-indigo-300">
                Back to pricing
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
