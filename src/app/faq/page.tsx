import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { FaqSection } from '@/components/sections/faq-section'
import { GrainCta } from '@/components/sections/grain-cta'

export const metadata = createMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Common questions about Ambr AI, including how the platform works, customization, security, pricing, and getting started.',
  path: '/faq',
})

function FaqLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-accent underline underline-offset-2 hover:text-accent/80">
      {children}
    </Link>
  )
}

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'FAQ', href: '/faq' },
        ]}
      />

      <PageHero
        compact
        heading={
          <>
            Frequently asked <em className="text-accent">questions</em>
          </>
        }
        subtitle="Everything you need to know about Ambr AI and realistic AI roleplay training."
      />

      <FaqSection
        categories={[
          {
            title: 'About the Product',
            items: [
              {
                question: 'What is AI roleplay training?',
                answer: (
                  <p>
                    AI roleplay is a training method where employees build conversation skills by
                    speaking with an AI that responds naturally in real time via voice. It creates a
                    safe, private environment to train on high-stakes conversations before they happen
                    for real.{' '}
                    <FaqLink href="/product/ai-roleplay">Learn more about AI roleplay</FaqLink>
                  </p>
                ),
              },
              {
                question: 'How does Ambr AI work?',
                answer: (
                  <p>
                    Choose a scenario from the pre-built library or use one customized for your
                    organization. Have a realistic voice conversation with an AI character. Receive
                    detailed, personalized feedback afterward. The AI adapts to tone, approach, and
                    responses in real time.{' '}
                    <FaqLink href="/product/how-it-works">See how it works</FaqLink>
                  </p>
                ),
              },
              {
                question: 'What makes Ambr AI different from other AI training tools?',
                answer: (
                  <p>
                    Three things. First, deep customization: every simulation can be built around your
                    organization&apos;s specific scenarios, language, and culture. Second,
                    ultra-realistic voice interaction that creates genuine conversational pressure.
                    Third, the service model: clients work with a dedicated team, not a self-serve
                    dashboard.{' '}
                    <FaqLink href="/customization">Explore customization</FaqLink>
                  </p>
                ),
              },
              {
                question: 'What types of conversations can people train on?',
                answer: (
                  <p>
                    Management and leadership conversations, sales calls and negotiations, customer
                    service interactions, presentations and pitches, onboarding scenarios, and more. If
                    it involves a conversation, Ambr AI can simulate it.{' '}
                    <FaqLink href="/solutions/management-leadership">See all solutions</FaqLink>
                  </p>
                ),
              },
              {
                question: 'What kind of feedback do users receive?',
                answer: (
                  <p>
                    After every conversation, users receive structured, personalized feedback covering
                    conversation structure, word choice, approach, tone, pacing, and delivery. The
                    platform also offers AI-powered guidance for additional support between sessions.{' '}
                    <FaqLink href="/product/how-it-works">See how feedback works</FaqLink>
                  </p>
                ),
              },
              {
                question: 'Can users train on presentations?',
                answer: (
                  <p>
                    Yes. Ambr AI includes Presentation Training where users rehearse presentations and
                    pitches with an AI audience that provides feedback on delivery, structure, and
                    impact.
                  </p>
                ),
              },
              {
                question: 'Does Ambr AI analyze body language?',
                answer: (
                  <p>
                    Yes. Ambr AI includes body language analysis, providing insights on non-verbal
                    communication alongside voice-based feedback. This is available in scenarios where
                    the user&apos;s camera is active.
                  </p>
                ),
              },
            ],
          },
          {
            title: 'Customization and Setup',
            items: [
              {
                question: 'How customizable is the platform?',
                answer: (
                  <p>
                    Highly. There are three ways to customize: admins can build and modify scenarios
                    directly in the platform, the Ambr AI team can build tailored simulations on your
                    behalf, and individual users can create their own personal scenarios. There is also
                    an extensive pre-built scenario library available immediately.{' '}
                    <FaqLink href="/customization">Learn about customization</FaqLink>
                  </p>
                ),
              },
              {
                question: 'How long does it take to get started?',
                answer: (
                  <p>
                    Getting started is easy and quick. Customized scenarios can be created in minutes,
                    and the Ambr AI team is on hand to support you through setup and rollout.{' '}
                    <FaqLink href="/find-out-more">Find out more</FaqLink>
                  </p>
                ),
              },
              {
                question: 'Can we integrate Ambr AI with our existing LMS?',
                answer: (
                  <p>
                    Yes. Ambr AI integrates with major LMS platforms and other enterprise tools.{' '}
                    <FaqLink href="/product/integrations">See integrations</FaqLink>
                  </p>
                ),
              },
            ],
          },
          {
            title: 'Languages and Global Use',
            items: [
              {
                question: 'How many languages does Ambr AI support?',
                answer: (
                  <p>
                    Over 30 languages, with the list growing. Your teams can train in the language they
                    actually work in.{' '}
                    <FaqLink href="/product/languages">See all languages</FaqLink>
                  </p>
                ),
              },
              {
                question: 'Is the platform suitable for global teams?',
                answer: (
                  <p>
                    Yes. Ambr AI is used by multinational organizations across regions. The combination
                    of multilingual support, GDPR compliance, and EU AI Act alignment makes it
                    well-suited for global deployment.
                  </p>
                ),
              },
            ],
          },
          {
            title: 'Security and Data',
            items: [
              {
                question: 'Is Ambr AI secure enough for enterprise use?',
                answer: (
                  <p>
                    Yes. Ambr AI is ISO 27001 certified, GDPR compliant, and aligned with the EU AI
                    Act. Client data is fully isolated, never shared between customers, and never used
                    to train external AI models.{' '}
                    <FaqLink href="/trust/security-certifications">
                      Review our security certifications
                    </FaqLink>
                  </p>
                ),
              },
              {
                question: "Is my organization's data used to train AI models?",
                answer: (
                  <p>
                    No. Your conversation data, scenarios, and organizational information are never
                    used to train any AI model outside the Ambr AI platform. This is a contractual
                    commitment.{' '}
                    <FaqLink href="/trust/data-management">
                      Read our data management approach
                    </FaqLink>
                  </p>
                ),
              },
              {
                question: 'Is Ambr AI GDPR compliant?',
                answer: (
                  <p>
                    Yes. GDPR compliance is built into the platform architecture, data processing
                    agreements, and operational processes.{' '}
                    <FaqLink href="/trust/security-certifications">
                      See full compliance details
                    </FaqLink>
                  </p>
                ),
              },
              {
                question: 'Where is my data stored and processed?',
                answer: (
                  <p>
                    Ambr AI processes data within the EU. Full details of data flows, sub-processors,
                    and residency are available through our Data Processing Agreement.{' '}
                    <FaqLink href="/trust/data-management">Learn more about data management</FaqLink>
                  </p>
                ),
              },
            ],
          },
          {
            title: 'Pricing and Getting Started',
            items: [
              {
                question: 'How is Ambr AI priced?',
                answer: (
                  <p>
                    Ambr AI uses a license-based pricing model, typically structured as an annual
                    license based on your organization&apos;s scale and requirements. Contact us for a
                    quote.{' '}
                    <FaqLink href="/find-out-more">Get a quote</FaqLink>
                  </p>
                ),
              },
              {
                question: 'Can I try Ambr AI before committing?',
                answer: (
                  <p>
                    Yes. You can try the platform for free with example scenarios across management,
                    sales, and customer service. No commitment required.{' '}
                    <FaqLink href="/try-for-free">Try for free</FaqLink>
                  </p>
                ),
              },
              {
                question: 'What does a typical engagement look like?',
                answer: (
                  <p>
                    We work around your timelines. The onboarding process is seamless, with the Ambr
                    AI team managing customization and setup so your internal time investment is
                    minimal.{' '}
                    <FaqLink href="/find-out-more">Find out more</FaqLink>
                  </p>
                ),
              },
            ],
          },
        ]}
      />

      <GrainCta
        heading={
          <>
            Still have <em className="text-accent">questions</em>?
          </>
        }
        subtitle="Get in touch with our team. We are happy to help."
        ctaLabel="Find Out More"
        ctaHref="/find-out-more"
        variant="light"
      />
    </>
  )
}
