// Site Content for OSINT 101 — ported from Vite OSINT Academy
// Resource library with markdown bodies embedded.

export interface ResourceEntry {
  id: string
  title: string
  description: string
  category: string
  type: string
  size: string
  downloads: number
  rating: number
  lastUpdated: string
  tags: string[]
  featured?: boolean
  body: string
}

// The old file exported multiple arrays; we preserve them all.
export const resourceLibrary = [
  {
    id: 'osint-checklist',
    title: 'OSINT Investigation Checklist',
    description: 'A field checklist for when your browser has 47 tabs open and your dignity has left the building.',
    category: 'checklists',
    type: 'Guide',
    size: '2.1 MB',
    downloads: 1247,
    rating: 4.9,
    lastUpdated: '2026-04-14',
    tags: ['investigation', 'methodology', 'systematic'],
    featured: true,
    body: `
## The checklist that politely asks chaos to wait outside

This guide walks investigators through planning, collection, verification, reporting, and the sacred ritual of naming screenshots something better than \`final-final-2.png\`.

### What is inside

- Investigation prep steps so you do not begin with vibes alone.
- Verification checkpoints so one weird forum post does not become "intelligence."
- Documentation reminders because memory is a snitch.
- Follow-up and monitoring steps for cases that refuse to stay solved.

### Recommended workflow

1. Define the question before opening the fifteenth tab.
2. Set legal scope and collection boundaries.
3. Gather evidence in an order that supports later verification.
4. Record findings with timestamps and source notes.
5. Review gaps before pretending the case is complete.

### Checklist sections in practice

### Preparation

- Clarify objective, scope, and success criteria.
- Set up isolated workspace, note templates, and capture tools.
- Identify likely source categories before collection starts.

### Collection

- Search broadly, then narrow with structure.
- Capture pages, documents, images, and source metadata.
- Preserve context so a screenshot still means something tomorrow.

### Verification

- Cross-check every important claim against independent sources.
- Record contradictions rather than editing them out of existence.
- Separate direct observations from analysis and inference.

### Reporting

- Summarize what was found.
- Explain confidence levels.
- Identify unanswered questions and sensible next steps.

### Why it matters

Good OSINT is not dramatic keyboard mashing under neon lights. It is boring, structured, repeatable work with occasional moments of triumph and caffeine.

> If your evidence folder looks like a junk drawer, this checklist is your intervention.
    `,
  },
  {
    id: 'kali-cheatsheet',
    title: 'Kali Linux Tools Quick Reference',
    description: 'A fast reference for common Kali workflows, because nobody remembers every flag and pretending otherwise is exhausting.',
    category: 'cheatsheets',
    type: 'Guide',
    size: '1.8 MB',
    downloads: 2156,
    rating: 4.8,
    lastUpdated: '2026-04-14',
    tags: ['kali', 'commands', 'reference'],
    featured: true,
    body: `
## The "I know what I am doing" card you keep next to your terminal

This cheat sheet summarizes common tooling patterns for recon, collection, validation, and analysis.

### Expect to find

- Scanner basics for mapping services and infrastructure.
- Web and metadata tooling for squeezing clues out of public assets.
- Session management notes for when you accidentally create twelve terminals and emotionally bond with none of them.
- Safety reminders to keep lab work in the lab.

### Core command families

### Recon

- Use \`nmap\` to identify hosts, services, and version clues.
- Use \`masscan\` when speed matters and scope is well understood.
- Use \`theHarvester\` and similar tools to collect public domain intelligence.

### Web analysis

- Use \`whatweb\` to fingerprint stack indicators.
- Use \`dirb\` or equivalent for content discovery.
- Use browser dev tools or intercepting proxies when the page is more JavaScript than website.

### Traffic and artifact review

- Use \`wireshark\` when you need protocol detail.
- Use \`tcpdump\` when you want fast capture without a GUI eating your soul.
- Use \`strings\`, \`binwalk\`, and hash tools for quick artifact triage.

### Operator habits

1. Save commands you run.
2. Save outputs separately from notes.
3. Label what matters while you still remember why it mattered.
4. Do not trust your memory after hour three. Your memory is freelancing by then.

### Useful philosophy

The right command is rarely the longest command. Start small, confirm assumptions, then escalate carefully. Your future self will appreciate fewer mystery scans and fewer mystery consequences.
    `,
  },
  {
    id: 'people-profiling',
    title: 'People Profiling Workflow Template',
    description: 'A structured workflow for ethical subject research, with fewer trench-coat fantasies and more documentation.',
    category: 'templates',
    type: 'Template',
    size: '3.2 MB',
    downloads: 892,
    rating: 4.7,
    lastUpdated: '2026-04-14',
    tags: ['profiling', 'investigation', 'template'],
    featured: true,
    body: `
## A template for researching humans without turning into a goblin

People-focused investigations need tighter legal and ethical controls than generic company or infrastructure research.

### This template covers

- Subject identifiers and source confidence tracking.
- Cross-platform social analysis without assuming every "John Smith" is your John Smith.
- Public records, business ties, and timeline construction.
- Reporting patterns that separate evidence from speculation, which remains one of history's finest ideas.

### Suggested profiling structure

### Identity anchors

- Full name and known variants.
- Approximate age or birth markers.
- Current and historical locations.
- Employment, education, and recurring usernames.

### Corroboration map

- Social profiles that likely refer to the same person.
- Public records tying them to places, companies, or filings.
- Professional associations, boards, alumni links, and conference appearances.

### Timeline

- Build dated events from records, posts, and public mentions.
- Flag unexplained gaps or contradictions.
- Note which parts are confirmed versus merely likely.

### Reporting template

1. Subject summary.
2. Verified identifiers.
3. Key associations and timeline notes.
4. Confidence and caveats.
5. Legal or privacy concerns.

### Ground rules

- Be lawful.
- Be proportionate.
- Be specific.
- Be the kind of analyst who can explain every conclusion without waving their hands like a budget wizard.
    `,
  },
  {
    id: 'search-operators',
    title: 'Advanced Search Operators Guide',
    description: 'A searchable reference for search operators, because "I typed the whole question into Google" can only take you so far.',
    category: 'guides',
    type: 'Guide',
    size: '1.5 MB',
    downloads: 1834,
    rating: 4.6,
    lastUpdated: '2026-04-14',
    tags: ['search', 'google', 'operators'],
    body: `
## Search like you mean it

Search operators let you narrow huge result sets into something more useful than "the internet."

### Core operators

- \`site:\` limits results to a domain.
- \`filetype:\` helps surface documents and exports.
- \`intitle:\` and \`inurl:\` narrow structural hints.
- Quoted strings keep your search engine from getting "creative."

### Practical query recipes

### Document discovery

- \`site:example.com filetype:pdf "annual report"\`
- \`site:example.com filetype:xlsx budget\`

### Credential and exposure hunting

- \`site:example.com intitle:"index of"\`
- \`site:example.com inurl:admin\`
- \`site:example.com "confidential"\`

### Person and role validation

- \`"Full Name" site:linkedin.com\`
- \`"Full Name" company name\`
- \`"email@example.com"\`

### Query hygiene

1. Start broad.
2. Remove obvious noise.
3. Add one operator at a time.
4. Keep a note of the combinations that actually worked.

### Tactical advice

Build queries iteratively. Start broad, inspect the noise, then tighten. If your first query looks like a legally binding contract, you have skipped a step.
    `,
  },
  {
    id: 'osint-tools-list',
    title: 'OSINT Tools Master List',
    description: 'A curated collection of tool categories and use cases so you can stop discovering the same five tools on every blog post.',
    category: 'lists',
    type: 'Index',
    size: '0.8 MB',
    downloads: 3421,
    rating: 4.9,
    lastUpdated: '2026-04-14',
    tags: ['tools', 'comprehensive', 'links'],
    body: `
## A map of the toolbox

The value of a tool list is not quantity. It is knowing what class of tool solves what kind of problem and when not to use it.

### Categories included

- Search and discovery.
- Social and username correlation.
- Domain, DNS, and infrastructure analysis.
- Archiving, capture, and evidence preservation.
- Image, metadata, and timeline analysis.

### How to use the list without becoming a collector of shiny nonsense

### Start with the problem

- Need identity correlation: use username, profile, and reverse-image tools.
- Need infrastructure context: use DNS, certificate, and stack fingerprinting tools.
- Need evidence preservation: use archiving, screenshots, and hashing workflows.
- Need reporting support: use note systems, graphing, and timeline tools.

### Vet tools before relying on them

- Is it maintained?
- Does it have a clear data source?
- Does it support your jurisdiction and language needs?
- Can you explain its output without sounding like you swallowed a README?

### Healthy expectation

No single tool gives you "the answer." Tools produce clues, context, pivots, and occasionally nonsense with a clean UI.

### Reality check

Owning 200 tools and understanding 3 of them is how people end up screenshotting error messages like they are collectible art.
    `,
  },
  {
    id: 'legal-guidelines',
    title: 'OSINT Legal and Ethical Guidelines',
    description: 'A practical guide to staying lawful, proportional, and considerably less likely to create a meeting with Legal.',
    category: 'guides',
    type: 'Policy',
    size: '2.7 MB',
    downloads: 756,
    rating: 4.8,
    lastUpdated: '2026-04-14',
    tags: ['legal', 'ethics', 'compliance'],
    body: `
## The part where professionalism defeats chaos

OSINT being "open source" does not mean every action is appropriate, necessary, or defensible.

### Focus areas

- Scope control and documented authorization.
- Data minimization and proportionality.
- Evidence handling and auditability.
- Escalation paths when a case wanders into territory that should involve counsel or law enforcement.

### Practical decision rules

### Before collection

- What is the legitimate purpose?
- What information is actually necessary?
- What sources are fair game within scope?

### During collection

- Avoid unnecessary sensitive data capture.
- Document why invasive-seeming steps are justified.
- Pause when the work drifts from verification into curiosity tourism.

### Before reporting

- Remove irrelevant sensitive details.
- Mark confidence and limitations honestly.
- Escalate when findings imply criminal behavior, safety risk, or legal review.

### Useful professional mantra

Just because data is visible does not mean collecting, storing, or redistributing it is automatically wise. Many excellent bad ideas begin with the sentence, "Technically it was public."

> "But it was public" is not a legal strategy. It is a sentence people say shortly before a difficult afternoon.
    `,
  },
]

