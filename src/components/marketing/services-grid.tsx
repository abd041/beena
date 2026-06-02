import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CinematicAtmosphere } from "@/components/marketing/lux/cinematic-atmosphere";
import { CinematicImage } from "@/components/marketing/lux/cinematic-image";
import { ServiceCard } from "@/components/marketing/service-card";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import type { ServiceItem } from "@/lib/data/services";
import { cn } from "@/lib/utils/cn";

export function ServicesGrid({
  services,
  variant = "default",
}: {
  services: ServiceItem[];
  variant?: "default" | "home";
}) {
  const isHome = variant === "home";

  return (
    <Section
      variant="forest"
      id="services"
      className={cn("relative overflow-hidden", isHome && "lux-section-y")}
    >
      <CinematicImage
        src="/images/about/expertise.jpg"
        alt=""
        fill
        sizes="100vw"
        grade="neutral"
      />
      <CinematicAtmosphere mood="warm" intensity="soft" />
      <Container className="relative">
        <div className="lux-prose-editorial text-left">
          <p className="lux-eyebrow">What we do</p>
          <h2 className="lux-heading mt-6 text-3xl md:text-4xl lg:text-[3.1rem]">
            Development
            <br className="hidden sm:block" />
            <span className="text-white/75"> services</span>
          </h2>
          <div className="lux-divider mt-8" aria-hidden />
          <p className="mt-9 max-w-md text-[0.95rem] leading-[1.85] text-white/60 md:text-base">
            End-to-end ophthalmic advisory — curated for sponsors who need depth,
            not dashboards of deliverables.
          </p>
        </div>

        <StaggerChildren
          className={cn(
            "mt-20 md:mt-32",
            isHome
              ? "grid gap-10 sm:grid-cols-2 xl:grid-cols-3"
              : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5",
          )}
        >
          {services.map((service, i) => (
            <StaggerItem
              key={service.slug}
              className={cn(
                isHome && i % 3 === 1 && "md:mt-8",
                isHome && i % 3 === 2 && "md:mt-4",
              )}
            >
              <ServiceCard service={service} spacious={isHome} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
