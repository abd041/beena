import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { PostCard } from "@/components/marketing/post-card";
import { buttonVariants } from "@/components/ui/button";
import type { InsightPost } from "@/lib/data/posts";
import { cn } from "@/lib/utils/cn";

export function FeaturedInsights({ posts }: { posts: InsightPost[] }) {
  return (
    <Section variant="light" className="relative overflow-hidden">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Featured insights"
            title="Editorial perspectives for ophthalmic leaders"
            description="Biotech thought leadership across development, regulation, access, and commercialization."
            align="left"
          />
          <Link
            href="/insights"
            className={cn(buttonVariants({ variant: "dark", size: "md" }))}
          >
            View all insights →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

