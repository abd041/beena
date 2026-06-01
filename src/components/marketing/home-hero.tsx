"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { heroCopy, HOME_IMAGES } from "@/lib/data/home-content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils/cn";

export function HomeHero() {
  const reduced = useReducedMotion();

  const content = (
    <div className="space-y-8">
      <h1 className="font-serif text-4xl leading-[1.1] md:text-5xl lg:text-[3.25rem]">
        Global <span className="text-gold">Ophthalmic</span> Biotech Advisory
        &amp; Development Partner
      </h1>
      <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
        {heroCopy.subheadline}
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          href="/services"
          className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
        >
          Explore Our Services →
        </Link>
        <Link
          href="/book"
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "gap-2",
          )}
        >
          <Calendar className="h-4 w-4" aria-hidden />
          Schedule a Consultation
        </Link>
      </div>
    </div>
  );

  const visual = (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-xl lg:-mr-8 lg:aspect-[5/4] lg:max-w-none xl:-mr-16">
      <Image
        src={HOME_IMAGES.heroEye}
        alt="Close-up ophthalmic examination representing precision eye care and biotech innovation"
        fill
        priority
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-forest/20 to-forest/80 lg:to-forest/90"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
        <div className="relative h-[72%] w-[72%]">
          <div className="absolute inset-0 rounded-full border border-gold/40" />
          <div className="absolute inset-[12%] rounded-full border border-dashed border-white/25" />
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-gold/80" />
          <div className="absolute right-[8%] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/70" />
          <div className="absolute bottom-[8%] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/60" />
          <div className="absolute left-[8%] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-gold/60" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-forest pt-24 text-white md:pt-28">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0d241c] via-forest to-forest-dark"
        aria-hidden
      />
      <Container className="relative grid gap-10 pb-12 lg:grid-cols-2 lg:items-center lg:gap-6 lg:pb-14">
        {reduced ? (
          content
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {content}
          </motion.div>
        )}
        {reduced ? (
          visual
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {visual}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
