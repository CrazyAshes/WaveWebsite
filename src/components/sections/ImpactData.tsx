"use client";

import {
  AnimatedSection,
  FadeIn,
  glassCardClass,
  SectionLabel,
  SectionTitle,
} from "@/components/ui/AnimatedSection";
import { CountUp } from "@/components/ui/CountUp";
import { TiltCard } from "@/components/ui/TiltCard";
import { StatRing } from "@/components/ui/StatRing";

type Metric = {
  value?: number;
  suffix?: string;
  display?: string;
  decimals?: number;
  label: string;
  description: string;
};

const metrics: Metric[] = [
  {
    value: 100,
    suffix: "m",
    label: "Operating Depth",
    description: "Full-range coastal and aquaculture missions.",
  },
  {
    value: 1080,
    suffix: "P",
    label: "Camera System",
    description: "High-definition front-dome imaging.",
  },
  {
    display: "Real-Time",
    label: "Live Monitoring",
    description: "Low-latency subsea video over tether.",
  },
  {
    display: "Tethered",
    label: "Precision Control",
    description: "Stable, drift-free positioning at depth.",
  },
];

export function ImpactData() {
  return (
    <AnimatedSection
      id="impact"
      className="relative border-t border-white/[0.04] bg-[#030b14] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-2">
            <FadeIn>
              <SectionLabel>Specifications</SectionLabel>
              <SectionTitle>
                Built to Spec,
                <br />
                <span className="text-[#5eebff]">Not to Hype</span>
              </SectionTitle>
              <p className="mt-4 text-body-sm">
                Every WAVE Shark ships on field-proven hardware. These are the
                numbers the drone is engineered around — measured, not projected.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-3">
            {metrics.map((m, i) => (
              <FadeIn key={m.label} index={i}>
                <TiltCard className={`${glassCardClass} lux-tile group h-full p-6`}>
                  <div className="absolute right-5 top-5">
                    <StatRing progress={m.value !== undefined ? 1 : 0.65} />
                  </div>
                  <div className="text-3xl font-medium tracking-tight text-[#5eebff] md:text-4xl">
                    {m.value !== undefined ? (
                      <CountUp
                        end={m.value}
                        suffix={m.suffix}
                        decimals={m.decimals ?? 0}
                      />
                    ) : (
                      m.display
                    )}
                  </div>
                  <h3 className="mt-3 text-sm font-medium text-white">
                    {m.label}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#9ca8b8]">
                    {m.description}
                  </p>
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
