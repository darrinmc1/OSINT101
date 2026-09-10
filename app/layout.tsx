import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/json-ld"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "AI Workforce Training",
    template: "%s | AI Workforce Training",
  },
  description:
    "Professional AI and machine learning training programs for individuals and enterprises. Upskill your workforce with cutting-edge AI courses.",
  metadataBase: new URL("https://aiworkforcetraining.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aiworkforcetraining.com",
    siteName: "AI Workforce Training",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aiworkforcetraining",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        {children}
      </body>
    </html>
  )
}
