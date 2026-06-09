"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useHydrated } from "@/hooks/useHydrated";

/** 3D tilt-toward-cursor wrapper with a sheen highlight that tracks the pointer. */
export function TiltCard({
  children,
  className = "",
  max = 7,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const hydrated = useHydrated();
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const hover = useMotionValue(0);

  const sx = useSpring(px, { stiffness: 150, damping: 18 });
  const sy = useSpring(py, { stiffness: 150, damping: 18 });
  const sHover = useSpring(hover, { stiffness: 200, damping: 25 });

  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const sheenX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const sheenY = useTransform(sy, [0, 1], ["0%", "100%"]);
  const sheenOpacity = useTransform(sHover, [0, 1], [0, 0.16]);
  const sheen = useMotionTemplate`radial-gradient(180px circle at ${sheenX} ${sheenY}, rgba(94,235,255,${sheenOpacity}), transparent 65%)`;

  if (!hydrated) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => hover.set(1)}
      onMouseLeave={() => {
        hover.set(0);
        px.set(0.5);
        py.set(0.5);
      }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`relative ${className}`}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[30] rounded-[inherit]"
        style={{ background: sheen }}
        aria-hidden
      />
    </motion.div>
  );
}
