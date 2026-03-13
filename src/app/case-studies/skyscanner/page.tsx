import Image from 'next/image'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { Section } from '@/components/sections/section'
import { StatBar } from '@/components/sections/stat-bar'
import { GrainCta } from '@/components/sections/grain-cta'
import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'Skyscanner Case Study — From Pilot to Global Rollout',
  description:
    'How Skyscanner piloted Ambr AI with 50 managers over 12 weeks — achieving 92% engagement, 78% confidence boost, and a full global rollout for management conversation training.',
  path: '/case-studies/skyscanner',
})

export default function SkyscannerCaseStudyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Case Studies', href: '/case-studies' },
          { name: 'Skyscanner', href: '/case-studies/skyscanner' },
        ]}
      />

      {/* ─── Hero ─── */}
      <section className="pt-section-mobile md:pt-[120px] pb-section-mobile md:pb-[100px] px-container-mobile md:px-container bg-surface-white">
        <div className="mx-auto max-w-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <Reveal>
                <div className="mb-8">
                  <Image
                    src="/logos/skyscanner.png"
                    alt="Skyscanner company logo"
                    width={180}
                    height={40}
                    className="h-8 md:h-10 w-auto"
                    priority
                  />
                </div>
              </Reveal>
              <Reveal>
                <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                  Case Study
                </p>
                <h1 className="font-heading text-headline leading-[1.1] tracking-heading max-w-[820px] mb-8">
                  How Skyscanner&apos;s Ambr AI pilot led to global{' '}
                  <em className="text-accent">rollout</em>
                </h1>
                <p className="text-body text-copy-mid leading-[1.75] max-w-[640px]">
                  50 managers. 12 weeks. A platform that proved its value so
                  convincingly, Skyscanner extended it to every manager in the
                  organization.
                </p>
              </Reveal>
            </div>
            <Reveal>
              <div className="relative">
                <Image
                  src="/casestudies/skyscanner-cs.avif"
                  alt="Skyscanner managers collaborating during a training session"
                  width={640}
                  height={480}
                  className="rounded-brand shadow-card w-[80%] ml-auto h-auto"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Key Facts + Challenge ─── */}
      <Section>
        <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-16 items-start">
          <div className="max-w-[620px]">
            <Reveal>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                The Challenge
              </p>
              <p className="font-heading text-quote leading-[1.45] tracking-heading text-dark">
                The decision to pilot Ambr AI was born out of a need to support
                people managers and help them build competence and confidence
                with challenging workplace conversations and feedback.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-body text-copy-mid leading-[1.75] mt-6 max-w-[580px]">
                Skyscanner partnered with Ambr AI to pilot a realistic voice-AI
                simulation platform that allowed their managers to practice
                high-stakes conversations without real-world consequences.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <aside className="border border-border rounded-brand p-6 md:p-8 space-y-4 md:mt-8">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light eyebrow-hairline">
                At a Glance
              </p>
              {[
                { label: 'Company', value: 'Skyscanner' },
                { label: 'Industry', value: 'Travel & Technology' },
                { label: 'Headquarters', value: 'Edinburgh, UK' },
                { label: 'Employees', value: '1,500+' },
                { label: 'Program', value: 'Management Development' },
                { label: 'Pilot Size', value: '50 managers' },
                { label: 'Duration', value: '12 weeks' },
                { label: 'Outcome', value: 'Global rollout' },
              ].map((fact) => (
                <div key={fact.label} className="flex justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
                  <span className="text-caption text-copy-light">{fact.label}</span>
                  <span className="text-caption font-body-medium text-dark text-right">{fact.value}</span>
                </div>
              ))}
            </aside>
          </Reveal>
        </div>
      </Section>

      {/* ─── Why Ambr AI Was Different ─── */}
      <Section className="bg-surface-white">
          <div className="max-w-xl mb-12 md:mb-16">
            <Reveal>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                Why Ambr AI Was Different
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading text-dark">
                A fundamentally different approach to manager development
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                number: '01',
                title: 'Ultra-realistic conversations',
                description:
                  'AI personas that respond naturally to tone, approach, and word choice — creating genuine conversational pressure.',
              },
              {
                number: '02',
                title: 'Immediate, actionable feedback',
                description:
                  'Detailed feedback on speaking pace, conversation structure, and delivery — available the moment a session ends.',
              },
              {
                number: '03',
                title: 'Complete privacy',
                description:
                  'Practice sessions remain confidential to each user. No audience, no judgment — just safe space to build skill.',
              },
              {
                number: '04',
                title: 'Available 24/7',
                description:
                  'No need to coordinate schedules with colleagues for role-play sessions. Practice anytime, on your own terms.',
              },
            ].map((item, i) => (
              <Reveal key={item.number} delay={i * 80}>
                <div className="border border-border rounded-brand p-8 lg:p-10 transition-all duration-normal hover:shadow-card hover:border-accent-soft/50 h-full flex flex-col">
                  <span className="font-heading text-title tracking-heading text-accent-soft leading-none mb-5">
                    {item.number}
                  </span>
                  <h3 className="font-heading text-label tracking-heading text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-copy-mid leading-[1.75]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
      </Section>

      {/* ─── The Pilot: Engagement Stats ─── */}
      <Section className="!pb-4">
          <div className="max-w-xl mb-12 md:mb-16">
            <Reveal>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                The Pilot
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading text-dark">
                12 weeks, 50 managers, real{' '}
                <em className="text-accent">results</em>
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-body text-copy-mid leading-[1.75] mt-5 max-w-[580px]">
                50 Skyscanner managers participated in the Ambr AI pilot,
                focusing primarily on the &lsquo;Difficult Conversations&rsquo;
                module with secondary testing of &lsquo;Presentation
                Practice&rsquo; and &lsquo;Coaching&rsquo; features.
              </p>
            </Reveal>
          </div>
      </Section>

      <StatBar
        heading="Engagement"
        items={[
          { value: '92%', label: 'of users actively used the platform' },
          {
            value: '12',
            label:
              'weeks of consistent usage, with peak activity during performance review season',
          },
        ]}
      />

      {/* ─── Key Results ─── */}
      <Section className="bg-surface-white">
          <div className="max-w-xl mb-12 md:mb-16">
            <Reveal>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                Key Results
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading text-dark">
                The numbers that led to global{' '}
                <em className="text-accent">expansion</em>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {[
              {
                stat: '78%',
                label: 'Confidence Boost',
                description:
                  'of managers feel more comfortable having difficult and high-stakes conversations',
              },
              {
                stat: '~100%',
                label: 'AI Readiness',
                description:
                  'of managers felt comfortable practicing conversations with a voice AI character',
              },
              {
                stat: '85%',
                label: 'Peer Recommendation',
                description:
                  'of participants would recommend Ambr AI to their peers',
              },
            ].map((item, index) => (
              <Reveal key={item.label} delay={index * 100}>
                <div
                  className={`flex flex-col ${
                    index !== 0
                      ? 'md:border-l md:border-border md:pl-8 lg:pl-12'
                      : ''
                  } ${index !== 2 ? 'md:pr-8 lg:pr-12' : ''}`}
                >
                  <span className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] tracking-tight text-accent leading-none">
                    {item.stat}
                  </span>
                  <h3 className="font-heading text-label tracking-heading text-dark mt-4 mb-2">
                    {item.label}
                  </h3>
                  <p className="text-body-sm text-copy-mid leading-[1.75]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
      </Section>

      {/* ─── Manager Testimonials ─── */}
      <Section>
          <div className="max-w-xl mb-12 md:mb-16">
            <Reveal>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                In Their Own Words
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading text-dark">
                The manager verdict
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                theme: 'The Realism Factor',
                quote:
                  "I love it! I think the tool is absolutely fantastic — I was really impressed with the level of back and forth interaction... it feels like I'm having a real conversation.",
              },
              {
                theme: 'Immediate Application',
                quote:
                  'This has definitely helped me with an actual conversation. I slowed down and was able to think about not using filler words and my phrasing and tone.',
              },
              {
                theme: 'Confidence in Action',
                quote:
                  'I had an almost identical scenario in real life to the one I practiced, so I was able to have ongoing conversations and it increased my confidence to know that I was being a thoughtful manager.',
              },
            ].map((item, index) => (
              <Reveal key={item.theme} delay={index * 100}>
                <blockquote className="flex flex-col h-full border-t border-border pt-8">
                  <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-5">
                    {item.theme}
                  </p>
                  <p className="font-heading text-body leading-[1.6] tracking-heading text-dark flex-1">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </blockquote>
              </Reveal>
            ))}
          </div>
      </Section>

      {/* ─── Beyond the Pilot ─── */}
      <Section className="bg-surface-white">
        <div className="max-w-xl mb-12 md:mb-16">
          <Reveal>
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
              What Happened Next
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading text-dark">
              Beyond the pilot: global manager rollout
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-body text-copy-mid leading-[1.75] mt-5 max-w-[580px]">
              The pilot&apos;s success led to a full rollout across all
              Skyscanner managers, with exciting new features tailored to the
              organization.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Enhanced Accessibility',
                description:
                  'Keyboard navigation and screen reader support — ensuring every manager can benefit from the platform.',
              },
              {
                title: 'Coaching Memory',
                description:
                  'The platform remembers past sessions, delivering personalized development that builds on previous practice.',
              },
              {
                title: 'Custom Skyscanner Simulations',
                description:
                  'Highly targeted performance feedback conversations using Skyscanner language, cultural references, and internal context.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="border border-border rounded-brand p-8 transition-all duration-normal hover:shadow-card hover:border-accent-soft/50 h-full">
                  <span className="font-heading text-title tracking-heading text-accent-soft leading-none mb-5 block">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading text-label tracking-heading text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-copy-mid leading-[1.75]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
      </Section>

      {/* ─── Partner Quote ─── */}
      <Section className="md:!py-[120px]">
        <Reveal>
          <div className="max-w-[780px]">
            <blockquote className="border-l-2 border-accent pl-8 md:pl-10">
              <p className="font-heading text-quote leading-[1.5] tracking-heading text-dark mb-6">
                &ldquo;I love that this platform gives people managers a space to
                practise, make mistakes and get immediate actionable feedback to
                help build confidence and grow.&rdquo;
              </p>
              <p className="text-body text-copy-mid leading-[1.75] mb-6">
                &ldquo;We received such great feedback from our pilot group and
                it is great to see the &lsquo;Scenario Creator&rsquo; feature
                now live making it even easier for our managers to be proactive
                and practise real life scenarios in a safe environment.&rdquo;
              </p>
              <p className="text-body text-copy-mid leading-[1.75] mb-8">
                &ldquo;I also personally love the AI coach and presentation
                practice features — a place to go when you&apos;re tight on time
                and don&apos;t have the time to practise with someone else, or
                availability to talk to your manager or mentor.&rdquo;
              </p>
              <footer>
                <p className="font-body-medium text-label text-dark">
                  Tracey Gaughan
                </p>
                <p className="text-body-sm text-copy-light">
                  Learning and Leadership Talent Manager, Skyscanner
                </p>
              </footer>
            </blockquote>
          </div>
        </Reveal>
      </Section>

      {/* ─── Closing CTA ─── */}
      <GrainCta
        variant="dark"
        heading={
          <>
            See what Ambr AI could do for{' '}
            <em className="text-accent">your</em> managers.
          </>
        }
        subtitle="Structured practice for the conversations that shape your culture."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
