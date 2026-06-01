import Image from "next/image";
import Link from "next/link";
import { Globe2, Microscope, Target, Users } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { Reveal } from "@/components/motion/reveal";
import { STOCK_IMAGES } from "@/lib/data/stock-images";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Learn about BEEÑA-E Consulting — vision, science, and global ophthalmic biotech expertise.",
  path: "/about",
});

const pillars = [
  {
    icon: Target,
    title: "Science-Driven",
    text: "Evidence-led recommendations grounded in ophthalmic development experience.",
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    text: "Advisory across US, EU, and emerging markets with established partner networks.",
  },
  {
    icon: Microscope,
    title: "Deep Expertise",
    text: "Decades of combined experience across biologics, gene therapy, and small molecules.",
  },
  {
    icon: Users,
    title: "Patient-Focused",
    text: "Strategies designed to improve outcomes for patients with vision-threatening diseases.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Vision. Science. Impact."
        description="A global ophthalmic biotech advisory partner built on scientific credibility, trusted relationships, and measurable outcomes."
      />

      <Section variant="light">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-serif text-3xl text-neutral-900">Our Story</h2>
              <p className="mt-4 text-muted leading-relaxed">
                BEEÑA-E Consulting was founded to provide sponsors with senior-level
                ophthalmic expertise across the full product lifecycle — without the
                overhead of building large internal teams for every program.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Our advisors have supported the development and launch of numerous
                ophthalmic products globally, partnering with emerging biotech,
                specialty pharma, and top-tier organizations.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Through{" "}
                <Link
                  href="/rise-pakistan-health"
                  className="font-semibold text-forest hover:text-gold"
                >
                  RISE Pakistan Health
                </Link>
                , we mobilize diaspora excellence for structured health impact in
                Pakistan across research, innovation, service, and education.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={STOCK_IMAGES.aboutLab}
                  alt="Researchers collaborating in a scientific setting"
                  width={900}
                  height={600}
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section variant="white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl text-neutral-900">Mission & Vision</h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              We accelerate ophthalmic innovation by aligning science, regulatory
              strategy, and commercial execution — helping sponsors deliver therapies
              that matter to patients worldwide.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.05}>
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                  <pillar.icon className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-4 font-semibold text-neutral-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="forest">
        <Container className="text-center">
          <Reveal>
            <h2 className="font-serif text-3xl text-white md:text-4xl">
              Global Partnerships
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/75">
              We collaborate with CROs, regulatory specialists, HEOR partners, and
              commercial teams to deliver integrated support tailored to each
              sponsor&apos;s stage and therapeutic area.
            </p>
          </Reveal>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
