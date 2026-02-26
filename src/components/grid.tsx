interface GridProps {
  className?: string
  dotSize?: number
  gap?: number
}

export function Grid({
  className = '',
  dotSize = 1,
  gap = 24,
}: GridProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, currentColor ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${gap}px ${gap}px`,
      }}
      aria-hidden="true"
    />
  )
}
