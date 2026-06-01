import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { BookingForm } from "@/components/forms/booking-form";
import { CalendlyEmbed } from "@/components/integrations/calendly-embed";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Book a Consultation",
  description: "Schedule a consultation with BEEÑA-E Consulting.",
  path: "/book",
});

export default function BookPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <>
      <PageHeader
        eyebrow="Booking"
        title="Schedule a Consultation"
        description="Book via Calendly or submit a consultation request form."
      />

      <Section variant="light">
        <Container>
          {calendlyUrl ? (
            <div className="mb-12">
              <h2 className="font-serif text-2xl text-neutral-900">
                Book a time directly
              </h2>
              <p className="mt-2 text-sm text-muted">
                Select an available slot on our calendar.
              </p>
              <div className="mt-6">
                <CalendlyEmbed url={calendlyUrl} />
              </div>
            </div>
          ) : null}

          <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-10">
            <h2 className="font-serif text-xl text-neutral-900">
              {calendlyUrl ? "Or request a consultation" : "Request a consultation"}
            </h2>
            <p className="mt-2 text-sm text-muted">
              Share your availability and goals. Our team will confirm by email.
            </p>
            <div className="mt-6">
              <BookingForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
