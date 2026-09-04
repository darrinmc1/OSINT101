const GET_ITEMS = [
  {
    n: "01",
    title: "Written lessons that teach the job",
    body: "Fundamentals through reporting. Start with source evaluation. This is training, not leftover AI-school filler dressed up as a spy course.",
  },
  {
    n: "02",
    title: "A case file planner, not a chatbot",
    body: "Paste a collection target. Get a cited investigation plan that uses the OSINT 101 method — intelligence cycle, OPSEC, and real module links.",
  },
  {
    n: "03",
    title: "Sources you can show your boss",
    body: "If you cannot point at a URL, a date, and a confidence call, you do not have a finding. You have a vibe. Vibes die in meetings.",
  },
  {
    n: "04",
    title: "Field guides that survive contact",
    body: "Checklists, search operators, and templates you can open mid-case. A short library, not a museum of 200 tools you will never run.",
  },
] as const

export function WhatYouGet() {
  return (
    <section
      className="relative overflow-hidden border-t border-white/5 py-20 md:py-28"
      aria-labelledby="what-you-get-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-14 lg:px-8">
        <header className="mb-12 lg:col-span-5 lg:sticky lg:top-24 lg:mb-0 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">
            What you get
          </p>
          <h2
            id="what-you-get-heading"
            className="mt-3 font-display text-3xl font-extrabold leading-tight text-white md:text-4xl"
          >
            A training product, not a slogan stack.
          </h2>
          <p className="mt-4 max-w-md text-slate-400">
            The site already has a job. These layers just make the scroll feel
            finished. No invented headcount. No price on the fold.
          </p>
        </header>

        <ol className="m-0 list-none space-y-5 p-0 lg:col-span-7">
          {GET_ITEMS.map((item, index) => (
            <li
              key={item.n}
              className="what-you-get-card rounded-2xl border border-white/10 bg-slate-900/85 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8 lg:sticky"
              style={{ top: `calc(6.5rem + ${index * 1.15}rem)` }}
            >
              <p className="font-display text-sm font-bold tracking-[0.18em] text-indigo-300">
                {item.n}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-white md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
