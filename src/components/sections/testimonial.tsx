import { Section } from './section'

export function Testimonial() {
  return (
    <Section className="bg-dark">
      <div className="max-w-3xl mx-auto text-center">
        <blockquote>
          <p className="font-heading text-2xl md:text-4xl tracking-heading text-surface-white leading-snug mb-10">
            &ldquo;The simulations felt like real conversations our managers
            actually have. That&apos;s what made the difference — people
            weren&apos;t practising for an abstract scenario, they were
            preparing for Monday morning.&rdquo;
          </p>
        </blockquote>
        <div>
          <p className="text-surface-white font-body-medium text-sm">
            Lorem Ipsum
          </p>
          <p className="text-copy-faint text-sm">
            Head of L&D, Enterprise Client
          </p>
        </div>
      </div>
    </Section>
  )
}
