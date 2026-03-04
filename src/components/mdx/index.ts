import { Callout } from './callout'
import { StatHighlight } from './stat-highlight'
import { ComparisonTable } from './comparison-table'
import { CTAInline } from './cta-inline'
import { FAQ } from './faq'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mdxComponents: Record<string, React.ComponentType<any>> = {
  Callout,
  StatHighlight,
  ComparisonTable,
  CTAInline,
  FAQ,
}
