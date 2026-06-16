'use client'

import { useState, ReactNode } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { BookOpen, Download, CheckCircle, Clock, Users, MessageCircle, ArrowRight, FileText, Terminal, Search, Shield, Activity, Cpu, Radar, Lock, Globe } from 'lucide-react'
import MarkdownContent from '@/components/MarkdownContent'
import type { LearningModule as LearningModuleType } from '@/data/modules'

const moduleResourceMap: Record<string, string[]> = {
  'osint-fundamentals': ['osint-checklist', 'search-operators'],
  'kali-tools': ['kali-cheatsheet', 'osint-tools-list'],
  'people-profiling': ['people-profiling', 'legal-guidelines'],
  'social-media': ['search-operators', 'osint-tools-list'],
  'network-recon': ['osint-tools-list', 'legal-guidelines'],
  'digital-forensics': ['legal-guidelines', 'osint-checklist'],
}

const moduleLinkMap: Record<string, { label: string; to: string }[]> = {
  'osint-fundamentals': [
    { label: 'SEARCH OPERATORS GUIDE', to: '/resources/search-operators' },
    { label: 'COMMUNITY COMMS', to: '/community' },
  ],
  'kali-tools': [
    { label: 'KALI QUICK REFERENCE', to: '/resources/kali-cheatsheet' },
    { label: 'ASSET REQUEST TERMINAL', to: '/requests' },
  ],
  default: [
    { label: 'LEGAL AND ETHICAL GUIDELINES', to: '/resources/legal-guidelines' },
    { label: 'CONTACT ENCRYPTED', to: '/contact' },
  ],
}

const resourceLabelMap: Record<string, string> = {
  'osint-checklist': 'OSINT_CHECKLIST',
  'search-operators': 'SEARCH_OPERATORS_GUIDE',
  'kali-cheatsheet': 'KALI_TOOLS_QUICK_REF',
  'osint-tools-list': 'OSINT_TOOLS_MASTER_LIST',
  'people-profiling': 'PEOPLE_PROFILING_TEMPLATE',
  'legal-guidelines': 'LEGAL_ETHICAL_GUIDELINES',
}

type LearningModuleProps = {
  module: LearningModuleType
  onRequestMoreInfo?: (moduleId: string) => void
}

