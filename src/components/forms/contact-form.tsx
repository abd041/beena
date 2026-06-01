"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";
import { initialContactState } from "@/lib/validations/contact";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1 text-sm text-red-600">
      {message}
    </p>
  );
}

export function ContactForm({
  defaultSubject = "",
  defaultMessage = "",
}: {
  defaultSubject?: string;
  defaultMessage?: string;
} = {}) {
  const [state, action, pending] = useActionState(
    submitContact,
    initialContactState,
  );

  return (
    <form action={action} className="space-y-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            variant="light"
            required
            disabled={pending}
            className="mt-1.5"
          />
          <FieldError message={state.errors?.name?.[0]} />
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
          <Input
            id="company"
            name="company"
            variant="light"
            disabled={pending}
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            variant="light"
            disabled={pending}
            className="mt-1.5"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="subject">Subject *</Label>
        <Input
          id="subject"
          name="subject"
          variant="light"
          required
          disabled={pending}
          defaultValue={defaultSubject}
          className="mt-1.5"
        />
        <FieldError message={state.errors?.subject?.[0]} />
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          variant="light"
          required
          disabled={pending}
          defaultValue={defaultMessage}
          className="mt-1.5"
        />
        <FieldError message={state.errors?.message?.[0]} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className={cn(buttonVariants({ variant: "dark", size: "lg" }))}
      >
        {pending ? "Sending…" : "Send Message"}
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
