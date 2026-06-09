"use client";

import Image from "next/image";
import {
  AnimatedSection,
  FadeIn,
  GlassCard,
  SectionLabel,
  SectionTitle,
} from "@/components/ui/AnimatedSection";
import { DroneSpotlight } from "@/components/ui/DroneSpotlight";
import { assets } from "@/lib/assets";

const pillars = [
  {
    title: "Pollution Awareness",
    image: assets.ai.pollution,
  },
  {
    title: "Ocean Monitoring",
    image: assets.ai.oceanMonitoring,
  },
  {
    title: "Aquaculture Protection",
    image: assets.ai.aquaculture,
  },
  {
    title: "Accessible Technology",
    image: assets.ai.control,
  },
];

export function Mission() {
  return (
    <AnimatedSection
      id="mission"
      className="relative border-t border-white/[0.04] bg-[#030b14] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-2">
            <FadeIn>
              <SectionLabel>Mission</SectionLabel>
              <SectionTitle>
                Ocean Intelligence,
                <br />
                <span className="text-[#5eebff]">Made Accessible</span>
              </SectionTitle>
            </FadeIn>
            <FadeIn index={1}>
              <p className="mt-5 text-body">
                The ocean runs the planet, yet most of it goes unseen. WAVE puts
                a research-grade underwater drone in the hands of the people who
                work on the water every day.
              </p>
              <p className="mt-4 text-body">
                From environmental monitoring and pollution tracking to
                aquaculture net inspection, the Shark Series turns hours of
                guesswork into real-time, on-screen certainty — no dive team
                required.
              </p>
            </FadeIn>
            <FadeIn index={2} className="mt-6 hidden lg:block">
              <DroneSpotlight
                variant="side"
                className="aspect-[16/10] rounded-2xl border border-white/[0.06]"
              />
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:col-span-3">
            {pillars.map((item, i) => (
              <FadeIn key={item.title} index={i}>
                <GlassCard className="lux-tile group overflow-hidden">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020711]/90 via-[#020711]/20 to-transparent" />
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-[#5eebff]/[0.07] to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-sm font-medium text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
