import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import { siteConfig } from "@/lib/site-config"
import { FeedbackWidget } from "@/components/feedback-widget"
import { WaitlistPopup } from "@/components/waitlist-popup"
import { hasClerkPublishableKey } from "@/lib/clerk"
import { SELF_URL } from "@/lib/network"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  metadataBase: new URL(SELF_URL),
  robots: { index: true, follow: true },
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "OSINT",
    "open source intelligence",
    "OSINT training",
    "OSINT course",
    "investigation techniques",
    "geolocation OSINT",
    "intelligence analysis",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: ["/images/og-osint101.svg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-osint101.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml", sizes: "any" }],
    shortcut: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Preview / CI often lack Clerk env vars. Middleware already skips auth when
  // keys are missing; ClerkProvider must do the same or static prerender fails.
  const body = (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased ${siteConfig.theme.bgClass} ${siteConfig.theme.textClass}`}
      >
        {children}
        <FeedbackWidget />
        <WaitlistPopup />
      </body>
    </html>
  )

  if (!hasClerkPublishableKey()) {
    return body
  }

  return <ClerkProvider>{body}</ClerkProvider>
}
