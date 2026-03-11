import Image from 'next/image'
import { Section } from './section'
import { Reveal } from '@/components/reveal'
import { type CropFocus, type ImageFilter, filterClass, cropOrigin } from '@/lib/image-filters'

interface ShowcaseSplitFeature {
  heading: string
  description: string
}

interface ShowcaseSplitProps {
  heading: React.ReactNode
  subtitle?: string
  features: ShowcaseSplitFeature[]
  layout?: 'left' | 'right'
  cropFocus?: CropFocus
  filter?: ImageFilter
  textureImage?: string
  visualContent?: React.ReactNode
}

export function ShowcaseSplit({
  heading,
  subtitle,
  features,
  layout = 'left',
  cropFocus = 'center',
  filter = 'faded',
  textureImage = '/textures/feature-texture.jpg',
  visualContent,
}: ShowcaseSplitProps) {
  const imageBox = (
    <div className="relative w-full aspect-[4/3] rounded-brand-lg overflow-hidden">
      <Image
        src={textureImage}
        alt=""
        fill
        className={`object-cover scale-[1.5] ${filterClass[filter]} ${cropOrigin[cropFocus]}`}
        sizes="(max-width: 768px) 100vw, 55vw"
      />
      <div className="absolute inset-0 pointer-events-none vignette-dark" />
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
