import { createMetadata } from '@/lib/metadata'
import { OrganizationJsonLd } from '@/components/json-ld'

export const metadata = createMetadata({
  title: 'Ambr AI',
  description: 'Bespoke voice-based AI conversation simulations for enterprise workplace training.',
  path: '/',
})

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="font-heading text-4xl tracking-heading">Ambr AI</h1>
      </main>
    </>
  )
}
