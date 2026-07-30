import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{siteConfig.theme.emoji}</span>
              <span className="font-display text-lg font-bold gradient-text-cyan">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm text-slate-200 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {siteConfig.nav.marketing.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm text-slate-200 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Empire Network */}
          <div>
            <h4 className="font-display font-bold text-sm text-slate-200 uppercase tracking-wider mb-4">
              Empire Network
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="https://intelacademy.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">Intel Academy</a></li>
              <li><a href="https://abcofcyber.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">ABC of Cyber</a></li>
              <li><a href="https://aitraining.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">AI Training</a></li>
              <li><a href="https://peelboss.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">Peel Boss</a></li>
              <li><a href="https://pilatesflow.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">PilatesFlow</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
