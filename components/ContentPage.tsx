'use client'

import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import MarkdownContent from '@/components/MarkdownContent'

type ContentPageProps = {
  title: string
  eyebrow?: string
  description?: string
  body: string
  backTo?: string
  backLabel?: string
  cta?: { to: string; label: string }
}

const ContentPage = ({ title, eyebrow, description, body, backTo = '/', backLabel = 'Return to base', cta }: ContentPageProps) => {
  return (
    <div className="mx-auto max-w-5xl p-6 animate-in fade-in duration-700">
      <div className="mb-6">
        <Button asChild variant="outline" className="rounded-none border-intel-green/30 text-intel-green hover:bg-intel-green/10">
          <Link href={backTo}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {backLabel}
          </Link>
        </Button>
      </div>

      <Card className="tactical-panel overflow-hidden">
        <CardHeader className="border-b border-intel-green/10 bg-intel-green/[0.02] p-8">
          <div className="text-sm font-mono uppercase tracking-[0.3em] text-intel-green/60">{eyebrow}</div>
          <CardTitle className="mt-3 text-4xl font-mono tracking-tight text-white">{title}</CardTitle>
          <CardDescription className="max-w-3xl pt-2 font-sans text-base leading-7 text-gray-400">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 p-8">
          <MarkdownContent content={body} />

          {cta ? (
            <div className="border-t border-intel-green/10 pt-6">
              <Button asChild className="rounded-none bg-intel-green font-mono font-bold text-black hover:bg-intel-green/80">
                <Link href={cta.to}>
                  {cta.label}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ) : null}
        </CardContent>
      </Card>
    </div>
  )
}

export default ContentPage
