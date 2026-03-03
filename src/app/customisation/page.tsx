import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { ProductScreenshot, MockCustomizationFlow } from '@/components/sections/product-screenshot'
import { ActionPicker } from '@/components/sections/action-picker'
import { NumberedSteps } from '@/components/sections/numbered-steps'
import { PullQuote } from '@/components/sections/pull-quote'
import { TestimonialGrid } from '@/components/sections/testimonial-grid'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { CTA } from '@/components/sections/cta'
import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'Customization',
  description:
    'Every Ambr AI simulation is bespoke to your organization. Custom scenarios, language, culture, and context — built around your teams, not templates.',
  path: '/customisation',
})

export default function CustomisationPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Customization', href: '/customisation' },
        ]}
      />

      {/* ── 1. Hero — flagship energy, no compact ── */}
      <PageHero
        heading={
          <>
            Customized to your{' '}
            <em className="text-accent">exact</em> training needs
          </>
        }
        subtitle="Every Ambr AI simulation is built around your organization — your scenarios, your language, your culture, your success criteria. Not templates. Not approximations. Yours."
      />

      {/* ── 2. Customization visual — show, don't tell ── */}
      <SplitContent
        eyebrow="Your world, built in"
        heading={
          <>
            We don&apos;t start from a template.
            We start from <em className="text-accent">you</em>.
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockCustomizationFlow />
          </ProductScreenshot>
        }
      >
        <p>
          Share your playbooks, objection guides, product materials, compliance
          requirements, and cultural context. Our team transforms them into
          realistic AI characters that know your business as well as your
          best people do.
        </p>
        <p>
          The result is a simulation your team actually recognizes — the same
          pressure, the same terminology, the same dynamics they face every day.
        </p>
      </SplitContent>

      {/* ── 3. Impact stat — evidence before methods ── */}
      <section className="border-y border-border py-section-mobile md:py-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-3">
                  Proven impact
                </p>
                <p className="text-body text-copy-mid leading-[1.7]">
                  When practice feels real, people take it seriously. Customization
                  isn&apos;t a nice-to-have — it&apos;s the difference between
                  training people tolerate and training they ask for more of.
                </p>
              </div>
              <div className="text-right">
                <p className="font-heading text-stat leading-none tracking-tight">
                  93%
                </p>
                <p className="text-copy-light mt-2 text-stat-label">
                  of learners rate simulations as realistic
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4. Three customization methods — equal weight, no hierarchy ── */}
      <ActionPicker
        heading="Three ways to customize"
        subtitle="Choose the approach that fits your team. All three deliver the same quality of simulation — they differ in who does the building."
        items={[
          {
            heading: 'Admin Customization',
            description:
              'Your L&D team builds and iterates on simulations directly through a guided admin interface. No technical skills required. Ideal for teams that want hands-on control and fast iteration.',
            href: '/product/admin-experience',
            ctaLabel: 'Learn more',
          },
          {
            heading: 'In-House Service',
            description:
              'Our simulation designers work alongside your team to build bespoke scenarios from your materials. White-glove setup, ongoing refinement, and dedicated support.',
            href: '/find-out-more',
            ctaLabel: 'Talk to us',
          },
          {
            heading: 'Personal Scenarios',
            description:
              'Individual team members create their own practice scenarios for conversations they\'re preparing for right now. Private, self-directed, confidential feedback.',
            href: '/product/ai-roleplay',
            ctaLabel: 'See how it works',
          },
        ]}
      />

      {/* ── 5. Speed — defuse timeline anxiety ── */}
      <NumberedSteps
        eyebrow="Speed"
        heading="From brief to live simulation in days"
        items={[
          {
            title: 'Share your context',
            description:
              'Send us your playbooks, scenario briefs, or product materials. We work with whatever you have — polished or rough.',
          },
          {
            title: 'We build your simulation',
            description:
              'Our team designs realistic AI characters, calibrates difficulty, and configures evaluation criteria around your framework.',
          },
          {
            title: 'Your team starts practicing',
            description:
              'Simulations go live across your organization. Iterate based on learner feedback and performance data as your needs evolve.',
          },
        ]}
      />

      {/* ── 6. Pull quote — single dramatic voice ── */}
      <PullQuote
        quote="They built everything around our specific needs — our terminology, our escalation paths, our tone of voice. It felt like our company, not a generic simulation."
        role="Head of Learning & Development"
        company="Enterprise client"
      />

      {/* ── 7. More social proof — breadth of evidence ── */}
      <TestimonialGrid
        eyebrow="From our clients"
        heading="Partner, not platform."
        testimonials={[
          {
            quote:
              'The customization process was remarkably fast. We expected months of back-and-forth — instead, our first scenarios were live within a week.',
            role: 'Sales Enablement Lead',
            company: 'Technology company',
          },
          {
            quote:
              'What surprised us was the depth. They didn\'t just change the names and scenarios — they captured how our customers actually speak, object, and negotiate.',
            role: 'Director of People Development',
            company: 'Financial services',
          },
        ]}
      />

      {/* ── 8. What your organization gets ── */}
      <FeatureGrid
        eyebrow="What your organization gets"
        heading={
          <>
            Built for teams, not{' '}
            <em className="text-accent">individuals</em>
          </>
        }
        items={[
          {
            heading: 'Scalable rollout',
            description:
              'Deploy simulations across departments, regions, and languages from a single dashboard. Scale from a pilot team to the entire organization without rebuilding.',
          },
          {
            heading: 'Aggregated insights',
            description:
              'See capability trends across your workforce — where teams are strong, where gaps exist, and how readiness evolves over time.',
          },
          {
            heading: 'Structured feedback',
            description:
              'Every practice session generates detailed, actionable coaching on tone, structure, word choice, and approach. Not a score — a development plan.',
          },
          {
            heading: 'Consistent quality',
            description:
              'Every learner gets the same caliber of practice partner. No facilitator variability, no scheduling constraints, no quality drop-off at scale.',
          },
        ]}
      />

      {/* ── 9. Buying process ── */}
      <NumberedSteps
        eyebrow="Getting started"
        heading="What happens next"
        items={[
          {
            title: 'Tell us about your team',
            description:
              'A 30-minute conversation about your training goals, scenarios, and success criteria. No preparation needed.',
          },
          {
            title: 'See your simulation',
            description:
              'We build a working prototype using your real context. You evaluate it with your team before committing to anything.',
          },
          {
            title: 'Go live',
            description:
              'Roll out across your organization with dedicated support. Iterate and expand as your needs evolve.',
          },
        ]}
      />

      {/* ── 11. Dual CTA ── */}
      <section className="pb-section-mobile md:pb-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/find-out-more"
                className="inline-block rounded-brand-sm bg-dark text-surface-white px-8 py-3.5 text-sm font-body-medium transition-all hover:bg-accent hover:-translate-y-px hover:shadow-lg"
              >
                Request a Demo
              </Link>
              <Link
                href="/try-for-free"
                className="inline-block rounded-brand-sm border border-border text-dark px-8 py-3.5 text-sm font-body-medium transition-all hover:border-accent-soft hover:text-accent hover:-translate-y-px"
              >
                Try for Free
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 12. Standard CTA close ── */}
      <CTA />
    </>
  )
}
