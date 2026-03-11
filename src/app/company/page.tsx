import Image from 'next/image'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { OrganizationJsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { PullQuote } from '@/components/sections/pull-quote'
import { LogoCloud } from '@/components/sections/logo-cloud'
import { GrainCta } from '@/components/sections/grain-cta'

export const metadata = createMetadata({
  title: 'Company',
  description:
    'Ambr AI was founded to help people get better at the most human skill of all: talking to each other. Meet the team behind the platform.',
  path: '/company',
})

const founders = [
  {
    name: 'Zoe Stones',
    role: 'CEO',
    image: '/images/team/zoe-headshot.png',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Jamie Wood',
    role: 'CTO',
    image: '/images/team/jamie-headshot.png',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Steph Newton',
    role: 'CCO',
    image: '/images/team/steph headshot.jpeg',
    linkedin: 'https://linkedin.com/in/',
  },
]

export default function CompanyPage() {
  return (
    <>
      <OrganizationJsonLd />

      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Company', href: '/company' },
        ]}
      />

      {/* ── Hero ── */}
      <PageHero
        heading={
          <>
            Built for the conversations that{' '}
            <em className="text-accent">matter</em> most
          </>
        }
        subtitle="Ambr AI was founded on a straightforward observation: the most important conversations in any organization — the ones that build careers, close deals, and retain customers — are the ones people get the least opportunity to train for."
      />

      <Section>
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="max-w-lg">
              <p className="text-body text-copy-mid leading-[1.75] mb-6">
                We set out to change that, using the latest AI technology to help
                people get better at the most human skill of all: talking to each
                other.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-brand-lg overflow-hidden">
              <Image
                src="/images/photography/company-team-genuine.png"
                alt="The Ambr AI team in conversation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Who we are ── */}
      <Section className="bg-surface-white">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
              Who we are
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
              Our team
            </h2>
            <p className="text-body text-copy-mid leading-[1.75] mb-6">
              Ambr AI (Ambr Technologies Limited) was founded in 2022 by former
              executives at Uber, Accenture, and Spotify. Our team is London
              based, operating globally.
            </p>
            <p className="text-body text-copy-mid leading-[1.75]">
              We work with some of the world&rsquo;s most recognized organizations
              to transform how their people prepare for high-stakes professional
              conversations. Our clients include Deloitte, Skyscanner, and IWG,
              among others. They work with us because we deliver something that
              works, and we build it around their specific needs.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ── Client logos ── */}
      <LogoCloud label="Trusted by" />

      <div className="px-container-mobile md:px-container pb-section-mobile md:pb-section">
        <div className="mx-auto max-w-site">
          <Reveal>
            <Link
              href="https://www.linkedin.com/company/ambr-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-label font-body-medium text-dark hover:text-accent transition-colors duration-normal"
            >
              Follow us on LinkedIn
              <span className="text-accent">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </div>

      {/* ── Founders ── */}
      <Section className="bg-surface-white">
        <Reveal>
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
            Leadership
          </p>
          <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-12">
            Our founders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-3xl">
            {founders.map((founder) => (
              <div key={founder.name}>
                <div className="relative aspect-[3/4] rounded-brand-lg overflow-hidden mb-4">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-noise-fine opacity-[0.14] mix-blend-soft-light pointer-events-none" />
                </div>
                <h3 className="font-heading text-label tracking-heading text-dark">
                  {founder.name}
                </h3>
                <p className="text-body-sm text-copy-mid mt-0.5">{founder.role}</p>
                <Link
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caption text-copy-light hover:text-accent transition-colors mt-1.5 inline-block"
                >
                  LinkedIn &rarr;
                </Link>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── What we believe ── */}
      <FeatureGrid
        eyebrow="What we believe"
        heading="Our principles"
        items={[
          {
            heading: 'Generic training does not work',
            description:
              'Every organization has its own language, culture, scenarios, and challenges. That is why customization is at the center of everything we build.',
          },
          {
            heading: 'Technology should enable the conversation, not dominate it',
            description:
              'We built a voice-first platform because real conversations happen in real time. We use AI because it is the best way to deliver realistic, scalable conversation training — not because it is a buzzword.',
          },
          {
            heading: 'AI should make us better at being human',
            description:
              'Our purpose is to strengthen human connection, not replace it. Every product decision we make is guided by a simple question: does this help people have better conversations with other people?',
          },
        ]}
      />

      {/* ── What we stand for ── */}
      <Section className="bg-surface-white">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10 md:gap-20">
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                What we stand for
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
                A training partner, not a software vendor
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-body text-copy-mid leading-[1.75] mb-6">
                We believe technology should help us be better at human-to-human
                communication. AI is the enabler, not the end goal. The real value
                is in the confidence, skill, and empathy your people bring to their
                next real conversation.
              </p>
              <p className="text-body text-copy-mid leading-[1.75]">
                We also pride ourselves on the relationships we build with our
                clients. We are hands-on, responsive, and stay invested in making
                our platform work for each organization we serve. Our clients
                describe working with Ambr AI as working with a specialist
                training partner, not a software vendor.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Why we exist ── */}
      <Section>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
              Why we exist
            </p>
            <h2 className="font-heading text-quote md:text-section leading-[1.3] tracking-heading mb-8 italic">
              Because soft skills are actually hard skills, and the ability to
              communicate with empathy and clarity in high-pressure moments
              shouldn&rsquo;t be reserved for those with access to expensive
              coaching or natural talent.
            </h2>
            <p className="text-body text-copy-mid leading-[1.75] max-w-xl mx-auto">
              To bridge the gap between knowing what to say and being able to say
              it. Human connection and communication are fundamental to workplace
              success, yet traditional training leaves people unprepared for the
              conversations that matter most.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ── Global reach ── */}
      <Section className="bg-surface-white">
        <Reveal>
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
            Global reach
          </p>
          <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-12">
            Built for global teams
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            <div className="py-6 border-t border-border">
              <h3 className="font-heading text-label text-dark mb-2">
                GDPR compliance
              </h3>
              <p className="text-body-sm text-copy-mid leading-relaxed">
                GDPR compliance is foundational to how we build and operate.
              </p>
            </div>
            <div className="py-6 border-t border-border">
              <h3 className="font-heading text-label text-dark mb-2">
                EU AI Act alignment
              </h3>
              <p className="text-body-sm text-copy-mid leading-relaxed">
                EU AI Act alignment is built into our product and operations.
              </p>
            </div>
            <div className="py-6 border-t border-border">
              <h3 className="font-heading text-label text-dark mb-2">
                30+ languages
              </h3>
              <p className="text-body-sm text-copy-mid leading-relaxed">
                Over 30 languages supported for truly global deployment.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/product/languages"
              className="inline-flex items-center gap-2 text-label font-body-medium text-dark hover:text-accent transition-colors duration-normal"
            >
              Explore our language capabilities
              <span className="text-accent">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ── Testimonial ── */}
      <PullQuote
        quote="We've looked at alternatives but they were just 'meh'... this is a really good product."
        role="Training Manager"
        company="Recruitment Company"
      />

      {/* ── CTA ── */}
      <GrainCta
        variant="dark"
        heading={
          <>
            Try Ambr AI for <em className="text-accent">free</em>
          </>
        }
        subtitle="Experience realistic AI roleplay training. No commitment required."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
