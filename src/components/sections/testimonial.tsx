import { Reveal } from '@/components/reveal'
import { Grid } from '@/components/grid'

export function Testimonial() {
  return (
    <section className="relative py-section-mobile md:py-section-lg px-container-mobile md:px-container border-t border-border bg-surface-alt overflow-hidden">
      <Grid className="text-dark/[0.02]" dotSize={1} gap={20} />
      <div className="relative z-10 mx-auto max-w-[1000px]">
        <Reveal>
          <p className="font-heading text-quote-mark text-accent/50 leading-[0.5] mb-6 select-none">
            &ldquo;
          </p>
          <blockquote className="font-heading text-quote leading-[1.35] tracking-heading mb-8">
            The realism genuinely caught us off guard. Our team stopped treating it
            as training and started treating it as practice — which is exactly the
            shift we needed.
          </blockquote>
          <p className="text-body-sm font-body-medium text-dark">Tracy Anderson</p>
          <p className="text-nav text-copy-light mt-0.5">
            Head of Learning &amp; Development, Skyscanner
          </p>
        </Reveal>
      </div>
    </section>
  )
}
