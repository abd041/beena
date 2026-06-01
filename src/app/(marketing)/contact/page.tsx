import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { GoogleMapsEmbed } from "@/components/layout/google-maps-embed";
import { ContactForm } from "@/components/forms/contact-form";
import { TallyEmbed } from "@/components/integrations/tally-embed";
import { footerContact } from "@/lib/data/home-content";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Contact",
  description: "Contact BEEÑA-E Consulting for ophthalmic biotech advisory.",
  path: "/contact",
});

type Props = {
  searchParams: Promise<{ interest?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { interest } = await searchParams;
  const isRise = interest === "rise-pakistan-health";
  const tallyFormId = process.env.NEXT_PUBLIC_TALLY_CONTACT_FORM_ID;
  const mapsEmbedUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL;
  const useTally = Boolean(tallyFormId);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={isRise ? "RISE Pakistan Health" : "Get in Touch"}
        description={
          isRise
            ? "Express your interest in RISE Pakistan Health — our team will respond within one business day."
            : "Tell us about your program — our team will respond within one business day."
        }
      />

      <Section variant="light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-8 lg:col-span-2">
              {isRise ? (
                <div className="rounded-xl border border-rise-green/20 bg-rise-green/5 p-4 text-sm text-neutral-800">
                  You are contacting us about{" "}
                  <strong>RISE Pakistan Health</strong>, a project of Beena-E
                  Consulting, USA.
                </div>
              ) : null}
              <div>
                <h2 className="font-serif text-2xl text-neutral-900">
                  Let&apos;s start a conversation
                </h2>
                <p className="mt-3 text-muted leading-relaxed">
                  Whether you are shaping an early asset strategy or preparing for
                  global launch, BEEÑA-E provides senior ophthalmic expertise when
                  you need it most.
                </p>
              </div>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3 text-muted">
                  <Mail className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <a
                    href={`mailto:${footerContact.email}`}
                    className="hover:text-forest"
                  >
                    {footerContact.email}
                  </a>
                </li>
                <li className="flex gap-3 text-muted">
                  <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <a
                    href={`tel:${footerContact.phone.replace(/\D/g, "")}`}
                    className="hover:text-forest"
                  >
                    {footerContact.phone}
                  </a>
                </li>
                <li className="flex gap-3 text-muted">
                  <MapPin className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <span>{footerContact.address}</span>
                </li>
              </ul>
              {mapsEmbedUrl ? (
                <GoogleMapsEmbed embedUrl={mapsEmbedUrl} />
              ) : null}
            </div>
            <div className="lg:col-span-3">
              {useTally ? (
                <TallyEmbed formId={tallyFormId!} title="Contact BEEÑA-E Consulting" />
              ) : (
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
                  <ContactForm
                    defaultSubject={
                      isRise ? "RISE Pakistan Health — Inquiry" : ""
                    }
                    defaultMessage={
                      isRise
                        ? "I am interested in learning more about RISE Pakistan Health and how to get involved."
                        : ""
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
