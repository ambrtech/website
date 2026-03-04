import Image from 'next/image'
import { Section } from './section'
import { Reveal } from '@/components/reveal'

interface ShowcaseSplitFeature {
  heading: string
  description: string
}

type CropFocus = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
type Tint = 'warm' | 'soft' | 'dark'

const tintColors: Record<Tint, string> = {
  warm: 'rgba(212, 114, 52, 0.04)',
  soft: 'rgba(234, 185, 154, 0.05)',
  dark: 'rgba(28, 28, 26, 0.04)',
}

const cropOrigin: Record<CropFocus, string> = {
  'top-left': 'origin-top-left',
  'top-right': 'origin-top-right',
  'bottom-left': 'origin-bottom-left',
  'bottom-right': 'origin-bottom-right',
  center: 'origin-center',
}

interface ShowcaseSplitProps {
  heading: React.ReactNode
  subtitle?: string
  features: ShowcaseSplitFeature[]
  layout?: 'left' | 'right'
  cropFocus?: CropFocus
  tint?: Tint
  textureImage?: string
  visualContent?: React.ReactNode
}

export function ShowcaseSplit({
  heading,
  subtitle,
  features,
  layout = 'left',
  cropFocus = 'center',
  tint = 'dark',
  textureImage = '/images/textures/feature-texture.jpg',
  visualContent,
}: ShowcaseSplitProps) {
  const imageBox = (
    <div className="relative w-full aspect-[4/3] rounded-brand-lg overflow-hidden">
      <Image
        src={textureImage}
        alt=""
        fill
        className={`object-cover scale-[1.5] saturate-[0.3] ${cropOrigin[cropFocus]}`}
        sizes="(max-width: 768px) 100vw, 55vw"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: tintColors[tint] }}
      />
      {/* Film grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.12] mix-blend-overlay" />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 35%, rgba(28, 28, 26, 0.45) 100%)',
        }}
      />
      {visualContent && (
        <div className="absolute top-[20%] left-4 right-[-15%] bottom-[-10%]">
          <div className="bg-surface-white rounded-brand border border-border shadow-card p-5 md:p-6 h-full overflow-hidden">
            {visualContent}
          </div>
        </div>
      )}
    </div>
  )

  const featureList = (
    <div className="flex flex-col">
      {features.map((feature, index) => (
        <div
          key={feature.heading}
          className={`py-6 ${index === 0 ? 'md:pt-0' : ''} ${
            index !== features.length - 1 ? 'border-b border-border' : ''
          }`}
        >
          <h3 className="font-heading text-label tracking-heading text-dark mb-2">
            {feature.heading}
          </h3>
          <p className="text-body-sm text-copy-mid leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )

  const gridCols =
    layout === 'left'
      ? 'md:grid-cols-[1.1fr_1fr]'
      : 'md:grid-cols-[1fr_1.1fr]'

  return (
    <Section>
      {/* Top row: heading + subtitle */}
      <Reveal>
        <div className={`grid ${gridCols} gap-8 md:gap-20 items-start mb-12 md:mb-16`}>
          {layout === 'left' ? (
            <>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading text-dark">
                {heading}
              </h2>
              {subtitle && (
                <p className="text-body text-copy-mid leading-[1.75] md:pt-1">
                  {subtitle}
                </p>
              )}
            </>
          ) : (
            <>
              {subtitle && (
                <p className="text-body text-copy-mid leading-[1.75] md:pt-1">
                  {subtitle}
                </p>
              )}
              <h2 className="font-heading text-section leading-[1.2] tracking-heading text-dark">
                {heading}
              </h2>
            </>
          )}
        </div>
      </Reveal>

      {/* Bottom row: image box + feature list */}
      <Reveal>
        <div className={`grid ${gridCols} gap-8 md:gap-20 items-start`}>
          {layout === 'left' ? (
            <>
              {imageBox}
              {featureList}
            </>
          ) : (
            <>
              {featureList}
              {imageBox}
            </>
          )}
        </div>
      </Reveal>
    </Section>
  )
}
