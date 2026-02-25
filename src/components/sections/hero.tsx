import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-surface-white">
      <div className="mx-auto w-full max-w-site px-container-mobile md:px-container">
        <p className="text-caption font-body-medium uppercase tracking-eyebrow text-copy-light mb-10 animate-[fadeIn_0.7s_ease_0.3s_both]">
          AI voice simulation for enterprise teams
        </p>
        <h1 className="font-heading text-display leading-[0.95] tracking-tight mb-12 animate-[fadeIn_0.8s_ease_0.45s_both]">
          Conversations<br />
          <em className="text-accent">perfected.</em>
        </h1>
        <p className="text-lg text-copy-mid max-w-[520px] leading-[1.7] mb-10 animate-[fadeIn_0.7s_ease_0.6s_both]">
          The world&apos;s most realistic AI conversation practice. Custom-built
          around your organisation, your scenarios, and the conversations
          that drive your business.
        </p>
        <div className="animate-[fadeIn_0.7s_ease_0.75s_both]">
          <Link
            href="/contact"
            className="inline-block rounded-brand-sm bg-dark text-surface-white px-8 py-3.5 text-sm font-body-medium transition-all hover:bg-accent hover:-translate-y-px hover:shadow-lg"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
