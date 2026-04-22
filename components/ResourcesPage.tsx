'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Download, FileText, CheckSquare, Terminal, Users, Search, Star, Calendar, Filter, Activity, Database, Radar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { resourceLibrary } from '@/data/siteContent'
import type { ResourceEntry } from '@/data/siteContent'
import type { ReactNode } from 'react'

const iconMap: Record<string, typeof FileText> = {
  'osint-checklist': CheckSquare,
  'kali-cheatsheet': Terminal,
  'people-profiling': Users,
  'search-operators': Search,
  'osint-tools-list': FileText,
  'legal-guidelines': FileText,
}

type EnrichedResource = ResourceEntry & { icon: ReactNode }

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const resources = useMemo<EnrichedResource[]>(
    () =>
      resourceLibrary.map((resource) => {
        const Icon = iconMap[resource.id] || FileText
        return { ...resource, icon: <Icon className="h-6 w-6" /> }
      }),
    [],
  )

  const categories = [
    { id: 'all', name: 'All Resources', count: resources.length },
    { id: 'checklists', name: 'Checklists', count: resources.filter((resource) => resource.category === 'checklists').length },
    { id: 'cheatsheets', name: 'Cheat Sheets', count: resources.filter((resource) => resource.category === 'cheatsheets').length },
    { id: 'templates', name: 'Templates', count: resources.filter((resource) => resource.category === 'templates').length },
    { id: 'guides', name: 'Guides', count: resources.filter((resource) => resource.category === 'guides').length },
    { id: 'lists', name: 'Tool Lists', count: resources.filter((resource) => resource.category === 'lists').length },
  ]

  const filteredResources = resources.filter((resource) => {
    const term = searchTerm.toLowerCase()
    const matchesSearch =
      resource.title.toLowerCase().includes(term) ||
      resource.description.toLowerCase().includes(term) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(term))
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredResources = resources.filter((resource) => resource.featured)
  const recentResources = [...resources].sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()).slice(0, 6)

  type ResourceCardProps = {
    resource: EnrichedResource
    featured?: boolean
  }

  const ResourceCard = ({ resource, featured = false }: ResourceCardProps) => (
    <Card className={`tactical-panel group transition-all duration-300 hover:border-intel-green ${featured ? 'border-intel-green/40 bg-intel-green/5' : ''}`}>
      <CardHeader className="border-b border-intel-green/10 pb-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className={`border border-intel-green/20 p-3 ${featured ? 'bg-intel-green text-black' : 'bg-intel-green/10 text-intel-green'}`}>
              {resource.icon}
            </div>
            <div>
              <CardTitle className="text-lg font-mono text-white transition-colors group-hover:text-intel-green">{resource.title.toUpperCase()}</CardTitle>
              <div className="mt-2 flex items-center space-x-2">
                <Badge variant="outline" className="rounded-none border-intel-green/30 font-mono text-xs">{resource.type}</Badge>
                <Badge variant="secondary" className="rounded-none border border-gray-800 bg-gray-900 font-mono text-xs">{resource.size}</Badge>
                {featured ? <Badge className="rounded-none bg-intel-green font-mono text-xs text-black">FEATURED</Badge> : null}
              </div>
            </div>
          </div>
          <div className="text-right font-mono text-xs text-intel-green/60">
            <div className="flex items-center justify-end space-x-1">
              <Star className="h-3 w-3 fill-intel-green text-intel-green" />
              <span>{resource.rating}</span>
            </div>
            <div className="mt-1 flex items-center justify-end space-x-1">
              <Download className="h-3 w-3" />
              <span>{resource.downloads.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <CardDescription className="mb-6 leading-relaxed text-gray-400">{resource.description}</CardDescription>

        <div className="mb-6 flex flex-wrap gap-2">
          {resource.tags.map((tag) => (
            <span key={tag} className="bg-intel-green/[0.02] px-2 py-0.5 font-mono text-xs uppercase tracking-tighter text-intel-green/40 border border-intel-green/10">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-intel-green/10 pt-4">
          <div className="flex items-center font-mono text-xs uppercase text-gray-500">
            <Calendar className="mr-2 h-3 w-3" />
            VINTAGE: {new Date(resource.lastUpdated).toLocaleDateString()}
          </div>
          <Button asChild className="h-9 rounded-none bg-intel-green px-6 font-mono text-xs font-bold text-black hover:bg-intel-green/80">
            <Link href={`/resources/${resource.id}`}>
              <Download className="mr-2 h-4 w-4" />
              EXTRACT
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen animate-in fade-in duration-700 bg-tactical-bg text-gray-200">
      <div className="relative overflow-hidden border-b border-intel-green/20 py-20">
        <div className="scanline"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-4 animate-pulse font-mono text-sm text-intel-green">// ACCESSING_SECURE_REPOSITORY //</div>
          <h1 className="mb-6 font-mono text-5xl font-bold tracking-tighter text-white">
            INTEL <span className="glow-green text-intel-green">ASSET LIBRARY</span>
          </h1>
          <p className="mx-auto max-w-3xl font-mono text-lg uppercase tracking-wide leading-relaxed text-gray-400">
            Your arsenal of OSINT tools, checklists, and guides.
            All intelligence gathered, reviewed, and occasionally mocked by seasoned analysts.
            Download with purpose, not just because the button looks cool.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-intel-green/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="tactical-panel mb-12 bg-intel-green/[0.02] p-6">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="relative w-full flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-intel-green/40" />
              <Input
                placeholder="SEARCH_ASSETS_BY_KEYWORD..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="h-12 w-full rounded-none border-intel-green/20 bg-black/40 pl-10 font-mono text-intel-green focus-visible:ring-intel-green"
              />
            </div>
            <div className="flex w-full items-center space-x-4 md:w-auto">
              <Filter className="h-4 w-4 text-intel-green" />
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="min-w-[200px] rounded-none border border-intel-green/20 bg-black/40 px-4 font-mono text-sm text-intel-green h-12 focus:outline-none focus:ring-1 focus:ring-intel-green"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-tactical-bg">
                    {category.name.toUpperCase()} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid h-12 w-full grid-cols-3 rounded-none border border-intel-green/10 bg-black/40 p-1">
            <TabsTrigger value="all" className="rounded-none font-mono text-xs uppercase tracking-widest data-[state=active]:bg-intel-green data-[state=active]:text-black">ALL_INTEL</TabsTrigger>
            <TabsTrigger value="featured" className="rounded-none font-mono text-xs uppercase tracking-widest data-[state=active]:bg-intel-green data-[state=active]:text-black">TOP_PRIORITY</TabsTrigger>
            <TabsTrigger value="recent" className="rounded-none font-mono text-xs uppercase tracking-widest data-[state=active]:bg-intel-green data-[state=active]:text-black">LATEST_INTEL</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-12 focus-visible:outline-none">
            <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { label: 'TOTAL_RESOURCES', value: resources.length, icon: <Database className="h-4 w-4" />, color: 'text-intel-green' },
                { label: 'TOTAL_EXTRACTIONS', value: resources.reduce((sum, resource) => sum + resource.downloads, 0).toLocaleString(), icon: <Download className="h-4 w-4" />, color: 'text-intel-blue' },
                { label: 'AVG_QUALITY', value: (resources.reduce((sum, resource) => sum + resource.rating, 0) / resources.length).toFixed(1), icon: <Star className="h-4 w-4" />, color: 'text-intel-amber' },
                { label: 'ACCESS_LEVEL', value: 'USEFUL', icon: <Activity className="h-4 w-4" />, color: 'text-intel-green' },
              ].map((stat) => (
                <div key={stat.label} className="tactical-panel border-l-2 border-l-intel-green/30 bg-black/40 p-4">
                  <div className={`mb-1 flex items-center space-x-2 font-mono text-xs tracking-widest opacity-60 ${stat.color}`}>
                    {stat.icon}
                    <span>{stat.label}</span>
                  </div>
                  <div className="font-mono text-xl font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>

            {filteredResources.length === 0 ? (
              <div className="tactical-panel bg-black/40 py-24 text-center">
                <Radar className="mx-auto mb-6 h-16 w-16 animate-spin text-intel-green/20" />
                <h3 className="font-mono text-xl uppercase tracking-widest text-intel-green/40">SCAN_RETURNED_NULL</h3>
                <p className="mt-2 font-mono text-xs text-gray-600">
                  NO ASSETS MATCH CURRENT FILTERS. EITHER YOUR QUERY IS TOO SPECIFIC OR THE DATABASE IS JUDGING YOU.
                </p>
              </div>
            ) : null}
          </TabsContent>

          <TabsContent value="featured" className="mt-12 focus-visible:outline-none">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} featured />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-12 focus-visible:outline-none">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recentResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="tactical-panel relative mt-20 overflow-hidden bg-gradient-to-r from-intel-green/10 via-black to-intel-blue/10 p-12 text-center">
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-intel-green/50 to-transparent"></div>
          <h3 className="mb-4 font-mono text-3xl font-bold uppercase tracking-widest text-white">ASSET_REQUEST_TERMINAL</h3>
          <p className="mx-auto mb-10 max-w-2xl font-mono text-sm tracking-widest text-gray-400">
            OUR REPOSITORY GROWS EVERY HOUR. IF YOU CANNOT FIND THE INTEL YOU NEED, ASK FOR IT DIRECTLY.
            THAT IS FAR MORE EFFICIENT THAN STARE-WARS WITH THE SEARCH BOX.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Button asChild className="h-12 rounded-none bg-intel-green px-10 font-mono font-bold text-black shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:bg-intel-green/80">
              <Link href="/requests">REQUEST_INTEL</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-none border-intel-blue px-10 font-mono font-bold text-intel-blue hover:bg-intel-blue/10">
              <Link href="/contribute">UPLINK_DATA</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourcesPage
