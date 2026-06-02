"use client";

import { UserRound } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { leadership } from "@/lib/data/about-content";

export function LeadershipAdvisory() {
  return (
    <Section variant="white" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white via-neutral-50 to-white" aria-hidden />
      <Container className="relative">
        <SectionHeader
          eyebrow="Leadership & advisory"
          title="Senior advisors — not layered consulting teams"
          description="Work directly with seasoned experts across ophthalmic science, global regulation, and commercialization — designed for decision speed and quality."
          align="left"
        />

        <StaggerChildren className="mt-14 grid gap-6 md:grid-cols-3">
          {leadership.map((person) => (
            <StaggerItem key={person.name}>
              <article className="card-hover-lift rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="lux-ring grid h-14 w-14 place-items-center rounded-2xl bg-forest text-gold shadow-[0_18px_60px_rgba(4,17,13,0.35)]">
                    <UserRound className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-neutral-900">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                      {person.role}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  {person.focus}
                </p>
                <div className="mt-6 h-px w-full bg-neutral-100" aria-hidden />
                <p className="mt-5 text-xs text-muted">
                  Headshots available upon request. Advisor identities can be shared
                  under NDA.
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <Reveal delay={0.08} className="mt-14">
          <div className="rounded-3xl border border-neutral-200/70 bg-neutral-50 p-8 md:p-10">
            <p className="text-sm leading-relaxed text-muted md:text-base">
              Need specialist support beyond the core team? We activate a curated
              network of ophthalmology KOLs, imaging and biomarker partners, HEOR
              experts, and regional regulatory specialists — aligned to your program’s
              stage and risk profile.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

