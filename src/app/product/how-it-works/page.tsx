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
    'Deploy customized conversation simulations, let your team practice through realistic voice roleplay, and get structured capability data back — for every session, every team, every time.',
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
            Deploy a scenario. Your team practices.
            {' '}You see the <em className="text-accent">results</em>.
          </>
        }
        subtitle="Configure realistic conversation training around your scenarios, deploy it in minutes, and get structured capability data back — for every session, every team member, every time."
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
        eyebrow="Your deployment workflow"
        heading="Three steps to measurable improvement"
        items={[
          {
            title: 'Deploy a scenario',
            description:
              'Choose from a library of ready-made simulations or commission scenarios built around your specific conversations, culture, and success criteria. Define the AI character, set the difficulty, and assign it to your team — all from a single dashboard.',
          },
          {
            title: 'Your team practices through voice',
            description:
              'Team members have realistic, unscripted voice conversations with an AI that adapts in real time. No scheduling, no pairing, no facilitator required. They practice whenever they are ready, in any of 30+ languages.',
          },
          {
            title: 'You see structured results',
            description:
              'Every session generates detailed capability data: conversation structure, word choice, tone, pace, and specific areas for improvement. Aggregated trends across your teams show where skills are developing, where gaps persist, and where to invest next.',
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
          Every simulation mirrors the situations your organization actually
          faces. Difficult client conversations. High-stakes negotiations.
          Performance reviews. Onboarding calls. The AI character has a defined
          role, personality, and objectives that reflect the real thing.
        </p>
        <p>
          Deploy from a shared library, build your own in the scenario editor,
          or brief our team and we will create fully custom simulations —
          designed around your terminology, your processes, and the nuances
          that make your organization different.
        </p>
      </SplitContent>

      {/* ── Conversation (Split, reversed) ── */}
      <SplitContent
        reversed
        eyebrow="Step 2"
        heading="Realistic, unscripted, voice-first"
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
          The conversation unfolds naturally through voice. The AI listens and
          responds in real time — with near-instant latency that keeps the
          exchange feeling human. No scripts. No predetermined paths. No
          clicking through options.
        </p>
        <p>
          The AI pushes back, changes tack, gets emotional, or concedes — just
          like a real counterpart would. Over thirty languages are supported
          natively, with optional screensharing for demo practice and body
          language analysis for a complete picture of how people come across.
        </p>
      </SplitContent>

      {/* ── Feedback (Split) ── */}
      <SplitContent
        eyebrow="Step 3"
        heading={
          <>
            Data that actually <em className="text-accent">develops</em> people
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockFeedbackPanel />
          </ProductScreenshot>
        }
      >
        <p>
          Every session produces structured, personalized feedback — not a
          generic scorecard. Learners see exactly how they structured the
          conversation, the words they chose, their tone and pace, where they
          excelled, and specific guidance on what to try differently.
        </p>
        <p>
          For you, the value goes further. Aggregated data across your teams
          reveals patterns in communication strengths and gaps — the
          intelligence you need to design targeted interventions and prove
          that training is actually shifting behavior.
        </p>
      </SplitContent>

      {/* ── Testimonial ── */}
      <PullQuote
        quote="We write scripts for managers but it's not sustainable. Ambr AI gives them a self-sustaining skill."
        role="Head of L&D"
        company="Global Logistics Company"
      />

      {/* ── Key Capabilities Grid ── */}
      <FeatureGrid
        eyebrow="Platform capabilities"
        heading={
          <>
            Everything you need to run{' '}
            <em className="text-accent">structured</em> training programs
          </>
        }
        items={[
          {
            heading: 'Presentation training',
            description:
              'Team members rehearse presentations and pitches with a simulated audience that reacts, asks questions, and challenges delivery. Ideal for pitch prep, all-hands, and client-facing decks.',
          },
          {
            heading: 'Scenario library',
            description:
              'A growing library of ready-to-deploy simulations across management, sales, customer service, and more — all customizable to your context and ready to use immediately.',
          },
          {
            heading: 'Learning journeys',
            description:
              'Structure training into guided paths that build skills progressively. Assign sequences of scenarios so your team develops systematically, not randomly.',
          },
          {
            heading: 'Certifications',
            description:
              'Set competency benchmarks and issue certifications when team members demonstrate capability. Ideal for onboarding gates, compliance requirements, and skills verification.',
          },
          {
            heading: 'Screensharing',
            description:
              'For scenarios involving product walkthroughs, presentations, or demos, team members can share their screen during the simulation — and the AI responds to what it sees.',
          },
          {
            heading: 'Body language analysis',
            description:
              'Optional video analysis provides feedback on eye contact, posture, and non-verbal communication — so your team knows how they come across, not just what they say.',
          },
        ]}
      />

      {/* ── For Admins ── */}
      <Section className="bg-surface-alt border-y border-border">
        <div className="grid gap-12 md:gap-20 items-start md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                Built for you
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
                Full visibility. Total control.
              </h2>
              <div className="text-body text-copy-mid leading-[1.75] space-y-4">
                <p>
                  While your team practices, you see the bigger picture. Track
                  adoption across regions, identify capability gaps before they
                  become performance problems, measure improvement over time,
                  and connect it all to the systems you already use.
                </p>
                <p>
                  Dashboard reporting, customization tools, certification
                  tracking, and integrations with your LMS and HRIS — everything
                  you need to run conversation training as a managed program.
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
        heading="Built for the people who manage training"
        items={[
          {
            heading: 'Dashboard and reporting',
            description:
              'Track usage, monitor engagement, and view aggregated learning insights across teams. Filter by scenario, team, time period, or individual. Export data for stakeholder reporting.',
          },
          {
            heading: 'Customization tools',
            description:
              'Build and edit simulations with no technical expertise. Define characters, objectives, evaluation criteria, and difficulty levels through an intuitive admin interface.',
          },
          {
            heading: 'Certifications and tracking',
            description:
              'Manage completion, follow up with team members, and validate competence at scale. Set passing thresholds and track certification status across your organization.',
          },
          {
            heading: 'Integrations',
            description:
              'Connect Ambr AI with your LMS, HRIS, or SSO provider. SCORM, xAPI, and pre-built integrations with the platforms enterprise teams already use.',
          },
        ]}
      />

      {/* ── Closing CTA ── */}
      <CTA />
    </>
  )
}
