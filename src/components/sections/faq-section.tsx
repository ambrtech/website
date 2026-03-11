'use client'

import { Children, isValidElement, useState, type ReactNode } from 'react'
import { FaqJsonLd } from '@/components/json-ld'

/** Recursively extract plain text from a ReactNode tree */
function extractText(node: ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (!node) return ''
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (isValidElement(node)) {
    return extractText(
      (node.props as { children?: ReactNode }).children
    )
  }
  // Iterate over Children for fragments
  let text = ''
  Children.forEach(node, (child) => {
    text += extractText(child)
  })
  return text
}

interface FaqItem {
  question: string
  answer: string | ReactNode
}

interface FaqCategory {
  title: string
  items: FaqItem[]
}

interface FaqSectionProps {
  categories: FaqCategory[]
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      className={`transition-transform duration-fast shrink-0 ${open ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FaqSection({ categories }: FaqSectionProps) {
  const [openKey, setOpenKey] = useState<string | null>(null)

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key))
  }

  // Flatten all items for JSON-LD (needs plain string answers)
  const allItems = categories.flatMap((cat) =>
    cat.items.map((item) => ({
      question: item.question,
      answer:
        typeof item.answer === 'string'
          ? item.answer
          : extractText(item.answer),
    }))
  )

  return (
    <section className="py-section-mobile md:py-section px-container-mobile md:px-container">
      <FaqJsonLd items={allItems} />
      <div className="mx-auto max-w-site max-w-[800px]">
        {categories.map((category, catIndex) => (
          <div key={catIndex} className={catIndex > 0 ? 'mt-12' : ''}>
            <h2 className="font-heading text-dark text-xl md:text-2xl mb-6">
              {category.title}
            </h2>
            {category.items.map((item, itemIndex) => {
              const key = `${catIndex}-${itemIndex}`
              return (
                <div key={key} className="border-t border-border last:border-b">
                  <button
                    className="flex items-center justify-between w-full py-5 text-left gap-8"
                    onClick={() => toggle(key)}
                    aria-expanded={openKey === key}
                  >
                    <span className="text-label font-body-medium text-dark">
                      {item.question}
                    </span>
                    <ChevronIcon open={openKey === key} />
                  </button>
                  <div
                    className="grid transition-all duration-normal ease-out"
                    style={{
                      gridTemplateRows: openKey === key ? '1fr' : '0fr',
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="text-body text-copy-mid leading-[1.75] pb-6">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}
