'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ComplianceCardProps {
  icon?: string
  wide?: boolean
  title: string
  badge: string
  body: string
  bullets?: string[]
  footnote?: string
}

export function ComplianceCard({
  icon,
  wide,
  title,
  badge,
  body,
  bullets,
  footnote,
}: ComplianceCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-border rounded-brand p-8 flex flex-col h-full">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between gap-3 w-full text-left cursor-pointer min-h-[48px]"
        aria-expanded={expanded}
      >
        <div className="flex items-center gap-3 min-w-0">
          {icon && (
            <div className={`${wide ? 'w-14' : 'w-12'} h-12 relative shrink-0`}>
              <Image
                src={icon}
                alt=""
                fill
                className="object-contain filter-badge-light"
                sizes="56px"
                unoptimized={icon.endsWith('.svg')}
              />
            </div>
          )}
          <h2 className="font-heading text-label tracking-heading text-dark">
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="inline-block text-caption font-body-medium uppercase tracking-eyebrow text-accent border border-accent-soft rounded-brand-sm px-2.5 py-0.5">
            {badge}
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={`text-copy-light transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="pt-5">
            <p className="text-body-sm text-copy-mid leading-[1.75] mb-4">
              {body}
            </p>

            {bullets && (
              <ul className="mb-4 space-y-2">
                {bullets.map((item) => (
                  <li
                    key={item}
                    className="text-caption text-copy-mid leading-[1.7] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1 before:h-1 before:rounded-full before:bg-accent-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {footnote && (
              <p className="text-caption text-copy-light leading-[1.7] mt-auto pt-4 border-t border-border">
                {footnote}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
