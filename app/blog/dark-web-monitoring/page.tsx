import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import HumorBreak from "@/components/humor-break"

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50"><div className="mx-auto max-w-3xl px-4 md:px-6 py-8">
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 mb-4"><ArrowLeft className="h-4 w-4" /> Back to Blog</Link>
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3"><span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> July 26, 2026</span><span>8 min</span></div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-3">Dark Web Monitoring for Analysts</h1>
        <p className="text-lg text-slate-600">What's on the dark web, how to monitor it, and what to do with findings.</p>
      </div></div>
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-10">
        <div className="prose prose-slate max-w-none">
          <p className="text-base text-slate-700 leading-relaxed mb-6">
            The dark web is not a lawless wasteland. It's a parallel internet — smaller, slower, and less eventful than most analysts expect — but one where certain high-value activities concentrate. For OSINT investigators, knowing what's actually there, how to monitor it without drawing attention, and how to turn findings into actionable intelligence separates signal from years of noise.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">Deconstructing the Hype</h2>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Most popular coverage of the dark web is wrong in one critical way: it massively overstates volume. The Tor network handles roughly 2-3 million daily users globally, which sounds like a lot until you realize Reddit handles that in under an hour. The dark web is not teeming with activity — it's a low-traffic environment where the same handful of marketplaces, forums, and leak sites dominate year after year.
          </p>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            What the dark web <em>does</em> offer that surface web OSINT cannot: unindexed forum archives, illicit marketplace listings, and — most importantly — leaked databases posted for sale or free distribution. A credential dump that appears on a dark web forum may contain data from a breach not yet publicly disclosed. That early warning window is the real value of dark web monitoring.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">What's Actually There (2026 Snapshot)</h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">Marketplaces</h3>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Dark web marketplaces follow predictable patterns: a new one launches, gains credibility, gets taken down in a law enforcement operation, and is replaced within weeks. The current major players as of mid-2026:
          </p>
          <ul className="list-disc pl-6 text-base text-slate-700 leading-relaxed mb-4 space-y-2">
            <li><strong>Incognito Market</strong> — the largest active marketplace, specializing in drugs, stolen credentials, and counterfeit documents. Requires PGP-encrypted login and Monero (XMR) transactions only.</li>
            <li><strong>Flugsvamp 4.0</strong> — Swedish-focused marketplace, known for high vendor verification standards. Useful for regional intelligence on European cybercriminal activity.</li>
            <li><strong>MGM Grand</strong> — newer marketplace (launched 2025) focused on financial fraud tools: carding, cloned cards, bank login credentials.</li>
            <li><strong>ASAP Market</strong> — recovering from a 2024 exit scam under new administration. Lower trust level but significant volume.</li>
          </ul>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            <strong>Key shift in 2025-2026:</strong> Monero has nearly complete replaced Bitcoin on dark web marketplaces. Most markets no longer accept BTC at all. This complicates financial analysis but has not reduced transaction volume.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Forums and Leak Sites</h3>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Forums are where intelligence gathering really happens. Unlike marketplaces (transactional, fast-moving), forums host discussions where threat actors share techniques, vet collaborators, and leak data:
          </p>
          <ul className="list-disc pl-6 text-base text-slate-700 leading-relaxed mb-4 space-y-2">
            <li><strong>Dread</strong> — the closest thing to a Reddit for the dark web. General discussion, marketplace reviews, scammer warnings. Rules prohibit direct market links, making it a safer browsing surface for analysts.</li>
            <li><strong>Exploit.in</strong> — Russian-language forum. Heavy focus on zero-day sales, malware development, and access brokers. Requires an invitation or paid referral to join. Read-only access is possible via cached snapshots.</li>
            <li><strong>XSS</strong> — another Russian-language forum, more technical than Exploit.in. Source code leaks, exploit development threads, CVE discussions from an adversarial perspective.</li>
            <li><strong>Ransomware leak sites</strong> — not forums, but .onion sites operated by ransomware groups. Each group maintains its own blog where victim data is published when ransoms go unpaid. These are the most time-sensitive monitoring targets.</li>
          </ul>

          <HumorBreak tag="general" />

        <h2 className="text-xl font-bold mt-8 mb-4">Setting Up a Monitoring Pipeline</h2>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Ethical and legal constraints matter here. Accessing dark web sites is not illegal in most jurisdictions. However, downloading stolen data, interacting with illegal marketplaces, or making purchases absolutely is. The standard posture: <strong>observe, record, do not engage</strong>.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Infrastructure</h3>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Your monitoring setup needs three layers:
          </p>
          <ol className="list-decimal pl-6 text-base text-slate-700 leading-relaxed mb-4 space-y-2">
            <li><strong>Isolated VM or container</strong> — a dedicated environment running Tails or Whonix. Never run Tor Browser on your main OS. The Whonix Gateway setup (two VMs: one for Tor, one for workstation) is the gold standard for compartmentalization.</li>
            <li><strong>Tor Browser with NoScript and uBlock Origin</strong> — JavaScript is the primary attack vector on the dark web. Default Tor Browser settings are good; NoScript hardening to block all scripts by default is better. Enable JavaScript only for specific trusted .onion sites, and only on a per-session basis.</li>
            <li><strong>Screenshot and archival pipeline</strong> — use <code className="bg-slate-100 px-1 rounded">monolith</code> (a single-file HTML archiver) or <code className="bg-slate-100 px-1 rounded">single-file</code> browser extension to save complete copies of pages. Save screenshots with timestamps. Store everything in an encrypted, version-controlled directory.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-6 mb-2">Automated Monitoring</h3>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Manual browsing is necessary for discovery, but day-to-day monitoring should be automated. Open-source tools that still work in 2026:
          </p>
          <ul className="list-disc pl-6 text-base text-slate-700 leading-relaxed mb-4 space-y-2">
            <li><strong><a href="https://github.com/D4Vinci/OnionSearch" className="text-blue-600 underline">OnionSearch</a></strong> — multi-engine scraper for .onion sites. Provides a CLI for searching across multiple search engines (Ahmia, DarkSearch, Torch) and returning structured results.</li>
            <li><strong><a href="https://github.com/quantopian/skew" className="text-blue-600 underline">Skew</a></strong> — lightweight Python scraper for monitoring page changes on specified .onion URLs. Polls hourly and diffs the HTML. Alerts when a monitored page changes content. Good for tracking ransom blog updates and forum post edits.</li>
            <li><strong><a href="https://github.com/ail-project/ail-framework" className="text-blue-600 underline">AIL Framework</a></strong> — the heavy lifter. AIL (Analysis of Information Leaks) is a full-featured intelligence platform from the European Union's Cyber Security Agency (ENISA). It crawls dark web sites, extracts and indexes content, performs NLP analysis on forum posts, and can alert on keywords, regex patterns, or credit card formats. The setup is non-trivial (requires Redis, Elasticsearch, and multiple Python daemons), but it's the closest thing to an enterprise-grade dark web monitoring platform that is open source.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">Dark Web Search Engines</h2>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            You can't use Google to index .onion sites. You have to use dark-web-specific search engines, each with different coverage:
          </p>
          <ul className="list-disc pl-6 text-base text-slate-700 leading-relaxed mb-4 space-y-2">
            <li><strong><a href="http://juhanurmihxlp77nkq76byazcldy2hlmovfu2epvl5ankdibsot4csyd.onion" className="text-blue-600 underline">Ahmia</a></strong> — the most reputable .onion search engine. Operated by security researchers. Indexes .onion sites it can crawl, filtering out CSAM. Also available on the clearnet at ahmia.fi. Supports advanced search operators.</li>
            <li><strong><a href="http://darkzzx4avcsuofgfez5zq75cqcby5di5x2wqybv2abrf3xx3i3lpid.onion" className="text-blue-600 underline">DarkSearch</a></strong> — commercial .onion search engine. Larger index than Ahmia, but requires JavaScript enabled (security trade-off). Offers an API for automated queries. Indexes over 60,000 .onion sites.</li>
            <li><strong><a href="http://xmh57jrknzkhv6y3ls3ubitzfqnkrwxhopf5aygthi7d6rplyvk3noyd.onion" className="text-blue-600 underline">Torch</a></strong> — the oldest .onion search engine. Less reliable indexing but covers historical content that newer engines may have purged.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">What to Monitor and How to Interpret Findings</h2>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Prioritize your monitoring targets by intelligence value:
          </p>
          <ol className="list-decimal pl-6 text-base text-slate-700 leading-relaxed mb-4 space-y-2">
            <li><strong>Ransomware leak sites</strong> — these have the shortest intelligence half-life. A new victim posting means immediate action: verify the org, assess exposure, notify if within scope. Check hourly.</li>
            <li><strong>Credential dumps on forums</strong> — new dumps appear daily on Dread, Exploit.in, and dedicated leak channels. Cross-reference the domains in the dump against your organization or client. Check daily.</li>
            <li><strong>Marketplace listings mentioning your scope</strong> — searches for specific domains, company names, or product lines in marketplace descriptions. Do not click vendor links; just note the listing exists. Check weekly.</li>
            <li><strong>Threat actor chatter</strong> — forum discussions mentioning your industry, tools you use, or recent incidents at similar organizations. This is long-tail threat intelligence — check monthly unless a specific threat actor is active.</li>
          </ol>

          <h2 className="text-xl font-bold mt-8 mb-4">Legal and Ethical Boundaries</h2>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            The laws around dark web monitoring vary by jurisdiction, but a few universal rules apply:
          </p>
          <ul className="list-disc pl-6 text-base text-slate-700 leading-relaxed mb-4 space-y-2">
            <li><strong>Do not create accounts</strong> — on any dark web forum or marketplace, unless explicitly authorized by legal counsel and your monitoring framework. Passive observation only.</li>
            <li><strong>Do not click purchase links</strong> — even to "verify" a listing. The act of adding an item to a cart or initiating a transaction can violate computer fraud statutes.</li>
            <li><strong>Do not download stolen data</strong> — victim data published by ransomware groups is still stolen data. Screenshot the announcement page. Note the file names listed. Do not download the archives.</li>
            <li><strong>Document everything</strong> — maintain a chain of custody log: date, time, URL, what you observed, and what action you took. If findings lead to a law enforcement referral, your documentation is the foundation.</li>
          </ul>
          <p className="text-base text-slate-700 leading-relaxed mb-6">
            The most common reason investigations get derailed is an eager analyst crossing from observation into interaction. Once you post on a forum, message a vendor, or download a file, you are no longer an OSINT analyst — you are a participant. That distinction matters legally, ethically, and operationally.
          </p>

          <div className="border-t border-slate-200 pt-6 mt-8">
            <h3 className="font-bold text-lg mb-2">Quick Reference: Dark Web Monitoring Checklist</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 pr-4 font-semibold">Phase</th>
                    <th className="text-left py-2 pr-4 font-semibold">Tools</th>
                    <th className="text-left py-2 font-semibold">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Ransomware monitoring</td><td className="py-2 pr-4">Skew + rss2email</td><td className="py-2">Hourly</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Credential dumps</td><td className="py-2 pr-4">AIL Framework</td><td className="py-2">Daily</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Marketplace intel</td><td className="py-2 pr-4">OnionSearch + manual</td><td className="py-2">Weekly</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Forum chatter</td><td className="py-2 pr-4">Tor Browser + screenshots</td><td className="py-2">Monthly</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-medium">Leak site discovery</td><td className="py-2 pr-4">Ahmia + DarkSearch</td><td className="py-2">Monthly</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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