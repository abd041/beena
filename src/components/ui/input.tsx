import { cn } from "@/lib/utils/cn";

export function Input({
  className,
  variant = "dark",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "light" | "dark";
}) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-xl border px-4 text-sm transition-colors",
        "focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "dark" &&
          "border-white/25 bg-white/5 text-white placeholder:text-white/50 focus:border-gold focus:ring-gold/30",
        variant === "light" &&
          "border-neutral-200 bg-white text-neutral-900 placeholder:text-muted focus:border-forest focus:ring-forest/20",
        className,
      )}
      {...props}
    />
  );
}
