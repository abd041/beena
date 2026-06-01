import Image from "next/image";
import Link from "next/link";
import type { InsightPost } from "@/lib/data/posts";
import { cn } from "@/lib/utils/cn";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export function PostCard({ post }: { post: InsightPost }) {
  return (
    <article className="group card-hover-lift flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200/80 bg-white shadow-sm [@media(hover:hover)]:hover:shadow-lg">
      <Link href={`/insights/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
          {post.imageUrl ? (
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 [@media(hover:hover)]:group-hover:scale-[1.03] motion-reduce:transition-none"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div
              className={cn("absolute inset-0 bg-gradient-to-br", post.imageGradient)}
              aria-hidden
            />
          )}
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-forest">
            {post.category}
          </p>
          <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-forest">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
            {post.excerpt}
          </p>
          <div className="mt-4 flex gap-3 text-xs text-muted">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden>·</span>
            <span>{post.readTimeMin} min read</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
