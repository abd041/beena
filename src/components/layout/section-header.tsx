import { cn } from "@/lib/utils/cn";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        align === "left" && "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-gold" : "text-gold",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 font-serif text-3xl md:text-4xl",
          light ? "text-white" : "text-neutral-900",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-white/75" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
      {align === "center" && light ? (
        <div className="mx-auto mt-4 h-px w-16 bg-gold/60" aria-hidden />
      ) : null}
    </div>
  );
}
