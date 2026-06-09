"use client";

import { FadeIn } from "@/components/ui/AnimatedSection";
import {
  IconCamera,
  IconDepth,
  IconLED,
  IconVideo,
} from "@/components/ui/Icons";

const stats = [
  { value: "100m", label: "Diving Depth", icon: IconDepth },
  { value: "1080P", label: "Camera System", icon: IconCamera },
  { value: "Real-Time", label: "Video Control", icon: IconVideo },
  { value: "LED", label: "Light System", icon: IconLED },
];

export function StatsStrip() {
  return (
    <div className="relative z-20 border-y border-white/[0.06] bg-[#030b14]/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/[0.06] md:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} index={i}>
            <div className="flex items-center gap-4 px-6 py-5 md:px-8 md:py-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#5eebff]/20 bg-[#5eebff]/[0.06] text-[#5eebff]">
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-medium text-white md:text-xl">
                  {stat.value}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9ca8b8]">
                  {stat.label}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
