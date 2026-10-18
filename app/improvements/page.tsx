import Link from "next/link"
import { Construction, ArrowLeft } from "lucide-react"
import { launchOfferLabel } from "@/lib/launch-offer"

export const dynamic = "force-dynamic"

export default function ImprovementsPage() {
  const offerLabel = launchOfferLabel()

  return (
    <div className="min-h-screen bg-white">
      <section className="border-b bg-white py-16 text-center">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-cyan-100 p-4">
              <Construction className="h-12 w-12 text-cyan-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-3">We&apos;re Building Something Better</h1>
          <p className="text-slate-600 max-w-lg mx-auto mb-4 text-lg">
            The payment system isn&apos;t live yet. Early supporters will hear about launch pricing first.
          </p>
          {offerLabel ? (
            <p className="text-slate-700 max-w-lg mx-auto mb-8 text-base font-semibold">
              {offerLabel}. It applies to the first billing period for waitlist members and new buyers.
            </p>
          ) : (
            <div className="mb-8" />
          )}
          <div className="flex items-center justify-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
