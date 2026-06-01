import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { testimonials } from "@/lib/data/trust-content";

export function TestimonialsSection() {
  return (
    <Section variant="white" className="bg-white">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Client perspectives
          </p>
          <h2 className="mt-3 font-serif text-3xl text-neutral-900 md:text-4xl">
            What partners say
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.organization} delay={i * 0.08}>
              <li className="flex h-full flex-col rounded-xl border border-neutral-200/80 bg-neutral-50 p-8 shadow-sm">
                <blockquote className="flex-1 text-sm leading-relaxed text-neutral-800">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 border-t border-neutral-200 pt-5">
                  <p className="text-sm font-semibold text-forest">{item.name}</p>
                  <p className="mt-1 text-xs text-muted">{item.organization}</p>
                </footer>
              </li>
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 text-center text-xs text-muted">
          Client names withheld for confidentiality. References available upon request.
        </p>
      </Container>
    </Section>
  );
}
