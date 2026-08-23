import { JsonLd, organizationSchema } from "@/components/json-ld"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <JsonLd data={organizationSchema} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
