"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ClientOnly } from "@/components/ui/ClientOnly";

type Bubble = {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
};

function generateBubbles(count: number): Bubble[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 6,
    duration: Math.random() * 8 + 10,
  }));
}

function BubbleField({ count }: { count: number }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(generateBubbles(count));
  }, [count]);

  if (bubbles.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {bubbles.map((b) => (
        <motion.span
          key={b.id}
          className="absolute bottom-0 rounded-full bg-[#5eebff]/60"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            boxShadow: `0 0 ${b.size * 3}px rgba(94,235,255,0.35)`,
          }}
          initial={false}
          animate={{ y: "-110vh", opacity: [0, 0.5, 0.35, 0] }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export function OceanParticles({ count = 40 }: { count?: number }) {
  return (
    <ClientOnly>
      <BubbleField count={count} />
    </ClientOnly>
  );
}
