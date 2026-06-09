"use client";

import {
  AnimatedSection,
  FadeIn,
  SectionLabel,
} from "@/components/ui/AnimatedSection";

const team = [
  { name: "Sam Liu", role: "Project Lead" },
  { name: "Daniel Shen", role: "Hardware Lead" },
  { name: "Katie Hu", role: "Software Lead" },
  { name: "Peter Zhan", role: "Business Development" },
  { name: "Monica Yang", role: "Operations" },
  { name: "Alex Xiao", role: "Marketing" },
];

export function Team() {
  return (
    <AnimatedSection
      id="team"
      className="relative border-t border-white/[0.04] bg-[#030b14] py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mb-8">
          <SectionLabel>Team</SectionLabel>
          <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
            Built by the WAVE Team
          </h2>
        </FadeIn>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {team.map((member, i) => (
            <FadeIn key={member.name} index={i}>
              <div className="text-center">
                <div className="mx-auto mb-2.5 flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-xs font-medium text-[#9ca8b8]">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-sm font-medium text-white">{member.name}</h3>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#9ca8b8]">
                  {member.role}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
