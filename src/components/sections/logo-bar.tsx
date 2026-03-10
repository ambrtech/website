'use client'

import Image from 'next/image'

/**
 * Each logo gets an explicit width tuned for similar visual weight.
 * Wide logos (Viatek AR 11:1) need more width; compact logos
 * (QS Group AR 1.3:1) are inherently smaller in a horizontal ticker.
 */
const logos: { src: string; alt: string; w: number }[] = [
  { src: '/logos/deloitte.avif', alt: 'Deloitte', w: 105 },
  { src: '/logos/skyscanner.avif', alt: 'Skyscanner', w: 138 },
  { src: '/logos/astorg.png', alt: 'Astorg', w: 95 },
  { src: '/logos/berkeleypartnershuip.avif', alt: 'Berkeley Partnership', w: 88 },
  { src: '/logos/improvix.png', alt: 'Improvix', w: 103 },
  { src: '/logos/peabody.png', alt: 'Peabody', w: 100 },
  { src: '/logos/qsgroup.svg', alt: 'QS Group', w: 44 },
  { src: '/logos/smol.png', alt: 'Smol', w: 80 },
  { src: '/logos/tidalhealth.jpg', alt: 'Tidal Health', w: 115 },
  { src: '/logos/vaultex.avif', alt: 'Vaultex', w: 80 },
  { src: '/logos/viatek.png', alt: 'Viatek', w: 160 },
  { src: '/logos/zego.avif', alt: 'Zego', w: 88 },
]

function LogoSet() {
  return (
    <>
      {logos.map((logo) => (
        <div
          key={logo.alt}
          className="flex items-center justify-center shrink-0 h-[32px] mx-6 md:mx-10"
          style={{ width: logo.w }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={200}
            height={60}
            className="max-w-full max-h-full w-auto h-auto object-contain grayscale opacity-40"
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
