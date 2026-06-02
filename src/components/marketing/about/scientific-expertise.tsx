"use client";

import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { expertiseAreas } from "@/lib/data/about-content";

export function ScientificExpertise() {
  return (
    <section className="relative overflow-hidden bg-forest py-16 text-white md:py-24">
      <Image
        src="/images/about/expertise.jpg"
        alt=""
        fill
        className="object-cover opacity-25"
        sizes="100vw"
        aria-hidden
      />
      <div className="lux-noise pointer-events-none absolute inset-0 opacity-90" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-forest-dark/35 via-transparent to-forest-dark/80"
        aria-hidden
      />

      <Container className="relative">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/90">
            Scientific expertise
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
            Therapeutic and lifecycle depth in ophthalmology
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
            From retina and rare disease to gene therapy and commercial readiness, our
            team connects mechanism to evidence, evidence to strategy, and strategy to
            outcomes.
          </p>
        </Reveal>

        <StaggerChildren className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area) => (
            <StaggerItem key={area.title}>
              <div className="lux-glass group rounded-2xl p-7">
                <div className="flex items-center gap-4">
                  <span className="lux-ring inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/6 p-3 text-cyan-glow">
                    <area.icon className="size-5 shrink-0" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      Capability
                    </p>
                    <h3 className="mt-1 font-serif text-xl text-white">
                      {area.title}
                    </h3>
                  </div>
                </div>
                <div
                  className="pointer-events-none mt-6 h-px w-full bg-white/10"
                  aria-hidden
                />
                <p className="mt-5 text-sm leading-relaxed text-white/75">
                  Evidence strategy, endpoints, and cross-functional alignment designed for
                  ophthalmic programs.
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="pointer-events-none absolute -right-28 top-16 h-72 w-72 rounded-full bg-cyan-glow/10 blur-3xl" />
      </Container>
    </section>
  );
}

