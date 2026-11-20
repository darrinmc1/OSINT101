import { NextRequest, NextResponse } from "next/server"
import { readFile } from "fs/promises"
import path from "path"
import { pdfById } from "@/lib/offer"
import { decideAccess, getViewer, recordUsage } from "@/lib/viewer"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const pdf = pdfById(params.id)
  if (!pdf) return NextResponse.json({ error: "Not found" }, { status: 404 })

  const viewer = await getViewer()
  const decision = decideAccess(viewer, pdf.tier)

  if (decision.status === "sign_in") {
    const url = new URL("/sign-up", req.url)
    url.searchParams.set("next", "/downloads")
    return NextResponse.redirect(url)
  }
  if (decision.status === "coming_soon") {
    return NextResponse.redirect(new URL("/pricing#packs", req.url))
  }

  await recordUsage(viewer, "download", pdf.id, `/api/downloads/${pdf.id}`)

  try {
    const filePath = path.join(process.cwd(), "private", "downloads", pdf.file)
    const bytes = await readFile(filePath)
    return new NextResponse(new Uint8Array(bytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${pdf.file}"`,
        "Cache-Control": "private, no-store",
        "X-Robots-Tag": "noindex",
      },
    })
  } catch {
    console.error("[downloads] file missing", pdf.file)
    return NextResponse.json({ error: "File unavailable" }, { status: 404 })
  }
}
