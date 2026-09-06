import { learningModules } from "@/data/modules"

/**
 * Frozen still of the real OSINT Fundamentals lesson UI
 * (components/LearningModule.tsx + data/modules.ts).
 * Decorative only — not a second live lesson. Motion is CSS pan on the wrapper.
 */
export function OsintLessonStill() {
  const lesson = learningModules["osint-fundamentals"]
  const section = lesson.sections[1]

  return (
    <div
      className="dossier-lesson-still pointer-events-none select-none"
      aria-hidden="true"
    >
      <div className="border border-[#2a3a2a] bg-[#0b0d0b]">
        <div className="flex items-start justify-between gap-4 border-b border-[#1f2a1f] px-5 py-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#6b8f6b]">
              MODULE_DEPLOYED // {lesson.id.toUpperCase()}
            </p>
            <p className="mt-1 font-mono text-lg font-bold tracking-tight text-[#e8efe4]">
              {lesson.title.toUpperCase()}
            </p>
            <p className="mt-1 max-w-xl text-xs leading-relaxed text-[#9aa89a]">
              {lesson.description}
            </p>
          </div>
          <div className="shrink-0 text-right font-mono">
            <span className="inline-block bg-[#3d6b3d] px-2 py-0.5 text-[10px] font-bold text-black">
              {lesson.level.toUpperCase()}
            </span>
            <p className="mt-2 text-[10px] uppercase tracking-wider text-[#6b8f6b]">
              EST_TIME: {lesson.estimatedTime.toUpperCase()}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-[#6b8f6b]">
              PHASES: {lesson.sections.length}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[10rem_minmax(0,1fr)]">
          <div className="border-r border-[#1f2a1f] bg-[#0e120e]">
            <p className="border-b border-[#1f2a1f] px-3 py-2 font-mono text-[10px] tracking-widest text-[#6b8f6b]">
              MISSION_PHASES
            </p>
            {lesson.sections.map((item, index) => (
              <div
                key={item.title}
                className={`border-l-2 px-3 py-2.5 ${
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
                <p className="mt-0.5 font-mono text-[9px] uppercase text-[#556055]">
                  DURATION: {item.duration}
                </p>
              </div>
            ))}
          </div>

          <div className="min-w-0">
            <div className="border-b border-[#1f2a1f] px-5 py-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#6b8f6b]">
                PHASE_02 // CURRENT_OBJECTIVE
              </p>
              <p className="mt-1 font-mono text-base text-[#e8efe4]">
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
            <div className="space-y-3 px-5 py-4 text-[13px] leading-relaxed text-[#c8d2c4]">
              <p className="font-semibold text-[#e8efe4]">
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
                <li>Who created it and why?</li>
                <li>When was it published or updated?</li>
                <li>Is it firsthand, secondhand, or screenshot-of-screenshot nonsense?</li>
                <li>Does it align with other independent sources?</li>
              </ul>
              <p className="font-semibold text-[#e8efe4]">Confidence model</p>
              <ol className="list-decimal space-y-1 pl-5">
                <li>Low confidence: single-source claim with weak provenance.</li>
                <li>Moderate confidence: supported by multiple sources, still incomplete.</li>
                <li>
                  High confidence: corroborated by independent records with
                  minimal contradictions.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
