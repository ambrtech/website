export function LogoBar() {
  const clients = [
    'Deloitte',
    'Skyscanner',
    'IWG',
    'NatWest',
    'Bupa',
    'PwC',
  ]

  return (
    <section className="border-y border-border bg-surface-white">
      <div className="mx-auto max-w-site px-container-mobile md:px-container py-10 md:py-14">
        <p className="text-xs font-body-medium uppercase tracking-eyebrow text-copy-faint text-center mb-10">
          Trusted by learning teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {clients.map((name) => (
            <span
              key={name}
              className="font-heading text-2xl text-copy-faint select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
