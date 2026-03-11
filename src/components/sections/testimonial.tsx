import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { Grid } from '@/components/grid'

export function Testimonial() {
  return (
    <section className="relative py-section-mobile md:py-section-lg px-container-mobile md:px-container border-t border-border overflow-hidden">
      <Grid className="text-dark/[0.02]" dotSize={1} gap={20} />
      <span
        className="absolute font-heading leading-none text-accent opacity-[0.04] z-0 pointer-events-none select-none"
        style={{ fontSize: '24rem', top: '-3rem', left: '-1rem' }}
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <div className="relative z-10 mx-auto max-w-site">
        <Reveal>
          <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start max-w-[1000px]">
            <Image
              src="/images/photography/testimonial-woman-smiling.png"
              alt="A woman mid-laugh, caught in a genuine moment of warmth, looking slightly off-camera"
              width={160}
              height={200}
              className="rounded-brand-lg w-28 md:w-40 h-auto shrink-0"
            />
            <div>
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
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
