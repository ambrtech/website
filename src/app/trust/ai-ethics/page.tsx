import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/sections/section'
import { TrustBadges } from '@/components/sections/trust-badges'
import { CTA } from '@/components/sections/cta'
import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'AI & Ethics',
  description:
    'How Ambr AI approaches responsible AI in workplace training. Our principles on fairness, transparency, human oversight, and bias mitigation.',
  path: '/trust/ai-ethics',
})

const principles = [
  {
    heading: 'AI supports humans. It does not replace them.',
    description:
      'Our platform exists to give people a safe space to develop skills through practice. AI provides the conversation partner and the feedback. The learner does the growing. Managers, coaches, and L&D teams remain central to development — AI extends their reach, not their obsolescence.',
  },
  {
    heading: 'Feedback, not judgment.',
    description:
      'Simulations generate developmental feedback designed to help people improve. We do not produce scores that determine employment outcomes, performance ratings, or advancement decisions. Organizations control how feedback is used, and we advise against using simulation data as an evaluation mechanism.',
  },
  {
    heading: 'Cultural context, not just translation.',
    description:
      'Effective communication varies across cultures, industries, and organizational contexts. Our simulations are customized to reflect these differences — not through surface-level language translation, but through scenario design that accounts for cultural norms, communication styles, and professional expectations.',
  },
  {
    heading: 'Transparency in AI interactions.',
    description:
      'Learners always know they are interacting with an AI simulation. There is no deception about the nature of the conversation partner. This transparency is both an ethical requirement and a practical one — people practice differently when they understand the environment.',
  },
  {
    heading: 'Reliable behavior in enterprise contexts.',
    description:
      'AI conversation partners are designed to behave consistently and predictably within the bounds of each simulation. We implement guardrails to prevent off-topic responses, inappropriate content, and unpredictable behavior that would undermine the training experience or organizational trust.',
  },
]

const biasItems = [
  {
    heading: 'Scenario design review',
    description:
      'Simulation scenarios are reviewed for cultural assumptions, gender bias, and demographic stereotyping before deployment. This review is part of our standard customization process, not an optional add-on.',
  },
  {
    heading: 'Response auditing',
    description:
      'AI-generated feedback is regularly audited for consistency across demographic groups. We monitor for patterns that might indicate bias in how feedback is delivered to different learners.',
  },
  {
    heading: 'Equitable feedback standards',
    description:
      'Feedback rubrics are designed to evaluate communication effectiveness against consistent criteria. Performance assessment does not vary based on accent, dialect, or communication style where those differences do not affect the training objective.',
  },
  {
    heading: 'Client feedback integration',
    description:
      'Organizations and individual learners can flag feedback they believe is unfair or inaccurate. These reports are reviewed, investigated, and used to improve the system.',
  },
]

