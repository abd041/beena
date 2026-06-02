import Image from "next/image";
import Link from "next/link";
import { Globe2, Microscope, Target, Users } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { FeaturedInsights } from "@/components/marketing/about/featured-insights";
import { EngagementProcess } from "@/components/marketing/about/engagement-process";
import { GlobalNetwork } from "@/components/marketing/about/global-network";
import { LeadershipAdvisory } from "@/components/marketing/about/leadership-advisory";
import { ScientificExpertise } from "@/components/marketing/about/scientific-expertise";
import { TrustedPartnersMarquee } from "@/components/marketing/about/trusted-partners-marquee";
import { WhyChooseUs } from "@/components/marketing/about/why-choose-us";
import { Reveal } from "@/components/motion/reveal";
import { STOCK_IMAGES } from "@/lib/data/stock-images";
import { getFeaturedPosts } from "@/lib/data/fetch-posts";
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

export default async function AboutPage() {
  const featuredPosts = await getFeaturedPosts(3);

  return (
    <>
      <section className="relative overflow-hidden bg-forest pt-24 text-white md:pt-28">
        <Image
          src="/images/hero/about-hero.png"
          alt="Scientist in a laboratory using a microscope with biotech interface overlay"
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />
        <div className="lux-noise pointer-events-none absolute inset-0" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-forest-dark/20 via-transparent to-forest-dark/65"
          aria-hidden
        />
        <Container className="relative pb-18 pt-6 md:pb-24">
          <div className="max-w-3xl text-left">
            <div className="lux-glass rounded-3xl px-7 py-10 md:px-10 md:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/90">
                About
              </p>
              <h1 className="mt-3 font-serif text-4xl leading-[1.06] md:text-6xl lg:text-[4.15rem]">
                Vision. Science. <span className="text-gold">Impact.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                A global ophthalmic biotech advisory partner built on scientific
                credibility, trusted relationships, and measurable outcomes.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/book"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-8 text-base font-medium text-forest-dark shadow-[0_14px_40px_rgba(217,181,109,0.22)] transition-all duration-200 hover:bg-gold-hover hover:shadow-[0_18px_56px_rgba(217,181,109,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest active:scale-[0.98] motion-reduce:active:scale-100"
                >
                  Schedule a Consultation →
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/6 px-8 text-base font-medium text-white backdrop-blur-md transition-all duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest active:scale-[0.98] motion-reduce:active:scale-100"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <ScientificExpertise />
      <GlobalNetwork />
      <EngagementProcess />
      <LeadershipAdvisory />
      <FeaturedInsights posts={featuredPosts} />
      <TrustedPartnersMarquee />

      <Section variant="light" className="hidden">
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
                  className="aspect-4/3 w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section variant="white" className="hidden">
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

      <Section variant="forest" className="hidden">
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
