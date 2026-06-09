"use client";

import Image from "next/image";
import {
  AnimatedSection,
  FadeIn,
  glassCardClass,
  SectionLabel,
  SectionTitle,
} from "@/components/ui/AnimatedSection";
import { TiltCard } from "@/components/ui/TiltCard";
import { assets } from "@/lib/assets";

const capabilities = [
  {
    title: "HD Camera System",
    description: "Front camera dome imaging",
    image: assets.ai.camera,
  },
  {
    title: "LED Light Array",
    description: "Blue wing light strips",
    image: assets.ai.led,
  },
  {
    title: "Thruster Propulsion",
    description: "Twin side thrusters for precision",
    image: assets.ai.thruster,
  },
  {
    title: "Motion Controller",
    description: "Responsive tethered operation",
    image: assets.ai.controller,
  },
  {
    title: "Cable Reel System",
    description: "Neutrally buoyant tether reel",
    image: assets.ai.cableReel,
  },
  {
    title: "Real-Time Control",
    description: "Low-latency video monitor",
    image: assets.ai.controlScreen,
  },
];

export function Capabilities() {
  return (
    <AnimatedSection
      id="capabilities"
      className="relative border-t border-white/[0.04] bg-[#020711] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mb-10">
          <SectionLabel>Capabilities</SectionLabel>
          <SectionTitle>
            Engineered for
            <br />
            <span className="text-[#9ca8b8]">Deep Operations</span>
          </SectionTitle>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <FadeIn key={cap.title} index={i}>
              <TiltCard className={`${glassCardClass} lux-tile group h-full overflow-hidden`}>
                <div className="relative aspect-[16/9] overflow-hidden bg-[#030b14]">
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020711]/60 to-transparent" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-[#5eebff]/[0.07] to-transparent" />
                  <span className="absolute left-4 top-4 font-mono text-[11px] font-medium tracking-wider text-[#5eebff]/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[15px] font-medium tracking-tight text-white">
                      {cap.title}
                    </h3>
                    <span className="translate-x-2 text-[#5eebff] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      →
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#9ca8b8]">
                    {cap.description}
                  </p>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
