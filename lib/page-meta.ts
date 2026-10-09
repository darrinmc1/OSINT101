import type { Metadata } from "next"
import { SELF_URL } from "@/lib/network"

const OG_IMAGE = "/images/og-osint101.svg"

export function pageMeta({
  title,
  description,
  path,
  absolute = false,
}: {
  title: string
  description: string
  path: string
  absolute?: boolean
}): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`
  const url = canonical === "/" ? SELF_URL : `${SELF_URL}${canonical}`
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url,
      images: [OG_IMAGE],
    },
    twitter: {
      title,
      description,
      images: [OG_IMAGE],
    },
  }
}
