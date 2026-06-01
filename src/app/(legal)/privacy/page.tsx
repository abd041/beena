import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "BEEÑA-E Consulting privacy policy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
      />
      <Section variant="light">
        <Container size="content">
          <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:text-forest">
            <p className="text-muted leading-relaxed">
              Legal content will be provided by BEEÑA-E Consulting prior to
              production launch. For privacy-related inquiries, contact{" "}
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
