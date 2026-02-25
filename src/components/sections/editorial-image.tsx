import Image from 'next/image'
import { Reveal } from '@/components/reveal'

interface EditorialImageProps {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  priority?: boolean
}

export function EditorialImage({
  src,
  alt,
  width,
  height,
  caption,
  priority,
}: EditorialImageProps) {
  return (
    <section className="py-section-mobile md:py-section">
      <Reveal>
        <div className="relative w-full overflow-hidden aspect-[2.5/1]">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="w-full h-full object-cover"
            sizes="100vw"
          />
        </div>
        {caption && (
          <div className="px-container-mobile md:px-container">
            <p className="mx-auto max-w-site text-detail text-copy-faint mt-4 tracking-wide">
              {caption}
            </p>
          </div>
        )}
      </Reveal>
    </section>
  )
}
