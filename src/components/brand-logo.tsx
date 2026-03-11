type BrandLogoVariant = 'black' | 'white'

interface BrandLogoProps {
  variant?: BrandLogoVariant
  className?: string
}

const variantClassName: Record<BrandLogoVariant, string> = {
  black: 'text-dark',
  white: 'text-white',
}

export function BrandLogo({
  variant,
  className = '',
}: BrandLogoProps) {
  return (
    <span
      aria-hidden="true"
      className={`block aspect-[100/21] bg-current ${variant ? variantClassName[variant] : ''} ${className}`}
      style={{
        WebkitMaskImage: "url('/ambr/logo-white.png')",
        maskImage: "url('/ambr/logo-white.png')",
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  )
}
