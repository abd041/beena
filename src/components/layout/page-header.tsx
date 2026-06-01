import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Section variant="forest" padding="compact" className="pt-28 md:pt-32">
      <Container size="content" className="text-center md:text-left">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </Section>
  );
}
