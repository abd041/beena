import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { ServiceCard } from "@/components/marketing/service-card";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { getServices } from "@/lib/data/fetch-services";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Services",
  description:
    "Comprehensive ophthalmic biotech consulting — strategy, development, regulatory, market access, and commercialization.",
  path: "/services",
});

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Comprehensive Development Services"
        description="End-to-end support across the ophthalmic product lifecycle."
      />
      <Section variant="forest" id="services-list">
        <Container>
          <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} variant="dark" />
              </StaggerItem>
            ))}
          </StaggerChildren>
          <p className="mt-12 text-center text-white/75">
            Ready to discuss your program?{" "}
            <Link
              href="/book"
              className="font-semibold text-gold hover:text-gold-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            >
              Schedule a consultation →
            </Link>
          </p>
        </Container>
      </Section>
    </>
  );
}
