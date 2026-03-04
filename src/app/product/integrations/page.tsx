import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Integrations',
  description:
    'Ambr AI connects with your LMS, HRIS, SSO, and collaboration tools. SCORM, xAPI, SAML 2.0, and API access included. No migration required.',
  path: '/product/integrations',
})

/* ────────────────────────────────────────────────────────────
   Integration data
   ──────────────────────────────────────────────────────────── */

interface IntegrationCategory {
  name: string
  description: string
  platforms: string[]
}

const categories: IntegrationCategory[] = [
  {
    name: 'Learning Management Systems',
    description:
      'Deploy simulations directly through the LMS your teams already use. Completion data, scores, and learner progress flow back automatically.',
    platforms: [
      'Cornerstone',
      'SAP SuccessFactors',
      'Docebo',
      '360Learning',
      'Absorb',
      'Totara',
      'Moodle',
      'TalentLMS',
      'Workday Learning',
    ],
  },
  {
    name: 'Content & Learning Standards',
    description:
      'Native support for the standards your LMS expects. Launch simulations, track completions, and capture granular interaction data without custom development.',
    platforms: ['SCORM 1.2 & 2004', 'xAPI (Tin Can)', 'LTI 1.3'],
  },
  {
    name: 'Single Sign-On & Identity',
    description:
      'One-click access through your existing identity provider. No separate credentials for learners, no password-reset burden for IT.',
    platforms: [
      'SAML 2.0',
      'OAuth 2.0 / OIDC',
      'Azure Active Directory',
      'Okta',
      'Google Workspace',
    ],
  },
  {
    name: 'Communication & Collaboration',
    description:
      'Surface practice reminders, completion notifications, and coaching nudges where your teams already work.',
    platforms: ['Microsoft Teams', 'Slack', 'Google Workspace'],
  },
  {
    name: 'HRIS & People Systems',
    description:
      'Sync organizational data to auto-assign simulations by role, department, or location. Keep learner records aligned without manual uploads.',
    platforms: ['Workday', 'BambooHR', 'HiBob', 'Personio'],
  },
  {
    name: 'CRM & Sales Enablement',
    description:
      'Connect training activity to pipeline data. Identify which reps have practiced, correlate practice with deal outcomes, and trigger simulations from CRM events.',
    platforms: ['Salesforce', 'HubSpot'],
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

      {/* ── Hero ── */}
      <PageHero
        compact
        eyebrow="Integrations"
        heading={
          <>
            Fits into the systems{' '}
            <em className="text-accent">you already use</em>
          </>
        }
        subtitle="Ambr AI connects to the learning platforms and enterprise tools your organization relies on. No migration, no disruption. Your teams access training through the environments they already know."
      />

      {/* ── Overview bar ── */}
      <section className="border-y border-border py-section-mobile md:py-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="grid md:grid-cols-3 gap-10 md:gap-16">
              <div>
                <p className="font-heading text-section leading-[1.2] tracking-heading mb-2">
                  40+
                </p>
                <p className="text-body-sm text-copy-light leading-relaxed">
                  Platform integrations supported across LMS, HRIS, SSO, and collaboration tools
                </p>
              </div>
              <div>
                <p className="font-heading text-section leading-[1.2] tracking-heading mb-2">
                  Zero
                </p>
                <p className="text-body-sm text-copy-light leading-relaxed">
                  Custom development required for standard deployments. Pre-built connectors handle the work.
                </p>
              </div>
              <div>
                <p className="font-heading text-section leading-[1.2] tracking-heading mb-2">
                  Open API
                </p>
                <p className="text-body-sm text-copy-light leading-relaxed">
                  Full REST API with webhooks for custom workflows, internal tools, and proprietary systems.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Integration Categories ── */}
      <Section>
        <Reveal>
          <div className="mb-12 md:mb-16">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              Supported platforms
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[600px]">
              Connect with your existing infrastructure
            </h2>
          </div>
        </Reveal>

        <div className="space-y-0">
          {categories.map((category) => (
            <Reveal key={category.name}>
              <div className="py-8 md:py-10 border-t border-border">
                <div className="grid md:grid-cols-[1fr_1.5fr] gap-6 md:gap-16 items-start">
                  <div>
                    <h3 className="font-heading text-label text-dark mb-2">
                      {category.name}
                    </h3>
                    <p className="text-body-sm text-copy-light leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {category.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="inline-block bg-surface-alt border border-border rounded-brand-sm px-4 py-2 text-body-sm text-dark"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── API Access ── */}
      <Section className="bg-surface-alt border-y border-border">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                For engineering teams
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
                Full API access for custom integrations
              </h2>
              <div className="text-body text-copy-mid leading-[1.75] space-y-4">
                <p>
                  If your stack requires something beyond our pre-built connectors,
                  our REST API gives your engineering team direct access to
                  simulations, learner data, reporting, and administrative functions.
                </p>
                <p>
                  Webhooks provide real-time event notifications for session
                  completions, score thresholds, and certification milestones
                  — enabling automated workflows within your existing tooling.
                </p>
              </div>
            </div>
            <div className="w-full rounded-brand bg-dark-mid border border-border p-6 md:p-8 overflow-hidden">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-soft/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-copy-faint/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-copy-faint/40" />
              </div>
              <pre className="text-caption text-copy-faint/80 font-mono leading-relaxed overflow-x-auto">
                <code>{`GET /api/v1/simulations
Authorization: Bearer sk_live_...

{
  "simulations": [
    {
      "id": "sim_8f2k",
      "name": "Discovery Call",
      "completions": 142,
      "avg_score": 78
    }
  ]
}`}</code>
              </pre>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── How Integration Works ── */}
      <Section>
        <Reveal>
          <div className="mb-12 md:mb-16">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              Deployment
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[600px]">
              Live in your environment within days
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-x-16">
          {[
            {
              step: '01',
              heading: 'Technical scoping',
              description:
                'Our integration team reviews your stack and maps the connection points. We handle the configuration — your team provides access credentials and approval.',
            },
            {
              step: '02',
              heading: 'Connect and validate',
              description:
                'Pre-built connectors are configured for your environment. SSO, LMS content delivery, and data sync are tested end-to-end before anything goes live.',
            },
            {
              step: '03',
              heading: 'Go live with support',
              description:
                'Simulations are deployed through your existing systems. Our team monitors the integration and provides direct support through your onboarding period.',
            },
          ].map((item) => (
            <Reveal key={item.step}>
              <div className="py-6 border-t border-border">
                <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-3">
                  {item.step}
                </p>
                <h3 className="font-heading text-label text-dark mb-2">
                  {item.heading}
                </h3>
                <p className="text-body-sm text-copy-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Disclaimer ── */}
      <section className="px-container-mobile md:px-container pb-section-mobile md:pb-section">
        <div className="mx-auto max-w-site">
          <Reveal>
            <p className="text-caption text-copy-faint leading-relaxed max-w-[640px]">
              Integration availability may vary by plan and region. Some
              platforms listed above are supported through standard protocols
              (SCORM, SAML, API) rather than dedicated connectors. Contact our
              team to confirm compatibility with your specific environment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Don't See Your Platform? ── */}
      <section className="border-y border-border py-section-mobile md:py-section px-container-mobile md:px-container bg-surface-alt">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
              <div>
                <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-4">
                  Don&apos;t see your platform?
                </h2>
                <p className="text-body text-copy-mid leading-[1.75] max-w-[520px]">
                  We add new integrations regularly, and our API supports
                  connectivity with virtually any system. If your platform
                  isn&apos;t listed, our team will scope the integration and
                  provide a clear path forward — typically within one business day.
                </p>
              </div>
              <div className="md:text-right">
                <Link
                  href="/contact"
                  className="inline-block rounded-brand-sm bg-dark text-surface-white px-8 py-3.5 text-sm font-body-medium transition-all hover:bg-accent hover:-translate-y-px hover:shadow-lg"
                >
                  Contact Our Integration Team
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <CTA />
    </>
  )
}
