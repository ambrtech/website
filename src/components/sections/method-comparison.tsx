import { Section } from './section'
import { Reveal } from '@/components/reveal'

interface MethodComparisonItem {
  method: string
  available: boolean
  description: string
}

interface MethodComparisonProps {
  eyebrow?: string
  heading?: React.ReactNode
  items: MethodComparisonItem[]
}

export function MethodComparison({ eyebrow, heading, items }: MethodComparisonProps) {
  return (
    <Section>
      <Reveal>
        {(eyebrow || heading) && (
          <div className="mb-12">
            {eyebrow && (
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[600px]">
                {heading}
              </h2>
            )}
          </div>
        )}

        <div className="border border-border rounded-brand overflow-hidden">
          {/* Header row */}
          <div className="hidden md:grid grid-cols-[1fr_80px_2fr] gap-6 px-6 py-4 bg-surface-alt border-b border-border">
            <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light">Method</span>
            <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light text-center">Status</span>
            <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light">Insight</span>
          </div>

          {/* Rows */}
          {items.map((item, i) => (
            <div
              key={item.method}
              className={`grid md:grid-cols-[1fr_80px_2fr] gap-3 md:gap-6 px-6 py-5 items-center ${
                i < items.length - 1 ? 'border-b border-border' : ''
              } ${item.available ? 'bg-accent-whisper' : 'bg-surface-white'}`}
            >
              <span className={`font-heading text-label tracking-heading ${item.available ? 'text-dark' : 'text-copy-mid'}`}>
                {item.method}
              </span>
              <span className={`text-center text-lg ${item.available ? 'text-accent' : 'text-copy-faint'}`}>
                {item.available ? '✓' : '✗'}
              </span>
              <span className="text-body-sm text-copy-mid leading-relaxed">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
