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

function generate(count: number, near: boolean): Mote[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: near ? Math.random() * 2.5 + 1.5 : Math.random() * 1.5 + 0.5,
    delay: Math.random() * 12,
    duration: near ? Math.random() * 10 + 16 : Math.random() * 14 + 24,
    drift: (Math.random() - 0.5) * 40,
  }));
}

function Layer({ count, near }: { count: number; near: boolean }) {
  const [motes, setMotes] = useState<Mote[]>([]);

  useEffect(() => {
    setMotes(generate(count, near));
  }, [count, near]);

  if (motes.length === 0) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ filter: near ? "none" : "blur(1.5px)" }}
      aria-hidden
    >
      {motes.map((m) => (
        <motion.span
          key={m.id}
          className="absolute rounded-full bg-[#bfe9ff]"
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            width: m.size,
            height: m.size,
            opacity: near ? 0.5 : 0.28,
          }}
          initial={false}
          animate={{ y: [0, 90, 0], x: [0, m.drift, 0], opacity: near ? [0.5, 0.2, 0.5] : [0.28, 0.1, 0.28] }}
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

/** Drifting marine snow with two parallax depths — slow/blurred far layer, faster near layer. */
export function MarineSnow({ far = 28, near = 16 }: { far?: number; near?: number }) {
  return (
    <ClientOnly>
      <Layer count={far} near={false} />
      <Layer count={near} near={true} />
    </ClientOnly>
  );
}
