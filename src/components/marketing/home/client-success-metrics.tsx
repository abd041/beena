"use client";

import { Container } from "@/components/layout/container";
import { CinematicAtmosphere } from "@/components/marketing/lux/cinematic-atmosphere";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedStat } from "@/components/marketing/lux/animated-stat";
import { impactMetrics, impactMetricsHome } from "@/lib/data/about-content";
import { cn } from "@/lib/utils/cn";

export function ClientSuccessMetrics({
  variant = "dashboard",
}: {
  variant?: "dashboard" | "minimal";
}) {
  const isMinimal = variant === "minimal";
  const metrics = isMinimal ? impactMetricsHome : impactMetrics;

  return (
    <section
      className={cn(
        "relative overflow-hidden text-white",
        isMinimal ? "lux-section-y-tight bg-forest" : "bg-forest-dark py-16 md:py-24",
      )}
    >
      {isMinimal && (
        <CinematicAtmosphere mood="neutral" intensity="soft" vignette={false} />
      )}

      <Container className="relative">
        <Reveal className={isMinimal ? "max-w-lg" : "mx-auto max-w-2xl text-center"}>
          <p className="lux-eyebrow">Enterprise impact</p>
          <h2
            className={cn(
              "lux-heading mt-6",
              isMinimal ? "text-3xl md:text-[2.5rem]" : "text-3xl md:text-4xl",
            )}
          >
            {isMinimal ? (
              <>
                Outcomes that speak
                <br />
                <span className="text-white/50">to institutional partners</span>
              </>
            ) : (
              "Enterprise impact across ophthalmic innovation"
            )}
          </h2>
        </Reveal>

        <div
          className={
            isMinimal
              ? "mt-24 grid gap-20 sm:grid-cols-2 lg:mt-32 lg:grid-cols-4 lg:gap-0"
              : "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
          }
        >
          {metrics.map((metric, i) => (
            <Reveal
              key={metric.label}
              delay={i * 0.1}
              className={
                isMinimal
                  ? "text-center lg:border-l lg:border-white/[0.06] lg:px-12 first:lg:border-l-0 first:lg:pl-0"
                  : undefined
              }
            >
              {isMinimal ? (
                <div>
                  <p
                    className="lux-stat-value text-[3.25rem] md:text-6xl lg:text-[4.75rem] lg:leading-none"
                    aria-label={`${metric.value}${metric.suffix} ${metric.label}`}
                  >
                    <AnimatedStat value={metric.value} suffix={metric.suffix} />
                  </p>
                  <div
                    className="mx-auto mt-8 h-px w-6 bg-linear-to-r from-transparent via-gold/35 to-transparent lg:mx-0 lg:via-gold/35"
                    aria-hidden
                  />
                  <p className="mx-auto mt-6 max-w-[12rem] text-[12px] leading-[1.7] tracking-[0.04em] text-white/48 lg:mx-0">
                    {metric.label}
                  </p>
                </div>
              ) : (
                <article className="lux-glass lux-card-glow rounded-2xl p-6 text-center lg:text-left">
                  <p className="lux-stat-value text-4xl md:text-[2.75rem]">
                    <AnimatedStat value={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className="mt-4 text-sm text-white/60">{metric.label}</p>
                </article>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