export default function AIEthicsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'AI Trust & Safety', href: '/trust/security-certifications' },
          { name: 'AI & Ethics', href: '/trust/ai-ethics' },
        ]}
      />

      <PageHero
        eyebrow="Responsible AI"
        heading={
          <>
            Responsible AI, by <em className="text-accent">design</em>.
          </>
        }
        subtitle="Building AI for workplace training carries specific responsibilities. These are our principles, how we implement them, and how we hold ourselves accountable."
        compact
      />

      {/* -- Principles -- */}
      <Section>
        <Reveal>
          <div className="mb-12">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              Our Principles
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[640px]">
              Five commitments that guide every product decision.
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-8 md:gap-10">
          {principles.map((principle, index) => (
            <Reveal key={principle.heading}>
              <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start border-t border-border pt-8">
                <span className="font-heading text-label text-copy-faint tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-heading text-label text-dark mb-3">
                    {principle.heading}
                  </h3>
                  <p className="text-body-sm text-copy-mid leading-relaxed max-w-[640px]">
                    {principle.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* -- Bias & Fairness -- */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container bg-surface-alt">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="mb-12">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                Bias & Fairness
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[640px]">
                Active measures, not passive intentions.
              </h2>
              <p className="text-body text-copy-mid leading-[1.75] max-w-[580px] mt-4">
                AI systems can perpetuate bias if left unchecked. We implement specific, measurable practices to identify and mitigate bias across the simulation lifecycle.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-16">
            {biasItems.map((item) => (
              <Reveal key={item.heading}>
                <div className="py-6 border-t border-border">
                  <h3 className="font-heading text-label text-dark mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-body-sm text-copy-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- EU AI Act -- */}
      <Section>
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                Regulatory Alignment
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
                EU AI Act alignment
              </h2>
              <div className="text-body text-copy-mid leading-[1.75] space-y-4">
                <p>
                  The EU AI Act establishes a risk-based framework for AI systems. As a workplace training platform, Ambr AI operates within the limited-risk category. We have proactively aligned our practices with the Act&apos;s requirements, including transparency obligations and human oversight mechanisms.
                </p>
                <p>
                  Our classification, documentation, and compliance measures are reviewed quarterly as the regulatory landscape evolves. We engage with legal counsel specializing in AI regulation to ensure our interpretation remains current.
                </p>
              </div>
            </div>
            <div className="border border-border rounded-brand-md p-8 md:p-10 bg-surface-alt">
              <h3 className="font-heading text-label text-dark mb-6">
                Compliance measures
              </h3>
              <ul className="space-y-4">
                {[
                  'Risk classification documented and reviewed quarterly',
                  'Transparency disclosures for all AI-generated interactions',
                  'Human oversight mechanisms in simulation design and feedback',
                  'Technical documentation maintained per Act requirements',
                  'Regular review with specialized AI regulation counsel',
                  'Monitoring of regulatory developments across jurisdictions',
                ].map((item) => (
                  <li
                    key={item}
                    className="text-body-sm text-copy-mid leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* -- Governance -- */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container border-t border-border">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="max-w-[680px]">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                Governance
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
                Embedded in how we build. Not bolted on after.
              </h2>
              <div className="text-body text-copy-mid leading-[1.75] space-y-4">
                <p>
                  Responsible AI practices are integrated into our product development process, not managed by a separate compliance function reviewing work after the fact. Every feature that involves AI behavior, data processing, or learner feedback includes ethical review as part of the development lifecycle.
                </p>
                <p>
                  This includes human review of AI conversation behavior, structured testing across demographic scenarios, and regular calibration of feedback quality. When clients customize simulations, our team reviews scenario design for potential bias or fairness issues as part of the standard build process.
                </p>
                <p>
                  Client feedback is the most valuable governance mechanism we have. Organizations observe how the platform works in their context and report issues we cannot anticipate from the inside. We treat every client concern as a system improvement opportunity, not a support ticket.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -- Trust Bar -- */}
      <TrustBadges
        badges={[
          { label: 'ISO 27001', description: 'Certified' },
          { label: 'GDPR', description: 'Compliant' },
          { label: 'EU AI Act', description: 'Aligned' },
        ]}
      />

      {/* -- Cross-links -- */}
      <Section>
        <Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/trust/data-management"
              className="group border border-border rounded-brand-md p-8 transition-all duration-normal hover:border-accent-soft hover:shadow-card"
            >
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-3">
                Also in this section
              </p>
              <h3 className="font-heading text-label text-dark mb-2 group-hover:text-accent transition-colors duration-normal">
                How We Manage Data
              </h3>
              <p className="text-body-sm text-copy-light leading-relaxed">
                A complete overview of what we collect, how we use it, and our contractual data commitments.
              </p>
            </Link>
            <Link
              href="/trust/security-certifications"
              className="group border border-border rounded-brand-md p-8 transition-all duration-normal hover:border-accent-soft hover:shadow-card"
            >
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-3">
                Also in this section
              </p>
              <h3 className="font-heading text-label text-dark mb-2 group-hover:text-accent transition-colors duration-normal">
                Security Certifications
              </h3>
              <p className="text-body-sm text-copy-light leading-relaxed">
                ISO 27001, GDPR, EU AI Act alignment, and continuous security monitoring details.
              </p>
            </Link>
          </div>
        </Reveal>
      </Section>

      <CTA />
    </>
  )
}
