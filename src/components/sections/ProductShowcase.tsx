"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  FadeIn,
  PrimaryButton,
  SectionLabel,
} from "@/components/ui/AnimatedSection";
import { assets } from "@/lib/assets";
import {
  PRODUCT_RENDER_HEIGHT,
  PRODUCT_RENDER_WIDTH,
  getLabelLineOrigin,
  parsePercent,
  productHotspots,
} from "@/lib/productHotspots";
import { useHydrated } from "@/hooks/useHydrated";

const systemParts = ["Cable Reel", "Motion Controller", "Video Control"];

function HotspotCard({
  title,
  description,
  active,
}: {
  title: string;
  description: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border px-3 py-2 backdrop-blur-md transition-all duration-300 sm:px-3.5 sm:py-2.5 ${
        active
          ? "border-[#5eebff]/60 shadow-[0_0_28px_rgba(94,235,255,0.35),0_8px_32px_rgba(0,0,0,0.5)]"
          : "border-[#5eebff]/20 shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
      }`}
      style={{ background: "rgba(5, 12, 22, 0.92)" }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white sm:text-[11px]">
        {title}
      </p>
      <p className="mt-0.5 text-[10px] leading-snug text-[#c8d4e0] sm:text-[11px]">
        {description}
      </p>
    </div>
  );
}

function HotspotOverlay({
  activeId,
  onHover,
}: {
  activeId: string | null;
  onHover: (id: string | null) => void;
}) {
  const hydrated = useHydrated();

  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      {/* Component highlight halos */}
      {productHotspots.map((h) => {
        const active = activeId === h.id;
        return (
          <motion.div
            key={`glow-${h.id}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              top: h.highlight.top,
              left: h.highlight.left,
              width: h.highlight.size,
              height: h.highlight.size,
            }}
            initial={false}
            animate={
              hydrated
                ? { opacity: active ? 1 : 0, scale: active ? 1 : 0.85 }
                : false
            }
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-full w-full rounded-full bg-[#5eebff]/[0.12] blur-md" />
            <div className="absolute inset-[18%] rounded-full border border-[#5eebff]/30 bg-[#5eebff]/[0.06]" />
          </motion.div>
        );
      })}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {productHotspots.map((h) => {
          const origin = getLabelLineOrigin(h);
          const dotX = parsePercent(h.dotPosition.left) * 100;
          const dotY = parsePercent(h.dotPosition.top) * 100;
          const active = activeId === h.id;
          return (
            <line
              key={`line-${h.id}`}
              x1={origin.x * 100}
              y1={origin.y * 100}
              x2={dotX}
              y2={dotY}
              stroke="#5eebff"
              strokeWidth={active ? 0.35 : 0.25}
              strokeOpacity={active ? 1 : 0.8}
              vectorEffect="non-scaling-stroke"
              className="transition-all duration-300"
              style={{
                filter: active ? "drop-shadow(0 0 4px rgba(94,235,255,0.9))" : undefined,
              }}
            />
          );
        })}
      </svg>

      {productHotspots.map((h) => {
        const active = activeId === h.id;
        return (
          <motion.div
            key={`dot-${h.id}`}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ top: h.dotPosition.top, left: h.dotPosition.left }}
            initial={false}
            animate={
              hydrated
                ? active
                  ? { scale: [1, 1.35, 1] }
                  : { scale: 1 }
                : false
            }
            transition={
              active
                ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.2 }
            }
          >
            <div
              className={`h-2.5 w-2.5 rounded-full border-2 border-[#5eebff] bg-[#5eebff]/60 ${
                active ? "shadow-[0_0_16px_rgba(94,235,255,0.95)]" : "shadow-[0_0_10px_rgba(94,235,255,0.55)]"
              }`}
            />
          </motion.div>
        );
      })}

      {productHotspots.map((h, i) => (
        <motion.div
          key={`label-${h.id}`}
          className={`pointer-events-auto absolute z-20 max-w-[9.5rem] sm:max-w-[10.5rem] ${
            h.labelPosition.right ? "text-right" : ""
          }`}
          style={{
            top: h.labelPosition.top,
            left: h.labelPosition.left,
            right: h.labelPosition.right,
          }}
          initial={hydrated ? { opacity: 0, y: 6 } : false}
          animate={hydrated ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.4, delay: 0.06 + i * 0.05 }}
          onMouseEnter={() => onHover(h.id)}
          onMouseLeave={() => onHover(null)}
        >
          <HotspotCard
            title={h.title}
            description={h.description}
            active={activeId === h.id}
          />
        </motion.div>
      ))}
    </div>
  );
}

