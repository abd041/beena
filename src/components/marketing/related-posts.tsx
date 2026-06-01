import { PostCard } from "@/components/marketing/post-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { InsightPost } from "@/lib/data/posts";

export function RelatedPosts({
  posts,
  title = "Related perspectives",
}: {
  posts: InsightPost[];
  title?: string;
}) {
  if (posts.length === 0) return null;

  return (
    <Section variant="light" padding="compact">
      <Container>
        <h2 className="font-serif text-2xl text-neutral-900 md:text-3xl">
          {title}
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
