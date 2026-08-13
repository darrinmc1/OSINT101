import { SignIn } from "@clerk/nextjs"
import Link from "next/link"
import { hasClerkPublishableKey } from "@/lib/clerk"

export default function SignInPage() {
  if (!hasClerkPublishableKey()) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
        <div className="w-full max-w-sm text-center space-y-4">
          <h1 className="text-xl font-semibold text-white">Sign-in unavailable</h1>
          <p className="text-sm text-slate-400">
            Authentication is not configured in this environment.
          </p>
          <Link href="/case-file" className="inline-block text-sm text-cyan-400 hover:text-cyan-300">
            Continue to Case File Planner
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-sm">
        <SignIn
          appearance={{ elements: { card: { boxShadow: "none", border: "1px solid rgba(255,255,255,0.1)", background: "#1e293b" } } }}
          signUpUrl="/sign-up"
        />
      </div>
    </div>
  )
}
