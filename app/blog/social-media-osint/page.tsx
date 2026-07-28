import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50"><div className="mx-auto max-w-3xl px-4 md:px-6 py-8">
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 mb-4"><ArrowLeft className="h-4 w-4" /> Back to Blog</Link>
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3"><span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> July 26, 2026</span><span>11 min</span></div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-3">Social Media OSINT Techniques</h1>
        <p className="text-lg text-slate-600">Extract intelligence from social platforms without alerting your target.</p>
      </div></div>
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-10">
        <div className="prose prose-slate max-w-none">
          <p className="text-base text-slate-700 leading-relaxed mb-6">
            Social media platforms are the world's largest public databases of human behavior. Every post, like, follow, location tag, and metadata edge is a data point. For an OSINT investigator, the challenge isn't finding information — it's extracting it systematically without tipping off the subject. This article covers the techniques that work in 2026, platform by platform.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">The Core Principle: Metadata Over Content</h2>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Beginners focus on what people say. Experienced investigators focus on how, when, and where they say it. The metadata surrounding a post — timestamp, geolocation, device fingerprint, network context — is often more valuable than the text itself. A tweet containing nothing but "good morning" becomes useful when it's geo-tagged at an airport at 4 AM on a Monday. A Facebook check-in at a gym every weekday at 6 PM establishes a routine far more detailed than anything the subject wrote in their bio.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">Platform-Specific Techniques</h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">X / Twitter — Still the Richest Source</h3>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            X remains the single most valuable platform for OSINT in 2026. The search API, though heavily restricted compared to 2022, still returns structured data. Key operators:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 font-mono text-sm text-slate-800">
            from:target_account — posts by a specific user<br />
            to:target_account — replies to a user<br />
            near:"city" within:5km — geo-filtered posts<br />
            has:media — posts containing images or video<br />
            has:links — posts containing URLs<br />
            lang:en — filter by language<br />
            -filter:replies — strip out replies, only original posts
          </div>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Chain these operators for precise results. <code className="bg-slate-100 px-1 rounded">from:target has:media since:2026-06-01 until:2026-07-01</code> returns every image the target posted in June. Cross-reference timestamps with known events — a post at 2 PM on a Tuesday while the target was supposedly at work might contradict their stated employment.
          </p>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            For bulk collection, tools like <a href="https://github.com/twintproject/twint" className="text-blue-600 underline">Twint</a> are largely broken since the API changes in 2023. The current reliable method is scraping via Playwright or Puppeteer in a headless browser, paired with residential proxies. The <a href="https://github.com/soxoj/social-analyzer" className="text-blue-600 underline">Social Analyzer</a> project maintains a community-maintained module for X that updates monthly.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">LinkedIn — Corporate Reconnaissance</h3>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            LinkedIn is the most heavily protected mainstream social platform — and the most valuable for corporate OSINT. Public profiles expose employment history, education, skills, mutual connections, and group memberships. Even with privacy settings tightened, metadata leaks:
          </p>
          <ul className="list-disc pl-6 text-base text-slate-700 leading-relaxed mb-4 space-y-2">
            <li><strong>Profile photo EXIF data</strong> — LinkedIn strips EXIF on upload, but if the same photo appears elsewhere (personal blog, Gravatar), the original may contain GPS coordinates and camera model.</li>
            <li><strong>Connection inference</strong> — even if someone's connection list is private, you can identify mutual connections by cross-referencing "People Also Viewed" recommendations and shared group memberships.</li>
            <li><strong>Job posting metadata</strong> — a company posting for a role in "cybersecurity incident response" in a specific city suggests recent security incidents or new team builds.</li>
            <li><strong>Recommendation timestamps</strong> — the date a recommendation was written often correlates with departure dates, restructuring events, or promotions.</li>
          </ul>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            <strong>Critical caveat:</strong> Automated scraping of LinkedIn violates their ToS and is aggressively detected. Use manual browsing in a clean browser profile with cookies from a legitimate account. Never access LinkedIn from the same IP used for other recon activities.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Telegram — The Dark Horse</h3>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Telegram has become the dominant platform for organized groups — both legitimate and adversarial. Public channels and groups are indexable and searchable. Key techniques:
          </p>
          <ul className="list-disc pl-6 text-base text-slate-700 leading-relaxed mb-4 space-y-2">
            <li><strong>Channel crawling</strong> — public channels are accessible via the Telegram API without authentication. Use <code className="bg-slate-100 px-1 rounded">t.me/s/channelname</code> to view the web version, or the Telethon Python library to scrape message history programmatically.</li>
            <li><strong>Cross-channel correlation</strong> — the same image posted in two different channels at different timestamps can reveal which channel is the source and which is reposting.</li>
            <li><strong>Forward metadata</strong> — forwarded messages retain the original sender's ID even if the forwarding user's identity is obscured.</li>
            <li><strong>Group member lists</strong> — in public groups with fewer than ~200 members, you can enumerate the member list via the API. Larger groups restrict this.</li>
          </ul>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Telegram groups are increasingly the primary distribution channel for leaked databases, credential dumps, and early indicators of coordinated influence operations. A monitor script that checks 50-100 relevant channels hourly and logs new messages to a database is one of the highest-value OSINT setups you can build in 2026.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Reddit — Natural Language Goldmine</h3>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Reddit offers a unique advantage: its users write long, detailed posts across specialized subreddits, often revealing personal information unconsciously. The <code className="bg-slate-100 px-1 rounded">site:reddit.com</code> dork is your starting point, but the <code className="bg-slate-100 px-1 rounded">author:</code> operator on the old Reddit search is more precise. The Pushshift archive (available via <a href="https://unddit.com" className="text-blue-600 underline">unddit.com</a>) provides access to deleted comments — people purge their history but the archive preserves it.
          </p>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            The most effective technique: search for a subject's username across subreddits and look for patterns in writing style, timezone of posting, and self-disclosed locations in niche subreddits like r/cityname or r/profession. A user who posted in r/Chicago about their commute and in r/sysadmin about their homelab setup has revealed more than they realize.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">Cross-Platform Identity Resolution</h2>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            The most powerful technique in social media OSINT is connecting identities across platforms. A Reddit username, a Twitter handle, a GitHub account, a Discord tag, and a Telegram username belonging to the same person create a composite profile far richer than any single platform provides.
          </p>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Tools like <a href="https://github.com/sherlock-project/sherlock" className="text-blue-600 underline">Sherlock</a> and <a href="https://github.com/soxoj/maigret" className="text-blue-600 underline">Maigret</a> automate username searches across hundreds of platforms. They're imperfect — false positives happen when a username belongs to different people — but they dramatically reduce the search space. The workflow: find a username on one platform, run Sherlock, investigate the hits manually by comparing profile details, avatar images, and posting style.
          </p>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            For avatar-based matching, <a href="https://github.com/piaoling/face-recognition" className="text-blue-600 underline">face recognition libraries</a> and <a href="https://pimeyes.com" className="text-blue-600 underline">Pimeyes</a> can match profile photos across platforms. This is particularly effective for dating app profiles, which often use real photos but are siloed from other social networks.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">Stealth and OpSec</h2>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Every social media platform logs access patterns. Viewing someone's profile repeatedly can trigger notifications on some platforms (LinkedIn's "Who Viewed Your Profile" is the most obvious). General rules:
          </p>
          <ul className="list-disc pl-6 text-base text-slate-700 leading-relaxed mb-4 space-y-2">
            <li><strong>Isolated browser profiles</strong> — one profile per investigation. No shared cookies, no cached logins, no cross-contamination. Firefox Multi-Account Containers or Chrome profiles work well.</li>
            <li><strong>Residential proxies</strong> — datacenter IPs are easy to detect and block. Use reputable residential proxy services (BrightData, Smartproxy) with sticky sessions per platform.</li>
            <li><strong>Screenshots over scraping</strong> — if you only need a snapshot, screenshot it. Automated scraping generates more server-side logs and is more likely to flag your activity.</li>
            <li><strong>Ghost accounts</strong> — maintain legitimate-looking accounts on each platform with organic posting history. A 3-month-old account with no posts is suspicious; a 2-year-old account with occasional benign posts is invisible.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">Automation Architecture</h2>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            For ongoing monitoring, build a pipeline: a cron job that runs hourly, checks configured targets across platforms, stores results in a SQLite database, and alerts on new or changed data. Each platform needs its own module:
          </p>
          <ul className="list-disc pl-6 text-base text-slate-700 leading-relaxed mb-4 space-y-2">
            <li><strong>X</strong> — Playwright-based scraper with cookie authentication, running through a rotating proxy</li>
            <li><strong>Telegram</strong> — Telethon client, no auth needed for public channels</li>
            <li><strong>Reddit</strong> — PRAW with a credentialed app, respecting rate limits</li>
            <li><strong>Discord</strong> — Discord.py self-bot (against ToS but functional) or manual monitoring via webhook</li>
            <li><strong>LinkedIn</strong> — manual checklists only; reliable automation is effectively impossible</li>
          </ul>
          <p className="text-base text-slate-700 leading-relaxed mb-6">
            The output feeds into a correlation engine that cross-references timestamps, topics, and platforms. When the same person posts about a topic on X and Reddit within the same hour, that's an event worth flagging.
          </p>

          <div className="border-t border-slate-200 pt-6 mt-8">
            <h3 className="font-bold text-lg mb-2">Quick Reference: Platform API Status (2026)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 pr-4 font-semibold">Platform</th>
                    <th className="text-left py-2 pr-4 font-semibold">Public API</th>
                    <th className="text-left py-2 pr-4 font-semibold">Scraping Difficulty</th>
                    <th className="text-left py-2 font-semibold">Best Approach</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4">X / Twitter</td><td className="py-2 pr-4">Paid (Basic: $100/mo)</td><td className="py-2 pr-4">High</td><td className="py-2">Playwright + cookies</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4">LinkedIn</td><td className="py-2 pr-4">Restricted</td><td className="py-2 pr-4">Very High</td><td className="py-2">Manual browsing</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4">Telegram</td><td className="py-2 pr-4">Free (public data)</td><td className="py-2 pr-4">Low</td><td className="py-2">Telethon library</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4">Reddit</td><td className="py-2 pr-4">Free (rate-limited)</td><td className="py-2 pr-4">Low</td><td className="py-2">PRAW + Pushshift</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4">Discord</td><td className="py-2 pr-4">Bot API only</td><td className="py-2 pr-4">Medium</td><td className="py-2">Self-bot or webhooks</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4">Instagram</td><td className="py-2 pr-4">Restricted</td><td className="py-2 pr-4">High</td><td className="py-2">Playwright + session</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
          <h2 className="font-bold text-lg mb-2">Related articles</h2>
          <div className="flex flex-wrap gap-2">
            <Link key="google-dorking-2026" href="/blog/google-dorking-2026" className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-slate-400">Google Dorking for Investigators</Link>
            <Link key="dark-web-monitoring" href="/blog/dark-web-monitoring" className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-slate-400">Dark Web Monitoring for Analysts</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
