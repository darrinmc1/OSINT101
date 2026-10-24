// Learning Modules for OSINT 101 - ported from Vite OSINT Academy
// Original structure preserved: modules have nested `sections` with
// content + exercises, rather than a single content blob.
//
// Contents: 19 core training modules (bodies thickened 4 Sep), 12 Consensus-OSINT
// tool lessons, and 3 short ancillary lessons. Count Object.keys(learningModules)
// rather than hard-coding a total.

export interface ModuleSection {
  title: string
  duration: string
  content: string
  exercise?: string
}

export interface LearningModule {
  id: string
  title: string
  description: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  estimatedTime: string
  sections: ModuleSection[]
}

export const learningModules: Record<string, LearningModule> =
{
  "pricing": {
    "id": "pricing",
    "title": "Foundations curriculum",
    "description": "What the free beginner track actually covers, and the two things it will not do for you.",
    "level": "Beginner",
    "estimatedTime": "15 min",
    "sections": [
      {
        "title": "Foundations curriculum",
        "duration": "15 min",
        "content": "## Foundations, not a pile of links\n\nA foundations track is the part you read before you start collecting other people's public lives. On this site that means a question, lawful sources, a way to search, a way to judge what you found, and a stop condition. It does not mean a badge, and it does not mean the site will go and fetch the records.\n\n### What the beginner lessons actually cover\n\n*   **The question.** If you cannot say it in one sentence a stranger would understand, you are browsing.\n*   **Public sources.** Pages, filings, and records a member of the public can view without a stolen login.\n*   **Search.** Operators and a written query, not \"I typed the vibe into Google.\"\n*   **Verification.** Who published it, when, and whether anyone independent agreed.\n*   **Notes.** Timestamp, URL, and why you opened the page. Memory is not a source.\n*   **The stop.** A time budget or a sentence that says \"enough for this question.\"\n\nThe long version of that list is OSINT Fundamentals and OSINT Methodology. Email, domain, and company tracks come after you can write the question down.\n\n### What this curriculum will not do\n\nIt will not run the collection for you. The Case File Planner writes a cited plan. You still open the pages.\n\nIt will not turn a private person into a practice target. Use a company, a published story, or an account you own.\n\n### A short test\n\nIf your notes say \"checked socials,\" you checked nothing. Name the platform and the date, or admit you skimmed.\n\n> **Rule of thumb:** foundations are a height restriction. If the conclusion needs a tool you have not learned and a legal theory you have not written down, you are still on the ground floor. Say so.\n\n### Exercise\n\nWrite one investigation question and a stop condition under it. List three public sources you would actually open. If one of them requires a lie or a login you do not have, cross it out."
      }
    ]
  },
  "community": {
    "id": "community",
    "title": "Public communities as sources",
    "description": "Forums, groups, and comment threads are sources. They are also where a rumour gets a standing ovation.",
    "level": "Intermediate",
    "estimatedTime": "15 min",
    "sections": [
      {
        "title": "Public communities as sources",
        "duration": "15 min",
        "content": "## The room is a source. The regulars are not a jury.\n\nThis site does not host a forum. Other people do, in public, and they talk. A group, a subreddit, a comment thread, or a professional post can answer a collection question. It can also repeat one person's guess until it looks like a fact.\n\n### What you may use\n\n*   Posts and comments that are public without you logging into someone else's account.\n*   The author's name as shown, the date, and the URL.\n*   A second source, from somewhere else, before you treat the thread as established.\n\n### What you do not do\n\n*   Join under a pretext, or message members to \"just confirm.\"\n*   Scrape a member list that sits behind a login.\n*   Quote a statistic from the thread unless the thread itself cites a source you can open.\n\nA pub is useful because people talk. They also talk rubbish, and the person who has been there longest often repeats it with the most confidence. Length of membership is not corroboration.\n\n### How to read one thread\n\n1. Write the question the thread is supposed to answer.\n2. Note who spoke, when, and whether they claim to have seen the thing.\n3. Mark anything that is only \"someone said.\"\n4. Look for one independent source outside the thread.\n5. If you cannot find it, the thread stays a lead.\n\n> **Rule of thumb:** three people repeating the same sentence are one source wearing three usernames. Check before you brief it.\n\n### Exercise\n\nPick one public thread on a company or a published event. Write who said the claim, the date, and whether anyone outside that thread agreed. If the answer is no, label it a lead and stop."
      }
    ]
  },
  "resources": {
    "id": "resources",
    "title": "OSINT Resources",
    "description": "What this site actually keeps on the shelf, and how to use an outside tool without adopting it.",
    "level": "Beginner",
    "estimatedTime": "15 min",
    "sections": [
      {
        "title": "OSINT Resources",
        "duration": "15 min",
        "content": "## The shelf, not a souvenir shop\n\nA resource list that names forty tools and teaches none of them is a catalogue. This page is shorter on purpose.\n\n### On this site\n\n*   **Lessons.** The long tracks are the method. The tool briefings (Sherlock, Holehe, and the rest) are for accounts you own.\n*   **Guides.** The asset library is six on-page notes: checklist, operators, Kali reference, people-profiling workflow, tool categories, and the legal line. They are pages, not multi-megabyte downloads.\n*   **Worksheets.** The PDF templates are blank forms. Fill them in. They are not sample cases.\n\n### Outside, and stable enough to name\n\n*   A normal search engine, with the query written down.\n*   The Wayback Machine, when you need the page as it was.\n*   Have I Been Pwned, for an address you are allowed to check.\n*   A registrar or company register in the jurisdiction you named in the question.\n\nIf a tool is not in a lesson here, learn it from its own documentation and decide whether your question needs it. Installing it to \"have it\" is how the laptop fills up and the notes stay empty.\n\n> **Rule of thumb:** a new tool earns a place when it answers a question your current notes cannot. \"Everyone uses it\" is not that question.\n\n### Exercise\n\nOpen one guide in the asset library and one worksheet PDF. Write the question each one is for. If you cannot tell them apart, you have not read either."
      }
    ]
  },
  'osint-fundamentals': {
    id: 'osint-fundamentals',
    title: 'OSINT Fundamentals',
    description: 'The intelligence cycle, source judgment, and the part where you stop opening tabs and write the question down.',
    level: 'Beginner',
    estimatedTime: '4-6 hours',
    sections: [
      {
        title: 'The Intelligence Cycle',
        duration: '30 min',
        content: `
## Understanding the Cycle

OSINT is not just "Googling with confidence." It is a repeatable process known as the Intelligence Cycle, and the cycle is what keeps a curious afternoon from turning into forty-seven tabs and a shrug. The five stages are not decoration. They are the difference between reducing uncertainty and accumulating bookmarks you will never open again.

Put simply: if you cannot name the question, you are not investigating. You are browsing with a sense of destiny.

This section exists because most failed OSINT work fails at the start. People collect first and invent a purpose later. That produces a folder of screenshots and a report that cannot answer the one thing a decision-maker actually asked.

### After this section

You will be able to write a short investigation plan that states a question, names lawful public sources, sets a stop condition, and leaves room for analysis instead of treating "more tabs" as progress.

### Work the cycle on purpose

Use this sequence every time, including on small hypothetical tasks. Do not skip a stage because the job looks easy. Easy jobs are where sloppy habits get rehearsed.

1. **Direction.** Write one sentence that a stranger could understand. "Learn everything about this company" is not direction. "Identify the company's public legal name, registered office, and current leadership from official filings and the corporate website" is direction. Add constraints: time budget, jurisdictions, and what is out of scope. If the question cannot be answered from public sources, rewrite it until it can.
2. **Collection.** List sources *before* you open a browser. For a corporate research task that usually means the company website, official registers, press pages, LinkedIn company pages, and reputable news. Capture URLs and access times as you go. Stay on public pages. Do not create accounts, send messages, or probe systems.
3. **Processing.** Clean the pile. Deduplicate names, normalize dates, and put each fact next to its source. Separate raw quotes from your paraphrase. If two pages disagree, keep both and label the conflict. Processing is housekeeping. It is also the stage that stops your notes from looking like a conspiracy corkboard.
4. **Analysis.** Ask what the cleaned facts actually support. What is confirmed? What is only suggested? What remains unknown? A conclusion is a judgment with a confidence level, not a louder restatement of a headline. If you cannot explain why a fact matters to the original question, it is color, not intelligence.
5. **Dissemination.** Write something another human can use. Lead with the answer, then the evidence, then the gaps. A plan that ends in "I found lots of stuff" has not finished the cycle.

### Why the cycle is not optional

- A clear cycle keeps you from chasing shiny nonsense that is interesting and irrelevant.
- Process creates defensible work. Someone else should be able to see how you moved from question to claim.
- Structure is what separates intelligence from internet hoarding. Volume is cheap. Judgment is the product.

The goal of intelligence is to reduce uncertainty, not to increase the number of browser tabs until your laptop sounds frightened.

### Legal and ethical boundaries

This course stays on open sources: pages, filings, and records that a member of the public can view without bypassing access controls. Direction includes deciding what you will *not* do. You do not scrape behind logins, you do not social-engineer employees, and you do not treat a company's public website as an invitation to scan their network. If your hypothetical task starts drifting toward "just check if their mail server is open," stop. That is a different discipline with a different authorization model.

Also keep proportionality. A student exercise about public corporate facts does not require a dossier on every employee. Collect what the question needs.

### Common mistakes

- Starting collection before writing the question, then reverse-engineering a purpose from whatever turned up.
- Treating every page as equal. A press release and a registrar filing are not the same kind of source.
- Skipping processing because analysis "can happen in your head." It cannot, not after the third source.
- Writing a plan that lists tools instead of decisions. "Use Google" is not a method.
- Never defining a stop condition, so the cycle never ends and neither does the tab count.

### Field notes

> **Rule of thumb:** a plan is a promise to your future self that you will still remember what the job was after lunch. If the plan cannot survive being read aloud, it is a shopping list.

Write the question at the top of the page. Write the stop condition under it. Everything else is how you get from one line to the other without getting lost in a careers page from 2019.

When you draft the investigation plan in the exercise, force the cycle onto the page. Name the question, the public sources, the processing rules, the analysis, and the one-page result. Keep it hypothetical and lawful. The point is a plan that could actually be run.

        `,
        exercise: 'Draft a simple investigation plan for a hypothetical corporate research task.',
      },
      {
        title: 'Source Evaluation and Confidence',
        duration: '50 min',
        content: `
## Not all sources deserve equal respect

An OSINT source is not automatically reliable just because it is public, searchable, or wearing a respectable font. Search engines rank popularity and relevance. They do not certify truth. If you treat the first three results as a jury, you will promote rumors into findings and then look surprised when they collapse.

The short version: easy to find is not the same as true. That is how gossip gets a citation and sits in a report looking smug.

This section is about judging sources on purpose so your confidence level means something. You will use that judgment every time you rank, cite, or brief.

### After this section

You will be able to take several public sources on the same topic, ask a consistent set of questions about each one, assign a reliability rank, and explain the ranking in plain language without hiding behind "it seemed legit."

### Questions to ask every source

Run this list before you decide a page is evidence.

- **Who created it and why?** A company about page, a regulator filing, a journalist, a forum poster, and an anonymous PDF are different animals. Motive matters. Marketing wants a story. A filing wants to satisfy a legal duty. A blog may want traffic.
- **When was it published or updated?** Stale facts travel well. Check dates on the page, in the URL, and in any "last updated" footer. A 2018 org chart presented as current is not current.
- **What is the vantage point?** Firsthand means the author was in a position to know. Secondhand means they are repeating someone. Screenshot-of-a-screenshot means you are researching a picture of a claim.
- **Can it be checked independently?** Does another source, from a different publisher, say the same thing without copying the same paragraph?
- **What is missing?** Omissions are information. A glowing profile that never mentions dates, addresses, or filings may be thin on purpose.

Write the answers down. Evaluation that lives only in your head will soften the moment a source is convenient.

### A working confidence model

Confidence is about the *claim*, not your mood.

1. **Low confidence.** A single-source claim with weak provenance. One blog, one undated post, one "people are saying." Useful as a lead. Not useful as a finding.
2. **Moderate confidence.** Multiple sources agree, but they are incomplete, possibly interdependent, or missing a primary record. You can report it with caveats.
3. **High confidence.** Independent records corroborate the claim with minimal contradiction: official registers, primary documents, or contemporaneous reporting that can be checked against each other.

Independence is the word people skip. Three articles that all quote the same press release are one source wearing three outfits.

When sources conflict, do not average them. State the conflict, note which source is closer to a primary record, and drop the confidence until you can resolve it.

### A ranking method you can reuse

1. Pick a narrow factual question, not a vibe. "Who is listed as director?" beats "is this company shady?"
2. Collect three public sources that speak to that question.
3. Score each source on origin, date, vantage, and independence.
4. Rank them. A boring official page can outrank a stylish news roundup.
5. Write one paragraph that explains the order. If you cannot say why number one beat number two, you ranked by aesthetics.

### Legal and ethical boundaries

Evaluate what is public. Do not create accounts to peek at limited posts, do not request non-public documents under false pretenses, and do not treat leaked or stolen files as a normal source in this course. If a page requires a login you do not have, it is outside the exercise.

Be careful with personal data even when it is public. Rank sources for a research question; do not compile a private dossier "for practice" on a private person. Prefer companies, public organizations, or published news topics.

### Common mistakes

- Confusing design quality with reliability. Templates are cheap. Facts are not.
- Treating "cited by many" as corroboration when everyone copied the same sentence.
- Inflating confidence because a source matches your hypothesis. That is confirmation bias with a clipboard.
- Ignoring dates. The internet preserves obsolete org charts like insects in amber.
- Using anonymous or unverifiable screenshots as if they were records.

### Field notes

> **Rule of thumb:** if your ranking paragraph is longer than the sources deserved, you are arguing with yourself. State who published, when, from what vantage, and whether anyone independent agreed. Then stop talking.

Keep a simple key in your notes: \`source | date | type | independence | rank\`. It looks dull. It also prevents you from "remembering" that the weakest page was the strongest because it said what you wanted.

Use that method on the three-source exercise. Rank reliability, then explain the ranking in one honest paragraph. If two sources tie, say so and say why the third lost. Uncertainty written down is still analysis.

        `,
        exercise: 'Take three public sources about the same topic and rank their reliability, then explain the ranking in one paragraph.',
      },
      {
        title: 'OPSEC and Anonymity',
        duration: '45 min',
        content: `
## Stay Hidden, Stay Useful

Operational security is the part of OSINT that prevents you from announcing your presence like a foghorn. You are collecting from public sources, not sneaking into anything, but public collection still leaves traces: search history, cookies, logged-in sessions, and a browser that happily tells every site who you usually are.

Be unromantic about this. Your research sockpuppet should not somehow be logged into your personal YouTube account. That is less "tradecraft" and more "cry for help."

This section is about a boring, repeatable research environment. Boring is the point. Drama is how identities leak.

### After this section

You will be able to stand up a dedicated browser profile for OSINT, know what it is meant to keep separate, and list the specific mistakes that profile is designed to prevent.

### Core principles

- **Environment separation.** Use a dedicated browser profile, or a virtual machine if your work requires stronger isolation. The research browser does not share cookies, password manager autofill, or extensions with your personal life. If you can see your shopping cart, you are in the wrong window.
- **Network hygiene.** Understand when a VPN, proxy, or managed attribution path is appropriate for your role. A VPN is not invisibility. It changes which network you appear on. Choose tools you understand, and do not bolt on five anonymity products because a forum said "stack them."
- **Account discipline.** For this fundamentals exercise, you do not need a fake persona. You need a clean profile that is not logged into you. Later modules can add research accounts; they still stay off the personal browser.
- **Habit over mood.** OPSEC fails during the ordinary minute: the password prompt you accept, the "sign in with Google" button, the file you upload from the desktop named \`tax_return\`.

### A setup workflow

1. **Create a dedicated browser profile.** Name it something dull like \`osint-research\`. Do not import personal bookmarks, cookies, or saved passwords.
2. **Strip the conveniences.** Disable password saving and sync. Remove extensions you do not need. A shopping coupon add-on has no investigative purpose and a lot of opinions about your tabs.
3. **Turn off personalization where you can.** Use a search approach that does not train on your home account. Signed-in Google search will reshape results around your life. That contaminates both OPSEC and source quality.
4. **Decide your download rules.** Save research files into a dedicated folder. Do not open unknown office documents on your daily driver without a plan. Downloaded files can carry metadata; uploaded files can carry yours.
5. **Write a five-line checklist** you will run before each session: correct profile, no personal logins, downloads path set, notes file open, scope written at the top.
6. **End the session on purpose.** Close the profile. Do not "just check one thing" in the same window after you have switched back to being a person.

That is enough for a student research environment. You do not need a movie disguise. You need separation.

### Threats this setup is meant to blunt

- Search personalization leaking your normal identity, employer, and habits into results and into site-side logs.
- Accidental logins to mail, social, or cloud accounts from the research window.
- Metadata in downloads and in anything you might later upload or share.
- Repeated unique patterns (same rare browser fingerprint plus same odd query string) that make "anonymous" sessions look like one operator.

### Legal and ethical boundaries

OPSEC is not a license to impersonate people, bypass access controls, or harass targets. Dedicated profiles keep *your* identity off the work. They do not authorize sockpuppet social engineering, scraping private groups, or accessing systems you were not invited to use.

Stay on public sources. Do not probe networks, hide unauthorized scanning behind a VPN, or create accounts that pretend to be someone real. If your organization issues managed attribution, use that policy. In training, a clean local profile is the honest start.

### Common mistakes

- Running research in a personal window "just this once," which is how once becomes always.
- Installing twenty privacy extensions and then wondering why the browser is a science fair.
- Using a VPN and then logging into personal accounts through it, which is a costume over a name tag.
- Reusing the same research username across forums, email, and password resets until it is a second you.
- Forgetting that screenshots can include bookmarks, the OS clock widget, or a Slack popup with your team name.

### Field notes

> **Rule of thumb:** the operator who needs to feel invisible usually skipped the checklist. The operator who is actually quieter did the dull steps in the same order as last time.

Build the checklist before you feel ready. Boring preparation is shockingly effective, which is very rude to people who prefer drama.

Set up the dedicated profile for the exercise and write down the mistakes you are trying to avoid. Be specific: personal logins, synced extensions, download paths, search personalization. If the list is only "be anonymous," you have not finished thinking.

        `,
        exercise: 'Set up a basic research environment using a dedicated browser profile and list the OPSEC mistakes you are trying to avoid.',
      },
      {
        title: 'Documentation and Evidence Handling',
        duration: '55 min',
        content: `
## If it is not documented, it is just a memory with good branding

Strong OSINT work is repeatable. That means someone else should be able to follow your steps without consulting a medium. If your only record is "I know I saw it," you have a feeling, not a finding. Feelings do not survive peer review, handoff, or the Monday after a long weekend.

To be blunt: if you cannot show the source, the time, and why it mattered, you did not collect intelligence. You collected a vibe with a URL you no longer remember.

This section is about capturing public-source work so it still exists when the page changes, which it will, usually the afternoon your report is due.

### After this section

You will be able to keep a mini evidence log that records source, timestamp, and relevance for each finding, using names and structure that future-you can search without archaeology.

### What to capture

For every item you intend to rely on, capture enough that a second analyst could reload the trail.

- **URL and access date.** The address as it appeared, plus when you viewed it. If a page is available through an archive, note that too.
- **A screenshot or saved copy of volatile content.** Posts, people pages, and news articles edit themselves. Capture the claim as you saw it, including enough surrounding context that the screenshot is not a floating sentence.
- **The query that found it.** Search strings, operators, and which engine. Reproduction starts with the query, not the result.
- **A note that separates facts, assumptions, and open questions.** "The about page lists Jane Doe as CFO" is a fact. "Jane Doe therefore controls finances" is an assumption. "Is there a filing that confirms the role?" is a question.

You do not need a forensic lab for a fundamentals log. You need consistency.

### A logging workflow

1. **Create the case folder first.** Example layout: \`notes/\`, \`screenshots/\`, \`exports/\`. Empty folders prevent the "Downloads" landfill.
2. **Name files like an adult.** \`2026-09-04_acme_about-page_leadership.png\` beats \`Screenshot 47\`. Dates first, subject second, content third.
3. **Log as you collect, not after.** After is when you invent timestamps and forget the query.
4. **Write the "why it matters" line immediately.** If you cannot finish that sentence, you may have captured a souvenir.
5. **Record negatives when they matter.** "No director named on the official register under this spelling" is a finding. Absence is evidence if the source should have contained the fact.
6. **Keep a running index.** A simple table: item number, source, timestamp, one-line relevance, confidence. Five rows is enough to practice the habit.

### Habits worth keeping

- Same naming scheme every time so sorting by filename is also sorting by date.
- Enough context in the screenshot that a cropped quote cannot be accused of mischief.
- Source notes that say *why* the page earned a place in the log, not just *that* you visited it.
- A split between raw capture and your commentary. Future-you should not have to guess which sentences were on the page.

The internet changes constantly. Posts vanish, pages get edited, and people discover privacy settings the moment your report is due. Capture early and capture cleanly.

### Legal and ethical boundaries

Document public sources you were allowed to view. Do not archive material you obtained by bypassing controls, guessing passwords, or buying stolen dumps. Screenshots of a public page are ordinary research notes. Publishing someone else's private data "because I captured it" is not.

Minimize what you keep. A student log about a corporate research question does not need photos of employees' children from a sidebar widget. If a detail is irrelevant, do not file it "just in case." Retention is a decision, not a reflex.

Do not alter captures to make a story tidier. Crop for focus if you must, but keep an uncropped original.

### Common mistakes

- Taking screenshots with no URL and no clock, then arguing later about what you saw.
- Saving only the juicy sentence and losing the date, byline, or disclaimer that changed its meaning.
- Mixing personal Desktop clutter with case files until nothing is evidence.
- Logging sources but not queries, so the work cannot be repeated.
- Writing "important" in the relevance column, which is a mood, not a reason.

### Field notes

> **Rule of thumb:** documentation is how you stay honest after your memory starts editorializing. The log is not for looking busy. It is so you can be wrong in a way someone can check.

If a finding cannot fill source, timestamp, and why-it-matters, it is not ready for a report. It is a tab you liked.

Build the mini evidence log in the exercise with five findings. Force every row to carry source, time, and relevance. If a row feels thin, that is the lesson talking. Fix the capture, do not inflate the prose.

        `,
        exercise: 'Create a mini evidence log for five findings, including source, timestamp, and why each item matters.',
      },
      {
        title: 'Advanced Google Dorking',
        duration: '60 min',
        content: `
## Mastering Search Operators

Google knows plenty, but it does not read minds, and frankly it should not. Advanced operators, often called dorks, are a way to ask a narrower question of an index that already exists. You are finding material that a search engine has already made public, not unlocking a vault.

Giant mystery queries are theater. Elegant search beats baroque nonsense every time. A query that looks like a spell and returns garbage is still garbage.

This section teaches you to build small, explainable searches so you can find public documents on a domain you are allowed to study, and say why each query worked.

### After this section

You will be able to start from a precise objective, add one operator at a time, read the noise, and keep a short list of queries that actually retrieve public PDFs or pages instead of a pile of navigation junk.

### Core operators

Learn these as tools, not as a personality.

- \`site:\` limits results to a host or domain, such as \`site:example.edu\`.
- \`filetype:\` asks for indexed documents, commonly \`pdf\`, \`xlsx\`, or \`docx\`.
- \`intitle:\` requires a word or phrase in the title.
- \`inurl:\` requires a token in the address, useful for \`/reports/\` or \`/pubs/\` style paths.
- Quotation marks force an exact phrase so "annual report" does not become random pages that mention annual and also report.

Combine lightly. \`site:example.edu filetype:pdf "course catalog"\` is a sentence. A query with nine operators and three \`OR\` clauses is a dare.

Other useful refinements, used sparingly: \`-\` to exclude a noisy term, \`OR\` for genuine variants, and a date filter in the interface when freshness matters. None of these bypass access control. If a file is not in the public index, dorking will not conjure it.

### Tactical workflow

1. **Write the objective first.** "Find public PDF documents on a sample university domain that look like official publications" is a job. "See what Google has" is a mood.
2. **Start smaller than you think.** \`site:university.example filetype:pdf\` already teaches you how that domain titles files.
3. **Review the first page like an analyst.** Are you getting policies, course lists, stray slides, or a thousand "calendar.pdf" clones? Name the noise.
4. **Tighten with one change.** Add a phrase, an \`inurl:\` folder hint, or an exclusion. Change one variable so you know what did the work.
5. **Record the query and a one-line verdict.** "Worked because the domain stores policies as PDFs titled with the word policy." If you cannot explain it, you cannot reuse it.
6. **Stop when the objective is met.** Extra pages are optional. Curiosity without a stop condition is how operators become hobbies.

### Reading results without fooling yourself

Indexed does not mean important. A PDF can be a cafeteria menu. Ask whether the document is primary (issued by the institution), current, and relevant to the question. Open the file. Titles lie. Cached snippets lie more.

If two queries return the same three files, you have redundancy, not confirmation. If a query returns login pages, you have found a public link to a login page. You do not attempt to pass it.

### Legal and ethical boundaries

Dorking is search. It is not exploitation. You may use operators to locate publicly indexed material. You may not use them as a treasure map for "exposed" admin panels you then try to open, backup files you then download from a misconfigured server you do not own, or credentials you then test.

Stay on authorized sample domains for class work: a university you are studying as a public information exercise, your own site, or a lab target. Do not run aggressive automated scraping against a live campus just because \`filetype:pdf\` was entertaining.

Respect robots, rate limits, and terms of the search engine. Repeated automated querying is not cleverness. If a result looks like a mistake that exposes personal data, do not collect a pile of it for fun. Note the class of finding, do not hoard the records.

### Common mistakes

- Writing a monster query that looks impressive and returns nothing you can explain.
- Treating \`intitle:"index of"\` hunting as a sport. This course is not a leak safari.
- Forgetting \`site:\` and then wondering why the internet is large.
- Never opening the PDF, then citing a snippet that was a header from a different year.
- Saving zero queries, so the next session starts from superstition.

### Field notes

> **Rule of thumb:** a good dork is a sentence you could defend to a librarian. If you would be embarrassed to explain the query, it is probably a stunt.

Keep a tiny notebook of combinations that earned their keep. The win is not a secret operator. The win is knowing why the index answered.

Use the operators on the exercise: public PDFs on a sample university domain, then a short explanation of why each query worked. If you cannot say which operator did the filtering, rebuild the query until you can.

        `,
        exercise: 'Use dorks to find public PDF documents on a sample university domain and explain why each query worked.',
      },
      {
        title: 'Analysis and Reporting Basics',
        duration: '60 min',
        content: `
## Turning findings into something useful

Collection alone is not analysis. Analysis explains what matters, why it matters, and how sure you are. A folder of captures is inventory. A report is a judgment someone else can use without living inside your brain.

The standard is simple: a report should help a decision-maker decide. If it mainly proves you own a keyboard, more work is required.

This section is the last fundamentals skill because it is where honest work either becomes useful or turns into a data dump with headings.

### After this section

You will be able to write a short summary from a small set of findings that states the objective, lists key points with sources and confidence, and keeps confirmed facts visibly separate from your inferences.

### What a basic report must contain

Even a one-page student product should include:

- **Objective.** The question you were answering, copied from the plan, not reinvented after the facts arrived.
- **Key findings.** The few claims that actually move the question. Three strong points beat twelve souvenirs.
- **Source notes and confidence.** Each finding needs a public source and a low / moderate / high label that matches the evaluation model you already learned.
- **Gaps, assumptions, and next steps.** What you still do not know, what you assumed to keep moving, and what a lawful next check would be.

If any of those are missing, you have notes with posture.

### An analysis workflow

1. **Restate the question** at the top of a blank page. If the findings cannot speak to it, you collected the wrong pile.
2. **List atomic facts.** One sentence each, each tied to a source and date. "The 2024 annual review PDF lists a campus in Springfield" is a fact. Do not smuggle a theory into this list.
3. **Cluster related facts.** Leadership names, locations, dates, and contradictions each get a pile. Clustering is how analysis starts without a speech.
4. **Mark inferences in a second column.** An inference is a reasonable step beyond the fact: "Springfield appears in two official PDFs a year apart, so the location claim is at least stable in their public materials." Still not a courtroom verdict.
5. **Assign confidence per claim**, not per mood. One strong primary source can beat three blogs. One blog repeated three times is still one blog.
6. **Write the summary bottom line first**, then the support. Readers are busy. Burying the answer under memoir is how reports get skimmed and misunderstood.
7. **End with gaps.** "Not found in the public register under this name" is a professional sentence. Pretending the gap is not there is how you get quoted later, unkindly.

### Voice and discipline

Write like a brief, not like a trailer. Avoid spy-thriller voice-over. Avoid dumping raw notes with no synthesis. Avoid presenting guesses as fact. If you want to keep a colorful aside, put it in a footnote you are willing to delete.

Use labels in the text when needed: \`Fact:\` and \`Inference:\` look clumsy and save careers. You can phrase it more smoothly (\`The page states\` versus \`This suggests\`) as long as the reader never has to guess which is which.

### Legal and ethical boundaries

Report only what you collected from public, authorized sources. Do not pad a thin file with speculation about private lives, crimes, or "probably hacked" infrastructure. Do not include personal data that does not serve the objective.

A fundamentals report is not a charging document and not a threat intel novel. If you cannot defend a sentence as a public-source judgment, cut it. Do not name private individuals as if they were targets of an investigation when the task was a corporate research summary.

Keep OPSEC in the product too. Your report does not need your personal browser profile name, your home IP, or a running commentary about how clever the queries were.

### Common mistakes

- Opening with methodology autobiography instead of the answer.
- Mixing facts and inferences until the reader cannot tell which is which.
- Inflating confidence to make the page feel finished.
- Hiding contradictions because they ruin the narrative.
- Recommending next steps that are illegal or out of scope ("scan their VPN," "friend the CFO").

### Field notes

> **Rule of thumb:** if you cannot draw a line between what the page said and what you concluded, you are not analyzing. You are narrating. Narration is for campfires.

Read your draft once looking only for smuggled conclusions. Every adjective is a suspect. "Shadowy," "clearly," and "obviously" are usually where the evidence ran out.

Write the short summary in the exercise from a small set of findings. Separate confirmed facts from inferences on the page, not in a footnote you hope nobody reads. If a sentence cannot survive that split, it does not belong in the findings list.

        `,
        exercise: 'Write a short summary from a small set of findings and clearly separate confirmed facts from your inferences.',
      },
    ],
  },
  'osint-methodology': {
    id: 'osint-methodology',
    title: 'OSINT Methodology & Structured Workflow',
    description: 'Build a repeatable investigation workflow that keeps you organised, focused, and defensible.',
    level: 'Beginner',
    estimatedTime: '3-4 hours',
    sections: [
      {
        title: 'Why Methodology Matters',
        duration: '20 min',
        content: `
OSINT without methodology is just enthusiastic googling. You can get lucky that way. You cannot get consistent, and you cannot hand the work to someone else without them weeping. Methodology is a question, a boundary, a record, and a stop.

### Why this matters

Unstructured collection produces two failure modes: forty-seven tabs and no finding, or a tidy slide that cannot survive "how do you know?" Structure lets you reproduce results, defend conclusions, and reopen the file later without reconstructing your memory.

### What you'll be able to do

You will state a one-sentence objective, pick sources and tools, set a time budget and stop condition, and place that plan inside the Intelligence Cycle and PEAK. The planning list stays. Expand it; do not replace it.

### Methodology is the difference between a lucky find and a reliable result

Lucky finds still happen. Professionals write them down, check them, and refuse to build a case on a single coincidence. If you cannot describe what would make you *stop*, you do not have a task. You have an open tab with ambition.

### What good methodology gives you

- **Repeatability**: Someone else can follow your steps and reach similar conclusions.
- **Coverage**: A checklist prevents forgetting whole categories of sources.
- **Defensibility**: Your notes show how you got from question to answer.
- **Efficiency**: You stop retracing steps because you recorded them the first time.

Those four are how you survive review, avoid forgotten source categories, keep a finding when a page changes, and still have time left to analyse.

### Common methodology frameworks

Two models, one job: keep you honest about sequence.

### The Intelligence Cycle (Traditional)

1. **Direction** - What question are we answering?
2. **Collection** - Gather raw data from appropriate sources.
3. **Processing** - Clean, translate, format, deduplicate.
4. **Analysis** - Turn data into judgements.
5. **Dissemination** - Deliver the product.

Direction is the step students skip because searching feels like work. If the question is "everything about this company," you have not directed anything. Tighten until a reasonable person could say you are done. The cycle is a loop: a report that creates a new question goes back to Direction.

### The PEAK Model (Practical for SMBs)

1. **Prepare** - Scope, tools, legal boundaries.
2. **Explore** - Broad search, open questions, hypothesis generation.
3. **Analyze** - Filter, verify, connect dots.
4. **Know** - Report, recommend, close or continue.

PEAK is the Cycle in clothes you can wear on a two-hour task. Prepare is Direction plus rules of engagement. Explore is wide Collection. Analyze is Processing plus Analysis. Know is Dissemination plus an explicit close. Use PEAK for a short engagement and the Cycle when you must brief someone who learned the textbook names. Do not invent a third framework this week.

### Your First Investigation Plan

Every investigation should start with five minutes of planning:

1. **One-sentence objective**: "I need to find the registered owner of example.com."
2. **Source list**: WHOIS, Wayback Machine, LinkedIn, Crunchbase.
3. **Tools needed**: Terminal, browser, screenshot tool.
4. **Time budget**: 2 hours. If it takes longer, reassess.
5. **Stop condition**: "When I have a name and address, I am done."

Expand the same five; do not swap them for a novel. The objective names the decision you are supporting. The source list is ordered. Tools are what you will actually run. The time budget includes notes. The stop condition is observable. Write legal boundaries in Prepare: public sources only, no pretexting. If the stop condition requires a private database or a lie, rewrite the objective.

> Proper planning is how you avoid opening 47 tabs and realising 90 minutes later you forgot what you were looking for.

### Numbered workflow

1. Write the one-sentence objective.
2. List sources and tools. Cut anything that does not serve the sentence.
3. Set time budget and stop condition.
4. Mark the PEAK stage you are in (you start in Prepare).
5. Execute Explore only after the plan exists on a page.
6. When the stop condition hits, move to Know — even if the answer is "not found."

### Legal and ethical boundaries

Methodology includes saying no. Public information, stated purpose, proportionate collection. A plan that requires impersonation, credential stuffing, or "just this once" private access is not a clever PEAK variant. It is out of scope.

### Common mistakes

Calling "look around" an objective. Listing twenty tools and using two. No stop condition. Skipping Prepare because the first search already felt promising. Reporting Explore output as if it were Analyze.

> **Rule of thumb:** A stop condition is how adults end meetings. If your investigation cannot end, it is not thorough. It is unemployed.

Close with the exercise: write a one-page investigation plan for researching a company you choose. Include the objective, source list, tools, time budget, and stop condition — the same five, filled in like you intend to follow them.

        `,
        exercise: 'Write a one-page investigation plan for researching a company you choose. Include the objective, source list, tools, time budget, and stop condition.',
      },
      {
        title: 'The OSINT Pyramid',
        duration: '30 min',
        content: `
Volume is not confidence. The OSINT pyramid is a reminder you will ignore the first time a Google result feels perfect. It visualises the relationship between how much you collect, how hard you work each item, and what you are allowed to write in a report.

### Why this matters

Most wasted investigations are not empty. They are bottom-heavy: a hundred hits, zero corroboration, a conclusion that sounds like a press release. The pyramid exists so you do not promote a lead to "high confidence" because it was easy to find and emotionally convenient.

### What you'll be able to do

You will take a research question and say what belongs at each layer: broad collection, structured collection, and verified intelligence. You will also know when you are still in the basement, which is most of the time, and healthy.

### A mental model for how to prioritise sources and effort

Think of a pyramid, not a ladder you skip. The base is wide and cheap. The top is narrow and expensive. You start at the top only when someone has already done the base — and you can show their work.

Map it onto PEAK so it does not become a third religion. Explore lives in the bottom and middle. Analyze is how you climb. Know is what you may say after the top layer has at least been attempted. If Know happens after a single search, you narrated.

### Bottom layer - Broad collection (High volume, low effort)

- Google searches, social media scans, public directories.
- Generates leads, not conclusions.

This is the first collection pass: what exists, what names recur. Capture queries. Do not fall in love. Hits at this layer are *candidates*. The failure mode is stopping because the first page "felt complete."

### Middle layer - Structured collection (Medium volume, medium effort)

- Targeted searches with operators, platform-specific queries.
- Generates data points that can be compared and cross-referenced.

Here you spend effort: operators, a named register, a dated archive, a WHOIS history. You reduce volume on purpose. Each item should agree, disagree, or refuse to speak next to another. If the middle produces nothing, that is a finding — not a reason to invent a top-layer story from bottom-layer vibes.

### Top layer - Verified intelligence (Low volume, high effort)

- Cross-sourced corroboration, direct source confirmation.
- Generates findings you would present to a decision-maker.

Verification means independent sources, not the same press release reprinted three times. Confirmation is still *open*: a primary filing, an official page — not a pretexting phone call. You will have few top-layer items. If everything is "verified," your bar is on the floor.

### How to use it

1. Start at the bottom and work up.
2. Do not present a finding as "high confidence" if you never left the bottom layer.
3. The pyramid reminds you that most of your work time is on the bottom and middle - and that is healthy.

Label every note with a layer so a Google snippet cannot get laundered into a conclusion. When time is short, narrow the question rather than skipping to the top.

### Trap to avoid

Analysts sometimes skip the foundation and try to jump straight to verified intelligence. That is how you get confident-but-wrong conclusions that look great in a report and fall apart under scrutiny.

The other trap is living in the basement forever: more screenshots, no comparison, a dump of links titled "assessment." Decide at the correct height.

### Numbered workflow

1. Write the research question in one sentence (Direction / Prepare).
2. List bottom-layer actions you will actually run.
3. List middle-layer queries and records that would test the leads.
4. Name what would count as top-layer corroboration *for this question*.
5. Execute bottom → middle → top. Stop if the stop condition hits.
6. Write one paragraph per layer: what you would do, and what you would refuse to claim.

### Legal and ethical boundaries

Climbing the pyramid does not unlock new legal powers. Top-layer "confirmation" is still public, authorised, proportionate. No pretexting to "verify." No paid breach dumps as a shortcut to the summit. If you cannot verify in the open, you report a gap.

### Common mistakes

High confidence after one search. Treating three copies of the same story as three sources. Skipping the middle because operators feel fussy. Calling the bottom layer "OSINT complete."

> **Rule of thumb:** The pyramid is a height restriction. If your conclusion needs a hard hat and a blessing, you are still on the ground floor. Say so.

Close with the exercise: take a research question and map what you would do at each layer of the pyramid. Write one paragraph per layer. If a paragraph is empty, that is the lesson — not a formatting error.

        `,
        exercise: 'Take a research question and map what you would do at each layer of the pyramid. Write one paragraph per layer.',
      },
      {
        title: 'Documentation Standards',
        duration: '25 min',
        content: `
Good documentation is what separates intelligence from "trust me, I checked." It also saves your future self from asking "which screenshot was that again?" You did not find it if you cannot show your work. The internet will not keep the page warm for you.

### Why this matters

Sources move, pages edit themselves, and memory edits faster than pages. A finding without a timestamp, a URL, a snapshot, context, and a confidence note is a rumour you happened to type. Documentation is how PEAK's Know stage survives contact with a sceptical reader — including you, next Tuesday.

### What you'll be able to do

You will record a finding in the timestamp–source–context–confidence pattern, name a file so it sorts, and choose a capture method that is good enough for class (and honest about what it is not). You will treat the log as part of the product, not as homework you do if there is time.

### You did not find it if you cannot show your work

Analysts love the hunt and resent the filing. The filing is the only part a third party can audit. If your method was sound and your notes are empty, the method did not happen. If your method was sloppy and your notes are complete, at least the sloppiness can be repaired.

Write as you go. Retrospective documentation is fiction with timestamps you guessed.

### What to document for every finding

- **Timestamp**: When you found it (not when you wrote it down).
- **Source URL**: Permanent link or archive link.
- **Snapshot**: Screenshot or archived copy of the page as it appeared.
- **Context**: Why you collected it and what you think it means.
- **Confidence**: How reliable is this specific piece of evidence?

Keep those five. Expand them with two lines students skip: *query or path* (how you arrived) and *layer* (pyramid: broad / structured / verified). Context is not a novel. One sentence on relevance, one on interpretation, and a clear label if the second sentence is inference.

Confidence is about *this item*, not your mood about the whole case. A company register extract can be high confidence as to what the register said today, and still not prove trading activity.

### Tools for documentation

- **Obsidian** or **Notion**: Structured notes with linking. Useful when findings must point at each other without a 40-page scroll.
- **Hunchly**: Browser extension that auto-captures pages during investigations. Excellent when you remember to start it *before* the interesting tab.
- **Wayback Machine**: Archive pages that might change or disappear. Submit important URLs; do not assume a crawl already exists.
- **Simple text files**: Better than nothing, and nothing to break.

Pick one note system and one capture habit. Switching tools mid-case is how screenshots go to Desktop and notes go to a draft titled "asdf." Archive.is or a full-page save is fine when Wayback is slow — record which archive you used.

### Naming convention that saves sanity

Use a consistent format for files:

\`YYYY-MM-DD_CaseName_SourceType_Description.ext\`

Example:

\`2026-07-25_AcmeCorp_WHOIS_registrant-contact.png\`

This way sorting by name also sorts by date and case, and you can find files without opening every folder like a digital archaeologist.

Add a short source type vocabulary and stick to it: WHOIS, WEB, REG, NEWS, SOC, IMG, NOTE. Do not encode secrets in filenames. Do not call everything \`final2\`.

> Documentation is not optional. It is the only part of the work that survives to be questioned later.

### Numbered workflow

1. Create the case folder and agree the filename pattern before the first search.
2. For each finding, write timestamp, URL, and why you opened it — then capture.
3. Archive or screenshot while the page is still the page you read.
4. Add context and item-level confidence. Mark inference separately.
5. Name the file. Link it from the note. Do not leave "see screenshot."
6. When you stop, skim the log: could another analyst replay the path?

### Legal and ethical boundaries

Document what you collected and why, including the legal basis (public source, training exercise, authorised task). Do not store credentials, session cookies, or other people's private files "for completeness." Do not archive material you were not supposed to access. A complete log of a bad collection is still a log of a bad collection.

### Common mistakes

Screenshot with no URL. Notes written the next day from memory. Confidence as a vibe ("pretty sure") instead of a judgement about the source. Filenames that only make sense to the person who was tired. Capturing the search page and not the result. Forgetting that a screenshot without a clock is a postcard.

> **Rule of thumb:** If the evidence cannot be named, dated, and handed over, you do not have evidence. You have a story you liked enough to screenshot.

Close with the exercise: take one finding from a previous exercise and document it properly using the timestamp–source–context–confidence format described above. Add the archive or screenshot. Name the file so it sorts. That packet is the standard from here on.

        `,
        exercise: 'Take one finding from a previous exercise and document it properly using the timestamp-source-context-confidence format described above.',
      },
    ],
  },
  'email-osint': {
    id: 'email-osint',
    title: 'Email & Username Intelligence',
    description: 'Trace email addresses and usernames across platforms to build identity profiles and connection maps.',
    level: 'Beginner',
    estimatedTime: '3-4 hours',
    sections: [
      {
        title: 'Email Address Anatomy',
        duration: '20 min',
        content: `
An email address is not just a contact. It is a clue — and personal data. Treat it like evidence, not a toy you feed into every box on the internet until something beeps.

### Why this matters

Email is still the hinge between "a person on a platform" and "an organisation, a provider, a history." The local part leaks naming habits. The domain leaks employer or disposable intent. Public pages still reprint addresses like it is 2009. If you cannot parse an address before you pivot, you will spend an hour investigating a Mailinator leftover and call it tradecraft.

### What you'll be able to do

You will split an address into local part and domain, classify type (personal, work, custom, disposable), extract name or handle clues without inventing a biography, and run a public validation pass. HIBP in this module is for *your own* addresses. No credential stuffing. No inbox break-ins.

### An email address is not just a contact. It is a clue.

Every email address contains structure, provider hints, and sometimes the person's name, handle, or employer. Structure is the part you can defend. "This local part looks like a 1987 birth year" is a hypothesis. "This domain is the company's public mail domain" is a fact you can check.

Read the address before you search it. Students who paste first miss plus-tags, role accounts (\`info@\`, \`press@\`), and the difference between \`j.smith\` and \`john.smith.contractor\`.

### Parts of an email address

- **Local part** (before @): May contain name, initials, birth year, or a handle.
- **Domain**: Reveals email provider, company, or custom domain.
- **Plus addressing**: Some providers treat \`name+tag@domain.com\` as the same inbox — useful for tracking who sold your data.

Plus addressing is a gift when *you* used it. \`name+newsletter@\` is a tag, not a second human. Gmail often ignores dots in the local part; the web may still store the dotted form. Role locals (\`hr@\`, \`billing@\`) are functions, not faces.

### What the domain tells you

- **Gmail / Outlook / Yahoo**: Personal addresses, harder to trace. High volume, high collision. The local part does more work here.
- **Company domain**: Likely work address — reveals employer. Confirm the domain is actually the organisation's mail domain (MX, public staff pages), not a lookalike.
- **Custom domain**: Self-hosted or small business. WHOIS the domain for more — registrar, creation date, sometimes a privacy redaction that still leaves a pattern.
- **Disposable providers** (Mailinator, 10MinuteMail): Likely throwaway, low signal.

University and government domains behave like company domains with more public directories. Check whether a "new webmail" brand is real or a Gmail lookalike.

> An email address that leads to a dead disposable domain is usually not worth the effort. Move on to higher-signal sources.

### Quick email validation

Before investing time investigating an email, check if it exists — *as a public fact*, not by trying passwords.

- **Emailhippo** or **Hunter.io**: Format checks. SMTP "exists" results are often wrong. Treat them as clues, not proof an inbox is live.
- **Have I Been Pwned**: In this course, run it on **addresses you own**.
- **Google search** in quotes: The main pivot — bios, PDFs, press contacts. Record the page, not just "it exists."

### Numbered workflow

1. Parse local part, domain, and any plus-tag. Write likely type.
2. Note name/handle clues as hypotheses, not facts.
3. WHOIS or otherwise identify a custom domain if present.
4. Quoted web search for public mentions. Save URLs.
5. If the address is yours, check HIBP and note breach names and data classes — not passwords.
6. Decide: enough signal to continue, or stop and pick a better identifier.

### Legal and ethical boundaries

Public correlation only. You may search what the open web already shows. You may check *your* addresses on HIBP. You do not stuff credentials, you do not buy "inbox access," and you do not run other people's mail through every breach kiosk because you are curious. Validation is not intrusion.

### Common mistakes

Assuming Gmail local parts are unique people. Treating \`info@\` as a CEO. Spending a session on a disposable domain. Using a "does this mailbox exist" tool as proof of identity. Checking strangers on HIBP "for practice."

> **Rule of thumb:** An email address is a label, not a confession. Parse it, search what is public, and resist the urge to see if the password still works. That urge is how careers end.

Close with the exercise: take five email addresses from *public* sources and analyse each one: provider, likely type (personal/work), any name clues in the local part, and any domains you can WHOIS. Leave HIBP for addresses you own, in the breach lesson.

        `,
        exercise: 'Take 5 email addresses from public sources and analyse each one: provider, likely type (personal/work), any name clues in the local part, and any domains you can WHOIS.',
      },
      {
        title: 'Username Correlation',
        duration: '35 min',
        content: `
People reuse usernames. Relentlessly. It is the gift that keeps giving — and the trap that matches you to the wrong John. Correlation is public pattern-matching, not a hunt through private messages and not a password party.

### Why this matters

A handle is often more stable than an email and more searchable than a legal name. One reused string can open a trail of public profiles, old forums, and a GitHub that still lists an employer. Done without a checklist, it also opens a trail of false positives: the internet contains many \`jdoe87\`s, and most of them are not your subject.

### What you'll be able to do

You will run a username through search tools and manual variants, then apply a correlation checklist before you declare a match. Practice on a handle you rarely use, a colleague's public username, or a demo string — not a stranger you decided to "fully map."

### People reuse usernames. Relentlessly. It is the gift that keeps giving.

Most people use the same username across multiple platforms. Finding one profile can lead to a dozen others. "Can" is doing a lot of work. Same string is a lead. Same string plus photo, bio, links, and timezone is a case. Same string plus a common word and nothing else is how you brief the wrong human.

Start from a handle you already have on a public page. Write the exact string, then the variant list, then search. Do not start by hoping Sherlock invents the person.

### Username search tools

- **WhatsMyName** (web): Checks hundreds of sites for a username.
- **Namechk**: Checks username availability across platforms (inverted logic). Taken can mean "exists"; available usually means "not there," not "hidden."
- **Sherlock**: Python CLI tool for username enumeration.
- **Maigret**: Enhanced Sherlock with more sites and better output.

Tools lie: dead sites, parked pages, login walls. Visit the profile. If you cannot see a public page, you have a maybe. Do not create accounts to peek. Run at least two methods.

### Manual username patterns

Not everyone uses the exact same username. Look for variations:

- FirstnameLastname: johndoe, john.doe
- InitialLastname: jdoe, j.doe
- With numbers: johndoe87, jdoe1987
- With underscores or dots: john_doe, john.doe.OSINT
- Reversed: doejohn, doej

Add locale spellings or a year suffix the known public profile already hints at. Do not spray fifty variants and call it method.

### What to check with each username

- **Social media**: LinkedIn, Twitter/X, Instagram, Facebook, Reddit, GitHub
- **Professional**: AngelList, Crunchbase, Medium, Substack
- **Communication**: Telegram, Discord, WhatsApp (*public* groups and public channels only — no private-group tourism)
- **Historical**: Wayback Machine, old forum posts, archived social media

A platform with no public page is a blank, not a mystery for a friend request. A 2014 forum post can confirm a handle habit and still not prove today's identity.

### Cross-platform correlation checklist

- [ ] Same profile photo across platforms?
- [ ] Same bio or tagline?
- [ ] Same links (website, Linktree)?
- [ ] Overlapping followers or connections?
- [ ] Activity patterns that match (same timezone, same topics)?

Keep this checklist. Require *more than one* independent tick before you write "same person." Photo alone fails (stock faces, stolen images). Bio alone fails (copied slogans). Followers help only when the overlap is specific, not "both follow NASA."

Record negatives. "GitHub hit is a different avatar and a different country" is a high-value note. It stops the next pass from "rediscovering" the same false friend.

### Numbered workflow

1. Write the seed username and where you saw it (public URL).
2. List three to seven variants grounded in that seed.
3. Run two search methods (e.g. WhatsMyName + quoted Google).
4. Open each public hit. Fill the checklist. Do not log in to see more.
5. Assign match confidence: low / moderate / high.
6. Stop at a documented map, not at "one more site."

### Legal and ethical boundaries

Public correlation only. You look at what profiles already show the world. You do not credential-stuff reused passwords into those sites to "confirm ownership." You do not join private Discord or Telegram rooms by lying. You do not pivot from a handle to harassing a private individual.

### Common mistakes

Declaring a match on the handle alone. Treating Namechk "taken" as proof. Ignoring the checklist because the photo "looks close." Using a rare-looking string that is actually a brand. Running Sherlock on a celebrity and calling it an investigation.

> **Rule of thumb:** Reuse is a gift. Confirmation is work. If your graph is held together by one spelling and optimism, it is not a graph. It is a wish.

Close with the exercise: pick a username you rarely use (or a colleague's public username) and run it through three different tools or manual searches. Document which platforms returned results and what the profiles revealed — including the checklist ticks and the misses.

        `,
        exercise: 'Pick a username you rarely use (or a colleague\'s public username) and run it through 3 different tools or manual searches. Document which platforms returned results and what the profiles revealed.',
      },
      {
        title: 'Breach Data and Pivoting',
        duration: '30 min',
        content: `
When an email or username appears in a breach, the real investigation begins — for defensive and authorised work, not a treasure hunt through other people's passwords. Metadata tells you where an identifier leaked and what *classes* of data rode along. The password is not a trophy.

### Why this matters

Breach corpora are some of the highest-signal OSINT data available, which is exactly why they are also a career-ending shortcut if you treat them like a free attack list. Used properly, they show reuse of identifiers, old domains, and exposure dates. Used improperly, they become credential stuffing, database hoarding, and a very short conversation with counsel.

### What you'll be able to do

You will check **your own** address on Have I Been Pwned, record breach names, dates, and data classes, and name a lawful pivot. You will know other breach-search products exist and why this course does not ask you to download dumps or try passwords.

### When an email or username appears in a breach, the real investigation begins

Breach data can reveal associated emails, password hashes or plaintext, IP addresses, and sometimes physical addresses. In training you look at **what HIBP says was exposed**, not at cracking, stuffing, or dumps. The investigation is correlation: a second public email, a username you already mapped, a company domain — not "I wonder if this still logs in." Without authorisation you get the public web and your own accounts.

### How to check breach data

- **Have I Been Pwned**: Course standard. Use it on **your own addresses**. Read what data types, when, and whether passwords were hashed.
- **DeHashed** (paid): Exists. Not required here. At work, policy first.
- **IntelX**: Dark web intelligence search. Authorised use only; no souvenir dumps.
- **Snusbase**: Same rule.

Hands-on path is HIBP plus public pivots. The other names are orientation, not a shopping list.

### Ethical boundaries

Accessing breach data is legally and ethically sensitive:

- **Do** use it to help someone secure their accounts — starting with yours in this exercise.
- **Do** use it in legitimate investigations with proper authorisation.
- **Do not** access or share breached passwords for personal accounts you are not authorised to investigate.
- **Do not** download or distribute breach databases.
- **Do not** credential-stuff, "test" logins, or spray a leaked password across sites. That is an attack, not OSINT.

Training basis: your inbox, your HIBP view, your notes.

### Pivoting from breach data

Breach data is not a destination — it is a launch point. Keep pivots public and non-abusive:

1. Email → HIBP (your address) → breach names and data classes → harden *your* accounts
2. Email → public mention of a second address → quoted search (no stuffing)
3. Username → public profile → public email → WHOIS on a custom domain → company register
4. Exposure date → timeline of accounts you still use

Hash cracking and leaked-IP hunting are authorised incident techniques, not the student workflow.

### Automation consideration

When you find one email in a breach, there are often more. Search related *public* patterns — same domain on a staff page, same name variations — before concluding. Bulk-checking other people's addresses through breach APIs is a policy problem with a progress bar.

> Breach data is powerful and dangerous. Use it proportionally, lawfully, and with a clear purpose that you can articulate to anyone who asks.

### Numbered workflow

1. Take an address you own.
2. Check it on Have I Been Pwned. Save the breach list.
3. For each breach, note date and data classes exposed (email, password hashed/unhashed, phone, etc.).
4. Identify one pivot that stays public or personal: another identifier you already use, a domain to WHOIS, a service to lock down.
5. Write what you will *not* do (no login tests, no dump downloads).
6. Stop when the exposure picture and one next action are clear.

### Common mistakes

Treating a breach hit as proof of current access. Copying passwords into notes "for analysis." Checking a stranger "to see the UI." Assuming every HIBP hit is a unique incident (stealer logs recycle). Pivoting straight to attacking the same password elsewhere.

> **Rule of thumb:** A breach notice is a to-do list for the owner of the inbox. It is not loot. If your pivot requires a login that is not yours, you have left the course and entered a statement of facts.

Close with the exercise: take a test email address (**yours**) and check it on Have I Been Pwned. Document what breaches it appears in, what data was exposed, and identify at least one pivot point you could investigate further — a public correlation or a defensive action, not a password test.

        `,
        exercise: 'Take a test email address (yours) and check it on Have I Been Pwned. Document what breaches it appears in, what data was exposed, and identify at least one pivot point you could investigate further.',
      },
    ],
  },
  'domain-investigations': {
    id: 'domain-investigations',
    title: 'Domain and Website Investigations',
    description: 'Learn to investigate websites and domains for intelligence. Trace ownership, hosting, history, and connections.',
    level: 'Beginner',
    estimatedTime: '4-5 hours',
    sections: [
      {
        title: 'Domain Fundamentals',
        duration: '40 min',
        content: `
### Every website has a story

Domains reveal ownership, hosting, registration, and connection patterns that websites themselves do not volunteer. The page can say “established 1998.” The registration can say last Tuesday.

This lesson stays on public records: WHOIS or RDAP, public DNS, screenshots of what ordinary visitors see, and historical snapshots. You will not log in or “try default credentials.” A directory listing or a 404 that mentions \`/admin\` is an exposure signal. You document it. You do not walk through.

### Why this matters

A domain is infrastructure with a paper trail. Phishing kits and legitimate companies both need names in the DNS. The difference is often dates, registrars, name-server clusters, and whether the homepage matches the registry.

Skip fundamentals and you will argue about content while missing a three-day-old, privacy-redacted domain. Over-read them and you will call every new domain a crime. The record is a lead, not a verdict.

### What you'll be able to do

- Pull public registration and DNS data and write what is present versus redacted.
- Screenshot the live site so later arguments are about a date, not a memory.
- Flag infrastructure relationships (shared name servers, related hostnames) as hypotheses.
- Keep the work on the public side of the glass: no admin panels, no “just checking” logins.

### What domains reveal

- **Registration information**: Name, organization, contact details (often redacted but sometimes not). Redaction is normal, not proof of guilt. A visible name is a registry claim to verify, not a biography.
- **Name servers**: DNS configuration reveals infrastructure relationships. Shared hosts can mean the same provider, reseller, or operator. Correlate; do not collapse.
- **Registrar**: The company that registered the domain. Some are more privacy-focused. Registrar choice is context, not a moral score.
- **Registration dates**: When the domain was created. New domains are sometimes suspicious — especially when they impersonate an old brand. They are also how every real company begins.
- **Expiration**: Domains about to expire may be abandoned, or someone is bad at calendars. Note the date.

Look up current DNS too: A/AAAA, MX, NS, TXT. Those show where the name points and which mail provider is advertised. Public TXT records are still not keys.

### Tools for domain research

- **WHOIS databases**: Basic registration lookup. Many regions have moved to RDAP. Expect privacy proxies. Do not harass a registrant email you found.
- **DNS lookup tools**: Name-server relationships and current records. You are reading records, not attacking the zone.
- **Screenshot tools**: Visual confirmation of what the domain shows. Capture the landing page as an ordinary visitor. If you see an admin login, you have found a login page. You do not use it.
- **Historical records**: What the domain used to point to. Archives belong in the next lesson; know now that “today” is a slice.

Prefer well-known lookup sites over gadgets that quietly start enumerating paths. If the next tab is a directory brute-force, close it. This module is registration and public content, not a pentest.

### First steps

1. Run a basic WHOIS lookup. Save the raw record and the lookup time. Note registrar, dates, status, and what is redacted.
2. Check DNS records for current configuration. Record NS, A/AAAA, MX, and notable TXT. If the name does not resolve, that is a finding.
3. Take screenshots of current content. If you see an index listing or a 404 that reveals path names, screenshot it as an exposure signal and stop clicking admin-shaped URLs.
4. Check historical records if available.

If you feel the urge to append \`/admin\` to “see what happens,” write the thought down. Do not send the request as a hunt. A path that appears on its own in a public 404 or index-of page can be noted. A path you guessed is a different activity.

### Legal and ethical boundaries

WHOIS, DNS, archives, and public pages only. No unauthorized access to admin panels, even when a 404, robots.txt, or directory listing advertises them. Index-of pages are exposure signals to document, not doors to walk through and not invitations to download other people’s backups. No password guessing. No “test” logins.

### Common mistakes

- Treating a privacy-protected WHOIS as sinister.
- Trusting the homepage founding date over the registration date — or the reverse, without comment.
- Following every hostname in a certificate into a login you do not own.
- Calling a shared name server “the same attacker” because the slide needed a cluster.

> **Aside.** A domain record is a form someone filled out, possibly with a lie, possibly with a lawyer. OSINT101 wants the form, the DNS, and a screenshot. It does not want a screenshot of an admin panel you should not have opened. If the 404 mentioned it, you already have the finding.

Your exercise: research a public website and document all publicly visible registration and technical information. If you encounter an index listing or an admin-shaped path, record it as exposure and leave it alone. The restraint belongs in the write-up.

        `,
        exercise: 'Research a public website and document all publicly visible registration and technical information.',
      },
      {
        title: 'Website Content Analysis',
        duration: '45 min',
        content: `
### The website itself is evidence

What a website says, how it is built, and what it contains all matter. The domain lesson told you who claimed the name. This lesson asks whether the public site behaves like the organization it pretends to be — or like a template and a stock handshake.

Read pages as a visitor. View public HTML and headers the browser already receives. Note hosting from public lookups. Do not authorize yourself into a CMS. Do not crawl backup directories because an index-of page listed them. Listings and 404s that reveal \`/admin\` or \`/backup\` are exposure signals, not corridors.

### Why this matters

Fraud sites and thin corporate sites both load fast and both can spell “about us.” Content analysis separates a real operator from a costume — and a real company with a neglected site, which is sloppy, not necessarily fake.

Investigators who only WHOIS miss the cloned brand and the contact form that goes to free mail while the footer claims a regulated office. Investigators who “inspect element” for fun start probing paths they do not own.

### What you'll be able to do

- Review public content, metadata, and links for consistency with the claimed purpose.
- Identify a probable stack from public hints without turning that into an exploit path.
- Record hosting and ASN facts as context.
- Treat directory listings and accidental admin URLs as reportable exposure, not access.

### What to analyze

- **Content**: What does the site actually say? Does it match the stated purpose? A “global logistics firm” with leftover lorem is a clue. Test addresses, staff names, registration numbers.
- **Technology**: WordPress, custom, SaaS? This reveals capability and potential vulnerabilities — meaning note a common CMS for the owner, not start testing it. Public generator tags are enough.
- **Metadata**: Title tags, descriptions, author fields. Leftover “Just another WordPress site” titles are comedy and evidence.
- **Links**: Internal and external links reveal relationships. Broken partner logos and hrefs to a different company are useful.
- **Images**: Logos, stock photos, custom graphics. Reverse-search the hero image. If the “team” is stock, write that.

View source if you want. That is still the public page. \`TODO: hide admin\` is not permission to find the admin.

### Hosting analysis

- **IP address**: What server is it on? Public A records tell you. Shared hosting means neighbors, not automatically coconspirators.
- **Hosting provider**: Some are more lenient about content. Reputation is context for abuse processes, not a verdict.
- **ASN**: Autonomous System Number reveals network ownership. Useful when many domains share one ASN. Still a cluster, not a confession.
- **Geolocation**: Where is the server? That is the data center, not the CEO’s house. CDNs will humble you.

WHOIS on the IP and the domain are different records. Keep them labeled.

### Content patterns

- **Stock photo usage**: Generic corporate photos suggest low investment. They also appear on honest small businesses. Pair with other signals.
- **Grammar and spelling**: A weak signal alone. Stronger next to a cloned template and a new domain.
- **Contact information**: Real details suggest a real business. Check phone and address against public registries.
- **Missing pages**: 404s reveal structure. If a 404 or autoindex lists \`admin\` or \`backup.zip\`, you have an exposure finding. Screenshot it. Do not open the zip or try default credentials.

Robots.txt and sitemaps are public by design. They are maps of what the operator mentioned, not invitations to restricted space.

### Investigation workflow

1. Capture the homepage and about/contact pages as a normal user.
2. Record visible claims and test the cheap ones against public records.
3. Note technology and hosting from public headers, DNS, and assets.
4. Follow public links one hop. Stop at authentication.
5. If an index-of or 404 discloses paths or files, log the URL. Do not retrieve the files.
6. Write legitimacy indicators, stack notes, and exposure signals as three lists.

### Legal and ethical boundaries

Public content only. No unauthorized access to admin panels, even if they appear in 404s, sitemaps, or index listings. Directory listings are signals to document, not doors to walk through. Downloading a backup from an open folder can still be unauthorized access. Do not do it for “analysis.”

### Common mistakes

- Calling a site fake because it uses WordPress and stock photos.
- Calling a site safe because the TLS padlock is green.
- Turning a technology fingerprint into a test plan.
- Browsing an open index until the finding becomes a data breach you caused.

> **Aside.** A listing that says “Index of /backup” is a flare, not a welcome mat. OSINT101 grades whether you photographed the flare, not how far you walked down the hall. If you needed a password, you were not invited.

Your exercise: analyze a website and document findings about its legitimacy, technology stack, and any suspicious indicators. If you find an admin path or an index listing, write it up as exposure and stop. Curiosity that clicks through is not thoroughness.

        `,
        exercise: 'Analyze a website and document findings about its legitimacy, technology stack, and any suspicious indicators.',
      },
      {
        title: 'Historical Analysis',
        duration: '50 min',
        content: `
### Websites change. History tells the story

Current content is only part of the picture. Historical records reveal what the site used to be. Domains are cheap and reusable. Today’s “fintech platform” can be yesterday’s parked page. If you only screenshot now, you are reviewing a costume change and calling it a company.

Use public archives, public historical DNS, and dated screenshots. Do not treat an archived admin panel or \`index of /\` as a time machine into their files. If the archive shows exposure, document it. Do not download the backup.

### Why this matters

Impersonation loves a story of longevity. Archive calendars will not respect that story. Historical analysis catches a silent domain that later sprouted a bank clone. It also stops you smearing a firm that redesigned.

Time structures the case. A March claim can be compared to the March snapshot. Without history, every contradiction is “they updated.”

### What you'll be able to do

- Pull a public archive calendar and describe major purpose shifts.
- Pair domain age with content history instead of using either alone.
- Recognize typosquats, impersonation, and dormant-then-lively domains.
- Keep archived admin pages and directory listings as signals.

### Wayback Machine

The Internet Archive preserves website history. Other public archives exist; the method is the same.

- **Archive search**: Find captured versions. Note gaps. A gap is not proof of deletion — only that nobody captured it, or the crawler was blocked.
- **Timeline view**: See how the site changed. Look for title changes and the day the logo suddenly belonged to someone famous.
- **Screenshot comparison**: Visual changes reveal purpose shifts. Compare the first useful capture with the current site.
- **Deleted content**: What was there before is sometimes more revealing than what is there now. Cite the archive URL and capture timestamp.

Archives are copies and can be incomplete. If an archived page is a login or an index listing, record that it existed. Do not use the archive as a map to recover other people’s files from the live host.

### Domain age and history

- **Newly registered domains**: Suspicious for high-stakes content — banks, governments, “urgent invoice” themes — especially when the design implies decades. Not suspicious for a startup that is actually new.
- **Recently changed content**: Sudden pivots warrant scrutiny. A recipe blog that becomes a wallet-connect page overnight is a pattern with a name.
- **Abandoned domains**: Pointing nowhere may mean a discarded project or a sale. Check re-registration versus the same record going quiet.

Public historical DNS, when you have a lawful source, shows the name moved hosts. Hosting moves are normal. Hosting moves the same week content clones a brand are less normal.

### Common patterns

- **Typosquatting**: Domains that look like famous brands with slight misspellings. Compare live content to the real brand.
- **Brand impersonation**: Sites that mimic legitimate businesses. Historical captures often show the kit arriving fully formed.
- **Flag domains**: Campaign infrastructure. Shared templates, analytics IDs, or name servers across a burst of names. Cluster that. Do not invent a mastermind from two similar footers.
- **Pivot history**: Sites that changed purpose multiple times. Pivots can be legitimate sales. Write both hypotheses.

### Warning signs

- Content that suddenly appeared after long dormancy.
- Domains registered recently for “established” businesses.
- Sites that redirect to different content over time. A monthly 302 to a new brand is a taxi, not a storefront.
- Archive captures of admin paths or directory listings. Those are historical exposure signals. They do not authorize you to try those paths live.

### Investigation workflow

1. Record current WHOIS dates and screenshots so “now” is fixed.
2. Pull the archive calendar. Sample first, last, and any obvious spikes.
3. Note purpose, branding, and contacts at each sampled date.
4. Compare registration events to content events.
5. Flag patterns (typosquat, impersonation, dormancy, redirect taxi).
6. If history shows an open index or admin URL, write the exposure. Do not reopen it live.

### Legal and ethical boundaries

Public archives and public DNS history only. No unauthorized access to admin panels that appear in old snapshots, 404s, or index listings. An archived directory is still not your directory. Do not retrieve forgotten backups or harass old registrant contacts.

### Common mistakes

- Reading one capture as the whole past.
- Calling every redesign a “pivot to fraud.”
- Blaming the current owner for 2011’s content after a re-registration.
- Recreating old admin URLs on the live host because the archive made you curious.

> **Aside.** The past is a witness with gaps. OSINT101 wants three dated captures and one honest hole. It does not want you logging into a forgotten panel because the archive remembered the path. Memory is not consent.

Your exercise: check the Wayback Machine for a website and document how its content and purpose have changed over time. Date each shift. If an old snapshot shows an index listing or an admin page, note it as historical exposure and leave that door.

        `,
        exercise: 'Check the Wayback Machine for a website and document how its content and purpose have changed over time.',
      },
    ],
  },
  'business-osint': {
    id: 'business-osint',
    title: 'Company & Organisational Intelligence',
    description: 'Research companies, their structure, leadership, and digital footprint using open sources.',
    level: 'Beginner',
    estimatedTime: '3-5 hours',
    sections: [
      {
        title: 'Company Structure Research',
        duration: '30 min',
        content: `
Every company leaves a paper trail. The trick is knowing where to look — and remembering the trail is a *register*, not a confession booth you enter in disguise. This is competitive intelligence and due diligence, not corporate espionage, and not pretexting a receptionist for the org chart.

### Why this matters

Legal identity is the difference between a brand name and an entity you can actually describe. Students who start on LinkedIn meet a marketing story. Students who start on the register meet directors, addresses, and status. If you cannot name the company number, you do not yet have a company. You have a logo.

### What you'll be able to do

You will find a local business's registration number, registered address, key public officers, and a bounded size signal — from filings and news — and cite each item. Keep trading names and shelf-company tells in the notes instead of blending them into one vibes-based "firm."

### Every company leaves a paper trail. The trick is knowing where to look.

Company research is a common OSINT task — competitive intelligence, due diligence, investigations, or sales prospecting. Legitimate when sources are public. Not legitimate when you invent a buyer persona or dumpster-dive. Stay on registers, filings, and what the company already published. Pick a local business that actually filed something.

### Start with the legal entity

- **Company registers**: ASIC (Australia), Companies House (UK), SEC (US), OpenCorporates (global).
- **Business registration numbers**: ABN, ACN, EIN, VAT — search these for associated entities.
- **Trading names**: A company may operate under multiple trading names. Search all of them.

OpenCorporates is a map, not gospel; click through to the official register. Numbers are pivot keys. A brand with no number may be a sole trader, a foreign entity, or vapour — write which. A registered address is often an accountant's office, not the shop. Record both if public. Do not treat it as a surveillance target.

### Leadership and people

- **LinkedIn**: Search for current and former employees. Look for job titles that reveal structure.
- **Crunchbase**: Funding, founding dates, investor information.
- **Zoominfo / Apollo**: Contact data (often a paid tier, but free tiers provide limited useful data).
- **Board members**: Search for directors on company registry sites.

Directors on the register beat "thought leadership" posts. Former employees are useful for historical structure and terrible as a pretexting channel — do not message them pretending to be a journalist. Public titles, public bios, public filings. You do not need a paid mobile number for this lesson. Disambiguate common director names with company number plus a second public source.

### Financial health signals

- **Annual reports**: Public companies file these. Look for revenue trends, risk factors, and subsidiary mentions.
- **News mentions**: Search for recent funding rounds, layoffs, acquisitions.
- **Job postings**: Rapid hiring suggests growth; hiring freezes suggest trouble.
- **Glassdoor / Indeed**: Employee reviews — biased but useful for culture and leadership signals.

Private companies often will not hand you revenue. Then the range comes from tenders, news, headcount bands, or "unknown — no filing." Unknown is valid. Inventing turnover because the shop looks busy is not analysis. A 10-K risk factor is structured. A Glassdoor rant is a mood.

> A company that has been registered for 10 years with no website, no LinkedIn, and no reviews may be a shelf company. That is itself a finding.

### Numbered workflow

1. Write the objective: legal identity, officers, address, size signal.
2. Search the official register (and OpenCorporates as an index). Capture number and status.
3. List trading names and related numbers.
4. Record directors/officers from the register; corroborate titles on public professional pages.
5. Pull one financial or size signal from a filing, tender, or reputable news item — or write "not public."
6. Cite every claim. Stop when the exercise fields are filled or explicitly blank.

### Legal and ethical boundaries

Company registers, public filings, and traces firms chose to publish. Competitive intelligence, not espionage. No pretexting, impersonation, or paying insiders. If a fact is not in a public record or public page, it is out of scope.

### Common mistakes

Researching the brand and missing the entity. Treating a registered office as the factory. Using LinkedIn headcount as audited revenue. Stopping at Crunchbase. Calling a quiet company "shell" without checking whether it is simply small and dull.

> **Rule of thumb:** The register is boring on purpose. Boring is where the directors live. Charm is where the marketing team lives. Start with boring.

Close with the exercise: research a local business online. Find its registration number, registered address, key personnel (CEO, directors), and approximate revenue range. Document all sources. If revenue is not public, say so and show the sources you used to learn that.

        `,
        exercise: 'Research a local business online. Find its registration number, registered address, key personnel (CEO, directors), and approximate revenue range. Document all sources.',
      },
      {
        title: 'Digital Footprint Mapping',
        duration: '35 min',
        content: `
A company's digital footprint reveals infrastructure, priorities, and public exposure. Your job is to map what already faces the internet — not to probe it until an IDS writes your name down, and not to phish the marketing intern for a staging password.

### Why this matters

Legal structure without a footprint is a filing. A footprint without structure is a pile of domains. Together they show how the organisation presents itself, where email goes, and which forgotten hosts still have certificates. Useful for diligence and competitive context. Not a pentest.

### What you'll be able to do

You will build a one-page profile: domains, public socials, visible tech clues, third-party mentions, and a bounded LinkedIn presence — each with a confidence rating. You will use passive, public sources (WHOIS, CT logs, DNS, BuiltWith/Wappalyzer on pages you visit like a normal user). You will not scan, brute, or pretext.

### A company's digital footprint reveals infrastructure, priorities, and vulnerabilities

"Vulnerabilities" here means visible weakness in the public picture: expired sites, contradictory addresses, an abandoned support account. It does not mean "I found an open port." Work the company you can already describe from the register.

### Website analysis

- **WHOIS**: Who registered the domain? When? Through which registrar?
- **SSL certificate transparency**: Search crt.sh for all certificates issued to the domain — reveals subdomains and hosting infrastructure.
- **DNS records**: MX (email provider), NS (nameservers), TXT (SPF, DKIM, verification records).
- **Technology stack**: BuiltWith, Wappalyzer — what CMS, analytics, and tools the site uses.

WHOIS is often redacted. Creation date and registrar still matter. CT logs list every \`dev-\` and \`staging-\` hostname someone requested a cert for — names that existed, not invitations to visit admin panels. TXT records often name email or docs vendors. Note the category. Visit the site as a reader. Do not brute directories and call it footprinting.

### Social media footprint

- **Which platforms** does the company have a presence on?
- **Posting frequency and engagement** — reveals marketing priorities.
- **Employee advocacy** — do employees share company content?
- **Customer interactions** — how does the company handle complaints or questions?

Official vs. fan vs. impersonator accounts are a finding. Check the bio link against the domain you already WHOIS'd. Employee posts are a public signal, not a reason to scrape personal profiles. Do not create a fake complaint to "test" support.

### Third-party mentions

- **Review sites**: Google Maps, Yelp, Trustpilot.
- **Industry forums**: Discussions about the company or its products.
- **News and press**: Media coverage, press releases, interviews.
- **Partnership pages**: Companies listed as partners or clients.

Reviews are biased and still useful for location and "this brand maps to that shop." Partnership pages feed the next lesson. Pair press releases with a filing when you can.

### What to build

Create a single-page company profile with:

- Legal identity and structure
- Key personnel
- Digital assets (domains, social profiles)
- Technology stack
- Recent news or signals
- Confidence rating for each data point

Keep that list. One page means you will cut. Confidence belongs per line: an MX pointing at a known mail host can be high; "the job ad said CRM" is low.

### Numbered workflow

1. Start from the legal entity and primary domain.
2. WHOIS + DNS + crt.sh. List hostnames and mail/SaaS clues.
3. Fingerprint the public site with a browser tool, not a scanner.
4. Inventory official socials and one employee-presence note from LinkedIn *public* pages.
5. Add three third-party mentions with URLs.
6. Draft the one-pager with confidence tags. Stop.

### Legal and ethical boundaries

Digital footprint mapping is passive and public. Competitive intelligence, not espionage. No pretexting for access, no phishing, no vulnerability exploitation, no credential stuffing on admin logins you noticed in a job ad. No payment-system poking. Subdomains in CT logs are names, not targets.

### Common mistakes

Calling a Wappalyzer icon a full architecture diagram. Treating every crt.sh name as live. Mapping employees' personal lives. Scanning because "footprint" sounded technical. Forgetting the register company is not the same as the Shopify storefront.

> **Rule of thumb:** A certificate log is a diary of what someone asked the internet to trust. It is not a to-do list of hosts to annoy. Read it. Do not rattle the doors.

Close with the exercise: pick a medium-sized business you are familiar with and map its complete digital footprint: domains, social profiles, tech stack, third-party mentions, and employee presence on LinkedIn. Create a one-page summary with confidence ratings.

        `,
        exercise: 'Pick a medium-sized business you are familiar with and map its complete digital footprint: domains, social profiles, tech stack, third-party mentions, and employee presence on LinkedIn. Create a one-page summary.',
      },
      {
        title: 'Supply Chain and Relationships',
        duration: '25 min',
        content: `
A company is not an island. Its relationships reveal its real shape. Ownership, suppliers, partners, and competitors turn a quiet entity into a network you can brief. Sources stay public: filings, contracts, case studies, news. Not a fake RFQ to trick a vendor into naming prices.

### Why this matters

Company-to-company connections often matter more than the company itself. A subsidiary, a named vendor, or a government contract can explain risk better than a homepage. Analysts who stop at "Ltd" miss the group. Analysts who invent a supply chain from a warehouse stock photo invent a novel.

### What you'll be able to do

You will take the company you already researched and document at least three relationships (ownership, partnership, supplier, or competitor) with sources and confidence, then draw a simple text map. You will distinguish what a filing says from what a marketing "powered by" badge implies.

### A company is not an island. Its relationships reveal its real shape.

Who owns, supplies, partners with, and competes with a target is the context. Three well-sourced edges beat a wallpaper of logos you cannot explain. Stay in competitive intelligence: what a diligence analyst could assemble from the open record. Espionage is a different industry.

### Ownership and corporate structure

- **Parent companies**: Who owns the target? Who does the target own?
- **Subsidiaries**: List known subsidiaries and their jurisdictions.
- **Joint ventures**: Formal partnerships between companies.
- **Former names**: Companies rebrand. Search old names for historical context.

Start on the register and in annual reports: subsidiaries, PSC pages where public. A shared director is a possible link, not a parent. Two companies at the same address may share an accountant. Former names belong on the map.

### Supplier and vendor intelligence

- **Public contracts**: Government contracts reveal suppliers and pricing.
- **Partnership announcements**: Press releases mentioning technology partners.
- **Customer references**: Case studies on vendor sites (reveal who the target's customers are).
- **Reverse supplier search**: Search for the target as a customer on other companies' case studies.

Procurement portals are primary sources. A vendor case study is a claim the vendor wanted published; still a lead. Job ads that name a stack are weak evidence. You will not pose as a buyer to extract a supplier list. If it is not public, it is not in the exercise.

### Competitor mapping

- **Direct competitors**: Same product, same market.
- **Indirect competitors**: Same problem, different solution.
- **Emerging competitors**: Startups in the same space.
- **Competitive signals**: Pricing changes, hiring patterns, product launches, regulatory filings.

Name rivals with a market and a source. Public decks and filings beat your gut. Hiring patterns are signals, not proof of a secret product. Pricing from a public page is fine. Pricing from a faked quote request is pretexting.

### Relationship visualisation

For complex investigations, create a relationship map:

- Nodes = Companies and people
- Edges = Ownership, employment, investment, partnership
- Annotate with confidence levels and sources

For this lesson a text map is enough:

\`\`\`
[Parent Co] --owns--> [Target Ltd]
[Target Ltd] --customer of--> [Vendor] (case study, 2025)
[Target Ltd] --competes with--> [Rival Inc] (same tender)
\`\`\`

If you cannot annotate an edge, delete the edge. Pretty graphs of guesses are how briefings go wrong in public.

> The most valuable insight in company OSINT is often not about the company itself, but about who is connected to it.

### Numbered workflow

1. Reopen the legal profile and one-pager from the previous lessons.
2. Extract ownership and former names from registers/filings first.
3. Search public contracts and vendor case studies for the legal name *and* trading names.
4. Name competitors with a market definition and a source.
5. Pick three edges you can cite. Draw the text map with confidence.
6. Stop. Do not fill space with unsourced "likely suppliers."

### Legal and ethical boundaries

Public filings, contracts, case studies, news. Competitive intelligence, not espionage. No pretexting as a customer or journalist. No fake identities. If an edge requires a lie, delete the edge.

### Common mistakes

Treating a shared coworking address as a corporate group. Counting every logo wall as a partnership. Missing old names. Drawing competitors from "I have heard of them." Messaging staff for confirmation. Confusing a vendor's marketing claim with a signed contract.

> **Rule of thumb:** A relationship map is only as adult as its worst edge. If you cannot say where an arrow came from, it is decoration. Decoration does not survive questions.

Close with the exercise: take the company you researched in the previous exercise and identify at least three relationships: ownership, partnership, supplier, or competitor. Create a simple text-based relationship map — nodes, edges, sources, confidence. That map is the brief.

        `,
        exercise: 'Take the company you researched in the previous exercise and identify at least 3 relationships: ownership, partnership, supplier, or competitor. Create a simple text-based relationship map.',
      },
    ],
  },
  'digital-identity-analysis': {
    id: 'digital-identity-analysis',
    title: 'Digital Identity Analysis',
    description: 'How public traces form a working identity, and how often they belong to three different people.',
    level: 'Intermediate',
    estimatedTime: '3-4 hours',
    sections: [
      {
        title: 'The Digital Identity Concept',
        duration: '25 min',
        content: `
A digital identity is not a soul in the cloud. It is a pile of public traces that may refer to one person — or to three people, a brand intern, and a fan account. OSINT101’s opening move is disambiguation, not drama. You will build a composite from public sources and keep your hands off anything that looks like doxxing.

### What is a Digital Identity?

People leave traces: published emails, social profiles, forum posts, professional pages, news mentions, and “deleted” items an archive still remembers. Together those traces can form a working picture of how someone appears online. The picture is not the person. It is public residue.

Work only with what is public or what a subject published. Private databases, scraped friend lists behind logins you do not have, and “I found their kid’s school” energy are out of scope. If you cannot say the source out loud in a briefing, you should not have collected it.

### The Three Pillars

1. **Self-declared Identity**: LinkedIn summaries, personal sites, social bios, speaker pages. Useful and vain. People omit and rearrange. Treat it as testimony, not a certified extract.
2. **Behavioral Identity**: public posts, listed groups, talks, public repos. Behavior can confirm a skill or a time zone. It cannot diagnose a personality from three likes.
3. **Attributed Identity**: news, public dockets, officer lists, conference programs. Other people get names wrong too. Attribution is a source type, not a gold stamp.

A workable identity uses all three. A dangerous one uses one pillar and a feeling.

### Why This Matters for OSINT

Identity work is how you stop investigating the wrong Alex Chen. It is how you test claims: the bio says director; the public record says intern. Corroboration and contradiction are the product. Alternative public contact channels — a listed press email — can matter for lawful outreach. Risk notes belong in a report only when sourced, scoped, and necessary.

What does not belong: a scrapbook of a private life because you were curious. Curiosity is a method. It is not a warrant.

### What you will be able to do

- Describe a public figure’s online presence as self-declared, behavioral, and attributed.
- Spot contradictions without calling them “lies” on first contact.
- Keep a disambiguation log: same person, different person, or not enough.
- State legal limits before you open the fifth tab.

### Working sequence

1. Write the question in one sentence. “Map the public digital identity of [public figure] for training” is a sentence. “Find everything” is a mood.
2. Collect self-declared traces from platforms they operate or that a publisher clearly attributes to them.
3. Add behavioral traces that are public without logging into someone else’s account.
4. Add attributed traces from news and official pages.
5. For each identifier — name, handle, photo, employer — ask whether it uniquely points to *this* person.
6. Mark contradictions. Do not resolve them with a story.
7. Stop when you can brief five platforms and the gaps.

### Legal Boundaries

Respect privacy law where you work and where the subject lives. Public is not the same as ethical.

- Collect only what answers the training or task question.
- Do not publish a dossier that stitches a private individual together for an audience that does not need it.
- Do not contact people under false pretenses.
- Do not harvest non-public data, bypass access controls, or buy identity dumps.
- Minors are not practice targets. Use public figures or fictional personas.

Doxxing — exposing private contact, home, or family details to shame or to “prove you could” — is not OSINT. If a public figure’s press email is on their site, record that it is on their site. If you start mapping a neighborhood from a selfie reflection, you have left the lesson.

### Common mistakes

- Merging two people because the name and industry match.
- Treating a display name as a legal name.
- Assuming a verified badge is a background check.
- Quoting “deleted” content without an archive and a date.
- Building a target package as if the subject were prey.

> **Rule of thumb:** The internet contains surplus humans with identical names and identical sunsets. If your composite requires you to squint, un-squint and split the file. Ambiguity is not a personal insult. It is data.

Your exercise is to pick a public figure and document their digital identity across five platforms. Note what each platform actually reveals — not what you inferred from the header image. If two platforms might be different people, write that down in the same font you use for facts.

        `,
        exercise: 'Pick a public figure and document their digital identity across 5 different platforms. Note what each platform reveals.',
      },
      {
        title: 'Email Address Analysis',
        duration: '30 min',
        content: `
An email address is a structured public identifier that people reuse with optimism. Sometimes they are right. Often they are not. This lesson is about reading the address, finding *public* places it appears, and refusing to turn a mailbox into a stolen-password safari.

### Email as an Identifier

A published email is often the best pivot because it is relatively unique and because people stamp it on speaker pages, PDFs, and contact forms. It can hint at:

- **Name patterns**: \`firstname.lastname@\`, \`flast@\`, a year glued to a nickname. Hints are not legal names.
- **Provider clues**: consumer mailbox, company domain, university, or disposable service.
- **Organization context**: \`press@\` describes a function. Personal mail on a company domain describes a staffing choice, not a personality.

Work from addresses already public — a site, a press kit, a filing — or from addresses you own. Do not harvest inboxes. Do not try passwords on login forms to “see if it exists.” Existence checks that attack an account are not OSINT.

### Why this matters

Email is how organizations file humans. It is also how analysts wander into breach dumps. Extract structured meaning and public cross-links without collecting secrets you have no right to hold. If your findings chain depends on someone else’s leaked password, you have left OSINT101.

### What you will be able to do

- Parse local-part and domain for hypotheses, then test them on public pages.
- Use public-facing tools for pattern and exposure *metadata*, especially on addresses you own.
- Search the address as a quoted string on the open web.
- Decide when an address is durable versus throwaway.

### Verification Tools

Stay on the public and defensive side:

- **Hunter.io** (and similar): organizational format hypotheses — “this company appears to use first.last.” A pattern, not a license to hammer a staff list.
- **Have I Been Pwned**: check **email addresses you own**. HIBP reports named breaches and data classes. That is metadata, not a password, and not permission to look up strangers for sport.
- **Emailrep.io** and similar: treat scores as opinion. “Suspicious” can mean spam lists, not a plot.
- **Dehashed and cracked-credential shops**: they exist. This course does not send you there. Do not buy or traffic stolen credentials. Do not download dumps.

If a tool’s main product is “here is the password,” close it.

### Cross-Platform Discovery

Search the *address string* in public places:

- **Quoted web search**: \`"name@domain"\` and \`site:\` limits. You want pages that already published it.
- **Gravatar and similar**: a public image or username may be tied to an email hash. Record the profile. A stock avatar is not a face match.
- **Platform people-search**: use only what the site shows strangers. Password-reset pages are not search engines. Using them to confirm someone else’s mailbox is a dirty trick and you will not do it here.

Write a findings chain: address → page → what the page claimed → date accessed. If the chain requires a dump, the chain is invalid for this course.

### Disposable vs. Permanent

Disposable services exist so people can avoid durable identifiers. A known throwaway domain often will not repay deep correlation. Permanent consumer mail and custom domains usually repay more *public* searching because people reuse them on CVs.

Do not moralize. A disposable address is not proof of crime. A fifteen-year Gmail is not proof of virtue. They are durability categories.

### Working sequence

1. Record the address exactly. Typos create fictional people.
2. Split local-part and domain. Keep pattern hypotheses in a separate column from facts.
3. Search the quoted address on the public web. Archive useful hits.
4. If the address is yours, check HIBP and write breach *names* and *data classes* only.
5. Look for public profiles that cite the same address.
6. Stop before you “just check” a login form.

### Legal and ethical boundaries

Public-source email OSINT is fine. Using leaked passwords, buying credential lists, or testing combinations against real logins is not. Do not doxx a private person by publishing a newly assembled contact map. Prefer your own mailboxes or a public figure’s published press address.

### Common mistakes

- Treating the local-part as a legal name.
- Using forgot-password flows as verification.
- Pasting someone else’s address into cracked-password search.
- Assuming a company format means a specific human exists at that guess.
- Forgetting role accounts (\`info@\`) are shared.

> **Rule of thumb:** An email is a label on a door, not a skeleton key. If your next step is “and then we try the password,” you are no longer in the identity lesson. OSINT101 does not grade that.

Your exercise is to take a known email address — ideally one you own, or a press address a public figure published — and document every *public* platform or page you can associate with it. Write the findings chain. If you cannot associate it without a dump, write “no public association found.” That is a result.

        `,
        exercise: 'Take a known email address and document every platform you can associate with it. Write up your findings chain.',
      },
      {
        title: 'Username Correlation',
        duration: '30 min',
        content: `
Usernames are the internet’s favorite recycling program. People drag \`cyberjake\` from a game in 2011 onto a professional site in 2024 and wonder how both turned up. Correlation is powerful. It is also how you glue two unrelated jakes into one frankenperson. OSINT101 wants matches you can defend.

### Username as a Cross-Platform Key

A handle can unlock a trail of *public* profiles because many platforms use the same identifier in the URL. That is a gift. It is not a biometric. Exact-string hits are leads. Leads become identity only after you compare content, not after a tool prints a green check.

Automated “found on 87 sites” output is a to-do list. It is not a graph of one soul.

### Why this matters

Username reuse is one of the highest-yield pivots in open-source identity work. It is also a factory for false positives: common words, shared fan handles, bots that squat the same string. If you cannot disambiguate, you must not merge. Merging is how reports accuse the wrong volunteer moderator of being a crypto influencer with a similar joke.

### What you will be able to do

- Generate a short list of public variants without sliding into harassment.
- Use username checkers as collection aids, then discard unverified rows.
- Apply a reliability ladder from exact match to random suffix.
- Manually verify the top hits — or decline the match.

### Automated Search Tools

These tools ask public sites whether a profile URL exists. They do not prove occupancy by one human.

- **WhatsMyName** (WebBreacher): large site list, good for breadth.
- **Sherlock**: command-line sweep across many social URLs.
- **Maigret**: similar idea with more public profile fields when sites allow it.
- **Namechk**: availability-oriented. “Taken” is not “your subject.”

Run them from a research environment you control. Do not add brute-force login attempts. Expect ghosts: dead pages and 404s that look like 200s. Open the URL. Read it. If a checker cannot see a private profile, you will not “just friend them” to finish homework.

### Common Patterns

| Pattern | Example | Reliability |
|---------|---------|-------------|
| Exact match | cyberjake on every platform | High *only after* content overlap — the string alone fails if the word is common |
| Slight variant | cyberjake2024, cyberjake_ | Medium-high when other signals agree |
| Reverse | jakecyber | Medium; easy collision |
| Random suffix | cyberjake_x7f92 | Low — often coincidence |

Consider variants the subject already used in public: dots, underscores, a visible year. Do not generate fifty lookalikes and message them. This is correlation, not a naming-and-shaming campaign.

### Manual Verification

Never trust automated tools alone. Always:

1. Visit the profile yourself. Capture URL and date.
2. Compare bios, public photos, linked sites, and writing habits. Reverse-image a distinctive public photo. Stock photos correlate with nobody and everybody.
3. Check cross-references: same personal site, same published email, same unique phrase.
4. Look at join dates and public activity. A 2024 account using a 2008 handle can be the same person or a squatter.

One matching string is a clue. Two independent signals are a lead. A vibe and a similar hat are how analysts earn a quiet reputation. If the top three hits are a chef, a hockey fan, and a developer in another country, you do not average them. You write three rows.

### Working sequence

1. Record the seed username exactly as seen.
2. Run one checker. Copy the hit list.
3. Strike anything you cannot open as a public page.
4. Verify the top three hits against the checklist.
5. Assign match confidence: confirmed / probable / possible / unrelated.
6. Do not proceed to home addresses or family. You are correlating handles.

### Legal and ethical boundaries

Public profile correlation is standard OSINT. Creating accounts to scrape non-public friends lists is not. Doxxing a private individual by publishing a newly linked map of handles is not. Use your own unused handle, a colleague who consented, or a public figure’s brand username.

### Common mistakes

- Believing a tool’s site count.
- Matching on first name plus a hobby word.
- Ignoring language, timezone, and topic contradictions.
- Treating parody and fan accounts as the principal.
- “Verifying” by sending the person a message.

> **Rule of thumb:** Sherlock is a waiter bringing menus. You still have to read the dishes. If you brief “same username, same person” without opening the page, OSINT101 will assume you like being wrong in bulk.

Your exercise is to pick a username, run it through Sherlock or WhatsMyName, then manually verify the top three matches. Write why each is the same person, a different person, or undecidable. Undecidable is allowed. Lazy merging is not.

        `,
        exercise: 'Pick a username, run it through Sherlock/WhatsMyName, then manually verify the top 3 matches.',
      },
      {
        title: 'Social Media Profile Analysis',
        duration: '35 min',
        content: `
A profile is a press release that updates itself. Some of it is structured — titles, dates, locations. Some of it is performance. Extract what is visible, compare it across platforms, and resist psychoanalyzing a grid of lunches. You will analyze public profiles. You will not stalk, scrape behind privacy walls, or assemble a harassment packet.

### What Profiles Reveal

Read platforms as *sources*, not as a single truth with better lighting.

**LinkedIn:**
- Employment history and dates as the subject chose to display them.
- Education, certifications, skills — claims, often unchecked.
- Recommendations: other people’s public statements, with all the politeness that implies.
- Groups and connections the platform leaves public.

**Facebook / Meta:**
- What remains public: sometimes hometown, sometimes nothing.
- Public groups, event RSVPs, and page interactions *if* visible without friending.
- Photos and tags only when made public.

**Instagram:**
- Public posts, captions, and location stickers the user left on.
- Follower/following overlap when those lists are public.
- Posting cadence. Cadence is a pattern, not a confession of insomnia.

Do not log in as a fake friend to “see the good stuff.” If it is not public, it is not in this lesson.

### Why this matters

People contradict themselves across audiences. The professional site says Singapore; the hobby account says a different city every month; both can be true, both can be branding, one can be a different human. Profile analysis puts those claims in one table. It is also how you spot sockpuppets and stolen photos — if you stay disciplined.

### What you will be able to do

- Capture a public profile so it cannot silently edit itself after you brief it.
- Extract structured fields into a table another analyst can check.
- Cross-reference two platforms without forcing a single story.
- Flag weak or impersonation-like profiles without turning “generic bio” into a crime.

### Profile Analysis Workflow

1. **Capture** — archive the public profile (archive.today, Wayback if it cooperates, or a dated screenshot). Profiles change after you quote them.
2. **Extract** — name variants, locations, employers, URLs, dates, unique phrases. Separate “stated” from “shown in a photo.”
3. **Cross-reference** — place LinkedIn dates next to Instagram captions next to a speaker bio. Matches are interesting. Mismatches are more interesting. Neither is automatically fraud.
4. **Verify** — check claims against company team pages, news, conference programs. A title that exists only on LinkedIn is still a claim.
5. **Document** — source, access date, archive, confidence. If you cannot point to a capture, you have an anecdote.

Work two platforms for the same *public* person. If you are not sure it is the same person, that uncertainty is the assignment.

### Red Flags

- Recently created profiles with a famous name and no history.
- Details that collide hard (two full-time jobs in different countries, same week) — still a question, not a gotcha.
- Generic bios plus a photo that reverse-search shows on advertising sites.
- Photos that appear on many unrelated profiles. Impersonation texture, or a default image — not a mastermind tell by itself.

Red flags start questions. They do not close them. A new account can be a new graduate. Write the flag. Do not write the screenplay.

### Working sequence (same-person test)

1. State why two public profiles are candidates — unique name plus employer, or a URL both list.
2. Capture both.
3. Build a comparison table: identifiers that agree, conflict, or are absent.
4. Reverse-image the primary photos if public.
5. Assign confidence. If you cannot get past “possible,” stop there.

### Legal and ethical boundaries

Public posts are public. Circumventing privacy settings or buying follower lists to build a shadow profile is not training. Do not doxx. Do not report home streets, children, or medical hints from photo backgrounds unless a lawful task requires a location fact you can justify. For class, use public figures or consenting peers.

### Common mistakes

- Reading tone as fact.
- Ignoring that companies write LinkedIn copy for people.
- Treating follower count as credibility.
- Assuming two languages means two people — or that two faces do not.
- Archiving nothing, then arguing with a page that no longer exists.

> **Rule of thumb:** LinkedIn is a costume. Instagram is a different costume. If you confuse costume conflict with unmasking, OSINT101 will hand you a quieter hobby. Document the fabric. Do not invent the play.

Your exercise is to analyze a LinkedIn profile and an Instagram profile that appear to belong to the same person — a public figure is safest. Document discrepancies and consistencies in a table. If they do not survive disambiguation, document that instead. Being right about “not the same” is analysis.

        `,
        exercise: 'Analyze a LinkedIn profile and an Instagram profile belonging to the same person. Document discrepancies and consistencies.',
      },
      {
        title: 'Public Records Integration',
        duration: '25 min',
        content: `
Public records are where branding goes to be inconvenienced. They are also where common names go to multiply. Use *official public* sources to test a digital identity — and stop before you publish a private citizen’s property map because the search box was empty and your curiosity was not.

### Types of Public Records

Depending on jurisdiction, some of the following are open without a password and without pretending to be someone else:

- **Property records**: ownership, assessments, tax history — often county level.
- **Court records**: dockets and judgments. Availability varies; sealed is sealed.
- **Business registrations**: entities, officers, registered agents, addresses.
- **Professional licenses**: boards that confirm a license is active and in which name.
- **Voter registration**: only where the jurisdiction actually publishes it. Many do not.
- **Marriage and divorce records**: sometimes indexes only; sometimes not your business for training.

If a record is not public, you do not sweet-talk a clerk under a false story. You do not buy a sketchy “full background” PDF and call it a primary source.

### Why this matters

Online identity is cheap to fake. A license board or company register can confirm a name-plus-role exists — or show five people sharing the name. Integration means *linking with evidence*, not grabbing the first PDF that feels like closure.

### What you will be able to do

- Start from a jurisdiction, not from a national vibes search.
- Use middle initials, locations, and employers as disambiguators.
- Connect a public digital identifier to a public record only when the overlap is defensible.
- Document the search path so another analyst can repeat it.

### Search Strategies

Start broad, then narrow, and write every query as if someone will audit it.

1. Full name plus state or equivalent, then county when you have a reason.
2. Add a middle initial or suffix when the name is common. If you do not have one, do not invent it from a social bio and then “confirm” it in the same breath.
3. Cross-reference addresses *already published* by the subject or their organization — office addresses, a registered-agent line — not a guessed home.
4. Use approximate age or known public associates only when those facts are sourced. “Looks about forty” is not a date of birth.

When the name is common, expect a pile. Fail to match quickly. The record that almost fits is more dangerous than the one that clearly does not.

### Connecting the Dots

Lawful joins look like: a published work-email domain plus a director filing at the same company; a username on a personal site that lists a registrable business name; a speaker-bio city plus a professional license in that state for a distinctive name.

They do not automatically join a known email to a home you dug up “because property search is fun.” If the only join is a breach dump or a paid people-search listing relatives of a private person, you do not make it here. Training uses public figures or a fictional persona — a method drill, not a neighbor problem.

### Documentation Requirements

- Record the exact search terms and the site or office that answered.
- Note the jurisdiction and the record identifier (instrument number, case number, license number) when present.
- Save a screenshot or official PDF; include retrieval date and time.
- Quote the field you relied on. Do not summarize a docket into a crime if it says “civil, dismissed.”

If you cannot show the path, you do not have a link. You have a hunch with letterhead.

### Working sequence

1. Define the persona: public figure or agreed fictional person with a plausible jurisdiction.
2. List which record types that jurisdiction actually publishes.
3. Search name + jurisdiction; log result counts.
4. Disambiguate with independent public facts only.
5. Write matches, near-misses, and absences. Absence is a finding.

### Legal and ethical boundaries

Public records still have use limits: some jurisdictions restrict voter-file use; some portals forbid bulk collection. Follow the portal’s rules. Do not doxx. Do not publish a private person’s home or family-court matters in class. Do not contact the subject to “confirm the house.” Collect the record that answers the question.

### Common mistakes

- Stopping at the first same-name hit.
- Treating a data broker as a county clerk.
- Reading a filing address as a secretly confirmed residence when it is a registered-agent mill.
- Skipping the date: old records describe old facts.
- Turning a civil docket into a character essay.

> **Rule of thumb:** A county PDF will not congratulate you. It will also not forgive a bad join. If you need the subject to be the person in row three for the story to work, pick a new story. The record is not your intern.

Your exercise is to take a fictional persona or a public figure and find what public records exist for them in a state or county you specify. Document the search path and the results — including searches that returned nothing.

        `,
        exercise: 'Take a fictional or public figure persona and find what public records exist for them in your state or county. Document the search path and results.',
      },
    ],
  },
  'people-profiling': {
    id: 'people-profiling',
    title: 'People Profiling',
    description: 'Public records, disambiguation, and how to stop building a file on the wrong person.',
    level: 'Intermediate',
    estimatedTime: '6-8 hours',
    sections: [
      {
        title: 'Public Records Research',
        duration: '60 min',
        content: `
## The Paper Trail

Public records are where identity work stops being a vibe and starts being a filing system. They are produced by offices that did not care about your narrative and will not rewrite themselves to flatter a LinkedIn headline. That is their virtue. It is also why you will treat them as *lawful, public, proportionate* sources, not as a kit for building a home-address shrine.

This matters because people lie, omit, and brand. Registries mostly date-stamp. Structured records disambiguate better than bios. Over-collection of home details is how due diligence becomes a privacy incident. This lesson stays on records a member of the public may lawfully query. You will not stalk, dox, or harass. You will find a registered agent for a sample local business and then you will go home.

Public records are the backbone of individual investigations only when the investigation is lawful and the record is actually public. Backbone does not mean "collect the whole skeleton." It means start with official systems when the question is official: who may accept service for this company, who is on a filing, what address the *entity* listed.

- **Voter Registration**: In some places limited data is public; in others it is restricted. Use it only if your jurisdiction and purpose allow. This course does not assign voter hunts for fun, and finding a home address to "complete the profile" is not a purpose.
- **Property Records**: Mapping *assets* is often a business or due-diligence question. Mapping someone's house to watch them is stalking with extra forms. If you open an assessor site, take the entity or parcel fact you need and stop.
- **Business Filings**: Identifying corporate connections: officers, registered agents, formation dates, status. This is the lane for the exercise.

Search the official registrar first. Aggregator sites scrape and stale. The registrar page you captured is the source.

### After this section

You will be able to query a lawful public registry for a sample local business, identify a registered agent, cite the source with a date, and rate reliability—without dumping residential data you do not need.

### Rule of thumb

Public records are useful because they are boring, structured, and less likely to be filtered through personal branding. In other words, they are the opposite of social media. Boring still requires ethics. A boring home address is still a home address. Proportionality means you do not copy it into a dossier because the form had a box.

If two records conflict, keep both and date them. Registries lag. People move. Companies file late. Your job is not to pick the prettier row.

### Workflow

1. **Write the lawful purpose.** "Identify the registered agent of a sample local business for a training citation." If you cannot say the purpose in one sentence, you are browsing, not researching.
2. **Pick a sample business** that is clearly a company, not a private individual as the subject.
3. **Find the official register** for that jurisdiction. Note the agency name.
4. **Search the legal name** and obvious trade-name variants. Record the query.
5. **Open the entity filing** and locate the registered agent (name or company, and the *service* address the filing lists).
6. **Capture** URL, retrieval date, and a screenshot or PDF. Rate reliability: official current register (high), official but stale (medium), third-party scrape (low until confirmed). Write one limitation.

The exercise ends at agent plus reliability. Do not pivot into anyone's personal social accounts.

### Legal and ethical boundaries

Lawful public records only. No pretext calls to a clerk, no impersonating a process server, no paid "people search" dossiers as a substitute for thinking. No stalking, doxxing, or harassment—do not publish the packet, do not message the agent with your findings, do not show up at an address.

Disambiguate entities. "Acme LLC" in two counties may be two companies. Never treat one handle or officer name as the whole person-universe. Collect the minimum. A registered-agent lookup does not require a voter file.

### Common mistakes

- Using a SEO "business lookup" blog as if it were the state.
- Assuming the agent is the owner, the CEO, or the same human as a social profile with a similar name.
- Copying every address on the filing into a personal profile of a human subject you were not assigned.
- Ignoring dissolved or foreign-entity status.
- Treating "public" as "fine to broadcast."

### Field notes

> **Rule of thumb:** if your notes look like you are moving in with the registered agent, you have left intelligence and entered a hobby I will not sign the timesheet for. Write the agent. Cite the register. Close the tab.

Find the registered agent for a sample local business and note the source reliability. Use the official filing. Date it. If you cannot explain why the source is official, it is not official. If you found a home address you did not need, do not put it in the answer. The exercise is a citation, not a biography, and biographies are how people-profiling goes wrong before the second lesson even starts.

        `,
        exercise: 'Find the registered agent for a sample local business and note the source reliability.',
      },
      {
        title: 'Identity Resolution and Disambiguation',
        duration: '70 min',
        content: `
## The internet contains many people with the same name and at least half of them are inconvenient

The internet is a crowded room where half the name tags are photocopies. Identity resolution is the work of asking whether two public records describe one person, two people, or a brand that borrowed a face. Disambiguation is the work of surviving the answer "not enough." OSINT101 will take an honest unmerged pair over a tidy wrong one.

This matters because a bad merge is a defamation machine. A timid non-merge is just a question. Common names are a factory for false positives. One identifier is a search key. A cluster is a possible identity. Contradictions are data.

People profiling starts with determining whether multiple records actually point to the same person. Starts. It does not start with a personality sketch. If you cannot resolve identity, you do not get to "profile." You get to "here are two files and a problem."

Never treat one handle as one person. Handles are rented, stolen, and shared by teams. A matching \`@\` is an invitation to collect *other* public fields, not a wedding. Work from lawful public records and public profile fields. No pretext. No "I'll just friend them as a fake alum."

### After this section

You will be able to list strong versus weak identifiers, apply disambiguation rules without forcing a story, and compare two similar public profiles with a written yes / no / insufficient—including the gaps.

### Strong identifiers

- Full legal name, especially with a middle name or suffix, still weak alone if common.
- Date of birth or approximate age *when lawfully published* (professional bio, news obituary, official filing). Do not extract age from a private clue you should not have.
- Location *history* as a cluster (city plus employer plus years), not "mentions Chicago once."
- Employment or education overlap with dated, independent public sources.
- Email, phone, or consistent usernames *published by the subject* on both records. Published. Not guessed, not breached.

A strong identifier can still be copied. Photo theft exists. Treat uniqueness as a reason to look harder, not to stop thinking.

### Disambiguation rules

- Look for corroborating clusters, not one-off matches.
- Be suspicious of common names. Be more suspicious of rare names that would be flattering to connect.
- Track contradictions explicitly: two concurrent full-time jobs on different coasts, incompatible ages, mutually exclusive degrees.
- Never force a match because the story would be tidier that way.

"Probably the same guy" is a useful thought to investigate. It is not a conclusion, and it certainly is not a line you want in a final report. If one record is a company page and the other is a human, say so. Pages are not people.

### Workflow

1. **State the pair and the purpose.** Two public items you are allowed to study. Purpose: training comparison, not targeting.
2. **Inventory identifiers** on each side in a table. Mark missing as missing.
3. **Score independence.** Same display name twice is one idea. Name plus dated employer plus a unique publication title is a cluster.
4. **Hunt contradictions** on purpose. Spend as long on mismatches as on matches.
5. **Check for impersonation and namesakes.** Fan pages, tribute accounts, and "the other lawyer in the same town" are common.
6. **Decide**: same person / different / insufficient, with a confidence word. Write the gaps that would change the decision. Insufficient is a first-class result.

### Legal and ethical boundaries

Lawful public records and public posts only. Proportionality: you do not need a property record to compare two conference bios. No stalking, doxxing, or harassment. Do not message the humans to "confirm." Do not compile a contact sheet.

Disambiguate before you attach more records. Never treat one handle as one person. If a minor appears in a photo, stop collecting around that photo. Jurisdictions differ on what "public" means. If a record requires a permitted purpose you do not have, you do not have the record.

### Common mistakes

- Merging on a single uncommon username.
- Ignoring age or timeline conflicts because the photos "look close."
- Using breach data or non-public contact books to break a tie.
- Writing "confirmed" when you mean "I would be surprised."
- Expanding the search to family members to "make the cluster work."

### Field notes

> **Rule of thumb:** if your identity call depends on one handle, you do not have an identity. You have a string. Strings do not pay taxes, hold jobs, or deserve a profile. Put the string back until it brings friends.

Compare two similar public profiles and document whether they likely refer to the same person, including the gaps in your reasoning. Likely is a ranked word. Gaps are mandatory. If you cannot list a gap, you have not disambiguated; you have committed. Commitment is for reports after the evidence shows up, and the evidence has not shown up if you are still staring at two similar smiles and a shared city name.

        `,
        exercise: 'Compare two similar public profiles and document whether they likely refer to the same person, including the gaps in your reasoning.',
      },
      {
        title: 'Social and Professional Mapping',
        duration: '75 min',
        content: `
## People leave trails through other people

People are easier to misunderstand than companies because they come with feelings and brunch photos. Social and professional mapping is how you chart *public* roles, collaborators, and affiliations without turning a network diagram into a smear. Association is not guilt. A coworker is not a cell. A board seat is a dated fact if the filing or the minutes say so.

This matters because bios are advertisements. Mapping supports identity resolution and shows where a subject claims a world the public record does not. Repeated public collaboration is stronger than a single conference selfie. Over-mapping family is how this work becomes harassment with a legend.

Associates, coworkers, alumni networks, and repeated interactions often reveal more than a self-written bio. "Reveal" means *publicly visible structure*. A coauthor list is a trail. A private wedding album is not your dataset.

Prefer professional and civic traces: employers, filings, talks, published boards. Family mapping is almost never proportionate for training. Never treat one handle as one person when you add a node. The "@acme-intern" that likes every post may be a social team.

### After this section

You will be able to choose in-scope public nodes, label edges confirmed / probable / merely adjacent, spot conflicts between claimed and observed background, and stop when adjacent is all the public record will pay for.

### What to map

- Professional roles and career progression as dated public claims (LinkedIn *public* view, company newsrooms, official bios). Note what is self-asserted versus third-party.
- Repeated collaborators or business partners: co-filers, coauthors, podcast regulars, joint press releases.
- Social clusters and mutual associations that are *public* (who is named in the same program PDF). Do not scrape friends lists behind a login you only have because you pretended to be someone else.
- Public affiliations like clubs, boards, events, or volunteer work that appear in minutes, newsletters, or the organization's own site.

Each node needs a source URL and a date. A node without a source is a doodle.

### What this helps with

- Verifying identity when two records share a collaborator cluster, not just a name.
- Understanding influence and access as *possible* pathways for further *lawful* questions. Not as a hit list.
- Identifying likely corroborating sources: the org page, the conference archive, the registry.
- Spotting conflicts between claimed and observed background: a title that never appears where it should, a decade that vanished.

### Caution

Association is not guilt, intent, or secret membership in a dramatic underground cabal. Sometimes two people just worked at the same place and also both enjoyed posting about brunch. Write edges as "appeared together on the 2024 panel page," not "aligned operatives."

Do not map children, home routines, or gym check-ins. That is not professional mapping. That is surveillance cosplay.

### Workflow

1. **Name the subject and the lawful purpose.** Public professional figure or instructor persona. Purpose: training map, not targeting.
2. **Collect role nodes** from official or clearly public pages. Cap the first pass (for example, five roles, five people, three orgs).
3. **Add people only when independently public** and relevant. Prefer colleagues named on org pages over commenters.
4. **Draw edges** with a label: confirmed (two independent public sources, or one official list), probable (one solid public source), adjacent (same event, no repeated link).
5. **Mark contradictions** (title vs. filing, dates that skip). Prune anything that is only a handle match or a one-off like.
6. **Write a legend.** If a reader cannot tell confirmed from adjacent, the map is decoration.

### Legal and ethical boundaries

Lawful public records and public posts only. Platform terms apply. No sockpuppet deception to expand a graph. No account takeover. No doxxing the map. No showing up. Proportionality: a career map does not require a property search.

Disambiguate every human node. Two "Sam Patel at Acme" entries may be two Sams. Never treat one handle as one person. If an edge would enable harassment (home, school of a child, medical), delete the edge. The map can survive. Your professional standing may not.

### Common mistakes

- Stars-and-lines soup with no confidence labels.
- Treating follows, likes, or being in the same Facebook group screenshot as partnership.
- Mapping everyone who commented, then calling it "the network."
- Inferring romance, crime, or ideology from proximity.
- Using the map as a to-do list for outreach.

### Field notes

> **Rule of thumb:** if your graph needs a villain color, you are not mapping. You are casting. OSINT101 does not produce casting directors. Label the edge or take it off the page.

Build a simple relationship map around a public subject and identify which links are confirmed, probable, or merely adjacent. Simple means a reader can hold it in their head. If you cannot explain an edge without a novel, it is adjacent or it is gone. The exercise is the labels. The pretty diagram is optional, and optional is the correct status for anything that tempts you to over-collect.

        `,
        exercise: 'Build a simple relationship map around a public subject and identify which links are confirmed, probable, or merely adjacent.',
      },
      {
        title: 'Timeline Building for Individuals',
        duration: '65 min',
        content: `
## A person is easier to understand when events stop floating around randomly

A life, in OSINT, is not a novel. It is a sequence of dated public claims that may or may not agree. Timeline building is how you stop treating a person as a single LinkedIn scroll and start treating them as a set of events with sources. Gaps are part of the product. Convenient omissions in a bio are a reason to look for a *public* record, not a reason to invent a secret decade.

This matters because identity errors love undated mush. "Worked in finance, then tech" fits thousands of people. Dated public records beat memory, including the subject's memory as performed online. You will build a short timeline for a *public* person from three source types and mark unresolved gaps. You will not follow anyone home through time.

Timelines reveal consistency, gaps, transitions, and suspiciously convenient omissions. Understand means "see the public sequence," not "know their soul." If an event has no date, it goes to a parking lot labeled undated, not into 2018 because the vibe was 2018.

Never treat one handle's post history as one person's life. Accounts are shared, ghostwritten, and stolen. Date the *account's* public output as account output until identity is resolved.

### After this section

You will be able to pick three different public source types, extract dated events, order them without laundering guesses into dates, and mark gaps and contradictions explicitly.

### Common timeline anchors

- Education dates from official alumni notes, theses repositories, or the school page—not from a comment saying "class of whenever."
- Employment changes from newsrooms, regulatory bios, dated press, or filings. Self-asserted social posts are claims. Mark them as claims.
- Property or business filings *when proportionate*. A director appointment on a company register is a clean anchor. A residential purchase is often disproportionate for training. Prefer entity filings.
- Public interviews, conference appearances, or press mentions with a publication date.
- Social posts tied to known *public* life events (a conference they were listed on, a product launch). Do not use family milestones, medical posts, or children's events.

Three source types means three *kinds*, not three screenshots of the same blog. Example mix: company register, newsroom, conference program.

### Why timelines matter

- They expose contradictions (two full-time roles, same year, no explanation in any public source).
- They help verify identity when the sequence matches across independent sources.
- They reveal periods needing deeper *lawful* research—or a written "unknown."
- They stop analysts from describing a life story as if it emerged fully formed from one LinkedIn page.

### Practice tip

Use dated public records wherever possible. Human memory is soft. Filing systems are often rude, but at least they are consistent. If the only date is "about then" in a podcast, write \`circa\` and lower the confidence.

### Workflow

1. **Choose a public subject** who has a documented professional life you may study. State the purpose: training chronology.
2. **Set a scope window** if needed (for example, last ten years of *public professional* events). Do not start at birth.
3. **Pull events from three source types.** For each: date, event, source, URL, retrieval date, claim vs. official.
4. **Disambiguate** before you add a row. If the name is common, require a cluster (org + role + year).
5. **Sort and scan for overlaps** that cannot coexist. Write the conflict; do not silently pick a winner.
6. **Mark gaps** and deliver a short timeline plus the gap list. Unresolved means you did not fill them from a private hunt.

### Legal and ethical boundaries

Lawful public records only. Proportionality: a career sketch does not need medical, intimate, or home-movement detail. No stalking, doxxing, or harassment. Do not contact the person to fill a gap. Do not scrape non-public calendars.

Never treat one handle as one person when dating a life. If identity is unresolved, the timeline is "events associated with this public name/account," not "Jane Doe's decade." Minors stay off the timeline. If a source is mixed, omit the minor and say the source was partially excluded.

### Common mistakes

- Using one platform's about box as all three "source types."
- Assigning exact dates to undated claims.
- Importing a namesake's records to close a gap.
- Including addresses or family events because they were dated and therefore "good data."
- Presenting the timeline as complete.

### Field notes

> **Rule of thumb:** if your timeline reads like a eulogy, you over-collected. If it reads like a charge sheet, you over-interpreted. Dated rows. Sources. Gaps. That is the whole personality this lesson allows.

Build a short timeline for a public person from three different source types and mark any unresolved gaps. Different types. Marked gaps. If you used three social posts, you used one type three times and you will redo it. If you filled a hole with a hunch, empty the hole. The exercise is honesty about time, which is rarer than people think and more useful than another adjective about who they "really are."

        `,
        exercise: 'Build a short timeline for a public person from three different source types and mark any unresolved gaps.',
      },
      {
        title: 'Ethics, Privacy, and Reporting',
        duration: '60 min',
        content: `
## Just because you can learn something does not mean you should collect everything

People-focused OSINT is where a competent collector becomes either a professional or a problem. The skill is not finding. The skill is refusing to find what the purpose does not pay for, and then writing what remains so that a reviewer can see your brakes as clearly as your facts. OSINT101 will forgive a thin profile. It will not forgive a thorough one that should never have been assembled.

This matters because people recon lands on bodies, families, and reputations. If your process would look like celebrity gossip with better filenames, it is already failing the course. Purpose and proportionality keep you inside OSINT instead of personal surveillance. Reports travel. Caveats must travel with them.

You will write a short profiling summary with findings, confidence, caveats, and one explicit privacy consideration. Lawful public records only. No stalking, doxxing, or harassment. Never treat one handle as one person.

People-focused investigations require tighter judgment than company recon. The internet will offer you the extra field. Your job is to decline it. Ask before each source: does this answer the question I was given? If identity is unresolved, say so at the top.

### After this section

You will be able to state a lawful purpose and the minimum data needed to serve it, separate hard facts from assessment, include a privacy consideration that is specific rather than a slogan, and complete the exercise without a contact list or a merged identity you did not earn.

### Key rules

- Stay within scope. Write the scope on the first line. If a finding is out of scope, it goes in the bin, not the body.
- Avoid unnecessary sensitive data collection: home routines, children, health, intimate relationships, precise residential data, financial account numbers. Public does not mean needed.
- Document lawful purpose and proportionality. One sentence each. If you cannot write them, you are not ready to collect.
- Separate hard facts from interpretive assessment. Facts get sources. Assessments get confidence and an opposite case.

No pretext, no sockpuppet romance, no harassment, no publishing the pack to "warn the community." This lesson is not a disclosure path.

### Reporting standard

- State what was found (minimum facts that serve the purpose).
- State how it was verified (independent public sources, or an honest "single source").
- State why it is relevant (map back to the purpose, not to curiosity).
- State any ethical or legal caveats (jurisdiction limits, identity uncertainty, data you saw and did not use).

A reader should be able to redo the public steps. They should not be able to harm the subject with bonus fields you included for flavor.

### Professional reminder

The goal is an accurate, defensible profile, not a nosy scrapbook. If your process starts feeling like celebrity gossip with better note-taking, recalibrate immediately. Recalibrate means delete, not "move to appendix." Appendices still leak.

### Workflow

1. **Write purpose, scope, and stop condition** before the summary. Example stop: "public role, employer, and one corroborating official or press source."
2. **List candidate facts** from lawful public records and public posts only. Mark each in / out of scope.
3. **Disambiguate.** If two identities remain possible, the summary is about the *records*, not "the person."
4. **Draft findings** as bullets with sources and dates. No adjectives that are secretly conclusions.
5. **Assign confidence** per finding, not one vibe for the whole page.
6. **Write caveats** including at least one privacy consideration (what you omitted and why, or what a reader must not do with this file). Redact anything that failed the gossip test. Then stop.

### Legal and ethical boundaries

Lawful public records and public posts only. Platform terms apply. Proportionality is mandatory. No stalking, doxxing, harassment, or contact. No account takeover. No scraping that bypasses authentication. No sockpuppet deception for social engineering.

You are not the subject's biographer or fan wiki. If a fact is sensitive and not required, omit it. Disambiguate; never treat one handle as one person. If you cannot, the ethical report is shorter, not louder.

### Common mistakes

- A privacy paragraph that says "we respect privacy" while listing a home address.
- Merging identities to make the summary read smoothly.
- Copying social-media shade into an official tone and calling it assessment.
- Forgetting that the training file can still be screenshotted.
- Adding "next steps" that are just more intrusion (drive-by, pretext call, fake friend request).

### Field notes

> **Rule of thumb:** if you would not read this summary aloud to the subject, their counsel, and me in the same room, rewrite it until you would. Courage is not collecting more. Courage is submitting less and still being right.

Write a short profiling summary that includes findings, confidence, caveats, and one explicit privacy consideration. If the privacy line could be pasted onto any paper in the building, it is not explicit. Name what you did not collect, or what must not be redistributed, or where identity remains unresolved. Neither line is optional.

        `,
        exercise: 'Write a short profiling summary that includes findings, confidence, caveats, and one explicit privacy consideration.',
      },
    ],
  },
  'social-media-investigations': {
    id: 'social-media-investigations',
    title: 'Social Media Investigations',
    description: 'Platform structure, usernames, images, and what a posting pattern can and cannot prove.',
    level: 'Intermediate',
    estimatedTime: '5-7 hours',
    sections: [
      {
        title: 'Platform Architecture and Data Sources',
        duration: '45 min',
        content: `
### Each platform is a different country with different rules

Social media investigations fail in a boring way: the analyst treats every site as the same filing cabinet with a different logo. Each platform is a jurisdiction. It exposes different fields, hides different graphs, and deletes content on a different clock.

Understanding what data each platform exposes helps you work smarter. It also stops you from inventing access you do not have. Public SOCMINT is what a platform shows a logged-out or ordinary user, plus what archives already captured. It is not a license to poke private messages or scrape friends-only albums.

### Why this matters

Volume is not the hard part. Judgment is. If you do not know which fields are native to a platform, you will under-collect (miss the check-in or company page) or over-collect (hoard likes as affidavits). Platform literacy keeps the work scoped and briefable.

Absence is a finding. “No location tags” and “friends list restricted” belong in the notes. “I assumed it would be there if I looked harder” is how people start doing things they should not.

### What you'll be able to do

- Inventory, for a public subject, what each major platform actually shows without special access.
- Separate native platform data from third-party leftovers, archives, and screenshots of screenshots.
- Choose the platform search box before you reach for a scraper that makes Legal sit up straighter.
- Record gaps as gaps, not as invitations.

### What platforms typically reveal

Treat this as a menu, not a promise. Settings, age of the account, and the subject’s taste for privacy will delete half of it.

- Profile information and bios: names, handles, pronouns, link-in-bio services, “former” job titles that never quite left.
- Posts, comments, and interactions: the text, the replies, the people who keep showing up.
- Images with metadata: sometimes EXIF survives a download; often the platform stripped it on upload. Check, do not assume.
- Followers, following, and connection lists: public on some sites, decorative on others, gone the moment you need them.
- Activity patterns and posting times: useful for routine, time zone, and “this account woke up after three silent years.”
- Sometimes deleted content through archives: web archives, search cache, and other people’s screenshots. Treat those as copies, not originals.

### Platform-specific considerations

- **LinkedIn**: Professional history, connections, company pages. Good for employment claims and org charts. Bad for pretending a connection request is “just OSINT.” Do not send one.
- **Twitter/X**: Public discourse, engagement patterns, followers. Fast, messy, and fond of disappearing posts. Capture early.
- **Facebook**: Groups, events, check-ins, broader social graph. Much of the interesting graph is not public. Stop at the fence.
- **Instagram**: Visual content, location tags, Stories. Stories vanish; highlights and other people’s reposts sometimes do not.
- **TikTok**: Video content, trends, younger demographics. Soundtracks, captions, and comment swarms can be more useful than the bio.

Apply the same rule elsewhere: learn the public surface, write down what you cannot see, and do not invent a back door.

### Collection tip

Use platform search features before going to external tools. Internal search is often more complete and less legally ambiguous. A third-party tool may be stale, may violate terms, or may become a procurement issue.

### Investigation workflow

1. Write the question in one sentence. “What does this public figure show on major platforms?” is a question. “Find everything” is a mood.
2. Work logged out first, then a dedicated research profile if policy requires it. Never your personal account.
3. For each platform, record profile URL, handle, field visibility, posting window, and what is hidden.
4. Use native search before any aggregator.
5. Capture screenshots and URLs with access dates. Volatile content is a scheduling problem.
6. Treat archives as copies. If the live page is gone, say so.
7. Stop. You are building a public inventory, not a shrine.

### Legal and ethical boundaries

Stay on public data. Do not create sockpuppet friendships, join closed groups under false pretenses, or message the subject “just to confirm.” Verification compares public signals. It is not a conversation you started. Harassment, even polite harassment with a notebook, is still harassment.

### Common mistakes

- Treating every platform as a complete dossier instead of a partial, biased self-portrait.
- Logging into a personal account and contaminating the collection with your own graph.
- Calling a missing friends list “OPSEC” when it is simply a default privacy setting.
- Outsourcing the first look to a scraper and then being unable to cite what you actually saw.

> **Aside.** Platforms are not escape rooms. A locked list is not a puzzle for ambitious people. It is the part of the map labeled “you do not go here.” OSINT101 grades the inventory, not the trespass.

Your exercise: document the publicly visible information available from each major social platform about a public figure. If a field is blank because it is private, write “not publicly visible” and move on. That sentence is still intelligence.

        `,
        exercise: 'Document the publicly visible information available from each major social platform about a public figure.',
      },
      {
        title: 'Username Correlation and Cross-Platform Analysis',
        duration: '60 min',
        content: `
### People reuse usernames across platforms like they reuse passwords, which is its own problem

Username patterns are fingerprints. They are also coincidences. The same string on five sites can be one person, or five strangers who liked the same game in 2011. Your job is not to enjoy the match. Your job is to test it.

This lesson is lawful, public correlation: find where a handle appears, then prove or kill the link with overlapping evidence. It is not messaging accounts or turning a maybe into a name-and-shame thread.

### Why this matters

Most digital identities are a scatter of handles and bios that almost match. If you stop at “same username,” you will merge the public figure with the fan, the parody, and the teenager who registered first. Those errors survive into reports because they look tidy. Lazy correlation creates a fictional person who is easy to brief and completely wrong.

### What you'll be able to do

- Start from one public handle and search for reuse without treating hits as identity.
- Apply a short overlap test (photo, bio, network, content, time) before you draw a line on a map.
- Record each candidate as confirmed, probable, possible, or rejected.
- Leave fan, parody, and impersonation accounts labeled as what they are.

### Username investigation workflow

1. Identify the target username on one platform. Capture the exact string, display name, and profile URL.
2. Use username correlation tools to find the same handle elsewhere. Aggregators generate leads. They are not witnesses. Visit every interesting hit yourself.
3. Verify accounts are the same person through overlap analysis. Demand independent signals: image, language, links, associates, chronology. One signal is a clue.
4. Map the footprint you can defend. Include rejects. A crossed-out GitHub with the same handle and a different face proves you were paying attention.

### Tools that help

- Namechk, WhatsMyName, and similar aggregators: fast coverage, noisy false positives, no substitute for opening the profile.
- Google dorking for username patterns: quoted handles, \`site:\` limits, and obvious variants (\`name_\`, \`name.official\`, years). Keep queries small. A novel-length dork is not tradecraft.
- Cross-referencing with image recognition on profile photos: reverse image search can find the same crop on another site. It can also find the stock photo fifty other people used. Compare faces and backgrounds; do not outsource the decision to a similarity score.

If a tool cannot show you the live page, you cannot cite the tool as the source.

### Verification rule

Same username does not guarantee same person. Confirm through:

- Profile photo comparison: same image, same crop, or a later photo of the same face in the same setting. Watch for stolen avatars.
- Bio or description overlap: repeated phrases, the same personal site, the same “contact me at” email. Generic bios (“coffee, travel, opinions”) overlap by accident. That is not a signal. That is the internet’s default personality.
- Mutual connections or follows: overlapping public graphs, the same workplace page, the same three accounts that keep appearing. Association is not identity, but a repeated cluster is harder to dismiss.
- Content pattern consistency: topics, language, posting windows, and running jokes that would be exhausting to fake at scale.

Score the link. Write the contradictions down. “Same handle, different city, different decade, no shared image” is a rejection, not a mystery to force.

> If it looks too neat, it might be a fan account, parody, or someone with excellent mimicry skills and bad intentions.

### Legal and ethical boundaries

Collect public pages. Do not friend-request into a private graph, impersonate the subject, or publish a speculative map that follows an innocent person with the same hobbyist handle. If you cannot explain the match without the username, it does not belong in a report. Harassment is out of scope, including asking associates whether two accounts are “the same guy.”

### Common mistakes

- Declaring identity from a single reused string, especially a common word plus a birth year.
- Skipping the reject pile because it ruins the slide.
- Using your personal account and then wondering why the graph looks familiar.
- Treating an aggregator checklist as a completed investigation.

> **Aside.** A username is a label on a jar. It is not a confession that every jar with that label contains the same person. OSINT101 will accept a short map with three verified overlaps. It will not accept a constellation of maybes you connected because the font matched.

Your exercise: take one username and map it across five platforms, noting verification steps for each match. For every hit, write what overlapped, what conflicted, and the confidence you can actually defend.

        `,
        exercise: 'Take one username and map it across five platforms, noting verification steps for each match.',
      },
      {
        title: 'Content Analysis and Image Verification',
        duration: '70 min',
        content: `
### A picture is not always worth a thousand accurate words

Image analysis separates real from manipulated and current from old. A real photo can still be the wrong year, the wrong city, or the wrong person in front of a photogenic landmark.

This lesson verifies public images: what the file still contains, where else the picture has lived, and whether the caption survives a second look. Work from the picture and public maps. Do not trespass to “confirm the angle.”

### Why this matters

Viral posts treat images as proof. Analysts treat images as claims: the photo is genuine, it matches the claimed time and place, and it shows the claimed subject. Skip a rung and you will brief a recycled concert photo as last night’s incident. Convenient pictures feel true. Your process has to be slower than the feed.

### What you'll be able to do

- Run a public image through a short verification ladder and write what each rung did and did not prove.
- Use EXIF when it is present, and say so when platforms have stripped it.
- Reverse-search a picture without confusing “found elsewhere” with “fake.”
- Geolocate only from public visual cues and public imagery, then state confidence.

### What to check

- **EXIF data**: Camera, date, GPS coordinates if preserved. Social uploads often destroy this. A download from the platform is not the original file. If GPS is present, treat it as a lead and compare it to the picture, not as a satellite confession.
- **Reverse image search**: Find where else the image appears. Earlier dates, other captions, stock libraries, and meme pages are all useful. A first-seen date is not a creation date, but it can kill a “this just happened” story.
- **Visual analysis**: Shadows, reflections, inconsistent pixels, cloned skies, extra fingers, type that does not sit in the scene. You are looking for contradictions, not for a cinematic “gotcha.”
- **Metadata patterns**: File naming, modification history, and whether the image is a screenshot of a screenshot. \`IMG_2048\` and \`final_final_war_crimes.jpg\` tell different stories about the pipeline.

“No EXIF on the Instagram download” is a real finding. Write the empty checks.

### Geolocation from images

Work from the frame and from public maps.

- Landmarks, signage, architecture: shop names, transit styles, scripts on signs.
- License plates and regional vehicle features: plate formats as region clues, not a reason to identify a private driver for sport.
- Street view comparison: public imagery only. Match curb paint, roof lines, ugly street furniture.
- Weather and seasonal indicators: trees, snow, sun angle. Useful, rarely enough alone.

If you cannot get there on a public map, you have a vibe, not a location. Do not hunt a private address to settle an argument with a photograph.

### Verification ladder

1. Can you confirm the image is real? Not an obvious composite, not a known movie still, not a generated picture with the usual tells. If you cannot, stop calling it evidence.
2. Can you confirm it is from the claimed time and place? Reverse search, EXIF if any, weather, signage, and public imagery. A real photo from 2019 is not proof of 2026.
3. Can you confirm it relates to the claimed subject? The right city is not the right person. Faces, uniforms, vehicles, and context have to connect without wishful cropping.

Each step requires more evidence. Do not skip steps because the story is convenient.

### Investigation workflow

1. Save the post URL, the image, and a screenshot of caption and timestamp.
2. Extract metadata from the file you actually have. Record presence and absence.
3. Reverse-search the image and notable crops.
4. List the caption’s visual claims. Test each separately.
5. Geolocate from public cues only. Require more than one independent indicator.
6. Verdict per ladder rung: supported, contradicted, or unknown.

### Legal and ethical boundaries

Public posts and public imagery only. No harassment of people in the frame. No publishing a private home address because a window box looked familiar. No claiming you “pulled satellite” or hacked a constellation because you opened a mapping site. EXIF GPS, when present, is leftover device data, not a secret government feed.

### Common mistakes

- Treating reverse-search hits as proof of fakery. Reuse is common. Context is the question.
- Trusting the platform timestamp as the moment the shutter clicked.
- Geolocating from one generic beach and a confident feeling.
- Skipping the subject rung because the location was fun to solve.

> **Aside.** A picture that fits the briefing is not a picture that passed. OSINT101 wants the ladder, including the ugly “unknown” on rung three. Convenience is how recycled photos get a second career.

Your exercise: take an image from social media and walk through the full verification process, documenting each finding. Use the ladder in order. If a step fails, say so and stop promoting the claim.

        `,
        exercise: 'Take an image from social media and walk through the full verification process, documenting each finding.',
      },
      {
        title: 'Behavioral Patterns and Sentiment Analysis',
        duration: '55 min',
        content: `
### How people write is as revealing as what they write

Writing style, tone, and engagement patterns reveal things people do not intentionally share. They also reveal things people perform on purpose. You are observing a public feed, not running a personality exam.

Behavioral SOCMINT looks at timing, vocabulary, who gets a reply, and how a public account’s temperature changes. It does not include private messages or “engagement” you created by poking the subject.

### Why this matters

A single post is a mood. A month of posts is a candidate pattern. Investigations stall when analysts quote the angriest screenshot and call it a trend, or invent a crisis from a quiet week and a scheduled campaign.

Done carefully, pattern work asks better questions: Did cadence change after a public event? Do replies cluster? Those questions support timelines. They cannot support a diagnosis.

### What you'll be able to do

- Code a short public window (for example, thirty posts) for time, topic, tone, and interaction type.
- Separate observed behavior from inferred motive.
- Notice professional-versus-personal differences without merging the accounts by vibes.
- Write a sentiment summary that would survive a skeptical editor.

### What to analyze

Stay on public content. Count what you can point to.

- Posting frequency and timing: hours, bursts, droughts. Useful for routine and for “this account is a queue.” Time zones are hypotheses, not GPS.
- Writing style and vocabulary: repeated phrases, formality, a sudden press-release voice. Style can hint at a different author. It cannot prove a body double.
- Engagement patterns with others: who is mentioned, who is ignored, reply versus broadcast. A public argument is not a private relationship.
- Emotional range and triggers: topics that sharpen the language. These are observations about the feed, not a medical file.
- Changes over time: before and after a known public event from an independent source. The feed does not invent its own breaking news.

### Sentiment basics

- Overall tone of posts (positive, negative, neutral). Score the text you have, not the subtext you wish were there. Sarcasm exists. So do joke accounts. Mark uncertainty.
- Changes in sentiment that might indicate events. “Might” is doing honest work. A darker week can be news, illness, a brand crisis, or a new intern who discovered italics.
- Difference between professional and personal accounts. Corporate voice is often a team. Do not attribute a social calendar to one human without evidence that one human is typing.

Automated sentiment tools are fine as a first pass and dangerous as a last word. If the model says “positive” and the post is a eulogy with a smiley, believe the eulogy.

### Caution

Behavioral analysis is suggestive, not definitive. You can observe patterns. You cannot reliably read minds. Resist the temptation to over-interpret.

Write claims in this shape: “In the last thirty public posts, replies clustered on topic X and tone shifted after date Y.” Do not write: “The subject is unraveling and trusts only account Z.” The second sentence is fan fiction with footnotes.

### Investigation workflow

1. Define the public account and the window. Thirty posts is a sample, not a soul.
2. Capture each post: URL, displayed time, text, media, visible engagement.
3. Code time band, topic, tone, broadcast versus reply, notable accounts.
4. Chart frequency. Describe bursts and silence without poetry.
5. Align tone shifts to independently known public events, if any.
6. List what the pattern does not support. Draft three findings and one explicit non-finding.

### Legal and ethical boundaries

Public posts only. No harassment, no baiting, no “research comments” under the photos. Do not contact the subject or their circle to ask how they are feeling. Do not publish a psychological portrait of a private person because their hobby account had a loud month. If the subject is a public figure, you still owe them accuracy and you still do not owe the internet a character assassination.

### Common mistakes

- Treating a scheduled campaign as a personal emotional arc.
- Reading one viral reply as the center of someone’s life.
- Merging two accounts because the tone “felt similar.”
- Forgetting that community managers, ghostwriters, and ghost emojis exist.

> **Aside.** Sentiment is a weather report for a feed, not a medical chart. OSINT101 will take “tone dropped after the public filing” with a table. It will not take “they are spiraling” with a vibe and a highlighter.

Your exercise: analyze a public figure’s last 30 posts for behavioral patterns and sentiment trends. Code the window, write what changed, and leave motives in the parking lot unless the posts state them.

        `,
        exercise: 'Analyze a public figure\'s last 30 posts for behavioral patterns and sentiment trends.',
      },
    ],
  },
  'social-media': {
    id: 'social-media',
    title: 'Social Media Intelligence',
    description: 'Uncover insights from social platforms. Learn to read between the posts and tweets.',
    level: 'Advanced',
    estimatedTime: '6-8 hours',
    sections: [
      {
        title: 'SOCMINT Methodologies',
        duration: '60 min',
        content: `
## The Psychology of Social Media

Social Media Intelligence is not a treasure hunt for embarrassing posts. It is a method for reading public behavior without confusing volume for insight. A feed is a performance, a diary, a press office, and a rumor mill sharing a character limit. Your job is to extract what can be observed, timestamp it, and refuse to promote a hunch just because the avatar looks familiar.

This matters because platforms are where people announce identity, argue, recruit, and accidentally date their own movements. Collect without a method and you drown in tabs. Collect with one and you can answer a specific question and survive a skeptical review. Decision-makers need ranked matches, not your feelings about a feed.

### After this section

You will be able to define a collection question, trace a test username across three public platforms using only what each site shows a ToS-compliant viewer, separate observation from inference, and rank each possible match with a confidence label you can defend in a sentence.

Social Media Intelligence is less about "finding posts" and more about understanding behavior, timing, relationships, and intent. People post to be seen, to belong, to sell, or to vent. Read for *function*, not just keywords. A joke that repeats across weeks is a habit. A sudden burst after silence is an event. Do not psychologize strangers from three captions. You may notice patterns. You are not licensed to diagnose them.

### Core collection goals

- **Identity correlation**: Linking usernames, bios, profile photos, and contact hints that appear in public fields. Each is a signal, not a verdict.
- **Behavior analysis**: Spotting routines, interests, conflicts, and posting windows. Time zones leak. So do "good morning" posts from someone who never sleeps.
- **Network mapping**: Understanding who talks to whom and who keeps appearing in the same orbit. Public replies are evidence of association, not membership in a plot.
- **Location inference**: Using landmarks, weather, language, and timing to *narrow* where something happened. Narrowing is not pinning. Pinning needs more than a palm tree and optimism.

Work only on public posts and public profile fields. Platform terms apply. You do not scrape at scale in ways that bypass authentication, take over accounts, or run sockpuppet deception to socially engineer anyone into unlocking a private life.

### Good analyst habits

- Separate what is observed from what is inferred. Write them on different lines.
- Preserve screenshots with timestamps and the URL as displayed.
- Compare across platforms before declaring a match.
- Avoid falling in love with your first theory. It is not special.

Save the profile URL, the post URL, the access date, and one sentence on *why* the item matters. Future-you will not remember the vibe.

### Workflow

1. **Write the question.** Example: "Which public accounts, if any, are consistent with this test username, and how sure am I?"
2. **List the three platforms** and what each exposes without login walls you are not authorized to cross.
3. **Search the exact handle**, then obvious public variants only as *leads*. Record each search.
4. **Collect four public fields per hit**: display name, handle, photo, bio or pinned text. Add posting window if visible.
5. **Score each platform match** independently: low (one weak overlap), moderate (two or three independent overlaps), high (multiple identifiers, no serious contradiction).
6. **Capture** the strongest items before you analyze. Then write the ranking: what matched, what conflicted, what you still cannot say.

> One matching username is a clue. Three matching signals is a lead. One vibe and a blurry avatar is how analysts embarrass themselves in public.

### Legal and ethical boundaries

Public is not "fair game for any purpose." Stay inside a lawful training or investigative purpose. Do not harvest private messages, friend-only albums, or content you only reached by impersonating a classmate, recruiter, or romantic interest. Dedicated research browser profiles are OPSEC, not theater. If your method requires lying to a human to unlock a profile, you have left OSINT.

Respect rate limits and platform rules. Manual, ToS-compliant viewing of public pages is the lane for this course.

### Common mistakes

- Declaring a match because the username is uncommon *enough* for your taste.
- Treating a display name as a legal name.
- Ignoring contradictions because the photos "feel" similar.
- Forgetting fan accounts, brand handles, and stolen identities.
- Building a life story from a private-looking account you should not have opened.

### Field notes

> **Rule of thumb:** if your notebook says "same energy" under confidence, rewrite it. Energy is not a source. Energy is how interns get a reputation.

The exercise is waiting: take a *test* username, trace it across three different social platforms, and rank your confidence for each match. Use the scoring language from this lesson. If you cannot explain a rank without pointing at a public field, the rank is too high. That is the entire point.

        `,
        exercise: 'Trace a test username across three different social platforms and rank your confidence for each match.',
      },
      {
        title: 'Cross-Platform Correlation',
        duration: '75 min',
        content: `
## Building a defensible identity link

A single profile is a costume. Cross-platform correlation asks whether two public costumes share a wearer, a brand manager, a fan, or a coincidence. The internet is generous with reused jokes and recycled headshots. It is stingy with proof. Your job is a link you could defend to someone who did not want it to be true.

This matters because a wrong merge poisons every later pivot, and treating one handle as one person is how merges go wrong. Correlation sits in the adult middle: independent signals, named contradictions, and a rank that can go down as easily as it goes up.

People leak patterns everywhere. Notice the boring consistencies that survive platform changes: a reused email fragment, a crop of the same conference badge, a school name in two bios written years apart. Exciting is a shared first name and a shared haircut. Exciting is how you brief a fiction.

A defensible link has three properties. The signals are *independent*. The contradictions are *written down*. The conclusion is *ranked*, not performed. Never treat one handle as one person. Handles are cheap. People share them, impersonate them, and lose them.

### After this section

You will be able to list correlation signals that do not collapse into "same username," write a low / moderate / high confidence model, and link two public profiles only when independent indicators agree.

### Correlation signals

- Reused usernames or predictable variations. Treat as a search key, not a match.
- Repeated profile photos or cropped versions of the same image. Reverse-search the public file if the platform still serves it. Stolen selfies are a cottage industry.
- Shared biography fragments, emoji habits, or suspiciously identical jokes. Style can be copied. Clusters of style plus facts are harder to fake well.
- Overlapping locations, friends, employers, schools, or posting windows. Overlap is not identity. It is a reason to keep collecting.

Weight signals by how hard they are to copy. A name in a bio is weak. A unique project title on two public pages is stronger. Work from public posts only. Do not scrape behind authentication or stand up deceptive personas to socially engineer a connection list.

### Confidence model

1. **Low confidence**: One weak indicator. Same handle. Same city word. Same first name. Stop here and say so.
2. **Moderate confidence**: Two or three independent indicators, no hard contradiction, at least one that is not a username trick.
3. **High confidence**: Multiple corroborating identifiers with no major contradictions, checked against impersonation or a shared brand account.

Promote a link only when new *independent* evidence arrives. Demote it the moment a contradiction is real. Confidence is not a loyalty program.

### Trap to avoid

Common names produce false positives at industrial scale. If your evidence is "same first name, same city, same haircut," slow down. Millions of people are committing those crimes daily. Add the employer, the school years, the unique project, or admit you have a maybe.

An unusual handle can still be a fan, a bot, or the original owner locked out. Visit the public profile. Read the dates.

### Workflow

1. **Pick two public profiles** you are allowed to study. Write the question: same person, or not, and why it is in scope.
2. **Inventory identifiers** on each side: handle, display name, photo, bio facts, links, public employer or school.
3. **Mark each identifier** as unique-ish, common, or copyable. A cluster is the point.
4. **Score with the model.** "Username plus username variant" is still one idea wearing a hat.
5. **Hunt contradictions** on purpose: age, location history, language, job dates.
6. **Write the model**, not just the verdict. State the residual gap in one line.

### Legal and ethical boundaries

Correlation is still collection. Stay proportionate to a lawful purpose. Do not assemble a home address, children's names, or medical hints because the graph was *available*. Public posts only. Platform terms apply. No account takeover, no credential stuffing "just to confirm," and no sockpuppet courtship to unlock friends lists.

Disambiguate before you merge. A merged identity in a notebook becomes a merged identity in a report, and reports travel farther than your caveats.

### Common mistakes

- Building the entire case on one identifier and calling the rest "context."
- Ignoring parody, tribute, and brand-ambassador accounts.
- Treating mutual follows as proof of the same body.
- Using a private or scraped dataset you could not explain to counsel.
- Writing "confirmed" when you mean "I would be surprised if I were wrong."

### Field notes

> **Rule of thumb:** if you need a single identifier to make the story work, the story is doing the investigation. Fire the story. Keep the spreadsheet.

Document a confidence model for linking one public profile to another without relying on a single identifier. Use the three tiers. Name the independent signals. Name the contradiction that would collapse the link. If the model only works when you squint, it is not a model. It is a preference, and preferences do not get a seat in the briefing.

        `,
        exercise: 'Document a confidence model for linking one public profile to another without relying on a single identifier.',
      },
      {
        title: 'Narrative and Sentiment Analysis',
        duration: '55 min',
        content: `
## Reading what people mean, not just what they typed

A public feed is not a confession and it is not a poll. It is a sequence of performances aimed at an audience the author thinks they have. Narrative and sentiment analysis is how you read that sequence without confusing clever captions for ground truth. You will look at tone, topics, and timing. You will leave one door marked "cannot safely conclude," and you will resist kicking it down because the thread was spicy.

This matters because operations and due diligence collide with public talk. If you only count keywords, you miss the shift from joke to grievance. If you only chase feelings, you write fan fiction with footnotes. Volume spikes are events. Neither spike nor silence is a motive until something else agrees.

A feed is a stream of signals: tone, audience, grievances, alliances, and recurring themes. Meaning lives in repetition and contrast. The fifth post about a vendor is a theme. The first insult after a polite month is a break. Read surrounding posts before you promote a line into a finding. Stay on public posts. Do not join private groups under a false flag to "hear the real sentiment."

### After this section

You will be able to take a public post sequence, describe dominant topics without inventing biography, assess tone and likely audience in language a manager can reuse, and mark one conclusion you will *not* draw.

### What to extract

- Dominant topics and identity markers the author keeps volunteering (role, city, cause, fandom). Absence is not a secret.
- Recurring complaints, goals, and emotional triggers. Triggers are patterns in *their* wording, not a diagnosis of their childhood.
- Changes in tone before and after major public events you can date from news or their own timestamps.
- Audience engagement patterns and likely influence nodes: who they reply to, who they amplify, which posts get a different crowd.

Write extracts as observations: "Seven of twelve posts in this window attack the same policy and tag the same account." Then, separately, inferences: "Likely speaking to an already-aligned audience." If you mix those sentences, you will believe yourself too early.

### Useful caution

Sentiment is messy. Sarcasm exists, irony exists, and the internet has somehow made both worse. Treat automated sentiment scoring as a clue generator, not a truth machine. A model that labels "fine." as positive has never met a human.

Do not infer mental state or intent from tone. You can say the public register got sharper after a dated event. You cannot say why their week was bad.

### Analyst move

Build small timelines around spikes in posting behavior. Volume changes often matter as much as content, especially when someone suddenly discovers all-caps and poor decision-making. Note the clock only when you have more than one clue. A single "good morning" is not a longitude.

Pair the volume timeline with three or four representative public posts, quoted or screenshot with URL and date. The assessment should be readable if the live page dies.

### Workflow

1. **Define the question.** "What is the public tone and likely audience of this sequence, and what must remain unknown?"
2. **Select a public sequence** with enough posts to show a pattern. Record start and end timestamps.
3. **Inventory topics** in a list. Count. Do not editorialize in the count column.
4. **Note tone** in plain words: clipped, promotional, hostile, joking, bureaucratic. Give one public example per label.
5. **Describe the likely audience** from who is addressed, which jargon appears, and which posts draw replies. Audience is a hypothesis.
6. **Mark volume** (quiet, steady, spike) and **write the one thing you cannot safely conclude.** If that line is empty, delete a paragraph.

### Legal and ethical boundaries

Public posts only. Platform terms of service apply. No scraping-at-scale that bypasses authentication, no harvested private comments, no sockpuppet arguments designed to provoke a confession. Sentiment work is easy to abuse as a character attack. Stay proportionate: collect what answers the question, not a mood board of someone's worst hour.

Do not publish an assessment that invites harassment. Training output stays in the exercise.

### Common mistakes

- Quoting the angriest post as if it were the median.
- Trusting a sentiment API because the pie chart was colorful.
- Inferring location, employer, or guilt from vibe.
- Ignoring that the "audience" may be algorithms and quote-tweeters.
- Forgetting to save the sequence before the author deletes their entire personality at 01:12.

### Field notes

> **Rule of thumb:** if your assessment has no "cannot conclude" line, you did not finish the analysis. You finished a personality. We already have enough of those.

Take a public post sequence and produce a short assessment of tone, likely audience, and one thing you still cannot safely conclude. Keep observations and inferences on separate lines. If a reader cannot tell which is which, start over. The exercise is short on purpose. Brevity is how you find out whether you actually knew anything.

        `,
        exercise: 'Take a public post sequence and produce a short assessment of tone, likely audience, and one thing you still cannot safely conclude.',
      },
      {
        title: 'AI in SOCMINT',
        duration: '45 min',
        content: `
## The AI Revolution, With Adult Supervision

AI is a fast intern with no chain of custody and a talent for sounding finished. In SOCMINT it can summarize a week of public posts before your coffee cools. It can also invent a city, merge two people, and attribute a joke to the wrong decade with the calm of a keynote. This lesson is about using the intern and then doing the part of the job that still requires a pulse.

This matters because clustering and summarization are legitimate, and treating the summary as a source is how errors become briefings. The correct answer to "why does this cite a model?" is that it does not. It cites the posts you checked. A hallucinated fact is worse than a missing one.

AI is useful for summarizing, clustering, and pattern spotting, but it is not a licensed detective. Use it when the corpus is long enough that a first pass saves time. Do not use it as a substitute for opening the permalink.

Feed the model only public content you are allowed to process. Do not paste private messages or non-public profile data into a consumer chatbot. Ask for discrete claims, then treat that list as allegations against the source material.

### After this section

You will be able to run a summarization pass on a lawful public post series, extract the model's major claims into a checklist, verify each claim against the original public text, and finish without letting the model write your conclusions.

### Good uses

- Summarizing long post threads so you can find the three posts that actually matter.
- Extracting recurring entities and themes you will then confirm by search-in-page.
- Comparing writing patterns at a coarse level (repeated slogans, identical typos). Coarse. Not courtroom stylometry from twelve words.
- Identifying obvious bot-like repetition: same sentence, same minute, same link, no human fatigue.

These uses produce *leads*. You still screenshot the lead and write the URL.

### Bad uses

- Treating AI output as evidence.
- Assuming image analysis is always correct.
- Letting a model invent context because you were too busy admiring the progress bar.
- Asking a model to "find the real person behind" a handle and accepting a biography it assembled from training-set gossip.
- Using AI to draft deceptive outreach or sockpuppet scripts. That is social engineering, and it is out of this course.

If the tool offers to log into platforms, scrape at scale, or bypass access controls, decline. Public pages, ToS-compliant collection, then analysis.

### Rule

AI can accelerate review. It cannot replace verification. If the model says a photo was taken in Prague but the street sign clearly says Brisbane, trust the sign. The sign has fewer feelings and therefore makes fewer weird guesses.

Verification is not a vibe check. It is a claim-by-claim walk through the originals. "Mostly right" is a failing grade for a summary you plan to brief.

### Workflow

1. **Scope the series.** Choose public posts you can lawfully copy into a note. Record URLs and dates first.
2. **Write your own one-line objective** before the model runs. If you skip this, the model will choose a more cinematic objective.
3. **Run the summary** with an instruction to list discrete claims, not a flowing essay. Essays hide unsourced clauses.
4. **Make a claim table**: claim, source post URL, verified / contradicted / not present, notes.
5. **Check images and places** yourself. Do not let "looks like" from a model become a geolocation.
6. **Write the human assessment** from the table. Watch for flattened negation: "they denied visiting X" becoming "they visited X." The model draft does not get a byline.

### Legal and ethical boundaries

Public posts only. Platform terms apply. Do not use models to plan account takeover, credential reuse, or industrial scraping that evades authentication. Do not upload other people's private data to a third-party model. Do not generate impersonation content.

A summary that names bystanders, minors, or medical details still needs proportionality. Note "third-party personal data present, not collected" and move on.

### Common mistakes

- Verifying the *tone* of the summary and skipping the facts.
- Letting the model merge two similar handles into one life story.
- Citing the chatbot as if it were a source.
- Pasting a full capture into a public model and then wondering how the investigation leaked.
- Accepting a geolocation, age, or employer the model inferred from a joke.

### Field notes

> **Rule of thumb:** if you cannot point to the post, you do not have a finding. You have autocomplete. Autocomplete does not get a parking pass at OSINT101.

Use an AI tool to summarize a series of public social media posts, then manually verify every major claim it makes. The table is the work product. A glowing paragraph that "sounds like the account" is not verification. If the model was right, say so and show the URLs. If it was wrong, say so with the same calm. That is the adult supervision the title promised.

        `,
        exercise: 'Use an AI tool to summarize a series of public social media posts, then manually verify every major claim it makes.',
      },
    ],
  },
  'telegram-osint': {
    id: 'telegram-osint',
    title: 'Telegram OSINT Investigations',
    description: 'Master the art of gathering intelligence from Telegram - one of the most valuable OSINT sources for monitoring groups, channels, and user activity.',
    level: 'Intermediate',
    estimatedTime: '2-3 hours',
    sections: [
      {
        title: 'Why Telegram Matters for OSINT',
        duration: '15 min',
        content: `
Telegram is not a chat app that occasionally produces intelligence. It is a publishing platform that happens to look like a chat app, and a large share of the world's loudest public narratives now live there first. Analysts who treat it as "the other WhatsApp" will keep arriving late to stories that were already forwarded, screenshot, and argued into a new shape.

### Why this matters

Telegram is where public communities, news brands, leak outlets, and activist networks publish at volume. Unlike platforms that bury history behind "for you" algorithms, many Telegram channels keep a searchable, forwardable archive. That archive is an intelligence surface: who said what, when they said it, and who amplified it. If you cannot describe a public conversation on Telegram, you are missing a primary source, not a side channel.

### What you'll be able to do

By the end of this lesson you will be able to explain why Telegram is structurally useful for OSINT, name the features that change collection (channels, history, forwards, metadata), and pick a lawful public-channel use case without pretending private rooms are fair game. You will also know what to record about a channel so the next lesson's search work has something to attach to.

### Telegram as an Intelligence Goldmine

Telegram has become the platform of choice for:

- Organised groups and communities
- News and information channels
- Leak and whistleblower publications
- Criminal and hacking forums
- Activist networks and protest coordination

That list is a map of *public* information environments, not a permission slip. OSINT101 work stays on public channels: the ones anyone can open, subscribe to, and read without impersonation, invitation-hunting, or a story about why you "need" access. Private groups, invite-only rooms, and closed discussion spaces are out of scope. If a channel requires deception to enter, you are no longer doing OSINT. You are doing something this course will not teach.

Treat each public channel as a source with a purpose. A news channel is not a leak channel. A community digest is not a coordination feed. Write the purpose down before you start counting subscribers, or you will confuse volume with relevance.

### What Makes Telegram Different

- **Public channels** with unlimited subscribers. One handle can address an audience the size of a city. That makes channels more like broadcasts than group chats.
- **Searchable history** (not always possible on other platforms). You can often walk a topic backward in time instead of hoping the algorithm still likes yesterday.
- **Bots** that can automate collection and analysis — later, and only with your own API credentials against public channels you are allowed to read.
- **Forwarding chains** that reveal information spread. A forward is a citation with worse manners. It still tells you who amplified whom.
- **Metadata-rich messages** (timestamps, forwarding info). Time and provenance travel with the content. Use them.

The practical difference: Telegram rewards methodical reading. A channel's last twenty posts, its forward sources, and its posting cadence usually tell you more than a single viral screenshot.

### Key OSINT Use Cases

Stay inside lawful, public monitoring. Typical academy use cases:

- Monitoring *public* threat-actor commentary and leak-channel announcements (observation, not participation)
- Tracking disinformation campaigns as they move through public forwarding networks
- Following leak publications in real time on channels that chose to publish
- Studying how organised-crime *narratives* appear in public channels — not infiltrating closed forums
- Mapping information spread through forwarding chains

### Numbered workflow

1. Write a one-sentence collection question ("Which public channels cover X this week?").
2. Stay on public channels only. If it is invite-only, stop.
3. Open three candidate channels and read recent posts before you bookmark anything.
4. Record purpose, subscriber count, and posting frequency for each.
5. Note two forwards or source channels if they appear. Do not chase private origins.
6. Write one sentence on what the set can and cannot answer.

### Legal and ethical boundaries

Public does not mean consequence-free. Do not join private groups by deception. Do not scrape in ways that violate Telegram's terms and then describe it as a clever hack. Do not collect personal data you do not need. Course exercises use public channels you can read as yourself, with a dedicated research account if you have one — not your family chat identity, and not a fake persona built to sneak past a door.

### Common mistakes

Treating a forwarded claim as original. Counting subscribers as proof of quality. Monitoring criminal-themed channels as if that were a license to interact. Saving screenshots with no channel handle, no timestamp, and no note on whether the post was original or forwarded.

> **Rule of thumb:** A public channel is a press office that never hired an editor. Read it like a source, not like a friend who happens to shout.

Close this lesson by doing the exercise: find three public Telegram channels in a topic area of interest. Document their purpose, subscriber count, and posting frequency. That log is the input for search and discovery next.

        `,
        exercise: 'Find 3 public Telegram channels in a topic area of interest. Document their purpose, subscriber count, and posting frequency.',
      },
      {
        title: 'Telegram Search and Discovery',
        duration: '20 min',
        content: `
Finding Telegram channels is easy. Finding the *right* public channels — and explaining how you found them — is the skill. Discovery without a method produces a bookmarks folder named "misc" and a briefing that starts with "I saw something."

### Why this matters

Telegram's own search is incomplete, biased toward what you already touch, and cheerfully unaware of your investigation question. External indexes, web search, and forward-chain walking cover different slices of the same public surface. If you only use one door, you will systematically miss channels that matter and over-weight channels that advertise well.

### What you'll be able to do

You will run a small discovery circuit (in-app search, a Telegram search engine, analytics indexes, and \`site:t.me\` dorks), apply basic operators, and fill a metadata card for each public channel you keep. You will also be able to say *how* a channel entered your set, which is the difference between a lead and a coincidence.

### Finding Relevant Channels

- **Telegram's built-in search**: Search within the app. Good for exact names and topics already near your account. Weak for systematic coverage. Use it first so you know what the platform thinks is obvious.
- **Lyzem.com**: A Telegram search engine. Useful when you need keyword retrieval across public channels you do not already follow.
- **TGStat / Telemetr**: Channel analytics and discovery. Subscriber counts, growth, and related-channel graphs beat guessing which handle is "the main one."
- **Google dorks**: \`site:t.me\` plus a keyword. The open web still indexes a surprising number of channel landing pages, invite previews, and mentions in articles.
- **Cross-referencing**: Follow forward chains from known *public* channels. Forwards are a discovery engine that does not require you to invent new keywords.

Work those sources as a set. If Lyzem and in-app search disagree, that is information. Stay on public channels. Discovery tools will surface private rooms; seeing a name is not an invitation to social-engineer an entry.

### Telegram Search Operators

- Exact phrase matching for specific topics. Quotes reduce the "related vibes" problem.
- Date range filtering for recent activity. A channel that posted daily in 2022 and twice this year is a different source than it looks in a static directory.
- Language filtering to narrow results. Topic keywords collide across languages; filter before you drown.
- Forward chain analysis to find source channels. When ten channels repeat one post, find the earliest public original you can document — not a private "source" someone claims in comments.

Operators narrow a public search. They do not punch through access controls.

### Channel Metadata Collection

For each discovered channel, collect:

- Channel name and username
- Subscriber count and growth trend
- Post frequency and engagement patterns
- Forwarded content analysis
- Admin/moderator identification (where visible)

"Where visible" is doing real work. Do not scrape personal profiles, do not phish admins, and do not treat a display name as a legal identity. If an admin handle is public on the channel page, record it as a *channel attribute*, not as a person you now investigate for sport.

Add two fields the stub implied but students skip: *discovery path* (which tool or forward produced this hit) and *collection question fit* (one sentence on why this channel belongs in *this* search). Without those, your five channels are a shopping list.

### Numbered workflow

1. Write the topic in one line and list languages you will accept.
2. Run the same keywords in Telegram search, Lyzem, and \`site:t.me\`.
3. Check TGStat or Telemetr for size, growth, and related public channels.
4. Open each candidate. Confirm it is public and on-topic. Discard the rest.
5. Fill the metadata card, including discovery path.
6. Walk two forward hops from your best channel. Add only public sources.
7. Stop at five keepers. Write how the set was built.

### Legal and ethical boundaries

Search indexes are not a warrant. Use them to find public channels you are allowed to read. Do not join private groups by lying about who you are. Do not present bulk scraping that violates terms of service as tradecraft. Do not collect subscriber lists or personal data beyond what the channel page already shows for a professional purpose you can state out loud.

### Common mistakes

Stopping after the first search box. Keeping a channel because it is large, not because it answers the question. Treating a forward as proof of origin. Recording subscriber count and forgetting posting frequency. Hunting admins as if channel OSINT were people-hunting.

> **Rule of thumb:** Discovery is a process you can hand to someone else. If your method is "I have a good feel for Telegram," you have a hobby and a liability.

Close with the exercise: using Lyzem and Telegram search, find five channels related to a specific topic. Document the discovery methodology — tools, queries, rejects, and why the five survived.

        `,
        exercise: 'Using Lyzem and Telegram search, find 5 channels related to a specific topic. Document discovery methodology.',
      },
      {
        title: 'Automated Collection and Monitoring',
        duration: '25 min',
        content: `
Manual reading teaches you the source. Automation teaches you the stream. Point a script at Telegram and you also point Telegram at you: API activity is visible, rate limits are real, and "I was only collecting" is not a magic phrase. This lesson is lawful collection from public channels you may already read, using credentials that are yours.

### Why this matters

Public channels publish faster than a human can screenshot. A small collector keeps a dated archive and keyword alerts without living in the app. Done badly, it becomes ToS theatre: unofficial scrapers, borrowed keys, and a script that "joins" rooms it has no right to enter.

### What you'll be able to do

You will register your own Telegram application, connect Telethon with *your* API ID and hash, pull a limited history from a public channel you can already read, store the rows, and write OPSEC notes that make the run reproducible.

### Collection Tools

- **Telegram API**: Official API for bot and user-based collection. This is the supported door. Use it.
- **Telethon**: Python library for interacting with the Telegram API. Course default because it is explicit about sessions and easy to keep narrow.
- **TGCLI**: Command-line interface for Telegram, useful when you want a thin wrapper rather than a notebook.
- **Telegram Bots**: Create monitoring bots for specific *public* channels you administer or that permit bot reads. A bot is not a skeleton key for other people's private groups.
- **RSS bridges**: Convert Telegram channels to RSS feeds when a public bridge is offered. Convenient, third-party, and still bound by the same public-only rule.

Unofficial scrapers are not advanced. If the official API cannot see it on a public channel you may read, this course stops.

### Setting Up Collection

1. Create a Telegram application at my.telegram.org using *your* account. Do not borrow a classmate's API ID.
2. Get API ID and API hash. Treat them as credentials in an environment file, not a group-chat screenshot.
3. Use Telethon to connect as a user or bot *you* control. Session files are secrets.
4. Open target *public* channels you are allowed to read. Subscribe the normal way if needed. Do not join private groups or invent a persona to get past a gate.
5. Pull a *limited* history (the exercise is the last 50 messages). You are building a dated sample, not emptying the internet.

If a step requires deception, a leaked session, or a library that pretends API rules are optional, delete the step.

### Storage and Analysis

- Store messages in a structured database (SQLite is enough for class)
- Keep fields you can defend: channel username, message id, date, text, forward-from if public
- Tag by topic after you have the raw row, not instead of it
- Create keyword alerts on *your* store
- Track forwarding among public channels
- Export for analysis or reporting

Do not store phone numbers, private media, or anything the channel did not publish to a public audience.

### OPSEC Considerations

- Use dedicated accounts for collection (not your personal account).
- Telegram can see all API activity. You are a visible client, not a ghost.
- Rate limits apply. Sleep between requests. Fifty messages is a lesson, not a load test.
- Private or invite-only channels are out of scope. Walk away.
- Document the run: channel username, message range, timestamp, storage path. Do not paste secrets into notes you will share.

### Numbered workflow

1. State the public channel and the question the sample is meant to answer.
2. Confirm the channel is public and you may read it without deception.
3. Connect Telethon with your own API credentials.
4. Pull the last 50 messages. Stop.
5. Store them with timestamps and source handles.
6. Write a five-line collection note: what, when, how, limits, next check.

### Legal and ethical boundaries

Your API credentials, your account, public channels you are allowed to read. No joining private groups by deception. No presenting ToS-breaking scrapers as hacks. Automation does not expand your legal rights.

### Common mistakes

Using a personal account "just this once." Pasting API hashes into the script body. Pulling history until the library errors, then calling it thorough. Pointing a listener at a private invite. Forgetting to record the channel username so the database is a pile of integers.

> **Rule of thumb:** A collector with no rate limit and no stop condition is not ambitious. It is an outage with extra steps, and Telegram will be the one who notices first.

Close by doing the exercise: set up a Telethon script that connects with *your* API credentials and collects the last 50 messages from one public channel you are allowed to read. Save the rows. Save the method note. That is the product.

        `,
        exercise: 'Set up a Telethon script that connects to the Telegram API and collects the last 50 messages from a public channel.',
      },
    ],
  },
  'geospatial-intelligence': {
    id: 'geospatial-intelligence',
    title: 'Geospatial Intelligence (GEOINT)',
    description: 'Learn to analyze geographic data for investigations. Connect locations to patterns and patterns to people.',
    level: 'Intermediate',
    estimatedTime: '5-6 hours',
    sections: [
      {
        title: 'Introduction to GEOINT',
        duration: '40 min',
        content: `
### Location is a thread that connects almost everything

Geospatial intelligence connects people, events, and places in ways that text alone cannot. A timestamp without a place is a rumor with a clock. Put both on a map and you can test stories: who could have been where, whether the “factory” in the press release is a shed on a cul-de-sac.

This is public GEOINT: commercial maps, public satellite and aerial imagery, published geotags, and EXIF when a file still has it. It is not trespassing to confirm a fence line, and it is not a “satellite hack.” If you opened a mapping site, say that.

### Why this matters

Investigations leak location in captions, reflections, and the boring “our offices” page — then analysts forget to treat location as a claim. They accept a bio city, a headquarters pin, a travel selfie as last Tuesday.

GEOINT tests those claims against public ground truth. It also stops you drawing a movement pattern from three geotags and a dream. Maps have grids. The data on the grid still comes from people with settings and cameras that lie about the day.

### What you'll be able to do

- Explain what public GEOINT can and cannot show in an ordinary investigation.
- Match a work problem (alibi check, site mapping, logistics) to public imagery and map sources.
- Distinguish device-derived coordinates, user-typed check-ins, and visual geolocation.
- State legal limits: public data, no trespass, no fantasy about hacking spacecraft.

### What GEOINT covers

- Satellite and aerial imagery analysis: public and commercial viewers, recent and historical. You are comparing roofs and lots, not intercepting a military feed. Resolution varies. Clouds exist. Old tiles get treated as live.
- Mapping platforms and geographic data: roads, published parcels, place names, user-edited maps. Useful, and occasionally fictional.
- Location data from devices and transactions: only when lawfully public or in a file you may hold. EXIF GPS is leftover metadata, not a tracking implant you “pulled.” Many platforms strip it.
- Travel patterns and movement analysis: inferred from public appearances and repeated geotags. Sparse points are not a continuous track.
- Geotagged social media: check-ins and tagged photos are claims of presence. People tag restaurants they did not enter.

### Practical applications

- Verifying alibis through location data: public posts, timestamps, and imagery. You are testing consistency, not issuing a verdict from a beach photo.
- Mapping corporate or criminal infrastructure: public addresses, warehouses on imagery, sites in filings. “Criminal” here means infrastructure in open reporting or court records.
- Tracking event attendance or presence: who appeared in public photos at a public event. Do not stalk a driveway.
- Understanding supply chains and logistics: ports, rail, and layouts visible from public imagery and documents.
- Connecting subjects to locations they chose to publish. Connection is not occupancy every day.

Write the application as a question. “Does public imagery support the claimed expansion?” is GEOINT. “Let’s drive by” is, on private land, a problem.

### Tools landscape

- **Commercial**: Google Earth, Bing Maps, Mapbox. Capture the imagery date, not just the date you looked.
- **Satellite imagery**: Sentinel Hub, USGS Earth Explorer, commercial APIs. Public satellites are not secret, and using them is not a hack.
- **Mapping**: OpenStreetMap, ArcGIS, QGIS. OSM is fast and uneven. Desktop GIS is for when browser pins start to look like a toy.
- **Social media**: Geotagged post analysis. Screenshot what the platform shows. Do not assume every photo is geotagged because one was.

### Investigation workflow

1. Write the location question in one sentence.
2. List location evidence you already have (address, photo, geotag, filing).
3. Plot only points you can cite on a public map.
4. Compare current and historical public imagery where time matters.
5. Separate confirmed coordinates from inferred places. You will not walk the site unless you have a right to be there.

### Legal and ethical boundaries

Public imagery, public maps, public posts, EXIF when present in a file you lawfully hold. No trespass. No drone over a backyard because the satellite tile was fuzzy. No claiming you hacked, tasked, or “owned” a satellite because you used a public viewer. Do not publish a precise home address as sport. Location can be safety-relevant; treat it that way.

### Common mistakes

- Treating a pin as surveyed truth.
- Using outdated imagery to describe today’s site.
- Converting three geotags into a “pattern of life.”
- Implying classified-grade collection you did not do.

> **Aside.** A map tile is a photograph of a place at a time, not a confession from the planet. OSINT101 will take “Sentinel image, date on the slider, roof unchanged.” It will not take “we hacked a satellite” from someone who found the basemap switch.

Your exercise: document three ways GEOINT could support an investigation in your typical work context. For each, name the public source, the question it answers, and the line you will not cross (including the front lawn).

        `,
        exercise: 'Document three ways GEOINT could support an investigation in your typical work context.',
      },
      {
        title: 'Geolocation from Images',
        duration: '55 min',
        content: `
### Every image tells you where it was taken if you know how to ask

Geolocation from images is a learnable skill that improves with practice — and with humility. Plenty of pictures were taken in a place that looks like four other places.

Work from public photographs and public maps. EXIF coordinates, when present, are a lead, not a substitute for the frame. Do not trespass to match an angle. Do not announce that you “tasked a satellite” because you lined up a roof on a public globe.

### Why this matters

Images move faster than captions can be trusted. Last year’s protest, a hotel balcony reused as “today,” a generated skyline: they survive if nobody asks where the photographer’s feet were.

Visual geolocation tests those claims without turning you into a tourist at someone’s door. It also kills the confident error: the holiday mountain that is the wrong range, in the wrong country, with better lighting.

### What you'll be able to do

- Extract visual indicators from a public image in a consistent order.
- Compare those indicators to public maps, street-level imagery, and satellite or aerial views.
- Use EXIF GPS only when the file still contains it, and reconcile it with what the picture shows.
- Report a location with confidence language, including “unknown.”

### Visual indicators

Work the frame like a checklist. One cute landmark is not a location.

- **Landmarks**: Mountains, buildings, monuments, signage. Unique beats famous. Famous buildings are in souvenirs. Ugly transit sheds are in one city.
- **Architecture**: Regional styles, roof tiles, window types. Style suggests a region. It rarely pins a street alone.
- **Vegetation**: Climate zones, seasons, native vs. planted. Palm trees travel. Use plants as climate, not GPS.
- **Infrastructure**: Road markings, plates, driving side, overhead wires. People forget to fake the curb paint.
- **Shadows and sun**: Approximate latitude and time of day. Useful once you have a candidate. Useless as a first guess from one selfie.

Write sign language and weather down before you search, or you will “find” whatever the first query suggested.

### Workflow

1. Examine the image for distinctive features. Note what is absent (no snow, no wires) as well as what is present.
2. Search for location-indicating details. Reverse-search the frame and odd objects. Transcribe text. If EXIF GPS or a timestamp exists, treat it as a hypothesis, not the answer key.
3. Use mapping tools to compare: public street-level imagery, aerial views, ordinary maps. Match more than one feature.
4. Verify through multiple indicators. Independent cues that would be hard to get right together by chance. If they disagree, the pretty match loses.

If you cannot finish step 4, you have a candidate, not a geolocation. Candidates go in notes, not headlines.

### Common mistakes

- Confusing similar-looking locations. Harbor cities copy each other. So do conference hotels. So do “generic European old towns” that are actually a studio backlot, or just Belgium.
- Ignoring metadata that contradicts visual assumptions. If EXIF says one country and your eyes say another, you do not pick the story you like. You investigate the conflict — including the possibility that EXIF was edited or the photo was downloaded and re-uploaded.
- Forgetting about photo editing or old images. Skies get replaced. Crowds get inserted. A real street can host a caption from the wrong year. Historical imagery on public globes will happily show you the lot before the hotel existed.
- Going to the place. If the last step in your head is “I’ll just swing by,” stop. Public GEOINT ends at the public record.

> If you think you recognize the background of a selfie, verify it. "That looks like the beach by my hotel" is not intelligence. It is wishful thinking with pixels.

### Legal and ethical boundaries

Public images and public imagery only. No trespass, no peering over fences, no knocking to stand in the garden for the match. Do not publish a private home because you could. Do not claim satellite hacks or illicit tasking. EXIF is file metadata, not a space-network breach. Do not harass people in the photo.

After the workflow, write confidence: high (several independent matches), moderate (region plus a plausible street), or low (biome and architecture only). If reverse search finds the picture on a 2018 travel blog, that date joins the case even if the caption says yesterday.

Beginners search the most famous object and force the rest to fit. Invert that. Search what is expensive to fake: a shop name plus a peak plus road-marking language. Famous monuments are bait.

> **Aside.** Recognition is a feeling. Geolocation is a stack of boring matches. OSINT101 will accept “unknown” with a completed checklist. It will not accept “pretty sure it’s Santorini” from someone who liked the white paint.

Your exercise: geolocate three images from public sources using only visible indicators, then check your work. Use the workflow in order. If EXIF is present, test it; if it is absent, say so. Do not visit the sites.

        `,
        exercise: 'Geolocate three images from public sources using only visible indicators, then check your work.',
      },
      {
        title: 'Mapping and Visualization',
        duration: '50 min',
        content: `
### A map turns data into evidence

Mapping tools help you visualize location data and see patterns. They also visualize your assumptions. A clean set of pins can make a coincidence look like a network. The map is not the finding. The map is how you show the finding.

Plot public points: published addresses, public venues, shared geotags, and locations already geolocated from public images. Do not add “device pings” you do not lawfully have. Do not walk a neighborhood to thicken the layer.

### Why this matters

Tables hide geography. Two offices look unrelated until they share a loading dock. Decision-makers understand maps quickly, which is helpful and dangerous. They will remember the cluster and forget the footnotes.

Good visualization makes uncertainty visible: different symbols for confirmed versus inferred, dates on the layer, sources in the legend. Bad visualization is a heat map of enthusiasm.

### What you'll be able to do

- Choose a representation (pins, heat, routes, time) that matches the data you actually have.
- Build a simple, sourced map for a public figure or public case without implying surveillance you did not perform.
- Read a cluster as a question, not as guilt.
- Hand someone a map that still makes sense after the colors print gray.

### What to map

Only what you can cite.

- Known addresses and properties: filings, company pages, public records. A registered office may be a mail drop.
- Associated locations (work, home, vacation): “associated” requires a source. A tagged beach is a tagged beach. Be careful with residences; precision can become a safety issue.
- Event locations and travel routes: public appearances and published itineraries. Routes need ordered, dated points.
- Device ping locations: only if a lawful dataset actually contains them. If you do not have pings, do not leave a legend item that implies you might. Public OSINT usually does not include this layer.
- Social media geotags: claims of presence, dated. Note when the photo contents disagree.

If a point came from visual geolocation, mark it inferred. The map should not launder a “maybe” into a building outline.

### Visualization techniques

- Pin maps for point data. Default choice. If you need twelve icon types, you need a table.
- Heat maps for density. Honest when you have many comparable points. Dishonest when you have eight pins and a blur tool.
- Route visualization for travel patterns. Draw a route only when sequence and time support movement. Label assumptions.
- Time-series animation for movement. Useful in briefings, easy to overplay. Monthly data is not a chase.

Technique should shrink to fit the evidence.

### Tools to consider

- **Simple**: Google My Maps, OsmAnd. Enough for five to twenty sourced pins. Most course work should live here until it hurts.
- **Intermediate**: ArcGIS Online, Mapbox. Controlled styling without a PowerPoint archaeology unit.
- **Advanced**: QGIS (free), commercial GIS. Use when you combine public imagery and layers you can explain. A GIS does not make the data classified.

Export an image with the legend baked in. A live map nobody else can open is a performance.

### Presentation note

Maps communicate fast. Make sure your map legend, sources, and timestamp are clear. A map without context is just art.

Include the subject, data date, production date, and imagery dates if basemaps matter. Separate confirmed and inferred points in the legend. If you used public satellite or aerial tiles, say which viewer and which capture period. That is attribution, not a hacker origin story.

### Investigation workflow

1. List candidate locations with source, date, and confidence.
2. Drop anything you cannot cite or that you only know from trespass-shaped knowledge.
3. Choose pins unless the dataset truly justifies heat or routes.
4. Plot, then look for clusters and gaps. Write a pattern sentence that survives without the map.
5. Add legend, sources, and production date. Fix anything a hostile reader would over-read.

### Legal and ethical boundaries

Public points only. No trespass to “improve” a pin. No implied device tracking you did not lawfully receive. No satellite-hack branding. Do not publish a high-resolution map of a private residence as a party trick. If a location could endanger someone, coarsen it. Harassment via map is still harassment.

### Common mistakes

- Plotting inferred geolocations as surveyed addresses.
- Heat-mapping a handful of points so they look like a movement study.
- Forgetting imagery dates, then arguing about a building that was not there yet.
- Letting a pretty legend replace a source list.

> **Aside.** If the map is prettier than the evidence, the map is lying with taste. OSINT101 wants five sourced pins and a dull legend. It does not want a glow that implies you bought a constellation.

Your exercise: create a simple map showing five locations related to a public figure and note any patterns you observe. Cite each point. If you do not see a pattern, write that. Absence of a cluster is allowed. Inventing one is not.

        `,
        exercise: 'Create a simple map showing five locations related to a public figure and note any patterns you observe.',
      },
    ],
  },
  'geolocation-osint': {
    id: 'geolocation-osint',
    title: 'Geolocation and Imagery OSINT',
    description: 'Master the techniques of determining locations from photos, videos, and descriptive information. From EXIF data to visual clues, learn to pinpoint locations with precision.',
    level: 'Advanced',
    estimatedTime: '3-4 hours',
    sections: [
      {
        title: 'Visual Geolocation Fundamentals',
        duration: '25 min',
        content: `
A photograph is a set of claims about a place. Most are accidental: a road marking, a roof pitch, a shop sign in the wrong alphabet. Visual geolocation is reading those claims without asking the file for GPS, and without turning a stranger's holiday snapshot into a hunt.

### Why this matters

Imagery is how events, alibis, and "I was there" stories travel. EXIF is often stripped. Reverse image search is often a miss. What remains is the picture. If you can extract place from landscape, infrastructure, language, and light — and say how sure you are — you can verify public reporting. If you cannot, you will keep promoting "looks like Spain" to a coordinate.

### What you'll be able to do

You will work a photo using visual clues only, run a disciplined reverse-image pass, and write a location hypothesis with a confidence note. Practice on public puzzle imagery and photos offered as unknowns — not on private individuals you decided to locate for curiosity.

### The Art of Photo Geolocation

Determining where a photo was taken combines visual analysis, geographic knowledge, and methodical research. It is also easy to abuse. This course geolocates *images*, not people. You pick a photo whose location is the question — a practice set, news image, or public challenge — not a private person whose house you "just want to find."

Start with what you can *see*. List concrete features before you open a map. Students who jump to Street View first spend an hour on the wrong coastline because a tree looked familiar.

### Key Visual Clues

- **Landscape**: Mountains, coastlines, vegetation types, soil colour. A flat pine forest and a red-soil plateau are different continents of possibility. Seasonal vegetation can rule out a claimed month.
- **Infrastructure**: Road markings, power lines, lamp posts, signage. Centre-line paint, chevrons, and the shape of a utility pole are regional dialects. Photograph them in your notes as if they were text.
- **Architecture**: Building styles, rooflines, window types, construction materials. A corrugated lean-to next to a tiled hip roof is a better clue than "looks European."
- **Language**: Street signs, billboards, shop names, license plates. Script, orthography, and plate format often beat scenery. A bilingual sign is a gift. A translated watermark is a trap.
- **Lighting**: Sun position, shadow angles, weather conditions. Light gives hemisphere and time-of-day hints, not a grid reference, unless you measure carefully later.
- **Culture**: Clothing, vehicle models, business names, flags. Useful, noisy, and easy to overfit. A football shirt is not a passport.

Work clues as a *set*. One distinctive mountain is a lead. One distinctive mountain plus a right-hand drive car plus a specific script is a case.

### The Reverse Image Search Workflow

Reverse search is not cheating. It is the check for "this photo already has a name." Run it, record the result, then continue visually if you still lack a place.

1. **Google Images**: Best for well-known locations and tourist-grade landmarks.
2. **Yandex Images**: Often better for non-Western locations and crops that Google shrugs at.
3. **TinEye**: Finds exact matches and modified versions. Good for "has this file travelled?"
4. **Bing Visual Search**: Good alternative when others fail or over-personalise.
5. **Social media platforms**: Some have built-in reverse search. Use them on the *image*, not as an excuse to browse a private person's grid.

If reverse search returns the location, you still write the visual clues that would have got you there. Otherwise you learned a button, not a method.

### Numbered workflow

1. Save the image and note where you obtained it (public page, newsroom, practice set).
2. List visible clues in the six categories above before searching.
3. Run the reverse-image circuit. Record hits and misses.
4. Form a region hypothesis (country or city-scale), then try to tighten it.
5. Check the hypothesis against two independent clue types.
6. Write the location claim with confidence: possible / probable / confirmed.
7. Stop. Do not pivot from the place to identifying private bystanders.

### Legal and ethical boundaries

Visual clues only in this lesson — no metadata hunting yet. Practice on images that are public and meant to be identified, or on news imagery where place is a legitimate reporting question. Do not stalk real private individuals. Do not geolocate children. Do not publish a private home address because a window looked solvable.

### Common mistakes

Naming a city from one chain store. Ignoring license-plate or script evidence that contradicts the pretty mountain. Treating reverse-search failure as "therefore unique and secret." Continuing from a building to the people who live in it.

> **Rule of thumb:** "I recognise that skyline" is a hypothesis. It becomes intelligence when a second clue agrees and you can show both. Until then it is tourism.

Close with the exercise: find five photos online with unknown locations. Use visual clues only (no metadata) to determine where each was taken. Prefer public practice images and news photos. Write clues, hypothesis, and confidence — not a dossier on the photographer.

        `,
        exercise: 'Find 5 photos online with unknown locations. Use visual clues only (no metadata) to determine where each was taken.',
      },
      {
        title: 'EXIF and Metadata Analysis',
        duration: '20 min',
        content: `
Cameras are terrible secret-keepers and excellent filing clerks. A file can carry coordinates, a clock, a lens model, and a thumbnail of an earlier crop. Useful when the file is yours, or when a publisher left metadata on a public original. Not a license to strip other people's private photos for sport.

### Why this matters

When GPS is present, visual work becomes confirmation. When it is absent, you still learn whether the file was edited and whether the clock is plausible. Analysts who skip metadata miss a point — or trust a social-media download that was emptied on upload and invent a story about "hidden EXIF."

### What you'll be able to do

You will extract EXIF with a proper tool, read the fields that actually move an investigation, and state the limits: stripped uploads, screenshots, and cameras that never wrote GPS. Course practice is on a photo *you take*, or on a file that still carries public metadata. You will not go hunting private individuals' camera rolls.

### What EXIF Data Reveals

Photos contain embedded metadata that can reveal:

- **GPS coordinates**: Exact location (if enabled). Latitude, longitude, sometimes altitude. This is the field students treat as destiny. It is a claim by a device, not a sworn statement.
- **Timestamp**: When the photo was taken. Check time zone and whether the clock was wrong. A 2019 date on a "today" story is a finding.
- **Device info**: Camera make, model, software. Useful for consistency across a set. Useless as a personality profile.
- **Orientation**: Which direction the photographer faced, when direction sensors wrote it. Pair with a map only after you understand the units.
- **Thumbnails**: Sometimes embedded thumbnails of edited versions. A thumbnail can show a crop you were not meant to see on the published frame — still only on files you are allowed to inspect.

Also look for filename and edit software. Write values as extracted. Do not "correct" a coordinate until you have plotted it.

### Tools for EXIF Extraction

- **exiftool**: The gold standard for metadata extraction. Use it on a local copy. Learn \`-gpslatitude\` / \`-gpslongitude\` and a full dump so you see what you are ignoring.
- **Jeffrey's Image Metadata Viewer**: Web-based viewer for a file you choose to upload. Fine for class. Think before you upload someone else's image to a third party.
- **ExifData.com**: Quick online check. Same caution. Your exercise photo is the right test file.
- **Python PIL/Pillow**: Programmatic extraction when you have many *authorised* files. A script is not an excuse to batch-process a scraped social archive.

If two tools disagree, believe the local exiftool dump.

### Limitations

- Social media platforms strip EXIF data on upload. The JPEG you downloaded from a feed is usually a new file. Do not announce "no GPS, therefore they hid it."
- Most phones require explicit permission to share location. Many users never grant it. Absence of GPS is normal.
- Screenshots contain no useful location data. They contain the metadata of a phone capturing its own screen.
- Some cameras allow disabling GPS tracking. Professionals often do this on purpose.
- Professional photographers often strip metadata intentionally before publication. Newsrooms vary. Always check the *original* if a public outlet offers a full-resolution download.

Metadata can also lie: a reset clock, a stale GPS lock, coordinates written by an editor. Treat EXIF as one source in a two-source problem.

### Numbered workflow

1. Use a photo you took with location enabled, or a public file that still includes metadata.
2. Copy it locally. Do not work on the only original.
3. Run exiftool (or a viewer) and save the full text dump.
4. Pull GPS, timestamp, device, orientation, and software into a table.
5. Plot coordinates on a map. Compare with what the picture *shows*.
6. Note every limitation that applies (stripped copy, missing GPS, timezone).
7. Write one sentence: what the metadata supports, and what it does not.

### Legal and ethical boundaries

Extract EXIF on photos you own or on files that publicly include metadata and that you have a legitimate reason to examine. Do not pull location from a private person's social downloads to find their home. Do not stalk. Do not publish precise coordinates of a private residence as a party trick.

### Common mistakes

Reading Instagram saves as if they were camera originals. Trusting GPS without looking at the image. Ignoring the timestamp that wrecks the narrative. Uploading sensitive images to random EXIF websites. Treating device model as identity.

> **Rule of thumb:** Metadata is a witness that forgets to mention it was standing in the previous town when it last got a satellite fix. Cross-check it or it will embarrass you in front of a map.

Close with the exercise: take a photo with your phone (location enabled) and extract all EXIF data using exiftool or a web viewer. List GPS, time, device, and three fields you did not expect. That file is yours. Keep the habit.

        `,
        exercise: 'Take a photo with your phone (with location enabled) and extract all EXIF data using exiftool or a web viewer.',
      },
      {
        title: 'Advanced Techniques',
        duration: '30 min',
        content: `
Once you can read a still frame and a metadata dump, the remaining work is comparison: other times, other sensors, other maps. Same clue discipline, more ways to be wrong — which is why this lesson insists on a log.

### Why this matters

Video, night sky, shadows, and street-level archives exist because a single photo is often incomplete. Skip them and you stall. Jump to star maps on a blurry reel and you produce astronomy fan fiction. The difference is a written method and a public practice venue — not a private person's life.

### What you'll be able to do

You will pick at least three independent clue types on one image, use comparison platforms without treating them as oracles, and keep a geolocation log. Practice on r/whereisthis and similar public puzzles — not a real private individual.

### Beyond the Photo

- **Video frame extraction**: Extract key frames from videos for geolocation. Pick frames with signage, junctions, and skyline — not the subject's face. You are locating a scene, not building a biometric album.
- **360-degree imagery**: Compare with Google Street View history. The capture date on Street View is evidence. A shop that opened in 2024 cannot validate a 2018 still.
- **Shadow analysis**: Calculate approximate time and location from shadow angles (suncalc.org). You need a known vertical, a measurable shadow, and humility about error bars.
- **Star mapping**: Identify astronomical features in night photos. Useful when the sky is actually in the frame and the lens is not a smudge. Match stars to a time window; do not "feel" a constellation.
- **Audio analysis**: Background sounds can reveal location (bird species, traffic patterns, languages). Treat audio as a regional hint, then find a visual confirmation. A magpie is not a street address.

Use these when the still image is stuck. One extra technique that contradicts your hypothesis beats three that flatter it.

### Cross-Referencing Platforms

- **Google Earth**: Historical imagery comparison. Buildings appear and vanish. Coastlines and construction stages date a shot better than a caption.
- **Wikimapia**: User-contributed location labels. High noise, occasional gold. Verify on a second map.
- **OpenStreetMap**: Detailed geographic data — road names, amenities, footpaths that commercial maps simplify away.
- **Mapillary / KartaView**: Crowd-sourced street-level imagery, often in places Street View skipped. Check capture dates.
- **PeakFinder**: Mountain silhouette identification. A ridge line is a strong clue if you already know the region to within tens of kilometres.

Platforms disagree. Record which layer supported which claim.

### Documentation

- Save your search path: every search, every result, every dead end
- Create a \`geolocation log\` with timestamps and URLs
- Annotate photos with your findings
- Record confidence levels for each determination

A log that only contains successes is a highlight reel. Dead ends stop the next analyst touring the wrong harbour. Confidence belongs on each clue: a plate format can be high for country and low for town.

### Practice Resources

- **GeoGuessr**: Gamified geolocation practice. Good for speed and regional pattern recognition. Bad if you start guessing from vibes and calling it analysis.
- **Reddit r/whereisthis**: Community geolocation challenges. This is the course's preferred practice venue: public, consensual puzzles, methodology on display.
- **Bellingcat's Geolocation Guide**: Professional methodology reference. Read it when you start skipping steps.
- **Quiztime / @quiztime**: Regular geolocation puzzles on Twitter/X. Same rule: puzzle images, shown work, no private-person hunting.

If a practice image is a private residence or a non-consensual "find this person," skip it.

### Numbered workflow

1. Choose a puzzle image from r/whereisthis (or an equivalent public challenge).
2. List visual clues first (fundamentals lesson). Check EXIF only if the file is yours or metadata is publicly present.
3. Add a second technique: Street View/Mapillary, shadows, peaks, or video frames.
4. Add a third independent clue type. If you cannot, say so.
5. Log every search, including failures.
6. State location and confidence. Separate "country" from "building."
7. Stop. Do not identify bystanders or "the poster."

### Legal and ethical boundaries

Visual clues, public comparison imagery, and EXIF only on photos you own or that publicly include metadata. r/whereisthis is a practice venue, not a model for stalking. No locating real private individuals, no doxxing, no publishing a solved home address as entertainment.

### Common mistakes

One clue, huge confidence. Using historical Street View from the wrong year. Forcing star alignment on a cloudy night. Skipping the log because the answer "felt obvious." Moving from a solved building to the people inside it.

> **Rule of thumb:** Three clues that agree are a location. Three tabs that agree with your first guess are a mood. Write the log so we can tell which one you built.

Close with the exercise: pick a photo from Reddit r/whereisthis and attempt to locate it using at least three different clues. Document your methodology in the geolocation log format above. Hand in the path, not just the pin.

        `,
        exercise: 'Pick a photo from Reddit r/whereisthis and attempt to locate it using at least 3 different clues. Document your methodology.',
      },
    ],
  },
  'kali-tools': {
    id: 'kali-tools',
    title: 'Kali Linux Mastery',
    description: 'Nmap, directory checks, Maltego, and Wireshark, with the authorization line written down before the first scan.',
    level: 'Intermediate',
    estimatedTime: '8-10 hours',
    sections: [
      {
        title: 'Reconnaissance with Nmap',
        duration: '60 min',
        content: `
## Network Discovery

Nmap is the classic multi-tool of infrastructure reconnaissance: it asks a host which ports are listening and, if you ask politely enough, what might be speaking on them. In this course that host is a local lab target you own or a system you are explicitly authorized to test. Not a company that merely looks interesting.

Frame this one. "I launched the loudest scan possible first" is not a methodology. It is a confession.

This section exists because nmap is easy to run and easy to misuse. The skill is not memorizing flags. It is choosing a quiet, justified scan, reading the output, and knowing what you still cannot answer.

### After this section

You will be able to confirm scope, run a conservative scan against a local test target, identify open ports and probable services, and write down one follow-up question that is still legal and useful.

### What nmap can tell you

Treat each output class as a claim with a confidence level.

- **Service discovery:** which ports appear open, closed, or filtered.
- **Version detection (\`-sV\`):** a best guess at what is listening, based on banners and probes. Banners lie. Guess anyway, then verify.
- **OS fingerprinting (\`-O\`):** a probabilistic sketch of the operating system, not a serial number.
- **Scripts (\`--script\`):** extra enumeration for common checks. Scripts are still traffic. They are not a free pass to "see what happens."

You do not owe the universe an \`-A\` scan. Aggressive is several loud tricks at once. Use it when a lab asks for a noisy baseline, not as a personality.

### Sensible workflow

1. **Confirm scope in writing.** Target IP or hostname, authorization, and time window. For class: a VM on your lab network, \`scanme.nmap.org\` only if you accept its published rules, or another permitted classroom host. A random public site is not scope.
2. **Start with a minimal scan.** A SYN scan of common ports is enough to learn the shape. \`nmap -sS\` is still active traffic; "stealth" is a TCP technique, not invisibility. On your lab box, \`nmap -sS <lab-ip>\` is a reasonable first pass.
3. **Read before you expand.** Note open ports. Guess likely services from well-known numbers (22, 80, 443) and from nmap's service column. Write what you think you know.
4. **Add version detection only where it earns its keep.** \`nmap -sS -sV -p <open-ports> <lab-ip>\` is a second step, not a first reflex. Restrict ports so you are not poking 65,000 doors for sport.
5. **Log the exact command, time, and why.** Future-you will not remember whether you used \`-sS\` or \`-sT\`. Output files (\`-oN\` or \`-oA\`) belong in the case folder.
6. **Write one follow-up question.** Good: "Is the service on 8080 the lab web app I installed, or a default page?" Bad: "What if I try default passwords?" This module stops at reconnaissance, not access.

### Reading a first result

An "open" port is an invitation to ask a better question, not a trophy. Filtered ports mean something is dropping probes; that something may be a firewall, and blasting more packets rarely clarifies it. Version strings can be leftover defaults. Record them as *probable*.

If nothing is open, that is still a result. Document the command and the emptiness. Do not "fix" the boredom with \`-p-\` and a coffee until you have a reason.

### Legal and ethical boundaries

Nmap against systems you do not own and have not been invited to test is unauthorized access territory in many jurisdictions, even when you "only scanned." This course allows:

- your own machines and virtual labs
- classroom ranges the instructor named
- public test hosts that explicitly welcome scans, within their published limits

It does not allow scanning an employer, school, vendor, or stranger "because the ports might be public." Public-facing is not consent. Do not surprise a shared network. Do not use nmap to look for victims.

If you are unsure whether a target is authorized, it is not.

### Common mistakes

- Leading with \`-A -p-\` because it feels complete. Completeness is not the same as judgment.
- Scanning the wrong interface and then theorizing about a host that never saw the packets.
- Treating service names as confirmed software, then writing them into a report as facts.
- Forgetting to save output, then reconstructing a scan from terminal scrollback and optimism.
- Calling a SYN scan "undetectable." Logs exist. Adults know this.

### Field notes

> **Rule of thumb:** the quietest useful scan is the one you can explain in one sentence. If your justification is "I wanted to see everything," you wanted a hobby, not a finding.

Put the scope line above the command in your notes. If the scope line is blank, do not press Enter.

Run the stealth scan on your local test target for the exercise. Identify open ports, probable services, and one follow-up question. If the question requires logging in or exploiting a service, pick another. Recon ends where access authorization would have to begin.

        `,
        exercise: 'Run a stealth scan on a local test target and identify open ports, probable services, and one follow-up question you would ask next.',
      },
      {
        title: 'Web Enumeration with Dirb and WhatWeb',
        duration: '75 min',
        content: `
## Websites leak clues for free

Before anyone gets fancy, basic web enumeration already tells you a great deal about structure, technology, and forgotten content. WhatWeb guesses the stack from headers and HTML. Dirb guesses paths from a wordlist and the server's answers. Together they turn "it is a website" into a short list worth noting.

Add to that: a leftover \`/backup\` folder is not a personality flaw in the tool. It is a reminder that people ship leftovers and then go to lunch.

This section is about fingerprinting and path enumeration on systems you are allowed to test. The judgment call is which findings are operationally interesting and which are merely untidy.

### After this section

You will be able to fingerprint an authorized site, enumerate likely content paths with a controlled wordlist, preserve the output, and sort results into "matters for the investigation" versus "default clutter."

### What each tool is for

**WhatWeb** helps infer:

- CMS and frameworks
- server technologies and language hints
- analytics and third-party tooling
- general signs that somebody built the site in 2014 and has not looked at it kindly since

Start polite. Higher aggression sends more requests and is easier to notice. A first pass can be \`whatweb http://<authorized-host>\`. Read plugins and versions as *hints*. Headers and generator tags can be leftovers or lies.

**Dirb** helps find:

- common directories (\`admin\`, \`uploads\`, \`images\`)
- predictable application paths
- backups, exports, and leftovers (\`backup.zip\`, \`.bak\`, old copies)

Dirb is a dictionary walk, not magic. A typical lab command is \`dirb http://<authorized-host> /usr/share/wordlists/dirb/common.txt -o dirb-notes.txt\`. You are reading status codes and path names, not "breaking in."

### Good workflow

1. **Fingerprint first.** WhatWeb, or headers in a browser, tells you whether you have a brochure, a CMS, or an app. That changes which paths are plausible.
2. **Confirm the target is authorized.** Your lab VM, a classroom app, or a site you own. A random company homepage is not a Dirb target. High-volume path guessing against someone else's live site is active testing, not browsing.
3. **Enumerate with a small wordlist.** Common lists first. Custom lists later if the fingerprint gives a reason. Do not start with the largest list on disk because it feels thorough.
4. **Preserve findings.** Save WhatWeb and Dirb logs. Screenshot unusual pages. Note status codes: \`200\` is content, \`403\` is "exists but forbidden," \`301\` is a trail, \`404\` is usually noise.
5. **Triage.** Interesting: admin-looking paths, backup names, forgotten docs, environment leftovers. Untidy: empty theme directories, ordinary static folders, a thousand 404s.
6. **Expand only where evidence justifies it.** If WhatWeb says Drupal and Dirb finds \`/sites/default\`, you may look at known public Drupal paths on *that authorized host*. A cafeteria menu PDF does not earn a second wordlist.

### Interesting versus untidy

A finding is interesting when it changes what you believe about technology, exposure, or forgotten function. It is untidy when it is a default every site of that type grows, like \`/icons/\` on old Apache. Rank them. Treating every \`200\` as a crisis makes you impossible to brief.

\`robots.txt\` and \`sitemap.xml\`, when present, are often quieter than Dirb and still public. Read them. They are part of enumeration, and they do not require a wordlist.

### Legal and ethical boundaries

Dirb and WhatWeb generate traffic. On your lab, that is the point. On a live third-party site you do not own and have not been asked to test, automated directory brute-forcing is unauthorized testing. Do not "just run Dirb" against a university or news site because the exercise mentions public websites.

If an instructor wants public fingerprinting only, keep WhatWeb low-aggression and skip the wordlist assault. Prefer sites you control. Never try passwords on discovered admin paths. Enumeration here stops at "this path exists and returned this code."

Do not download backup archives from systems that are not yours. Finding that a backup name exists in a lab is a teaching moment. Taking someone else's export is theft with extra steps.

### Common mistakes

- Fingerprinting after a huge Dirb run, so you learn the stack from the wreckage.
- Ignoring \`403\` paths, which often mean "real, just closed."
- Calling every CMS plugin a vulnerability. A version string is not a CVE write-up.
- Running Dirb through a production CDN and then wondering why you are rate-limited and unpopular.
- Saving nothing, then ranking findings from memory.

### Field notes

> **Rule of thumb:** the wordlist is a hypothesis generator. The interesting part is which guesses the server bothered to answer. If you cannot sort interesting from untidy, you are still collecting, not enumerating.

Write a two-column note: \`path/tech\` and \`so what\`. If the second column is empty, the first column is a souvenir.

For the exercise, fingerprint an authorized site, enumerate likely content paths, and mark which findings are operationally interesting versus merely untidy. If you only have a public third-party site, stay with passive fingerprinting and published paths. Save the wordlist walk for a lab host you are allowed to annoy.

        `,
        exercise: 'Fingerprint a public website, enumerate likely content paths, and identify which findings are operationally interesting versus merely untidy.',
      },
      {
        title: 'Visualizing with Maltego',
        duration: '90 min',
        content: `
## Connecting the Dots

Maltego helps you turn disconnected facts into a graph that another analyst can understand at a glance. Entities are the nouns. Transforms are questions you ask about those nouns using public or licensed data sources. The graph is the argument: what is linked, what is missing, and what you have not checked yet.

Graphs win for a petty reason. It is much easier to brief from a graph than from forty-seven screenshots and a haunted spreadsheet.

This section is about a small, honest infrastructure map around a public domain, not about running every transform until the canvas looks like a firework.

### After this section

You will be able to seed a graph with a public domain, run a restrained set of infrastructure transforms, and explain the obvious relationships without treating every icon as a confirmed secret.

### Core ideas

- **Entities** are the things you care about: Domain, DNS Name, IPv4 Address, NS record, MX record, website URL, organization name if a public record supports it.
- **Transforms** collect more information about those entities from integrations and public sources. A transform is a query with a drawing attached.
- **Graphs** reveal relationships and gaps. A lonely entity means you have not pivoted, or there is nothing public to pivot to. Both are useful.

Maltego does not replace notes. It organizes them. If a transform returns a result, you still owe the graph a source and a grain of salt.

### A restrained mapping workflow

1. **State the question.** "What public infrastructure is obviously tied to this domain?" is enough. "Map the entire company" is how canvases become modern art.
2. **Create a clean graph and drop a Domain entity.** Use a domain you may research: a lab domain, a public company site, or an instructor sample. Do not seed personal emails of strangers "for practice."
3. **Run the obvious infrastructure transforms first.** DNS names, name servers, mail exchangers, resolving IPv4 addresses. Read each result. Delete junk. Maltego will add entities that are true and still useless.
4. **One hop, then stop and look.** If \`example.com\` resolves to an IP, that IP may host other names. That is a pivot, not a mandate to explode the graph. Ask whether the new name still answers the question.
5. **Annotate.** Use notes on entities: where the fact came from, time retrieved, confidence. A graph without notes is a poster.
6. **Name the gaps.** No MX record, privacy-redacted WHOIS, or a CDN IP that represents ten thousand sites are all findings. Draw them as absences in your head, even if Maltego cannot draw a hole.

Layout matters. Cluster DNS on one side, addressing on another, seed domain in the center. If a teammate cannot see the story in ten seconds, simplify.

### Why analysts bother

- Relationship-heavy investigations hurt less when the links are visible.
- Pivots you would miss in a linear notebook show up as unexpected neighbors.
- Briefings get shorter when you can point at a cluster instead of narrating a WHOIS dump.

The graph is a working surface. Export or screenshot it when it is still readable. A 400-entity hairball is not "thorough." It is a cry for a filter.

### Legal and ethical boundaries

Use transforms that query public or licensed data. Stay inside Maltego's terms and the terms of any data provider you attach. Do not use the graph as a front end for unauthorized scanning, password guessing, or buying stolen contact files.

A public domain's DNS is public. A private person's home address is not a required node on a student graph. If a transform offers personal data you do not need, do not run it. Scope is an ethical control, not only a legal one.

Do not treat transform output as ground truth. Third-party databases are late and occasionally fictional. Verify important links with a primary lookup before you brief them.

This is still OSINT. No exploit transforms, no "just checking if the login works," no mapping of internal networks you cannot see from public records.

### Common mistakes

- Running every transform on every entity because the buttons are there.
- Leaving auto-layout on until related nodes live in opposite corners.
- Merging entities that merely share a display name ("Acme" the domain and "Acme" the news mention).
- Briefing CDN or shared hosting IPs as "their server" with high confidence.
- Forgetting to save versions, then "undo" becoming a lifestyle.

### Field notes

> **Rule of thumb:** if the graph needs a narrator standing next to it, the graph is unfinished. If the graph cannot survive a narrator leaving the room, you built decoration.

Keep a transform log: what you ran, on which entity, and why you stopped. Restraint is a professional skill. Enthusiasm is free and noisy.

Create the Maltego graph for the exercise around a public domain and map the obvious infrastructure relationships. Stop at the obvious on purpose. If you cannot explain a node in one clause, it is not ready for the screenshot.

        `,
        exercise: 'Create a Maltego graph for a public domain and map the obvious infrastructure relationships.',
      },
      {
        title: 'Traffic Analysis with Wireshark',
        duration: '80 min',
        content: `
## Packets are gossip with timestamps

Wireshark lets you inspect conversations between systems and applications in painful, beautiful detail. Each frame is a receipt: who spoke, on which port, with which protocol, and sometimes with a payload that nobody bothered to encrypt. You are not collecting packets for spiritual reasons. You are answering a question about behavior, flow, or evidence.

Too many people open a live capture and then sit there like the flood will eventually apologize. Filter aggressively. Label interesting streams. Avoid staring at raw packet floods like they will eventually explain themselves out of shame.

This section is lab work. You capture traffic you are allowed to see: your own VM, a classroom tap, or a sample \`pcap\` provided for training.

### After this section

You will be able to take a small authorized capture, identify protocols and endpoints, pick a few display filters that make the sample readable, and explain a pattern (clear-text, repeated requests, name resolution) without claiming you "saw everything."

### Useful analyst goals

Pick one or two before you press the shark fin.

- Identify protocols and endpoints (IPs, ports, DNS names if resolved).
- Spot clear-text data where it should not exist (legacy HTTP, telnet, unencrypted credentials on a lab app).
- Understand request patterns and timing (periodic beacons, a burst of DNS, a long quiet then a download).
- Confirm what an application is actually doing, not what the documentation swears it does.

If you cannot name the goal, you will produce a file and a headache.

### A capture-and-read workflow

1. **Get authorization and isolation.** Capture on a lab interface, a host-only network, or your own machine while you generate the traffic. Do not put a laptop in promiscuous mode on a cafe Wi-Fi and call it homework.
2. **State the question.** Example: "When I load the lab web app, which hosts does the browser talk to, and is any of it HTTP instead of HTTPS?"
3. **Start a small capture.** In Wireshark, choose the correct interface. Use a capture filter if you already know the scope (\`port 80 or port 443 or port 53\`) so the file stays small. Generate the traffic on purpose: browse the lab site, resolve a name, stop.
4. **Stop early.** A minute of intentional traffic beats twenty minutes of background noise from your other VMs.
5. **Save the file** into the case folder with a boring name: \`2026-09-04_labweb_first-load.pcapng\`.
6. **Filter the view.** Display filters are not the same as capture filters. Useful starters: \`dns\`, \`http\`, \`tls\`, \`ip.addr == 192.168.56.10\`, \`tcp.port == 80\`. Follow a TCP stream when a conversation looks like the one you meant to study.
7. **Label and note.** Mark packets, export objects only from the lab traffic, and write: endpoints, protocols, and one pattern. "Browser issued four DNS queries, then a TLS handshake to the lab host, no clear-text POST" is a finding.

### Survival habits

Name endpoints as you go. Use Wireshark's name resolution if it helps, but remember that a resolved name is another claim. Statistics (\`Conversations\`, \`Protocol Hierarchy\`) are for orientation, not for skipping the frames.

Clear-text HTTP in a lab is a gift. Read the request line and headers. Do not practice this by intercepting other people's sessions. If you see credentials in a teaching app, document that the lab app sent them in the clear. Do not reuse them anywhere.

### Legal and ethical boundaries

Packet capture is intimate. On a shared or corporate network it can expose other people's mail, passwords, and private browsing. That is why this course allows only:

- traffic you generate in a lab
- machines you own
- instructor-provided packet samples
- networks where you have written permission to monitor

Unauthorized sniffing on a third-party network is not OSINT. It is interception. Do not capture on public Wi-Fi, do not "just mirror the office switch," and do not retain packets that contain other people's personal data from a capture that ran too long.

If a sample pcap includes credentials or personal data, treat it as teaching material: describe the pattern, do not publish the payload.

### Common mistakes

- Capturing the wrong interface, then analyzing your host's Netflix while the lab VM stays silent.
- Never filtering, then declaring the protocol mix "complex" as if that were analysis.
- Trusting color rules instead of reading a stream.
- Leaving personal accounts logged in on the same VM so the pcap becomes a diary.
- Keeping huge captures with no question, which is hoarding with a \`.pcapng\` extension.

### Field notes

> **Rule of thumb:** a filter is how you admit you have a question. An unfiltered live view is how you admit you do not.

Write the question on a sticky note on the monitor. If the packets cannot answer it, change the experiment, not the story.

Capture the small authorized sample for the exercise and explain the services and patterns you can identify. If you cannot point to frames that support the explanation, you are still describing hopes. Point at the packets.

        `,
        exercise: 'Capture a small, authorized traffic sample and explain what services and patterns you can identify from it.',
      },
      {
        title: 'Operational Workflow and Note Discipline',
        duration: '55 min',
        content: `
## Tools are only impressive when used like an adult

Kali becomes genuinely useful when you stop thinking in terms of isolated commands and start thinking in workflows. Nmap, WhatWeb, Dirb, Maltego, and Wireshark are not a personality. They are steps you can order, justify, and file. A tool run without a question is a screensaver that uses sudo.

The beginner bug is so common it has a coffee stain. People run five tools, save nothing, and then attempt to reconstruct what happened from terminal scrollback and personal optimism. This is not an evidence strategy.

This section is the glue for the module: a repeatable order of operations and a note habit that survives contact with lunch.

### After this section

You will be able to design a small reconnaissance workflow with a tool order, output locations, and a notes template, then explain why each tool appears when it does.

### Basic workflow pattern

Use this skeleton for authorized lab reconnaissance. Change tools, do not change the discipline.

1. **Define the question.** One sentence. "What is listening on the lab VM, and what does its web stack look like?" is a job. "Play with Kali" is a weekend.
2. **Confirm authorization and environment.** Lab network, correct VM, snapshot taken if you like having undo. Write the target address at the top of the notes file *before* the first command.
3. **Choose the minimal safe tool set.** Example order for a web-ish lab host:
   - notes file and folder structure first
   - nmap, quiet and scoped, for ports
   - WhatWeb against the authorized URL for a stack guess
   - Dirb only if a web port is open and you still need paths
   - Maltego if you also have a public domain question that graphs would help
   - Wireshark if the question is about traffic the app actually sends
   You will not need every tool every time. Skipping a tool is professionalism.
4. **Capture results cleanly.** Redirect or \`-o\` everything into the case folder. One directory per investigation: \`commands.md\`, \`nmap/\`, \`web/\`, \`pcap/\`, \`screenshots/\`, \`notes.md\`.
5. **Correlate before you add more tools.** Open ports should match WhatWeb's host. Dirb paths should match something you already believe about the CMS. If they do not, that contradiction is the finding. Another scan will not automatically fix a misunderstanding.
6. **Write what you learned before your brain replaces it with lunch plans.** Three bullets: confirmed, inferred, still unknown. Commands belong in \`commands.md\` with time and purpose, not only in history.

Organization is not glamorous, but neither is being wrong in front of coworkers.

### A folder contract

Pick a naming scheme and keep it. Example:

- \`2026-09-04_lab-recon/notes.md\` — question, scope, running log
- \`commands.md\` — exact commands, copy-pasteable
- \`nmap/lab-vm.nmap\` — tool output, not a screenshot of a terminal unless you must
- \`web/whatweb.txt\`, \`web/dirb.txt\`
- \`pcap/lab-first-load.pcapng\`

If a file is not in the folder, it does not exist for the report. Terminal scrollback is a rumor.

### Legal and ethical boundaries

A workflow does not expand your authorization. Every step inherits the same rules you already accepted: own systems, lab ranges, instructor targets, public OSINT that does not require attacking a host. Do not add "quick masscan of the neighborhood" as step 2.5 because the template had a blank line.

Do not store credentials you found in a lab app next to your personal password database. Do not upload pcaps or Dirb lists of a client's host to a random paste site. Workflow includes how you retain and delete.

If a step would touch a live third-party system without written permission, the workflow's correct next action is stop.

### Common mistakes

- Starting with the loudest or newest tool because it is the one you wanted to try.
- Mixing personal Downloads with case output until nothing is citable.
- Changing the question mid-stream and keeping the old notes as if they still apply.
- Correlating in your head, then writing a report that invents a timeline.
- Designing a workflow with twelve tools for a five-port lab VM.

### Field notes

> **Rule of thumb:** the workflow is the product you can hand to the next operator. The commands are just the noise it made on the way. If your notes cannot be followed, you did not operate. You improvised and hoped the hope would file itself.

Put the question on line one. Put the stop condition on line two ("when I can name open ports, likely web stack, and one unknown"). Everything after that is optional until those lines are satisfied.

Design the repeatable Kali workflow for the exercise: tool order and output handling for a small reconnaissance task. Keep it authorized and small enough to run. If the diagram includes a tool you cannot justify in a clause, remove the tool. The adult move is a short path with files to show for it.

        `,
        exercise: 'Design a repeatable Kali workflow for a small reconnaissance task, including tool order and output handling.',
      },
    ],
  },
  'network-recon': {
    id: 'network-recon',
    title: 'Network Reconnaissance',
    description: 'Map what a network publishes about itself. Passive first. An open port is not an invitation.',
    level: 'Advanced',
    estimatedTime: '8-10 hours',
    sections: [
      {
        title: 'Passive Reconnaissance',
        duration: '60 min',
        content: `
## Staying Under the Radar

Passive reconnaissance is the part of network work that looks like reading. You collect what the internet already published about a name, a domain, or a company, and you do not poke the company's live systems to see if they flinch. That is not cowardice. It is how you stay inside OSINT instead of accidentally running an unauthorized test and calling it curiosity.

This matters because most of what analysts need is already in registries, certificate logs, archives, and public DNS. Touching the target early creates logs, legal problems, and a false sense of progress. OSINT101 will let you get loud later, on lab ranges and written authorizations—not on a sample company you picked because the logo was handy.

Passive reconnaissance means gathering information without directly touching the target infrastructure. You query public databases, search engines, archives, and published datasets. You do not port-scan their office range. You do not throw a wordlist at their VPN. You do not "just check if the admin panel is up" on a network you do not own.

"Under the radar" is a side effect, not the mission. The mission is a defensible external picture. Quiet is a courtesy to the law and to whoever owns the logs. "The company is famous" is not authorization.

### After this section

You will be able to build a short passive report on a sample company from public sources only, name three pivot points that would justify deeper research *if* you had authorization, and keep your language honest: "appears in CT logs" is not "we scanned their perimeter."

### Core sources

- **WHOIS and registrar data** for ownership clues: registrant org when not redacted, registrar, creation and expiry dates, nameserver changes. Redaction is common. Absence of a name is a finding about privacy practice, not a dare to bypass it.
- **DNS records** published through public resolvers and passive DNS databases: \`MX\`, \`NS\`, \`TXT\`, \`A\`/\`AAAA\` as already published. Looking up a name the world already serves is not a siege. Zone walking a server you do not own is a different sport.
- **Certificate transparency logs** for hostnames somebody forgot were visible. You will find \`staging\`, \`vpn\`, \`jira\`, and the year someone thought hyphens were a security control.
- **Web archives** for historical content, old hostnames in page links, and naming conventions that died on the live site.

Add public job posts, engineering blogs, status pages, and GitHub orgs the company publishes. Those are still passive. They are how you learn they run a vendor you can later *name*, not exploit.

### Why passive first

- It is quieter.
- It establishes baseline context before active validation.
- It often reveals enough to narrow later steps dramatically.

The best first move is often "read what is already public" rather than "immediately make logs somewhere light up." If the passive pile already answers the intelligence question, stop. Extra packets are not extra professionalism.

### Workflow

1. **Write the question and the sample.** "What public infrastructure names and vendors appear for Sample Co., and which three facts would be worth authorized follow-up?" Do not write "hack Sample Co."
2. **Collect legal identity**: official domain from their public site, not a lookalike.
3. **WHOIS and registrar**: record dates, nameservers, registrar, and what is redacted.
4. **Published DNS**: note \`MX\`, \`NS\`, SPF/DKIM \`TXT\` fragments, and obvious service names via public lookup tools.
5. **Certificate transparency and archives**: list distinct hostnames; group them; pull old names from captures.
6. **Write three pivots**, each with a source and a *next lawful step*. A pivot is "CT shows \`vpn.example.com\`; if authorized, confirm it is still live." It is not a payload.

### Legal and ethical boundaries

Passive first. Active scans, brute-force enumeration, and exploit attempts belong only on authorized or lab targets. This course does not teach you to hack a company "to see what's out there." Unauthorized access remains unauthorized even when the banner is rude.

Do not use leaked internal docs you have no right to possess. Do not authenticate to a service with found credentials "just to confirm." Confirmation in this module means the record exists in a public source.

### Common mistakes

- Treating a lookalike domain as the company.
- Calling a CT hostname "their internal network."
- Skipping redacted WHOIS and inventing a person.
- Running a scanner because the passive phase felt too much like reading.
- Writing "vulnerable" when you mean "this hostname exists in a log."

### Field notes

> **Rule of thumb:** if your report's first verb is "we scanned," and nobody signed a scope document, you did not do reconnaissance. You did a favor for their SOC and a problem for ours.

Perform a passive reconnaissance report on a sample company and identify three likely pivot points for deeper research. Deeper means more public sources or, separately, authorized testing this exercise did not grant. Cite what you queried and when. If a pivot needs a packet to the company's hosts, label it *out of scope for this exercise* and still write why it would matter.

        `,
        exercise: 'Perform a passive reconnaissance report on a sample company and identify three likely pivot points for deeper research.',
      },
      {
        title: 'DNS and Subdomain Enumeration',
        duration: '75 min',
        content: `
## Reading the skeleton of an organization

DNS is the organization's skeleton as seen from the street. Names tell you how people thought the network should be organized, which vendors they hired, and which forgotten experiment still has a certificate. Enumeration, in this course, means assembling *externally visible* names from public sources and grouping them by likely function. It does not mean attacking a nameserver until it confesses.

This matters because names support defensive prioritization and lawful scoping. They are not a menu. A tidy \`www\` and \`mail\` story is a press site. The interesting structure is \`okta\`, \`vpn\`, \`gitlab\`, and \`legacy-shop-2019\`. OSINT101 can live with an incomplete map. It cannot live with an unauthorized zone transfer.

DNS tells you how a company names systems, separates environments, and occasionally forgets to hide test infrastructure with names like \`staging-old-final2\`. Read names as language. \`sso\` and \`idp\` are identity. \`citrix\` and \`vpn\` are remote access. \`help\` is people processes. Do not assume a name is reachable or important. A name can be a leftover certificate, a parked \`CNAME\`, or a marketing microsite from a product that died. Your grouping is a hypothesis about *function*, not a claim about vulnerability.

### After this section

You will be able to collect externally visible names from CT logs, public DNS, archives, and published datasets; group them by likely business function; and keep active brute-force and zone-transfer attempts off any network you are not authorized to test.

### Signals to collect

- Naming patterns across environments. If \`app-prod\` exists in public data, look for the same pattern in CT, not by blasting the zone.
- Mail, VPN, SSO, and remote access endpoints as they appear in public records and official documentation the company posted.
- Third-party services delegated through \`CNAME\` records: mail hosts, CDNs, ticketing, status pages.
- Forgotten subdomains exposed through certificates, archives, or *published* scan datasets. Using a commercial passive-DNS or CT search is still collection from a third party. Running your own mass scan of someone else's address space is not.

Passive DNS history, when you have a licensed or public source, shows names that resolved before. That is gold for grouping and for spotting churn. It is still not permission to visit every host with a tool banner.

### What good analysts look for

- Consistency in naming conventions, because consistency lets you predict where the next name *might* be, then check only public sources for it.
- Mergers, acquisitions, or legacy brands hiding in old zones and old certificates.
- Hosted services that reveal vendors and architecture choices.
- Risky clues about internal segmentation: hostnames that sound like they belonged behind a firewall and then learned about the internet.

"Risky clue" means "this would matter to a defender or a scoped tester." It does not mean you proved a hole.

### Workflow

1. **Anchor the domain.** Confirm the sample organization's primary domain from an official public page.
2. **Harvest names passively**: CT search, public DNS lookups for names you already have, web archives, job posts, official status or developer portals.
3. **Resolve published records** for those names via a public resolver: \`A\`/\`AAAA\`/\`CNAME\`/\`MX\`/\`TXT\` as applicable. Record the lookup time.
4. **Cluster by function**: identity, collaboration, remote access, mail, ecommerce, marketing, data, unknown.
5. **Flag third parties** whenever a \`CNAME\` or MX points at a vendor. Write the vendor name. Do not test the vendor.
6. **Deliver the map** as a table: name, record type, grouping, source, confidence. Leftovers (\`old\`, \`test\`, retired brands) are priority hints, not findings of compromise.

A scoped walk of a *lab* zone can be a teaching extra. It is not the default path for a live company you do not own.

### Legal and ethical boundaries

Passive first. Dictionary attacks against someone else's DNS, AXFR attempts, and wildcard blasting of their infrastructure require authorization. This module does not include a "hack this company" track. If a tool's happy path is "enter target and spray," you will use it only on ranges you are allowed to spray.

Do not authenticate to discovered SSO portals with guessed or breached passwords. Seeing that a portal exists is enough for this exercise.

### Common mistakes

- Treating every CT name as currently live.
- Grouping by letter of the alphabet instead of function.
- Assuming a \`dev\` name is harmless and an \`www\` name is sacred. Function and exposure are different axes.
- Copying a huge subdomain dump into a report with no grouping and calling it analysis.
- Following a \`CNAME\` into attacking a SaaS tenant you do not have permission to test.

### Field notes

> **Rule of thumb:** \`staging-old-final2\` is not a personality. It is a filing error that escaped. File it. Do not adopt it.

Map a target's externally visible subdomains and group them by likely business function. "Target" here is a sample you may lawfully study from public data, not a victim. If you cannot justify a group, use \`unknown\` and say what extra *public* source would help. Completeness is less important than a grouping another analyst could argue with.

        `,
        exercise: 'Map a targetâs externally visible subdomains and group them by likely business function.',
      },
      {
        title: 'Infrastructure Fingerprinting',
        duration: '70 min',
        content: `
## What is this thing and why is it yelling Nginx at me

Fingerprinting is educated gossip about a public service: what stack it probably runs, who probably hosts it, and which clues are strong enough to write down. It is not a vulnerability assessment, and it is not a magic banner that hands you a CVE and a speech. You will look at what an ordinary visit or a published record already shows. You will label speculation like an adult.

This matters because you need to know whether you are looking at a SaaS front door, a neglected appliance, or a CDN in a trench coat. Wrong platform guesses waste days. Vendor guesses change how you *prioritize*, not how you attack.

Fingerprinting helps you infer platforms, providers, and technologies from public indicators. A server header is a sentence, not a deposition. \`Server: nginx\` might be true, stale, or a reverse proxy covering something that would rather not introduce itself. WAFs lie for a living. CDNs speak on behalf of origin servers the way press offices speak on behalf of executives.

Your practical question is: what is the *probable* environment? Visit public sites the way a researcher visits them. Do not run exploit scripts or "vulnerability probes" against a company you are not authorized to test. Lab scope exists for the noisy parts.

### After this section

You will be able to fingerprint a public-facing service you are allowed to view, sort clues into strong, weak, and speculative, and infer hosting and application families without claiming certainty the headers did not earn.

### Common indicators

- Response headers: \`Server\`, \`X-Powered-By\`, cookie names, cache headers that smell like a particular CDN. Headers are cheap to fake. Still collect them. Then distrust them.
- TLS certificate details: subject, SANs, issuer, validity window. A cheap cert on an "enterprise SSO" name is a story. A managed PKI name is another.
- HTML comments, asset paths, and JavaScript bundles: \`/wp-content/\`, distinctive hashed chunk names, generator meta tags.
- CDN patterns and DNS provider metadata: nameserver brands, \`CNAME\` chains, anycast behavior described in public docs.
- Version leakage in login portals, default pages, or forgotten dashboards *that load without authentication*. If it wants a password, you stop at the login branding.

Public \`security.txt\` and status pages are underrated. People write the truth there.

### Practical goal

You are not trying to show off by naming every framework under the sun. You are trying to understand the probable environment well enough to support reporting, risk analysis, or the next lawful collection step. "Likely a major CDN in front of a common CMS" is a useful sentence. A bullet list of seventeen libraries from a marketing homepage is a museum exhibit.

### Reminder

Fingerprints are probabilistic. A header can lie, a WAF can obscure things, and one engineer somewhere is always doing something cursed. Write \`probable\`, \`possible\`, and \`unsupported\`. If you cannot explain why a clue is strong, it is not strong.

### Workflow

1. **Confirm you may look.** Public marketing site: usually yes. Someone else's login portal: observe the public page, do not authenticate unless authorized.
2. **Collect DNS and TLS first** from public lookups: nameservers, \`CNAME\`, certificate SANs and issuer.
3. **Retrieve the public landing page** and record status, headers, redirects, and visible generator hints. Save the capture time.
4. **Note application clues** in HTML and public JS paths. Do not fuzz parameters.
5. **Cross-check** with a second public source (job posts, engineering blogs, public tech reports). Agreement raises confidence.
6. **Label each clue** strong / weak / speculative, then write the fingerprint paragraph with uncertainty intact.

### Legal and ethical boundaries

Passive and public first. Active scans, default-community SNMP, and exploit PoCs are out of scope here and remain confined to authorized or lab targets when they appear elsewhere in training. No "hack this company" energy. No using fingerprinting as a preamble to guessing credentials.

Do not invent tool exploits or paste attack payloads into the report to look serious. Serious is a ranked clue list.

### Common mistakes

- Equating a header with a version you can "exploit."
- Ignoring the proxy and blaming the origin.
- Calling a SaaS login page "their server" when it is the vendor's.
- Collecting fifty clues and ranking none.
- Running a noisy scanner because the homepage felt too easy.

### Field notes

> **Rule of thumb:** if your fingerprint section reads like a shopping list of CVEs, you skipped the part where we asked what the thing *is*. Name the animal before you name the diseases.

Fingerprint a public-facing service and explain which clues are strong, weak, and purely speculative. Use a site you are allowed to study. The grade is the ranking, not the length of the technology laundry. If everything is "strong," you have not understood the reminder, and the reminder was the only part of this lesson that was trying to keep you employed.

        `,
        exercise: 'Fingerprint a public-facing service and explain which clues are strong, weak, and purely speculative.',
      },
      {
        title: 'Exposure Analysis and Prioritization',
        duration: '65 min',
        content: `
## Not all discoveries deserve equal panic

Reconnaissance produces lists. Intelligence produces ranked lists with reasons. Exposure analysis is the unglamorous skill of deciding which internet-facing facts deserve a defender's Tuesday and which deserve a footnote. Panic is not a prioritization function. Neither is alphabetical order, though it photographs well in a spreadsheet.

This matters because a dump of two hundred hostnames is not a briefing. A ranking of eight assets with operational rationale is. Organizations cannot patch vibes. Not every public name is an exposure. Some are supposed to be public. You will sort a pile of public or lab-discovered assets. You will not "hack the company" to make the ranking more exciting.

Recon produces a lot of findings. Most are context. Some are important. A few are the sort of thing that makes security teams inhale through their teeth. Context: \`www\` on a CDN, a public status page. Important: an authentication front door, a remote-access name, an admin-looking hostname that still answers according to a source you are allowed to use. Teeth: a forgotten service that appears unmanaged *and* privileged *and* still advertised. Even then, you describe exposure. You do not attach an exploit narrative you did not run.

### After this section

You will be able to apply a four-question prioritization model to a list of internet-facing assets, separate confirmed public presence from assumed risk, and write operational reasons a real team could act on—without inflating every finding to "critical."

### Prioritization model

1. Is the asset internet-facing? If you only saw it in an old archive and never in current public DNS or CT, say so. Historical is not current.
2. Does it handle authentication, admin functions, or sensitive workflows? SSO, VPN, mail admin, remote desktop portals. Public brochure sites usually lose this round.
3. Does the exposure reveal internal structure, software versions, or trust boundaries? A verbose error, a detailed certificate SAN list, a status page that names regions.
4. Is there historical evidence the asset was forgotten or unmanaged? Ancient last-seen in passive DNS, \`temp\` in the name, a brand the company retired in a press release.

Score qualitatively: high / medium / low investigative or *defensive* value. This course ranks for intelligence and defense, not for a bug-bounty writeup you were not invited to file. When two assets tie, prefer the one that affects identity or remote access.

### Reporting guidance

- Separate confirmed exposure from assumed risk. "Hostname appears in today's public DNS" is confirmed presence. "Therefore it is exploitable" is a fanfic.
- Describe why a finding matters in operational terms: "This is an authentication entry point visible in CT and current DNS; defenders should confirm ownership and logging."
- Recommend next steps that a real team could actually take: inventory, owner assignment, decommission, authorized test. Not "run this payload."

An analyst who can rank findings sensibly is more valuable than one who discovers everything and explains none of it.

### Workflow

1. **Normalize the list.** One row per asset: name, how you know it is internet-facing, date of evidence, source.
2. **Drop or quarantine** items you cannot lawfully talk about (stolen lists, unauthorized scan output from a live company).
3. **Run the four questions** on each remaining row. Write short answers, not vibes.
4. **Assign a rank** and a one-line operational reason. Sort high to low.
5. **Write three recommended next steps** that do not require you to attack the asset: confirm owner, confirm intended exposure, schedule authorized review.
6. **Sanity-check the top item.** If you cannot explain it to a tired CISO in two sentences, rewrite the reason, not the rank.

### Legal and ethical boundaries

Prioritization is not a license to validate with exploits. Passive evidence and authorized lab work only. Active scans stay on systems you own or are paid and scoped to test. No "we should just see if it shells." No publishing a ranked list that is effectively a targeting pack for strangers.

If the list came from a class dataset, say so. If it came from your earlier *passive* exercises, cite those sources. Do not blend in a weekend nmap of a random ASN.

### Common mistakes

- Ranking by how "hackable" a name sounds (\`admin\`, \`test\`) without checking whether it is current or even theirs.
- Calling every CDN edge a critical exposure.
- Using CVSS theater without a vulnerability you were authorized to confirm.
- Recommending "immediate shutdown" of the corporate homepage because it is internet-facing. It is supposed to be.
- Forgetting that third-party SaaS exposures are the vendor's incident path as much as the customer's.

### Field notes

> **Rule of thumb:** if everything is Priority One, you do not have priorities. You have a tantrum with row numbers. Pick fewer hills. Hills are expensive.

Take a list of discovered internet-facing assets and rank them by likely investigative or defensive value. Use the model. Write the reasons. If your top item is "because I could," start the list over. The exercise is judgment. Judgment is the product. The hostnames were only the raw material.

        `,
        exercise: 'Take a list of discovered internet-facing assets and rank them by likely investigative or defensive value.',
      },
    ],
  },
  'dark-web-research': {
    id: 'dark-web-research',
    title: 'Dark Web Research',
    description: 'What is actually on onion services, how to read a leak notice, and when to close the laptop.',
    level: 'Advanced',
    estimatedTime: '6-8 hours',
    sections: [
      {
        title: 'Dark Web Fundamentals',
        duration: '45 min',
        content: `
### The dark web is not a mysterious underworld. It is a network with different access requirements

Understanding what the dark web is and is not. Hollywood sold you a neon basement. What you have is overlay networks, most commonly Tor, that hide routing and make addresses harder to browse by accident. Journalists, dissidents, researchers, and criminals all use that architecture. The network does not pick a side. You do.

This module is defensive, journalistic, academic, and lawful research training. It is not a tour of buying stolen data, shopping a market, committing a crime, or hiding from law enforcement. If your objective requires any of those, you are in the wrong course.

### Why this matters

People collapse three internets into one spooky noun. They call a paywalled journal “dark web,” a dump “proof,” and Tor “invisibility.” Each mistake produces a bad report.

You need vocabulary precise enough to brief a manager, and a use-case filter: if you cannot name a legitimate reason to look, you do not look.

### What you'll be able to do

- Define surface web, deep web, and dark web without mixing them.
- List legitimate research, journalism, and defensive reasons someone might use Tor.
- Describe real risks (malware, illegal content, monitoring of exits) without turning risk into a how-to for evasion.
- Write a short justification for whether dark-web collection belongs in your work at all.

### Definitions that matter

- **Surface web**: Indexed by search engines, accessible to everyone. News sites, public profiles, company pages. Most OSINT should start here and often should end here.
- **Deep web**: Not indexed; needs credentials or a paywall. Medical records, academic databases, corporate intranets, webmail. Deep is not dark. Your bank site is deep web. It is not a plot.
- **Dark web**: Requires specific software (Tor, I2P) to access. Often associated with anonymity. Hidden services use special addresses, not a normal hostname in a normal browser.

Anonymity here means the network separates you from a simple IP-to-site story. It does not mean you are unaccountable or free to transact. Evidence does not vanish because the URL ends in \`.onion\`.

### Legitimate dark web uses

Stay inside this list unless your counsel and your mandate say otherwise.

- Journalism and source protection: official Tor mirrors so sources are not forced onto the casual-reader path.
- Whistleblower platforms: secure tip systems so insiders are not mailing evidence through the office copier.
- Privacy-conscious communication: ordinary browsing and publishing on hostile networks, not shopping.
- Academic research in restricted regions: reaching materials when a national filter is the problem.
- Security research: observe and document so victims can be warned. Study does not mean place an order.

If none of those map to your role, the use case may be “none.” That is an acceptable conclusion.

### Dark web risks

- Illegal content is more common. You can encounter material you are not permitted to possess. Have a stop rule.
- Honeypots and law enforcement operations exist. That is a reason for skepticism, not a tutorial in evading police.
- Malware is frequent. Treat downloads as hostile. Isolation protects the workplace laptop, not your disappearing act.
- Exit nodes can be monitored. Traffic leaving Tor toward the ordinary internet can be seen. That is architecture, not a prompt to invent a cleaner path.

> Your Tor browser does not make you invisible. It makes you look like everyone else using Tor, which is a different kind of visibility.

### Investigation workflow

1. Write the research question and lawful purpose in one sentence. If you cannot, stop.
2. Exhaust surface-web reporting and official statements first.
3. Decide whether a dark-web source would add anything you can verify. Curiosity is not a purpose.
4. If you proceed later in this module, plan isolation and official tooling only.
5. Document definitions and use cases before anyone touches a special browser.

### Legal and ethical boundaries

Observation for training, journalism, research, and defense. No transactions of any kind. No buying or sampling stolen data “to see if it is real.” No market participation. No advice, here or in your notes, on committing crimes or evading law enforcement. If a site invites you to purchase, create a vendor account, or “verify” a dump by downloading the goods, you leave.

### Common mistakes

- Calling everything unindexed “dark web.”
- Treating Tor as a costume that removes policy.
- Starting research on hidden services because it sounds advanced.
- Confusing a leak’s existence with the leak’s accuracy.

> **Aside.** Mystery is not a methodology. If the only thing you can say is that a site was hard to type, you have described a user interface, not an intelligence source. OSINT101 prefers a dull surface-web citation to a dramatic one you cannot repeat in daylight.

Your exercise: document the legitimate use cases for dark web access that apply to your work context. If the honest list is short or empty, write that down. Restraint is a finding.

        `,
        exercise: 'Document the legitimate use cases for dark web access that apply to your work context.',
      },
      {
        title: 'Access and Navigation',
        duration: '60 min',
        content: `
### Safe access requires proper preparation and realistic expectations

Setting up and using dark web resources without becoming a statistic. This lesson is isolation and official tooling so a session does not become a malware or policy incident. It is not about looking less like yourself to law enforcement, or reaching markets to buy anything.

If you do not have a documented lawful purpose, do not build the lab for fun. Curiosity is a poor change-control process.

### Why this matters

Hidden services are websites with worse manners. They break, lie, vanish, and some try to run code on visitors. Researchers who treat Tor like moody Chrome end up with a contaminated host and a story that starts, “I only opened it.”

A manager should hear “official Tor Browser, isolated VM, observation only,” not “I improvised a second personality and went shopping for context.”

### What you'll be able to do

- Describe a minimal isolated environment using a VM and Tor Browser from official sources.
- Explain why plugins, personal logins, and casual downloads do not belong.
- Navigate using verified addresses, not rumor URLs from comment sections.
- Keep the session in observation mode: read, note, leave. No accounts, no payments.

### Access requirements

- Tor Browser from official sources only. Use the Tor Project site or your organization’s approved channel. Third-party “safe Tor” bundles collect extra software you did not want.
- Virtual machine for isolation. A disposable guest contains crashes, hostile files, and the urge to check personal mail. Snapshot before you start. Revert when you finish.
- No JavaScript when policy says so. Hidden services like treating your browser as free compute. Default-deny is hygiene.
- Separate identity from normal browsing. No personal passwords, work SSO, or synced bookmarks.
- Realistic threat model. You are reducing malware and accidents, not becoming a ghost. If the model includes evading law enforcement, you are writing the wrong document.

### Finding sources

Start on the surface web. Newsrooms, NGOs, and academic groups publish official \`.onion\` mirrors in ordinary articles. Copy those from first-party pages you already trust.

- Directories like the Hidden Wiki (with skepticism). Treat them as unverified graffiti. Addresses go stale. Impersonators reuse reputations.
- Specific marketplace indexes. Do not use these as catalogs for purchase. This course does not train you to shop. If a journalist or defender names a market, treat the name as a claim to be aware of, not a storefront for stolen data.
- Forums and communities relevant to your research. Prefer journalism, vulnerability discussion, or civic reporting. If the main activity is trafficking or fraud, you do not need a seat.
- Reddit and other surface forums that monitor dark-web activity. Secondhand reporting is often enough. You may never need the original service.

### Navigation tips

- URLs are random hashes, not memorable. Bookmarking a typo lands you on impersonators.
- Sites disappear frequently. Record address, date, and what you saw. Do not chase every replacement link.
- Verify URLs through multiple sources. Two official pages beat twelve agreeing comments.
- Use research-oriented Tor search (for example Ahmia) for a lawful query, not a shopping list.

### Operational security

- Never use personal identifiers. No real name, work email, phone, or biographical recovery questions.
- Do not install plugins or extensions. Decorating the official browser gives fingerprinting a second chance.
- Do not stream content that might be malicious. You are not there for the cinema.
- Do not use your real email even if offered. If a site wants an inbox, you are being invited to participate. Decline.

### Investigation workflow

1. Confirm purpose and authorization in writing.
2. Create or revert a clean VM snapshot.
3. Install Tor Browser from the official source inside that VM only.
4. Collect candidate URLs from official surface-web pages first.
5. Open only what you can justify. Read. Screenshot. Leave.
6. Revert the snapshot. File dated notes. Do not keep random downloads “for later.”

### Legal and ethical boundaries

Isolation is for safety and evidence hygiene, not evading law enforcement. Do not buy, tip, subscribe, or otherwise transact. Do not create vendor or customer accounts. Do not access markets in order to purchase stolen data or anything else. Observation, not participation.

### Common mistakes

- Downloading Tor from a convenience mirror because the official site felt slow.
- Using the host browser “just to look at an address.”
- Saving every link from a directory as if listing were vetting.
- Building a lab before you have a question.

> **Aside.** A virtual machine is a pair of gloves, not a costume. OSINT101 will sign off on official Tor, a clean snapshot, and three boring official mirrors. It will not sign off on a scavenger hunt that ends at a checkout page.

Your exercise: set up a safe research environment and document three legitimate dark web resources relevant to OSINT research. Official newsroom or NGO mirrors beat any “interesting” market. If you cannot name three that are legitimate, document the gap and stop.

        `,
        exercise: 'Set up a safe research environment and document three legitimate dark web resources relevant to OSINT research.',
      },
      {
        title: 'Intelligence Sources and Collection',
        duration: '70 min',
        content: `
### Dark web sources for legitimate OSINT

What you can actually find that is useful and legal. The useful set is smaller than folklore and larger than “nothing.” Journalists, responders, and researchers sometimes need a hidden tip page, an official mirror, or a forum claim already on the surface web. They do not need a shopping cart.

This lesson stays in training, defensive, journalistic, and academic framing. You will not get advice on buying stolen data, entering markets to purchase, committing crimes, or evading law enforcement. If value appears only after you become a customer, skip the source.

### Why this matters

Collection without categories turns into tourism. People open hidden services because they are there, save a dump because it is large, and then possess material they cannot keep.

A category tells you what question a site could answer and what it must never be used for. Marketplaces can appear in reporting as advertised harm. They are not a procurement channel. Leaks can warn a victim. They are not a free enrichment API.

### What you'll be able to do

- Classify a candidate source before you spend time on it.
- Run a short observe-and-document workflow that starts on the surface web.
- Keep collection at observation: no accounts unless your organization has a written exception, and no transactions ever.
- Explain why a finding still needs surface-web corroboration.

### Source categories

- **Forums**: Discussions relevant to your research. Use them as claim generators. Users lie and boast. Quote the claim, not the persona’s rank.
- **Marketplaces**: Not for buying, but for understanding what is being advertised — and only when your lawful role requires awareness of advertised harm. Do not register, message vendors, request samples, or check out. Prefer a trusted surface-web report when that is enough.
- **Leaks and dumps**: Stolen data and credential exposure. A leak can support victim notification. Downloading bulk stolen personal data “to check” makes you part of the incident. Do not buy leaked data or use leaked credentials.
- **Governments and NGOs**: Whistleblower sites and secure tips. Often the most legitimate hidden services you will cite. Still take the official address from the organization’s own surface site.
- **Journals and archives**: Academic and journalistic sources. Official mirrors exist so readers in filtered networks can reach reporting. Treat them like the newspaper.

### Collection workflows

1. Identify relevant sources through surface web references. News, advisories, and NGO pages should name the thing first. If nobody reputable mentioned it, ask why you are the first tourist.
2. Access and navigate to verify legitimacy — only if step 1 justifies it, and only from isolated official Tor. Confirm the address against more than one trusted mention. You are checking the page, not joining it.
3. Document findings with source URLs and access dates. Screenshot the claim, not the entire dump.
4. Analyze for relevance and corroboration. A hidden-service post with no independent record is a rumor with extra cryptography.

The loop is observe, record, leave. If it looks like a conversation, negotiation, or payment, you have left OSINT.

### What to avoid

- Do not create accounts unless necessary — and “necessary” means a written organizational exception, not a gated thread. Prefer sources that do not require a login.
- Do not use the same handle as your real identity, or your work handle. Best is no handle at all.
- Do not download content without proper isolation. Prefer not downloading. Many “archives” are malware with a table of contents.
- Do not engage in any transactions. Do not buy, sell, bid, tip, donate, subscribe with payment, request a sample, or trade access — including stolen data, credentials, or anything a market lists. If value must move to “finish collection,” collection is finished.

> The goal is observation and documentation, not participation. Becoming part of the community you are studying is a failure state.

### Legal and ethical boundaries

Lawful purpose first. Isolation and official Tor if you access anything. No market purchases. No use of stolen data against accounts or networks. No coaching anyone on crimes or evading law enforcement. Your ethics policy still applies in a hidden service. The onion prefix does not delete it.

### Common mistakes

- Collecting dumps because they feel like primary sources.
- Treating a marketplace listing as confirmed inventory.
- Creating a “research” account that then chats and becomes a peer.
- Citing a hidden URL with no access date, as if the site will still be there Monday.

> **Aside.** If your notes include a price, a vendor, or a cart, you are no longer collecting intelligence. You are window-shopping in a place this academy does not window-shop. Observation is the job. Participation is a career change.

Your exercise: identify and document three dark web sources that could support legitimate OSINT research in your field. Official tip lines and newsroom mirrors count. Markets you would have to buy from do not. For each, write the category, the lawful use, and the line you will not cross.

        `,
        exercise: 'Identify and document three dark web sources that could support legitimate OSINT research in your field.',
      },
      {
        title: 'Verification and Source Validation',
        duration: '65 min',
        content: `
### Dark web sources require more verification, not less

The same source evaluation principles apply, with additional skepticism. Hidden services are unsigned comments in a bad neighborhood: real journalists, frauds in a journalist’s layout, recycled leaks with a new banner, and operators who want you to believe a useful story.

“I found it on the dark web” is a starting point for verification, not a conclusion. Difficulty of access is not quality. If the claim cannot survive surface-web records and ordinary source criticism, it does not get a promotion because the URL was ugly.

This lesson is how defenders, journalists, and researchers test those claims. It is not how to authenticate stolen goods by purchasing them.

### Why this matters

Dark-web citations have a swagger problem. Readers assume secrecy equals exclusivity equals truth. That reflex has laundered impersonator leak sites, outdated dumps, and forgeries into serious products.

Verification keeps the swagger out of the report and protects victims. Repeating an unverified dump can spread personal data — or a lie about someone who was never in the file.

### What you'll be able to do

- Run a four-layer check: corroboration, authenticity, freshness, motivation.
- Use surface-web discussion and official pages to test a hidden-service claim.
- Separate “this page exists” from “this page is who it says” from “this content is new and true.”
- Write uncertainty so a later reader cannot mistake a rumor for a finding.

### Verification layers

1. **Corroboration**: Does this align with other sources? Independent sources. Two mirrors of the same text are one source with a twin. Look for newsroom reporting and public statements that do not depend on the hidden page.
2. **Authenticity**: Is this actually the source it claims? Official \`.onion\` addresses are published on official surface sites. Check logos, previously published keys, and known writing. You are authenticating the outlet, not buying a sample.
3. **Freshness**: Is this current or recycled? Dumps circulate for years. A 2019 dataset with a 2026 title is a costume. Compare file names, record counts, and prior incident dates.
4. **Motivation**: What does the operator gain? Attention, ideology, extortion pressure, or wasting researchers. Motive does not prove a claim false. It tells you how hard you must work.

If a layer fails, downgrade the finding. If you cannot complete a layer, say so.

### Specific checks

- Look for signs of impersonation or parody. Slightly wrong domains, new keys, and “support chats” that want payment.
- Verify through surface web discussions. Researchers and journalists flag fakes in public. Treat those threads as leads, not gospel.
- Check when the site was first mentioned in reputable reporting. A brand-new “ministry leak portal” no desk has heard of is a hypothesis.
- Note political or ideological bias. Advocacy outlets still publish facts. They also select them.

Do not validate a dump by logging into victim accounts, purchasing access, or asking a vendor for a proof file. Validate by public impact: outage statements, already-public samples in reporting, indicators you already have a right to see.

### Handling uncertainty

- If you cannot verify, note it explicitly. “Unconfirmed hidden-service claim, no independent corroboration as of [date]” is a complete sentence.
- Do not present dark web findings without context: how you found the address, what official source published it, what you could not check.
- Consider whether the finding survives without the dark web source. If a reputable article already has the story, cite that.

> "I found it on the dark web" is not inherently impressive. It is a starting point for verification, not an ending point for conclusions.

### Investigation workflow

1. State the claim in one sentence, separate from the URL that hosted it.
2. Authenticate the outlet against official surface references.
3. Seek independent corroboration that does not loop back to the same files.
4. Date the content. Kill recycled material.
5. Write motivation, gaps, and a verdict: confirmed, probable, unverified, or rejected. Do not transact your way to certainty.

### Legal and ethical boundaries

Verification is documentary. It is not purchase, credential stuffing, or a hunt for a cleaner anonymity story. Isolation still applies if you reopen a hidden page. Do not advise anyone on evading law enforcement. If verification would require bulk stolen personal data you are not authorized to hold, stop and escalate.

### Common mistakes

- Equating inaccessibility with credibility.
- Corroborating a site with its own mirrors and calling that “multiple sources.”
- Publishing dump contents because the verification section felt thin.
- Letting a dramatic URL outrun a dull official denial or confirmation.

> **Aside.** Anyone can say they found something in a dim corner. OSINT101 grades whether the claim still stands when you turn the lights on. If it only works in the dark, it does not work.

Your exercise: take a dark web source and apply the full verification stack, documenting what you could and could not confirm. Put “I found it on the dark web” at the top, then make sure it is not the last line.

        `,
        exercise: 'Take a dark web source and apply the full verification stack, documenting what you could and could not confirm.',
      },
    ],
  },
  'cryptocurrency-investigations': {
    id: 'cryptocurrency-investigations',
    title: 'Cryptocurrency Investigations',
    description: 'Learn blockchain analysis basics for tracing transactions, identifying wallets, and connecting crypto activity to real-world entities.',
    level: 'Advanced',
    estimatedTime: '6-8 hours',
    sections: [
      {
        title: 'Blockchain Fundamentals',
        duration: '55 min',
        content: `
A public blockchain is a ledger that does not care about your case theory. It records transfers. It does not narrate them. Most “crypto OSINT” failures are not tool failures. They are people treating a book of addresses as a confession.

### Blockchains are transparent ledgers that everyone can read

Unlike a bank statement, a typical public chain can be read in a browser. That is the gift and the trap. You can see movement and amounts. You cannot see motive. You cannot see whether the sender meant payment, a test, or a typo. The work is to describe what is on-chain without inventing the rest.

This lesson uses public block explorers. You will open a transaction, read inputs and outputs, and write what the page shows. You will not “deanonymize Bitcoin.” You will learn to read a ledger like an adult.

### Why this matters

If you cannot separate on-chain fact from off-chain story, you will brief a map of hex strings plus a novel about who owns them. Decision-makers need a path, a timestamp, and an honest gap list. Public explorers also keep you in lawful OSINT: published ledger data, not an exchange break-in, and not a clustering heuristic dressed up as a name.

### What you will be able to do

- Explain a transaction’s inputs, outputs, amount, and time from a public explorer.
- State what a wallet address is and is not.
- Distinguish Bitcoin-style UTXO movement from Ethereum contract activity at briefing level.
- Document a source-to-destination path without claiming identity.

### What blockchains show

- **Transactions**: signed transfers in blocks — hash, status, fee.
- **Wallet addresses**: public identifiers. Not usernames. Not legal names.
- **Transaction amounts**: native units. Fiat conversion is convenience, not evidence of intent.
- **Timestamps**: block time — when the network accepted this, not when a human decided.
- **Transaction links**: a graph of movement. A graph is not a biography.

### What blockchains do not show

- **Real identities**: addresses are pseudonymous. A memo that happens to contain a name is a claim, not a verification.
- **Complete transaction purpose**: invoices and chat live off-chain.
- **Off-chain activity**: custodial balances and internal exchange ledgers never hit the public chain.

“Not shown” is a finding. Filling the blank with a vibe is not.

### Key concept: Pseudonymity

Addresses are not names. They can sometimes be *associated* with identities through other public or lawful records: a published donation address, a court exhibit, a company blog. Address reuse is a pattern you may observe. It is still a pattern, not a person.

Do not upgrade “this address paid a known merchant” into “we have the customer.” Do not upgrade “two addresses appear in one transaction” into “same human.” Clustering is analysis in the next lesson, not a magic identity trick.

Broadcast IPs are not a beginner OSINT product. You will not hunt them or be taught to hide them. If a public report already attributes a cluster, cite the report. Do not launder the citation into “I proved it on-chain.”

### Major blockchains

- **Bitcoin**: widely analyzed UTXO chain; most training traces start here.
- **Ethereum**: accounts plus contracts. Read token and internal-transfer tabs before you brief.
- **Stablecoins**: tokens that aim to track fiat. The peg is not a KYC label.
- **Layer 2 networks**: extra hops. A disappearance on L1 may be a bridge, not a morality play.

### Tools

- **Block explorers**: Blockchain.com, Etherscan. Start here and, for this course, mostly stay here.
- **Chain analysis platforms**: commercial labelers. Treat labels as sources with confidence, not as the chain speaking English.
- **Clustering tools**: group addresses that *may* be commonly controlled. Hypothesis generator. Not deanonymization.

### Working sequence

1. Pick a transaction hash from a public explorer.
2. Record block time, fee, and confirmation status.
3. List every input and output with amounts.
4. Note explorer labels as third-party, not as your discovery.
5. Write one paragraph of on-chain fact and one of unknowns.

### Legal and ethical boundaries

You are reading public ledger data. You are not advising anyone on mixing or “how not to get traced.” You are not claiming a courtroom identity from an address. Exchange records, if needed later, are legal process — not a browser trick.

### Common mistakes

- Calling an address “Jane’s wallet” because a blog said so once.
- Treating USD conversion as the on-chain amount.
- Ignoring change outputs and inventing a second counterparty.
- Using clustering language as if it were a name.

> **Rule of thumb:** The ledger is complete about transfers and silent about people. If your notes sound like a true-crime voiceover, you have left OSINT101. Put the name down. Put the hash back.

Your exercise is to trace a Bitcoin transaction through a public block explorer and document the path from source to destination. Write what moved, when, and between which addresses. Then write the sentence you cannot honestly write yet: who those addresses are. Leave that sentence blank on purpose.

        `,
        exercise: 'Trace a Bitcoin transaction through a block explorer and document the path from source to destination.',
      },
      {
        title: 'Transaction Tracing',
        duration: '70 min',
        content: `
Tracing is bookkeeping with better graphics. You start at an address, you walk inputs and outputs, and you stop when the public chain stops being useful. OSINT101 does not award points for following funds into fog and announcing you have “lost them,” as if the universe owed you a villain.

### Following the money through the blockchain

Transaction tracing connects addresses and describes movement. It does not identify a human. A clean trace answers: what left, what arrived, when, through which hops, and which *services* a public label claims sit on those hops. A sloppy trace answers: “it went to a mixer, so they are guilty,” which is neither analysis nor a personality.

Mark each hop as observed on-chain, labeled by a third party, or inferred by a heuristic. Mixing those sentences is how briefings get people hurt.

### Why this matters

Most real crypto questions are path questions first: did funds reach a known exchange deposit, a tagged merchant, a contract, or a dead end? Attribution, if it ever happens, sits on a boring trace. Skip the boring part and you will attribute fog.

### What you will be able to do

- Walk incoming and outgoing transfers without losing the amounts.
- Recognize simple sends, multi-output payments, change, and contract interactions.
- Apply clustering as analysis — a reasoned grouping, not a deanonymization claim.
- Record where the public trail thins without turning those limits into evasion advice.

### Basic tracing workflow

1. **Identify the starting address**: the in-scope address or hash. Write it. Do not start from a screenshot of a screenshot.
2. **Map incoming transactions**: who paid this address, in what amounts, over what window.
3. **Map outgoing transactions**: where value left. History, not guilt.
4. **Repeat recursively**: follow only hops that still answer the question. Recursion without a stop condition is a hobby.
5. **Identify clusters**: group addresses that *may* share control, and label the grouping as a heuristic.

Stop when you hit a service you cannot see through from public data, when amounts no longer reconcile, or when you are repeating yourself to feel busy.

### Transaction patterns

- **Direct transfers**: one address pays another. Document it. Do not decorate it.
- **Mixing services**: you may *observe* funds entering a publicly labeled mixer. Note the hop and the loss of visibility. You will not be taught how to use one or how to conceal a trail.
- **Multiple outputs**: several recipients are outputs, not automatically a crew.
- **Change addresses**: leftover UTXO value often returns to an address the sender controls. Wrong change calls create phantom counterparties.
- **Smart contract interactions**: DEX and DeFi calls can split or wrap value. Read internal and token transfers, not only the top-line “to” field.

### Clustering

Addresses are often *suspected* to be commonly controlled. That sentence is the ethic of this section.

- **Common spending**: multiple inputs can suggest common control. The heuristic fails when coins are coordinated without shared custody. Write “suggests,” not “proves.”
- **Change detection**: guessing which output is change. Document the rule you used.
- **Behavioral patterns**: similar timing or destinations can support a cluster. They do not mint an identity.

You do not unmask anyone because two inputs sat in one transaction. You say the graph is consistent with common control, confidence moderate, pending contradiction.

### Attribution databases

Commercial and public label sets tag exchanges, seizures, and services. They are sources, not the chain whispering a name. Use them to name a *service hop*, cite the labeler, and treat disagreements as the finding.

### Limitations

- **Mixers and tumblers**: they interrupt naive hops. Record the interruption. Do not workshop how to use one.
- **Cross-chain bridges**: value can leave one explorer’s universe. Follow only with a public destination you can open.
- **Privacy coins**: do not invent a Bitcoin-style path on a chain that does not publish one.
- **Layered hops**: many small transfers make tracing expensive in time, not mystical. Budget the work.

### Legal and ethical boundaries

Public-explorer tracing is lawful OSINT. Teaching evasion is not this course. No mixing recipes, chain-hop playbooks, or “how not to get clustered.” If a path reaches a regulated venue, further identity data — if it exists — comes through proper process.

### Common mistakes

- Following every dust payment because it looked busy.
- Calling a cluster “the suspect.”
- Treating an explorer emoji as primary evidence.
- Skipping token and internal tabs on Ethereum.
- Writing “the trail died” when you mean “custodial balance I cannot see.”

> **Rule of thumb:** A cluster is a seating chart, not a confession. If you brief a heuristic as a face, OSINT101 will assume you confused analysis with wish fulfillment. Count the outputs again.

Your exercise is to trace a real, public cryptocurrency transaction and document the full path, identifying any services or labeled entities you encounter. For each hop, mark observed, labeled, or inferred. If you cannot see through a service, stop and say so. That stop is professional.

        `,
        exercise: 'Trace a real cryptocurrency transaction and document the full path, identifying any services or entities encountered.',
      },
      {
        title: 'Real-World Attribution',
        duration: '65 min',
        content: `
This is the lesson where people try to turn an address into a human and look surprised when the chain refuses. Attribution is occasionally possible. It is rarely certain. OSINT101’s standard is that you can explain the method, the gap, and the confidence without a naming ceremony over a QR code.

### From addresses to people

On-chain data gives you movement. People live off-chain: published addresses, news, court exhibits, company pages, and — when the law allows — records at regulated venues. The hard part is refusing to promote a convenient arrow into a person.

You will practice a scenario on paper: tracing steps, methods, and confidence language. You will not pierce an exchange or claim you “doxxed a wallet.” If a name appears, a *source* said so, and you will cite that source like it might be wrong.

### Why this matters

Decision-makers ask “who?” because they have to act. Analysts who answer from a cluster and a hunch create legal debris. Honest attribution reduces uncertainty without manufacturing certainty.

### What you will be able to do

- Separate on-chain path facts from identity claims.
- List lawful public or process-based methods that can support attribution.
- Assign confirmed / probable / possible / unknown without inflation.
- Write a short attribution memo a compliance reader could audit.

### Attribution methods

**Exchange discovery**: when a path reaches a deposit publicly associated with a regulated exchange, KYC records *may* exist *there*. You do not have them because you used an explorer. You have a reason someone with authority might request them.

**Direct disclosure**: organizations publish addresses on donation pages, blogs, and slides. Verify the page is theirs. A random chat screenshot is not a signature.

**Transaction patterns**: similar timing to an identified cluster can support a *link between clusters*. It does not mint a legal identity.

**Business relationships**: payments to a publicly identified merchant create a commercial hop. You still do not have the invoice.

One blog post plus one hop is a lead. It is not a closed case.

### Compliance context

Recognize these mechanisms. Do not improvise substitutes.

- **SARs**: filed by obligated institutions under their rules. You are not a freelance SAR factory.
- **Travel Rule**: originator information may travel between obligated entities. It is not in your explorer sidebar.
- **Exchange cooperation**: identity data, when it exists, moves through legal process.

OSINT can show a hop to a venue. Authorized process may show a customer file. Do not collapse those steps.

### Attribution confidence

1. **Confirmed**: a direct, checkable link — an official page you archived that publishes the address, or a primary legal exhibit. Rare in open work.
2. **Probable**: several independent public indicators; no hard contradiction; still not something you would swear as fact.
3. **Possible**: a couple of indicators, or one strong but single-threaded source.
4. **Unknown**: the path is real; the person is not established. Unknown is an adult answer.

If you reach for “confirmed” because the story is tidy, you are doing public relations.

### Practical attribution workflow

1. Trace as far as public data honestly allows.
2. Identify services and labeled entities; cite the labeler.
3. Note which hops, if any, sit at venues that typically hold KYC — as context, not a trophy.
4. Assess whether any *authorized* process is even in scope. Students: usually no. Stop at the public path.
5. Document findings with confidence levels and a gap list. Name the claim, the support, and the kill-shot evidence you do not have.

### Legal considerations

Crypto activity can intersect money-transmission rules, securities questions, tax reporting, and sanctions lists. Document publicly visible facts. Flag when a hop *might* be relevant. Do not advise anyone on stepping around those regimes. Do not accuse a person because an address once touched a tagged service. Cite official publications for designations, not a random dashboard.

### Legal and ethical boundaries

Identifying a private individual must stay inside public records and published statements. No doxxing extras. No trophy hunting a home from a forum reuse. If the only path to a name is a stolen KYC dump, you do not take that path. Do not buy or traffic stolen credentials. Clustering remains analysis, not a naming right.

### Common mistakes

- Writing “the wallet belongs to X” when you mean “X’s site published this address.”
- Treating exchange discovery as identity in hand.
- Copying a commercial label into the voice of fact.
- Skipping confidence because the graph looks impressive.
- Offering any hint about how to avoid attribution.

> **Rule of thumb:** Certainty is a luxury good. Most of you cannot afford it. If your memo needs a drumroll before the name, delete the name and keep the drumroll for someone who brought a primary source.

Your exercise is to document a realistic cryptocurrency attribution scenario: tracing steps, methods, and confidence levels. Invent nothing that looks like evasion advice. If the honest end state is “unknown person, known path to a labeled service,” that is a complete product.

        `,
        exercise: 'Document a realistic cryptocurrency attribution scenario including tracing steps, attribution methods, and confidence levels.',
      },
    ],
  },
  'digital-forensics': {
    id: 'digital-forensics',
    title: 'Digital Forensics',
    description: 'Disk, browser, and timeline work for cases you are allowed to touch. A policy or a warrant comes before the coffee.',
    level: 'Advanced',
    estimatedTime: '12-15 hours',
    sections: [
      {
        title: 'Evidence Preservation',
        duration: '90 min',
        content: `
## The Chain of Custody

Digital forensics begins before anyone finds a smoking file. It begins when you decide that a piece of media might matter later, to someone who was not in the room and does not love you. Preservation is how you keep that future argument from becoming "we think it used to look like this." OSINT101 will tolerate a boring acquisition. It will not tolerate a clever one that changed the exhibit.

This matters because if the bits move and you cannot prove they did not, the rest of the analysis is a book report. Hash values and a chain-of-custody log answer where it came from, who touched it, and whether it is the same object. This lesson is lab-only. You image media you own or the instructor issued. You do not wander into a roommate's laptop with a USB and a documentary voice-over.

In forensics, how you collect evidence matters as much as the evidence itself. Chain of custody is the written story of control: received from whom, stored where, hashed when, handed to whom, sealed how. If a step happened and the log is silent, the step did not happen for professional purposes. Your memory is not a form.

Start the log before the first write-blocker click. Note lab ID, date, time zone, device identifiers, your name, and the reason. Never acquire a drive you are not authorized to image. "I found it" is not a warrant.

### After this section

You will be able to create a forensic image of a test USB drive using a write-blocked or lab-safe path, record acquisition steps a peer could repeat, hash and verify the result, and keep chain of custody in language that would survive a grumpy reviewer.

### Non-negotiables

- **Write blockers** prevent accidental changes during acquisition. Hardware blockers are preferred for physical media. If the lab uses a software equivalent or a dedicated imaging station, follow that SOP and write down which one. Do not mount the original as a convenient extra disk "just to peek."
- **Hashing** proves integrity before and after imaging. Use a documented algorithm your lab standardizes on (commonly SHA-256). Record the tool, the value, and the timestamp. A mismatch is a finding. You do not "try a different tool until the number looks friendlier."
- **Documentation** records every action, handler, and timestamp. If you pause for lunch, the log pauses with you.
- **Repeatability** ensures another examiner could follow your path without interpretive dance. Tool name, version, options, destination path, and verification result belong in the notes.

Use ordinary, documented imagers available in the lab. This lesson does not invent exploit chains, bypasses, or "hidden" acquisition tricks.

### Professional truth

If you cannot explain where the evidence came from, who touched it, and whether it changed, you do not have evidence. You have a problem wearing a name tag. A perfect analysis of a contaminated original is still a contaminated original.

### Workflow

1. **Confirm authorization and lab media.** Test USB only. Label it. If it is not yours or the course's, stop.
2. **Prepare the log** and the destination storage. Destination should be clean, large enough, and not the original.
3. **Identify the device** without mounting filesystems to browse. Note identifiers.
4. **Attach through a write blocker** or approved imaging station. Record how write-blocking was achieved.
5. **Acquire a forensic image** (bit-for-bit or the lab's stated format). Do not "copy interesting folders" and call it an image.
6. **Hash and verify** per lab SOP. Then seal, store, and sign the log. Analysis copies come from the image.

### Legal and ethical boundaries

Authorized lab images and authorized case media only. Do not image personal devices of classmates, employers, or strangers "for practice." Chain of custody is mandatory even when the "case" is a USB named \`TRAINING\`. Workplace investigations follow your jurisdiction and policy; this course does not deputize you.

Do not share images outside the lab controls. Do not hide a second copy "for convenience" without logging it. Hidden copies are how chains break and how people get fired.

### Common mistakes

- Browsing the original in the host OS because it was faster.
- Forgetting time zone on the log.
- Hashing the wrong file (the zip of the image, the shortcut, last week's image).
- Skipping write-block because "it is only a class USB." Class USBs teach habits. Habits migrate.
- Inventing a clever imaging flag you cannot explain.

### Field notes

> **Rule of thumb:** if the chain of custody is "I kept it on my desk near the good snacks," you do not have custody. You have a snack-adjacent exhibit. Courts are strangely unmoved by trail mix.

Create a forensic image of a test USB drive, record the acquisition steps, and verify the resulting hash. The image is not the trophy. The log plus matching hashes is the trophy. If verification fails, your report is the failure and the stop, not a shrug and a second undocumented try. That is preservation. Everything after this lesson assumes you did it.

        `,
        exercise: 'Create a forensic image of a test USB drive, record the acquisition steps, and verify the resulting hash.',
      },
      {
        title: 'Disk Imaging and Triage',
        duration: '95 min',
        content: `
## Start broad, preserve first, panic never

Triage is how you find the urgent fact without setting fire to the rest of the evidence. Imaging is how the rest of the evidence still exists after you found the urgent fact. Together they are a two-speed process: preserve the whole, then walk a checklist that answers the incident question first. Panic is a feeling. It is not a phase in the SOP.

This matters because incidents arrive with a clock and a crowd. If you only image, leadership waits. If you only poke the live disk, you alter timestamps. Triage on a working copy of a preserved image serves both clocks. You will design that checklist for a hypothetical exfil workstation on authorized lab images. You will not live-boot a corporate laptop you found under a desk.

Disk triage preserves the whole picture while still finding urgent facts quickly. Broad means you do not decide the story from the Desktop folder alone. Preserve first means the original is imaged *before* souvenir-hunting. Panic never means a missing folder is a lead, not a reason to remount the original. Analysis happens on lab images. You do not need novel exploits to list where Windows or Linux usually leave traces.

### After this section

You will be able to explain why imaging precedes browsing, list typical triage targets for a suspected exfil workstation, separate urgent leads from full-analysis tasks, and design a checklist someone else could run on a lab image without improvising.

### Typical triage targets

- User directories and downloads: the obvious staging ground. Sort by recent modification on the *image*.
- Browser artifacts and saved sessions: history, downloads lists, typed URLs. These answer "where did it go" more often than \`totally_normal.zip\`.
- Recently modified files: sudden archives, unusual sizes, names that try too hard to be boring.
- External storage traces: mount history, volume serials, shortcut trails to \`E:\\\`. Presence of a USB event is not proof of theft. Absence is not proof of innocence.
- Suspicious archives, scripts, and executables in user-writable paths. "Suspicious" means unexpected in context. It does not mean you detonate malware on your analysis laptop without a sandbox SOP.

Add cloud-sync folders the image actually contains, email exports, and the recycle bin. Exfil is often mundane: a browser upload, webmail, a USB.

### Triage mindset

- Do not change what you can avoid changing. Work from the image. Live collection follows the lab SOP, with every command written down.
- Document assumptions before you forget them. Profiles get shared. Write the assumption.
- Separate urgent leads from full analysis. Urgent: last 72 hours of downloads and large zips. Full: every prefetch file since install.

Triage is allowed to be incomplete. It is not allowed to be silent about what you skipped.

### Very common mistake

People love to poke around directly on original media because it feels fast. It is also how evidence gets altered and examiners get very unpopular very quickly. The second mistake is imaging, then triaging with no question.

### Workflow

1. **Write the incident question.** "What evidence on this lab workstation image suggests data left the box in the last week, and what is still unknown?"
2. **Confirm you have a verified image** (hashes, log) before analysis. If you do not, go back to preservation.
3. **Snapshot your analysis environment** enough that you can say which tools and versions you used.
4. **Run the target list** in a fixed order. Record hit / no hit / not present on this OS.
5. **Park full-analysis items** on a second list with owners and time estimates.
6. **Draft the checklist** as reusable steps, not a diary of this one disk. Note contradictions (clock skew, dual-boot) instead of silently "fixing" times.

### Legal and ethical boundaries

Authorized lab or case images only. Do not triage a colleague's machine to "practice exfil." Analysis copies, not shadow USB clones. Do not invent exploit techniques to dump credentials or crack disks you were not given keys for. If the image is encrypted and the lab did not provide a key, the finding is "encrypted, key not available."

Privacy still applies inside a disk image. Collect what the question needs. Out-of-scope personal folders get a note, not a slideshow.

### Common mistakes

- Triage on the original.
- No time box, so triage becomes the whole exam.
- Treating any USB insertion as the crime.
- Skipping browser artifacts because command line feels more elite.
- Writing a checklist only you understand ("check the usual stuff").

### Field notes

> **Rule of thumb:** fast is not the opposite of forensic. Fast-and-undocumented is. If you cannot hand the checklist to the next examiner, you did not triage. You rummaged.

Design a triage checklist for a workstation suspected of being used in data exfiltration. Make it runnable on a preserved image. Include the urgent targets, the "do not touch the original" line, and a parking lot for deep work. If it only works when the examiner already knows the answer, it is a hint, not a checklist.

        `,
        exercise: 'Design a triage checklist for a workstation suspected of being used in data exfiltration.',
      },
      {
        title: 'Timeline Reconstruction',
        duration: '80 min',
        content: `
## Telling the story of what happened

A disk full of artifacts is a junk drawer. A timeline is the same drawer emptied onto a table in the order the clock claims things happened. Reconstruction is how you test stories: the user's story, the ticket's story, and the story you were about to fall in love with. OSINT101 prefers the clock, with all its known failure modes, over a dramatic single file.

This matters because sequence turns "a USB was used" and "a zip appeared" into order—or it fails to, which is equally valuable. Without time, you have a pile of nouns. You will build a short incident timeline from mixed browser, file, and log artifacts on authorized lab material, and identify a gap. Gaps are not failures. Unnamed gaps are.

Forensic analysis gets much stronger when you stop looking at artifacts in isolation and start building a timeline. "Story" here means ordered events with sources, not a screenplay. Each row should survive the question: who recorded this time, in what time zone, and what does the artifact actually assert?

Start from the incident question, not from year zero of the filesystem. A two-day window beats a five-year archaeology project. Work only on lab images. You do not need exploit tooling to read history databases or exported event logs.

### After this section

You will be able to name the usual timeline sources on a workstation image, merge heterogeneous timestamps into one working narrative with source tags, and produce a short timeline plus one evidence gap.

### Timeline sources

- File system timestamps: created, modified, accessed, and extra attributes where the OS keeps them. Know which ones update cheaply. \`atime\` will betray you if you let it.
- Browser history and download records: typed URLs, visit times, download end times. Export from the image copy of the profile.
- Shortcut files, recent documents, and shellbags: "this path was touched" evidence. Powerful, easy to over-read as intent.
- Event logs and authentication events: logon types, lock/unlock, service starts. These are how you notice a remote session while the "user" was supposedly at lunch.
- External device connection records: first/last insertion, device IDs. Pair them with file times on the same window.

When sources disagree, do not average the clocks like a committee. Record both and write the conflict. NTP drift, dual boot, and "someone set the clock to 2011" are real.

### What a timeline reveals

- Sequence of user activity, or at least of *recorded* activity.
- Gaps, bursts, and anomalies: a dead hour, a 400-file copy in four minutes, a browser that wakes at 03:10.
- Possible staging before an incident: archive creation, folder bursts, cloud-sync storms.
- Contradictions between claims and actual system behavior.

A timeline is the closest thing digital evidence has to a witness who never gets tired, only weird. Weird includes scheduled tasks and that one updater that looks like a person.

### Workflow

1. **Fix the question and the window.** "What ordered events on this lab image relate to possible data leaving the system between Monday 09:00 and Tuesday 18:00 local, and where are we blind?"
2. **List sources you actually have.** Missing Security log is a gap you write now.
3. **Extract events into a common table**: time (with zone), source, artifact, what it supports, confidence.
4. **Normalize time zones** explicitly. If an artifact is UTC and the ticket is local, convert in the table, not in your head.
5. **Sort and cluster.** Label bursts. Filter noise with a rule you write down.
6. **Mark the gap** that most threatens the story, then write a short timeline (twelve lines or fewer) with the full table attached.

### Legal and ethical boundaries

Authorized lab images and authorized case data only. Chain of custody still applies to exports. Do not pull a classmate's browser history. Do not use stolen disk images from the internet.

Do not invent parser exploits or anti-forensic "defeat" techniques. If anti-forensics is suspected, say what evidence is *missing*. Missing is allowed. Fan-made bypasses are not the lesson.

### Common mistakes

- Mixing time zones until the USB appears after the upload that used it.
- Treating every LNK as intent.
- Building from one artifact family because it was pretty in the GUI.
- Filling a gap with a guess and formatting the guess like a log line.
- Calling the timeline complete because it is long.

### Field notes

> **Rule of thumb:** if your timeline has no holes, you did not finish. You wallpapered. I can hire wallpaper cheaper than I can hire an examiner.

Build a short incident timeline from mixed browser, file, and log artifacts and identify one gap needing more evidence. Mix means at least two families, preferably three. The gap should be specific: "no prefetch for the interval" beats "more research needed." If you cannot point at the rows, you do not have a timeline. You have a synopsis, and synopses are how movies get funded, not how cases get closed.

        `,
        exercise: 'Build a short incident timeline from mixed browser, file, and log artifacts and identify one gap needing more evidence.',
      },
      {
        title: 'Artifact Analysis and Reporting',
        duration: '85 min',
        content: `
## Artifacts are clues, not magical truth crystals

Artifacts are fossils. They record that something interacted with a system. They do not narrate motive, and they do not apologize when you over-read them. Analysis is the work of saying what an artifact *is*, what it *can* support, and how sure you are. Reporting is the work of saying that in a tone that would not embarrass you if read aloud.

This matters because a USB event, a download record, and a zip might be a story—or a coincidence sharing a Tuesday. The finding is the argument that connects them. Readers act on findings, not SQLite dumps. You will write a short forensic finding from three related artifacts on authorized lab material, with confidence and a next step.

Artifacts need context. A deleted file, a USB event, and a browser session each mean more when interpreted together. Context includes the OS, the user profile, the time window, and the *question*. The same recycle-bin entry is a shrug in a cluttered lab image and a problem in a clean kiosk image two minutes after a policy violation window.

State the mechanism: this database records visits; this log records device arrivals. If you cannot state the mechanism, you are decorating. Use documented parsers. Do not invent exploit-based parsers for this report.

### After this section

You will be able to group common artifact families, interpret three related artifacts together, and write a finding with confidence, falsifiers, and a next step calm enough for counsel.

### Common artifact families

- Browser history, cookies, and cached content: where a profile went and what it saved. Cookies are not a diary of guilt. Cache can outlive the tab.
- Link files and recent file references: paths that were referenced. Excellent for showing a path existed and was touched. Weak for proving *which person* intended *what*.
- Registry and operating system configuration traces (on Windows lab images): USB hints, typed paths, depending on what the image actually contains. Quote the key or artifact name. Do not wave "the registry says."
- Application logs and crash records: sometimes the only honest timestamp in the room. Sometimes a crash is just a crash.
- Recycle bin, temp files, and remnants of attempted cleanup: cleanup is a behavior. It is not automatically consciousness of guilt.

Three related artifacts means they share a window, a path, a device, or a user profile. Unrelated trophies glued together are a collage.

### Reporting rule

- State what the artifact is.
- State what it suggests.
- State how confident you are.
- State what would strengthen or weaken that conclusion.

Forensic reporting should read like calm expertise, not like a thriller narrator who has just discovered a hexadecimal plot twist. Prefer: "The download record and the zip's filesystem times are consistent with staging in this window (moderate confidence). A matching cloud-sync log would strengthen; clock skew would weaken."

### Workflow

1. **Restate the question** in one line at the top of the finding.
2. **Select three related artifacts** from the lab image or the scenario packet. Name them precisely (path, artifact type, timestamp).
3. **Describe each** in isolation first: what it records, what it does not.
4. **Combine** only where the overlap is real (same hour, same path prefix, same device ID).
5. **Assign confidence**: low / moderate / high, with a reason that cites independence of the three.
6. **List one strengthener and one weakener**, then recommend an authorized, specific next step. If you cannot think of a weakener, your confidence is too high.

### Legal and ethical boundaries

Authorized lab and case images only. Findings leave the lab through official reporting channels, not screenshots in group chat. Chain of custody includes the exports attached to the report. Do not include exploit instructions, credential dumps you were not asked to produce, or cute bypasses.

Minimize unrelated personal data in the writeup. You can cite \`Users\\Alex\\Downloads\\export.zip\` without narrating Alex's family photos in the same folder.

### Common mistakes

- Treating three artifacts as proof because the number three feels official.
- Hiding uncertainty in passive voice ("it was determined").
- Reporting tool output as if the tool were a witness.
- Recommending an action nobody could take (magic logs that were never configured).
- Writing "the user stole data" when the artifacts show "a zip was created and a URL was visited."

### Field notes

> **Rule of thumb:** if your finding needs a drumroll, delete the drumroll. If it needs a villain, you are writing fanfic on company time. Give me the artifacts, the confidence, and the next boring step.

Write a short forensic finding from three related artifacts, including confidence level and recommended next steps. Short means a reader can finish it before their coffee cools and still know what to do. If you cannot fit the four reporting-rule bullets, you do not have a finding yet. You have notes. Notes are how analysis starts. Findings are how it leaves the room without starting a new incident in Legal.

        `,
        exercise: 'Write a short forensic finding from three related artifacts, including confidence level and recommended next steps.',
      },
    ],
  },
  'breach-data-analysis': {
    id: 'breach-data-analysis',
    title: 'Breach Data Analysis',
    description: 'Learn how to search, analyse, and interpret data from known security breaches for OSINT investigations. Understand credential stuffing, exposure assessment, and timeline analysis.',
    level: 'Intermediate',
    estimatedTime: '2-3 hours',
    sections: [
      {
        title: 'Understanding Breach Data',
        duration: '20 min',
        content: `
A breach is an organization’s failure that becomes everyone else’s rumor. The useful part for OSINT training is not a pile of other people’s passwords. It is the *public fact that a breach was reported*, what classes of data the reporters say were involved, and whether an address *you control* was listed. OSINT101 will teach you to read that metadata. It will not teach you to collect a dump.

### What Breach Data Contains

When a company or researcher describes a breach, they usually talk in categories:

- **Credentials**: the fact that email-and-password pairs were among the taken fields — later described as hashed or plaintext. The *category* is the public finding. The actual pair is not your homework.
- **Personal data**: names, addresses, phones, dates of birth, as *reported* in notices and journalism.
- **Financial data**: payment fields alleged to have been taken. You will not handle card numbers.
- **Internal communications**: mentioned in incident write-ups; you do not go hunting the zip file.
- **Source code and keys**: common in incident blogs. Still not a reason to download someone else’s repo.

Hold the distinction: **reported contents** versus **possessing the contents**. This course uses the first. The second is how people wander into possession offenses.

### Why this matters

Exposure assessment starts with “was this mailbox in a named incident, and what did the *notice* say was taken?” That question helps you — or a client who asked you to check *their* addresses. It is not how you build a dossier on a stranger from a stolen list.

### What you will be able to do

- Read a public breach notice or HIBP entry for data classes and dates.
- Check **email addresses you own** on Have I Been Pwned and record what is returned.
- Explain why dumps, cracked-password shops, and “combo lists” are out of scope.
- Write an exposure note that does not include anyone’s password.

### Common Sources

Treat this list as a map of the landscape, including the parts you will walk around.

- **Have I Been Pwned**: enter an address you control; it returns named breaches and data classes. That is the approved classroom tool.
- **Dehashed, paid dump browsers, cracked-password stores**: they exist. This course does not use them.
- **IntelX and similar**: some have legitimate corporate roles. “Dark web search” is not a hall pass to download packs. Employer contracts and counsel are their problem, not this exercise.
- **Public Telegram channels that advertise leaks**: they exist to distribute stolen files. You will not join them for collection. A journalist’s *article* about a leak is a source. The pack in the channel is not lab data.
- **RaidForums / Breached and successors**: historical names so you recognize old write-ups. Not a shopping list.

If a site’s pitch is “paste an email, get a password,” close it.

### Legal and Ethical Boundaries

- Accessing or keeping stolen data can be illegal where you sit. “I was researching” is a weak brand.
- Viewing or using leaked credentials of a living person — especially to log in — is not OSINT.
- Never use a breached password to open an account “just to confirm.” Confirmation is what HIBP’s metadata is for, or a password reset *you* initiate on *your* account.
- Do not download, share, or seed breach dumps. Do not buy them. Do not buy or traffic stolen credentials.
- Document the *public* source: the HIBP page, the company’s notice, the regulator’s statement. Document the legal basis: it is your email, or it is a public notice with no credential payload.

Pivots from here are conceptual: “HIBP says this address appeared in a 2019 forum breach that included email addresses” → you check *your* reuse habits. Not: “then we open the dump.”

### Working sequence

1. Choose three addresses you own.
2. Check each on Have I Been Pwned.
3. For every hit, record breach name, reported date, and data classes — not secrets.
4. Open the linked public explanation when HIBP or the company provides one.
5. Write what you will change on *your* accounts. Stop.

### Common mistakes

- Treating a headline’s victim count as a personal finding about a stranger.
- Pasting a colleague’s address “to help” without a documented request.
- Keeping screenshots that include a password someone else leaked.
- Assuming “it’s already public” means you may possess and spread the file.
- Calling dump shopping “collection.”

> **Rule of thumb:** Other people’s passwords are not a research library. They are stolen house keys in a box. OSINT101 does not grade how many keys you can fondle. Check your own locks. Write down the incident names.

Your exercise is to use Have I Been Pwned to check three email addresses **you own** and document which breaches they appear in. Record names, dates, and data classes. Do not record passwords. If HIBP shows none, document that — a clean bill is still a result, and it is a better one than a folder you should not have.

        `,
        exercise: 'Using HaveIBeenPwned, check 3 email addresses you own and document what breaches they appear in.',
      },
      {
        title: 'Credential Analysis Workflow',
        duration: '30 min',
        content: `
This lesson is about explaining exposure — not handling other people’s stolen passwords. Work from public breach *metadata* and, for pattern practice, a **fictional or instructor-provided exercise set**. You will not extract live credential pairs, crack hashes, or try a password against a login form.

### From Breach to Intelligence

Rewrite the amateur workflow into something you could say in front of counsel:

1. **Identify relevant breaches** for an email *you own* (or a mailbox a client authorized in writing). Use Have I Been Pwned or the organization’s public notice. The output is incident names and data classes.
2. **Do not extract credential pairs** from dumps, markets, or paste sites. If a pair appears in an official exercise file, treat it as a prop. If it appeared in the wild attached to a real person, you should not have it.
3. **Analyse password patterns** only on props or on *your* old passwords that *you* choose to examine. Themes — season plus year, company plus “123” — are the lesson. The string is not a trophy.
4. **Correlate across breaches** at the metadata layer: same address listed in 2016 and 2021; data classes included passwords both times. That supports a *reuse risk* hypothesis for the owner. It does not require the actual 2016 secret.
5. **Assess exposure risk** as advice to the owner: rotate credentials, enable MFA, review sessions. Not as a map of which stranger accounts you could open.

Intelligence here is “this mailbox has a public exposure history that implies password reuse risk.” It is not a cracked string and a grin.

### Why this matters

Defenders get asked “how bad is it?” after a notice. The honest answer uses dates, classes, and the owner’s own reuse knowledge. The dishonest answer uses a purchased list. Stolen credentials are not just another OSINT source in this course.

### What you will be able to do

- Turn HIBP-style metadata into a short exposure judgment.
- Explain what a password *theme* can suggest, using only exercise data.
- State why cracking and dump shopping are out of bounds.
- Write recommendations that target the account owner, not an attacker’s next step.

### Password Analysis

When you are *allowed* to look at a fictional example, passwords can reveal themes: a year or pet name the owner already publishes; company-plus-season policy shapes; the same exercise string on two fake sites.

Brief *the owner*: “if you used a company-plus-year pattern, assume it traveled.” Do not guess a stranger’s mailbox. If the exercise file says \`Summer2020!\`, your note is season, year, complexity theater — not a how-to for the next summer.

### Password Cracking Context

You will hear that many stolen passwords are stored as hashes, and that specialists recover weak ones with serious hardware. That context exists so you understand why a notice says “hashed” versus “plain,” and why hashed is not the same as safe.

This course does not teach cracking tools, GPU rental, or pre-cracked databases. Those stores sell other people’s secrets. Do not buy or traffic stolen credentials. A future lab with a lawful, authorized role will have policy and a lawyer — not this lesson as a citation.

Using recovered passwords against accounts is unauthorized access. “I wanted to see if it still worked” is a confession, not a methodology.

### Working sequence

1. Start from authorized metadata (your HIBP results or a public incident notice).
2. List incidents and classes in a table.
3. Open the instructor’s fictional sample if provided — not a file you found on a forum.
4. Describe themes in words. Do not reproduce long lists of real-looking secrets in a shared channel.
5. Write owner-centric recommendations.
6. Delete any real secret that accidentally landed in your notes.

### Legal and ethical boundaries

Do not download dumps. Do not distribute them. Do not use others’ leaked passwords. Do not test credentials. Do not offer to “just check” a friend’s login. Pivots stay conceptual: metadata → owner behavior → defensive action. If your curiosity points at a stranger’s mailbox, that is the end of the path.

### Common mistakes

- Pasting exercise passwords into real sites “to see.”
- Keeping a personal archive of leaks “for later cases.”
- Treating hash type as a puzzle you must solve tonight.
- Writing attacker next-steps instead of owner next-steps.
- Calling a combo list a dataset because it arrived as CSV.

> **Rule of thumb:** A password theme is a story about how someone invents secrets, not a ticket into their life. If your workflow has a step named “extract pairs,” OSINT101 will extract you from the module. Use the prop file. Check your own HIBP.

Your exercise is to analyse a known breached credential from a **test or exercise dataset, not a real person’s leak**. What patterns can you describe? What intelligence would you give the *fictional owner*? If you do not have a prop file, invent one obviously fake string (\`TrainingHorse-2018\`) and analyse that. Do not go looking for a real one to make the homework feel authentic.

        `,
        exercise: 'Analyse a known breached credential (use a test/exercise dataset, not real). What patterns or intelligence can you extract from the password?',
      },
      {
        title: 'Timeline and Correlation',
        duration: '25 min',
        content: `
A single breach notice is a point. Several notices on the same mailbox are a timeline — one-off versus reuse habit — without opening a dump. OSINT101 builds that timeline from **publicly reported metadata**: incident names, dates, and data classes. Not from a folder you should not possess.

### Building a Breach Timeline

When the same address you are allowed to study — **yours**, or a mailbox you have written authorization to assess — appears in multiple public listings:

1. Order incidents by the *reported breach date* or notice date, and say which you used. Dates are often approximate.
2. Track *classes* exposed at each point, as the public notice or HIBP entry states.
3. Ask defensive questions: did the owner change behavior? Answer from the *owner*, or from later metadata that still lists password as a class — not from comparing stolen strings.

You will not download “a known public breach dataset” as a file of rows. “Public” in journalism is not “you may possess the payload.” Use HIBP for your addresses, company notices, and reputable reporting. That table is the dataset. A **fictional multi-incident sheet** from an instructor is the lab if you need more rows.

### Why this matters

Exposure is a process, not a jump scare. A 2012 forum listing and a 2024 retail notice tell different stories. Decision-makers need sequence: what was already burned, what class repeated, what is still undone. Without dates, everything feels like “they are pwned” — a mood, not an assessment.

### What you will be able to do

- Build a dated table from HIBP and public notices.
- Correlate incidents at the level of address and data class, not password text.
- Write a short assessment that an owner could follow.
- Refuse raw-dump correlation and still produce a useful product.

### Cross-Breach Correlation

Stay at the metadata layer:

- The same **your** email listed in several incidents indicates that address was active on those services *as reported*.
- You do **not** infer password changes by comparing leaked secrets. A later incident that still lists “passwords” means password material was *taken again*.
- A work address in a consumer-service incident (via a notice or your own HIBP) is an OPSEC lesson for the owner — not a license to hunt coworkers.
- New addresses you *own* in recent notices can show migration or more surface. Confirm with yourself, not a stranger’s dump.

Conceptual pivots only: incident name → service type → “I still have an account there” → I log in *as myself* and review security settings. Not: incident name → download → pivot to a second victim.

### Assessment Report Template

A structured exposure note, owner-facing:

- **Subject**: the mailbox you are allowed to assess (yours, in class).
- **Breaches found**: names, reported dates, sources (HIBP, official notice, news).
- **Exposure severity**: classes only — credentials *as a category*, PII classes, financial classes, or none listed.
- **Password analysis**: not a recovered string. Write reuse *risk* from repeated password *classes* plus the owner’s own admission. Label fictional lab sheets as lab.
- **Recommendations**: unique passwords or a manager, MFA, session review, monitor *your* HIBP. No “try these credentials on other sites.”

Include confidence: HIBP can lag; notices can misstate classes; dates can mean theft or disclosure. Say which you used.

### Working sequence

1. Copy your HIBP results; add official notices you can link.
2. Sort by date; footnote date ambiguity.
3. Add a column for data classes and a column for “owner still uses this service?”
4. Write three bullets: what repeated, what was unique, what you will do this week.
5. Do not attach a dump. Do not paste a password. Do not add a coworker “for comparison.”

### Legal and ethical boundaries

Do not buy or traffic stolen credentials. Do not download dumps to “complete the timeline.” Do not use others’ leaked passwords. Payload work is not a more advanced version of this lesson. A public notice is citable. A file named \`ServiceZ_full.csv\` in your drive is a problem.

### Common mistakes

- Ordering by the day you felt bad instead of the reported date.
- Treating victim-count journalism as personal timeline events.
- Correlating two people because they share a first name and a year.
- Putting real password text in a shared classroom doc.
- Calling a Telegram leak post a “public dataset” and saving the attachment.

> **Rule of thumb:** A timeline is a calendar, not a scavenger hunt through stolen mail. If your correlation step requires a dump, you are not correlating. You are collecting contraband and calling it rigor. OSINT101 prefers the boring table — the one you can show a lawyer without changing color.

Your exercise is to map a timeline for a single authorized subject across multiple incidents. In class, that subject is **you**: use HIBP plus public notices. If you want more rows, ask for the fictional multi-breach sheet — do not shop for a real dump to make the chart look busy. Lawful is the assignment.

        `,
        exercise: 'Take a known public breach dataset and map out a timeline for a single target across multiple breaches.',
      },
    ],
  },
  'osint-reporting': {
    id: 'osint-reporting',
    title: 'OSINT Reporting and Presentation',
    description: 'Transform raw intelligence into actionable reports. Learn structured analytical techniques, source citation standards, and how to present findings to different audiences.',
    level: 'Intermediate',
    estimatedTime: '3-5 hours',
    sections: [
      {
        title: 'The Intelligence Product Framework',
        duration: '20 min',
        content: `
Collection that never becomes a product is a hobby with screenshots. A product is a document someone else can use without calling you to interpret your adjectives. OSINT101 treats reporting as part of the investigation, not as a sulky afterthought you write when the coffee is gone.

### Why Reporting Matters

Good OSINT is invisible if the report is bad. Your analysis is only as valuable as another human’s ability to act on it without inheriting your confusion. A report that hides uncertainty is not “confident.” It is a liability with a title page.

Readers will forward your file. They will strip your caveats. They will quote your first sentence in a meeting you are not in. Structure is how your bottom line survives other people’s attention spans.

### Why this matters (in practice)

The same facts can be a spot alert, a brief, or a deep dive. If you only know the shape of your notes, you will deliver a junk drawer to a director and a slogan to an analyst. Product type is a choice. Choose it on purpose.

### What you will be able to do

- Name the product you are writing and cut what that product does not need.
- Put the conclusion first without letting it outrun the evidence.
- Separate facts, judgments, and gaps in language a second reader can audit.
- Rewrite a finished investigation summary using the Pyramid Principle.

### Types of Intelligence Products

- **Spot Report**: one finding, now. If you need a table of contents, it is not a spot report.
- **Situation Brief**: several sources, one current picture, short enough to read standing up.
- **Deep Dive**: method, exhibits, and the long argument. Show work; do not hide that you lack a conclusion.
- **Threat Assessment**: risk, likelihood, impact, and what a decision-maker could actually do. If there is no decision, it is a brief wearing a helmet.
- **Periodic Summary**: what changed since last time. If nothing changed, say so.

Pick the smallest product that answers the requirement. Inflating a spot finding into a deep dive does not make it truer. It makes it later.

### The Pyramid Principle

Start with the conclusion, then support it. This is not a license to bury doubt. It is a license to stop making the reader mine for the point.

1. **Bottom line up front** — one sentence that states the key finding *and* the confidence. “X appears to be Y (moderate confidence)” is a bottom line. “It is interesting that…” is a throat-clear.
2. **Supporting evidence** — citable facts that carry that sentence. If a bullet cannot survive “according to whom,” it is not a bullet.
3. **Methodology** — enough for a peer to see how you looked, not a memoir of every tab. Later lessons will cut this for executives and expand it for analysts.
4. **Confidence assessment** — how sure you are, and what would move you. Inflated confidence ages like milk.
5. **Gaps and next steps** — what you do not know, what you did not search, what would be proportionate next. Hidden gaps are the problem.

If the bottom line cannot be supported by the bullets, change the bottom line. Do not add adjectives until the math looks closer.

### Working sequence

1. Restate the original question in one line.
2. Choose the product type.
3. Write the bottom line including confidence, even if the answer is “insufficient.”
4. List only the evidence that supports or bounds that line.
5. Add method in proportion to the audience.
6. Add gaps. If you have none, you missed some.
7. Read it as if you were the person blamed if you are wrong.

### Legal and ethical boundaries

A product can harm by overstating identity, leaking collection methods, or implying guilt from proximity. Do not write names you cannot source. Do not launder a guess into “intelligence indicates.” Do not include extra private detail because it made the narrative vivid. You will not “sex up” confidence to please a sponsor.

### Common mistakes

- Saving the conclusion for page four like a mystery novel.
- Mixing spot-report urgency with deep-dive indecision.
- Using “suggests,” “likely,” and “is” as synonyms.
- Delivering a product nobody asked for because you had leftover screenshots.
- Forgetting the reader will forward it.

> **Rule of thumb:** If your summary requires a guided tour, it is not a summary. OSINT101 grades whether a stranger can find the point without you hovering. Hovering is not a dissemination strategy.

Your exercise is to take a finished OSINT investigation — classwork is fine — and rewrite the summary using the Pyramid Principle. One sentence first, including confidence. Then evidence. Then what you do not know. If the rewrite is shorter and less exciting, you are probably doing it correctly.

        `,
        exercise: 'Take a finished OSINT investigation and rewrite the summary using the Pyramid Principle.',
      },
      {
        title: 'Source Citation Standards',
        duration: '25 min',
        content: `
A finding without a citation is a rumor that learned to use headings. OSINT101 does not need your inner poet. It needs a URL, a date, a capture, and a sentence about why the source is allowed to say that. If that sounds fussy, wait until the page changes and your only exhibit is a memory of being sure.

### Why Citations Matter

Without citations, your work is opinion. With proper citations, your work is intelligence someone else can check. A second analyst should be able to open what you opened, see what you saw, and disagree like a professional.

Citations also protect you. When a profile is edited, your archive is the difference between “we reported what was there” and “we invented a ghost.”

### Why this matters

OSINT sources rot. They also lie, sell ads, and impersonate officials. Citation standards force you to classify the source while you still remember how you found it. That classification is how honesty about confidence gets into the report instead of into a shrug later.

### What you will be able to do

- Build a complete citation block for a web source.
- Archive first, quote second.
- Record the query, not only the lucky click.
- Distinguish official, secondary, and anonymous without flattering your favorite hit.

### Citation Components

Every source citation should include:

- **URL or location** — the exact page, docket, or explorer transaction. “I saw it on social” is not a location.
- **Date accessed** — because content changes, and “recently” is not a timestamp.
- **Capture evidence** — screenshot, archive link, or local copy. Prefer an independent archive plus a screenshot when the item matters.
- **Search query used** — the dork, the register search, the explorer hash. Reproduction needs the door, not only the room.
- **Confidence in source** — official, secondary, anonymous, commercial label, personal blog. This is confidence in the *speaker*, not in your conclusion.

If you cannot fill those fields, you are not ready to cite.

### Archiving Sources

Always archive because sources disappear, and because people discover privacy settings approximately when your report is due.

- **archive.is / archive.today** — often good for a single page. Note when it fails or shows a login wall.
- **Wayback Machine** — historical captures; useful for “it looked like this last year.”
- **Local HTML saves** — when archives refuse. Record a hash if your process requires integrity.
- **Screenshots** — essential as a companion. Include the URL bar and a clock when you can.

Do not archive malware-laced junk on a machine you care about. Do not archive material you are not allowed to possess. Citation is not a reason to hoard stolen files.

When a source should not be redistributed — a human source, a URL that exposes a collection channel — cite in a way that does not leak it. If citing the raw location burns a method or a person, use a controlled exhibit and a sanitized line.

### Citation Formats

For informal intelligence work, structured and repeatable beats pretty:

> Source: Public profile “Jane Example” (https://example.com/jane)  
> Accessed: 2026-09-04  
> Archived: https://archive.today/abcd1  
> Query: \`"Jane Example" site:example.com\`  
> Source class: self-declared social profile  
> Note: caption claims City X; landmark consistent with public photos of Place Y. Photographer identity not assumed.

MLA theater is optional. Completeness is not. Do not cite a screenshot of a screenshot of a channel as if it were the channel. Cite the capture you hold and the claimed origin, separately.

### Working sequence

1. Decide the claim the source is allowed to support.
2. Capture the page before you excerpt it.
3. Fill the citation block while the tab is still open.
4. Classify the source.
5. Put the archive link next to the claim in the report, not in a folder named \`misc\`.

### Legal and ethical boundaries

Cite honestly. Do not imply a government origin for a blog. Do not paste full pages of copyrighted news when a citation and a short excerpt will do. Do not include identifiers that turn your appendix into a doxxing kit. Do not leak a source who spoke on the understanding they would not be named.

### Common mistakes

- Dating the report but not the source.
- Citing a search-engine results page as if it were the article.
- “As reported widely” with zero links.
- Archiving after the argument, when the page has already grown a new paragraph.
- Treating a commercial database label as an official record.

> **Rule of thumb:** If your footnote is “trust me,” OSINT101 already does not. Put the URL down. If you are ashamed of the URL, you are ashamed of the finding. That is useful information. Act on it.

Your exercise is to take three web sources from a previous OSINT exercise and create proper citations with archives. Each block should stand alone. If an archive fails, say so and keep the screenshot. Failure to archive is a finding about fragility, not a reason to skip the homework.

        `,
        exercise: 'Take 3 web sources from a previous OSINT exercise and create proper citations with archives.',
      },
      {
        title: 'Analytical Techniques',
        duration: '30 min',
        content: `
Intuition is a private instrument. Structured techniques let someone else play the same notes and hear whether the song holds. OSINT101 uses them to slow you down at the exact moment you are most tempted to be impressive. Impressive is optional. Reproducible is not.

### Structured Analytical Techniques

Move beyond “it feels like” to analysis another skeptic can rerun.

**Analysis of Competing Hypotheses (ACH):**
1. List all *plausible* explanations, including “the data are wrong” and “two different people.”
2. List evidence for and against each. Absence of expected evidence is evidence.
3. Identify which hypothesis is damaged *least* — ACH is often about disconfirmation, not compliments for your favorite.
4. Track how confidence changes when you add or discard a source.

If you cannot name three hypotheses, you do not have analysis. You have a mood with footnotes.

**Devil’s Advocacy:**
Argue against your own conclusion in writing. Force the case for coincidence, impersonation, a bad timestamp, a vendor label error, and “I searched the wrong county.” If this feels personally insulting, that is the bias waving.

**Indicators and Warnings:**
Write observable events that would confirm or deny a hypothesis *before* they happen. If you claim an account is official, what would you expect next week — a site link, a press reuse, a takedown? If you cannot specify an observation, you cannot monitor; you can only refresh and hope.

A matrix that does not change your sentence is theater.

### Why this matters

Unstructured analysis produces confident stories that collapse when a second source arrives. Structured analysis produces confidence that can move. Decision-makers can live with “probable, watching for X.” They should not be asked to live with “we just know.” Honesty about confidence is a technique, not a personality trait.

### What you will be able to do

- Build a small ACH matrix with at least three hypotheses.
- Attack your own lead on purpose.
- Pre-commit to indicators that would change your mind.
- Name the bias you are most likely feeding.

### Common Analytical Biases

- **Confirmation bias**: collecting until the folder agrees with you. Symptom: you stopped after the first friendly hit.
- **Anchoring**: the first article sets the frame. Symptom: you still lead with the first thing you found, even after it aged badly.
- **Availability bias**: the vivid breach, the recent headline. Symptom: you treat memorable as common.
- **Groupthink**: the chat agreed, so the report agrees. Symptom: no one wrote a dissent because it would have been awkward.

Biases do not make you unprofessional. Pretending you do not have them does. Write one line: “Primary risk to this judgment is [bias], mitigated by [technique].” If that line is embarrassing, good.

### Working sequence

1. State the finding you are tempted to treat as done.
2. Generate three competing hypotheses, including one you dislike.
3. Fill evidence for and against. Use citations, not vibes.
4. Write a short devil’s advocacy paragraph.
5. List two indicators that would raise confidence and two that would kill it.
6. Revise confidence. If it did not move and you added no evidence, you performed a ritual.

### Legal and ethical boundaries

Structured techniques are not a way to launder a weak identity claim into “the matrix says it’s them.” If ACH leaves you at “possible,” the report says possible. Do not invent indicators that would require unlawful collection. When hypotheses include criminal conduct, write them as hypotheses. The technique does not indict.

### Common mistakes

- Listing two fake alternatives and one “real” one.
- Weighting evidence by how hard it was to find.
- Forgetting that five reprints of one wire story are one source in a costume change.
- Skipping the “data are wrong” hypothesis because it is unflattering.
- Changing the question so your favorite answer still wins.

> **Rule of thumb:** Your first theory is not a child. You are allowed to abandon it in public. OSINT101 is more worried about the analyst who never met a coincidence they could not promote. Put three names on the whiteboard. If you cannot, you are not briefed. You are attached.

Your exercise is to take a previous investigation finding and run it through ACH with at least three competing hypotheses. Include an against-column that actually hurts your favorite. If the matrix leaves you less certain than you were at the start, put that new confidence in the lead sentence. That is the technique working.

        `,
        exercise: 'Take a previous investigation finding and run it through ACH with at least 3 competing hypotheses.',
      },
      {
        title: 'Audience-Tailored Reporting',
        duration: '25 min',
        content: `
The same finding can be a decision, a method review, or a discoverable record. If you send all three to everyone, you will bore the executive, starve the analyst, and frighten counsel. OSINT101’s rule is rude and simple: write for the person who has to do something, then strip or attach until the rest can survive forwarding.

### Know Your Reader

Different audiences need different products. They do not need you to perform the same intelligence in three fonts.

**Executive / Decision-Maker:**
- One page if you can; two if you must.
- Bottom line first, including confidence and the decision implied.
- Actionable recommendations only — “monitor” is not an action unless you say who monitors what until when.
- No tool tour. They asked what is true enough to act on.

**Technical / Analyst:**
- Method that can be rerun.
- Citations and archives.
- Appendices for tables and explorer paths.
- The argument, including rejected hypotheses. Peers will smell the missing dissent.

**Legal / Compliance:**
- What was collected, under what purpose, and what you did *not* collect.
- Facts versus judgments, labeled.
- Handling caveats: personal data, retention, public record versus blog.
- No swagger. Discoverable tone is a skill.

If one document must serve all three, write the executive page first, then append the analyst packet, then a legal annex. Do not blend them into a smoothie.

### Why this matters

A CEO who receives your raw ACH matrix will not become a better analyst. They will stop reading your team. An attorney who receives a punchy brief with unnamed sources will ask why you are helping the other side. Tailoring is courtesy and risk control.

OPSEC belongs here too: executives forward. Analysts stash copies. Legal keeps everything. Assume the widest later audience when you choose identifiers.

### What you will be able to do

- Recast one finding into three tones without changing the facts.
- Keep confidence language stable across versions — no “possible” for lawyers and “is” for the C-suite.
- Use a one-page skeleton that does not leak methods.
- Cut recommendations that you could not execute yourself.

### The One-Page Report

1. **Handling header** — sensitivity in language your organization actually uses. Fake SECRET banners are not clever.
2. **Subject line** — entity, question, date. Not a teaser.
3. **Key finding** — one or two sentences, confidence included.
4. **Supporting evidence** — three to five bullets, each citable.
5. **Confidence assessment** — what would change it.
6. **Recommendations or next steps** — owners and limits.
7. **Source line with date** — or “sources in annex.” If there is no annex and no sources, you published a vibe.

That page is what executives should see. Analysts get the annex. Legal gets handling and collection purpose. Do not put sock-account tradecraft on the page that will be screenshotted into a board deck.

### Working sequence

1. Write the finding once in boring, precise language.
2. Produce the executive page. If you cannot do it in a page, your finding is multiple findings.
3. Expand method and citations for an analyst peer.
4. Rewrite for legal/compliance: purpose, proportionality, what is personal data, what you avoided.
5. Compare the three. If confidence drifted, fix it. If a name appeared only in the fun version, delete it.

Keep the facts identical. Only depth and vocabulary change.

### Legal and ethical boundaries

Tailoring is not a way to hide uncertainty from leadership. It is a way to hide *irrelevant method detail* from people who will circulate the file. Do not strip caveats. Do not add scare language to “motivate” a budget. Do not include a private person’s extra identifiers “for color.” If counsel asks for chain-of-custody language, only write what you actually did.

### Common mistakes

- Executive version with a tool list and no decision.
- Analyst version that assumes the reader saw your brain.
- Legal version that argues the case instead of describing collection.
- Recommendations no one owns.
- Changing the conclusion to match what each audience “wants.”

> **Rule of thumb:** The CEO is not a slow analyst. The lawyer is not a coward. If you write down to them, OSINT101 will assume the only audience you understand is yourself. Say the same true thing three ways. If you cannot, you do not understand the thing yet.

Your exercise is to take one investigation finding and write three versions: one for a CEO, one for a fellow analyst, and one for legal/compliance. The finding and the confidence must match. If one version sounds braver, it is wrong.

        `,
        exercise: 'Take one investigation finding and write three versions: one for a CEO, one for a fellow analyst, and one for legal/compliance.',
      },
      {
        title: 'OPSEC in Reporting',
        duration: '20 min',
        content: `
A report is a new artifact in the world. It will be copied, forwarded, screenshotted, and found in a slide titled “context.” OSINT101 assumes your product will leave the room. The finding can travel. Your collection plumbing should not.

### Protecting Sources and Methods

Your report may be shared beyond its intended audience. Write as if a counterpart, a journalist, or the subject will see a version of it. That is not paranoia. That is Tuesday.

**What NOT to include** (unless competent legal process requires it in a controlled channel):

- Your full methodology cookbook — tool order, sock names, the exact dork that still works.
- Capability reveals that recreate a sensitive collection path.
- Status of ongoing work: “we are still watching X.”
- Identifying details about human sources, or URLs that are effectively a name.

**Classification and Handling:**
- Mark sensitivity in plain language your organization actually uses.
- Distribute to named people, not to a public link and hope.
- Encrypt attachments when the content deserves it; a password in the same email is a joke.
- Track versions. The “fun draft” with extra names should not outlive the review.

OPSEC in reports is not the same as lying about confidence. You may hide *how* you looked. You may not hide *how sure you are*.

### Why this matters

Leaked sources stop talking. Leaked methods stop working. Leaked identifiers turn a professional product into a doxxing packet on letterhead. The failure is usually not a movie hack. It is a PDF with author metadata and a footer that says \`investigation-alt-account-draft.docx\`.

### What you will be able to do

- Redact method and source-identifying detail without gutting the finding.
- Produce a “clean” version suitable for wider handling.
- Strip document metadata.
- Decide when the correct product is no product.

### The Clean Report

A clean report protects the subject from unnecessary exposure and the investigator from self-owning:

- Remove metadata from documents and images (author, paths, GPS on screenshots).
- Describe results, not your entire process. “Public company register, accessed DATE, record ID” is often enough. “Then I used my research persona at 01:12” is not.
- Redact clearly. Black boxes that fail when the file is re-exported are decorative.
- Use a boring template. Clever formatting is how hidden text survives.

Sanitization is a pass, not a vibe. Check annexes, file names, image EXIF, and hidden spreadsheet columns.

When you must retain a full method log, keep it in a separate, tighter-handled file. Do not staple the log to the thing that will be emailed to “plus leadership.”

### When to Walk Away

Not every finding needs a report. Ask:

- Does this meet the original collection requirement, or did you just find a shiny fact?
- Is the information verified enough to write down without becoming a rumor mill?
- Would circulating this cause harm disproportionate to the purpose — a private person, a mistake, a family detail?
- Is there a responsible disclosure path that is better than a widely shared PDF?

Walking away is a professional act. So is a two-line note: “Requirement not met; no report; here is the gap.” Silence after a hunt is how rumors start in the hallway instead.

### Working sequence

1. Write the full internal notes as usual.
2. Draft the external-facing product from the notes, not by deleting random sentences from the notes.
3. Highlight every tool, persona, human source, and unpublished URL.
4. Replace those with result-level citations or move them to a restricted annex.
5. Scrub metadata. Have a second person try to reconstruct your method from the clean file.
6. Ask the walk-away questions before you hit send.

### Legal and ethical boundaries

Do not leak sources. Do not leak methods that would get a person fired or harmed. Do not launder a sensitive URL through an archive that you then cite in a public blog. Do not include extra private data “so they understand the subject.” Honesty about confidence stays; gossip goes. If a legal case requires full method, that product is for counsel, not the company chat.

### Common mistakes

- Redacting names but leaving them in the table of contents.
- Shipping screenshots that include your logged-in research handle.
- Watermarking “confidential” on a file anyone on the ticket can see.
- Over-sanitizing until the finding cannot be checked — that is unaccountability, not OPSEC.
- Reporting because you spent the hours, not because the requirement was met.

> **Rule of thumb:** Your report is not a trophy case for tradecraft. If a stranger can reconstruct your socks from the appendix, OSINT101 will congratulate the stranger. Write the finding. Hide the plumbing.

Your exercise is to review a previous OSINT exercise report and redact or remove anything that could compromise OPSEC or source protection. Produce a clean copy and a short note listing what you removed and why. If you find nothing to remove, you are not looking, or your first report was already unusually adult.

        `,
        exercise: 'Review a previous OSINT exercise report. Redact or remove any information that could compromise OPSEC or source protection.',
      },
    ],
  },
  "sherlock-username-search": {
    id: "sherlock-username-search",
    title: "Sherlock: One Username, 400 Doors",
    description: "Check where a username exists across hundreds of sites, then do the part the tool can't: decide which hits are actually the same person.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What Sherlock actually does",
        duration: "8 min",
        content: `
### A doorbell, not a detective

Sherlock takes one username and knocks on a few hundred websites to see whether a profile page answers. Despite the name, it doesn't deduce anything. It checks whether \`https://site.example/<username>\` returns a profile or a "no such user" page, and gives you a list of URLs.

That's useful, because people reuse handles the way they reuse passwords: often, and with no thought for whoever comes along later. One handle can point you to a GitHub account, a forum account from 2014, and a music profile its owner has forgotten.

### How the check works

For each site, Sherlock's data file stores a URL pattern and a rule for spotting a missing account. That rule is usually one of these:

- **Status code:** a 404 means no account; a 200 means an account exists.
- **Error message:** the page loads either way, but includes text like "This user does not exist".
- **Redirect:** a missing user gets bounced to the home page.

If the rule passes, Sherlock reports the URL as found. It doesn't log in, read private data or contact the account holder. It loads a public URL, the same as you would in a browser, just a few hundred times faster.

### Where it sits in OSINT101

Sherlock is one of the 12 tools in this course and the one we start with. It's the oldest and best-known username checker, its code is readable, and it fails in ways that teach you something. Maigret, WhatsMyName and the others in later lessons use the same idea with more sites and better parsing.

> Rule of thumb: Sherlock tells you where a username **exists**. It doesn't tell you who owns it. That second question is your job, and it's where most beginners get it wrong.
        `,
      },
      {
        title: "Walkthrough on your own handle",
        duration: "12 min",
        content: `
### Set the ground rules first

You'll run this on **your own username** or on a **test persona you create for this course**. You won't run it on your ex, your neighbour or the person who cut you off in traffic. That isn't a practice target; it's a privacy complaint waiting to happen.

To build a test persona, pick a handle that's unlikely to exist, such as \`pip_tadwell_osint101\`. Then create two or three free accounts with it (for example GitHub and Reddit) using a fresh email address you control. You now have ground truth: you know exactly which accounts are real.

### Install

Sherlock needs Python 3. The tidy way is \`pipx\`:

\`\`\`bash
pipx install sherlock-project
sherlock --version
\`\`\`

If \`pipx\` isn't installed, \`python3 -m pip install --user sherlock-project\` works too. Expect it to grumble about your PATH at least once. That's tradition.

### Run it

\`\`\`bash
sherlock pip_tadwell_osint101 --csv --timeout 15
\`\`\`

- \`--csv\` writes \`pip_tadwell_osint101.csv\` next to the usual \`.txt\` output, ready for a spreadsheet.
- \`--timeout 15\` stops one slow site from holding up the whole run.
- To test a single site, add \`--site GitHub\`.

Sherlock prints a \`[+]\` line for each site that seems to have the account. A run takes a minute or two.

### Read the results like an analyst

Open the CSV and add three columns: **Expected? (Y/N)**, **Opened and checked? (Y/N)** and **Verdict**. Then go through every hit.

1. **Open the URL in a browser.** Does a real profile load, or a login wall, a cookie banner or a "user not found" page that returns 200 anyway?
2. **Compare against ground truth.** You created the accounts, so you know which hits are yours.
3. **Mark each hit** as *confirmed mine*, *exists but not mine*, or *false positive (no account)*.

With your real handle, the "exists but not mine" column fills up fast. Short or common handles are shared by plenty of strangers. If your handle is \`dazza\`, Sherlock has found most of Queensland.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Where Sherlock goes wrong

- **False positives:** some sites return a normal page for any username, or show a challenge page (Cloudflare, captcha) that looks like success. Sherlock marks the account as found; the account doesn't exist.
- **False negatives:** sites change their layout, block automated requests, or need a login to show profiles. A missing hit doesn't prove there's no account.
- **Rotting rules:** each site rule breaks when that site redesigns. Sherlock's data file is updated, but not every day, so a check that worked last month may now be wrong.
- **Same name, different person:** the big one. A found handle shows the account exists. It says nothing about whether the account belongs to the person you're researching.
- **Your IP gets noticed:** hundreds of fast requests from one address can get you rate-limited, and a few sites will remember it. Run it from your own connection, at a sensible speed, for a sensible reason.

### Turning a hit into a finding

To treat two accounts as the same person, look for **at least two independent matching details**: the same profile photo, the same linked website, a bio that refers to the other account, or a matching writing style and posting times. One matching handle, on its own, is a coincidence with good branding.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Public isn't the same as fair game

- **Australian Privacy Act 1988:** if you collect information about an identifiable person for a business (paid investigations, HR checks, due diligence), the Australian Privacy Principles probably apply. Collect only what you need for a stated purpose (APP 3), use it only for that purpose (APP 6), and check it's accurate before relying on it (APP 10). Having a username list doesn't make collecting it lawful.
- **Serious invasions of privacy:** since 2025, people in Australia can sue over serious invasions of privacy. Compiling someone's online life to intimidate them is the kind of thing that law was written for.
- **Doxxing offences:** the Criminal Code (Cth) now makes it an offence to use a carriage service to release someone's personal data in a way that's menacing or harassing. Publishing a "here are all their accounts" thread can cross that line.
- **Platform terms:** many sites ban automated access in their terms of use. Running a scanner against your own handle is low-risk; building a business on mass scanning isn't. Read the terms for any site you rely on.
- **Professional context:** in Queensland, investigating people for reward is licensed work (Security Providers Act 1993). This course teaches the technique. It doesn't make you an investigator.

> If you can't write down why you're searching for someone in one plain sentence, don't run the search.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. Sherlock reports \`[+] Instagram: https://instagram.com/pip_tadwell_osint101\`. What has it actually confirmed?
2. Name two reasons Sherlock might mark an account as found when none exists.
3. You get no hit for a site. Can you say the person has no account there? Why or why not?
4. What's the minimum evidence before you treat two accounts as the same person?
5. Under the Australian Privacy Principles, which principle says to collect only what you need for your purpose?

**Answers**

1. Only that the URL returned something that passed Sherlock's "exists" rule for that site. It hasn't confirmed who owns the account, or even that a real profile exists, until you open it.
2. Any two of: the site returns a normal page for any username; a challenge or captcha page looks like success; the site changed its layout and the rule is out of date; a login wall returns a 200 status.
3. No. Sites block automated requests, need a login, or change layout, so a miss is "not detected", not "doesn't exist".
4. At least two independent matching details beyond the username, such as the same photo, a linked site, cross-references in the bio, or matching activity patterns.
5. APP 3 (collection of solicited personal information): collect only what's reasonably necessary.
        `,
        exercise: "Create a test persona handle and register it on two sites. Run Sherlock on it with `--csv`, then open every hit and sort it into *confirmed mine / exists but not mine / false positive*. Write three sentences: how many hits were false positives, which site produced the strangest result, and what you'd need to see before trusting a hit on a handle you didn't create.",
      }
    ],
  },
  "holehe-email-registration": {
    id: "holehe-email-registration",
    title: "Holehe: Asking the Front Desk if You've Checked In",
    description: "Find which sites an email address is registered on, why that works, and why some of these checks are one wrong flag away from emailing the person you're researching.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What Holehe does",
        duration: "8 min",
        content: `
### Websites love to overshare at signup

Try registering on a website with an email address that already has an account. Most sites tell you, helpfully: "This email is already in use." Some password-reset forms do the same thing: "We've sent a link to that address" versus "We couldn't find that account."

Holehe automates that question across about 120 sites. You give it an email address, and it asks each site's signup, login or recovery flow whether the address is known. It reports one of three answers:

- \`[+]\` email used: the site says it has an account with this address.
- \`[-]\` email not used: the site says it doesn't.
- \`[x]\` rate limited: the site noticed you asking and stopped answering.

Some modules also return a **partial recovery hint**, like a masked phone number (\`+61 4** *** *12\`) or a masked backup email. Those hints are often the most useful output, and the most sensitive.

### How this differs from Sherlock

Sherlock loads **public profile pages**. Holehe talks to **account systems**, the parts of a site built to manage logins. That makes it more powerful and more delicate. You aren't reading something the person published; you're asking the site's login system to confirm something about them.

That difference is why Holehe gets its own lesson, and why this course teaches it only against addresses you own.

> Sherlock checks the shopfront. Holehe asks the front desk. The front desk usually answers, and sometimes it rings the guest.
        `,
      },
      {
        title: "Walkthrough on your own address",
        duration: "12 min",
        content: `
### Pick your target: you

Use **your own email address**, or a disposable address you create for this lesson and register on two or three free sites. Do not use anyone else's address. Holehe's checks talk to login systems, and a few of them can email or SMS the account holder. Running those against a stranger is how you turn a training exercise into a complaint.

### Install

\`\`\`bash
pipx install holehe
holehe --help
\`\`\`

Holehe is GPL-3.0, so if you redistribute a modified copy you need to keep it under GPL-3.0 and share your changes. Using it yourself is fine.

### Run it (safe mode only)

Always pass **\`-NP\` / \`--no-password-recovery\`**. That skips modules that hit password-recovery flows — the ones most likely to email the account holder. This course never runs Holehe without \`-NP\`, and never turns on any tool's "loud" / notify switch.

\`\`\`bash
holehe -NP --csv your.name@example.com
\`\`\`

Keep an eye on your inbox anyway. If anything still emails you a reset link, stop, note the site, and treat that module as off-limits. In Consensus-OSINT those are the \`loud\` modules; they stay off unless someone deliberately passes \`--allow-loud\`. You will not do that here.

### Read the results

Make a short table:

| Site | Holehe said | Inbox: any email from them? | Notes |
|---|---|---|---|
| Twitter / X | used | no | matches a handle I know |
| Spotify | used | no | forgot I signed up |
| Spotify | used | no | matches a signup I remember |

Then ask yourself three questions:

1. Did I expect this site? (forgot signups are common.)
2. Did any email arrive despite \`-NP\`? (if yes, note the site and never re-run that module.)
3. Did Holehe return a masked phone or backup email? (treat that as personal information, not trivia.)

### Optional: a made-up test address

Create a fresh email (Proton, Gmail, whatever you like), register it on two free sites, then run Holehe. You now know the ground truth: those two sites should show as used, and everything else should be not used or rate limited. Any unexpected \`used\` result is either a false positive or a site you forgot you signed up for with a typo.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Why Holehe gets things wrong

- **Sites change their APIs.** Signup endpoints move, response formats change, and captchas appear. A module that worked last year may now report "rate limited" or, worse, "used" when it can't tell.
- **Rate limits and bot walls.** Big platforms notice automated checks. A rate-limited result is "they stopped answering", not "account exists" or "doesn't".
- **Ambiguous responses.** Some sites return the same page whether the email exists or not (to stop enumeration). Holehe may mark those as unknown or get them wrong.
- **Notifying side effects.** A few modules trigger a password-reset email or an SMS code. The account holder learns someone probed their address. In an investigation, that can tip off the subject.
- **Stale modules.** Holehe's last meaningful module update was around mid-2024. Treat results as leads, not as current truth, and open any important hit yourself.

### The false-negative problem

A clean Holehe run that finds nothing doesn't mean the person has no accounts. It means none of the ~120 modules got a clear "used" answer. The person may use a different email, the modules may be broken, or the sites may refuse to answer.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### This is the lesson where the law gets pointed

- **Australian Privacy Act:** an email address that identifies a person is personal information. Collecting registration status across dozens of sites for a business purpose triggers APP 3 (necessary for the purpose) and APP 6 (use only for that purpose). Feeding the address to overseas sites also raises APP 8 (cross-border disclosure). Keep a clear purpose note.
- **Computer misuse:** Holehe talks to login and recovery systems. In Australia, unauthorised access to computers is an offence under the Criminal Code (Cth) Part 10.7 and the Criminal Code (Qld) s 408E. Running these checks against someone without a lawful reason is a risk your lawyer should answer before you do it for clients. Until that answer is in writing, treat Holehe as a self-check and training tool.
- **Platform terms:** most sites ban automated account-existence checks in their terms. Using your own address for learning is the lowest-risk use. Building a product that hammers signup APIs is a different conversation.
- **Notifying checks:** deliberately triggering a password-reset email to confirm an address exists is hard to defend. Don't. If a tool offers a "loud" or "allow-notify" switch, leave it off.
- **Sensitive information:** some modules check adult or dating sites. Sexual-life information is sensitive under the Privacy Act (APP 3.3). This course skips those modules.

> If the only way to confirm an email is to email the person a password reset, you don't have a confirmation. You have a tip-off.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. Holehe marks an email as "used" on Spotify. What has it confirmed, and what hasn't it?
2. Why does this lesson require \`holehe -NP\`, and what do you do if a site still emails you?
3. Why is a Holehe check riskier, legally, than a Sherlock check on the same person?
4. A Holehe run finds nothing. Can you conclude the subject has no online accounts?
5. Which Australian Privacy Principle is most relevant when Holehe sends an Australian person's email address to servers overseas?

**Answers**

1. That Spotify's endpoint responded in a way Holehe's module treats as "account exists". It hasn't confirmed the account is active, who owns it, or what the profile contains.
2. \`-NP\` skips password-recovery modules that can email the account holder. If a site still emails you, stop, note it, and never re-run that module or any "loud"/"allow-notify" flag.
3. Sherlock loads public profile URLs. Holehe talks to login/signup/recovery systems, which sits closer to computer-misuse and terms-of-use risk, and can tip off the subject.
4. No. Modules break, sites refuse to answer, and the person may use other addresses.
5. APP 8 (cross-border disclosure of personal information), alongside APP 3 on whether the collection was necessary at all.
        `,
        exercise: "Run `holehe -NP --csv` on an email address you own (or a disposable address you registered on two free sites). Build the results table from Section 2, including an Inbox column. Write four sentences: how many sites returned \"used\", whether any site emailed you despite `-NP`, one result that surprised you, and one module or category you would refuse to run against anyone else. Do not omit `-NP`.",
      }
    ],
  },
  "numint-phone-basics": {
    id: "numint-phone-basics",
    title: "Numint: Start With the Digits, Not the Drama",
    description: "Parse a phone number offline with libphonenumber, learn what presence checks are (and why this lesson never runs them), and keep phone OSINT on the safe side of the line.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What Numint does",
        duration: "8 min",
        content: `
### Most phone "lookups" start by reading the number itself

A phone number already contains a lot of public information before you ask any website anything: country, possible region, line type (mobile, landline, VoIP), and standard formats. Google's \`libphonenumber\` library does that offline. Numint wraps it, then optionally adds:

1. **Offline parse** (always available, no network): valid or not, type, formats, country, region, carrier name where the library knows it, time zones.
2. **API providers** (optional keys): freemium carrier/spam-risk services.
3. **Presence checks** (exist in the tool; **not used in this lesson**): whether the number is registered on a few platforms via login-style endpoints. Same risk family as Holehe; can SMS the number owner. Numint gates them behind \`--presence --yes-authorized\`. We leave that flag alone.
4. **Search links**: ready-made Google/Bing queries and reverse-lookup URLs. Listing the links is fine; opening them en masse is a separate choice.
5. **Optional AI summary**: only if you give it a key. Skip it for this lesson.

> If your first move with a phone number is to blast it at social platforms, you're skipping the free part of the work — and this course will not ask you to do that.
        `,
      },
      {
        title: "Walkthrough on your own number",
        duration: "12 min",
        content: `
### Scope: your number, or a synthetic one

Use **your own mobile number**, or a Twilio/VoIP test number you control. Do not use a friend's number "as practice". Phone presence checks can trigger SMS codes or account notices on some platforms, and an unsolicited probe is a good way to ruin a friendship and a morning.

### Install

\`\`\`bash
git clone https://github.com/whoamitang/numint.git
cd numint
python3 -m venv .venv && source .venv/bin/activate
pip install .
numint --help
\`\`\`

### Step A: offline only (the bit you should always do)

\`\`\`bash
numint "+61 4XX XXX XXX" --offline --country AU --json
\`\`\`

Replace the number with yours in E.164 form (\`+61…\` for Australia). Read the JSON (or the pretty terminal view without \`--json\`) and note:

- Is it marked valid?
- Line type: mobile, fixed line, VoIP, toll-free?
- Country and region hints.
- Carrier name (library data; not always current after number portability).
- Time zones.

Australian gotchas worth knowing:

- Mobile numbers are \`+61 4…\`. A \`+61 2/3/7/8\` is a landline area code.
- Number portability means the "carrier" field can be wrong for a ported mobile. Treat it as a hint.
- Many "free reverse-lookup" websites for AU numbers are scrapers of scraped scrapers. Prefer the offline parse first.

### Step B: what we deliberately skip

Do **not** run \`--presence\`, \`--yes-authorized\`, \`--all\`, or API/AI flags in this lesson. Presence checks talk to login systems and can SMS the number owner. Knowing the flag exists is enough; running it is not part of the exercise.

Also skip enrichment API keys for now — they send the number to third parties.

### Step C: write it up as an analyst would

| Layer | Result | Confidence | Notes |
|---|---|---|---|
| Offline parse | AU mobile, region hint X | Medium | Carrier may be outdated after portability |
| Presence / APIs | not run | — | Course rule: offline only |

If you later use presence checks in real work, treat every hit as **low confidence** until corroborated, and only against numbers you own or have a documented lawful purpose to check.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### What phone tools get wrong

- **Portability:** the offline carrier name is often historical. Australians change providers and keep their numbers.
- **VoIP and virtual numbers:** Twilio, Google Voice and similar look like normal mobiles in some parses and like VoIP in others. A "mobile" label is not proof of a handset.
- **Presence false positives:** login endpoints change. An Instagram or Snapchat check that worked in 2021 may now return garbage. Ignorant (the project Numint borrows some presence bridges from) hasn't had a real update in years; treat those results as provisional.
- **Presence false negatives:** rate limits, geo blocks and captchas all look like "not registered".
- **SMS side effects:** some presence checks send a code. You just notified the number owner.
- **Enrichment APIs:** free spam-risk APIs vary wildly in quality for Australian numbers and send the number to a third party. Skip them until you have a written purpose and a supplier you trust.

### What "found on Instagram" does not mean

It does not mean you know the username, the profile, or the person. It means an endpoint responded in a way the tool treats as "this number is linked to an account". Getting from there to a named profile is a separate, harder problem, and often not possible with public data alone.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Phone numbers attract extra rules in Australia

- **Privacy Act:** a phone number that identifies a person is personal information. Same APP 3 / APP 6 / APP 8 analysis as email. Spam-risk and carrier APIs are overseas disclosures unless you've checked otherwise.
- **IPND:** Australia's Integrated Public Number Database is **not** a public lookup. Access is limited to directory publishers, approved research, emergency services and law enforcement (ACMA). A PI licence does not unlock it. If a vendor claims "full AU phone owner data", ask which lawful gateway they use; most of the time the answer is "none".
- **Spam Act and Do Not Call:** using a number you found to market to someone is a different legal regime. Finding a number for investigation is not permission to call them for sales.
- **Computer misuse / terms:** presence checks hit login systems. Same caution as Holehe. Numint's \`--yes-authorized\` flag is the tool authors putting the responsibility on you. Accept it only when the number is yours or you have a documented lawful purpose.
- **QLD PI context:** for paid locate work, phone checks sit under purpose recording, DFV screening for locate-type jobs, and the rest of the licence duties covered elsewhere in OSINT101. This lesson does not make phone tracing a free-for-all.

> Offline parse first. Presence checks second, and only with a reason you could defend to a magistrate. Enrichment APIs third, if ever.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. What can Numint tell you about a number with \`--offline\` and no network access?
2. Why might the "carrier" field be wrong for an Australian mobile?
3. Why does this lesson forbid \`--presence --yes-authorized\`, even on your own number?
4. Does a QLD private investigator licence give you access to the IPND?
5. A presence check says a number is registered on Instagram. Do you know the username?

**Answers**

1. Validity, line type, formats, country/region hints, library carrier data and time zones (via libphonenumber). No website is contacted.
2. Number portability: people keep their number when they change providers, and the library data may still show the original carrier.
3. Presence checks hit login systems and can SMS the owner (notifying). The course keeps phone work offline so you learn the safe layer first; presence stays a "know it exists, don't run it here" topic.
4. No. IPND access is limited to specific approved categories; a PI licence is not one of them.
5. No. You only have an endpoint response suggesting the number is linked to some account.
        `,
        exercise: "Run `numint` with `--offline` (and nothing else) on your own number or a VoIP number you control. Fill in the offline rows of the results table. Do not pass `--presence`, `--yes-authorized`, `--all`, or API keys. Write five sentences covering: line type and country, one thing the offline parse could not tell you, why presence checks are out of scope here, one false-confidence risk you'd warn a classmate about, and why IPND is not a shortcut.",
      }
    ],
  },
  "maigret-username-dossier": {
    id: "maigret-username-dossier",
    title: "Maigret: Sherlock With a Bigger Rolodex",
    description: "Run a broader username search, read recursive pivots carefully, and treat every FOUND as a lead until you open it yourself.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What Maigret does",
        duration: "8 min",
        content: `
### Same doorbell, more doors, more notes

Maigret is a username checker in the same family as Sherlock. You give it a handle. It asks a large pile of sites whether a profile page for that handle seems to exist. Where it pulls ahead is coverage and the notes it tries to take: more site rules, an attempt to read public fields off pages that actually load, and optional recursion that follows other usernames mentioned on those pages.

It still does not know who someone is. A Maigret report is a pile of URLs that passed a rule, plus whatever public text the parser managed to lift. If Sherlock is a clipboard of doorbell results, Maigret is the same clipboard after someone emptied a filing cabinet onto it. The filing cabinet is not a biography. Length is not corroboration. Maigret will happily write you a long report about a username shared by a plumber, a bot, and you.

### How it differs from Sherlock

- The default site list is much larger. The Consensus snapshot this course used put Maigret in the thousands of sites, against a few hundred for Sherlock. Do not paste either number into a client report. Corpora move. The project's current README is the figure you are allowed to quote.
- It tries to extract display names, bios, and linked accounts when a page loads as a profile rather than as a wall.
- It can recurse. A found profile mentions another handle, and a later run may check that handle too. That second handle is a new lead, not a proven alias.
- It is heavier and slower. More requests from your IP means more rate limits, more challenge pages, and more rows that mean "the site got annoyed" rather than "no account".

Maigret is MIT-licensed. Using it yourself to learn the workflow is the point of this lesson. If you later ship a modified copy, read the licence before you do; this course does not turn you into the distributor.

### Where it sits in OSINT101

Maigret is one of the twelve tools in this course. Do the Sherlock lesson first. That one teaches the only habit that survives contact with a big report: open the URL, score the hit, and refuse to marry a stranger who shares the handle. Use Maigret when you want wider coverage and you can sit with the extra noise. The target is still your own handle, or a test persona you created.

If you do not have a persona yet, make one before you install anything. Pick a handle unlikely to exist, such as \`pip_tadwell_osint101\`. Register it yourself on two or three free sites (a code host and a forum is enough) using an email address you control. You now know which accounts are real, because you opened them. That is ground truth. A tool does not get to overrule it.

### What you are not doing

You are not building a dossier on a neighbour, an ex, a classmate, or anyone else who did not ask. You are not turning recursion on and going to make tea. You are not treating a parsed "full name" field as an identity document. Parsed fields are text the tool found on a page. Login walls, cookie banners, and "user not found" templates all contain text. Parsers are not fussy about which text they found.

> Maigret finds more doors. You still have to walk through them and decide whether the same person lives behind each one.
        `,
      },
      {
        title: "Walkthrough on your own handle",
        duration: "12 min",
        content: `
### Ground rules

Use your own username, or the test persona from the Sherlock lesson. If you skipped ahead, build \`pip_tadwell_osint101\` (or another unlikely handle) and register it on two sites you control before you run anything. Do not point Maigret at a real private person "just to see". The tool does not know it is practice. Your IP address still does.

Before you type the command, write one sentence in your notes: "I am checking a handle I own, to learn which hits are mine, which are strangers, and which are junk." If the honest sentence names someone else, close the terminal. That rule is the whole ethics section in one line. The rest is detail.

### Install

Maigret is a Python tool. \`pipx\` keeps it out of your system Python, which is the least exciting way to have a good afternoon.

\`pipx install maigret\`

Then ask the copy you actually installed what it can do:

\`maigret --help\`

Read that help text. Flag names move between releases. If this lesson says \`--top-sites\` and your help text only shows \`-n\`, or the other way around, the help text wins. A lesson that guesses a renamed switch will teach you a flag that does nothing, and a run that "found nothing" for a boring reason. If \`pipx\` is not installed, the upstream README is the fallback. Expect at least one complaint about PATH. That is tradition, not a finding.

### Run a bounded search

A full Maigret sweep can touch a very large number of hosts. For training, keep the run small enough that you can open every hit before you get bored and start believing the tool.

\`maigret pip_tadwell_osint101 --timeout 15 --retries 0 --top-sites 50\`

That shape is a teaching default, not a contract:

- A site cap on the order of 50 is enough to learn the buckets. It is not enough to annoy half the internet. If your \`--help\` uses \`-n\` instead of \`--top-sites\`, use the flag your version documents, and keep the number small.
- \`--timeout\` stops one sulking host from holding the whole run. If the flag is absent, do not invent a replacement. Run the smaller set and be patient.
- \`--retries 0\` avoids hammering a site that already failed. If your build has no retry flag, leave the default alone rather than guessing.
- Skip Tor, proxies, and any "all sites" or deep-crawl switch for this lesson. If the README mentions them, they are for other jobs, with other rules. Class does not need a disguise.
- If a flag's description says it will automatically follow every linked username, leave it off. A pivot is a second, deliberate job. It gets its own purpose sentence. It does not get to happen while you are still scoring the first report.

Replace \`pip_tadwell_osint101\` with your handle. Save whatever the tool prints. Maigret can write HTML, PDF, or JSON depending on version. Do not memorise a filename from this page. Look at the files that actually appeared, or at \`--help\`, and open those.

### Score the report like an analyst

Build a table in your notes, not in your head. Heads: site, URL, opened in a browser, same person as you, evidence. Then walk every hit. Yes, including the ones that look obvious. Especially those.

Three buckets, same as Sherlock:

- Confirmed mine. You opened the URL and recognised an account you created. The evidence is specific: the test repo, the bio sentence you wrote, the email you know is yours showing on a page you control. "The username matches" is not evidence. You already knew the username matches. That is why the row exists.
- Exists, but not mine. A real profile loads, and it is a stranger. Different photo, different city, a bio that has never heard of your persona. Common and short handles fill this bucket. If your real handle is something like \`dazza\`, you have not found yourself. You have found a queue.
- False positive. The URL does not show an account. You got a challenge page, a cookie wall, a login form, or a "user not found" page that still returned a success-shaped response. The tool believed its rule. The browser did not.

When you are done, pick one public link from a profile you confirmed is yours: a website field on that profile, not a private message and not a link from a stranger's page. Write it down as a manual follow-up. Do not let Maigret recurse after it during class. You will do that follow-up yourself, in a browser, and you will stop after one link.

If the report includes parsed fields (a display name, a bio snippet, another handle), treat each field as a claim about a page. Open the page and see if the words are still there. If the "bio" is the text of a captcha, that is a useful result. It tells you the parser was reading the door, not the room.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Where Maigret goes wrong

Volume is not truth. A longer hit list means Maigret asked more sites, so it met more strangers who picked the same handle, and more sites whose rules are having a bad week. Beginners look at the length of the report and feel productive. Analysts look at the buckets. A fifty-row report with two confirmed hits and forty-eight false positives is a lesson. It is not a lead list you paste into a case file.

Parsed fields go wrong in ordinary ways. A site redesigns, and the old selector lifts the wrong block. A login wall returns a normal-looking page, and the parser quotes the wall: "Sign in to continue" becomes someone's bio. A soft 404 (a friendly "not found" that uses a success status code) gets marked found. None of this requires a conspiracy. It requires a website that changed on a Tuesday.

Recursion amplifies mistakes. Suppose a false-positive page contains the word \`admin\`, or a band name, or the name of the forum software. If you let the tool treat that word as the next username, the second report is about a different fiction. One bad pivot does not stay in its lane. It breeds a dossier that looks thorough because it is long. Write this in the margin: a pivot username is a hypothesis. It earns a check only after you have seen it, as a link or a bio, on a page you already trust.

Rate limits and blocks look like misses. A site that refuses your IP, shows a captcha, or simply never answers is "not detected". It is not "this persona has no account there". Absence of a row is not proof of absence of an account. Maigret's bigger list makes this easier to forget, because the report already feels complete. It is complete only for the sites that agreed to answer, under the rules in the database you happened to install.

The same failure modes as Sherlock still apply, and they apply more often because you asked more doors:

- Challenge pages and captchas that look like success to a status-code rule.
- Rules that rotted after a redesign. Active projects update rules; they do not update all of them on the day a site changes.
- Your own connection getting noticed. Hundreds of fast requests from one address is a pattern. Run one bounded search, from your own connection, for a reason you wrote down. Do not loop it. Do not "try again with proxies" because the first run was rate-limited. That is how a training exercise becomes a terms-of-service problem with extra steps.

### Turning a hit into a finding

Two accounts are the same person only when you have at least two independent matching details beyond the shared username. A reused photo. A website field on one profile that points at the other. A bio that names the other account in a sentence a stranger would not bother to write. Posting habits that line up and that you actually checked, not that you found plausible.

Maigret's extracted fields are clues for that check. They are not a substitute for it. "The tool said the display name was Pip Tadwell" means the parser emitted those words. It does not mean a human called Pip Tadwell owns the page, and it does not mean your persona owns it, unless you put those words there yourself.

> If the report is more confident than the pages you opened, believe the pages.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Same law, more temptation

Maigret's extra pages make purpose-creep feel like diligence. It is not. The legal frame is the same one Sherlock already handed you. The temptation is new, because the PDF is thicker.

If you collect username hits about an identifiable person for a business (paid investigations, HR checks, due diligence, "a favour for the boss"), the Australian Privacy Principles are in the room. APP 3 is the collection rule: solicit only what is reasonably necessary for a purpose you can say out loud. APP 6 is the use rule: do not pick up a GitHub question and wander off into fifty unrelated sites without a fresh purpose. APP 10 is the quality rule: a hit you have not opened is not accurate enough to rely on. A parsed field you have not compared to the live page is a rumour with formatting.

Recursive pivots are where APP 6 goes to die. Your purpose sentence was "does the persona's handle exist on the two sites I created?" Shipping a second username, found in a sidebar, into a new sweep is a new collection. Write the new sentence, or do not run the new sweep. "The tool offered" is not a purpose.

The statutory tort for serious invasions of privacy has been in force in Australia since 2025. Compiling a stranger's accounts to intimidate, humiliate, or sell is the sort of fact pattern that tort was written for. The Criminal Code (Cth) also makes it an offence to use a carriage service to release someone's personal data in a way that is menacing or harassing. A training report that you publish as "here is everything on this handle" can cross that line even when every URL was public. Public is not the same as yours to broadcast.

Platform terms still apply, one site at a time. Many sites ban automated access. Checking a handle you own, once, at a modest site cap, is the low-risk end of that argument. Building a product that sweeps strangers all day is a different argument, and it is not this lesson. Read the terms for any site you start to rely on. A 200 status code is not a permission slip.

In Queensland, investigating people for reward sits under the Security Providers Act 1993. This lesson teaches a command. It does not issue a licence. If money is changing hands, the licence question comes before the tool question.

> If Maigret's report is longer than your purpose sentence, the purpose sentence is the thing that is wrong.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. Name one capability Maigret adds on top of a basic Sherlock-style check.
2. Why limit \`-n\` / top sites during training?
3. A recursive pivot finds a second username. What must you do before treating it as the same person?
4. Does a large Maigret report prove identity?
5. Which APP says not to keep using personal information for a new purpose without a basis?

**Answers**

1. Broader site coverage, profile-field parsing, and optional recursive username pivots (any one is enough).
2. Full runs are slow, noisy and easy to rate-limit; a small set teaches the workflow without thrashing sites.
3. Open sources yourself and look for independent matching details — do not trust the pivot alone.
4. No. It proves which URLs passed existence rules, not who owns them.
5. APP 6 (use or disclosure of personal information).
        `,
        exercise: "Run Maigret on your test persona with a low site limit (`--top-sites 50` or equivalent). Open every hit. Sort into confirmed / not mine / false positive. Write three sentences: how the hit list compared to Sherlock on the same handle, one parsed field that was useful, and one reason you would refuse unsupervised recursion on a live case.",
      }
    ],
  },
  "whatsmyname-username-web": {
    id: "whatsmyname-username-web",
    title: "WhatsMyName: The Username Checklist You Can Read",
    description: "Use the WhatsMyName web UI and JSON rules to check a handle, then learn how detection rules actually decide 'exists'.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What WhatsMyName does",
        duration: "8 min",
        content: `
### A community list of "does this username exist?" checks

WhatsMyName is, first, a dataset. It is a community-maintained collection of rules that describe how to ask a site whether a username seems to be taken. There is a web front end in front of that dataset, which is why a beginner can run a check without installing Python and without pretending to enjoy a compiler. Each rule usually carries a URL pattern, something the tool treats as "account exists", and something it treats as "account missing". The exact keys in the file move between releases. You are going to look at the file, not memorise a schema from this lesson.

That is the useful part. Username tools disagree with each other for boring reasons, and WhatsMyName is where the boredom becomes visible. Sherlock says yes, WhatsMyName says no, and instead of shrugging you can open the rule and see which status code or which snippet of text each one hoped to find. Most of the time someone changed a template, and one project updated first. The other project is still searching for a sentence the site stopped saying in March.

WhatsMyName will not tell you the person's name, age, or whether the account is the same human as a different site. It answers a narrower question: did this rule, against this URL, come back in the shape the rule calls a hit? Opening the URL is still your job. The web UI is a faster way to get the list. It is not a faster way to skip the list.

### Licence, in plain speech

The WhatsMyName data is CC BY-SA 4.0. Using the web UI to learn, on a handle you own, does not require a essay. Republishing adapted rules does. Attribution and share-alike are the two obligations people forget, usually in that order. If a report of yours relies on WhatsMyName-derived checks, the method annex gets a credit line: the project name, the author community, the licence, and a link to the repo you actually read. "Various OSINT tools" is not a credit line. It is a shrug.

The dataset licence is not permission to ignore a website's terms, and it is not permission to ignore the Privacy Act. A Creative Commons licence governs the rules file. It does not govern the person whose username you typed.

### Where it sits in OSINT101

WhatsMyName is one of the twelve tools. Come to it after Sherlock, so you already have the three buckets (confirmed mine, exists but not mine, false positive) and you are bored of being wrong in private. Use the web UI to get a list. Use the JSON to see why a row exists. Use your browser to decide whether the row is real.

You still need the test persona. \`pip_tadwell_osint101\`, or your own handle, registered on sites you control. A gibberish username you have never registered is the second probe: it should miss. When a gibberish username "hits", you have found a rule that says yes to everyone. That is a gift. Write down the site. Do not write down a theory about a person.

> WhatsMyName is the rare tool in this course where reading the data file is the training, not the appendix.
        `,
      },
      {
        title: "Walkthrough",
        duration: "12 min",
        content: `
### Target

Your own handle, or the test persona. Not a classmate's handle, not a client's handle, not a handle you saw on a bus. If you are doing this lesson on a work machine, the purpose sentence is still "I am learning how a rule rots", not "I am checking the new hire".

### Option A: the web UI

The maintained web checker is linked from the project's README on GitHub (WebBreacher/WhatsMyName). Open that README and use the link it gives you today. Do not trust a bookmarked copy from a blog. Web UIs move, and a lookalike page with a search box is not a source.

1. Paste your test username. Nothing else. Do not paste an email address into a username box to "see what happens".
2. Let the check finish. If the page offers an export, save it. If it does not, copy the hits into your notes by hand. Hand-copying twenty rows is character-building and also how you notice a URL that is not a URL.
3. Do not re-run it five times because the first run felt short. One pass. Then the browser.

### Option B: read one rule until it is boring

On the same GitHub project, open the data file. The name has been \`wmn-data.json\` in releases this course looked at. If that name is gone, the README will point at the current file. Trust the repo, not this sentence.

Find one site you actually use, ideally one where your persona has an account, and one site where you are sure it does not. For each rule, write down three things in your own words:

- The URL template, and where the username is inserted. You will usually see a placeholder such as \`{account}\`. If the placeholder looks different, copy what the file says.
- What the rule treats as a hit. That might be a status code, a string that should appear, or a string that should not. Do not guess which. Read the fields.
- What the rule treats as a miss.

Then build both URLs in the browser. One for your persona. One for a gibberish string you have never registered, something ugly enough that a real human would not have chosen it this week. Compare the live page to the rule.

You are looking for one of four outcomes, and you will meet all four if you do this twice:

- Persona URL shows your profile, gibberish URL shows a clear miss, and the rule agrees. The rule is alive. Enjoy it. It will not stay this way.
- Persona URL shows your profile, but the rule says miss. False negative. The site changed, or the rule is matching a string that your logged-out browser does not see. Note it. Do not "fix" the rule in a client report by pretending the hit existed.
- Gibberish URL is marked found. False positive. The rule is matching a page the site shows to everybody: a login wall, a generic profile shell, a challenge page.
- The live site and the rule disagree in a way you cannot explain in one sentence. That is a stale or ambiguous rule. Your verdict is "not verified". Unverified is a finished status. It does not need a story.

### A notes table that survives contact with the JSON

For each site you bothered to open, record: the web UI's result, what the browser showed, whether the rule still matches the live page, and one sentence of why. A row that says "found / profile loads / rule valid / this is the repo I created" is a confirmed hit. A row that says "found / soft 404 / rule stale" is a false positive with a cause. Causes are what you want. A spreadsheet of bare "found" is how the last person got into trouble.

If you already have a Sherlock or Maigret list for the same handle, add a column for it. Disagreement is the interesting row. Agreement only tells you two rules are currently equally wrong or equally right. You still open the page.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Rules rot, and they rot in public

A detection rule is a small bet that a website will keep speaking the same sentence. Websites do not take that bet. They redesign, they put a cookie wall in front of the old sentence, they start returning the same HTML for missing users on purpose (that is anti-enumeration, and it is a feature for them and a headache for you). When the bet fails, the tool does not blush. It prints the result the rule required.

Some misses are the site refusing to show profiles to a logged-out visitor, or to a visitor who looks like a script. The web UI is convenient, and convenience hides the number of requests you just fired from your browser, on your connection. One username, once, is the exercise. Turning the box into a hobby, against handles you do not own, is how a learning tab becomes a terms problem.

Overlap with Sherlock and Maigret is high. That is fine. The point of a second and third list is the rows where they split. A site that all three mark as found can still be a shared false positive, if all three copied the same tired assumption. A site that only WhatsMyName marks as found is not a secret win. It is a row you open first, because unique hits are where stale rules like to live.

"Not found" remains "not detected". The rule did not see what it wanted. The account may exist behind a login, on a URL shape the rule does not build, or on a site that is not in the file. You do not get to tell a classmate they have no account somewhere because a JSON file was quiet.

Categories of junk you should be able to name without looking them up:

- Soft 404s and friendly error pages on a success status.
- Challenge pages, captchas, and interstitials.
- Generic pages that include the username you typed, echoed back, which fools a "the username appears on the page" rule.
- Rules you cannot explain. If you cannot say what the rule was looking for, you cannot defend the hit.

> When the browser and the rule argue, the browser is looking at the site. The rule is looking at a memory of the site.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### A readable rule is still a collection

Checking public profile URLs is quieter than asking a login form whether an email exists. Quieter is not the same as unregulated. If you do this for a business purpose, about an identifiable person, the Australian Privacy Principles apply to the collection. APP 3 asks whether the check is reasonably necessary for the purpose you wrote down. APP 6 asks you not to reuse the list for a new purpose because it was sitting in the downloads folder. APP 10 asks you not to rely on a hit you failed to open. "The web UI said found" will not satisfy APP 10. The opened page might.

Publishing the compiled list is a separate decision from making it. The statutory tort for serious invasions of privacy, in force since 2025, and the Commonwealth doxxing offences around releasing personal data via a carriage service in a menacing or harassing way, both care about what you do with the pile. A training note that stays in your notebook is not a thread. A thread titled with someone's real name is not a training note.

CC BY-SA covers your duty to the dataset's authors if you republish adapted rules. It does not cover your duty to the person, and it does not cover your duty to the platforms. Many sites forbid automated collection in their terms. The web UI is still automation wearing a form. Using it on a handle you own, for this exercise, is the path this course will defend. Using it as a casual background check on applicants, neighbours, or dates is a purpose problem first and a terms problem second.

In Queensland, investigating people for reward is licensed work under the Security Providers Act 1993. Reading a JSON file does not change that. If there is a client, there is a licence question, and there is a purpose note, and there is a decision about what you will not collect. WhatsMyName's friendliness is not a factor in that decision. Friendly tools are how sloppy collections get large.

Write the attribution line in the annex when you rely on the data, keep the raw hits out of the annex until they have been opened, and keep other people's handles out of the exercise entirely.

> The data file is open so you can see the rule. It is not open so you can skip the law sitting behind the rule.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. What is WhatsMyName, primarily — an API, a dataset, or a people-search engine?
2. Why open the JSON rule after a surprising hit?
3. What licence covers the WhatsMyName data?
4. A rule says "exists" but the browser shows a not-found page. Who is wrong?
5. Name one APP relevant to collecting username hits for client work.

**Answers**

1. A community dataset of site-check rules (with optional web UI).
2. To see which status/string it expected, and whether the site changed.
3. CC BY-SA 4.0.
4. Usually the rule (stale). Trust the browser check for that site.
5. APP 3 (collection) — also APP 6/10 when you use the results.
        `,
        exercise: "Check your test persona in the WhatsMyName web UI. Pick one hit and one miss, open both URLs manually, then open the matching JSON rules. Write four sentences: whether each rule still matches the live site, one disagreement with Sherlock or Maigret if you have those results, and one attribution line you would put in a report annex if you relied on WMN-derived data.",
      }
    ],
  },
  "user-scanner-username-email": {
    id: "user-scanner-username-email",
    title: "User Scanner: Username and Email in One Noisy Suitcase",
    description: "Use User Scanner's username checks on your own handle, keep any email experiment on your own address, and leave recovery-style modules alone.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What User Scanner does",
        duration: "8 min",
        content: `
### Two tools sharing a trench coat

User Scanner checks usernames and, separately, emails, across a large site list. It is in this course because it is actively maintained and because it covers both kinds of identifier in one project. That second feature is also the hazard. A username check loads the same family of public profile URLs you already met in Sherlock. An email check talks to account systems, the way Holehe does. One install, two very different legal weathers. You do not get to notice only the sunny one.

Consensus-OSINT vendors a modified copy and tags some email modules as \`loud\` when they may notify the account holder: password-reset style traffic, messages, anything that makes a human's phone buzz. Those tags exist so a careful operator can leave them off. This lesson leaves them off. It does not "try loud once on my own email to see the template". Your own inbox is where you notice the mistake. It is not a sandbox for practising the mistake.

For the required walkthrough, stay on username checks, against your handle or \`pip_tadwell_osint101\`. Email mode is optional, and only against an address you own. If you cannot see, in the help text, a clear way to keep recovery and notify behaviour off, you skip email mode. You already have a safer explicit switch in the Holehe lesson: \`holehe -NP\`, and only \`-NP\`. Do not invent a User Scanner equivalent by turning on extra modules "because Holehe was fine".

### What "maintained" does and does not buy you

An active project fixes rules faster than a dead one. It does not make today's rules true. User Scanner's list is large (the Consensus snapshot counted it in the thousands of username sites, plus a much smaller set of email modules). Large lists contain fresh rules and rotten ones in the same afternoon. Maintenance is a reason to prefer this project over an abandoned scanner. It is not a reason to skip the browser.

The licence is MIT. Same as Sherlock: fine to use, and not a substitute for platform terms or the Privacy Act.

### Where it sits in OSINT101

This is the lesson where it is easiest to enable something you did not mean to enable, because the tool is keen and the help text is long. Read the flags twice. Then run the smallest command that is obviously a username search.

> One tool, two personalities. Only the polite one is invited to class. The other one stays in \`--help\`, unread and unselected.
        `,
      },
      {
        title: "Walkthrough",
        duration: "12 min",
        content: `
### Username mode, which is the actual exercise

Install the way the upstream README tells you, for the release you are actually using. The command name in recent documentation is \`user-scanner\`. If the binary on your machine answers to something else, trust the binary. Then:

\`user-scanner --help\`

Read it from top to bottom once, before you give it a handle. You are looking for three things, and you will write them in your notes:

- Which flag means "this is a username, not an email". The example shape below uses \`--username\`. If your help text uses a different switch, use that switch.
- Which flags limit how hard you hit the network: concurrency, threads, timeouts, a site cap, a category filter. If they exist, choose the boring values. Low concurrency. A timeout. Skip categories you do not need.
- Which flags talk about recovery, reset, notify, or loud. You are not using those today. If they default to on, and you cannot see how to turn them off, stop and do not run the tool. Go back to Sherlock for usernames and to \`holehe -NP\` for email. A tool you cannot keep quiet is a tool you do not run in this course.

A reasonable teaching shape, if \`--help\` agrees, is:

\`user-scanner --username pip_tadwell_osint101\`

If \`--help\` does not agree, do not force that line. Adapt it until it matches the help text, and keep it username-only. Save the output. Open every hit in a browser. Score the three buckets you already know: confirmed mine, exists but not mine, false positive. A captcha page is the third bucket, even if the tool printed a green tick, a plus sign, or the word FOUND in all capitals. Capital letters are not a verification step.

Give yourself a written quota. Ten hits, opened properly, with a sentence of evidence each, beats two hundred hits you scrolled past. The exercise at the end of this lesson asks for ten. Do not "get ahead" by verifying none.

If the help text offers a way to exclude categories, turn off adult and dating categories. Those results can be sensitive information. You do not need them to learn what a false positive looks like. A false positive on a code host teaches the same lesson, with less harm and less awkwardness.

### Email mode, optional, and easy to get wrong

Only consider email mode after the username run is scored. Use an address you own, or a disposable address you created and registered yourself. Watch the inbox of that address from before you press enter until ten minutes after the run finishes.

Skip any option that resembles password recovery, a notify switch, a reset, or the word loud. If you are not sure whether a module notifies, you are sure enough: leave it out. If the tool has no way to express "username only" versus "email, but quiet", skip email entirely.

If a reset message arrives, you have learned the only fact email mode was going to teach you. Stop. Note the module name if the output shows one. Do not re-run it. Do not try it on a different address to "confirm it was the module". One surprise email is a result. Two is a hobby.

Do not pair User Scanner with any other reset-style tool in the same hour. Do not pass your address to a second checker "to compare" until you know the first one stayed quiet. Comparison is a username-tool habit. It is a bad email-tool habit, because the cost of a wrong module is a message to a human, not a wrong row in a CSV.

### What to write down before you close the laptop

One paragraph, four facts. How many username hits you opened. How many were actually yours. Whether you attempted email mode. The sentence "I did not enable any loud, recovery, or notify option", which you only write if it is true. If it is not true, you do not write a softer sentence. You write what you turned on, and you do not do it again.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Fast lists, slow truth

User Scanner's site list moves, which is why it earned a place in the twelve. A moving list means a module that worked on Monday can be wrong on Thursday without the project being abandoned. Expect wrong rows on any given day. The wrongness looks like every other username tool: soft 404s, challenge pages, login walls, echoed usernames, rules aimed at a layout the site retired.

Email modules are a different error budget. They talk to account systems. A "registered" answer can mean the endpoint responded in the shape the module expected. It can also mean the endpoint changed and the module is guessing. A "not registered" answer can mean a rate limit, a captcha, or a site that returns the same response either way so strangers cannot enumerate accounts. You cannot collapse those into "no account". You especially cannot collapse them into "this person does not use that service".

Loud modules are not an accuracy feature. They are a side effect. The side effect is that the account holder learns someone probed the address, because a reset email or a code arrived. In an investigation that is a tip-off. In this course it is a failed exercise, even when the address is yours. You are practising the quiet path so that "I wonder what loud does" never feels like a normal next step.

High concurrency makes false negatives. If you fire too many checks at once, sites start refusing you, and the refusals look like clean misses. The report gets shorter and you feel efficient. You were blocked. If \`--help\` shows a concurrency or thread flag, keep it modest. If the run starts failing halfway, stop. Do not immediately retry harder. Wait, and if you must retry, retry a smaller set on the next day, still on your own identifier.

Adult and dating categories stay off for two practical reasons on top of the legal one. The rules are no more reliable than the rest of the list, and a false positive in that category is a worse sentence to have in a notebook than a false positive about a forum. Sensitive information is not a prize for scrolling further down the help text.

> A green row is a claim about an HTTP conversation. Your browser is the cross-examination.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Username weather and email weather

Hold the two modes apart in your notes, because the law and the terms treat them differently even when one binary runs both.

Username checks are the noisy-passive end. You are requesting public URLs. For a business purpose, about an identifiable person, that is still a collection under the Privacy Act. APP 3 (only what is necessary), APP 6 (only for that purpose), and APP 10 (good enough to rely on) all apply. A hundred unverified rows fail APP 10 in bulk. Platform terms may still forbid the automation. Your own handle, one modest run, is the use this lesson stands behind.

Email checks sit closer to Holehe. You are asking login and signup machinery about an address. Unauthorised access to computer systems is an offence under the Criminal Code (Cth) Part 10.7 and, in Queensland, the Criminal Code s 408E. Whether a particular registration probe meets that test is a question for a lawyer with the facts, not a question this course will answer by vibes. Until you have written advice for client work, email mode stays a self-check. Deliberately triggering a password reset to "confirm" an inbox is not a technique we teach, and it is a miserable thing to have to explain.

APP 8 turns up as soon as the address or the username is sent to overseas platforms, which is most of them. Know that you did that. A purpose note that pretends the data never left the laptop is fiction.

APP 3.3 is why adult and dating categories stay off. Information about a person's sexual life is sensitive information. You do not collect it because a category list was long and you were curious. Curiosity is not a permitted general situation.

The statutory tort for serious invasions of privacy (since 2025) and the Commonwealth offences about releasing personal data via a carriage service in a menacing or harassing way both apply to what you publish afterwards. "The tool supports email" is not a defence to publishing a list of accounts tied to a real person.

Queensland paid investigation work remains licensed under the Security Providers Act 1993. User Scanner's pace of development does not change the licence, the purpose note, or the rule that practice targets are yours.

> If you cannot point at the help-text line that kept the run quiet, you do not have a quiet run. You have a hope.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. What two identifier types does User Scanner cover?
2. Why might you skip its email mode and use \`holehe -NP\` instead?
3. What is a \`loud\` check in Consensus terms?
4. Should adult/dating categories be on for training?
5. A username hit loads a captcha page. How do you score it?

**Answers**

1. Usernames and emails.
2. If User Scanner cannot clearly disable recovery/notify modules; Holehe's \`-NP\` is an explicit safe switch.
3. A module that may email/SMS the account holder (for example a password reset).
4. No — sensitive information risk and irrelevant to learning the workflow.
5. False positive / unknown — not a confirmed profile.
        `,
        exercise: "Run a username search on your test persona. Document ten hits with browser verification. State in two sentences whether you attempted email mode (and if not, why). Confirm in one sentence that you did not enable any loud/recovery option.",
      }
    ],
  },
  "gosearch-username-go": {
    id: "gosearch-username-go",
    title: "GoSearch: One Binary, Three Hundred Doorbells",
    description: "Install a single Go binary, check your own username across hundreds of sites, and compare the hit list to Sherlock without drowning in Python packaging.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What GoSearch does",
        duration: "8 min",
        content: `
### Username checking without the Python soap opera

GoSearch is a username checker written in Go. You download one binary, or you build one, you point it at a handle, and it tests a few hundred sites for a matching profile URL. Functionally it sits next to Sherlock: public pages, existence rules, a printed list of hits. It does not read minds, and it does not become more accurate because the download was a single file.

There are three reasons it is in the twelve, and none of them is "it finds the truth Sherlock missed".

First, a single binary is kinder on a locked-down Windows or Mac machine where \`pipx\` is a fight with an administrator who has already said no. Second, the project has been actively maintained, unlike several username tools that were cut from this course for going quiet. Third, comparing two tools on the same handle is how you learn that FOUND is a vote. Votes can be wrong in unison.

The Consensus snapshot used for this course put GoSearch at a few hundred sites, not Maigret's thousands. Fewer hits than Maigret is the normal outcome, not a sign you broke it. Quote a site count in a report only after you have read the README for the version you ran. This paragraph will go stale. The binary's own documentation will not, if you bother to open it.

The licence is GPL-3.0. Running it yourself, unmodified, to study your own handle, is the use this lesson describes. If you later give someone else a modified binary, GPL-3.0 expects you to offer them the corresponding source. "I found a build on a forum" is not the interesting part of that sentence. Shipping code you cannot hand over the source for is how a tidy install becomes a licensing mess. Using the upstream release, as a learner, does not require you to solve that today. It requires you not to pretend the licence is MIT.

> If your laptop treats Python like a contagious disease, GoSearch is the spare key. The spare key still opens the wrong doors.
        `,
      },
      {
        title: "Walkthrough",
        duration: "12 min",
        content: `
### Target

Your own username, or \`pip_tadwell_osint101\` if you have been a good student and built the persona. Create the persona before you blame the tool for "finding nothing". Nothing is the correct result for a handle that exists nowhere. It is also the correct-looking result for a tool that never ran. You need to know which one you are looking at.

Write the purpose sentence first. "I am comparing one Go binary with Sherlock, on a handle I own, to see where they disagree." That sentence keeps you from adding a second, real person's name "as a control". You do not need a control. You need a disagreement you can open in a browser.

### Install

Follow the upstream README for a release binary that matches your operating system. That is the path of least drama. If you already have a Go toolchain and you prefer to build, the module path this course is willing to print is:

\`go install github.com/ibnaleem/gosearch@latest\`

If that path fails, stop typing variants. Go back to the README. Projects move modules. A lesson that "helpfully" guesses the new path will send you to someone else's repository.

When a binary exists, ask it for help before you give it a person-shaped string:

\`gosearch -h\`

If \`-h\` is silent, try \`--help\`. If both are silent, you do not have the tool you think you have. Find out what you installed before you interpret an empty hit list as a finding about your persona.

Read the flags with one question in mind: what limits the run? Timeouts, a site filter, an output file. Use a timeout if one is documented. Avoid Tor and proxy switches for class. If the help text's only mode is "check everything", run it once, on your handle, and do not loop it. Save stdout to a file yourself if the tool does not write a CSV. You will want the list beside Sherlock's list, and terminal scrollback is where evidence goes to die.

### Run, then sit on your hands

A teaching shape, if the help text shows a single positional username and nothing alarming, is:

\`gosearch pip_tadwell_osint101\`

If your version wants flags around that, add only flags you saw in \`--help\`. Do not copy a ten-flag incantation from a gist. Gists survive longer than flags do.

Let it finish. One run. If it errors halfway, read the error. A missing library or a refused site is not a clue about Pip Tadwell. Fix the install or accept the partial list, and label the partial list as partial.

### Verify, which is the whole point of a second tool

Open every hit. Sort into confirmed mine, exists but not mine, and false positive. Then put Sherlock's CSV, or a short Maigret run, beside it. A useful row records four things: the site, what GoSearch said, what the other tool said, and what the browser showed.

You are hunting disagreements, and you are hunting lazy agreements.

- Both tools hit, and the browser shows your test account. Confirmed. Dull. Necessary.
- GoSearch hits, Sherlock misses, the browser shows a soft 404 or a cookie wall. GoSearch false positive. Sherlock's silence was the better answer, this time, on this site.
- Sherlock hits, GoSearch misses, the browser shows your profile. GoSearch false negative. Smaller corpus or a staler rule. Not a moral victory for Sherlock.
- Both tools hit, the browser shows a challenge page. Shared false positive. Agreement was the trap.

Write one sentence on the disagreement you found most annoying. Annoyance is a sign you expected the tools to be oracles. They are notebooks with initiative.

> Tools do not argue because one of them is honest. They argue because their rules are different ages.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### A smaller net, the same holes

GoSearch's shorter site list is a feature during training. You can finish the verification. It is a limit on a real question: a miss only means "not in the sites this binary checked, or not detected there". People hear "no hits" and translate it to "no accounts". The translation is the error. Maigret can still be noisy on a handle GoSearch shrugs at, and both can be wrong about the one site you care about.

The false-positive classes are the ones you already know from Sherlock, and they do not get a special exemption for being compiled:

- Soft 404s and branded "user not found" pages that return a success status.
- Captcha and interstitial walls that look like a profile to a bored rule.
- Status-code lies, where the site says 200 for everything, including nothing.
- A username echoed on a generic page, which satisfies a "the name appears" check.

False negatives are just as ordinary. The site blocked the request. The rule looks for a string the redesign deleted. The profile exists only when you are logged in, and you are not. A binary does not negotiate with any of that. It prints the rule's opinion and moves on.

Rate limits still apply. A single file is not a cloak, and it is not a queueing system. If you run GoSearch, then Sherlock, then Maigret, then Aliens Eye, then FindMe, back to back, against the same handle, you have introduced yourself to a lot of front doors in one hour. For this lesson, GoSearch plus one other tool is the comparison. Save the grand tour for a later week, and still only on your persona.

GPL-3.0 does not change the false-positive rate. It changes your obligations if you redistribute a modified program. Do not strip the licence notice off a binary because it "looked untidy in the screenshot". The screenshot is not the compliance step. Keeping the upstream licence text with the tool is.

Overlap with Sherlock is high on purpose. Use GoSearch as a cross-check of rules, not as a second full-time personality in your toolkit. If, after a careful diff, it never adds a confirmed hit and it adds several false positives, you are allowed to delete it. That outcome is success. It is discussed again in the FindMe lesson, because some people need to hear it twice.

> Fewer sites is not a defect until you needed one of the sites it skips. More sites is not a virtue until you open them.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Three tools is not three times more lawful

The Australian frame does not reset because you changed programming languages. Collecting username hits about an identifiable person, for a business, still engages APP 3 (necessary for the purpose), APP 6 (no fresh purpose without a basis), and APP 10 (do not rely on rubbish). Running GoSearch and Sherlock on a stranger does not average out into a lawful collection. It is the same collection, done twice, slightly louder, with two different false-positive accents.

APP 8 matters when the checks land on overseas sites, which they will. Your notes should be able to say "these requests left the country" without surprise. A purpose note that says "local checks only" is false for this entire track.

Platform terms are a per-site problem. The binary being yours does not make their servers yours. Automated access is restricted on a lot of the sites in every username corpus. One run, on a handle you own, for a written learning purpose, is the low-risk end. A scheduled job that sweeps new usernames every night is a product, and products need a conversation you are not having in this lesson.

The statutory tort for serious invasions of privacy (since 2025) and the Commonwealth doxxing offences about menacing or harassing release of personal data via a carriage service both care about publication. Keep the diff in your exercise notes. Do not post it with a real person's name attached because the disagreement was interesting.

Queensland's Security Providers Act 1993 still sits on top of paid investigative work. A Go install is not a licence. If the task is a favour that is actually a job, stop and sort the licence before you sort the PATH variable.

> The spare key is allowed to open your own door. It is not allowed to try every door in the building because the build succeeded.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. What practical advantage does a Go binary have for some learners?
2. What licence is GoSearch under?
3. Why compare GoSearch hits to Sherlock on the same handle?
4. A site appears only in GoSearch and the browser shows a cookie wall. Verdict?
5. Does using two username tools change Privacy Act obligations?

**Answers**

1. Easier install on machines where Python packaging is painful; one binary to run.
2. GPL-3.0.
3. Disagreements reveal stale or differing detection rules; neither list is gospel.
4. Unknown / false positive until a real profile is confirmed.
5. No. Collection for a business purpose still needs a lawful purpose under the APPs.
        `,
        exercise: "Run GoSearch on your test persona. Verify hits in a browser. Diff the list against Sherlock (or Maigret `--top-sites 50`). Write four sentences: install friction compared to Sherlock, one shared hit, one disagreement and how you resolved it, and whether you would keep GoSearch in your personal toolkit.",
      }
    ],
  },
  "aliens-eye-username": {
    id: "aliens-eye-username",
    title: "Aliens Eye: Another Username Net (Use It to Argue With Yourself)",
    description: "Run a third username checker on your own handle and practise reconciling disagreements between tools instead of trusting the longest list.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What Aliens Eye does",
        duration: "8 min",
        content: `
### Yes, another username scanner, on purpose

Aliens Eye checks a username across a wide set of sites. The Consensus snapshot for this course put that coverage in the high hundreds. The licence is MIT. The project was still receiving pushes when this lesson was written. Both of those facts can change. Before you tell anyone the tool is "active" or quote a site count, look at the repository, not at this paragraph.

Feature-wise it will feel familiar if you have done Sherlock and Maigret. You feed it a handle. You get candidate profile URLs back. There is no special sensor hiding in the name. A username tool with a dramatic name still fetches pages and applies rules.

It is in the twelve because comparison is a skill, and beginners treat the tool with the biggest number as the winner. Analysts treat disagreement as a checklist. Aliens Eye is the sparring partner. You already have Sherlock. You may have Maigret and GoSearch. A third list is useful only if you do the reconciliation. If you only keep the longest list, you have learned shopping, not tradecraft.

Some blurbs in the wider ecosystem attach the word AI to tools in this family. If the README in front of you mentions a model, an agent, or a score, ignore it as evidence. A URL you can open is evidence. A paragraph the tool wrote about the URL is a summary of a page you should have opened. Summaries of pages you did not open are how fictional case files get their confident tone.

> The point is not to marry a fourth username tool. The point is to catch the first three being incomplete, and to catch this one being confident.
        `,
      },
      {
        title: "Walkthrough",
        duration: "12 min",
        content: `
### Target

Your test persona or your own handle. If \`pip_tadwell_osint101\` already has Sherlock notes, reuse them. The exercise is a reconciliation, and reconciliation needs two earlier columns. If you have no earlier columns, run Sherlock first, even if you are impatient. Aliens Eye with nothing to compare against is just another list, and this course is not short of lists.

Purpose sentence, written down: "I am comparing three username tools on a handle I own, and I will believe the browser where they split."

### Install, without folklore

Follow the upstream README for Aliens Eye (the repository name has used an underscore: Aliens_eye). It is a Python CLI. Use whatever install method the README currently prefers. Do not invent a package name by swapping spaces for hyphens until something installs. The something might be a different project.

When it runs, ask for help:

\`aliens_eye --help\`

The command name itself may differ. The lesson's \`aliens_eye pip_tadwell_osint101\` line is a shape, showing "binary, then the handle", not a promise that the executable is spelled that way on your disk. If \`--help\` shows another name, another order, or a required flag, follow \`--help\`.

Keep the run ordinary.

- No Tor requirement for class. If the README treats Tor as optional or recommended for other work, leave it off.
- No "scan everything, then scan it again" mode. If \`--help\` offers a site limit or a category filter, use the limit. A shorter list you finish is worth more than a complete list you do not open.
- No proxy chain you copied from a forum signature.
- One handle. Yours.

Save the output under a boring filename that includes the tool name and the date you actually ran it. Future-you will not remember which terminal tab was Aliens Eye.

### The reconciliation sheet

Build a sheet with one row per site that any of your tools mentioned. Columns: site, tool A (Sherlock or Maigret), tool B (GoSearch or the other one), tool C (Aliens Eye), browser truth, bucket.

You will not have time to be equally curious about every row, so spend the time in this order:

1. Rows where the tools disagree. Open all of them.
2. Rows where only one tool has a hit. Open all of them. Unique hits are where a stale rule hides behind a feeling of discovery.
3. A sample of rows where all three agree, including at least one you know is yours and at least two you did not expect. Agreement is not a holiday. Three stale rules can hold hands.

Browser truth is a short phrase, not a tick. "My test repo, created for this course." "Stranger, different photo, bio in another city." "Cookie wall, no profile." "Soft 404, page says user not found." Ticks cannot be audited. Phrases can.

If a tool prints a confidence number or a generated sentence, do not add a column for it. The number did not open the URL. You did.

> Most of the learning is in the rows where the tools refuse to sing together. A wall of identical yeses is a wallpaper.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Overlap, unique hits, and the choir problem

High overlap with Maigret and Sherlock is the expected picture. The corpora rhyme, even when they are not copies. A unique hit needs extra suspicion, not extra excitement. The usual story is a rule the other projects already dropped, still firing on a page that is not an account. Sometimes the unique hit is real, and the other tools are stale. You cannot tell those stories apart from the spreadsheet. You can tell them apart in the browser, and only there.

An "AI" label does not repair a soft 404. If the tool explains a hit in a fluent sentence, the sentence is only as good as the page. Fluent and wrong is the failure mode of both humans and models. Your standard stays physical: does a profile load, and is it the persona?

Maintenance being "good" is not the same as Maigret's pace, and it is not a promise about next month. Expect stale rules. Expect a site that worked in the project's example screenshot to fail in your kitchen. Screenshot docs are marketing with a border.

Running three full sweeps multiplies two costs. Your IP shows up at more doors, which is a terms-of-use and rate-limit problem. And you collect more personal information, even when the handle is yours, the moment a stranger's profile is a hit. For training, keep lists short where the flags allow it. Where they do not, do not compensate by adding a fourth tool. Compensate by verifying fewer rows properly instead of all rows badly.

The familiar junk drawer, so you can name it in the quiz of your own head:

- Challenge pages scored as profiles.
- Soft 404s.
- Login walls whose HTML contains the username.
- Rate-limit gaps that you record as "not present" because the row is missing.
- A parsed bio that is actually the site's footer, repeated on every page, including the missing-user page.

> If only one tool saw it, your first theory is "stale rule", not "hidden account". The browser is allowed to prove you wrong. The theory is not allowed to skip the browser.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Stacking tools is not a legal strategy

APP 3 still asks whether the collection is reasonably necessary for a stated purpose. "I wanted three tools" is not a purpose. "I am learning how disagreement works, on a handle I created" is a purpose, and it has a natural end: when the sheet is filled. Three noisy scanners against a private individual, for practice, fails APP 3 on the purpose and fails basic manners on the way there. It may fail more than that, depending on what you do with the results. Do not find out.

APP 6 is the anti-hoarding principle in this track. A reconciliation sheet built for study does not become an HR file on Monday without a new purpose, a new necessity test, and a hard look at APP 10. Most of the rows will not survive APP 10, because most of the rows were never opened. That is a reason to open fewer sites about other people, not a reason to open all of them "so the file is compliant". The compliant version of a practice run is the one that was about you.

APP 10 is the browser column. A tick mark copied from the tool is not a quality check. The phrase you wrote after looking at the page is the quality check. If you would be embarrassed to read that phrase to the person, you have your answer about whether to keep the row.

Platform terms get less sympathetic as the request count rises. Three full corpora are a lot of automated GETs. Modest runs, own handle, no evasion (no Tor, no proxy roulette) is the line this course draws. Evasion does not make a terms breach polite. It makes it look planned.

Publication risks are unchanged: the statutory privacy tort since 2025, and Commonwealth offences about using a carriage service to release personal data in a menacing or harassing way. A reconciliation sheet with a stranger's name on it is a document. Treat it like one.

Queensland paid work still needs the right licence under the Security Providers Act 1993. Aliens Eye does not get a special entry in that Act for having an energetic name.

> Practice targets are accounts you opened, or a persona you invented and registered. Anyone else's name is a different course, and this is not it.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. Why is Aliens Eye in the course if Sherlock and Maigret already cover usernames?
2. What should you do with a hit that only one of three tools reports?
3. Does an "AI-assisted" label change how you verify a URL?
4. Name one risk of running multiple full username sweeps on the same target.
5. Who owns the only practice targets allowed in this lesson?

**Answers**

1. To practise reconciling disagreements, not to crown a winner.
2. Open it manually and treat it as untrusted until confirmed; unique hits are often stale rules.
3. No. You still open the URL and look for a real profile.
4. More rate limits, more ToS exposure, more personal information collected without clearer purpose.
5. You — your accounts or a test persona you created.
        `,
        exercise: "Run Aliens Eye on your test persona. Produce a reconciliation sheet against two other username tools. Write five sentences covering: how many triple-agreements you saw, one disagreement and the browser outcome, whether any unique hit survived verification, how long the runs took, and which single tool you would keep if forced to delete two.",
      }
    ],
  },
  "linkook-account-linking": {
    id: "linkook-account-linking",
    title: "Linkook: Follow the Links They Publish About Themselves",
    description: "Trace linked social accounts and emails from public profile connections \u2014 tradecraft that beats brute-force username blasting when the subject helpfully links their own footprints.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What Linkook does",
        duration: "8 min",
        content: `
### The subject did half the work, or they did not

Most of the tools in this track ask a large number of sites a repetitive question: do you know this handle? Linkook is here because that question is not always the best question. People publish links to their other accounts. A code-host README, a bio with three handles, a personal site with a row of icons, a link-in-bio page. Those links are statements the person made on purpose, in public. Following them is closer to reading than to trawling.

Linkook helps collect linked social accounts, and emails when those emails are actually published on the pages it can see. The Consensus snapshot counted a small username-site list next to Maigret's thousands. If you came here for coverage, you came to the wrong lesson. The value is the edge between two accounts, with a page you can cite. A tool that returns fifty unexplained URLs has not done Linkook's job. It has done a shy version of Sherlock's job.

It will not invent links that are not on the page. A quiet subject stays quiet, and that quiet is a result. A person who treats their handle as a brand will hand you a map, because the map is the brand. Both outcomes are allowed to be the end of the enquiry. "The tool found little" does not trigger a fallback to blasting four hundred sites unless your purpose sentence says that is the next step. Often it should not.

Parsers read HTML. They miss what a browser only builds after JavaScript runs. They also "find" links that are site chrome: the forum's own Twitter, the template's placeholder, the "share this" button. Your job is to keep those out of the graph. Linkook's job is to show you candidates. Candidates are not edges.

> Brute-force username search is a trawl. Link following is reading the brochure they left at the door. If there is no brochure, do not forge one.
        `,
      },
      {
        title: "Walkthrough",
        duration: "12 min",
        content: `
### Build a subject who actually links things

Use your own public profiles, or a test persona you build with deliberate cross-links. The useful fixture looks like this, and you control every node of it:

- A code-host account for \`pip_tadwell_osint101\` whose bio or README names a personal page you also control.
- That personal page, a single HTML file is enough, with one outbound link to a third profile you created (a fediverse account, a forum, a second code host).
- Optional: the same page lists an email address you own, written in clear text, not as a puzzle. You want to see whether a parser can lift an address that is really there. You do not want to hide it from yourself.

Do not practise on a stranger's link-in-bio page. Their brochure is public. It is still not your lab. The difference matters the moment a parser attaches the wrong email to the wrong name and you screenshot it.

Purpose sentence: "I am following links I published, between accounts I created, and I will drop any edge I cannot cite."

### Install and run, then distrust the picture

Follow the upstream README. The command shape in this lesson is:

\`linkook pip_tadwell_osint101\`

That is a shape: tool, then starting username. Run \`--help\` (or \`-h\`) on the installed binary and obey it if the shape is wrong. Some versions want a profile URL instead of a bare handle. Give them the URL of a page you published. Do not give them a URL you merely found interesting.

If \`--help\` offers a depth or recursion limit, set it low. One hop is enough to learn what an evidence URL is. A deep crawl of everyone your persona follows is a different project, and it fails the purpose sentence you just wrote.

No Tor homework. No credential flags. If the tool asks you to log in, you are in the wrong mode. Public pages only. Logging into a platform to pull a friends list is not link-following. It is access to an account, and it is out of this lesson entirely.

### Draw the graph on paper

Paper is the right technology. A tool's graph view will look more certain than your evidence, and certainty is the bug.

- Start node: the profile or URL you entered.
- An edge exists only if you have an evidence URL: the page where the link was visible to you, in a browser, not only inside the tool's JSON.
- The other end of the edge is the account or address that page actually pointed at.
- No evidence URL, no edge. Delete it. You can be fond of it and still delete it.

For each edge, write what kind of thing it is. "Bio link on the code host, to my page." "Footer icon on my page, to the forum account." "Email address in the page source, and it is the one I typed there yesterday." If you cannot finish the sentence, it is not an edge.

Open every linked profile and confirm it is still your persona. Tools mis-parse HTML. Humans mis-click. A link that used to be yours and now points at a parked domain is a dead edge. Record the death. Do not quietly relabel it.

If an email appears that you did not publish, stop treating the graph as a map of you. Note the address only as "unverified, not mine, not to be probed". You do not send mail to it. You do not run Holehe against it. You do not run Mailcat against the local-part for sport. The Holehe lesson, if you do it, stays on \`holehe -NP\` and on an address you own.

### A manual lap, even if the tool was perfect

Do one hop yourself, without the tool, from the same start page. View source if you have to. Compare your hop to Linkook's hop. The difference is the lesson: what the parser saw, what it invented, and what a browser-only human saw because the link was an icon with no useful anchor text. Write four lines. The exercise wants that comparison in spirit, even where it asks for sentences rather than a drawing. Keep the drawing anyway.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Quiet people, noisy templates, shared doors

Linkook, and any tool doing this job, only finds what is publicly linked and what its parser can read. A careful person with no cross-links yields almost nothing. That is not a malfunction you fix by switching to a five-thousand-site username blast. It is the subject declining to publish a map. Your purpose may end there. Good investigations end.

JavaScript-heavy pages and heavily themed link-in-bio services break simple parsers. You will open a page, see six icons, and the tool will report one link or none. Believe the page you can see, then decide whether the missing icons are worth adding by hand. Adding them by hand, with the evidence URL, is legitimate. Telling the tool to "try harder" with a proxy is not the fix.

Shared links are the identity trap. A company About page lists five staff accounts. A band lists four members. A project README links the organisation's chat. Those edges are real, and they do not merge the humans into one human. Your graph needs node labels that say "employer page" or "project", not a single blob called "the subject". If you cannot bear to split the nodes, you are not ready to write a finding.

Chrome and boilerplate produce false emails and false accounts. The word \`support@\` on a documentation site, the template author's credit link, a "follow us" icon that points at the platform itself. If the same link appears on every profile on that site, it is not a personal link. Check a second, unrelated user before you fall in love with an edge. Two minutes of that check prevents a very stupid paragraph.

Emails lifted from public pages are still personal information when they identify someone. Finding one does not authorise a registration probe, a password reset, or a "quick" Holehe run against a stranger. This track's email tools stay on addresses you own. Linkook does not create an exception by having found the address in a footer.

Coverage is the wrong scoreboard. Linkook is not a replacement for a Sherlock-class sweep, and a Sherlock-class sweep is not a replacement for reading the links a person bothered to publish. They are different moves. Use the move that matches the purpose sentence. Using both, on someone else, because both are installed, is how purpose sentences get embarrassed.

> If the edge has no page, it is not an edge. If the page lists a whole team, it is not one person.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Published is not donated

Following links a person put on a public page is usually easier to explain than asking a hundred signup forms whether their email exists. Easier to explain is not the same as unregulated.

For a business purpose, those links and any names or emails on them are personal information about an identifiable person. APP 3 still requires the collection to be reasonably necessary. APP 6 still stops you using a link graph built for one question as the starter pistol for a different question. APP 10 still requires you to check that the link says what you think it says. A parser output you did not open fails APP 10 in a single line.

APP 8 is in play when the pages and the accounts sit on overseas services, which they almost always do. Say so in the method note. Do not describe a public-page read as a purely local act.

Platform terms have not left the building. Some sites forbid automated collection even of public pages. A modest run against pages you yourself published is the training case. Pointing a crawler at a platform that has already told bots to go away, and then routing it through Tor because the README mentioned Tor, is not a clever reading of the terms. This lesson does not use Tor, does not use logged-in sessions, and does not follow links into private groups, friend-only posts, or anything behind a password.

The line that matters in practice: you may read what the page shows a logged-out visitor. You may not "just log in" with your own account to see more, and you may not use a reset flow to test an email the page revealed. The moment a check would notify a human, you are in Holehe's loud-module territory, and that territory stays closed. Holehe, if you use it at all in this course, stays \`holehe -NP\`.

Publishing the graph is a new act. A notebook graph of your persona is coursework. A public graph of a real person, with emails attached, can be a serious invasion of privacy under the statutory tort in force since 2025, and it can be the kind of carriage-service release of personal data the Criminal Code (Cth) now treats as a doxxing offence when it is menacing or harassing. Keep coursework in the course.

Queensland investigators who do this for reward still need to care about the Security Providers Act 1993. Link following feels gentle. Gentle paid investigation is still paid investigation.

> The brochure is public. Your copy of the brochure, stapled to a name and posted on the internet, is a publication. Decide which one you are making.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. How does Linkook's main approach differ from Sherlock's?
2. What must every edge in your link graph include?
3. A company About page lists five staff GitHub links. Does that merge them into one person?
4. Why might Linkook return almost nothing on a careful subject?
5. Is a publicly posted email free of Privacy Act issues in client work?

**Answers**

1. It follows publicly published links between accounts rather than only testing a handle across many sites.
2. An evidence URL (the page where the link appeared).
3. No — those are five people who share an employer page.
4. They do not publish cross-links; there is nothing public to follow.
5. No. Collection for a business purpose can still engage the APPs.
        `,
        exercise: "On your own (or test persona) public profiles, run Linkook or manually perform the same link-following. Produce a graph with at least three nodes and evidence URLs on each edge. Write four sentences: what Linkook caught that a username blast might miss, one false link risk you checked, whether any email appeared, and when you would reach for Linkook before Maigret.",
      }
    ],
  },
  "socialscan-availability": {
    id: "socialscan-availability",
    title: "Socialscan: Available Versus Exists (Not the Same Thing)",
    description: "Query a few major platforms for username and email availability using socialscan \u2014 on your own identifiers only \u2014 and learn why 'taken' is not a full profile.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What Socialscan does",
        duration: "8 min",
        content: `
### Asking the registration desk, carefully, and only a few desks

Socialscan checks whether a username or an email looks available, taken, or invalid on a small set of major platforms. It is a library and a command-line tool, under the Mozilla Public Licence 2.0. The platform list is short on purpose, and it changes between versions. Releases this course looked at have included names in the family of Instagram, X (Twitter), GitHub, Tumblr, and Last.fm. Your installed \`--help\` is the list. This paragraph is not the list. If a platform you care about is missing, socialscan did not check it. Silence is not a finding.

It talks to registration-style endpoints rather than loading a profile page. That is why, on the few sites it supports, it can be more precise than "did this URL 404?" checkers, and why it sits closer to Holehe than to Sherlock on the risk spectrum. You are not reading a shopfront. You are asking a signup desk whether the name is still for sale.

Learn the three words and refuse to upgrade them:

- Available. The platform says it would let someone register this identifier. Nobody in this course is going to register it as a stunt against a real brand.
- Taken, or unavailable. The platform says the identifier is in use, reserved, or otherwise not open. That is a registration answer. It is not a profile URL, a display name, a photo, or an identity.
- Invalid. The platform rejects the format. Too long, wrong characters, or otherwise not a name it will even consider.

"Taken" does not introduce you to the account. It does not mean the account is active. It does not mean a human, rather than a brand or a reserved word, holds it. Deleted accounts often keep the name taken. \`admin\` is taken everywhere and belongs to nobody you are looking for.

> Sherlock asks whether a shopfront seems to exist. Socialscan asks whether the name is still on the shelf. People mix those questions up, and then they write the wrong sentence in the case file.
        `,
      },
      {
        title: "Walkthrough",
        duration: "12 min",
        content: `
### Target

One username you own, and one email address you own. The persona handle \`pip_tadwell_osint101\` is a good username if you registered it somewhere. The email must be an inbox you can open. A disposable address you created for the Holehe lesson is fine. Someone else's address is not fine, including an address you "only" want to check for availability because you are thinking of contacting them. Availability is still a probe of an account system.

Write this down before install: "I am asking a few platforms whether identifiers I own are free to register, and I will not turn a 'taken' into a profile I have not opened."

### Install

\`pipx install socialscan\`

If the package name in the upstream README has changed, the README wins. Then:

\`socialscan --help\`

Confirm the flags on your version before you trust a blog, or this lesson. Two flags that have existed upstream, and that you should only use if \`--help\` still lists them:

- \`-p\` / \`--platforms\` limits which sites you query. Use it. The whole point of a small tool is that you can name the sites. Pick two or three, not "all of them because the default was easier".
- \`-a\` / \`--available-only\` hides everything except free names. That is a branding toy. Investigations care about taken as well. Leave it off for this exercise so you can see the full answer.

There is no loud switch to heroically disable, because this tool is not a password-reset cannon. You still do not pair it with a tool that sends mail or codes. No Holehe without \`-NP\`, and no Holehe in the same breath as a stranger's address. No User Scanner email mode beside it "for comparison" unless that run is also on your address and also quiet. One identifier, one quiet tool at a time, is how you notice which one emailed you.

### A run you can explain

A teaching shape, once \`--help\` agrees that usernames and emails can share a command, is:

\`socialscan -p github pip_tadwell_osint101\`

Then a second command for your email, with a platform \`--help\` actually offers. If the flag for selecting platforms has been renamed, use the new name and still select, rather than querying the default world.

Read every line the tool prints. Copy them into a table with four columns: the query (handle or email), the platform, the word it returned (available, taken, invalid, or whatever wording your version uses), and what you are willing to claim in a sentence.

The claim column is where students get sloppy, so here is the allowed dialect:

- "GitHub's registration check says this handle is taken." Then, separately, you open \`https://github.com/\` plus the handle in a browser, and you write what loaded.
- "The endpoint says this email is not registered on this one platform." You do not add "so they do not use it".
- "Invalid." You fix nothing. You note the format rule you bumped into.
- "Error, rate limit, or nonsense." You write "not checked". You do not coerce it into available.

Always open a profile URL yourself when the identifier is a username and you care whether a page exists. Socialscan will not fetch the profile for you. That is a feature. It stops you confusing a registration bit with a biography. Sometimes "taken" and the browser disagree: the name is reserved, the page 404s, the account is suspended, or you are not allowed to see it logged out. Record the disagreement. It is the best row in the exercise.

Do not run a list of emails. Do not run a list of guesses. One username, one email, a handful of platforms, once.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Small on purpose, wrong in specific ways

The platform list is tiny next to Maigret or even Sherlock. A clean socialscan run tells you about those platforms and no others. "Not on the internet" is not a result this tool can produce. If you needed to know about a forum, this was the wrong tool, and running it did not make progress. It made a different fact.

Registration endpoints change, and they change without sending you a letter. A module that was accurate when the README was written can start returning available, or taken, or a polite error, after the platform updates a signup flow. Treat "socialscan is the accurate one" as a hypothesis you re-check, not as a slogan. The Holehe lesson makes the same point about stale modules. It applies here even though the list is shorter. Short lists rot too. They just rot in fewer places, which makes the rot easier to miss because you trusted the reputation.

Reserved names are false people. \`admin\`, \`support\`, \`help\`, a brand's product name, a single letter the platform keeps for itself. Taken, and there is no human to attribute. If your persona is a normal long handle, you will mostly avoid this. If you experiment with a short word "for interest", you will manufacture a ghost and then feel compelled to explain it. Don't. The long test handle is the interesting case, because a taken on that handle is either you, or a surprising collision you can check.

Deleted and suspended accounts keep names taken. The registration desk's memory is longer than the profile page. This is why the browser column exists. "Taken" plus a missing profile is a normal row. Write it that way. Do not upgrade it to "they deleted it after I looked", which is a story you have no evidence for.

Hitting signup endpoints is the sort of traffic platforms notice. Keep the volume low. One lesson, a few platforms, identifiers you own. If you get rate-limited, the result is "they stopped answering", the same as Holehe's \`[x]\`, not a secret third state you interpret as exists. Stop for the day. Do not rotate networks to get a cleaner answer. A cleaner answer obtained by evasion is not cleaner.

MPL-2.0 is file-level copyleft. If you only run the tool, you can finish this lesson without becoming a licensing hobbyist. If you later copy socialscan's source into a product and distribute it, read MPL-2.0 first, including the part about modifications to MPL files. Do not assume "it is not GPL, so anything goes". Anything does not go. Anything is how attribution disappears.

> Available means the shelf is empty. Taken means the shelf says it is not empty. Neither sentence names a person.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### A precise question is still a question about a person

An email address that identifies someone is personal information. A username often is too, once it is tied to a person you have in mind. Asking an overseas registration API about either one, for a business, is a collection. APP 3 asks if you needed to. APP 6 asks if this is still the purpose you had. APP 8 is the cross-border rule: the platform is almost certainly not in your suburb, and sending the identifier there is a disclosure you should be able to describe. APP 10 forbids you to write "has an Instagram" in a report when all you had was "taken" and you never opened a page.

Computer-misuse risk sits in the same family as Holehe, because these are account-system endpoints, not blog posts. The Criminal Code (Cth) Part 10.7 and Queensland's Criminal Code s 408E are the provisions a lawyer will want to look at before this is client work. This course does not give you that advice. It gives you a constraint that keeps the exercise obvious: identifiers you own, no reset tools beside the command, no volume.

Platform terms frequently ban automated checks against signup flows. Your own email, a handful of queries, a learning note, is the lowest-risk use. A script that runs every new sales lead through socialscan before breakfast is a product feature, and it needs a purpose, a collection notice conversation, and someone whose job is the terms. That person is not the \`-p\` flag.

There is no branded loud mode here, and that absence is not a dare to build one. Do not wrap socialscan around a password-reset workflow. Do not "verify" a taken email by trying to sign up as them and seeing the error. The error is the result you already had. Clicking through until a human gets a mail is the result you were told not to produce. If you also use Holehe, it stays \`holehe -NP\`. If you also use Numint, it stays \`--offline\`. This lesson does not relax either rule.

Sensitive categories are not socialscan's party trick, but the reports you write afterwards can still wander into sensitive information. Do not add health, religion, or sexual-life inferences on top of a taken bit. APP 3.3 will not be impressed by your creativity.

Queensland paid investigations remain under the Security Providers Act 1993. A short platform list does not make it a hobby when money is involved.

> The smallest tool in the track can still be the one you have to explain, because it spoke to a signup server and not to a public page.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. What three result states does socialscan aim to return?
2. Why can socialscan beat Sherlock on GitHub accuracy *and* still be less useful alone?
3. Does "taken" on Instagram give you the profile owner's name?
4. Who may you run socialscan against in this lesson?
5. Which APP is most relevant when an Australian client's email is sent to an overseas registration API?

**Answers**

1. Available, taken, invalid (wording may vary slightly by version).
2. It queries registration servers for a few platforms well, but covers far fewer sites and returns no profile content.
3. No — only that the platform considers the identifier unavailable.
4. Yourself — your usernames/emails or a test persona you control.
5. APP 8 (cross-border disclosure), alongside APP 3 on whether collection was necessary.
        `,
        exercise: "Run socialscan on one username you own and one email you own, limiting platforms with `-p` if available. Record each result. For every \"taken\" username, try to open the matching public profile URL manually. Write four sentences: which platforms answered, one case where \"taken\" did not equal a visible profile, why the small platform list matters, and when you would pick socialscan over Holehe or Sherlock.",
      }
    ],
  },
  "mailcat-nickname-email": {
    id: "mailcat-nickname-email",
    title: "Mailcat: Which Providers Know That Nickname?",
    description: "Check which mail providers accept a nickname as an address \u2014 using only nicknames you own \u2014 without Tor theatre or anything that notifies a human inbox on purpose.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What Mailcat does",
        duration: "8 min",
        content: `
### From a handle to a handful of email-shaped guesses

Mailcat takes a nickname, the local-part of an address, and checks a set of mail providers for whether \`nickname@that-provider\` appears to exist. Depending on the provider, the check is an API query or an SMTP conversation. The README's pitch includes the idea that this can be done without notifying the human who owns the mailbox. Treat that as a design aim you verify on an address you own, not as a guarantee you extend to other people. Aims are not switches. If a run ever produces a mail, a code, or a notification, you stop, and that provider is done for the day.

This is useful in a narrow way. You already have a handle. You want a candidate list of addresses that *might* be that handle at a few providers, so that later, on an address you yourself control, you can see what "exists" looks like. It is not a licence to guess a stranger's inbox, and it is not a step you follow by trying passwords. The candidate is a hypothesis. Hypotheses do not get logged into.

The licence is Apache-2.0, which is why you will hear it described as friendlier for products than the GPL tools in this track. Friendlier for a software licence is irrelevant to the person whose nickname you typed, and irrelevant to the provider's terms. Apache-2.0 still expects you to keep its notices if you redistribute the software. It never expected you to probe inboxes.

Common nicknames collide. \`pip_tadwell_osint101\` is a good training input because it should not belong to a thousand strangers. \`alex\` should, and will, and a hit on \`alex@\` a large provider tells you almost nothing except that the world contains people named Alex. If your real handle is a common word, do not use it for this lesson. Use the long persona. You are trying to see the tool, not to map a city.

> Mailcat turns a nickname into email-shaped hypotheses. A hypothesis is not an envelope, and you do not get to open it to see if you were right.
        `,
      },
      {
        title: "Walkthrough",
        duration: "12 min",
        content: `
### Target

A nickname you own. The local-part of an email address you can log into, or \`pip_tadwell_osint101\` if that string is yours and not a joke you borrowed from a classmate. Do not feed it a client's brand, a colleague's first name, or "the guy from the forum". Practice on those is how candidate lists leak into real notebooks with real names on them.

Purpose sentence: "I am learning what an existence check claims, on a nickname I control, and I will not touch any address that is not mine."

### Install

\`pipx install mailcat-osint\`

If that name does not match the README you have open, stop and use the README. Then:

\`mailcat --help\`

Read every option before you run anything. You are sorting them into three piles:

- Fine for class: an input nickname, a way to print results, a way to limit providers if it exists.
- Not for class: Tor, proxies, and anything described as a workaround for blocking. The README may recommend Tor for heavier, real-world use. That is an operator-OPSEC discussion for another context. It is not homework. A plain run from your own connection, once, is the lesson.
- Never, in this course: options that send mail, that request a reset, that "verify by inbox", or that ask for a password. Mailcat does not need a password to anything of yours. If a build asks for one, you are off the path. Quit.

### One run

A teaching shape, if \`--help\` shows a positional nickname, is:

\`mailcat pip_tadwell_osint101\`

Use your real training nickname. If the tool insists on flags you have not read, do not add them to get past the error. Read them. Prefer API-style checks when the help text lets you choose, only because they are easier to reason about. Skip any provider or method you cannot explain in one sentence. "SMTP something" is not a sentence. If you cannot explain it, you cannot tell whether it notifies anyone, so you leave it out.

Let it finish once. Save the output. Do not pipeline the candidates into another tool.

### How to read a candidate without getting clever

Make a table with three columns: the candidate address, what Mailcat claimed, and the only next step this course allows.

- If the address is one you control, the next step is to check it in a provider interface you can already log into, or to remember that you created it. You are confirming ground truth. You are not "testing the reset button".
- If the address is not yours, the next step is to leave it alone. You may write "unverified candidate" in your private exercise notes, and then you stop. You do not run Holehe on it. You do not run socialscan on it. You do not send a message "just to see if it bounces". A bounce probe is still you poking an inbox.
- If the tool says the address is missing, you record "not detected at this provider, by this method". You do not record "they do not use this provider". Methods fail. Providers ignore SMTP. APIs change.

Watch your own inbox anyway, the one associated with the nickname if it exists. The README hopes you will not be notified. Hope is the thing you verify. If a message arrives that you did not request, stop, name the provider in your notes, and do not re-run that path.

No second run with a shorter, more common nickname "to see a busier result". Busy results are other people's mailboxes. You have now seen why the persona handle is long.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Catch-alls, collisions, and confident servers

SMTP probing is noisy, and a lot of providers refuse it, tarpit it, or lie. A timeout is not a "no". A "yes" from a server that accepts every recipient is also not a yes. Catch-all domains are configured to accept any local-part, so the mail server can sort or reject later, inside the house. From the outside, every guess looks real. \`pip_tadwell_osint101@a-catch-all.example\` can "exist" in the tool's output and correspond to no mailbox anyone reads. If you do not know whether a domain is catch-all, you do not know whether "exists" means anything. The honest grade is "the server accepted the recipient, which this domain may do for everyone".

APIs go stale and get shut. A provider that answered last year may now return a shape the module misreads as exists, or as missing. Mailcat's maintenance status is a reason it made the twelve, not a promise that every provider module is current. Check the project's README before you describe the tool as actively maintained in a report. Do not borrow a date from this lesson. It does not contain one.

Collisions dominate common nicknames. A hit on a short local-part at a big provider is a crowd, not a person. Even a long nickname can be copied. Your confirmation path is ownership: can you log in, because you created it? If you cannot, the row stays unverified, forever, as far as this course is concerned. There is no second path called "try harder".

False missing is the twin. A provider that blocks unauthenticated SMTP will look empty even when the mailbox is real. If you check a provider where you know you have an account and Mailcat says no, congratulations. You have a false negative, which is the result that stops you telling a client "no email at this host". Write it up. Negative results about the tool are results.

Tor, proxies, and "what my IP looks like" are discussed in some READMEs because operators who do this work at volume have problems you do not have during a single training run. Importing that setup into class adds complexity and, often, a terms issue, without teaching you how to read a catch-all. Leave it.

> A server that says yes to every name is not well informed. It is hospitable. Hospitable servers make terrible witnesses.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Candidates are personal information as soon as they identify someone

The moment a candidate address is tied to an identifiable person, it is personal information under the Australian Privacy Act, even if the address later turns out to be wrong. APP 3 asks whether you needed to generate that list for a stated purpose. "The nickname was sitting there" is not a purpose. APP 10 asks you not to treat a catch-all "exists" as a fact in a file that other people will act on. APP 6 asks you not to reuse a training list as a contact list for a different job. APP 8 applies when the check is sent to an overseas provider, which is the usual case. Write "the query left Australia" in the method note and you will be ahead of most people who use this tool.

Validating a candidate by logging in, by password guesses, or by reset flows is where this stops being an existence check and becomes something you will struggle to describe as authorised. Unauthorised access offences in the Criminal Code (Cth) Part 10.7 and the Queensland Criminal Code s 408E are the framework a lawyer will use. You do not need to finish that analysis to obey the course rule. The rule is: no passwords, no resets, no "verify by inbox", no mail sent to discovered addresses to see what happens. Not on strangers. Not on the one interesting row. Not "just for the address that looked real".

Provider terms matter as much as platform terms did for Sherlock. Mail systems are not a public profile page. Automated SMTP and API enumeration is exactly the behaviour many providers ban. One nickname you own, one plain run, no evasion, is the training boundary. A lead-enrichment script is a business, and it needs advice this page will not mime.

Do not launder Mailcat's output through Holehe to "confirm". If you run Holehe, it is \`holehe -NP\`, on an address you own, as its own lesson. Numint stays \`--offline\`. User Scanner email mode stays off unless it is clearly quiet and clearly yours. Chaining email tools is how a notification sneaks in through the one module you forgot to read.

Queensland investigators doing this for a fee still have the Security Providers Act 1993 to think about, plus the ordinary licence duties about purpose and about not freelancing a locate job because a tool made it easy. The statutory privacy tort since 2025, and the Commonwealth doxxing offences, are what you bump into if a candidate list gets published to embarrass someone. Keep the exercise in the exercise.

> If the address is not yours, the investigation of that address is over. The note "unverified candidate" is the whole of the lawful curiosity.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. What input does Mailcat primarily take?
2. Why can catch-all domains wreck "exists" results?
3. Should you try passwords or resets against a Mailcat hit?
4. Why might the README mention Tor if we are not using it in class?
5. What is the correct next step when Mailcat lists an address that is not yours?

**Answers**

1. A nickname / local-part (and related username-shaped inputs).
2. They accept any local-part, so existence checks cannot distinguish real mailboxes.
3. No — out of scope and high legal risk.
4. Operator OPSEC for heavier/real-world use; not required for this owned-nickname exercise.
5. Leave it alone; at most note it as an unverified candidate under a lawful purpose later — never probe the inbox.
        `,
        exercise: "Run Mailcat on a nickname you own. List the candidate addresses returned. Mark which ones are actually yours. Write four sentences: how many candidates appeared, how many you control, one false-confidence risk (catch-all or common nickname), and when Mailcat would be the wrong tool compared with Holehe on a known full address.",
      }
    ],
  },
  "findme-username-simple": {
    id: "findme-username-simple",
    title: "FindMe: The Simple Username CLI (And When to Stop Collecting Tools)",
    description: "Run a straightforward username search on your own handle, use it as a cross-check, and practise retiring redundant tools instead of hoarding them.",
    level: "Beginner",
    estimatedTime: "35 min",
    sections: [
      {
        title: "What FindMe does",
        duration: "8 min",
        content: `
### A small hammer, and a question about your toolbox

FindMe is a small command-line username checker under the MIT licence. It looks for profiles linked to a handle across a few hundred sites. The Consensus snapshot used for this course put that figure a bit above four hundred, well short of Maigret, in the same neighbourhood as several tools you have already used. Maintenance has been quieter than User Scanner or Maigret. Both the count and the pace can change. The README you clone is the source for both claims if you ever repeat them outside class.

It is the weakest pick of the twelve on purpose. You do not need another way to ask the same question Sherlock asks. You need a point in the course where the correct professional move is to stop installing things. FindMe is that point. If it adds a confirmed hit the others missed, good, keep it as a cross-check and write down why. If it adds nothing but false positives and ten minutes, uninstall it. The uninstall is the advanced technique. The install is the easy part, which is why people accumulate seven username tools and still cannot say which hit they opened.

By now the track has handed you Sherlock, Maigret, WhatsMyName, GoSearch, Aliens Eye, and possibly User Scanner. They rhyme. FindMe rhymes too. The skill left to practise is sufficiency: the smallest set of tools that answers the question you wrote down, and a rubbish bin for the rest. A dock full of scanners feels like readiness. It is often procrastination with extra binaries.

> The most advanced move in this lesson is removing a tool you just proved you do not need.
        `,
      },
      {
        title: "Walkthrough",
        duration: "12 min",
        content: `
### Target

Your persona or your own handle, the same \`pip_tadwell_osint101\` you have been verifying all track, if that is the one you created. Do not revive a stranger's username "to give FindMe something juicy". Juicy means other people's lives. The tool is happy either way. You should not be.

Purpose sentence: "I am deciding whether FindMe earns a place next to one primary username tool, using a handle I own."

### Install without collecting folklore

Follow the upstream README. A typical install is a Python package, and the command shape this lesson uses is:

\`findme pip_tadwell_osint101\`

Shape, not scripture. Run \`--help\` or \`-h\` first. If the executable name differs, if it wants \`python -m\`, if it demands a flag before the handle, do what the help text says. Do not stack flags from other tools onto it. GoSearch's flags are not FindMe's flags. Maigret's \`--top-sites\` living in your muscle memory is how you get a command that fails, and a failure you then misread as "no accounts".

Keep the options boring. No Tor. No proxy. No all-site loop if a smaller mode exists. One run. Save the hit list to a file with the tool name in it. Future-you, diffing on a Sunday, will not remember which untitled text file was the good one.

### The cross-check, which is shorter than you want it to be

Pick one primary tool you already trust more than the others. For most people that will be Sherlock, or a capped Maigret run (\`--top-sites 50\` or whatever \`--help\` on Maigret actually calls the cap). Not both, unless you enjoy punishing yourself. Two lists diff cleanly. Four lists become a hobby.

Then:

1. Run FindMe once.
2. Put the two hit lists side by side.
3. Browser-verify every disagreement. Every one. A disagreement is a site one tool has and the other does not, or a site both name where you already suspect junk.
4. Browser-verify a sample of five agreements, not fifty. If five agreements contain a false positive, your sample was enough to hurt your feelings. Widen the sample. If five are clean, say so, and do not pretend you opened the rest.
5. Score FindMe in two numbers you counted, not vibes. Unique confirmed hits: rows only FindMe had, which the browser showed were really your persona. Unique false positives: rows only FindMe had, which the browser refused to turn into a profile. Shared true hits do not count as a reason to keep a second tool. The primary already had them.

If both numbers are zero, write that down without shame. FindMe neither helped nor hurt on this handle, today. If the false-positive number is the only one above zero, that is an argument for uninstalling, not an argument for "more research" on a different victim. You may run the same protocol on a second handle you also own, if you want a fairer sample. You may not borrow a handle you do not own because the first test was inconclusive. Inconclusive on your own accounts is still the result.

### What "keep" means

Keep means: you can name a job where FindMe is the tool you would open first, or second, for a reason a classmate would accept. "It is already installed" is not a reason. "MIT is a nice licence" is not a reason. "The README was short and I understood the command" is a pleasant reason to have tried it, and not a reason to leave it in the PATH for the next three years.

Uninstall is allowed in the exercise write-up. So is keeping it as a cold spare you do not run by default. What is not allowed is a vague "I'll probably use all of them depending". That sentence is how the next case starts with five sweeps and no purpose.
        `,
      },
      {
        title: "Limits and false positives",
        duration: "7 min",
        content: `
### Redundant tools multiply noise, not truth

A smaller, quieter corpus means FindMe will miss sites Maigret hits. Record the misses as "outside this corpus or not detected", not as "the account does not exist". You have had this warning in every username lesson because the mistake survives every rebrand. It will survive this one too if you let it.

The failure modes are unchanged, and FindMe does not get a folk exemption for being simple:

- Soft 404s and friendly missing-user pages.
- Captcha and cookie walls marked as hits.
- Rules older than the site's current layout. Quieter maintenance means you should expect this more, not less.
- Common-handle collisions, if you ignored the advice and used a short name.
- Rate limits from the rest of the track. If you have run four scanners today already, FindMe may be querying sites that are tired of you. A miss in that condition is contaminated. Say so.

Redundant tooling has a cost even when every hit is true. More requests, more terms-of-use exposure, more rows in the notebook, more chance you paste the unopened ones into something a client sees. APP 10 does not care that the sixth tool was easy to install. A stack of unverified hits is still unverified.

There is a false-confidence pattern specific to "the simple one". Students trust FindMe because the output is short and the command was one word. Short output feels checked. It is not checked until you open it. A twenty-line report contains the same species of mistake as a two-thousand-line report. It merely fits on the screen, which is when people get lazy.

Being MIT-licensed and easy to install does not make a tool necessary, current, or appropriate for a person you have not got a purpose sentence for. Licence, convenience, and necessity are three different gates. FindMe walks through the first two easily. The third gate is the exercise.

> If a tool adds no confirmed hit you did not already have, it did not fail the install. It failed the audition. Thank it and show it the door.
        `,
      },
      {
        title: "Ethics and legal limits",
        duration: "5 min",
        content: `
### Another sweep is not a new purpose

APP 3 is the article to reread before you run a seventh username tool. Collection has to be reasonably necessary for what you are actually doing. "I have not tried FindMe on them yet" is not necessity. On a handle you own, for a lesson about sufficiency, the collection is necessary for the lesson and it ends when the diff is done. On a person, the fact you already ran Sherlock is a reason to justify any extra tool, not a reason to assume the extra tool is free.

APP 6 is how a training diff becomes a file on someone. You built it to learn FindMe. Using it later to answer a different question, about a different context, needs its own basis. APP 10 is why the unverified majority of every list in this track should never reach a decision-maker. FindMe's shorter list makes it tempting to paste the whole thing. Paste the rows you opened.

Running the same collection repeatedly, against a person, without a reason that would survive being read aloud, can look like harassment long before anyone argues about a particular HTTP method. The statutory tort for serious invasions of privacy has been available in Australia since 2025. The Criminal Code (Cth) offences about releasing personal data via a carriage service in a menacing or harassing way do not contain an exemption for "I used the simple CLI". Do not publish the diff. Do not attach a real name. Do not keep a running tally of someone's accounts because the tools are sitting there.

Platform terms apply per site, per request, regardless of which binary sent the request. Seven tools do not average out to fair use. They add up to more requests. The training rule stays: your accounts, one extra tool, no Tor, no proxies, no volume.

Queensland's Security Providers Act 1993 still governs investigating people for reward. A minimalist CLI is a good aesthetic and a bad legal theory. If the work is paid, the licence and the purpose note come first. The choice between FindMe and Maigret comes second, and the honest choice is often "neither, until the purpose is narrower".

Prefer the minimum set. For most learners who finish this track, that set looks like one primary username tool (Sherlock or a capped Maigret), one place where you can read the rule (WhatsMyName), and maybe a single binary (GoSearch) if Python is the thing that will not install. Email work stays Holehe with \`-NP\`, on your own address. Phone work stays Numint with \`--offline\`. Everything else has to re-audition on a handle you own before it stays installed.

> You are finished with this track when you can say which tool you will run, which tool you will not, and why the second list is shorter than your enthusiasm.
        `,
      },
      {
        title: "Quiz",
        duration: "3 min",
        content: `
1. Why is FindMe in the twelve if it is the weakest username pick?
2. What should you browser-verify first when comparing two tools?
3. If FindMe adds zero confirmed unique hits, is the lesson a failure?
4. Does installing more username tools reduce Privacy Act risk?
5. What is a healthy personal toolkit size for username checks after this course?

**Answers**

1. To practise cross-checking and sufficiency — knowing when to stop collecting tools.
2. Disagreements (and a sample of agreements), not only the longest list.
3. No — learning that a tool is redundant is a valid outcome.
4. No — more collection can increase exposure without clearer purpose.
5. Something like one primary (Maigret or Sherlock) plus one web/dataset check (WhatsMyName) and optional binary (GoSearch); exact set is yours, but "all twelve forever" is not the goal.
        `,
        exercise: "Run FindMe on your test persona. Diff against Sherlock or Maigret. Write five sentences: unique confirmed hits (count), unique false positives (count), whether you will keep FindMe installed, which username tool is now your primary, and one tool you will uninstall or ignore.",
      }
    ],
  }

}

// =============================================================================
// Compatibility exports - referenced by template pages copied from AI Hub.
// aiTools stays empty on purpose: no shipped tool terminal. Coming Soon.
// =============================================================================

export const latestUpdates: Array<{ id: string; title: string; description: string; date: string }> = []
export const aiTools: Array<{ id: string; name: string; description: string; category: string; status?: string }> = []
export const learningPaths: Array<{ id: string; title: string; description: string; modules: string[] }> = [
  {
    id: "rookie-track",
    title: "Rookie Track",
    description: "Start here. No prior OSINT experience required - just curiosity.",
    modules: ["osint-fundamentals", "domain-investigations", "osint-methodology", "email-osint", "business-osint"],
  },
  {
    id: "consensus-tools-track",
    title: "Consensus Tools Track",
    description: "Twelve free username, email and phone tools from the Consensus-OSINT set — own accounts and test personas only.",
    modules: [
      "sherlock-username-search",
      "maigret-username-dossier",
      "whatsmyname-username-web",
      "user-scanner-username-email",
      "gosearch-username-go",
      "aliens-eye-username",
      "linkook-account-linking",
      "holehe-email-registration",
      "socialscan-availability",
      "mailcat-nickname-email",
      "numint-phone-basics",
      "findme-username-simple",
    ],
  },
  {
    id: "sleuth-track",
    title: "Sleuth Track",
    description: "Level up with intermediate techniques: social media, geospatial, reporting, and breach analysis.",
    modules: ["people-profiling", "social-media-investigations", "geospatial-intelligence", "digital-identity-analysis", "osint-reporting", "breach-data-analysis", "telegram-osint"],
  },
  {
    id: "analyst-track",
    title: "Analyst Track",
    description: "Master-class techniques: network recon, dark web, crypto investigations, and advanced geolocation.",
    modules: ["kali-tools", "social-media", "network-recon", "digital-forensics", "dark-web-research", "cryptocurrency-investigations", "geolocation-osint"],
  },
]

export const ALL_MODULES = Object.values(learningModules)
export const MODULE_MAP = learningModules
export function getModuleById(id: string) { return learningModules[id] ?? null }

/** Near-duplicate of llms-txt. Data stays so an old URL still resolves. */
export const HIDDEN_LISTING_IDS = new Set(["llm"])

const FLAGSHIP_MODULE_IDS = [
  "osint-fundamentals",
  "kali-tools",
  "digital-forensics",
  "geolocation-osint",
] as const

function isQuickBriefing(mod: Pick<LearningModule, "estimatedTime">) {
  return /^\d+\s*min$/i.test(mod.estimatedTime.trim())
}

export function listPublicModules() {
  const visible = Object.values(learningModules).filter(
    (mod) => !HIDDEN_LISTING_IDS.has(mod.id)
  )
  const byId = new Map(visible.map((mod) => [mod.id, mod]))
  const flagship = FLAGSHIP_MODULE_IDS.flatMap((id) => {
    const mod = byId.get(id)
    return mod ? [mod] : []
  })
  const flagshipIds = new Set<string>(FLAGSHIP_MODULE_IDS)
  const briefings = visible.filter((mod) => isQuickBriefing(mod))
  const briefingIds = new Set(briefings.map((mod) => mod.id))
  const rest = visible.filter(
    (mod) => !flagshipIds.has(mod.id) && !briefingIds.has(mod.id)
  )
  return { tracks: [...flagship, ...rest], briefings }
}

export const CORE_TRAINING_MODULE_IDS = [
  'osint-fundamentals',
  'osint-methodology',
  'email-osint',
  'domain-investigations',
  'business-osint',
  'digital-identity-analysis',
  'people-profiling',
  'social-media-investigations',
  'social-media',
  'telegram-osint',
  'geospatial-intelligence',
  'geolocation-osint',
  'kali-tools',
  'network-recon',
  'dark-web-research',
  'cryptocurrency-investigations',
  'digital-forensics',
  'breach-data-analysis',
  'osint-reporting',
] as const
