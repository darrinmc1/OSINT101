import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmailCapture } from "@/components/email-capture"
import { pageMeta } from "@/lib/page-meta"

export const metadata: Metadata = pageMeta({
  title: "Coming soon",
  description: "Coming soon. Join the list.",
  path: "/improvements",
})

export default function ImprovementsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 pt-16 text-slate-50">
        <EmailCapture neutral source="pricing-coming-soon" />
      </main>
      <Footer />
    </>
  )
}
