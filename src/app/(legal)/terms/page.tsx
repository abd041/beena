import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Terms of Use",
  description: "BEEÑA-E Consulting terms of use.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        description="Terms governing use of this website and our services."
      />
      <Section variant="light">
        <Container size="content">
          <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:text-forest">
            <p className="text-muted leading-relaxed">
              Legal content will be provided by BEEÑA-E Consulting prior to
              production launch. For questions about these terms, contact{" "}
              <a href="mailto:info@beena-e.com" className="font-semibold text-forest hover:text-gold">
                info@beena-e.com
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
