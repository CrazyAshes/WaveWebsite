"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { PrimaryButton } from "@/components/ui/AnimatedSection";
import { HeroDecorations } from "@/components/ui/HeroDecorations";
import { OceanParticles } from "@/components/ui/OceanParticles";
import { MarineSnow } from "@/components/ui/MarineSnow";
import { Caustics } from "@/components/ui/Caustics";
import { SonarPing } from "@/components/ui/SonarPing";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { assets } from "@/lib/assets";
import { useHydrated } from "@/hooks/useHydrated";

export function Hero() {
  const hydrated = useHydrated();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const droneY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Scroll hint fades out as soon as the user starts scrolling.
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // Pointer parallax — glow and drone drift opposite the cursor for depth.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spring = { stiffness: 60, damping: 18 };
  const glowX = useSpring(useTransform(pointerX, [-0.5, 0.5], [22, -22]), spring);
  const glowPY = useSpring(useTransform(pointerY, [-0.5, 0.5], [22, -22]), spring);
  const droneX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-14, 14]), spring);

  const handlePointer = (e: React.MouseEvent<HTMLElement>) => {
    if (!hydrated) return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <>
      <section
        ref={ref}
        onMouseMove={handlePointer}
        className="relative flex min-h-screen items-center overflow-hidden bg-[#020711]"
      >
        {/* Ambient lighting plate — left half only on desktop */}
        <div className="absolute inset-0 overflow-hidden lg:w-[54%]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(20,70,120,0.5),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020711]/50 via-[#020711]/75 to-[#020711]" />
          <div className="absolute inset-y-0 right-0 hidden w-28 bg-gradient-to-r from-transparent to-[#020711] lg:block" />
        </div>

        <Caustics className="z-[1]" />
        <HeroDecorations glowY={hydrated ? glowY : undefined} />
        <MarineSnow />
        <OceanParticles count={72} />

        <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_55%,rgba(2,7,17,0.7)_100%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 pb-14 lg:px-8 lg:pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={hydrated ? { opacity: 0, y: 28 } : false}
              animate={hydrated ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#5eebff]">
                Shark Series · Marine Robotics
              </p>
              <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-[3.5rem] lg:text-6xl">
                Explore the
                <br />
                <span className="text-[#5eebff]">Future of Blue</span>
              </h1>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[#b8c4d0] md:text-base">
                The WAVE Shark Series is a tethered underwater drone that streams
                real-time 1080P vision to 100 meters — research-grade ocean
                intelligence, simple enough to launch from a dock.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="#products">
                  Explore Shark Series
                </PrimaryButton>
                <PrimaryButton href="#mission" variant="ghost">
                  Our Mission
                </PrimaryButton>
              </div>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-xl lg:max-w-none"
              style={hydrated ? { y: droneY, x: droneX } : undefined}
              initial={hydrated ? { opacity: 0, scale: 0.92 } : false}
              animate={hydrated ? { opacity: 1, scale: 1 } : false}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="absolute inset-[6%] rounded-full bg-[#5eebff]/30 blur-[80px]"
                style={hydrated ? { x: glowX, y: glowPY } : undefined}
                initial={false}
                animate={
                  hydrated ? { opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] } : false
                }
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-x-[12%] bottom-[8%] h-24 rounded-full bg-[#5eebff]/20 blur-[55px]" />

              <motion.div
                className="relative z-10 aspect-[16/10] w-full scale-[1.08] sm:scale-110"
                initial={false}
                animate={hydrated ? { y: [0, -14, 0] } : false}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={assets.ai.productFrontHero}
                  alt="WAVE Shark Series underwater drone"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_60px_rgba(94,235,255,0.35)]"
                  sizes="(max-width: 1024px) 90vw, 50vw"
                />
                <SonarPing className="z-20" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
          style={hydrated ? { opacity: scrollHintOpacity } : undefined}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={hydrated ? { opacity: 0 } : false}
            animate={hydrated ? { opacity: 1, y: [0, 7, 0] } : false}
            transition={{
              opacity: { delay: 1.2, duration: 1 },
              y: { duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#5eebff]/70">
              Scroll
            </span>
            <div className="flex h-9 w-5 items-start justify-center rounded-full border border-[#5eebff]/30 p-1">
              <motion.div
                className="h-1.5 w-1 rounded-full bg-[#5eebff]"
                initial={false}
                animate={hydrated ? { y: [0, 10, 0], opacity: [1, 0.2, 1] } : false}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="-mt-0.5 flex flex-col items-center">
              {[0, 1].map((i) => (
                <motion.svg
                  key={i}
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  className="-mt-1 text-[#5eebff]"
                  initial={false}
                  animate={hydrated ? { opacity: [0.15, 0.85, 0.15], y: [0, 3, 0] } : false}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.22,
                  }}
                >
                  <path
                    d="M1 1l5 4 5-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <StatsStrip />
    </>
  );
}
