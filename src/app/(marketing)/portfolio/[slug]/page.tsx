import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { StickyMobileCta } from "@/components/marketing/sticky-mobile-cta";
import { buttonVariants } from "@/components/ui/button";
import {
  getCaseStudyBySlug,
  getCaseStudySlugs,
} from "@/lib/data/fetch-case-studies";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { cn } from "@/lib/utils/cn";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return {};

  return buildPageMetadata({
    title: study.title,
    description: study.summary,
    path: `/portfolio/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <>
      <Section variant="forest" padding="compact" className="pt-28 md:pt-32">
        <Container size="content">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Portfolio", href: "/portfolio" },
              { label: study.title },
            ]}
          />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
            {study.clientLabel}
          </p>
          <h1 className="mt-2 font-serif text-3xl text-white md:text-4xl lg:text-5xl">
            {study.title}
          </h1>
          <p className="mt-4 text-lg text-white/80">{study.summary}</p>
        </Container>
      </Section>

      {study.imageUrl ? (
        <div className="relative h-56 w-full md:h-72">
          <Image
            src={study.imageUrl}
            alt={study.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0 bg-forest/25 mix-blend-multiply"
            aria-hidden
          />
        </div>
      ) : (
        <div
          className={cn("h-48 bg-gradient-to-br md:h-56", study.imageGradient)}
          aria-hidden
        />
      )}

      <Section variant="light" className="pb-24 md:pb-16">
        <Container size="content" className="space-y-12">
          <div>
            <h2 className="font-serif text-2xl text-forest">Challenge</h2>
            <p className="mt-3 leading-relaxed text-muted">{study.challenge}</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-forest">Approach</h2>
            <p className="mt-3 leading-relaxed text-muted">{study.approach}</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-forest">Results</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {study.results.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-8 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            {study.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-2xl font-bold text-forest">{m.value}</p>
                <p className="text-sm text-muted">{m.label}</p>
              </div>
            ))}
          </div>
          {study.serviceSlugs.length > 0 ? (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                Related Services
              </h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {study.serviceSlugs.map((s) => (
                  <Link
                    key={s}
                    href={`/services/${s}`}
                    className={cn(
                      buttonVariants({ variant: "dark", size: "sm" }),
                    )}
                  >
                    {s.replace(/-/g, " ")} →
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </Section>

      <CtaBanner />
      <StickyMobileCta />
    </>
  );
}
