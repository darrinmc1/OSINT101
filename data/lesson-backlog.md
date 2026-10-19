# OSINT101 lesson backlog

Status: `done` = shipped in modules.ts · `todo` = queued · `skip` = do not demo (loud/reset/ToS/dead).

Ordered best-first for future weekly lessons. No dates or volume promises — the homepage only shows "latest" and "next".

## Consensus-OSINT tools not in the 12

| Order | Tool | What the lesson would teach | Status |
|---|---|---|---|
| 1 | Ignorant | Phone presence on Amazon/Instagram/Snapchat — overlapping Numint bridges; stale since 2021 | skip |
| 2 | DetectDee | Multi-identifier scanner (username/email/phone) — unmaintained since 2023; broken-check classroom | skip |
| 3 | Nexfil | Username search (~330 sites) — dead since 2023; redundant with Sherlock/Maigret | skip |
| 4 | Vesper | Small Rust username CLI — 2021 rules; little left to teach after GoSearch | skip |
| 5 | Sreg | Email/phone/username registration on Chinese sites — dead 2015–2019; active registration probes | skip |
| 6 | UserJoo | Username checks on Iranian sites — niche, tiny audience for AU track | skip |
| 7 | SherlockV2 | Sherlock-derived corpus — upstream 404; blank licence placeholders | skip |

## Strong free tools (OSINT Framework / Kali / freeosint) — best first

| Order | Tool | What the lesson would teach | Status |
|---|---|---|---|
| 1 | theHarvester | Passive email/host/name collection via search engines and APIs; API keys; noise vs signal | todo |
| 2 | HIBP (API) | Breach exposure checks on your own email; what a breach entry is and is not; no dump downloading | todo |
| 3 | crt.sh / CT logs | Certificate transparency for domains and email-shaped SANs; pivoting from org to subdomain | todo |
| 4 | Amass (passive only) | Attack-surface enum with `-passive`; when active modes are out of scope | todo |
| 5 | subfinder | ProjectDiscovery passive subdomain discovery; chaining into dnsx carefully | todo |
| 6 | ExifTool | Read metadata on files you already have; geolocation ethics; strip vs preserve | todo |
| 7 | Metagoofil | Public document search + metadata; APP notes for publishing docs | todo |
| 8 | gau / waybackurls | Historical URLs from Wayback/Common Crawl; not vulnerability scanning | todo |
| 9 | recon-ng | Modular framework with API keys; when a framework beats one-off CLIs | todo |
| 10 | SpiderFoot (poppopjmp fork) | Automated OSINT graphs; disabling active modules; reading noisy output | todo |
| 11 | dnsx | DNS lookups against public resolvers; borderline active if abused | todo |
| 12 | dnstwist | Lookalike domains for brand cases; DNS checks stay polite | todo |
| 13 | sn0int | Semi-automatic Rust OSINT modules; when to sandbox | todo |
| 14 | GitLeaks | Secrets in public git history; handling finds without spreading them | todo |
| 15 | PhoneInfoga | Public-source phone OSINT after Numint offline basics; no IPND myths | todo |
| 16 | Hunter.io (free tier) | Domain email patterns for B2B; rate limits and commercial ToS | todo |
| 17 | Epieos (manual web) | Analyst web enrichment; when not to automate | todo |
| 18 | TinEye (web) | Reverse image search without face-search tools | todo |
| 19 | SunCalc + OSM | Bellingcat-style geolocation lab on synthetic scenes | todo |
| 20 | Maltego CE | Desktop link analysis; transforms vary; not embeddable in our stack | todo |
| — | GHunt | Google account OSINT needing cookies — ToS risk | skip |
| — | Instaloader | Instagram scraping / login — ToS hostile | skip |
| — | linkedin2username | LinkedIn login/ToS — out of scope | skip |
| — | PimEyes / face search | Biometric / sensitive information | skip |
| — | BBOT / TruffleHog / OSRFramework | AGPL product risk or active modules | skip |
| — | h8mail | Quiet since 2023; prefer HIBP API lesson | skip |
| — | email2phonenumber | Speculative; low value | skip |

## Already done (the 12)

Sherlock, Maigret, WhatsMyName, User Scanner, GoSearch, Aliens Eye, Linkook, Holehe (`-NP` only), Socialscan, Mailcat, Numint (`--offline` only), FindMe — status `done`.
