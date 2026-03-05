import { createMetadata } from '@/lib/metadata'
import { ShaderHeroPreview } from './preview'

export const metadata = createMetadata({
  title: 'Preview: Shader Hero Background',
  description: 'Testing WebGL shader as a muted hero background.',
  path: '/preview/shader-hero',
})

export default function Page() {
  return <ShaderHeroPreview />
}