export const sitePages = {
  community: {
    title: 'Community Comms',
    eyebrow: 'Analyst Lounge',
    description: 'A place for practitioners to swap notes, ask questions, and gently bully bad tradecraft with evidence.',
    body: `
## Community without the nonsense

This section is for practical discussion, case debriefs, workflow questions, and tool recommendations from people who have at least once stared at a DNS record like it personally offended them.

### What belongs here

- Research workflows that actually worked.
- Questions with enough context to answer.
- Tool comparisons grounded in use cases, not brand loyalty.
- Lessons learned from investigations that became weirder than expected.

### What does not belong here

- Illegal requests.
- Hero fantasies.
- "Can someone do the whole investigation for me by lunch?"

The goal is a professional community with humor, not a circus with better Wi-Fi.
    `,
  },
  privacy: {
    title: 'Privacy Protocol',
    eyebrow: 'Small Print, Better Mood',
    description: 'How the site handles data, with fewer soul-draining paragraphs and more plain English.',
    body: `
## Privacy, but readable

We collect as little as possible, keep it for as short as practical, and avoid building a surveillance machine on a website that teaches responsible research. Irony has limits.

### In plain English

- Demo login state is stored locally in your browser so refresh does not immediately erase your existence.
- We do not need your life story to let you read a checklist.
- Operational analytics should be minimal, transparent, and boring in the best possible way.
- Sensitive user data should not be collected until there is a real backend and a real retention policy.

If a future feature needs more data, it should earn that right the old-fashioned way: documentation, justification, and someone from compliance sighing deeply.
    `,
  },
  terms: {
    title: 'Terms of Service',
    eyebrow: 'Professional Expectations',
    description: 'Rules for using the platform without causing legal, ethical, or general adult-supervision problems.',
    body: `
## Terms that fit on a human brain

Use the platform lawfully, ethically, and within the scope of authorization. If your plan depends on "nobody will notice," that is not a plan. It is a future anecdote.

### Core terms

- Training content is educational and must not be used to justify unlawful activity.
- Users are responsible for following local laws, workplace rules, and common sense.
- We can remove access for misuse, abuse, or behavior that makes the rest of the room visibly tired.
- Content may change as tools, practices, and standards evolve.

The short version: act like a professional, not like the villain in a bargain-bin cyber thriller.
    `,
  },
  contact: {
    title: 'Contact Encrypted',
    eyebrow: 'Reach the Humans',
    description: 'Support, partnership, and content requests for people whose problem statements contain useful nouns and verbs.',
    body: `
## Contact options

Need support, want a custom training track, or found a typo so offensive it interrupted your breathing? Send a message.

### Good reasons to contact us

- Deployment help.
- Content suggestions.
- Broken links, busted flows, or confusing UX.
- Partnership or team training requests.

### Ideal message format

- What happened.
- Where it happened.
- What you expected.
- What actually happened.

Bonus points if the report includes steps to reproduce and does not begin with "it is broken" followed by silence.
    `,
  },
  requests: {
    title: 'Asset Request Terminal',
    eyebrow: 'Need More Intel',
    description: 'Request new guides, worksheets, scenarios, or reference packs with enough detail for a sane person to build them.',
    body: `
## Request content like a grown-up investigator

If you need a new asset, ask for the problem it solves, the audience it serves, and the format you want. "Make it cool" is not evil, but it is not helpful either.

### Strong requests include

- Topic and audience.
- Delivery format.
- Practical scenario or use case.
- Required legal or policy caveats.
- Deadline, if reality has become rude.
    `,
  },
  contribute: {
    title: 'Uplink Data',
    eyebrow: 'Contribute Material',
    description: 'Guidance for submitting resources and content that are useful, lawful, and not held together by wishful thinking.',
    body: `
## Contribute without adding noise

We want practical resources, sharp writing, clean examples, and lessons that survive contact with real work.

### Submissions we like

- Reproducible workflows.
- Concise tool references.
- Checklists that reveal judgment, not just enthusiasm.
- Funny writing that still teaches something.

### Submissions we do not like

- Vagueness dressed as strategy.
- Dubious legality.
- Walls of text with no structure.
- "Trust me bro" as a citation style.
    `,
  },
}
