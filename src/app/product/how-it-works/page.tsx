import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { NumberedSteps } from '@/components/sections/numbered-steps'
import { SplitContent } from '@/components/sections/split-content'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { StatBar } from '@/components/sections/stat-bar'
import { PullQuote } from '@/components/sections/pull-quote'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { CTA } from '@/components/sections/cta'
import {
  ProductScreenshot,
  MockFeedbackPanel,
  MockScenarioCard,
  MockDashboard,
} from '@/components/sections/product-screenshot'

export const metadata = createMetadata({
  title: 'How It Works',
  description:
    'From scenario selection to structured feedback and team-wide reporting. See how Ambr AI delivers measurable conversation training at scale.',
  path: '/product/how-it-works',
})

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Product', href: '/product/ai-roleplay' },
          { name: 'How It Works', href: '/product/how-it-works' },
        ]}
      />

      {/* ── Hero ── */}
      <PageHero
        compact
        eyebrow="How It Works"
        heading={
          <>
            Choose a scenario. Have the conversation.
            {' '}See the <em className="text-accent">results</em>.
          </>
        }
        subtitle="Realistic voice-based conversation practice, structured around your scenarios and designed to produce measurable improvement across your team."
      />

      {/* ── Stats ── */}
      <StatBar
        items={[
          {
            value: '30+',
            label: 'Languages supported natively',
          },
          {
            value: '<500ms',
            label: 'Average voice response latency',
          },
          {
            value: '100%',
            label: 'Bespoke to your organization',
          },
        ]}
      />

      {/* ── Three Steps ── */}
      <NumberedSteps
        eyebrow="The learner experience"
        heading="Three steps. No scheduling. No awkward pairs."
        items={[
          {
            title: 'Choose a scenario',
            description:
              'Learners browse a library of simulations tailored to your organization, or admins assign specific scenarios directly. Each one defines the AI character, their personality, objectives, and the context your people actually face at work.',
          },
          {
            title: 'Have a real conversation',
            description:
              'No scripts. No predetermined paths. The AI adapts in real time via natural voice interaction, responding to what your learner actually says. It feels like talking to a real person — because that is the whole point.',
          },
          {
            title: 'Receive structured feedback',
            description:
              'Immediately after the conversation, learners receive detailed, personalized insights: conversation structure, word choice, tone, pace, strengths, and specific areas to improve. On-demand coaching, available every single time.',
          },
        ]}
      />

      {/* ── Scenario Selection (Split) ── */}
      <SplitContent
        eyebrow="Step 1"
        heading={
          <>
            Scenarios built from <em className="text-accent">your</em> reality
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockScenarioCard />
          </ProductScreenshot>
        }
      >
        <p>
          Every simulation is grounded in the situations your people actually
          encounter. Difficult client conversations. High-stakes negotiations.
          Performance reviews. Onboarding calls. Whatever the scenario, the AI
          character has a defined role, personality, and objectives that mirror
          the real thing.
        </p>
        <p>
          Admins can deploy from a shared library or commission fully custom
          simulations — built around your terminology, your processes, and the
          nuances that make your organization different.
        </p>
      </SplitContent>

      {/* ── Conversation (Split, reversed) ── */}
      <SplitContent
        reversed
        eyebrow="Step 2"
        heading="Voice-first. No scripts. No guardrails."
        visualContent={
          <div className="w-full aspect-[4/3] rounded-brand bg-accent-whisper border border-border relative overflow-hidden flex items-center justify-center">
            <div className="text-center px-8">
              <div className="flex items-center justify-center gap-1.5 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-1 rounded-full bg-accent-soft"
                    style={{ height: `${[16, 28, 40, 24, 12][i - 1]}px` }}
                  />
                ))}
              </div>
              <p className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent mb-2">
                Live Conversation
              </p>
              <p className="text-caption text-copy-light">
                Ultra-low latency voice interaction
              </p>
            </div>
          </div>
        }
      >
        <p>
          The conversation unfolds naturally through voice. Your learner speaks,
          the AI listens and responds in real time — with ultra-low latency that
          keeps the exchange feeling human. No clicking through options. No
          reading from a screen.
        </p>
        <p>
          The AI adapts to what is actually said: it pushes back, changes tack,
          gets emotional, or concedes — just like a real counterpart would. Over
          thirty languages are supported natively, with optional screensharing
          and body language analysis for an even richer experience.
        </p>
      </SplitContent>

      {/* ── Feedback (Split) ── */}
      <SplitContent
        eyebrow="Step 3"
        heading={
          <>
            Feedback that actually <em className="text-accent">develops</em> people
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockFeedbackPanel />
          </ProductScreenshot>
        }
      >
        <p>
          Immediately after the conversation ends, learners receive a detailed
          breakdown: how they structured the discussion, the words they chose,
          their tone and pace, where they excelled, and specific guidance on what
          to try differently next time.
        </p>
        <p>
          This is not a generic scorecard. The feedback is personalized to the
          conversation that just happened, grounded in the scenario objectives,
          and designed to build genuine skill — not just awareness.
        </p>
      </SplitContent>

      {/* ── Testimonial ── */}
      <PullQuote
        quote="The feedback our people get after each session is more detailed than what most managers give in a quarterly review. And they can access it whenever they want."
        name="Head of Learning"
        company="Global Professional Services Firm"
      />

      {/* ── Key Capabilities Grid ── */}
      <FeatureGrid
        eyebrow="Capabilities"
        heading={
          <>
            Everything your team needs to practice{' '}
            <em className="text-accent">well</em>
          </>
        }
        items={[
          {
            heading: 'Presentation training',
            description:
              'Practice delivering presentations with real-time feedback on clarity, pacing, and audience engagement. Ideal for pitch prep, all-hands, and client-facing decks.',
          },
          {
            heading: 'Scenario library',
            description:
              'A growing library of ready-to-deploy simulations across sales, leadership, customer service, and more — all customizable to your context.',
          },
          {
            heading: 'Learning journeys',
            description:
              'Sequence simulations into structured programs with progressive difficulty. Guide learners through a curriculum, not just isolated sessions.',
          },
          {
            heading: 'Certifications',
            description:
              'Set pass/fail benchmarks and issue certifications when learners demonstrate competency. Ideal for onboarding gates and compliance requirements.',
          },
          {
            heading: 'Screensharing',
            description:
              'Learners can share their screen during the simulation — perfect for demo practice, technical walkthroughs, and solution presentations.',
          },
          {
            heading: 'Body language analysis',
            description:
              'Optional video analysis gives learners feedback on eye contact, posture, and non-verbal communication alongside their conversation performance.',
          },
        ]}
      />

      {/* ── For Admins ── */}
      <Section className="bg-surface-alt border-y border-border">
        <div className="grid gap-12 md:gap-20 items-start md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                For admins
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
                Full visibility. Total control.
              </h2>
              <div className="text-body text-copy-mid leading-[1.75] space-y-4">
                <p>
                  While learners practice, you see the bigger picture. Ambr AI
                  gives L&amp;D leaders, sales enablement teams, and HR directors
                  the reporting, customization tools, and integrations to run
                  conversation training as a managed program — not a side project.
                </p>
                <p>
                  Track adoption, identify skill gaps across teams, measure
                  improvement over time, and connect it all to the systems you
                  already use.
                </p>
              </div>
              <Link
                href="/product/admin-experience"
                className="inline-flex items-center gap-2 mt-8 text-label font-body-medium text-dark hover:text-accent transition-colors group"
              >
                <span>Explore the admin experience</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <ProductScreenshot>
              <MockDashboard />
            </ProductScreenshot>
          </Reveal>
        </div>
      </Section>

      {/* ── Admin Capabilities Grid ── */}
      <FeatureGrid
        eyebrow="Admin tools"
        heading="Built for the people who manage learning"
        items={[
          {
            heading: 'Dashboard and reporting',
            description:
              'See who is practicing, how often, and how they are improving. Filter by team, scenario, time period, or individual. Export data for stakeholder reporting.',
          },
          {
            heading: 'Customization tools',
            description:
              'Create, edit, and refine simulations without engineering support. Define characters, objectives, evaluation criteria, and difficulty levels through an intuitive admin interface.',
          },
          {
            heading: 'Certification tracking',
            description:
              'Assign required simulations, set passing thresholds, and track completion across your organization. Ideal for onboarding, compliance, and skills verification.',
          },
          {
            heading: 'Integrations',
            description:
              'Connect Ambr AI to your LMS, HRIS, or SSO provider. SCORM support, API access, and pre-built integrations with the platforms enterprise teams already use.',
          },
        ]}
      />

      {/* ── Closing CTA ── */}
      <CTA />
    </>
  )
}
