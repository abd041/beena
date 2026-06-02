"use client";

import { useActionState } from "react";
import { Mail } from "lucide-react";
import { subscribeNewsletter } from "@/app/actions/newsletter";
import { initialNewsletterState } from "@/lib/validations/newsletter";
import { FormFieldError, FormStatusMessage } from "@/components/forms/form-field-error";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

export function NewsletterForm() {
  const [state, formAction, pending] = useActionState(
    subscribeNewsletter,
    initialNewsletterState,
  );

  return (
    <form action={formAction} className="w-full lg:max-w-xl" aria-busy={pending} noValidate>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="sm:flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <Input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Work email"
            required
            disabled={pending}
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={
              state.errors?.email ? "newsletter-email-error" : "newsletter-hint"
            }
            className="w-full"
          />
          <FormFieldError
            id="newsletter-email-error"
            message={state.errors?.email?.[0]}
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className={cn(
            buttonVariants({ variant: "dark", size: "lg" }),
            "w-full shrink-0 sm:w-auto",
          )}
        >
          {pending ? "Subscribing…" : "Subscribe"}
        </button>
      </div>

      {state.message ? (
        <div className="mt-3 flex items-start gap-2">
          <Mail className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden />
          <FormStatusMessage success={Boolean(state.success)} message={state.message} />
        </div>
      ) : null}

      <p id="newsletter-hint" className="mt-3 text-xs leading-relaxed text-muted">
        Periodic updates on ophthalmic development and regulation. Unsubscribe
        anytime. We do not share your email with third parties.
      </p>
    </form>
  );
}
