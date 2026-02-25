import Link from 'next/link'
import { Reveal } from '@/components/reveal'

export function CTA() {
  return (
    <section className="py-section-xl md:py-section-2xl px-container-mobile md:px-container text-center border-t border-border">
      <Reveal>
        <h2 className="font-heading text-headline leading-[1.1] tracking-heading mb-6">
          See what Ambr AI looks like<br />
          for <em className="text-accent">your</em> team.
        </h2>
        <p className="text-base text-copy-light max-w-[440px] mx-auto leading-[1.7] mb-10">
          We&apos;ll build a custom simulation using your real scenarios. No generic demos.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-brand-sm bg-dark text-surface-white px-8 py-3.5 text-sm font-body-medium transition-all hover:bg-accent hover:-translate-y-px hover:shadow-lg"
        >
          Request a Demo
        </Link>
      </Reveal>
    </section>
  )
}
