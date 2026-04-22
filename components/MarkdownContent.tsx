'use client'

import { ReactNode } from 'react'

const isOrderedListItem = (line: string) => /^\d+\.\s/.test(line.trim())

const renderInlineCode = (text: string): ReactNode[] => {
  const parts = text.split(/(`[^`]+`)/g)

  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={index} className="rounded bg-black/60 px-1.5 py-0.5 font-mono text-sm text-intel-green">
          {part.slice(1, -1)}
        </code>
      )
    }

    return part
  })
}

type MarkdownContentProps = {
  content: string
}

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  const lines = content.trim().split('\n')
  const elements: ReactNode[] = []
  let bulletItems: string[] = []
  let numberedItems: string[] = []

  const flushLists = () => {
    if (bulletItems.length) {
      elements.push(
        <ul key={`bullet-${elements.length}`} className="ml-5 list-disc space-y-2 marker:text-intel-green">
          {bulletItems.map((item, index) => (
            <li key={index}>{renderInlineCode(item)}</li>
          ))}
        </ul>,
      )
      bulletItems = []
    }

    if (numberedItems.length) {
      elements.push(
        <ol key={`numbered-${elements.length}`} className="ml-5 list-decimal space-y-2 marker:text-intel-green">
          {numberedItems.map((item, index) => (
            <li key={index}>{renderInlineCode(item)}</li>
          ))}
        </ol>,
      )
      numberedItems = []
    }
  }

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim()

    if (!line) {
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
          {line.replace(/^## /, '')}
        </h2>,
      )
      return
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${index}`} className="pt-4 text-xl font-mono text-intel-green">
          {line.replace(/^### /, '')}
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
          {renderInlineCode(line.replace(/^> /, ''))}
        </blockquote>,
      )
      return
    }

    elements.push(
      <p key={`p-${index}`} className="leading-7 text-gray-300">
        {renderInlineCode(line)}
      </p>,
    )
  })

  flushLists()

  return <div className="space-y-4">{elements}</div>
}

export default MarkdownContent
