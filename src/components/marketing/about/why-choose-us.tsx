import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { whyChoose } from "@/lib/data/about-content";

export function WhyChooseUs() {
  return (
    <Section variant="forest" className="relative overflow-hidden">
      <Image
        src="/images/about/why-choose.jpg"
        alt=""
        fill
        className="object-cover opacity-25"
        sizes="100vw"
        aria-hidden
      />
      <div className="lux-noise pointer-events-none absolute inset-0 opacity-90" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-forest-dark/25 via-transparent to-forest-dark/70"
        aria-hidden
      />

      <Container className="relative">
        <SectionHeader
          eyebrow="Why sponsors choose us"
          title="Senior ophthalmic expertise, built for execution"
          description="A luxury advisory experience grounded in ophthalmology — designed to accelerate decisions across development, regulation, access, and commercialization."
          align="left"
          light
        />

        <StaggerChildren className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => (
            <StaggerItem key={item.title}>
              <article className="lux-glass group card-hover-lift rounded-2xl p-7">
                <div className="flex items-start gap-4">
                  <span className="lux-ring inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/6 p-3 text-gold">
                    <item.icon className="size-5 shrink-0" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div
                  className="pointer-events-none mt-6 h-px w-full bg-white/10"
                  aria-hidden
                />
                <div className="pointer-events-none mt-6 h-1.5 w-1.5 rounded-full bg-cyan-glow/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <Reveal delay={0.1} className="mt-14">
          <div className="lux-glass rounded-2xl p-7 md:p-10">
            <p className="text-sm text-white/70">
              Built for leaders who value precision. We deliver board-ready narratives,
              defensible regulatory strategy, and launch alignment — without the friction
              of layered consulting teams.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

