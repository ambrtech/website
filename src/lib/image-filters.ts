/**
 * Shared types and lookup maps for the SVG image filter system.
 *
 * SVG filter primitives are defined in <SVGFilters /> (src/components/svg-filters.tsx),
 * mounted once in the root layout. Each filter ID maps to a Tailwind @utility class
 * in globals.css (e.g. filter-faded { filter: url(#filter-faded) }).
 */

export type CropFocus = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'

export type ImageFilter =
  | 'faded'
  | 'duotone'
  | 'duotone-cream'
  | 'duotone-blush'
  | 'duotone-copper'

export const filterClass: Record<ImageFilter, string> = {
  faded: 'filter-faded',
  duotone: 'filter-duotone',
  'duotone-cream': 'filter-duotone-cream',
  'duotone-blush': 'filter-duotone-blush',
  'duotone-copper': 'filter-duotone-copper',
}

export const cropOrigin: Record<CropFocus, string> = {
  'top-left': 'origin-top-left',
  'top-right': 'origin-top-right',
  'bottom-left': 'origin-bottom-left',
  'bottom-right': 'origin-bottom-right',
  center: 'origin-center',
}
