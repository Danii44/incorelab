"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Sparkles } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-surface/80 py-24 sm:py-32">
      {/* Layer 1: Ambient Studio Exposure Caustic */}
      <div
        className="pointer-events-none absolute inset-0 z-[0] select-none opacity-25 dark:opacity-40 mix-blend-soft-light dark:mix-blend-screen transition-opacity duration-700"
        aria-hidden="true"
      >
        <Image
          src="/images/ambient/architectural-sunlight-caustic.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Layer 2: Subtle Studio Spec Reticle Watermark */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] z-[1] select-none opacity-10 dark:opacity-20 mix-blend-screen transition-opacity duration-700"
        aria-hidden="true"
      >
        <Image
          src="/images/ambient/studio-spec-plate.png"
          alt=""
          fill
          className="object-contain"
          sizes="750px"
        />
      </div>

      {/* Layer 3: Warm Focal Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[550px] rounded-full bg-accent/15 blur-[130px] z-[1]" />

      <Container size="fluid" className="relative z-10 text-center">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-mono-custom text-xs text-accent mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            <span>ACCEPTING NEW CLIENT PROJECTS FOR 2025/2026</span>
          </div>

          <h2 className="font-display headline-large text-text font-bold uppercase tracking-tight">
            Have a project in mind? <br />
            <span className="text-accent underline decoration-accent/30 underline-offset-8">
              Let&apos;s build it right.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl font-body text-base sm:text-lg text-text/80 leading-relaxed">
            Tell us what you want to build. We will review your idea, give you honest feedback, and send a clear timeline with a fixed price.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="pill" size="lg" withArrow>
              Start a Conversation
            </Button>
            <Button href="/work" variant="pill-outline" size="lg">
              See Past Work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
