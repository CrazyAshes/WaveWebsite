"use client";

import Image from "next/image";
import {
  AnimatedSection,
  FadeIn,
  SectionLabel,
  SectionTitle,
} from "@/components/ui/AnimatedSection";
import { TiltCard } from "@/components/ui/TiltCard";
import { assets } from "@/lib/assets";

const applications = [
  {
    title: "Ocean Monitoring",
    description: "Collecting real-time ocean data alongside coastal sensor arrays.",
    image: assets.ai.appOceanMonitoring,
  },
  {
    title: "Fishing & Diving",
    description: "Assisting scuba divers with live subsea vision and navigation.",
    image: assets.ai.diving,
  },
  {
    title: "Aquaculture Inspection",
    description: "Inspecting fish-farm net systems and mooring infrastructure.",
    image: assets.ai.appAquaculture,
  },
  {
    title: "Environmental Research",
    description: "Monitoring coral reefs, biodiversity, and marine sensor stations.",
    image: assets.ai.research,
  },
];

export function Applications() {
  return (
    <AnimatedSection
      id="applications"
      className="relative border-t border-white/[0.04] bg-[#020711] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(94,235,255,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mb-14">
          <SectionLabel>Applications</SectionLabel>
          <SectionTitle>
            Built for Every
            <br />
            <span className="text-[#9ca8b8]">Underwater Mission</span>
          </SectionTitle>
          <p className="mt-5 max-w-xl text-body-sm">
            The same WAVE Shark Series drone — white hull, blue LED wings, twin
            thrusters, and front camera dome — deployed across every mission
            profile.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {applications.map((app, i) => (
            <FadeIn key={app.title} index={i}>
              <div className="group relative">
                <div className="tile-halo pointer-events-none absolute -inset-3 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <TiltCard className="lux-tile z-10 aspect-[3/2] overflow-hidden rounded-2xl border border-white/[0.06] bg-[#030b14]">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    quality={90}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020711] via-[#020711]/25 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5eebff]/0 to-[#5eebff]/0 transition-colors duration-500 group-hover:from-[#5eebff]/[0.08]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="h-px w-6 bg-[#5eebff]/60 transition-all duration-300 group-hover:w-14 group-hover:bg-[#5eebff]" />
                    <h3 className="mt-3 text-lg font-medium tracking-tight text-white">
                      {app.title}
                    </h3>
                    <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-[#b8c4d0] md:opacity-0 md:transition-all md:duration-300 md:group-hover:opacity-100">
                      {app.description}
                    </p>
                  </div>
                </TiltCard>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
