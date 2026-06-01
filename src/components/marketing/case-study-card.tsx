import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/data/case-studies";
import { cn } from "@/lib/utils/cn";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="group card-hover-lift flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200/80 bg-white shadow-sm [@media(hover:hover)]:hover:shadow-lg">
      <Link href={`/portfolio/${study.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
          {study.imageUrl ? (
            <Image
              src={study.imageUrl}
              alt={study.title}
              fill
              className="object-cover transition-transform duration-500 [@media(hover:hover)]:group-hover:scale-[1.03] motion-reduce:transition-none"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div
              className={cn("absolute inset-0 bg-gradient-to-br", study.imageGradient)}
              aria-hidden
            />
          )}
          <div
            className="absolute inset-0 bg-forest/20 mix-blend-multiply"
            aria-hidden
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
          {study.clientLabel}
        </p>
        <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-neutral-900">
          <Link
            href={`/portfolio/${study.slug}`}
            className="transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm"
          >
            {study.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
          {study.summary}
        </p>
        <div className="mt-5 flex flex-wrap gap-6 border-t border-neutral-100 pt-5">
          {study.metrics.slice(0, 3).map((m) => (
            <div key={m.label}>
              <p className="text-lg font-bold text-forest">{m.value}</p>
              <p className="text-xs text-muted">{m.label}</p>
            </div>
          ))}
        </div>
        <Link
          href={`/portfolio/${study.slug}`}
          className="mt-6 text-sm font-semibold text-gold hover:text-gold-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
        >
          View case study →
        </Link>
      </div>
    </article>
  );
}
