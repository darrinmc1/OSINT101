import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import { siteConfig } from "@/lib/site-config"
import { FeedbackWidget } from "@/components/feedback-widget"
import { WaitlistPopup } from "@/components/waitlist-popup"
import { hasClerkPublishableKey } from "@/lib/clerk"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI training",
    "artificial intelligence",
    "machine learning",
    "prompt engineering",
    "ChatGPT",
    "AI tools",
    "learn AI",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
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
            <p className="font-semibold text-slate-300 mb-2">Empire-HQ Portfolio</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-3">
              <a href="https://freelancepro.com" className="hover:text-cyan-400">FreelancePro</a>
              <a href="https://moneymastery.com" className="hover:text-cyan-400">Money Mastery</a>
              <a href="https://aiforsmb.com" className="hover:text-cyan-400">AI for SMB</a>
              <a href="https://devops101.com" className="hover:text-cyan-400">DevOps 101</a>
              <a href="https://landscapedesign.com" className="hover:text-cyan-400">Landscape Design</a>
              <a href="https://pilatesflow.com" className="hover:text-cyan-400">PilatesFlow</a>
              <a href="https://abcsofcyber.com" className="hover:text-cyan-400">ABC of Cyber</a>
              <a href="https://osint101.com" className="hover:text-cyan-400">OSINT 101</a>
              <a href="https://peelboss.com" className="hover:text-cyan-400">Peel Boss</a>
              <a href="https://ticu.tv" className="hover:text-cyan-400">TICU.TV</a>
              <a href="https://theintelanalystacademy.com" className="hover:text-cyan-400">Intel Academy</a>
            </div>
            <p>&copy; {new Date().getFullYear()} OSINT Training</p>
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
