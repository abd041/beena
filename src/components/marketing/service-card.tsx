import Link from "next/link";
import type { ServiceItem } from "@/lib/data/services";
import { cn } from "@/lib/utils/cn";

export function ServiceCard({
  service,
  variant = "dark",
}: {
  service: ServiceItem;
  variant?: "dark" | "light";
}) {
  const Icon = service.icon;
  const isDark = variant === "dark";

  return (
    <article
      className={cn(
        "group card-hover-lift flex h-full flex-col rounded-xl border p-6 hover:border-gold/50",
        isDark
          ? "border-white/[0.12] bg-forest-elevated [@media(hover:hover)]:hover:shadow-lg [@media(hover:hover)]:hover:shadow-gold/10"
          : "border-neutral-200 bg-white [@media(hover:hover)]:hover:shadow-lg",
      )}
    >
      <Icon
        className="h-8 w-8 text-gold stroke-[1.25]"
        aria-hidden
      />
      <h3
        className={cn(
          "mt-4 font-sans text-lg font-semibold",
          isDark ? "text-white" : "text-neutral-900",
        )}
      >
        {service.title}
      </h3>
      <p
        className={cn(
          "mt-3 flex-1 text-sm leading-relaxed",
          isDark ? "text-white/70" : "text-muted",
        )}
      >
        {service.summary}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className={cn(
          "mt-6 inline-flex text-sm font-semibold text-gold transition-colors",
          "group-hover:text-gold-hover",
        )}
      >
        Learn more →
      </Link>
    </article>
  );
}
