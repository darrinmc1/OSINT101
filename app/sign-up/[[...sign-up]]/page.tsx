import { SignUp } from "@clerk/nextjs"
import Link from "next/link"
import { hasClerkPublishableKey } from "@/lib/clerk"

export default function SignUpPage() {
  if (!hasClerkPublishableKey()) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
        <div className="w-full max-w-sm text-center space-y-4">
          <h1 className="text-xl font-semibold text-white">Sign-up unavailable</h1>
          <p className="text-sm text-slate-400">
            Authentication is not configured in this environment.
          </p>
          <Link href="/modules" className="inline-block text-sm text-cyan-400 hover:text-cyan-300">
            Continue to modules
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-sm">
        <SignUp
          appearance={{ elements: { card: { boxShadow: "none", border: "1px solid rgba(255,255,255,0.1)", background: "#1e293b" } } }}
          signInUrl="/sign-in"
        />
      </div>
    </div>
  )
}
