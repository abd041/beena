"use client";

import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { engagementSteps } from "@/lib/data/about-content";

export function EngagementProcess() {
  return (
    <Section variant="light" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-ivory via-neutral-50 to-white" aria-hidden />
      <Container className="relative">
        <SectionHeader
          eyebrow="Engagement process"
          title="A high-touch workflow built for speed and rigor"
          description="A clear sequence that aligns science, regulation, access, and launch — tailored to the stage and risk profile of your ophthalmic program."
          align="left"
        />

        <StaggerChildren className="mt-14 grid gap-6 lg:grid-cols-5">
          {engagementSteps.map((step, i) => (
            <StaggerItem key={step.title} className="h-full">
              <article className="card-hover-lift h-full rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Step {i + 1}
                  </p>
                  <CheckCircle2 className="h-5 w-5 text-forest/50" aria-hidden />
                </div>
                <h3 className="mt-4 font-serif text-lg text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
                <div className="mt-6 h-px w-full bg-neutral-100" aria-hidden />
                <div className="mt-6 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                  <p className="text-xs text-muted">
                    Executive-ready outputs
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <Reveal delay={0.08} className="mt-14">
          <div className="rounded-3xl border border-neutral-200/70 bg-forest px-8 py-10 text-white shadow-lg">
            <h3 className="font-serif text-2xl">Built to integrate with your team</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
              We embed alongside R&amp;D, regulatory, medical, and commercial leadership
              — providing senior direction, crisp governance, and deliverables that keep
              your program moving.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

