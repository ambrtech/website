import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { PullQuote } from '@/components/sections/pull-quote'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { GrainCta } from '@/components/sections/grain-cta'
import {
  ProductScreenshot,
  MockScenarioCreator,
  MockVoiceConversation,
  MockFeedbackPanel,
  MockDashboard,
} from '@/components/sections/product-screenshot'

export const metadata = createMetadata({
  title: 'How It Works',
  description:
    'Realistic voice simulations. Structured feedback. Measurable improvement. See how Ambr AI helps your team practice the conversations that matter most.',
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
            Practice the conversation before it{' '}
            <em className="text-accent">counts</em>.
          </>
        }
        subtitle="Realistic voice simulations. Structured feedback. Measurable improvement."
      />

      {/* ── Step 1: Set up training (buyer-focused) ── */}
      <SplitContent
        eyebrow="Step 1"
        heading={
          <>
            Design the <em className="text-accent">training</em>
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockScenarioCreator />
          </ProductScreenshot>
        }
      >
        <p>
          Select from a library of ready-made scenarios, build your own in
          minutes, or brief our team to create them for you. Each simulation
          defines the situation, the AI character&apos;s personality and
          objectives, and the feedback criteria that matter to your organization.
        </p>
        <p>
          Assign simulations to specific teams, departments, or individuals.
          Structure them into guided learning paths with built-in progression.
        </p>
      </SplitContent>

      {/* ── Step 2: Have the conversation (user-focused) ── */}
      <SplitContent
        className="bg-surface-white"
        reversed
        eyebrow="Step 2"
        heading={
          <>
            Employees have the <em className="text-accent">conversation</em>
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockVoiceConversation />
          </ProductScreenshot>
        }
      >
        <p>
          Employees speak naturally with an AI character that responds in real
          time — with a distinct voice, accent, and realistic reactions.
          There&apos;s no script. The conversation unfolds based on what they
          actually say. If they push back, change direction, or try a different
          approach, the AI follows.
        </p>
        <p>
          Sessions typically last five to fifteen minutes. Long enough to feel
          real. Short enough to fit into a working day.
        </p>
      </SplitContent>

      {/* ── Step 3: Get structured feedback ── */}
      <SplitContent
        eyebrow="Step 3"
        heading={
          <>
            Structured <em className="text-accent">feedback</em>, instantly
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockFeedbackPanel />
          </ProductScreenshot>
        }
      >
        <p>
          Every session produces a detailed, personalized analysis: how well
          objectives were met, communication strengths, areas for growth, and
          specific suggestions for next time.
        </p>
      </SplitContent>

      {/* ── Testimonial ── */}
      <PullQuote
        quote="The feedback and coaching is really well structured — not overloaded with text like other tools where you don't know where to start."
        role="L&D Manager"
        company="Logistics Company"
      />

      {/* ── Why Voice ── */}
      <Section className="bg-surface-white">
        <Reveal>
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
            Why voice
          </p>
          <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[700px] mb-6">
            The skill gap lives in how people{' '}
            <em className="text-accent">sound</em>
          </h2>
          <div className="text-body text-copy-mid leading-[1.75] max-w-[580px] space-y-4">
            <p>
              Tone, pacing, hesitation, confidence: these shape how a
              conversation actually lands. None of them exist in a text-based
              simulation. Ambr AI is built around spoken conversation because
              that&apos;s where the real skill gap lives.
            </p>
            <p>
              Your team practices in the language they actually work in, across
              30+ languages, with simulations adjusted to cultural context — not
              just translated.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ── Beyond the Conversation ── */}
      <FeatureGrid
        eyebrow="Beyond the conversation"
        heading={
          <>
            More than a <em className="text-accent">simulation</em>
          </>
        }
        items={[
          {
            heading: 'Body language analysis',
            description:
              'Optional webcam-based feedback on how your team comes across visually, alongside the conversation itself. All processing happens on the user\u2019s device. No video is transmitted or stored.',
          },
          {
            heading: 'Screensharing',
            description:
              'Your team can share their screen during a simulation. The AI responds to what they\u2019re presenting, not just what they\u2019re saying. Ideal for product demos, pitches, or any conversation that involves talking through material.',
          },
          {
            heading: 'Presentations',
            description:
              'A dedicated module for practicing presentations. Your team records their delivery and receives AI-generated feedback, with an optional live Q&A session to prepare for audience questions.',
          },
          {
            heading: 'Coaching',
            description:
              'A persistent coaching experience that builds on previous sessions over time. Each conversation picks up where the last one left off.',
          },
        ]}
      />

      {/* ── Built for the People Who Run Training ── */}
      <Section className="bg-surface-white border-y border-border">
        <div className="grid gap-12 md:gap-20 items-start md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                For admins
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
                Built for the people who run{' '}
                <em className="text-accent">training</em>
              </h2>
              <div className="text-body text-copy-mid leading-[1.75] space-y-4">
                <p>
                  Ambr AI provides full visibility and control.
                </p>
              </div>

              <div className="mt-10 space-y-6 border-t border-border pt-8">
                {[
                  {
                    title: 'Dashboard and reporting',
                    description:
                      'Track usage, monitor engagement, and view learning insights across teams and individuals.',
                  },
                  {
                    title: 'Customization tools',
                    description:
                      'Build and edit scenarios directly in the platform. No technical expertise required.',
                  },
                  {
                    title: 'Integrations',
                    description:
                      'Connect with your LMS and existing training infrastructure.',
                  },
                ].map((feature) => (
                  <div key={feature.title}>
                    <h3 className="font-heading text-label tracking-heading text-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-body-sm text-copy-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
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

      {/* ── Closing CTA ── */}
      <Section>
        <Reveal>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <p className="font-heading text-title leading-[1.2] tracking-heading text-dark mb-4">
              93%
            </p>
            <p className="text-body text-copy-mid leading-[1.75] max-w-[480px]">
              of users report feeling better prepared for real conversations
              after using Ambr AI.
            </p>
          </div>
        </Reveal>
      </Section>

      <GrainCta
        variant="dark"
        heading={
          <>
            Ready to see it in <em className="text-accent">action</em>?
          </>
        }
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
