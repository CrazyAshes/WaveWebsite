"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { useHydrated } from "@/hooks/useHydrated";

const navLinks = [
  { label: "Product", href: "#products" },
  { label: "Mission", href: "#mission" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Applications", href: "#applications" },
  { label: "Documents", href: "#documents" },
  { label: "Team", href: "#team" },
];

export function Navbar() {
  const hydrated = useHydrated();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={hydrated ? { y: -80, opacity: 0 } : false}
        animate={hydrated ? { y: 0, opacity: 1 } : false}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.06] bg-[#020711]/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="transition-opacity hover:opacity-80">
            <Logo variant="nav" />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-[#9ca8b8] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#products"
              className="rounded-full bg-[#5eebff] px-5 py-2 text-[13px] font-medium text-[#020711] transition-all hover:shadow-[0_0_24px_rgba(94,235,255,0.3)]"
            >
              Shark Series
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#020711]/97 backdrop-blur-xl lg:hidden"
          >
            <Logo variant="footer" className="mb-10" />
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-medium text-white/80"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#products"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-full bg-[#5eebff] px-8 py-3 text-sm font-medium text-[#020711]"
              >
                Shark Series
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
