import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { TrialScenario } from '@/components/sections/trial-scenario'
import { TestimonialGrid } from '@/components/sections/testimonial-grid'
import { GrainCta } from '@/components/sections/grain-cta'

export const metadata = createMetadata({
  title: 'Industries',
  description:
    'Ambr AI is built for any organization where communication skills matter. Structured practice for the conversations that shape outcomes, in any industry.',
  path: '/industries/other',
})

const industries = [
  {
    heading: 'Financial Services',
    description:
      'Client advisory. Complaint handling. Wealth management discussions. Regulatory conversations.',
  },
  {
    heading: 'Healthcare',
    description:
      'Patient communication. Multidisciplinary team discussions. Sensitive conversations. Clinical leadership.',
  },
  {
    heading: 'Manufacturing & Logistics',
    description:
      'Safety conversations. Shift handovers. Supplier negotiations. Frontline leadership.',
  },
  {
    heading: 'Government & Public Sector',
    description:
      'Stakeholder engagement. Policy communication. Public-facing conversations.',
  },
  {
    heading: 'Energy & Utilities',
    description:
      'Customer communication. Regulatory discussions. Safety briefings.',
  },
]

const useCases = [
  {
    heading: 'New hire onboarding',
    description:
      'Get new team members up to speed faster \u2014 with structured conversation training that scales with your hiring, without depending on a manager being free to deliver it.',
  },
  {
    heading: 'Sales and business development',
    description:
      'Discovery calls. Pitches. Negotiations. Renewals. Conversations that win and retain business are skills \u2014 and skills can be trained.',
  },
  {
    heading: 'Customer and stakeholder communication',
    description:
      'Client meetings. Presentations. Difficult conversations. Train for them before they count.',
  },
  {
    heading: 'Manager development',
    description:
      'Delivering honest feedback, handling performance issues, developing teams \u2014 the internal conversations that are critical to shaping culture and retention.',
  },
  {
    heading: 'Leadership communication',
    description:
      'Board presentations. Change management. Team motivation. The conversation skills that come with seniority don\u2019t develop automatically \u2014 give your leaders a structured way to perfect them.',
  },
  {
    heading: 'Change management',
    description:
      'Restructures. Org changes. New ways of working. The conversations that land change well (or badly) are among the highest stakes any leader faces.',
  },
]

const whyAmbrItems = [
  {
    heading: 'Built around your organization',
    description:
      'Your scenarios, your language, your culture, your stakeholders. Simulations can be selected from our pre-built library or built from scratch, quickly and without extensive investment.',
  },
  {
    heading: 'Scales consistently across your entire organization',
    description:
      'From a single team to thousands of people across multiple locations, Ambr AI gives everyone access to the same quality of structured training and coaching.',
  },
  {
    heading: 'Confidential by design',
    description:
      'Conversations stay private. Data is never shared across customers or used to train models. ISO certified, GDPR compliant. Built to meet the standards enterprise procurement teams require.',
  },
  {
    heading: 'Feedback that actually coaches',
    description:
      'Detailed, actionable feedback after every simulation \u2014 not just a summary. The kind of structured coaching that shapes how people communicate, not just tells them they could do better.',
  },
  {
    heading: 'Global, and actually global',
    description:
      '30+ languages, adjusted for cultural context \u2014 not just translated. Training that reflects how business is actually done in each market you operate in.',
  },
]

export default function OtherIndustriesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries' },
          { name: 'Other Industries', href: '/industries/other' },
        ]}
      />

      <PageHero
        compact
        eyebrow="Industries"
        heading={
          <>
            Every organization has conversations that shape{' '}
            <em className="text-accent">outcomes</em>. Help your teams prepare
            for every one.
          </>
        }
        subtitle="Performance reviews. Client meetings. Difficult feedback. High-stakes negotiations. Whatever your industry, the conversations that determine whether your people succeed can now be trained for in a structured way. Ambr AI is built for any organization where communication skills matter \u2014 which is every organization. If your people have conversations that count, we can help you build the simulations you need to train them."
      />

      {/* Industries we work with — 3-col grid */}
      <Section>
        <Reveal>
          <div className="mb-12">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
              Industries
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[600px]">
              Industries we work with
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-2">
            {industries.map((item) => (
              <div key={item.heading} className="py-6 border-t border-border">
                <h3 className="font-heading text-label text-dark mb-2">
                  {item.heading}
                </h3>
                <p className="text-body-sm text-copy-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Use cases — 2-col grid via FeatureGrid */}
      <FeatureGrid
        eyebrow="Use cases"
        heading={
          <>
            Where AI roleplay makes the{' '}
            <em className="text-accent">difference</em>
          </>
        }
        items={useCases}
      />

      {/* Why companies choose Ambr AI */}
      <FeatureGrid
        eyebrow="Why companies choose Ambr AI"
        items={whyAmbrItems}
      />

      {/* Try it yourself */}
      <TrialScenario
        eyebrow="Try it yourself"
        characterName="Pat"
        characterRole="HR Director"
        characterInitials="PR"
        title="Navigate a defensive response to performance feedback"
        scenario="You are giving an employee feedback on their recent performance. They become defensive. Navigate the conversation."
        ctaHref="/try-for-free"
      />

      {/* Testimonials */}
      <TestimonialGrid
        testimonials={[
          {
            quote:
              'We love it. It\u2019s great that we can customize it for our needs.',
            role: 'L&D Manager',
            company: 'Professional Services Firm',
          },
          {
            quote:
              'I was blown away with the feedback, it was spectacular.',
            role: 'L&D Manager',
            company: 'Manufacturing Company',
          },
        ]}
      />

      <GrainCta
        variant="dark"
        heading={
          <>
            See what Ambr AI looks like for{' '}
            <em className="text-accent">your</em> team.
          </>
        }
        subtitle="Whatever your industry, practice the conversations that matter most."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
