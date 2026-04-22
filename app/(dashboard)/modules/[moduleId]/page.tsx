"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import LearningModule from "@/components/LearningModule"
import { learningModules } from "@/data/modules"

export default function ModuleDetailPage() {
  const params = useParams<{ moduleId: string }>()
  const moduleId = params?.moduleId
  const mod = moduleId ? learningModules[moduleId] : undefined

  if (!mod) {
    return (
      <div className="max-w-3xl mx-auto py-12">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold font-display text-white mb-3">
            Module not found
          </h1>
          <p className="text-slate-400 mb-6">
            That module ID did not match anything in the training library.
          </p>
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all"
          >
            Back to Modules
          </Link>
        </div>
      </div>
    )
  }

  return <LearningModule module={mod} onRequestMoreInfo={() => {}} />
}
