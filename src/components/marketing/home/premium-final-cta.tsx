"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { CinematicAtmosphere } from "@/components/marketing/lux/cinematic-atmosphere";
import { CinematicImage } from "@/components/marketing/lux/cinematic-image";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { buttonVariants } from "@/components/ui/button";
import { STOCK_IMAGES } from "@/lib/data/stock-images";
import { cn } from "@/lib/utils/cn";

export function PremiumFinalCta() {
  const reduced = useReducedMotion();

  const content = (
    <div className="max-w-4xl px-2">
      <p className="lux-eyebrow tracking-[0.32em]">Partner with confidence</p>
      <h2 className="mt-8 font-serif text-[2rem] leading-[1.06] tracking-[-0.035em] text-white md:text-6xl lg:text-[4.5rem]">
        Ready to accelerate your
        <br className="hidden md:block" />
        <span className="text-white/70"> ophthalmic innovation pipeline?</span>
      </h2>
      <p className="mx-auto mt-10 max-w-md text-[0.95rem] leading-[1.9] text-white/55 md:mt-12 md:max-w-lg md:text-lg">
        Align science, regulation, access, and launch with senior advisors built
        for executive decision-making.
      </p>
      <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row sm:items-center md:mt-16">
        <Link
          href="/book"
          className={cn(
            buttonVariants({ variant: "primary", size: "lg" }),
            "min-w-[260px] transition-[box-shadow,transform] duration-700 ease-out shadow-[0_28px_80px_rgba(247,195,95,0.2)] hover:shadow-[0_32px_96px_rgba(247,195,95,0.28)] active:scale-[0.99]",
          )}
        >
          <Calendar className="mr-2 h-4 w-4" aria-hidden />
          Schedule a Consultation →
        </Link>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "min-w-[220px] border-white/12 bg-white/[0.03] backdrop-blur-md transition-colors duration-500 hover:bg-white/[0.06]",
          )}
        >
          Contact Our Team
        </Link>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-black text-white md:min-h-[92vh]">
      <CinematicImage
        src={STOCK_IMAGES.portfolioLab}
        alt=""
        fill
        sizes="100vw"
        grade="deep"
      />
      <CinematicAtmosphere mood="stage" intensity="deep" particles vignette />

      <Container className="relative flex min-h-[88vh] flex-col items-center justify-center py-32 text-center md:min-h-[92vh] md:py-44">
        {reduced ? (
          content
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {content}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
