import Link from 'next/link'
import { Section } from './section'

export function CTA() {
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-5xl tracking-heading text-dark leading-tight mb-6">
          Ready to see what bespoke training looks like?
        </h2>
        <p className="text-copy-mid text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          Every engagement starts with a conversation. Tell us about your
          training challenges and we&apos;ll show you what&apos;s possible.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-brand bg-accent text-surface-white px-10 py-4 text-sm font-body-medium transition-colors hover:bg-accent-hover"
        >
          Book a conversation
        </Link>
      </div>
    </Section>
  )
}
