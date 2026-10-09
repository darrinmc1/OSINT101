import type { Metadata } from "next"
import DashboardHome from "@/components/dashboard-home"
import { pageMeta } from "@/lib/page-meta"

export const metadata: Metadata = {
  ...pageMeta({
    title: "Dashboard",
    description: "Your OSINT 101 lesson progress, badges, and next module.",
    path: "/dashboard",
  }),
  robots: { index: false, follow: false },
}

export default function DashboardPage() {
  return <DashboardHome />
}
