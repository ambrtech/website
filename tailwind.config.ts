import type { Config } from 'tailwindcss'

export const brand = {
  colors: {
    accent: {
      DEFAULT: '#C8842F',
      hover: '#B47428',
      soft: '#E8C992',
      tint: '#F9F0E0',
      whisper: '#FBF6ED',
    },
    surface: {
      DEFAULT: '#F7F7F5',
      alt: '#F0EFEB',
      white: '#FFFFFF',
    },
    dark: {
      DEFAULT: '#1C1C1A',
      mid: '#2E2E2B',
    },
    copy: {
      DEFAULT: '#1C1C1A',
      mid: '#5C5B56',
      light: '#8A8983',
      faint: '#B2B1AB',
    },
    border: 'rgba(28, 28, 26, 0.08)',
  },
  fonts: {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
  },
  fontWeight: {
    heading: '400',
    bodyNormal: '400',
    bodyMedium: '500',
  },
  letterSpacing: {
    heading: '-0.025em',
    tight: '-0.03em',
    eyebrow: '0.12em',
  },
  radius: {
    sm: '6px',
    md: '12px',
  },
  spacing: {
    section: '6rem',
    sectionMobile: '3.5rem',
    containerMax: '1240px',
    containerPadding: '2.5rem',
    containerPaddingMobile: '1.5rem',
  },
} as const

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: brand.colors.accent,
        surface: brand.colors.surface,
        dark: brand.colors.dark,
        copy: brand.colors.copy,
        border: brand.colors.border,
      },
      fontFamily: {
        heading: [brand.fonts.heading],
        body: [brand.fonts.body],
      },
      fontWeight: {
        heading: brand.fontWeight.heading,
        'body-normal': brand.fontWeight.bodyNormal,
        'body-medium': brand.fontWeight.bodyMedium,
      },
      letterSpacing: {
        heading: brand.letterSpacing.heading,
        tight: brand.letterSpacing.tight,
        eyebrow: brand.letterSpacing.eyebrow,
      },
      maxWidth: {
        site: brand.spacing.containerMax,
      },
      borderRadius: {
        brand: brand.radius.md,
        'brand-sm': brand.radius.sm,
      },
      padding: {
        section: brand.spacing.section,
        'section-mobile': brand.spacing.sectionMobile,
        container: brand.spacing.containerPadding,
        'container-mobile': brand.spacing.containerPaddingMobile,
      },
    },
  },
}

export default config
