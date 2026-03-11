import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { PageHero } from '@/components/sections/page-hero'
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
      <PageHero
        eyebrow="Responsible AI"
        heading={
          <>
            Responsible AI, by <em className="text-accent">design</em>.
          </>
        }
        subtitle="AI roleplay involves real people practicing real conversations: moments of vulnerability, uncertainty, and growth. That responsibility shapes every decision we make. Ambr AI is not a general-purpose AI tool — it is a training platform built to help people perform better in the moments that matter at work. That focused scope makes our ethical commitments specific and enforceable."
        compact
        first
      />

      {/* ── Human-centered (dark anchor) ── */}
      <section className="pb-section-mobile md:pb-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="bg-dark text-surface-white rounded-brand p-8 md:p-12">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                Human-centered
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6 max-w-[640px]">
                The conversations that shape careers and relationships happen
                between <em className="text-accent">people</em>.
              </h2>
              <div className="max-w-[640px] space-y-4 text-body text-copy-light leading-[1.75]">
                <p>Ambr AI exists to make sure people are ready for them.</p>
                <p>
                  Every simulation is practice for a real moment with a real
                  colleague, client, or team member. The AI builds confidence and
                  sharpens skill in a safe space. The measure of success is always
                  what happens next, when it counts.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Three principle cards ── */}
      <section className="pb-section-mobile md:pb-section px-container-mobile md:px-container bg-surface-white">
        <div className="mx-auto max-w-site">
          <Reveal>
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-8 eyebrow-hairline">
              Our Principles
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal>
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

            <Reveal delay={80}>
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
                  adjusted to reflect cultural norms and workplace expectations.
                </p>
                <Link
                  href="/product/languages"
                  className="text-body-sm font-body-medium text-accent hover:text-accent-hover transition-colors"
                >
                  See all supported languages &rarr;
                </Link>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="bg-surface-white rounded-brand p-8 md:p-10 h-full">
                <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-5">
                  Bias &amp; Fairness
                </p>
                <h3 className="font-heading text-label tracking-heading mb-4">
                  An ongoing design principle, not a checkbox.
                </h3>
                <p className="text-body-sm text-copy-mid leading-[1.75] mb-4">
                  Scenario design includes review for cultural, gender, and
                  demographic bias. Feedback mechanisms are designed for equitable
                  treatment regardless of accent, language proficiency, or
                  communication style.
                </p>
                <p className="text-caption text-copy-light leading-[1.7]">
                  This is continuous work, and we are committed to transparency
                  about our approach.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cross-links ── */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container border-t border-border">
        <div className="mx-auto max-w-site text-center">
          <Reveal>
            <p className="font-heading text-label leading-[1.3] tracking-heading mb-6">
              Questions about Ambr AI?{' '}
              <Link
                href="/contact"
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
