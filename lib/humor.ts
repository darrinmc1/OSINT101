export interface HumorItem {
  setup: string
  punchline?: string
}

export interface HumorTheme {
  container?: string
  border?: string[]
  borderOpacity?: string
  borderSize?: string
  borderLine?: string
  dark?: boolean
  cardBorder: string
  cardBg: string
  eyebrowColor: string
  label?: string
  punchColor: string
  buttonBg: string
  footerNote?: string
  shuffleLabel?: string
}

export const humorTheme: HumorTheme = {
  container: "my-10",
  border: ["🔍", "🕵️", "🔍", "🌐", "🔍"],
  borderOpacity: "opacity-30",
  borderSize: "text-xl",
  borderLine: "bg-cyan-200",
  cardBorder: "border-cyan-200",
  cardBg: "bg-cyan-50",
  eyebrowColor: "text-cyan-700",
  label: "Deep dive break",
  punchColor: "text-cyan-800",
  buttonBg: "bg-cyan-600",
  footerNote: "Even investigators close the laptop sometimes",
  shuffleLabel: "Another one",
}

export const humorBank: Record<string, HumorItem[]> = {
  general: [
    {
      setup: "The investigation started with a clear question.",
      punchline: "It ended with the same question. That is how you know the notes worked.",
    },
    {
      setup: "A public profile is a statement.",
      punchline: "It is not a witness. Witnesses can be wrong. Profiles do not take follow-up questions.",
    },
    {
      setup: "Forty tabs is not a method.",
      punchline: "It is a queue. If you cannot say what the next tab is for, close it.",
    },
    {
      setup: "The interesting part is rarely the first result.",
      punchline: "The interesting part is the date on the third result, which nobody read.",
    },
  ],
  "google dorking": [
    {
      setup: "Operators are punctuation with a grudge.",
      punchline: "site: and filetype: still beat a new extension named after a predator.",
    },
    {
      setup: "I searched a domain I actually own.",
      punchline: "The file was called final_v7 and last touched in 2019. Of course it was.",
    },
    {
      setup: "A directory listing is not a trophy.",
      punchline: "It is a note that says: record the URL, then decide whether you were supposed to see it.",
    },
    {
      setup: "The query worked.",
      punchline: "Write down the query. Future you will not remember the punctuation that made it work.",
    },
  ],
  "social media": [
    {
      setup: "Posting time is a clue.",
      punchline: "It is a clue about a clock, not a personality. Leave the diagnosis to someone with a reason.",
    },
    {
      setup: "The caption said it was a quiet weekend.",
      punchline: "The skyline said a postcode. Believe the buildings, then check the year.",
    },
    {
      setup: "Three posts do not make a pattern.",
      punchline: "They make a lead. A pattern needs more than your mood and a timestamp.",
    },
    {
      setup: "The bio and the company register disagreed.",
      punchline: "That is the finding. Do not pick the one you like and call it corroborated.",
    },
  ],
  "dark web": [
    {
      setup: "Most of what gets called the dark web is a market stall with worse lighting.",
      punchline: "Read it if the question requires it. Do not buy anything to prove you were there.",
    },
    {
      setup: "A leak blog is a noticeboard.",
      punchline: "You will not take the notice down. You might see it before the person who needed to. That is the job.",
    },
    {
      setup: "The dramatic headline is doing marketing.",
      punchline: "The useful line is the date, the victim name as published, and whether you can check it elsewhere.",
    },
  ],
}
