import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

export function CtaBanner({
  title = "Ready to advance your ophthalmic program?",
  description = "Schedule a consultation with our global biotech advisory team.",
  primaryHref = "/book",
  primaryLabel = "Schedule a Consultation",
  secondaryHref = "/contact",
  secondaryLabel = "Contact Us",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <Section variant="forest" padding="compact" className="border-t border-white/10">
      <Container className="text-center">
        <h2 className="font-serif text-2xl text-white md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
          {description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
          <Link
            href={primaryHref}
            className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
          >
            {secondaryLabel}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