const LearningModule = ({ module, onRequestMoreInfo }: LearningModuleProps) => {
  const [currentSection, setCurrentSection] = useState<number>(0)
  const [completedSections, setCompletedSections] = useState<Set<number>>(new Set())

  const markSectionComplete = (sectionIndex: number) => {
    setCompletedSections((previous) => new Set([...previous, sectionIndex]))
  }

  const getModuleIcon = (moduleId: string): ReactNode => {
    const icons: Record<string, ReactNode> = {
      'osint-fundamentals': <Search className="h-6 w-6" />,
      'kali-tools': <Terminal className="h-6 w-6" />,
      'people-profiling': <Users className="h-6 w-6" />,
      'social-media': <MessageCircle className="h-6 w-6" />,
      'network-recon': <Shield className="h-6 w-6" />,
      'digital-forensics': <FileText className="h-6 w-6" />,
    }

    return icons[moduleId] || <BookOpen className="h-6 w-6" />
  }

  const calculateProgress = () => {
    if (!module.sections?.length) return 0
    return (completedSections.size / module.sections.length) * 100
  }

  const resourceLinks = moduleResourceMap[module.id] || []
  const externalLinks = moduleLinkMap[module.id] || moduleLinkMap.default

  return (
    <div className="mx-auto max-w-7xl animate-in fade-in p-6 duration-700">
      <div className="tactical-panel relative mb-8 overflow-hidden">
        <div className="absolute right-0 top-0 p-2 opacity-10">
          <Cpu className="h-24 w-24" />
        </div>
        <div className="p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center space-x-6">
              <div className="border border-intel-green/30 bg-intel-green/10 p-4 text-intel-green shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                {getModuleIcon(module.id)}
              </div>
              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <span className="font-mono text-sm uppercase tracking-[0.3em] text-intel-green/60">MODULE_DEPLOYED // {module.id.toUpperCase()}</span>
                </div>
                <h2 className="font-mono text-3xl font-bold tracking-tight text-white">{module.title.toUpperCase()}</h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-gray-400">{module.description}</p>
              </div>
            </div>
            <div className="font-mono md:text-right">
              <Badge
                className={`mb-3 rounded-none px-4 py-1 text-sm ${
                  module.level === 'Beginner'
                    ? 'bg-intel-green text-black'
                    : module.level === 'Advanced'
                      ? 'bg-intel-red text-white'
                      : 'bg-intel-blue text-white'
                }`}
              >
                {module.level.toUpperCase()}
              </Badge>
              <p className="flex items-center text-xs text-intel-green/60 md:justify-end">
                <Clock className="mr-1 h-3 w-3" /> EST_TIME: {module.estimatedTime.toUpperCase()}
              </p>
              <p className="mt-1 flex items-center text-xs text-intel-green/60 md:justify-end">
                <Activity className="mr-1 h-3 w-3" /> PHASES: {module.sections?.length || 0}
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-intel-green/10 pt-6">
            <div className="mb-3 flex items-center justify-between font-mono">
              <span className="text-xs uppercase tracking-widest text-gray-500">SYNC_PROGRESS</span>
              <span className="text-xs text-intel-green">
                {completedSections.size} / {module.sections?.length || 0} PHASES COMPLETED ({Math.round(calculateProgress())}%)
              </span>
            </div>
            <div className="relative h-2 overflow-hidden border border-intel-green/10 bg-gray-900">
              <div
                className="absolute left-0 top-0 h-full bg-intel-green shadow-[0_0_10px_rgba(34,197,94,0.5)] transition-all duration-500 ease-out"
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="space-y-6 lg:col-span-1">
          <Card className="tactical-panel overflow-hidden">
            <CardHeader className="border-b border-intel-green/10 bg-intel-green/5">
              <CardTitle className="font-mono text-sm tracking-widest text-intel-green">MISSION_PHASES</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[500px]">
                <div className="divide-y divide-intel-green/10">
                  {module.sections?.map((section, index) => (
                    <div
                      key={section.title}
                      className={`cursor-pointer border-l-4 p-4 transition-all duration-200 ${
                        currentSection === index ? 'border-l-intel-green bg-intel-green/10' : 'border-l-transparent hover:bg-white/5'
                      }`}
                      onClick={() => setCurrentSection(index)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start space-x-3">
                          <div className="pt-1">
                            {completedSections.has(index) ? (
                              <CheckCircle className="h-4 w-4 text-intel-green" />
                            ) : (
                              <div className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-600 font-mono text-[8px] text-gray-500">
                                {index + 1}
                              </div>
                            )}
                          </div>
                          <div>
                            <span className={`mb-1 block font-mono text-sm ${currentSection === index ? 'text-intel-green' : 'text-gray-400'}`}>
                              {section.title.toUpperCase()}
                            </span>
                            <span className="font-mono text-xs uppercase text-gray-600">DURATION: {section.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="tactical-panel bg-intel-green/5">
            <CardHeader className="pb-3 text-center">
              <CardTitle className="font-mono text-sm uppercase tracking-[0.2em] text-intel-green/60">OPERATIONAL_DATA</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 p-4">
              <Button
                variant="outline"
                className="h-10 w-full justify-start rounded-none border-intel-green/20 font-mono text-xs text-intel-green hover:bg-intel-green hover:text-black"
                onClick={() => onRequestMoreInfo?.(module.id)}
              >
                <MessageCircle className="mr-3 h-4 w-4" />
                INITIATE_COMS
              </Button>
              <Button asChild variant="outline" className="h-10 w-full justify-start rounded-none border-intel-green/20 font-mono text-xs text-intel-green hover:bg-intel-green hover:text-black">
                <Link href={`/resources/${resourceLinks[0] || 'osint-checklist'}`}>
                  <Download className="mr-3 h-4 w-4" />
                  EXTRACT_RESOURCES
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Card className="tactical-panel flex min-h-[600px] flex-col">
            <CardHeader className="border-b border-intel-green/10 bg-intel-green/[0.02]">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <div className="mb-1 font-mono text-xs uppercase tracking-widest text-intel-green/60">
                    PHASE_0{(currentSection + 1).toString().padStart(2, '0')} // CURRENT_OBJECTIVE
                  </div>
                  <CardTitle className="font-mono text-2xl text-white">
                    {module.sections?.[currentSection]?.title.toUpperCase() || 'IDLE'}
                  </CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="border border-intel-green/30 bg-intel-green/10 px-3 py-1 font-mono text-xs uppercase tracking-tighter text-intel-green">
                    NODE: {currentSection + 1} / {module.sections?.length || 1}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col p-0">
              <Tabs defaultValue="content" className="flex h-full w-full flex-col">
                <TabsList className="grid h-12 w-full grid-cols-3 rounded-none border-b border-intel-green/10 bg-black/50 p-0">
                  <TabsTrigger value="content" className="rounded-none border-r border-intel-green/10 font-mono text-xs uppercase tracking-widest data-[state=active]:bg-intel-green/10 data-[state=active]:text-intel-green">DATA_FEED</TabsTrigger>
                  <TabsTrigger value="exercises" className="rounded-none border-r border-intel-green/10 font-mono text-xs uppercase tracking-widest data-[state=active]:bg-intel-green/10 data-[state=active]:text-intel-green">OPERATIONS</TabsTrigger>
                  <TabsTrigger value="resources" className="rounded-none font-mono text-xs uppercase tracking-widest data-[state=active]:bg-intel-green/10 data-[state=active]:text-intel-green">INTEL_REPOSITORY</TabsTrigger>
                </TabsList>

                <div className="flex-1 p-8">
                  <TabsContent value="content" className="mt-0 h-full focus-visible:outline-none">
                    <ScrollArea className="h-[400px] pr-4">
                      {module.sections?.[currentSection]?.content ? (
                        <MarkdownContent content={module.sections[currentSection].content} />
                      ) : (
                        <div className="py-24 text-center opacity-20">
                          <Radar className="mx-auto mb-4 h-16 w-16 animate-spin" />
                          <p className="font-mono text-sm tracking-[0.5em]">NO_CONTENT_LOADED</p>
                        </div>
                      )}
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="exercises" className="mt-0 h-full focus-visible:outline-none">
                    <div className="space-y-6">
                      <div className="rounded-none border border-intel-green/20 bg-intel-green/5 p-6">
                        <div className="mb-4 flex items-center space-x-2">
                          <Activity className="h-5 w-5 text-intel-green" />
                          <h4 className="font-mono text-sm uppercase tracking-widest text-intel-green">SCENARIO_INSTRUCTIONS</h4>
                        </div>
                        <p className="mb-6 leading-relaxed text-gray-300">
                          {module.sections?.[currentSection]?.exercise ||
                            'Analyze the provided intelligence and execute the required protocols. Try not to improvise your way into nonsense.'}
                        </p>
                        <div className="flex items-center border border-intel-green/10 bg-black p-4 font-mono text-xs text-intel-green/80">
                          <span className="mr-2 animate-pulse text-intel-amber">!</span>
                          WARNING: LIVE TARGETS NOT PERMITTED FOR THIS PHASE. HR ALSO INSISTED WE ADD THAT.
                        </div>
                        <Button className="mt-6 w-full rounded-none bg-intel-green px-8 font-mono font-bold text-black hover:bg-intel-green/80 md:w-auto" onClick={() => onRequestMoreInfo?.(module.id)}>
                          LAUNCH_SCENARIO_BRIEF
                        </Button>
                      </div>

                      <div className="rounded-none border border-intel-blue/20 bg-intel-blue/5 p-6">
                        <div className="mb-4 flex items-center space-x-2">
                          <Lock className="h-5 w-5 text-intel-blue" />
                          <h4 className="font-mono text-sm uppercase tracking-widest text-intel-blue">KNOWLEDGE_VERIFICATION</h4>
                        </div>
                        <div className="space-y-3">
                          <Button variant="outline" className="h-auto w-full justify-start rounded-none border-intel-blue/20 py-3 text-left font-mono text-xs hover:bg-intel-blue/10">
                            <span className="mr-3 text-intel-blue">01.</span> CAN YOU EXPLAIN THE PROCESS WITHOUT SUMMONING BUZZWORDS?
                          </Button>
                          <Button variant="outline" className="h-auto w-full justify-start rounded-none border-intel-blue/20 py-3 text-left font-mono text-xs hover:bg-intel-blue/10">
                            <span className="mr-3 text-intel-blue">02.</span> CAN YOU DEFEND THE EVIDENCE LIKE AN ADULT IN A MEETING?
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="resources" className="mt-0 h-full focus-visible:outline-none">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="tactical-panel border-intel-green/20">
                        <div className="flex items-center justify-between border-b border-intel-green/10 bg-intel-green/5 p-4">
                          <span className="font-mono text-xs uppercase tracking-widest text-intel-green">ASSETS_PDF</span>
                          <Download className="h-4 w-4 text-intel-green/40" />
                        </div>
                        <div className="space-y-2 p-4">
                          {resourceLinks.map((resourceId) => (
                            <Button key={resourceId} asChild variant="ghost" size="sm" className="w-full justify-start rounded-none font-mono text-xs hover:bg-intel-green/10">
                              <Link href={`/resources/${resourceId}`}>[ EXTRACT ] {resourceLabelMap[resourceId] || resourceId.toUpperCase()}</Link>
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="tactical-panel border-intel-blue/20">
                        <div className="flex items-center justify-between border-b border-intel-blue/10 bg-intel-blue/5 p-4">
                          <span className="font-mono text-xs uppercase tracking-widest text-intel-blue">EXTERNAL_NODES</span>
                          <Globe className="h-4 w-4 text-intel-blue/40" />
                        </div>
                        <div className="space-y-2 p-4">
                          {externalLinks.map((link) => (
                            <Button key={link.to} asChild variant="ghost" size="sm" className="w-full justify-start rounded-none font-mono text-xs underline hover:bg-intel-blue/10">
                              <Link href={link.to}>{link.label}</Link>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>

              <div className="mt-auto border-t border-intel-green/10 bg-black/40 p-6">
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    className="rounded-none border-intel-green/30 font-mono text-xs uppercase tracking-widest text-intel-green hover:bg-intel-green/10 disabled:opacity-30"
                    disabled={currentSection === 0}
                    onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                  >
                    PREV_NODE
                  </Button>

                  <div className="flex space-x-3">
                    {!completedSections.has(currentSection) ? (
                      <Button
                        variant="outline"
                        className="hidden rounded-none border-intel-green bg-intel-green/10 font-mono text-xs uppercase tracking-widest text-intel-green hover:bg-intel-green hover:text-black sm:flex"
                        onClick={() => markSectionComplete(currentSection)}
                      >
                        <CheckCircle className="mr-2 h-4 w-4" />
                        SUBMIT_PHASE
                      </Button>
                    ) : null}

                    <Button
                      className="rounded-none bg-intel-amber px-6 font-mono text-xs font-bold uppercase tracking-widest text-black hover:bg-intel-amber/80"
                      onClick={() => onRequestMoreInfo?.(module.id)}
                    >
                      SECURE_HELP
                    </Button>
                  </div>

                  <Button
                    className="rounded-none bg-intel-green px-6 font-mono text-xs font-bold uppercase tracking-widest text-black hover:bg-intel-green/80 disabled:opacity-50"
                    disabled={currentSection >= (module.sections?.length || 1) - 1}
                    onClick={() => setCurrentSection(Math.min((module.sections?.length || 1) - 1, currentSection + 1))}
                  >
                    NEXT_NODE
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default LearningModule
