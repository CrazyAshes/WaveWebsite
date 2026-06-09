"use client";

import { motion, type MotionValue } from "framer-motion";
import { useHydrated } from "@/hooks/useHydrated";

type HeroDecorationsProps = {
  glowY?: MotionValue<string>;
};

/** Animated overlays on top of the static hero image — does not replace the plate. */
export function HeroDecorations({ glowY }: HeroDecorationsProps) {
  const hydrated = useHydrated();

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      {/* Soft drifting caustic highlights */}
      <motion.div
        className="absolute left-[12%] top-[30%] h-48 w-72 rounded-full bg-[#5eebff]/[0.06] blur-3xl"
        initial={false}
        animate={
          hydrated
            ? { x: [0, 24, -12, 0], y: [0, -16, 10, 0], opacity: [0.4, 0.7, 0.45, 0.4] }
            : false
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-[22%] h-40 w-56 rounded-full bg-[#7fe9ff]/[0.05] blur-3xl"
        initial={false}
        animate={
          hydrated
            ? { x: [0, -20, 14, 0], y: [0, 12, -8, 0], opacity: [0.35, 0.6, 0.4, 0.35] }
            : false
        }
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Volumetric god rays */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={glowY ? { y: glowY } : undefined}
        initial={hydrated ? { opacity: 0 } : false}
        animate={hydrated ? { opacity: 1 } : false}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <motion.div
          className="absolute -top-1/4 left-[18%] h-[150%] w-40 -rotate-[18deg] bg-gradient-to-b from-[#7fe9ff]/25 via-[#5eebff]/8 to-transparent blur-2xl"
          initial={false}
          animate={hydrated ? { opacity: [0.5, 0.85, 0.5] } : false}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-1/4 left-[44%] h-[150%] w-28 -rotate-[12deg] bg-gradient-to-b from-[#5eebff]/20 via-[#5eebff]/6 to-transparent blur-2xl"
          initial={false}
          animate={hydrated ? { opacity: [0.7, 0.4, 0.7] } : false}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-1/4 left-[66%] h-[150%] w-36 -rotate-[20deg] bg-gradient-to-b from-[#7fe9ff]/22 via-[#5eebff]/6 to-transparent blur-2xl"
          initial={false}
          animate={hydrated ? { opacity: [0.45, 0.8, 0.45] } : false}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Surface shimmer */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[38%] bg-gradient-to-b from-[#7fe9ff]/[0.08] to-transparent"
        initial={false}
        animate={hydrated ? { opacity: [0.35, 0.6, 0.35] } : false}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
