"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils/cn";

export function EditorialPause({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-ivory py-24 md:py-36 lg:py-44",
        className,
      )}
    >
      <div className="lux-editorial-haze pointer-events-none absolute inset-0" aria-hidden />
      <div className="lux-editorial-glow pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl px-4 text-center">
          <p className="font-serif text-[1.65rem] leading-[1.45] tracking-[-0.03em] text-forest/90 md:text-4xl md:leading-[1.35] lg:text-[2.75rem]">
            Scientific precision.
            <br />
            <span className="text-forest/45">Strategic clarity.</span>
            <br />
            <span className="text-forest/75">Better outcomes.</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
