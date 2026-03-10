import { createMetadata } from '@/lib/metadata'
import { OrganizationJsonLd } from '@/components/json-ld'
import { Hero } from '@/components/sections/hero'
import { StatBar } from '@/components/sections/stat-bar'
import {
  SplitContent,
} from '@/components/sections/split-content'
import {
  ProductScreenshot,
  MockAdminBuilder,
  MockCustomizationDelivery,
  MockScenarioCreator,
  MockVoiceConversation,
  MockBodyLanguage,
  MockFeedbackPanel,
} from '@/components/sections/product-screenshot'
import { TestimonialGrid } from '@/components/sections/testimonial-grid'
import { UseCaseCards } from '@/components/sections/use-case-cards'
import { PullQuote } from '@/components/sections/pull-quote'
import { SecurityBadges } from '@/components/sections/security-badges'
import { GrainCta } from '@/components/sections/grain-cta'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Ambr AI',
  description:
    'Bespoke voice-based AI conversation simulations for enterprise workplace training. Custom-built around your organization, your scenarios, and the conversations that matter most.',
  path: '/',
})

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />

      <Hero />

      <StatBar
        heading="Results that speak for themselves"
        items={[
          {
            value: '93%',
            label: 'feel better prepared for real conversations',
          },
          {
            value: '85%',
            label: 'would recommend Ambr AI to peers',
          },
          {
            value: '740ms',
            label: 'ultra-fast response time feels just like speaking to a real human',
          },
        ]}
      />

      {/* ── Customization ── */}
      <Section>
        <Reveal>
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
            Customization
          </p>
          <h2 className="font-heading text-headline leading-[1.1] tracking-heading max-w-[700px] mb-4">
            Training built around your{' '}
            <em className="text-accent">exact</em> needs
          </h2>
          <p className="text-body text-copy-mid leading-[1.75] max-w-[580px]">
            Ambr AI is fully customizable to match your specific training
            goals - and can be done easily, with minimal effort and without
            huge investment. Choose from a library of ready-made scenarios, or
            easily create your own:
          </p>
        </Reveal>
      </Section>

      <SplitContent
        eyebrow="Admin Customization"
        heading={
          <>
            Build scenarios that match your{' '}
            <em className="text-accent">reality</em>
          </>
        }
        body="Easily create custom simulations yourself, directly in the platform. No technical skills required."
        visualContent={
          <ProductScreenshot tint>
            <MockAdminBuilder />
          </ProductScreenshot>
        }
      />

      <SplitContent
        reversed
        eyebrow="In-House Customization Service"
        heading={
          <>
            We build it <em className="text-accent">for</em> you
          </>
        }
        body="Our expert team builds fully tailored simulations for you. Share a few minutes of context and we deliver scenarios that match your need."
        visualContent={
          <ProductScreenshot tint>
            <MockCustomizationDelivery />
          </ProductScreenshot>
        }
      />

      <SplitContent
        eyebrow="Individual User Customization"
        heading={
          <>
            Let your people create their{' '}
            <em className="text-accent">own</em>
          </>
        }
        body="Individual team members create their own private scenarios for specific upcoming conversations."
        visualContent={
          <ProductScreenshot tint>
            <MockScenarioCreator />
          </ProductScreenshot>
        }
      />

      <div className="pb-section-mobile md:pb-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          <Reveal>
            <Link
              href="/customisation"
              className="inline-flex items-center gap-2 text-label font-body-medium text-dark hover:text-accent transition-colors duration-normal"
            >
              See how customization works
              <span className="text-accent">→</span>
            </Link>
          </Reveal>
        </div>
      </div>

      {/* ── Testimonials ── */}
      <TestimonialGrid
        testimonials={[
          {
            quote:
              "Weirdly human. I said a few things to try to catch the AI out and it was able to answer in the right way.",
            role: '',
            company: 'Consulting Firm',
          },
          {
            quote:
              "What truly sets it apart is the quality of its feedback - it's detailed, actionable, and feels like having a personal coach.",
            role: '',
            company: 'Scale-Up',
          },
          {
            quote:
              "We write scripts for managers but it's not sustainable - Ambr AI gives them a self-sustaining skill.",
            role: 'Head of Learning & Development',
            company: 'Logistics Company',
          },
          {
            quote:
              "We love it. It's great that we can customize it for our needs.",
            role: '',
            company: 'Professional Services Firm',
          },
        ]}
      />

      {/* ── Use cases ── */}
      <UseCaseCards
        eyebrow="Use cases"
        heading={
          <>
            One platform for every conversation that{' '}
            <em className="text-accent">matters</em>
          </>
        }
        subtitle="One training solution across every function - with unified reporting and administration."
        image={{
          src: '/images/photography/consulting-client-meeting.png',
          alt: 'Two professionals in a client meeting across a table',
        }}
        items={[
          {
            heading: 'Management & Leadership',
            description:
              'Performance reviews. Team restructures. Sensitive feedback. Give your managers the skills to lead with confidence.',
            href: '/solutions/management-leadership',
            ctaLabel: 'Explore',
          },
          {
            heading: 'Sales & Negotiations',
            description:
              'Discovery calls. Objection handling. Contract negotiations. Onboard and upskill your sales teams faster.',
            href: '/solutions/sales-negotiations',
            ctaLabel: 'Explore',
          },
          {
            heading: 'Customer Service',
            description:
              'Escalations. Retention calls. Complex inquiries. Drive consistency across every customer interaction.',
            href: '/solutions/customer-service',
            ctaLabel: 'Explore',
          },
          {
            heading: 'And more',
            description:
              "Presentations, onboarding, interviewing. If it matters to your business, it's in our product.",
            href: '/solutions/other',
            ctaLabel: 'Explore',
          },
        ]}
      />

      {/* ── Voice AI ── */}
      <Section>
        <Reveal>
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
            Voice AI
          </p>
          <h2 className="font-heading text-headline leading-[1.1] tracking-heading max-w-[700px] mb-4">
            Ultra-realistic AI <em className="text-accent">roleplays</em>
          </h2>
          <p className="text-body text-copy-mid leading-[1.75] max-w-[580px]">
            Ambr AI delivers conversation simulations that feel genuinely
            human - without the real-world consequences. AI characters listen,
            adapt to tone and approach, and respond just like a real person
            would.
          </p>
        </Reveal>
      </Section>

      <SplitContent
        eyebrow="Ultra-low latency"
        heading={
          <>
            Responses in{' '}
            <em className="text-accent">milliseconds</em>
          </>
        }
        body="Voice AI responses are near-instant. No awkward pauses. The pacing feels natural, just like a real conversation."
        visualContent={
          <ProductScreenshot tint>
            <MockVoiceConversation />
          </ProductScreenshot>
        }
      />

      <SplitContent
        reversed
        eyebrow="Adaptive AI characters"
        heading={
          <>
            Characters that{' '}
            <em className="text-accent">listen</em>
          </>
        }
        body="AI characters respond to what your team members actually say and how they say it. Push back, change direction, try a different tactic, and the AI follows."
        visualContent={
          <ProductScreenshot tint>
            <MockFeedbackPanel />
          </ProductScreenshot>
        }
      />

      <SplitContent
        eyebrow="Genuine conversational pressure"
        heading={
          <>
            Think on your <em className="text-accent">feet</em>
          </>
        }
        body="Your team has to think on their feet, read the tone, and respond in the moment. That is where real skills are built."
        visualContent={
          <ProductScreenshot tint>
            <MockVoiceConversation />
          </ProductScreenshot>
        }
      />

      <SplitContent
        reversed
        eyebrow="Body language analysis"
        heading={
          <>
            Beyond <em className="text-accent">words</em>
          </>
        }
        body="Ambr AI can read how people come across visually alongside their voice, providing feedback on the non-verbal signals that shape every interaction."
        badge="Optional add-on"
        visualContent={
          <ProductScreenshot tint>
            <MockBodyLanguage />
          </ProductScreenshot>
        }
      />

      <PullQuote
        quote="Incredibly realistic, providing a safe and convenient environment."
        role="Director"
        company="Media Company"
      />

      {/* ── Why Ambr AI ── */}
      <Section>
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1fr] gap-6 md:gap-20 items-end mb-12 md:mb-14">
            <h2 className="font-heading text-section leading-[1.2] tracking-heading text-dark">
              Why teams choose <em className="text-accent">Ambr AI</em>
            </h2>
            <p className="text-body text-copy-mid leading-[1.75]">
              One platform. Every conversation that matters.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 border-t border-border pt-10">
          {[
            {
              heading: 'Customization',
              description:
                'Simulations built around your specific scenarios, language, and training goals. Start with our pre-built library or create something entirely new. Customize easily and instantly.',
            },
            {
              heading: 'One platform, every use case',
              description:
                'Management, sales, customer service and more. One admin experience, one set of reporting, one platform. No need to manage multiple solutions.',
            },
            {
              heading: 'Actionable feedback',
              description:
                'Every simulation ends with structured, personalized insights on tone, pacing, word choice, structure, and approach. Feed insights back into your training strategy.',
            },
            {
              heading: 'Admin dashboard & reporting',
              description:
                'Track usage, monitor engagement, view aggregated learning insights, and identify capability gaps across your organization.',
            },
            {
              heading: 'Global training',
              description:
                '30+ languages. Deploy consistent, structured conversation training across every region your teams operate in, all from a single platform.',
            },
          ].map((feature, i) => (
            <Reveal key={feature.heading} delay={i * 60}>
              <div>
                <h3 className="font-heading text-label tracking-heading text-dark mb-3">
                  {feature.heading}
                </h3>
                <p className="text-body-sm text-copy-mid leading-[1.75]">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12">
            <Link
              href="/product/languages"
              className="inline-flex items-center gap-2 text-label font-body-medium text-dark hover:text-accent transition-colors duration-normal"
            >
              See all supported languages
              <span className="text-accent">→</span>
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ── Security ── */}
      <SecurityBadges
        variant="dark"
        heading="Enterprise-grade security."
        description="Data is isolated, never shared, and never used to train external models."
        href="/security/compliance"
        badges={[
          {
            icon: '/icons/badge-iso.svg',
            label: 'ISO 27001',
            href: '/security/compliance',
          },
          {
            icon: '/icons/badge-gdpr.svg',
            label: 'GDPR',
            href: '/security/compliance',
          },
          {
            icon: '/icons/badge-eu-ai-act.png',
            label: 'EU AI Act',
            href: '/security/compliance',
            wide: true,
          },
        ]}
      />

      {/* ── Closing CTA ── */}
      <GrainCta
        variant="dark"
        heading={
          <>
            Enabling human <em className="text-accent">connection</em>, not replacing it.
          </>
        }
        subtitle="Ambr AI makes structured, realistic conversation training available to every employee, across every team, in over 30 languages - so when the real conversation happens, they are ready."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
