import { Mail, MapPin, Phone } from "lucide-react";
import { InnerSection } from "@/components/layout/inner-section";
import { LuxFormPanel } from "@/components/layout/lux-form-panel";
import { PageHero } from "@/components/layout/page-hero";
import { GoogleMapsEmbed } from "@/components/layout/google-maps-embed";
import { ContactForm } from "@/components/forms/contact-form";
import { TallyEmbed } from "@/components/integrations/tally-embed";
import { footerContact } from "@/lib/data/home-content";
import { STOCK_IMAGES } from "@/lib/data/stock-images";
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
      <PageHero
        eyebrow="Contact"
        title={isRise ? "RISE Pakistan Health" : "Get in touch"}
        description={
          isRise
            ? "Express your interest in RISE Pakistan Health — our team will respond within one business day."
            : "Tell us about your program — our team will respond within one business day."
        }
        imageSrc={STOCK_IMAGES.contactHero}
        grade="warm"
        mood="warm"
        size="large"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <InnerSection variant="ivory" className="lux-section-y">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
          <div className="space-y-10 lg:col-span-2">
            {isRise ? (
              <div className="rounded-2xl border border-rise-green/15 bg-rise-green/5 px-5 py-4 text-sm leading-relaxed text-neutral-800">
                You are contacting us about{" "}
                <strong>RISE Pakistan Health</strong>, a project of Beena-E Consulting, USA.
              </div>
            ) : null}
            <div>
              <h2 className="font-serif text-2xl tracking-[-0.02em] text-neutral-900 md:text-3xl">
                Start a confidential conversation
              </h2>
              <p className="mt-5 max-w-sm text-[0.95rem] leading-[1.8] text-muted">
                Share your program context and objectives. A senior advisor will
                respond within one business day.
              </p>
            </div>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-4 text-muted">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold/80" aria-hidden />
                <a
                  href={`mailto:${footerContact.email}`}
                  className="transition-colors duration-300 hover:text-forest"
                >
                  {footerContact.email}
                </a>
              </li>
              <li className="flex gap-4 text-muted">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold/80" aria-hidden />
                <a
                  href={`tel:${footerContact.phone.replace(/\D/g, "")}`}
                  className="transition-colors duration-300 hover:text-forest"
                >
                  {footerContact.phone}
                </a>
              </li>
              <li className="flex gap-4 text-muted">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold/80" aria-hidden />
                <span>{footerContact.address}</span>
              </li>
            </ul>
            {mapsEmbedUrl ? <GoogleMapsEmbed embedUrl={mapsEmbedUrl} /> : null}
          </div>
          <div className="lg:col-span-3">
            {useTally ? (
              <LuxFormPanel
                title="Send a message"
                description="All inquiries are handled confidentially."
              >
                <TallyEmbed formId={tallyFormId!} title="Contact BEEÑA-E Consulting" />
              </LuxFormPanel>
            ) : (
              <LuxFormPanel
                title="Send a message"
                description="All inquiries are handled confidentially."
              >
                <ContactForm
                  defaultSubject={isRise ? "RISE Pakistan Health — Inquiry" : ""}
                  defaultMessage={
                    isRise
                      ? "I am interested in learning more about RISE Pakistan Health and how to get involved."
                      : ""
                  }
                />
              </LuxFormPanel>
            )}
          </div>
        </div>
      </InnerSection>
    </>
  );
}
