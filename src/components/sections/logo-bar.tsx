'use client'

import Image from 'next/image'

/**
 * Each logo gets an explicit width and height tuned for consistent visual
 * weight (~2400-2600 px² rendered area). The height is the primary lever;
 * width follows from the source aspect ratio. Outliers (very wide Viatek,
 * very square QS Group) are capped to stay visually balanced.
 *
 * AR = source aspect ratio (width / height)
 */
const logos: { src: string; alt: string; h: number; w: number }[] = [
  /* Deloitte      AR 4.74 */ { src: '/logos/deloitte.png', alt: 'Deloitte', h: 22, w: 104 },
  /* Skyscanner    AR 5.19 */ { src: '/logos/skyscanner.png', alt: 'Skyscanner', h: 21, w: 109 },
  /* Astorg        AR 3.76 */ { src: '/logos/astorg.png', alt: 'Astorg', h: 24, w: 90 },
  /* Berkeley P.   AR 3.37 */ { src: '/logos/berkeleypartnershuip.png', alt: 'Berkeley Partnership', h: 26, w: 88 },
  /* Improvix      AR 3.05 */ { src: '/logos/improvix.png', alt: 'Improvix', h: 27, w: 82 },
  /* Peabody       AR 4.27 */ { src: '/logos/peabody.png', alt: 'Peabody', h: 23, w: 98 },
  /* QS Group      AR 1.27 */ { src: '/logos/qsgroup.svg', alt: 'QS Group', h: 44, w: 56 },
  /* Smol          AR 2.84 */ { src: '/logos/smol.png', alt: 'Smol', h: 28, w: 80 },
  /* Tidal Health  AR 5.33 */ { src: '/logos/tidalhealth.png', alt: 'Tidal Health', h: 20, w: 107 },
  /* Vaultex       AR 2.72 */ { src: '/logos/vaultex.png', alt: 'Vaultex', h: 28, w: 76 },
  /* Viatek        AR 11.1 */ { src: '/logos/viatek.png', alt: 'Viatek', h: 15, w: 150 },
  /* Zego          AR 3.56 */ { src: '/logos/zego.png', alt: 'Zego', h: 25, w: 89 },
]

function LogoSet() {
  return (
    <>
      {logos.map((logo) => (
        <div
          key={logo.alt}
          className="flex items-center justify-center shrink-0 mx-6 md:mx-10"
          style={{ width: logo.w, height: 40 }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.w}
            height={logo.h}
            className="object-contain grayscale opacity-40 mix-blend-multiply"
            style={{ width: logo.w, height: logo.h }}
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
