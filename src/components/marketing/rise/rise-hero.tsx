import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { riseLockup, RISE_IMAGES } from "@/lib/data/rise-content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

export function RiseHero() {
  return (
    <section className="relative overflow-hidden bg-rise-green-dark pt-28 text-white md:pt-32">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rise-green-dark via-rise-green to-rise-green-elevated/90"
        aria-hidden
      />
      <Container className="relative grid gap-10 pb-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-20">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rise-yellow">
            {riseLockup.parent}
          </p>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl lg:text-[3.25rem]">
            {riseLockup.title}
          </h1>
          <p className="text-lg font-medium text-rise-yellow md:text-xl">
            {riseLockup.tagline}
          </p>
          <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            {riseLockup.subtitle}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact?interest=rise-pakistan-health"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "bg-rise-yellow text-rise-green-dark hover:bg-rise-yellow-hover",
              )}
            >
              Get Involved →
            </Link>
            <Link
              href="/about"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "border-white/30 text-white hover:bg-white/10",
              )}
            >
              About BEEÑA-E
            </Link>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl lg:max-w-none">
          <Image
            src={RISE_IMAGES.hero}
            alt="Healthcare professionals collaborating"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-rise-green-dark/60 to-transparent"
            aria-hidden
          />
        </div>
      </Container>
    </section>
  );
}
