import { InnerSection } from "@/components/layout/inner-section";
import { LuxFormPanel } from "@/components/layout/lux-form-panel";
import { PageHero } from "@/components/layout/page-hero";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { STOCK_IMAGES } from "@/lib/data/stock-images";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Newsletter",
  description: "Subscribe to BEEÑA-E Consulting insights and industry updates.",
  path: "/newsletter",
});

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        title="Stay"
        titleAccent="informed"
        description="Periodic perspectives on ophthalmic development, regulation, and commercial strategy."
        imageSrc={STOCK_IMAGES.insightEmerging}
        grade="cool"
        mood="cool"
        size="large"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Newsletter" },
        ]}
      />

      <InnerSection variant="ivory" className="lux-section-y-tight">
        <div className="mx-auto max-w-xl">
          <LuxFormPanel
            title="Subscribe to insights"
            description="Updates for development, regulatory, and commercial leaders in ophthalmic biotech."
          >
            <NewsletterForm />
          </LuxFormPanel>
        </div>
      </InnerSection>
    </>
  );
}
