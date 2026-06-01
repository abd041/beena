import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Newsletter",
  description: "Subscribe to BEEÑA-E Consulting insights and industry updates.",
  path: "/newsletter",
});

export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Newsletter"
        title="Stay Informed"
        description="Ophthalmic biotech insights delivered to your inbox."
      />

      <Section variant="forest">
        <Container size="content">
          <div className="rounded-2xl border border-white/10 bg-forest-elevated/50 p-8 md:p-10">
            <p className="mb-6 text-white/75">
              Join leaders in ophthalmic development who rely on BEEÑA-E for
              regulatory, commercial, and scientific perspectives.
            </p>
            <NewsletterForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
