"use client";

import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { globalRegions } from "@/lib/data/about-content";
import { cn } from "@/lib/utils/cn";

function WorldMap({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl border border-white/10 bg-white/5", className)}>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-white/5" aria-hidden />
      <svg
        viewBox="0 0 100 60"
        className="h-full w-full"
        role="img"
        aria-label="Global reach map"
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(70,242,213,0.55)" />
            <stop offset="70%" stopColor="rgba(70,242,213,0)" />
          </radialGradient>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(217,181,109,0.55)" />
            <stop offset="60%" stopColor="rgba(70,242,213,0.55)" />
            <stop offset="100%" stopColor="rgba(217,181,109,0.3)" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="100" height="60" fill="transparent" />

        {/* Abstract “continents” */}
        <path
          d="M9 22 C18 10, 30 12, 34 18 C36 22, 33 26, 26 28 C18 30, 12 30, 9 22 Z"
          fill="rgba(255,255,255,0.10)"
        />
        <path
          d="M38 20 C45 14, 56 14, 62 19 C66 23, 62 28, 54 30 C46 32, 40 28, 38 20 Z"
          fill="rgba(255,255,255,0.10)"
        />
        <path
          d="M62 24 C69 19, 82 19, 90 26 C93 29, 89 34, 80 36 C71 38, 64 33, 62 24 Z"
          fill="rgba(255,255,255,0.10)"
        />
        <path
          d="M52 36 C56 34, 64 35, 66 40 C67 44, 62 47, 56 48 C50 49, 48 41, 52 36 Z"
          fill="rgba(255,255,255,0.08)"
        />

        {/* Connection lines */}
        <path
          d="M26 42 C34 36, 42 33, 53 32"
          stroke="url(#line)"
          strokeWidth="0.4"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M53 32 C60 32, 67 36, 76 46"
          stroke="url(#line)"
          strokeWidth="0.4"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M53 32 C58 38, 60 44, 58 58"
          stroke="url(#line)"
          strokeWidth="0.35"
          fill="none"
          opacity="0.6"
        />

        {/* Nodes */}
        {globalRegions.map((r) => (
          <g key={r.label}>
            <circle cx={r.x} cy={r.y} r="5.5" fill="url(#glow)" opacity="0.9" />
            <circle cx={r.x} cy={r.y} r="1.2" fill="rgba(70,242,213,0.95)" />
          </g>
        ))}
      </svg>

      <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-4">
        {globalRegions.map((r) => (
          <span
            key={r.label}
            className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-medium text-white/80"
          >
            {r.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function GlobalNetwork() {
  return (
    <section className="relative overflow-hidden bg-forest-dark py-16 text-white md:py-24">
      <Image
        src="/images/about/network.jpg"
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="100vw"
        aria-hidden
      />
      <div className="lux-noise pointer-events-none absolute inset-0 opacity-95" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-forest-dark/55 via-transparent to-forest-dark/85"
        aria-hidden
      />

      <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/90">
            Global reach
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">
            A partner network built for ophthalmic execution
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            We collaborate with CROs, regulatory specialists, imaging partners, and
            commercialization teams across major markets — connecting diaspora
            expertise and global capabilities to patient impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/80">
              Ophthalmology KOL network
            </span>
            <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/80">
              Imaging + biomarker partners
            </span>
            <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/80">
              Global regulatory coverage
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <WorldMap className="aspect-16/10" />
        </Reveal>
      </Container>
    </section>
  );
}

