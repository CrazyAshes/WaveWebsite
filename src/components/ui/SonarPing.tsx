"use client";

import { motion } from "framer-motion";
import { useHydrated } from "@/hooks/useHydrated";

/** Periodic sonar rings expanding outward — evokes active acoustic scanning. */
export function SonarPing({
  count = 3,
  duration = 4.5,
  className = "",
}: {
  count?: number;
  duration?: number;
  className?: string;
}) {
  const hydrated = useHydrated();
  if (!hydrated) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden mix-blend-screen ${className}`}
      aria-hidden
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute aspect-square w-[34%] rounded-full border border-[#5eebff]/50"
          style={{ boxShadow: "0 0 22px rgba(94,235,255,0.3)" }}
          initial={{ scale: 0.25, opacity: 0 }}
          animate={{ scale: [0.25, 2.4], opacity: [0, 0.6, 0] }}
          transition={{
            duration,
            delay: (i * duration) / count,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