function MobileFeatureList({ className = "" }: { className?: string }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {productHotspots.map((h) => (
        <li
          key={h.id}
          className="rounded-xl border border-white/[0.08] px-4 py-3 backdrop-blur-sm"
          style={{ background: "rgba(5, 12, 22, 0.92)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white">
            {h.title}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-[#c8d4e0]">
            {h.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

function ProductImageFrame({
  alt,
  sizes,
  priority = false,
  showHotspots = false,
  activeId,
  onHover,
  enlarged = false,
}: {
  alt: string;
  sizes: string;
  priority?: boolean;
  showHotspots?: boolean;
  activeId?: string | null;
  onHover?: (id: string | null) => void;
  enlarged?: boolean;
}) {
  const pad = showHotspots
    ? "inset-7 sm:inset-9"
    : enlarged
      ? "inset-1 sm:inset-2"
      : "inset-0";

  return (
    <div className={`absolute flex items-center justify-center ${pad}`}>
      <div
        className="relative h-full w-full"
        style={{ aspectRatio: `${PRODUCT_RENDER_WIDTH} / ${PRODUCT_RENDER_HEIGHT}` }}
      >
        <Image
          src={assets.ai.productRender}
          alt={alt}
          fill
          priority={priority}
          quality={95}
          className="object-contain drop-shadow-[0_20px_60px_rgba(94,235,255,0.2)]"
          sizes={sizes}
        />
        {showHotspots && onHover && (
          <HotspotOverlay activeId={activeId ?? null} onHover={onHover} />
        )}
      </div>
    </div>
  );
}

function ProductLightbox({
  open,
  onClose,
  activeId,
  onHover,
}: {
  open: boolean;
  onClose: () => void;
  activeId: string | null;
  onHover: (id: string | null) => void;
}) {
  const [mounted, setMounted] = useState(false);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, handleKey]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key="product-lightbox"
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-[#020711]/92 backdrop-blur-lg" />

          <motion.div
            className="relative w-full max-w-6xl"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-[#5eebff]/30 bg-[#030b14] shadow-[0_0_100px_rgba(94,235,255,0.15)]"
              style={{ aspectRatio: `${PRODUCT_RENDER_WIDTH} / ${PRODUCT_RENDER_HEIGHT}` }}
            >
              <div className="product-glow absolute inset-0 opacity-80" />
              <ProductImageFrame
                alt="WAVE Shark Series underwater drone enlarged"
                sizes="(max-width: 1280px) 95vw, 1152px"
                priority
                showHotspots
                enlarged
                activeId={activeId}
                onHover={onHover}
              />
            </div>

            <p className="mt-3 hidden text-center text-[11px] tracking-wide text-[#9ca8b8] md:block">
              Hover hotspots to explore Shark Series anatomy
            </p>
            <MobileFeatureList className="mt-4 md:hidden" />

            <button
              type="button"
              onClick={onClose}
              className="absolute -right-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#030b14] text-white/70 transition-colors hover:border-[#5eebff]/40 hover:text-white sm:-right-3 sm:-top-3"
              aria-label="Close"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export function ProductShowcase() {
  const hydrated = useHydrated();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="products" className="relative overflow-hidden bg-[#020711] py-24 md:py-32">
      <div className="absolute inset-0 premium-gradient opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_75%_50%,rgba(94,235,255,0.06),transparent_70%)]" />

      <ProductLightbox
        open={lightboxOpen}
        onClose={() => {
          setLightboxOpen(false);
          setActiveId(null);
        }}
        activeId={activeId}
        onHover={setActiveId}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <SectionLabel>Shark Series</SectionLabel>
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              The Shark.
              <br />
              <span className="text-[#5eebff]">Engineered to dive.</span>
            </h2>
            <p className="mt-6 max-w-md text-body">
              A hydrodynamic manta-wing hull wrapped around a front camera dome,
              twin cylindrical thrusters, and blue LED navigation strips. Every
              surface is shaped for stable, precise movement through open water.
            </p>

            <div className="mt-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9ca8b8]">
                Complete System
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {systemParts.map((part) => (
                  <span
                    key={part}
                    className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-xs text-[#b8c4d0]"
                  >
                    {part}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="#capabilities">Product View</PrimaryButton>
              <PrimaryButton href="#capabilities" variant="ghost">
                Technical Specs
              </PrimaryButton>
            </div>
          </FadeIn>

          <FadeIn index={1}>
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="group relative block w-full cursor-zoom-in text-left"
              aria-label="Enlarge product image with anatomy hotspots"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#030b14]/90 shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-[#5eebff]/35 hover:shadow-[0_24px_80px_rgba(94,235,255,0.12)]">
                <div className="product-glow absolute inset-0" />
                <motion.div
                  className="relative h-full w-full"
                  initial={false}
                  animate={hydrated ? { y: [0, -8, 0] } : false}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ProductImageFrame
                    alt="WAVE Shark Series underwater drone"
                    sizes="(max-width: 1024px) 90vw, 50vw"
                    enlarged
                  />
                </motion.div>

                <div className="absolute bottom-3 right-3 rounded-full border border-[#5eebff]/20 bg-[#020711]/80 px-3 py-1.5 text-[10px] text-[#c8d4e0] opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  Click to explore anatomy
                </div>
              </div>
            </button>

            <MobileFeatureList className="mt-5 md:hidden" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
