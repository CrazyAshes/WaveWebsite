"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useHydrated } from "@/hooks/useHydrated";

/** Thin cyan reading-progress bar pinned to the very top of the viewport. */
export function ScrollProgress() {
  const hydrated = useHydrated();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (!hydrated) return null;

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-[#5eebff]/60 via-[#5eebff] to-[#7fe9ff] shadow-[0_0_10px_rgba(94,235,255,0.6)]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
