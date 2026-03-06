import { createMetadata } from '@/lib/metadata'
import { OrganizationJsonLd } from '@/components/json-ld'
import { Hero } from '@/components/sections/hero'
import { LogoBar } from '@/components/sections/logo-bar'
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
import { ShowcaseSplit } from '@/components/sections/showcase-split'
import { MockDashboard } from '@/components/sections/product-screenshot'
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

      <LogoBar />

      <StatBar
        items={[
          {
            value: '93%',
            label: 'feel better prepared for real conversations',
          },
          {
            value: '92%',
            label: 'engagement rate',
            source: 'Skyscanner pilot',
          },
          {
            value: '340ms',
            label: 'average AI response time',
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
            goals. Choose from a library of ready-made scenarios, or easily
            create your own:
          </p>
        </Reveal>
      </Section>

      <SplitContent
        eyebrow="Admin customization"
        heading={
          <>
            Build scenarios that match your{' '}
            <em className="text-accent">reality</em>
          </>
        }
        body="Define the conversation context, AI character behavior, and feedback criteria. Deploy to your teams with full control over the training experience."
        visualContent={
          <ProductScreenshot tint>
            <MockAdminBuilder />
          </ProductScreenshot>
        }
      />

      <SplitContent
        reversed
        eyebrow="In-house customization service"
        heading={
          <>
            We build it <em className="text-accent">for</em> you
          </>
        }
        body="Share your brief with our team. We create bespoke scenarios tailored to your organization's language, culture, and training goals, delivered within 48 hours."
        visualContent={
          <ProductScreenshot tint>
            <MockCustomizationDelivery />
          </ProductScreenshot>
        }
      />

      <SplitContent
        eyebrow="Personal scenario creator"
        heading={
          <>
            Let your people create their{' '}
            <em className="text-accent">own</em>
          </>
        }
        body="Team members can create personal practice scenarios for conversations they have coming up. Private, immediate, and specific to their situation."
        visualContent={
          <ProductScreenshot tint>
            <MockScenarioCreator />
          </ProductScreenshot>
        }
      />

      <Section>
        <Reveal>
          <Link
            href="/customisation"
            className="inline-flex items-center gap-2 text-label font-body-medium text-dark hover:text-accent transition-colors duration-normal"
          >
            See how customization works
            <span className="text-accent">→</span>
          </Link>
        </Reveal>
      </Section>

      {/* ── Testimonials ── */}
      <TestimonialGrid
        heading="What people say"
        testimonials={[
          {
            quote:
              "It's every HR Leader's dream to have a tool that lets people practice difficult conversations before they have them for real.",
            role: 'Head of People',
            company: 'Design Agency',
          },
          {
            quote:
              'We love it. The team has completely embraced it and the feedback quality is remarkable.',
            role: 'L&D Manager',
            company: 'Professional Services Firm',
          },
          {
            quote:
              'The team is incredibly responsive. They feel like an extension of our own L&D function.',
            role: 'Enterprise client',
            company: '',
          },
          {
            quote:
              "We've looked at alternatives but they were just 'meh'... this is a really good product.",
            role: 'Training Manager',
            company: 'Recruitment Company',
          },
        ]}
      />

      {/* ── Use cases ── */}
      <UseCaseCards
        eyebrow="Use cases"
        heading="One platform for every conversation that matters"
        items={[
          {
            heading: 'Management & Leadership',
            description:
              'Performance reviews, sensitive feedback, team conflict, and restructures.',
            href: '/solutions/management-leadership',
            ctaLabel: 'Explore',
          },
          {
            heading: 'Sales & Negotiations',
            description:
              'Discovery calls, objection handling, negotiation, and closing.',
            href: '/solutions/sales-negotiations',
            ctaLabel: 'Explore',
          },
          {
            heading: 'Customer Service',
            description:
              'Complaint resolution, de-escalation, and retention conversations.',
            href: '/solutions/customer-service',
            ctaLabel: 'Explore',
          },
          {
            heading: 'And more',
            description:
              'HR, onboarding, presentations, and any conversation where the words matter.',
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
            Ultra-realistic <em className="text-accent">voice</em> AI
          </h2>
          <p className="text-body text-copy-mid leading-[1.75] max-w-[580px]">
            Ambr AI delivers conversation simulations that feel genuinely
            human. AI characters listen, adapt to tone and approach, and
            respond just like a real person would.
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
        body="No awkward pauses. No lag. The AI responds with human-like timing, keeping the conversational flow natural and realistic."
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
        body="AI characters adapt their tone, pushback, and emotional state based on how you approach the conversation. No two sessions are the same."
        visualContent={
          <ProductScreenshot tint>
            <MockFeedbackPanel />
          </ProductScreenshot>
        }
      />

      <SplitContent
        eyebrow="Body language analysis"
        heading={
          <>
            Beyond <em className="text-accent">words</em>
          </>
        }
        body="Ambr AI analyzes eye contact, posture, gestures, and facial expression to give feedback on how you show up, not just what you say."
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
      <ShowcaseSplit
        heading={
          <>
            Why teams choose <em className="text-accent">Ambr AI</em>
          </>
        }
        subtitle="One platform. Every conversation that matters."
        visualContent={<MockDashboard />}
        filter="duotone-cream"
        cropFocus="top-left"
        features={[
          {
            heading: 'Customization',
            description:
              'Simulations built around your specific scenarios, language, and training goals.',
          },
          {
            heading: 'One platform, every use case',
            description:
              'Management, sales, customer service and more. One admin experience, one vendor.',
          },
          {
            heading: 'Actionable feedback',
            description:
              'Structured insights on tone, pacing, word choice, and approach after every session.',
          },
          {
            heading: 'Global training',
            description:
              '30+ languages. Consistent training across every region your teams operate in.',
          },
          {
            heading: 'Admin dashboard & reporting',
            description:
              'Track usage, monitor engagement, and identify capability gaps across your organization.',
          },
        ]}
      />

      <Section>
        <Reveal>
          <Link
            href="/product/languages"
            className="inline-flex items-center gap-2 text-label font-body-medium text-dark hover:text-accent transition-colors duration-normal"
          >
            See supported languages
            <span className="text-accent">→</span>
          </Link>
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
            Not replacing humans.{' '}
            <em className="text-accent">Enabling</em> human connection.
          </>
        }
        subtitle="The best training has always been conversational. Ambr AI makes structured, realistic conversation training available to every employee, across every team, in over 30 languages — so when the real conversation happens, they are ready."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
      />
    </>
  )
}
