import Link from "next/link";
import type { ServiceItem } from "@/lib/data/services";
import { cn } from "@/lib/utils/cn";

export function ServiceCard({
  service,
  variant = "dark",
  spacious = false,
}: {
  service: ServiceItem;
  variant?: "dark" | "light";
  spacious?: boolean;
}) {
  const Icon = service.icon;
  const isDark = variant === "dark";

  return (
    <article
      className={cn(
        "group card-hover-lift lux-card-glow relative flex h-full flex-col duration-700",
        spacious ? "lux-glass p-9 md:p-10 lg:p-11" : "lux-glass p-6",
        !isDark && "lux-glass-light",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(247,195,95,0.06), transparent 70%)",
        }}
        aria-hidden
      />
      <span className="lux-icon-capsule relative size-12">
        <Icon className="size-5 shrink-0" aria-hidden />
      </span>
      <h3
        className={cn(
          "relative mt-8 font-serif leading-[1.2] tracking-[-0.02em]",
          spacious ? "text-xl md:text-2xl" : "text-lg",
          isDark ? "text-white" : "text-neutral-900",
        )}
      >
        {service.title}
      </h3>
      <p
        className={cn(
          "relative mt-5 max-w-sm flex-1 leading-[1.75]",
          spacious ? "text-[0.95rem] md:text-base" : "text-sm",
          isDark ? "text-white/65" : "text-muted",
        )}
      >
        {service.summary}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className="relative mt-10 inline-flex text-sm font-medium tracking-wide text-gold/90 transition-colors duration-300 group-hover:text-gold"
      >
        Learn more
        <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </article>
  );
}
