/**
 * Global SVG filter definitions, mounted once in the root layout.
 * Referenced by filter-* Tailwind utility classes in globals.css.
 */
export function SVGFilters() {
  return (
    <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
      <defs>
        {/* ── Muted Cool ── */}
        <filter id="filter-muted-cool" x="0%" y="0%" width="100%" height="100%">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="0.35 0.30 0.25 0 -0.02
                    0.20 0.42 0.28 0 0.00
                    0.15 0.25 0.50 0 0.04
                    0    0    0    1 0"
            result="graded"
          />
          <feComponentTransfer in="graded" result="toned">
            <feFuncR type="linear" slope="0.88" intercept="0.04" />
            <feFuncG type="linear" slope="0.88" intercept="0.05" />
            <feFuncB type="linear" slope="0.88" intercept="0.07" />
          </feComponentTransfer>
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="5" stitchTiles="stitch" result="grain" />
          <feColorMatrix in="grain" type="saturate" values="0" result="grainMono" />
          <feComponentTransfer in="grainMono" result="grainFaint">
            <feFuncR type="linear" slope="0.4" intercept="0.3" />
            <feFuncG type="linear" slope="0.4" intercept="0.3" />
            <feFuncB type="linear" slope="0.4" intercept="0.3" />
          </feComponentTransfer>
          <feBlend in="toned" in2="grainFaint" mode="soft-light" />
        </filter>

        {/* ── Faded ── */}
        <filter id="filter-faded" x="0%" y="0%" width="100%" height="100%">
          <feColorMatrix in="SourceGraphic" type="saturate" values="0.4" result="desat" />
          <feComponentTransfer in="desat">
            <feFuncR type="linear" slope="0.75" intercept="0.12" />
            <feFuncG type="linear" slope="0.75" intercept="0.11" />
            <feFuncB type="linear" slope="0.75" intercept="0.10" />
          </feComponentTransfer>
        </filter>

        {/* ── Duotone: dark → accent-soft (#1C1C1A → #EAB99A) ── */}
        <filter id="filter-duotone" x="0%" y="0%" width="100%" height="100%">
          <feColorMatrix in="SourceGraphic" type="saturate" values="0" result="grey" />
          <feComponentTransfer in="grey">
            <feFuncR type="table" tableValues="0.11 0.92" />
            <feFuncG type="table" tableValues="0.11 0.73" />
            <feFuncB type="table" tableValues="0.10 0.60" />
          </feComponentTransfer>
        </filter>

        {/* ── Duotone Cream: dark → surface (#1C1C1A → #F7F7F5) ── */}
        <filter id="filter-duotone-cream" x="0%" y="0%" width="100%" height="100%">
          <feColorMatrix in="SourceGraphic" type="saturate" values="0" result="grey" />
          <feComponentTransfer in="grey">
            <feFuncR type="table" tableValues="0.11 0.97" />
            <feFuncG type="table" tableValues="0.11 0.97" />
            <feFuncB type="table" tableValues="0.10 0.96" />
          </feComponentTransfer>
        </filter>

        {/* ── Duotone Blush: dark-mid → accent-tint (#2E2E2B → #F9EAE1) ── */}
        <filter id="filter-duotone-blush" x="0%" y="0%" width="100%" height="100%">
          <feColorMatrix in="SourceGraphic" type="saturate" values="0" result="grey" />
          <feComponentTransfer in="grey">
            <feFuncR type="table" tableValues="0.18 0.98" />
            <feFuncG type="table" tableValues="0.18 0.92" />
            <feFuncB type="table" tableValues="0.17 0.88" />
          </feComponentTransfer>
        </filter>

        {/* ── Duotone Copper: dark → accent (#1C1C1A → #D47234) ── */}
        <filter id="filter-duotone-copper" x="0%" y="0%" width="100%" height="100%">
          <feColorMatrix in="SourceGraphic" type="saturate" values="0" result="grey" />
          <feComponentTransfer in="grey">
            <feFuncR type="table" tableValues="0.11 0.83" />
            <feFuncG type="table" tableValues="0.11 0.45" />
            <feFuncB type="table" tableValues="0.10 0.20" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  )
}
