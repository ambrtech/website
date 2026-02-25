import { Reveal } from '@/components/reveal'

export function Testimonial() {
  return (
    <section className="py-section-mobile md:py-section-lg px-container-mobile md:px-container border-t border-border">
      <div className="mx-auto max-w-[1000px]">
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
