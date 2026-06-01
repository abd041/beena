import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ServiceCard } from "@/components/marketing/service-card";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import type { ServiceItem } from "@/lib/data/services";

export function ServicesGrid({ services }: { services: ServiceItem[] }) {
  return (
    <Section variant="forest" id="services" className="py-20 md:py-24">
      <Container>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            What We Do
          </p>
          <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl lg:text-[2.75rem]">
            Comprehensive Development Services
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-gold/50" aria-hidden />
        </div>

        <StaggerChildren className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
