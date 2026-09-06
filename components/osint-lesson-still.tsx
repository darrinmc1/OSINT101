import { learningModules } from "@/data/modules"

const SOURCE_QUESTIONS = [
  "Who created it and why?",
  "When was it published or updated?",
  "Is it firsthand, secondhand, or screenshot-of-screenshot nonsense?",
  "Does it align with other independent sources?",
] as const

/**
 * Frozen still of the real OSINT Fundamentals · Source Evaluation UI
 * (components/LearningModule.tsx + data/modules.ts).
 * Decorative only — not a second live lesson.
 * Product motion is the claim-to-source trace / wipe on this still.
 */
export function OsintLessonStill() {
  const lesson = learningModules["osint-fundamentals"]
  const section = lesson.sections[1]

  return (
    <div
      className="dossier-lesson-still pointer-events-none select-none"
      aria-hidden="true"
    >
      <div className="relative border border-[#2a3a2a] bg-[#0b0d0b]">
        <div className="flex items-center justify-between gap-3 border-b border-[#1f2a1f] px-4 py-2.5">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#6b8f6b]">
            MODULE_DEPLOYED // {lesson.id.toUpperCase()}
          </p>
          <span className="shrink-0 bg-[#3d6b3d] px-2 py-0.5 font-mono text-[10px] font-bold text-black">
            {lesson.level.toUpperCase()}
          </span>
        </div>

        <div className="grid grid-cols-[8.5rem_minmax(0,1fr)]">
          <div className="border-r border-[#1f2a1f] bg-[#0e120e]">
            <p className="border-b border-[#1f2a1f] px-3 py-2 font-mono text-[10px] tracking-widest text-[#6b8f6b]">
              MISSION_PHASES
            </p>
            {lesson.sections.slice(0, 4).map((item, index) => (
              <div
                key={item.title}
                className={`border-l-2 px-3 py-2 ${
                  index === 1
                    ? "border-l-[#3d6b3d] bg-[#142014]"
                    : "border-l-transparent"
                }`}
              >
                <p
                  className={`font-mono text-[10px] leading-snug ${
                    index === 1 ? "text-[#8fbf8f]" : "text-[#7a877a]"
                  }`}
                >
                  {item.title.toUpperCase()}
                </p>
              </div>
            ))}
          </div>

          <div className="claim-trace-stage relative min-w-0">
            <div className="border-b border-[#1f2a1f] px-4 py-2.5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#6b8f6b]">
                PHASE_02 // CURRENT_OBJECTIVE
              </p>
              <p className="mt-1 font-mono text-sm text-[#e8efe4]">
                {section.title.toUpperCase()}
              </p>
            </div>
            <div className="grid grid-cols-3 border-b border-[#1f2a1f] bg-black/40 font-mono text-[10px] uppercase tracking-widest">
              <span className="border-r border-[#1f2a1f] bg-[#142014] px-3 py-2 text-[#8fbf8f]">
                DATA_FEED
              </span>
              <span className="border-r border-[#1f2a1f] px-3 py-2 text-[#6b8f6b]">
                OPERATIONS
              </span>
              <span className="px-3 py-2 text-[#6b8f6b]">INTEL_REPOSITORY</span>
            </div>

            <div className="relative space-y-2.5 px-4 py-3 text-[13px] leading-relaxed text-[#c8d2c4]">
              <p className="trace-node trace-node-claim font-semibold text-[#e8efe4]">
                Not all sources deserve equal respect
              </p>
              <p>
                An OSINT source is not automatically reliable just because it is
                public, searchable, or wearing a respectable font.
              </p>
              <p className="font-semibold text-[#e8efe4]">
                Questions to ask every source
              </p>
              <ul className="list-disc space-y-1 pl-5">
                {SOURCE_QUESTIONS.map((question, index) => (
                  <li
                    key={question}
                    className={`trace-node trace-node-q trace-node-q-${index + 1}`}
                  >
                    {question}
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-[#e8efe4]">Confidence model</p>
              <p className="trace-node trace-node-source">
                High confidence: corroborated by independent records with
                minimal contradictions.
              </p>
            </div>

            <svg
              className="claim-trace-svg"
              viewBox="0 0 280 360"
              preserveAspectRatio="none"
            >
              <path
                className="claim-trace-line"
                pathLength="1"
                d="M18 28 L18 92 C18 108 40 118 40 138 L40 210 C40 228 18 238 18 258 L18 332"
              />
            </svg>
            <span className="claim-trace-bead" />
            <div className="claim-trace-wipe" />
          </div>
        </div>
      </div>
    </div>
  )
}
