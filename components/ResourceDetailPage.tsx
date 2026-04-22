'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Calendar, Download, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import MarkdownContent from '@/components/MarkdownContent'
import { resourceLibrary } from '@/data/siteContent'

const ResourceDetailPage = () => {
  const params = useParams<{ resourceId: string }>()
  const resourceId = params?.resourceId
  const resource = resourceLibrary.find((entry) => entry.id === resourceId)

  if (!resource) {
    return (
      <div className="mx-auto max-w-4xl p-6">
        <Card className="tactical-panel p-8">
          <CardTitle className="font-mono text-3xl text-white">RESOURCE NOT FOUND</CardTitle>
          <CardDescription className="mt-4 text-base text-gray-400">
            The requested asset wandered off into the fog. It may have been renamed, removed, or promoted to folklore.
          </CardDescription>
          <CardContent className="px-0 pt-6">
            <Button asChild className="rounded-none bg-intel-green text-black hover:bg-intel-green/80">
              <Link href="/resources">Back to asset library</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl p-6 animate-in fade-in duration-700">
      <div className="mb-6">
        <Button asChild variant="outline" className="rounded-none border-intel-green/30 text-intel-green hover:bg-intel-green/10">
          <Link href="/resources">Back to asset library</Link>
        </Button>
      </div>

      <Card className="tactical-panel overflow-hidden">
        <CardHeader className="border-b border-intel-green/10 bg-intel-green/[0.02] p-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="rounded-none bg-intel-green text-black">{resource.type}</Badge>
            {resource.featured ? <Badge className="rounded-none bg-intel-blue text-white">FEATURED</Badge> : null}
            <Badge variant="outline" className="rounded-none border-intel-green/30 text-intel-green/70">
              {resource.size}
            </Badge>
          </div>
          <CardTitle className="mt-4 text-4xl font-mono tracking-tight text-white">{resource.title}</CardTitle>
          <CardDescription className="max-w-3xl pt-2 font-sans text-base leading-7 text-gray-400">
            {resource.description}
          </CardDescription>
          <div className="flex flex-wrap items-center gap-6 pt-4 font-mono text-xs uppercase tracking-widest text-intel-green/60">
            <div className="flex items-center text-sm">
              <Star className="mr-2 h-4 w-4" />
              {resource.rating} rating
            </div>
            <div className="flex items-center text-sm">
              <Download className="mr-2 h-4 w-4" />
              {resource.downloads.toLocaleString()} extractions
            </div>
            <div className="flex items-center text-sm">
              <Calendar className="mr-2 h-4 w-4" />
              Updated {new Date(resource.lastUpdated).toLocaleDateString()}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8 p-8">
          <MarkdownContent content={resource.body} />
          <div className="border-t border-intel-green/10 pt-6">
            <Button asChild className="rounded-none bg-intel-green font-mono font-bold text-black hover:bg-intel-green/80">
              <Link href="/requests">Request a related asset</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ResourceDetailPage
