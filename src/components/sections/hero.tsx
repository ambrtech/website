import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-white">
      <div className="mx-auto max-w-site px-container-mobile md:px-container pb-section-mobile md:pb-section pt-32 md:pt-44">
        <div className="max-w-3xl">
          <p className="text-xs font-body-medium uppercase tracking-eyebrow text-accent mb-6">
            Bespoke AI conversation simulations
          </p>
          <h1 className="font-heading text-5xl md:text-7xl tracking-heading text-dark leading-[1.08] mb-8">
            Your people practise the conversations that matter most
          </h1>
          <p className="text-lg md:text-xl text-copy-mid leading-relaxed max-w-2xl mb-12">
            Ambr AI builds voice-based training simulations customised to your
            organisation&apos;s real scenarios, language, and culture. Every
            simulation is bespoke. Nothing is off-the-shelf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-brand bg-dark text-surface-white px-8 py-3.5 text-sm font-body-medium transition-colors hover:bg-dark-mid"
            >
              Book a conversation
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-brand border border-border px-8 py-3.5 text-sm font-body-medium text-dark transition-colors hover:bg-surface"
            >
              See how it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
