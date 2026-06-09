/** Animated sunlight caustics — refraction net cast through the water surface.
 *  Pure declarative SVG + SMIL, so it is SSR-safe (no hydration mismatch). */
export function Caustics({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden mix-blend-screen ${className}`}
      aria-hidden
    >
      <svg className="h-full w-full opacity-[0.08]" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="wave-caustic" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05 0.045"
              numOctaves="2"
              seed="7"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="34s"
                values="0.05 0.045; 0.058 0.05; 0.05 0.045"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feColorMatrix
              in="noise"
              type="matrix"
              values="0 0 0 0 0.37
                      0 0 0 0 0.92
                      0 0 0 0 1
                      0 0 0 1.6 -0.55"
              result="tinted"
            />
            <feComponentTransfer in="tinted">
              <feFuncA type="gamma" amplitude="1" exponent="3" offset="0" />
            </feComponentTransfer>
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#wave-caustic)" />
      </svg>
    </div>
  );
}
