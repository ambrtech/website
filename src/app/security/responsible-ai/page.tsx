import Image from 'next/image'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'Responsible AI',
  description:
    'Our principles for responsible AI in workplace training, including bias mitigation, human oversight, and transparency.',
  path: '/security/responsible-ai',
})

export default function ResponsibleAIPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Security', href: '/security/compliance' },
          { name: 'Responsible AI', href: '/security/responsible-ai' },
        ]}
      />

      <PageHero
        eyebrow="Responsible AI"
        heading={<>Responsible AI, by <em className="text-accent">design</em>.</>}
        subtitle="AI roleplay involves real people practicing real conversations: moments of vulnerability, uncertainty, and growth. That responsibility shapes every decision we make. Ambr AI is not a general-purpose AI tool — it is a focused training platform, and that focused scope makes our ethical commitments specific and enforceable."
        compact
      />

      {/* ── Human-centered ── */}
      <SplitContent
        eyebrow="Human-centered"
        heading={
          <>
            The conversations that shape careers and relationships happen
            between <em className="text-accent">people</em>.
          </>
        }
        visualContent={
          <div className="relative aspect-[4/3] rounded-brand-lg overflow-hidden">
            <Image
              src="/images/photography/executive-floor-walkaround.png"
              alt="Colleagues walking together through a modern office"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-noise-fine opacity-[0.14] mix-blend-soft-light pointer-events-none" />
          </div>
        }
      >
        <p>
          Ambr AI exists to strengthen human connection, not replace it.
          We don&apos;t automate conversations — we help people get better
          at having them. The AI is practice; the real moment is always
          human-to-human.
        </p>
        <p>
          Every simulation is practice for a real moment with a real
          colleague, client, or team member. The AI builds confidence and
          sharpens skill in a safe space. The measure of success is always
          what happens next, when it counts.
        </p>
        <p>
          Every product decision we make is guided by a simple question:
          does this help someone have a better conversation with another
          person?
        </p>
      </SplitContent>

      {/* ── Principle cards ── */}
      <Section className="bg-surface-white">
        <Reveal>
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-8 eyebrow-hairline">
            Our Principles
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-surface-white rounded-brand p-8 md:p-10 h-full">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-5">
                Human-designed, quality-supervised
              </p>
              <h3 className="font-heading text-label tracking-heading mb-4">
                AI that operates within human-defined parameters.
              </h3>
              <p className="text-body-sm text-copy-mid leading-[1.75]">
                The core simulation library, feedback frameworks, and AI
                character behaviors are designed by people with domain expertise
                in workplace learning. The AI operates within these
                human-defined parameters. Our team runs ongoing quality reviews
                to ensure simulation and feedback standards are maintained as
                the platform evolves.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="bg-surface-white rounded-brand p-8 md:p-10 h-full">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-5">
                Transparency
              </p>
              <h3 className="font-heading text-label tracking-heading mb-4">
                Users always know they are interacting with AI.
              </h3>
              <p className="text-body-sm text-copy-mid leading-[1.75]">
                That clarity is built into the product, and it aligns with the
                EU AI Act&apos;s transparency requirements.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="bg-surface-white rounded-brand p-8 md:p-10 h-full">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-5">
                Cultural context
              </p>
              <h3 className="font-heading text-label tracking-heading mb-4">
                We don&apos;t just translate. We rebuild for context.
              </h3>
              <p className="text-body-sm text-copy-mid leading-[1.75] mb-4">
                A difficult conversation in Tokyo is not the same as one in
                London or S&atilde;o Paulo. Ambr AI supports over 30 languages,
                and our simulations are adjusted to reflect cultural norms,
                communication styles, and workplace expectations across regions.
              </p>
              <Link
                href="/product/languages"
                className="text-body-sm font-body-medium text-accent hover:text-accent-hover transition-colors"
              >
                See all supported languages &rarr;
              </Link>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="bg-surface-white rounded-brand p-8 md:p-10 h-full">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-5">
                Bias &amp; Fairness
              </p>
              <h3 className="font-heading text-label tracking-heading mb-4">
                An ongoing design principle, not a checkbox.
              </h3>
              <p className="text-body-sm text-copy-mid leading-[1.75] mb-4">
                AI systems can inherit and reinforce biases. We take this
                seriously as an ongoing design principle. Scenario design
                includes review for cultural, gender, and
                demographic bias. Feedback mechanisms are designed for equitable
                treatment regardless of accent, language proficiency, or
                communication style.
              </p>
              <p className="text-body-sm text-copy-mid leading-[1.75] border-l-2 border-accent-soft pl-4">
                This is continuous work, and we are committed to transparency
                about our approach.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Cross-links ── */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container border-t border-border">
        <div className="mx-auto max-w-site text-center">
          <Reveal>
            <p className="font-heading text-label leading-[1.3] tracking-heading mb-6">
              Questions about our AI practices?{' '}
              <Link
                href="/find-out-more"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                Talk to us
              </Link>
              .
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <Link
                href="/security/compliance"
                className="text-body-sm font-body-medium text-copy-mid hover:text-accent transition-colors"
              >
                Review our compliance certifications &rarr;
              </Link>
              <span className="text-copy-faint" aria-hidden="true">
                &middot;
              </span>
              <Link
                href="/security/data-protection"
                className="text-body-sm font-body-medium text-copy-mid hover:text-accent transition-colors"
              >
                How we protect your data &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
