"use client";

import { AmbientParticles } from "@/components/marketing/lux/ambient-particles";
import { cn } from "@/lib/utils/cn";

export type AtmosphereMood =
  | "warm"
  | "cool"
  | "stage"
  | "deep"
  | "statement"
  | "neutral";

export function CinematicAtmosphere({
  className,
  intensity = "medium",
  vignette = true,
  particles = false,
  mood = "warm",
}: {
  className?: string;
  intensity?: "soft" | "medium" | "deep";
  vignette?: boolean;
  particles?: boolean;
  mood?: AtmosphereMood;
}) {
  const noiseOpacity =
    intensity === "soft" ? "opacity-40" : intensity === "deep" ? "opacity-90" : "opacity-60";

  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden>
      <div className={cn("lux-noise absolute inset-0", noiseOpacity)} />
      <div className={cn("absolute inset-0 lux-mood-base", `lux-mood-base--${mood}`)} />
      <div className={cn("absolute inset-0 lux-mood-glow", `lux-mood-glow--${mood}`)} />
      <div className="lux-fog-layer absolute inset-0 opacity-60" />
      <div className="lux-gradient-radial absolute inset-0 opacity-80" />
      <div className="lux-gradient-drift absolute inset-0 opacity-35" />
      <div className="lux-bloom-top absolute inset-x-0 top-0 h-1/3" />
      {vignette && <div className="lux-vignette absolute inset-0" />}
      {vignette && <div className="lux-vignette-edge absolute inset-0" />}
      {particles && <AmbientParticles density={mood === "stage" ? "high" : "low"} />}
    </div>
  );
}
