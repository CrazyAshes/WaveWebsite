"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ClientOnly } from "@/components/ui/ClientOnly";

type Mote = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
};

function generate(count: number): Mote[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 14,
    duration: Math.random() * 16 + 20,
    drift: (Math.random() - 0.5) * 30,
  }));
}

function Field({ count }: { count: number }) {
  const [motes, setMotes] = useState<Mote[]>([]);

  useEffect(() => {
    setMotes(generate(count));
  }, [count]);

  if (motes.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden opacity-50"
      aria-hidden
    >
      {motes.map((m) => (
        <motion.span
          key={m.id}
          className="absolute rounded-full bg-[#9fdcff]"
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            width: m.size,
            height: m.size,
          }}
          initial={false}
          animate={{
            y: [0, -60, 0],
            x: [0, m.drift, 0],
            opacity: [0, 0.35, 0],
          }}
          transition={{
            duration: m.duration,
            delay: m.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/** Page-wide faint drifting motes — a thin "submerged" layer over every section. */
export function AmbientParticles({ count = 26 }: { count?: number }) {
  return (
    <ClientOnly>
      <Field count={count} />
    </ClientOnly>
  );
}
