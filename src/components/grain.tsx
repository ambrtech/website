export function Grain() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[100] h-full w-full" aria-hidden="true">
      <div className="absolute inset-0 bg-noise-fine opacity-[0.14] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-noise-coarse opacity-[0.05] mix-blend-overlay" />
    </div>
  )
}
