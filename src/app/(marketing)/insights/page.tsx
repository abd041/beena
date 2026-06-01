import { Suspense } from "react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { PostCard } from "@/components/marketing/post-card";
import { InsightsSearch } from "@/components/marketing/insights-search";
import { getAllPosts } from "@/lib/data/fetch-post-detail";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Insights",
  description:
    "Latest perspectives on ophthalmic biotech, industry trends, and regulatory developments.",
  path: "/insights",
});

function filterPosts(
  posts: Awaited<ReturnType<typeof getAllPosts>>,
  query?: string,
) {
  if (!query?.trim()) return posts;
  const q = query.toLowerCase();
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q),
  );
}

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const allPosts = await getAllPosts();
  const posts = filterPosts(allPosts, q);

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Latest Perspectives"
        description="Thought leadership on ophthalmic biotech development, regulation, and commercialization."
      />

      <Section variant="light">
        <Container>
          <Suspense fallback={<div className="mb-8 h-12 max-w-md rounded-xl bg-neutral-100" />}>
            <InsightsSearch defaultValue={q ?? ""} />
          </Suspense>

          <p className="mb-8 text-sm text-muted" aria-live="polite">
            {posts.length === 1
              ? "1 article"
              : `${posts.length} articles`}
            {q?.trim() ? ` matching “${q.trim()}”` : ""}
          </p>

          {posts.length === 0 ? (
            <p className="text-muted">
              No articles match your search.{" "}
              <a href="/insights" className="font-semibold text-forest hover:text-gold">
                View all insights
              </a>
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
