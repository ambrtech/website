interface AuthorBioProps {
  name: string
  role?: string
}

export function AuthorBio({ name, role }: AuthorBioProps) {
  return (
    <div className="mt-12 pt-8 border-t border-border flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-surface-alt flex items-center justify-center">
        <span className="font-heading text-label text-copy-mid">
          {name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </span>
      </div>
      <div>
        <p className="text-body-sm font-body-medium text-copy">{name}</p>
        {role && <p className="text-caption text-copy-light">{role}</p>}
      </div>
    </div>
  )
}
