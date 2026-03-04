export function SVGFilters() {
  return (
    <svg
      style={{ position: 'absolute', width: 0, height: 0 }}
      aria-hidden="true"
    >
      <defs>
        {/* ── Film Grain ── */}
        <filter id="filter-film-grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.2"
            numOctaves="5"
            stitchTiles="stitch"
            result="grain"
          />
          <feColorMatrix in="grain" type="saturate" values="0" result="grainMono" />
          <feComponentTransfer in="grainMono" result="grainFaint">
            <feFuncR type="linear" slope="0.5" intercept="0.25" />
            <feFuncG type="linear" slope="0.5" intercept="0.25" />
            <feFuncB type="linear" slope="0.5" intercept="0.25" />
          </feComponentTransfer>
          <feBlend in="SourceGraphic" in2="grainFaint" mode="soft-light" />
        </filter>

        {/* ── Muted Warm ── */}
        <filter id="filter-muted-warm" x="0%" y="0%" width="100%" height="100%">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="0.45 0.35 0.15 0 0.03
                    0.25 0.45 0.20 0 0.01
                    0.15 0.25 0.40 0 -0.02
                    0    0    0    1 0"
            result="graded"
          />
          <feComponentTransfer in="graded" result="toned">
            <feFuncR type="linear" slope="0.88" intercept="0.06" />
            <feFuncG type="linear" slope="0.88" intercept="0.05" />
            <feFuncB type="linear" slope="0.88" intercept="0.03" />
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

        {/* ── Editorial ── */}
        <filter id="filter-editorial" x="0%" y="0%" width="100%" height="100%">
          <feColorMatrix in="SourceGraphic" type="saturate" values="0.6" result="desat" />
          <feComponentTransfer in="desat" result="toned">
            <feFuncR type="gamma" amplitude="1.05" exponent="0.92" offset="0.02" />
            <feFuncG type="gamma" amplitude="1.02" exponent="0.95" offset="0.01" />
            <feFuncB type="gamma" amplitude="0.98" exponent="0.97" offset="0.0" />
          </feComponentTransfer>
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="5" stitchTiles="stitch" result="grain" />
          <feColorMatrix in="grain" type="saturate" values="0" result="grainMono" />
          <feComponentTransfer in="grainMono" result="grainFaint">
            <feFuncR type="linear" slope="0.3" intercept="0.35" />
            <feFuncG type="linear" slope="0.3" intercept="0.35" />
            <feFuncB type="linear" slope="0.3" intercept="0.35" />
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

        {/* ── Duotone (dark → accent-soft) ── */}
        <filter id="filter-duotone" x="0%" y="0%" width="100%" height="100%">
          {/* Convert to grayscale */}
          <feColorMatrix in="SourceGraphic" type="saturate" values="0" result="grey" />
          {/* Remap: dark #1C1C1A (0.11,0.11,0.10) → light #EAB99A (0.92,0.73,0.60) */}
          <feComponentTransfer in="grey">
            <feFuncR type="table" tableValues="0.11 0.92" />
            <feFuncG type="table" tableValues="0.11 0.73" />
            <feFuncB type="table" tableValues="0.10 0.60" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  )
}
