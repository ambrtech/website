import { Reveal } from '@/components/reveal'

export function GradientTextPanel() {
  return (
    <section className="py-section-mobile md:py-section px-container-mobile md:px-container">
      <div className="mx-auto max-w-site">
        <Reveal>
          <div className="relative isolate min-h-[520px] md:min-h-[640px] overflow-hidden rounded-brand-lg border border-border">
            <div className="absolute inset-0 bg-atmosphere-hero" />
            <div className="absolute inset-0 bg-dark/18" />
            <div className="absolute inset-0 bg-noise-ultra opacity-[0.56] mix-blend-multiply contrast-[210%]" />
            <div className="absolute inset-0 bg-noise-fine opacity-[0.34] mix-blend-overlay contrast-[170%]" />
            <div className="absolute inset-0 bg-surface-white/10" />

            <div className="relative z-10 flex min-h-[520px] md:min-h-[640px] items-center justify-center px-8 py-20 md:px-16 md:py-28 text-center">
              <h2 className="max-w-[920px] font-heading text-headline leading-[1.08] tracking-heading text-surface-white drop-shadow-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                <em className="italic"> tempor incididunt </em>
                ut labore et dolore magna aliqua.
              </h2>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
