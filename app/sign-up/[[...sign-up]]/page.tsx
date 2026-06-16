import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16">
      <SignUp />
    </main>
  )
}
