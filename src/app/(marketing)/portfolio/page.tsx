import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { CaseStudyCard } from "@/components/marketing/case-study-card";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { getCaseStudies } from "@/lib/data/fetch-case-studies";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Portfolio",
  description:
    "Case studies and collaborations showcasing BEEÑA-E Consulting ophthalmic expertise.",
  path: "/portfolio",
});

export default async function PortfolioPage() {
  const studies = await getCaseStudies();

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Proven Impact"
        description="Representative engagements across regulatory, development, access, and commercialization."
      />

      <Section variant="light">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {studies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
