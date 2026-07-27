import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50"><div className="mx-auto max-w-3xl px-4 md:px-6 py-8">
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 mb-4"><ArrowLeft className="h-4 w-4" /> Back to Blog</Link>
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3"><span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> July 26, 2026</span><span>8 min</span></div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-3">Dark Web Monitoring for Analysts</h1>
        <p className="text-lg text-slate-600">What's on the dark web, how to monitor it, and what to do with findings.</p>
      </div></div>
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-10">
        <p className="text-base text-slate-700 leading-relaxed mb-6">This article is part of our ongoing series for OSINT 101. Full content coming soon.</p>
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
          <h2 className="font-bold text-lg mb-2">Related articles</h2>
          <div className="flex flex-wrap gap-2">
            <Link key="google-dorking-2026" href="/blog/google-dorking-2026" className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-slate-400">Google Dorking for Investigators</Link>
            <Link key="social-media-osint" href="/blog/social-media-osint" className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-slate-400">Social Media OSINT Techniques</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
