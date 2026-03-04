import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'Integrations',
  description:
    'Ambr AI connects to your learning infrastructure and identity providers. SCORM, xAPI, SAML 2.0, and Slack support included. No migration required.',
  path: '/product/integrations',
})

/* ────────────────────────────────────────────────────────────
   Data
   ──────────────────────────────────────────────────────────── */

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
    name: 'Okta',
    protocol: 'SAML 2.0 / OIDC',
  },
  {
    name: 'Microsoft Entra ID',
    protocol: 'SAML 2.0 / OIDC',
  },
  {
    name: 'Google Workspace',
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

      <PageHero
        compact
        eyebrow="Integrations"
        heading={
          <>
            Fits into the systems you{' '}
            <em className="text-accent">already</em> use.
          </>
        }
        subtitle="Ambr AI connects to your learning infrastructure and identity providers. No migration. No disruption."
      />

      {/* ── Learning Standards ── */}
      <section className="pb-section-mobile md:pb-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="max-w-[720px] mb-10 md:mb-12">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                Learning Standards
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-5">
                Your team accesses Ambr AI through the LMS they already know.
              </h2>
              <p className="text-body text-copy-mid leading-[1.75]">
                No new logins, no change in workflow.
              </p>
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
        </div>
      </section>

      {/* ── Single Sign-On ── */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container bg-surface-alt">
        <div className="mx-auto max-w-site grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-start">
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
      </section>

      {/* ── Slack ── */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-site grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-start">
          <Reveal>
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                Messaging
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-5">
                Keep training visible where your team already works.
              </h2>
              <p className="text-body text-copy-mid leading-[1.75]">
                Surface Ambr AI notifications and training nudges in Slack,
                keeping practice visible where your team already communicates.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="border border-border rounded-brand p-8 md:p-10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <p className="font-heading text-label tracking-heading text-dark">
                  Slack
                </p>
                <span className="inline-block text-caption font-body-medium uppercase tracking-eyebrow text-accent border border-accent-soft rounded-brand-sm px-3 py-1 shrink-0">
                  Supported
                </span>
              </div>
              <p className="text-body-sm text-copy-mid leading-[1.75]">
                Automated reminders, completion notifications, and nudges
                delivered directly into Slack channels. No context-switching
                required.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Don't See Your Platform? ── */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container bg-surface-alt">
        <div className="mx-auto max-w-site max-w-[720px]">
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
                href="/contact"
                className="inline-block rounded-brand-sm bg-dark text-surface-white px-8 py-3.5 text-sm font-body-medium transition-all hover:bg-accent hover:-translate-y-px hover:shadow-lg"
              >
                Find out more
              </Link>
            </div>

            <div className="mt-12 pt-10 border-t border-border text-center">
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <Link
                  href="/product/how-it-works"
                  className="text-body-sm font-body-medium text-copy-mid hover:text-accent transition-colors"
                >
                  See how it works &rarr;
                </Link>
                <span className="text-copy-faint" aria-hidden="true">
                  &middot;
                </span>
                <Link
                  href="/security/compliance"
                  className="text-body-sm font-body-medium text-copy-mid hover:text-accent transition-colors"
                >
                  Review our compliance certifications &rarr;
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
