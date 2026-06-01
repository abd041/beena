import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ArticleProse } from "@/components/cms/article-prose";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { RelatedPosts } from "@/components/marketing/related-posts";
import { StickyMobileCta } from "@/components/marketing/sticky-mobile-cta";
import {
  getPostBySlug,
  getPostSlugs,
  getAllPosts,
} from "@/lib/data/fetch-post-detail";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { cn } from "@/lib/utils/cn";

type Props = { params: Promise<{ slug: string }> };

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${slug}`,
  });
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = await getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: "BEEÑA-E Consulting" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section variant="forest" padding="compact" className="pt-28 md:pt-32">
        <Container size="content">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: post.title },
            ]}
          />
          <Badge variant="gold" className="mt-2">
            {post.category}
          </Badge>
          <h1 className="mt-4 font-serif text-3xl text-white md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex gap-4 text-sm text-white/70">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span>{post.readTimeMin} min read</span>
          </div>
        </Container>
      </Section>

      {post.imageUrl ? (
        <div className="relative h-56 w-full md:h-80 lg:h-96">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent"
            aria-hidden
          />
        </div>
      ) : (
        <div
          className={cn(
            "h-48 w-full bg-gradient-to-br md:h-64",
            post.imageGradient,
          )}
          aria-hidden
        />
      )}

      <Section variant="white" className="pb-24 md:pb-16">
        <Container size="content">
          <ArticleProse paragraphs={post.content} />
        </Container>
      </Section>

      <RelatedPosts posts={related} />
      <CtaBanner
        title="Discuss this topic with our advisors"
        description="Connect with BEEÑA-E for tailored guidance on your ophthalmic program."
      />
      <StickyMobileCta />
    </>
  );
}
