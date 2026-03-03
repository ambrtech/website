import { createMetadata } from '@/lib/metadata'
import { TrustBadges } from '@/components/sections/trust-badges'

export const metadata = createMetadata({
  title: 'Preview: Trust Badges',
  description: 'Component preview.',
  path: '/preview/trust-badges',
})

export default function Preview() {
  return (
    <div>
      <div className="h-48 bg-surface-white" />
      <TrustBadges
        badges={[
          { label: 'ISO 27001', description: 'Certified information security management' },
          { label: 'GDPR', description: 'EU data protection compliant' },
          { label: 'EU AI Act', description: 'Aligned with regulatory framework' },
          { label: 'Aikido Security', description: 'Continuous automated auditing' },
        ]}
        cta={{ label: 'Learn more about AI Trust & Safety', href: '/trust/security-certifications' }}
      />
      <div className="h-48 bg-surface-white" />
    </div>
  )
}
