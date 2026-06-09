"use client";

import {
  AnimatedSection,
  FadeIn,
  GlassCard,
  SectionTitle,
} from "@/components/ui/AnimatedSection";
import { IconDocument } from "@/components/ui/Icons";

const documents = [
  {
    title: "YES Program Presentation",
    description:
      "Full project presentation covering product design, components, financial plan, and team roles.",
    href: "/documents/YES-Program-WAVE.pdf",
    fileName: "YES-Program-WAVE.pdf",
  },
  {
    title: "HCBC Wave Team Presentation",
    description:
      "Original WAVE team presentation covering mission, product concept, SWOT analysis, target customers, and sustainability.",
    href: "/documents/HCBC-Wave-Team.pdf",
    fileName: "HCBC-Wave-Team.pdf",
  },
];

export function Documents() {
  return (
    <AnimatedSection
      id="documents"
      className="relative border-t border-white/[0.04] bg-[#030b14] py-20 md:py-28"
    >
      <div className="absolute inset-0 premium-gradient opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mb-12 max-w-2xl">
          <SectionTitle>
            Project{" "}
            <span className="text-[#5eebff]">Documents</span>
          </SectionTitle>
          <p className="mt-5 text-body">
            Download the official WAVE presentation materials for the YES Program
            and HCBC project showcase.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {documents.map((doc, i) => (
            <FadeIn key={doc.href} index={i}>
              <GlassCard className="lux-tile group flex h-full flex-col p-6 sm:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#5eebff]/20 bg-[#5eebff]/[0.06] text-[#5eebff] transition-colors duration-300 group-hover:border-[#5eebff]/35 group-hover:bg-[#5eebff]/10">
                  <IconDocument className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-medium tracking-tight text-white sm:text-xl">
                  {doc.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#9ca8b8]">
                  {doc.description}
                </p>

                <a
                  href={doc.href}
                  download={doc.fileName}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#5eebff] px-7 py-3.5 text-sm font-medium text-[#020711] transition-all duration-300 hover:shadow-[0_0_32px_rgba(94,235,255,0.35)] hover:brightness-110 sm:w-auto"
                >
                  Download PDF
                </a>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
