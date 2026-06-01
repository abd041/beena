import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PostCard } from "@/components/marketing/post-card";
import { buttonVariants } from "@/components/ui/button";
import type { InsightPost } from "@/lib/data/posts";
import { cn } from "@/lib/utils/cn";

export function InsightsSection({ posts }: { posts: InsightPost[] }) {
  return (
    <Section variant="white" id="insights" className="bg-neutral-50 py-20 md:py-24">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">
            Latest Perspectives
          </h2>
          <Link
            href="/insights"
            className={cn(
              buttonVariants({ variant: "dark", size: "md" }),
              "shrink-0 self-start md:self-auto",
            )}
          >
            View All Insights →
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
