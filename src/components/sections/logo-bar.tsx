'use client'

import Image from 'next/image'

/**
 * Each logo gets a height tuned for consistent perceived visual weight.
 * Height is the dominant factor in how large a logo reads — not area.
 * Bold/heavy type is scaled down; square logos are capped; very wide
 * logos stay short. Width follows naturally via object-contain.
 */
const logos: { src: string; alt: string; h: number }[] = [
  { src: '/logos/deloitte.png', alt: 'Deloitte', h: 24 },
  { src: '/logos/skyscanner.png', alt: 'Skyscanner', h: 26 },
  { src: '/logos/astorg.png', alt: 'Astorg', h: 28 },
  { src: '/logos/berkeleypartnershuip.png', alt: 'Berkeley Partnership', h: 28 },
  { src: '/logos/improvix.png', alt: 'Improvix', h: 32 },
  { src: '/logos/peabody.png', alt: 'Peabody', h: 26 },
  { src: '/logos/qsgroup.svg', alt: 'QS Group', h: 28 },
  { src: '/logos/smol.png', alt: 'Smol', h: 24 },
  { src: '/logos/tidalhealth.png', alt: 'Tidal Health', h: 26 },
  { src: '/logos/vaultex.png', alt: 'Vaultex', h: 30 },
  { src: '/logos/viatek.png', alt: 'Viatek', h: 14 },
  { src: '/logos/zego.png', alt: 'Zego', h: 22 },
]

function LogoSet() {
  return (
    <>
      {logos.map((logo) => (
        <div
          key={logo.alt}
          className="flex items-center justify-center shrink-0 mx-6 md:mx-10"
          style={{ height: 40 }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={200}
            height={60}
            className="object-contain grayscale opacity-40 mix-blend-multiply w-auto"
            style={{ height: logo.h }}
          />
        </div>
      ))}
    </>
  )
}

export function LogoBar() {
  return (
    <div className="border-t border-border py-10 overflow-hidden">
      <div
        className="flex w-max items-center"
        style={{
          animation: 'logo-scroll 40s linear infinite',
        }}
      >
        <LogoSet />
        <LogoSet />
      </div>
    </div>
  )
}
