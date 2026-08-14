export const CASE_FILE_DISCLAIMER =
  "OSINT 101 Case File Planner is an educational training aid, not operational tasking, legal advice, or a license to investigate anyone. Use it only for lawful purposes you are authorized to pursue. Do not use it to harass, stalk, dox, trespass, access systems without authorization, buy or sell stolen data, or collect information you have no legitimate right to collect. OPSEC: every collection step can be attributable. You are responsible for local law, workplace policy, and proportional collection."

export const CASE_FILE_EXAMPLES = [
  {
    label: "Vendor due diligence",
    query:
      "Lawful vendor due diligence: map the public digital footprint of a software company before a contract, including domain ownership, leadership, and obvious infrastructure clues.",
  },
  {
    label: "Username correlation",
    query:
      "Training exercise: given a public username, plan how to correlate it across platforms, verify matches, and document confidence without assuming one handle equals one person.",
  },
  {
    label: "Domain investigation",
    query:
      "Collection target: example-research.org. Build a passive reconnaissance plan covering WHOIS, DNS, historical content, and source evaluation before any active checks.",
  },
]

export const CASE_FILE_FAQS = [
  {
    question: "What does the Case File Planner do?",
    answer:
      "You paste a collection target or investigation question. OSINT 101 returns a case-file style plan using the intelligence cycle and PEAK method, with citations to real training modules. It is not a chat-with-the-site product and it does not run collection for you.",
  },
  {
    question: "Is this legal to use?",
    answer:
      "The planner is educational. You must only apply it to lawful, authorized work. Public data is not automatically fair game. Follow local law, workplace rules, and the ethics modules before collecting anything.",
  },
  {
    question: "What is free vs advanced?",
    answer:
      "Foundations — Beginner modules such as OSINT Fundamentals, methodology, domain investigations, email/username intelligence, and company research — are free. Intermediate and Advanced techniques (people profiling, SOCMINT, GEOINT, network recon, dark web, crypto, forensics) are a paid gate: Case File Pro — $19/mo. Clerk sign-in still unlocks this MVP. Checkout coming.",
  },
  {
    question: "Does it need an AI key?",
    answer:
      "No. If an AI Gateway or OpenAI key is configured, the plan is drafted with AI and then grounded in the module catalog. If no key is present, you still get a full catalog-based case file with the same citations.",
  },
  {
    question: "Will it hack, scrape, or investigate a real target for me?",
    answer:
      "No. The output is a study plan and collection outline. It will refuse requests that look like unauthorized access, harassment, or other unlawful tasking.",
  },
]
