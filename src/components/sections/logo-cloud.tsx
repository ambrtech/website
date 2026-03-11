import Image from 'next/image'
import { Reveal } from '@/components/reveal'

/**
 * Curated subset of client logos for maximum enterprise credibility.
 * Each logo gets an explicit width tuned for similar visual weight.
 */
const logos: { src: string; alt: string; w: number }[] = [
  { src: '/logos/deloitte.png', alt: 'Deloitte', w: 105 },
  { src: '/logos/skyscanner.png', alt: 'Skyscanner', w: 138 },
  { src: '/logos/zego.png', alt: 'Zego', w: 88 },
  { src: '/logos/vaultex.png', alt: 'Vaultex', w: 80 },
  { src: '/logos/tidalhealth.png', alt: 'Tidal Health', w: 115 },
  { src: '/logos/peabody.png', alt: 'Peabody', w: 100 },
]

interface LogoCloudProps {
  label?: string
  className?: string
}

export function LogoCloud({ label = 'Trusted by', className }: LogoCloudProps) {
  return (
    <section className={`px-container-mobile md:px-container py-8 md:py-12 ${className ?? ''}`}>
      <div className="mx-auto max-w-site">
        <Reveal>
          {label && (
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-10 text-center">
              {label}
            </p>
          )}
          <div className="flex items-center justify-center gap-10 md:gap-14 flex-wrap">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center h-[32px]"
                style={{ width: logo.w }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={60}
                  className="max-w-full max-h-full w-auto h-auto object-contain grayscale opacity-40 mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
