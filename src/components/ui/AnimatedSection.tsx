"use client";

import { motion } from "framer-motion";
import { useHydrated } from "@/hooks/useHydrated";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function AnimatedSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  index = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
}) {
  const hydrated = useHydrated();

  return (
    <motion.div
      className={className}
      initial={hydrated ? "hidden" : false}
      whileInView={hydrated ? "visible" : undefined}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      variants={fadeUp}
      custom={index + delay}
    >
      {children}
    </motion.div>
  );
}

export const glassCardClass =
  "rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(94,235,255,0.08),0_8px_32px_rgba(0,0,0,0.3)]";

export function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`${glassCardClass} ${className}`}>{children}</div>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.32em] text-[#5eebff]">
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.08] ${className}`}
    >
      {children}
    </h2>
  );
}

export function PrimaryButton({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-[#5eebff] text-[#020711] hover:shadow-[0_0_32px_rgba(94,235,255,0.35)] hover:brightness-110"
      : "border border-white/15 bg-white/[0.04] text-white backdrop-blur-sm hover:border-[#5eebff]/40 hover:text-[#5eebff] hover:shadow-[0_0_24px_rgba(94,235,255,0.12)]";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
