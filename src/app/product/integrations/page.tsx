import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { Section } from '@/components/sections/section'
import {
  ProductScreenshot,
  MockLmsEmbed,
  MockTrainingNudge,
} from '@/components/sections/product-screenshot'
import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'Integrations',
  description:
    'Ambr AI integrates quickly with your learning infrastructure and identity providers. SCORM, xAPI, SAML 2.0, Slack, and Microsoft Teams support included.',
  path: '/product/integrations',
})

/* ────────────────────────────────────────────────────────────
   Data
   ──────────────────────────────────────────────────────────── */

const lmsPlatforms = [
  'Cornerstone',
  'SAP SuccessFactors',
  'Docebo',
  'Absorb LMS',
  '360Learning',
  'Totara',
  'Moodle',
  'TalentLMS',
  'iSpring',
  'Litmos',
  'LearnUpon',
  'Degreed',
]

const learningStandards = [
  {
    label: 'SCORM',
    description:
      'Package Ambr AI scenarios as SCORM-compliant objects for direct embedding in your LMS. Completion data flows back into your existing reporting.',
  },
  {
    label: 'xAPI',
    description:
      'Rich activity data pushed to your Learning Record Store, giving you granular visibility into how your teams are training.',
  },
]

const ssoProviders = [
  {
    name: 'Microsoft Entra ID',
    protocol: 'SAML 2.0 / OIDC',
  },
  {
    name: 'Google Workspace',
    protocol: 'SAML 2.0 / OIDC',
  },
  {
    name: 'Okta',
    protocol: 'SAML 2.0 / OIDC',
  },
]

/* ────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────── */

export default function IntegrationsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Product', href: '/product/how-it-works' },
          { name: 'Integrations', href: '/product/integrations' },
        ]}
      />

      {/* ── Hero — split layout with mock ── */}
      <section className="pt-section-mobile md:pt-[120px] pb-section-mobile md:pb-[100px] px-container-mobile md:px-container bg-surface-white">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
              <div>
                <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                  Integrations
                </p>
                <h1 className="font-heading text-headline leading-[1.1] tracking-heading mb-6">
                  Seamlessly connects to your{' '}
                  <em className="text-accent">existing</em> tools.
                </h1>
                <p className="text-body text-copy-mid leading-[1.75] max-w-[480px]">
                  Ambr AI integrates quickly with your learning infrastructure
                  and identity providers. No technical headaches. No disruption.
                </p>
              </div>
              <div>
                <ProductScreenshot tint>
                  <MockLmsEmbed />
                </ProductScreenshot>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── LMS Platforms — grid directly below hero ── */}
      <Section className="!pt-0 bg-surface-white">
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {lmsPlatforms.map((platform) => (
              <div
                key={platform}
                className="border border-border rounded-brand px-5 py-4 text-center transition-all duration-normal hover:border-accent-soft hover:shadow-card"
              >
                <p className="font-heading text-body-sm tracking-heading text-dark">
                  {platform}
                </p>
              </div>
            ))}
          </div>
          <p className="text-body-sm text-copy-light mt-5">
            and 50+ more.
          </p>
        </Reveal>
      </Section>

      {/* ── Learning Standards ── */}
      <Section className="!pt-0">
        <Reveal>
          <div className="max-w-[720px] mb-10 md:mb-12">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
              Learning Standards
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading">
              Standards-based from the start.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {learningStandards.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="border border-border rounded-brand p-8 md:p-10 h-full">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <p className="font-heading text-label tracking-heading text-dark">
                    {item.label}
                  </p>
                  <span className="inline-block text-caption font-body-medium uppercase tracking-eyebrow text-accent border border-accent-soft rounded-brand-sm px-3 py-1 shrink-0">
                    Supported
                  </span>
                </div>
                <p className="text-body-sm text-copy-mid leading-[1.75]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Single Sign-On ── */}
      <Section className="bg-surface-white">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-start">
          <Reveal>
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                Single Sign-On
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-5">
                Your team logs in with existing credentials.
              </h2>
              <p className="text-body text-copy-mid leading-[1.75]">
                Ambr AI supports SSO via any identity provider that uses
                SAML 2.0 or OIDC. Okta. Microsoft Entra ID. Google Workspace.
                If your organization uses it, we support it.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-3 pt-2">
              {ssoProviders.map((provider) => (
                <div
                  key={provider.name}
                  className="border border-border rounded-brand bg-surface-white px-6 py-5 flex items-center justify-between gap-4"
                >
                  <p className="font-heading text-label tracking-heading text-dark">
                    {provider.name}
                  </p>
                  <p className="text-caption text-copy-light shrink-0">
                    {provider.protocol}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Slack & Teams ── */}
      <Section>
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">
          <Reveal>
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                Messaging
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-5">
                Slack &amp; Teams
              </h2>
              <p className="text-body text-copy-mid leading-[1.75]">
                Surface Ambr AI notifications and training nudges in Slack
                and Microsoft Teams, keeping practice visible where your team
                already communicates.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ProductScreenshot tint>
              <MockTrainingNudge />
            </ProductScreenshot>
          </Reveal>
        </div>
      </Section>

      {/* ── Don't See Your Platform? ── */}
      <Section className="bg-surface-white">
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <div className="text-center">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline mx-auto w-fit">
                Get in Touch
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-5">
                Don&apos;t see your platform?
              </h2>
              <p className="text-body text-copy-mid leading-[1.75] mb-8">
                We&apos;re adding integrations regularly. If your stack
                isn&apos;t listed here, get in touch and we&apos;ll let you
                know what&apos;s possible.
              </p>
              <Link
                href="/find-out-more"
                className="inline-block rounded-brand-sm bg-dark text-surface-white px-8 py-3.5 text-sm font-body-medium transition-all hover:bg-accent hover:-translate-y-px hover:shadow-lg"
              >
                Find out more
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
