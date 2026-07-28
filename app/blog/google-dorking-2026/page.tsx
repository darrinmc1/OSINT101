import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50"><div className="mx-auto max-w-3xl px-4 md:px-6 py-8">
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 mb-4"><ArrowLeft className="h-4 w-4" /> Back to Blog</Link>
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3"><span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> July 26, 2026</span><span>9 min</span></div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-3">Google Dorking for Investigators</h1>
        <p className="text-lg text-slate-600">Advanced search operators to find information hiding in plain sight.</p>
      </div></div>
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-10">
        <div className="prose prose-slate max-w-none">
          <p className="text-base text-slate-700 leading-relaxed mb-6">
            Google processes over 8.5 billion searches per day. Most users never venture beyond the first page of results. For an OSINT investigator, that&#39;s where the real work begins. Google Dorking — using advanced search operators to surface indexed content not intended for public consumption — remains one of the highest-ROI techniques in open source intelligence, and in 2026 the landscape has shifted in some important ways.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">What Actually Works in 2026</h2>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Between 2023 and 2025, Google tightened several operators. <code className="bg-slate-100 px-1 rounded">inurl:</code> and <code className="bg-slate-100 px-1 rounded">intitle:</code> still work reliably. <code className="bg-slate-100 px-1 rounded">filetype:</code> is partially restricted — PDF and XLSX return results, but <code className="bg-slate-100 px-1 rounded">sql</code> and <code className="bg-slate-100 px-1 rounded">dll</code> are heavily filtered. The biggest change: <code className="bg-slate-100 px-1 rounded">cache:</code> was retired entirely in late 2024. The replacement is <code className="bg-slate-100 px-1 rounded">before:</code> and <code className="bg-slate-100 px-1 rounded">after:</code> date-range operators, which give you far more precise temporal control than Google ever offered natively before.
          </p>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            The <code className="bg-slate-100 px-1 rounded">site:</code> operator is still your most powerful ally. Combined with <code className="bg-slate-100 px-1 rounded">intext:</code>, it lets you carve out exactly the corner of the web you care about. The difference between a novice and a proficient dorker is knowing not just the operators, but the right combinations.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">Real-World Dork Strings</h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">Exposed Credentials and Config Files</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 font-mono text-sm text-slate-800">
            site:pastebin.com intext:password intext:@gmail.com -intext:example<br />
            site:github.com intext:\"DB_PASSWORD\" intext:\"DB_HOST\" language:sql<br />
            filetype:env intext:DB_PASSWORD -gitlab -github<br />
            intitle:\"index of\" intext:wp-config.php
          </div>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            The first string surfaces pastebin entries containing both a password and a Gmail address — classic credential dump material. The second finds exposed database credentials in SQL files on GitHub. The third hunts for <code className="bg-slate-100 px-1 rounded">.env</code> files (still alarmingly common in 2026). The fourth looks for directory listings containing WordPress config files, which often include database credentials.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Internal Documents and Dashboards</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 font-mono text-sm text-slate-800">
            intitle:\"grafana\" inurl:dashboard -demo -play<br />
            intitle:\"kibana\" inurl:app/discover -demo<br />
            filetype:xlsx intext:\"SSN\" OR intext:\"social security\" site:.gov<br />
            intitle:\"jenkins\" intext:\"build\" inurl:job
          </div>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Internal dashboards indexed by Google are a goldmine. Grafana and Kibana instances with open authentication expose metrics, logs, and infrastructure topology. Jenkins dashboards reveal CI/CD pipeline details, environment variables, and occasionally hardcoded secrets. Excel files containing PII on .gov domains should not exist — but they do, and <code className="bg-slate-100 px-1 rounded">filetype:xlsx</code> finds them.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Login Portals and Admin Panels</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 font-mono text-sm text-slate-800">
            intitle:\"login\" intitle:\"admin\" inurl:admin -inurl:demo -inurl:test<br />
            inurl:cpanel intext:\"login\" -site:documentation.cpanel.net<br />
            intitle:\"confluence\" inurl:login intext:\"atlassian\"<br />
            site:targetcompany.com intitle:\"login\" OR intitle:\"sign in\" -inurl:blog
          </div>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            During a targeted investigation, discovering a login portal is often step one. The last string here targets a specific organization: <code className="bg-slate-100 px-1 rounded">site:targetcompany.com intitle:\"login\" -inurl:blog</code>. This strips out blog subdomains and returns only login pages. Combine with <code className="bg-slate-100 px-1 rounded">inurl:vpn</code> or <code className="bg-slate-100 px-1 rounded">inurl:portal</code> for internal access points.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">The Limitations (and Workarounds)</h2>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Google aggressively rate-limits automated dorking. Running more than a few dozen queries from the same IP in rapid succession triggers CAPTCHAs or temporary blocks. The workaround: use the Google Custom Search JSON API (100 free queries per day) or rotate residential proxies. Even then, the API doesn't support <code className="bg-slate-100 px-1 rounded">intitle:</code> or <code className="bg-slate-100 px-1 rounded">inurl:</code> — only the web UI does.
          </p>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Another limitation: Google strips many query parameters from search URLs shared publicly. If you find a dork string in a blog post, test it yourself — the results you see will differ from what the author screenshotted two months ago. Google's index is updated constantly, and <code className="bg-slate-100 px-1 rounded">site:</code> counts fluctuate daily.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">Building a Repeatable Dorking Workflow</h2>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Don't run dorks manually. Build a curated spreadsheet organized by category (credentials, internal tools, misconfigured storage, PII, login portals, code repositories). Each row contains the dork string, the target domain or scope, the date last run, and a notes column. Run your top 20 dorks weekly against each scope. Track what changes. A dork that returns nothing for months that suddenly produces results is worth investigating immediately.
          </p>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            For bulk operations, tools like <a href="https://github.com/six2dez/dorks" className="text-blue-600 underline">Dorks Eye</a> or <a href="https://github.com/m0nad/DorkSearch" className="text-blue-600 underline">DorkSearch</a> automate the process against Google Custom Search. For targeted investigations, manual dorking through a clean browser profile is still more reliable.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">Ethical Boundaries</h2>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Publicly indexed content is accessible by anyone — that doesn't mean you should exploit it. If you find exposed credentials via a dork, do not attempt to use them. Report them through the organization's responsible disclosure channel or via Google's report form. Document what you found, take a screenshot, and move on. The goal of OSINT is intelligence gathering and threat assessment, not exploitation.
          </p>
          <p className="text-base text-slate-700 leading-relaxed mb-6">
            Google's Terms of Service explicitly prohibit automated querying. If you're running dorks at scale, use the Custom Search API and respect rate limits. This is a reconnaissance technique, not an attack vector — treat it as such.
          </p>

          <div className="border-t border-slate-200 pt-6 mt-8">
            <h3 className="font-bold text-lg mb-2">Quick Reference: Essential Operators</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 pr-4 font-semibold">Operator</th>
                    <th className="text-left py-2 pr-4 font-semibold">Example</th>
                    <th className="text-left py-2 font-semibold">What It Does</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-mono">site:</td><td className="py-2 pr-4 font-mono">site:example.com</td><td className="py-2">Limit results to a domain</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-mono">intitle:</td><td className="py-2 pr-4 font-mono">intitle:\"index of\"</td><td className="py-2">Find pages with text in title</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-mono">inurl:</td><td className="py-2 pr-4 font-mono">inurl:admin</td><td className="py-2">Find pages with term in URL</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-mono">intext:</td><td className="py-2 pr-4 font-mono">intext:password</td><td className="py-2">Search body text only</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-mono">filetype:</td><td className="py-2 pr-4 font-mono">filetype:pdf</td><td className="py-2">Limit to specific file type</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-mono">before:</td><td className="py-2 pr-4 font-mono">before:2025-01-01</td><td className="py-2">Results indexed before date</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-mono">after:</td><td className="py-2 pr-4 font-mono">after:2026-01-01</td><td className="py-2">Results indexed after date</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-mono">cache:</td><td className="py-2 pr-4 font-mono">[retired 2024]</td><td className="py-2">Use web.archive.org instead</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
          <h2 className="font-bold text-lg mb-2">Related articles</h2>
          <div className="flex flex-wrap gap-2">
            <Link key="social-media-osint" href="/blog/social-media-osint" className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-slate-400">Social Media OSINT Techniques</Link>
            <Link key="dark-web-monitoring" href="/blog/dark-web-monitoring" className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-slate-400">Dark Web Monitoring for Analysts</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
