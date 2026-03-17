import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { SplitContent } from '@/components/sections/split-content'
import { PullQuote } from '@/components/sections/pull-quote'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { GrainCta } from '@/components/sections/grain-cta'
import { StatBar } from '@/components/sections/stat-bar'
import { EyebrowLine } from '@/components/animations/eyebrow-line'
import {
  ProductScreenshot,
  MockScenarioCreator,
  MockVoiceConversation,
  MockFeedbackPanel,
  MockDashboard,
  MockBodyLanguage,
  MockScreensharing,
  MockPresentationTraining,
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
      <section className="pt-section-mobile md:pt-[120px] pb-section-mobile md:pb-section px-container-mobile md:px-container bg-surface-white">
        <div className="mx-auto max-w-site">
          <div className="grid gap-12 lg:gap-20 items-center lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <div>
                <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                  How It Works
                </p>
                <h1 className="font-heading text-headline leading-[1.1] tracking-heading mb-6">
                  Practice the conversation before it{' '}
                  <em className="text-accent">counts</em>.
                </h1>
                <p className="text-body text-copy-mid leading-[1.75] max-w-[520px]">
                  Realistic voice simulations. Structured feedback. Measurable
                  improvement.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <ProductScreenshot tint>
                <MockVoiceConversation />
              </ProductScreenshot>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Step 1: Set up training (buyer-focused) ── */}
      <Section>
        <Reveal>
          <div className="grid gap-12 md:gap-16 items-start md:grid-cols-[1fr_1.6fr]">
            <div>
              <EyebrowLine />
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                Step 1
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
                Design the <em className="text-accent">training</em>
              </h2>
              <div className="text-body text-copy-mid leading-[1.75] space-y-4">
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
              </div>
            </div>
            <div>
              <ProductScreenshot tint>
                <MockScenarioCreator />
              </ProductScreenshot>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Step 2: Have the conversation (user-focused) ── */}
      <Section className="bg-surface-white">
        <Reveal>
          <div className="grid gap-12 md:gap-16 items-start md:grid-cols-[1.6fr_1fr]">
            <div>
              <ProductScreenshot tint>
                <MockVoiceConversation />
              </ProductScreenshot>
            </div>
            <div>
              <EyebrowLine />
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                Step 2
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
                Employees have the{' '}
                <em className="text-accent">conversation</em>
              </h2>
              <div className="text-body text-copy-mid leading-[1.75] space-y-4">
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
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Step 3: Get structured feedback ── */}
      <Section>
        <Reveal>
          <div className="grid gap-12 md:gap-16 items-start md:grid-cols-[1fr_1.6fr]">
            <div>
              <EyebrowLine />
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                Step 3
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
                Structured <em className="text-accent">feedback</em>, instantly
              </h2>
              <div className="text-body text-copy-mid leading-[1.75] space-y-4">
                <p>
                  Every session produces a detailed, personalized analysis: how well
                  objectives were met, communication strengths, areas for growth, and
                  specific suggestions for next time.
                </p>
              </div>
            </div>
            <div>
              <ProductScreenshot tint>
                <MockFeedbackPanel />
              </ProductScreenshot>
            </div>
          </div>
        </Reveal>
      </Section>

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
      <Section>
        <Reveal>
          <div className="mb-12">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
              Beyond the conversation
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[600px]">
              More than a <em className="text-accent">simulation</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <Reveal>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-label text-dark mb-2">
                  Coaching
                </h3>
                <p className="text-body-sm text-copy-light leading-relaxed">
                  A persistent coaching experience that builds on previous
                  sessions over time. Each conversation picks up where the last
                  one left off.
                </p>
              </div>
              <ProductScreenshot>
                <MockFeedbackPanel />
              </ProductScreenshot>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-label text-dark mb-2">
                  Screensharing
                </h3>
                <p className="text-body-sm text-copy-light leading-relaxed">
                  Your team can share their screen during a simulation. The AI
                  responds to what they&apos;re presenting, not just what
                  they&apos;re saying. Ideal for product demos, pitches, or any
                  conversation that involves talking through material.
                </p>
              </div>
              <ProductScreenshot>
                <MockScreensharing />
              </ProductScreenshot>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-label text-dark mb-2">
                  Body language analysis
                </h3>
                <p className="text-body-sm text-copy-light leading-relaxed">
                  Optional webcam-based feedback on how your team comes across
                  visually, alongside the conversation itself. All processing
                  happens on the user&apos;s device. No video is transmitted or
                  stored.
                </p>
              </div>
              <ProductScreenshot>
                <MockBodyLanguage />
              </ProductScreenshot>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-label text-dark mb-2">
                  Presentations
                </h3>
                <p className="text-body-sm text-copy-light leading-relaxed">
                  A dedicated module for practicing presentations. Your team
                  records their delivery and receives AI-generated feedback, with
                  an optional live Q&A session to prepare for audience questions.
                </p>
              </div>
              <ProductScreenshot>
                <MockPresentationTraining />
              </ProductScreenshot>
            </div>
          </Reveal>
        </div>
      </Section>

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

      {/* ── Stats crescendo ── */}
      <StatBar
        heading="Results that speak for themselves"
        items={[
          {
            value: '93%',
            label: 'feel better prepared for real conversations',
            source: 'Post-session survey',
          },
          {
            value: '85%',
            label: 'would recommend Ambr AI to their peers',
            source: 'User feedback',
          },
          {
            value: '89%',
            label: 'completion rate across deployed programs',
            source: 'Platform data',
          },
        ]}
      />

      {/* ── Closing CTA ── */}
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
