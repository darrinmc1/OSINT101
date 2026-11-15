import { SignUp } from "@clerk/nextjs"
import Link from "next/link"
import { hasClerkPublishableKey } from "@/lib/clerk"

export default function SignUpPage() {
  if (!hasClerkPublishableKey()) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
        <div className="w-full max-w-sm text-center space-y-4">
          <h1 className="text-xl font-semibold text-white">Create a free account</h1>
          <p className="text-sm text-slate-400">
            Sign-up uses Clerk. Set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY, then run the Supabase accounts migration. A new account is free. It does not buy Field Pack or Full Library.
          </p>
          <Link href="/pricing" className="inline-block text-sm text-cyan-400 hover:text-cyan-300">
            Back to pricing
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-sm space-y-4">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-white">Create a free account</h1>
          <p className="mt-2 text-sm text-slate-400">Free modules, the Case File, two PDFs, and two briefings. No charge.</p>
        </div>
        <SignUp
          appearance={{ elements: { card: { boxShadow: "none", border: "1px solid rgba(255,255,255,0.1)", background: "#1e293b" } } }}
          signInUrl="/sign-in"
          forceRedirectUrl="/modules"
          fallbackRedirectUrl="/modules"
        />
      </div>
    </div>
  )
}
