import type { Metadata } from "next"
import ResourcesPage from "@/components/ResourcesPage"
import { pageMeta } from "@/lib/page-meta"

export const metadata: Metadata = pageMeta({
  title: "OSINT Resources",
  description: "Checklists, cheat sheets, and field templates for open-source investigations. Fewer mystery tabs, more written-down method.",
  path: "/resources",
})

export default function ResourcesIndexPage() {
  return <ResourcesPage />
}
