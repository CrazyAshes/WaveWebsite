"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useHydrated } from "@/hooks/useHydrated";

const MAX_DEPTH = 100;
const TICKS = [0, 25, 50, 75, 100];

/** Fixed depth gauge that fills 0 → 100m as the page scrolls — echoes the 100m spec. */
export function DepthGauge() {
  const hydrated = useHydrated();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 22, restDelta: 0.001 });
  const fillHeight = useTransform(smooth, [0, 1], ["0%", "100%"]);
  const depthValue = useTransform(smooth, [0, 1], [0, MAX_DEPTH]);
  const [depth, setDepth] = useState(0);

  useMotionValueEvent(depthValue, "change", (v) => {
    setDepth(Math.round(v));
  });

  if (!hydrated) return null;

  return (
    <div
      className="pointer-events-none fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center lg:flex"
      aria-hidden
    >
      <span className="mb-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#5eebff]/70">
        Depth
      </span>
      <div className="relative h-56 w-px bg-[#5eebff]/15">
        {/* Filled column */}
        <motion.div
          className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-[#5eebff] to-[#5eebff]/40"
          style={{ height: fillHeight }}
        />
        {/* Tick marks */}
        {TICKS.map((t) => (
          <div
            key={t}
            className="absolute left-1/2 flex -translate-x-1/2 items-center"
            style={{ top: `${t}%` }}
          >
            <span className="h-px w-2 bg-[#5eebff]/30" />
            <span className="ml-1.5 text-[8px] font-mono tabular-nums text-[#5eebff]/40">
              {t}
            </span>
          </div>
        ))}
        {/* Travelling marker + live readout */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ top: fillHeight }}
        >
          <span className="block h-2 w-2 rounded-full bg-[#5eebff] shadow-[0_0_10px_rgba(94,235,255,0.9)]" />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] tabular-nums text-[#5eebff]">
            {depth}m
          </span>
        </motion.div>
      </div>
    </div>
  );
}
