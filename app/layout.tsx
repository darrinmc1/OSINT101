import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import { siteConfig } from "@/lib/site-config"
import { FeedbackWidget } from "@/components/feedback-widget"
import { WaitlistPopup } from "@/components/waitlist-popup"
import { hasClerkPublishableKey } from "@/lib/clerk"
import { NetworkFooter } from "@/components/network-footer"
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
  alternates: { canonical: "/" },
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
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    url: SELF_URL,
    siteName: siteConfig.name,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/opengraph-image"],
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
        <footer className="border-t border-white/10 bg-slate-900/80 mt-16">
          <div className="mx-auto max-w-6xl px-4 py-8 text-center text-xs text-slate-400">
            <NetworkFooter />
            <p className="mt-3">&copy; {new Date().getFullYear()} OSINT Training</p>
          </div>
        </footer>
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
