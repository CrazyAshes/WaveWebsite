"use client";

import { motion } from "framer-motion";
import { useHydrated } from "@/hooks/useHydrated";

/** Small gauge ring that sweeps from empty to `progress` when scrolled into view. */
export function StatRing({
  progress = 1,
  size = 34,
}: {
  progress?: number;
  size?: number;
}) {
  const hydrated = useHydrated();
  const r = (size - 4) / 2;
  const circumference = 2 * Math.PI * r;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="-rotate-90"
      aria-hidden
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(94,235,255,0.12)"
        strokeWidth="2"
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="#5eebff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={hydrated ? { strokeDashoffset: circumference } : false}
        whileInView={
          hydrated
            ? { strokeDashoffset: circumference * (1 - progress) }
            : undefined
        }
        viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
    </svg>
  );
}
