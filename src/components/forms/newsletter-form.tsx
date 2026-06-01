"use client";

import { useActionState } from "react";
import { Mail } from "lucide-react";
import { subscribeNewsletter } from "@/app/actions/newsletter";
import { initialNewsletterState } from "@/lib/validations/newsletter";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

export function NewsletterForm() {
  const [state, formAction, pending] = useActionState(
    subscribeNewsletter,
    initialNewsletterState,
  );

  return (
    <form action={formAction} className="w-full lg:max-w-xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <Input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          required
          disabled={pending}
          aria-invalid={Boolean(state.errors?.email)}
          aria-describedby={
            state.errors?.email ? "newsletter-email-error" : undefined
          }
          className="sm:flex-1"
        />
        <button
          type="submit"
          disabled={pending}
          className={cn(
            buttonVariants({ variant: "primary", size: "lg" }),
            "shrink-0",
          )}
        >
          {pending ? "Subscribing…" : "Subscribe →"}
        </button>
      </div>

      {state.errors?.email ? (
        <p
          id="newsletter-email-error"
          role="alert"
          className="mt-2 text-sm text-red-300"
        >
          {state.errors.email[0]}
        </p>
      ) : null}

      {state.message ? (
        <p
          role="status"
          className={cn(
            "mt-3 flex items-start gap-2 text-sm",
            state.success ? "text-gold" : "text-red-300",
          )}
        >
          <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          {state.message}
        </p>
      ) : null}

      <p className="mt-2 text-xs text-white/60">
        By subscribing you agree to receive updates from BEEÑA-E. Unsubscribe
        anytime.
      </p>
    </form>
  );
}
