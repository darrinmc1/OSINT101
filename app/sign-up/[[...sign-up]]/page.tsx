import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
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
