import { createMetadata } from '@/lib/metadata'
import { StatBar } from '@/components/sections/stat-bar'

export const metadata = createMetadata({
  title: 'Preview: Stat Bar',
  description: 'Component preview.',
  path: '/preview/stat-bar',
})

export default function Preview() {
  return (
    <div>
      <div className="h-48 bg-surface" />
      <StatBar
        items={[
          { value: '93%', label: 'of users report feeling better prepared for real conversations', source: 'Ambr AI user survey' },
          { value: '78%', label: 'felt more comfortable navigating difficult conversations', source: 'Skyscanner 12-week pilot' },
          { value: '92%', label: 'manager engagement rate during the pilot programme', source: 'Skyscanner 12-week pilot' },
        ]}
      />
      <div className="h-48 bg-surface" />
    </div>
  )
}
