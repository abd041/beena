"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
      }) => void;
    };
  }
}

export function CalendlyEmbed({ url }: { url: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const el = document.getElementById("calendly-inline-widget");
      if (el && window.Calendly) {
        window.Calendly.initInlineWidget({ url, parentElement: el });
      }
    };

    return () => {
      script.remove();
    };
  }, [url]);

  return (
    <div
      id="calendly-inline-widget"
      className="min-h-[650px] w-full rounded-xl border border-neutral-200 bg-white"
      aria-label="Schedule a meeting with Calendly"
    />
  );
}
