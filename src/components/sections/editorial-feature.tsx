import Image from 'next/image'
import { Section } from './section'
import { Reveal } from '@/components/reveal'
import { Marginalia } from '@/components/marginalia'

interface EditorialFeatureProps {
  eyebrow?: string
  heading?: React.ReactNode
  subtitle?: string
}

export function EditorialFeature({ eyebrow, heading, subtitle }: EditorialFeatureProps) {
  return (
    <Section>
      <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_480px] gap-12 lg:gap-24 items-start">
        {/* Left Side: Large, beautiful photography with an annotation */}
        <Reveal className="relative group">
          <div className="overflow-hidden rounded-brand-sm">
            <Image
              src="/images/photography/hero-quiet-reflection.jpeg"
              alt="A calm professional space"
              width={1200}
              height={800}
              className="w-full h-auto object-cover aspect-[4/3] transform transition-transform duration-[2s] group-hover:scale-[1.02]"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 md:-right-12 z-10 hidden md:block">
            <Marginalia direction="left" delay={500}>
              <span className="font-heading italic text-lg text-accent -rotate-2 inline-block">
                Tailored for every team
              </span>
            </Marginalia>
          </div>
        </Reveal>

        {/* Right Side: Dense, editorial typeset information */}
        <div className="flex flex-col justify-center h-full max-w-lg lg:max-w-none">
          <Reveal delay={200}>
            {eyebrow && (
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-6 eyebrow-hairline">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2 className="font-heading text-headline leading-[1.1] tracking-heading text-dark mb-6">
                {heading}
              </h2>
            )}
            {subtitle && (
              <p className="text-body text-copy-mid leading-[1.75] mb-12">
                {subtitle}
              </p>
            )}

            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="border-t border-border pt-6 relative">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center font-heading text-copy-mid">
                    1
                  </span>
                  <h3 className="font-heading text-xl text-dark">Live simulation</h3>
                </div>
                <p className="text-copy-mid text-sm leading-relaxed pl-12">
                  Sub-second voice responses that force the same thinking as a real conversation,
                  powered by context specific to your enterprise.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="border-t border-border pt-6 relative">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center font-heading text-copy-mid">
                    2
                  </span>
                  <h3 className="font-heading text-xl text-dark">Structured coaching</h3>
                </div>
                <p className="text-copy-mid text-sm leading-relaxed pl-12">
                  Feedback focused on structure, tone, clarity, and empathy, breaking down
                  each interaction into actionable insights.
                </p>
                <div className="absolute right-0 top-6 hidden xl:block">
                  <Marginalia direction="right" delay={1000} width={60} height={40}>
                    <span className="font-heading italic text-sm text-copy-light translate-x-12 translate-y-4 inline-block">
                      *not just a score
                    </span>
                  </Marginalia>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="border-t border-border pt-6 border-b pb-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center font-heading text-copy-mid">
                    3
                  </span>
                  <h3 className="font-heading text-xl text-dark">Global readiness</h3>
                </div>
                <p className="text-copy-mid text-sm leading-relaxed pl-12">
                  30+ languages culturally adjusted, not just translated, alongside 
                  team analytics that identify capability gaps instantly.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
