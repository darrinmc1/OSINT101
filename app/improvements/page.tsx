import Link from "next/link"
import { Construction, ArrowLeft } from "lucide-react"

export default function ImprovementsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="border-b bg-white py-16 text-center">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-cyan-100 p-4">
              <Construction className="h-12 w-12 text-cyan-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-3">Checkout isn&apos;t live yet</h1>
          <p className="text-slate-600 max-w-lg mx-auto mb-8 text-lg">
            Card billing is not open. The planned offers are Free (A$0), Field Pack (A$15 one-off), and Full Library (A$39 one-off). Nothing is charged on this page.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/pricing#join" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Coming soon / join the list
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
