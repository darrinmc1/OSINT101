"use client"

import React from "react"
import Link from "next/link"
import { JsonLd, createBreadcrumbSchema, BreadcrumbItem } from "@/components/json-ld"

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const schema = createBreadcrumbSchema(items)

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-sm ${className}`}>
        <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
          {items.map((item, index) => (
            <li
              key={item.url}
              className="flex items-center space-x-2"
              itemScope
              itemType="https://schema.org/ListItem"
              itemProp="itemListElement"
            >
              {index > 0 && (
                <span className="text-gray-400" aria-hidden="true">/</span>
              )}
              {index === items.length - 1 ? (
                <span
                  className="text-gray-600 font-medium"
                  itemProp="name"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
