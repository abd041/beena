import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { StickyMobileCta } from "@/components/marketing/sticky-mobile-cta";
import { getServiceDetail, getServiceSlugs } from "@/lib/data/fetch-service-detail";
import { getServices } from "@/lib/data/fetch-services";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { cn } from "@/lib/utils/cn";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceDetail(slug);
  if (!service) return {};

  return buildPageMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceDetail(slug);
  if (!service) notFound();

  const allServices = await getServices();
  const related = allServices.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Section variant="forest" padding="compact" className="pt-28 md:pt-32">
        <Container size="content">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <h1 className="mt-4 font-serif text-3xl text-white md:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 text-lg text-white/80">{service.summary}</p>
        </Container>
      </Section>

      {service.imageUrl ? (
        <div className="relative h-48 w-full md:h-64">
          <Image
            src={service.imageUrl}
            alt={`${service.title} — BEEÑA-E Consulting`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0 bg-forest/30 mix-blend-multiply"
            aria-hidden
          />
        </div>
      ) : null}

      <Section variant="light" className="pb-8 md:pb-12">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-start">
            <div className="space-y-10">
              <div className="space-y-4">
                {service.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="leading-relaxed text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {service.outcomes.length > 0 ? (
                <div>
                  <h2 className="font-serif text-2xl text-forest">Key Outcomes</h2>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {service.faqs.length > 0 ? (
                <div>
                  <h2 className="font-serif text-2xl text-forest">
                    Frequently asked questions
                  </h2>
                  <Accordion items={service.faqs} className="mt-6" />
                </div>
              ) : null}
            </div>

            <aside className="card-hover-lift rounded-xl border border-neutral-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
              <h2 className="font-serif text-lg text-forest">Request a briefing</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Discuss how {service.title.toLowerCase()} support fits your
                ophthalmic program.
              </p>
              <Link
                href="/book"
                className={cn(
                  "mt-6 flex h-12 w-full items-center justify-center rounded-full bg-forest text-sm font-semibold text-white transition-colors hover:bg-forest-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
                )}
              >
                Schedule consultation
              </Link>
              <Link
                href="/contact"
                className="mt-3 flex h-11 w-full items-center justify-center rounded-full border border-neutral-200 text-sm font-semibold text-forest transition-colors hover:border-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
              >
                Contact us
              </Link>
            </aside>
          </div>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section variant="white" padding="compact">
          <Container size="content">
            <h2 className="font-serif text-xl text-neutral-900">Related Services</h2>
            <ul className="mt-4 flex flex-wrap gap-4">
              {related.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm font-semibold text-forest hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm"
                  >
                    {s.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <CtaBanner
        title={`Discuss ${service.title}`}
        description="Schedule a consultation to explore how BEEÑA-E can support your program."
      />
      <StickyMobileCta />
    </>
  );
}
