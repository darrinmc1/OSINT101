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
      setup: "I did some OSINT on my own social media.",
      punchline: "Apparently I'm a foodie who posts blurry photos of traffic. The analysts were confused too.",
    },
    {
      setup: "My open-source investigation started with one public post.",
      punchline: "It ended three hours later with 40 browser tabs and no memory of how I got there.",
    },
    {
      setup: "OSINT: because your target posts their location, their dog's name, and their favorite coffee shop.",
    },
    {
      setup: "I checked someone's LinkedIn for a background check.",
      punchline: "They have 2 endorsements and one of them is from themselves. Certified.",
    },
  ],
  "google dorking": [
    {
      setup: "Google dorking is just search with intent.",
      punchline: "It's also the fastest way to find a PDF someone forgot to protect.",
    },
    {
      setup: "I found a public directory listing.",
      punchline: "It had a file called 'FINAL_FINAL_v2_ACTUALLY_DONE.xlsx'. Relatable.",
    },
    {
      setup: "The best OSINT tool is Google with better operators.",
      punchline: "That and knowing the target's default password is probably 'password1'.",
    },
    {
      setup: "I dorked my own site to see what's exposed.",
      punchline: "The answer: everything I forgot about in 2016. Time capsule achieved.",
    },
  ],
  "social media": [
    {
      setup: "Your social media tells investigators everything.",
      punchline: "It tells me your favorite show, your gym schedule, and the name of your first pet. Security question solved.",
    },
    {
      setup: "I analyzed a profile's posting times.",
      punchline: "Turns out they're a night owl with a coffee problem. The profile didn't confirm it, but the 2am memes did.",
    },
    {
      setup: "The target posted a 'quiet weekend in' photo.",
      punchline: "The GPS metadata said otherwise. The metadata is always talking.",
    },
    {
      setup: "I found someone's email from a forum post from 2009.",
      punchline: "They still use it. Their password is still their dog's name. Some things never change.",
    },
  ],
  "dark web": [
    {
      setup: "I went looking for dark web monitoring tools.",
      punchline: "The tools are fine. The marketing copy is very dramatic. 'YOUR DATA IS FOR SALE' — yes, thank you, that's why I'm here.",
    },
    {
      setup: "The dark web is 99% scams and 1% genuine curiosity.",
      punchline: "The genuine curiosity is why I'm here. The scams are why I'm leaving.",
    },
    {
      setup: "Monitoring the dark web for your brand is like watching for graffiti.",
      punchline: "You're not stopping it, but you'll know about it first. That's the job.",
    },
  ],
}
