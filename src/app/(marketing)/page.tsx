import { AboutTeaser } from "@/components/marketing/about-teaser";
import { HomeHero } from "@/components/marketing/home-hero";
import { InsightsSection } from "@/components/marketing/insights-section";
import { NewsletterCta } from "@/components/marketing/newsletter-cta";
import { ServicesGrid } from "@/components/marketing/services-grid";
import { StatsBar } from "@/components/marketing/stats-bar";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { ValuePropsBar } from "@/components/marketing/value-props-bar";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { getFeaturedPosts } from "@/lib/data/fetch-posts";
import { getServices } from "@/lib/data/fetch-services";

export default async function HomePage() {
  const [services, posts] = await Promise.all([
    getServices(),
    getFeaturedPosts(3),
  ]);

  return (
    <>
      <OrganizationJsonLd />
      <HomeHero />
      <ValuePropsBar />
      <StatsBar />
      <TrustStrip />
      <ServicesGrid services={services} />
      <TestimonialsSection />
      <AboutTeaser />
      <InsightsSection posts={posts} />
      <NewsletterCta />
    </>
  );
}
