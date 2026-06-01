"use client";

import { useActionState } from "react";
import { submitBooking } from "@/app/actions/booking";
import { initialBookingState } from "@/lib/validations/booking";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

const meetingTypes = [
  "Discovery Call",
  "Consultation",
  "Partnership Discussion",
  "Project Scoping",
  "Other",
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1 text-sm text-red-600">
      {message}
    </p>
  );
}

export function BookingForm() {
  const [state, action, pending] = useActionState(
    submitBooking,
    initialBookingState,
  );

  return (
    <form action={action} className="space-y-5">
      <input type="text" name="website" tabIndex={-1} className="hidden" aria-hidden />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName">Full name *</Label>
          <Input
            id="fullName"
            name="fullName"
            variant="light"
            required
            disabled={pending}
            className="mt-1.5"
          />
          <FieldError message={state.errors?.fullName?.[0]} />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            variant="light"
            required
            disabled={pending}
            className="mt-1.5"
          />
          <FieldError message={state.errors?.email?.[0]} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" variant="light" disabled={pending} className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" variant="light" disabled={pending} className="mt-1.5" />
        </div>
      </div>

      <div>
        <Label htmlFor="meetingType">Meeting type *</Label>
        <select
          id="meetingType"
          name="meetingType"
          required
          disabled={pending}
          className="mt-1.5 h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
          defaultValue=""
        >
          <option value="" disabled>
            Select a type
          </option>
          {meetingTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <FieldError message={state.errors?.meetingType?.[0]} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="preferredDates">Preferred dates</Label>
          <Input
            id="preferredDates"
            name="preferredDates"
            variant="light"
            placeholder="e.g. June 10–14, 2026"
            disabled={pending}
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor="timezone">Timezone</Label>
          <Input
            id="timezone"
            name="timezone"
            variant="light"
            placeholder="e.g. EST / CET"
            disabled={pending}
            className="mt-1.5"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Additional details</Label>
        <Textarea id="message" name="message" variant="light" disabled={pending} className="mt-1.5" />
      </div>

      <button
        type="submit"
        disabled={pending}
        className={cn(buttonVariants({ variant: "dark", size: "lg" }))}
      >
        {pending ? "Submitting…" : "Request Consultation"}
      </button>

      {state.message ? (
        <p
          role="status"
          className={cn(
            "text-sm font-medium",
            state.success ? "text-forest" : "text-red-600",
          )}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
