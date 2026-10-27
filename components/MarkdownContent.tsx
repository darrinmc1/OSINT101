'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

const isOrderedListItem = (line: string) => /^\d+\.\s/.test(line.trim())

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = []
  const pattern = /(`[^`]+`|\*\*[^*]+?\*\*|\[[^\]]+\]\([^)]+\))/g
  let last = 0
  let match: RegExpExecArray | null
  let index = 0

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index))
    const token = match[0]
    const key = `${keyPrefix}-${index}`

    if (token.startsWith('`')) {
      nodes.push(
        <code key={key} className="rounded bg-black/60 px-1.5 py-0.5 font-mono text-sm text-intel-green">
          {token.slice(1, -1)}
        </code>,
      )
    } else if (token.startsWith('**')) {
      nodes.push(
        <strong key={key} className="font-semibold text-white">
          {token.slice(2, -2)}
        </strong>,
      )
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
      if (link) {
        const [, label, href] = link
        const external = href.startsWith('http://') || href.startsWith('https://')
        const internal = href.startsWith('/')
        if (internal) {
          nodes.push(
            <Link key={key} href={href} className="text-intel-green underline underline-offset-2">
              {label}
            </Link>,
          )
        } else if (external) {
          nodes.push(
            <a
              key={key}
              href={href}
              className="text-intel-green underline underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              {label}
            </a>,
          )
        } else {
          nodes.push(token)
        }
      }
    }

    last = match.index + token.length
    index += 1
  }

  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

type MarkdownContentProps = {
  content: string
}

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  const lines = content.trim().split('\n')
  const elements: ReactNode[] = []
  let bulletItems: string[] = []
  let numberedItems: string[] = []
  let inCode = false
  let codeLines: string[] = []

  const flushLists = () => {
    if (bulletItems.length) {
      elements.push(
        <ul key={`bullet-${elements.length}`} className="ml-5 list-disc space-y-2 marker:text-intel-green">
          {bulletItems.map((item, index) => (
            <li key={index}>{renderInline(item, `b-${elements.length}-${index}`)}</li>
          ))}
        </ul>,
      )
      bulletItems = []
    }

    if (numberedItems.length) {
      elements.push(
        <ol key={`numbered-${elements.length}`} className="ml-5 list-decimal space-y-2 marker:text-intel-green">
          {numberedItems.map((item, index) => (
            <li key={index}>{renderInline(item, `n-${elements.length}-${index}`)}</li>
          ))}
        </ol>,
      )
      numberedItems = []
    }
  }

  const flushCode = () => {
    elements.push(
      <pre
        key={`code-${elements.length}`}
        className="overflow-x-auto rounded bg-black/60 p-4 font-mono text-sm leading-6 text-intel-green"
      >
        <code>{codeLines.join('\n')}</code>
      </pre>,
    )
    codeLines = []
  }

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim()

    if (inCode) {
      if (line.startsWith('```')) {
        inCode = false
        flushCode()
        return
      }
      codeLines.push(rawLine.replace(/\s+$/, ''))
      return
    }

    if (line.startsWith('```')) {
      flushLists()
      inCode = true
      codeLines = []
      return
    }

    if (!line || line === '---') {
      flushLists()
      return
    }

    if (line.startsWith('- ')) {
      bulletItems.push(line.replace(/^- /, ''))
      return
    }

    if (isOrderedListItem(line)) {
      numberedItems.push(line.replace(/^\d+\.\s/, ''))
      return
    }

    flushLists()

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={`h2-${index}`} className="text-3xl font-mono text-white">
          {renderInline(line.replace(/^## /, ''), `h2-${index}`)}
        </h2>,
      )
      return
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${index}`} className="pt-4 text-xl font-mono text-intel-green">
          {renderInline(line.replace(/^### /, ''), `h3-${index}`)}
        </h3>,
      )
      return
    }

    if (line.startsWith('> ')) {
      elements.push(
        <blockquote
          key={`quote-${index}`}
          className="border-l-2 border-intel-green bg-intel-green/5 py-3 pl-4 italic text-gray-300"
        >
          {renderInline(line.replace(/^> /, ''), `q-${index}`)}
        </blockquote>,
      )
      return
    }

    elements.push(
      <p key={`p-${index}`} className="leading-7 text-gray-300">
        {renderInline(line, `p-${index}`)}
      </p>,
    )
  })

  flushLists()
  if (inCode) flushCode()

  return <div className="space-y-4">{elements}</div>
}

export default MarkdownContent
