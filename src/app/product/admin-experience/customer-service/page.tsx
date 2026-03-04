import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { StatBar } from '@/components/sections/stat-bar'
import { NumberedSteps } from '@/components/sections/numbered-steps'
import { CTA } from '@/components/sections/cta'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'Customer Service',
  description:
    'Train frontline teams to deliver consistent, brand-aligned service at scale. Complaint handling, upsell, multilingual support, and rapid onboarding — all measurable.',
  path: '/product/admin-experience/customer-service',
})

export default function CustomerServicePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Product', href: '/product/how-it-works' },
          { name: 'Admin Experience', href: '/product/admin-experience' },
          {
            name: 'Customer Service',
            href: '/product/admin-experience/customer-service',
          },
        ]}
      />

      <PageHero
        compact
        eyebrow="For Customer Service"
        heading={
          <>
            Consistent service starts with{' '}
            <em className="text-accent">consistent training</em>
          </>
        }
        subtitle="Every customer interaction reflects your brand. But most customer service training is a one-time onboarding exercise. Ambr AI gives frontline teams structured, repeatable practice on escalations, complaints, and complex inquiries — and gives you visibility into whether the training is landing."
      />

      <StatBar
        items={[
          {
            value: '3x',
            label: 'More practice conversations than classroom training',
          },
          {
            value: '30+',
            label: 'Languages for multilingual support teams',
          },
          {
            value: '100%',
            label: 'Consistency across shifts, locations, and time zones',
          },
        ]}
      />

      <FeatureGrid
        eyebrow="Built for frontline teams"
        heading={
          <>
            Simulations for the conversations your agents handle{' '}
            <em className="text-accent">every day</em>
          </>
        }
        items={[
          {
            heading: 'Complaint handling and de-escalation',
            description:
              'Train your team to stay composed, empathetic, and solution-oriented under pressure. They build confidence before facing a real frustrated customer.',
          },
          {
            heading: 'Upsell and retention conversations',
            description:
              'Build confidence in value-led conversations that feel natural, not scripted. Practice retention conversations where every word matters.',
          },
          {
            heading: 'Multilingual support teams',
            description:
              'Train in 30+ languages with culturally adjusted scenarios, not just translations. Capability data rolls up into a single unified view regardless of language.',
          },
          {
            heading: 'Onboarding at speed',
            description:
              'New agents start training from their first week. Certification workflows set and verify standards across your team, so they reach the floor faster with less risk.',
          },
        ]}
      />

      <SplitContent
        eyebrow="Frontline intelligence"
        heading={
          <>
            Visibility into{' '}
            <em className="text-accent">frontline capability</em>
          </>
        }
      >
        <p>
          Ambr AI gives you aggregated insight into communication patterns
          across your team: where people excel, where consistency breaks down,
          and which conversation types need more attention.
        </p>
        <p>
          Use that data to target development, refine training programs, and
          build evidence for quality assurance reviews. Identify the gap
          between your best-performing agents and the rest, then build
          targeted programs to close it.
        </p>
      </SplitContent>

      <SplitContent
        reversed
        eyebrow="Quality assurance"
        heading={
          <>
            Training evidence that satisfies{' '}
            <em className="text-accent">compliance</em>
          </>
        }
      >
        <p>
          In regulated industries, proving that agents have been trained is not
          optional. Ambr AI generates structured records of every simulation —
          what was practiced, how the agent performed, and whether they met the
          required standard.
        </p>
        <p>
          Export reports for audit reviews. Track certifications across your
          entire team. Demonstrate to regulators and internal stakeholders that
          your frontline training program is rigorous, consistent, and
          documented.
        </p>
      </SplitContent>

      <NumberedSteps
        eyebrow="Scale with confidence"
        heading="Training that scales with your operation"
        items={[
          {
            title: 'Structured Journeys',
            description:
              'Guide team members through progressively complex scenarios, building the skills that turn training into habit. New agents build foundations; experienced agents tackle advanced challenges.',
          },
          {
            title: 'Certifications',
            description:
              'Set and verify standards, so quality is consistent across every shift and every location. When an agent is certified, you know they can handle the conversation — because they already have.',
          },
          {
            title: 'Consistent across every shift',
            description:
              'Whether your team is in Manila, Manchester, or Montreal, everyone trains against the same standard. No variation in quality based on who runs the session.',
          },
        ]}
      />

      {/* Operational impact — custom inline */}
      <Section className="bg-surface-alt border-y border-border">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              Operational impact
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
              The metrics that matter to{' '}
              <em className="text-accent">your</em> operation
            </h2>
            <div className="text-body text-copy-mid leading-[1.75] space-y-4">
              <p>
                Faster time-to-competency for new hires. Fewer escalations
                from frontline agents. Higher first-contact resolution rates.
                These are the outcomes that contact center leaders care about —
                and they are the outcomes Ambr AI is designed to move.
              </p>
              <p>
                Connect simulation data to your operational KPIs. See whether
                agents who practice more perform better on the metrics you
                already track. Build a direct line between training investment
                and service quality.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTA />
    </>
  )
}
