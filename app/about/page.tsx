import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | The Studio and How We Work",
  description:
    "Incorelab is an independent digital studio in Zurich and New York. No account managers, no junior handoffs. You work directly with senior engineers and designers.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-36 overflow-hidden">
      {/* Atmospheric depth glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-accent/8 via-accent/2 to-transparent blur-3xl -z-10" />
      <Container size="fluid">
        {/* Header */}
        <div className="border-b border-border pb-12 sm:pb-16">
          <div className="flex items-center gap-3 font-mono-custom text-xs text-muted mb-4">
            <span className="text-accent font-bold">ABOUT //</span>
            <span>SENIOR STUDIO CRAFT</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-display headline-huge font-bold uppercase tracking-tight text-text">
                Who We Are<span className="text-accent">.</span>
              </h1>
              <p className="mt-4 max-w-2xl font-display text-xl text-muted font-normal">
                An independent product studio founded by engineers and designers who wanted to build software without corporate bureaucracy.
              </p>
            </div>
            <Button href="/contact" variant="pill" size="lg" withArrow>
              Work With Us
            </Button>
          </div>
        </div>

        {/* Hero Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-b border-border">
          <div className="lg:col-span-5">
            <span className="font-mono-custom text-xs text-accent uppercase block mb-3 font-semibold">
              OUR STORY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text">
              Direct Access to the People Building Your Software.
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 font-display text-xl text-text/90 font-normal leading-relaxed">
            <p>
              Incorelab was founded in 2024 by an ensemble of senior software engineers, creative directors, and product designers based in Zurich and New York. We spent years watching traditional agencies charge enterprise rates while delegating actual development to junior contractors.
            </p>
            <p className="font-body text-base text-muted leading-relaxed">
              We decided to operate differently. When you work with Incorelab, there are zero account executives, zero games of telephone, and zero unnecessary layers. You collaborate directly with the senior developers and art directors who write every line of TypeScript, design every Figma component, and test your product on real hardware.
            </p>
          </div>
        </div>

        {/* Editorial Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16 border-b border-border">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-surface">
            <Image
              src="/images/service-web.svg"
              alt="Atelier workspace & core architecture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-4 left-4 font-mono-custom text-xs text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
              01 // ENGINEERING LAB
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-surface">
            <Image
              src="/images/service-cloud.svg"
              alt="Systems architecture and cloud orchestration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-4 left-4 font-mono-custom text-xs text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
              02 // CLOUD INFRASTRUCTURE
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-surface">
            <Image
              src="/images/service-branding.svg"
              alt="Typography and spatial design systems"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-4 left-4 font-mono-custom text-xs text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
              03 // DESIGN SYSTEMS
            </div>
          </div>
        </div>

        {/* Agency Principles Grid */}
        <div className="py-16 border-b border-border">
          <div className="mb-12">
            <span className="font-mono-custom text-xs text-accent uppercase block mb-2 font-semibold">
              CORE PRINCIPLES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-text">
              How We Make Decisions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <span className="font-mono-custom text-2xl font-bold text-accent block mb-4">01</span>
              <h3 className="font-display text-2xl font-bold text-text mb-3">Speed Is A Feature</h3>
              <p className="font-body text-sm text-muted leading-relaxed">
                If your site takes more than 2 seconds to load, customers leave. We build fast Next.js applications that load under 400ms and pass Core Web Vitals with flying colors.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8">
              <span className="font-mono-custom text-2xl font-bold text-accent block mb-4">02</span>
              <h3 className="font-display text-2xl font-bold text-text mb-3">Honest Recommendations</h3>
              <p className="font-body text-sm text-muted leading-relaxed">
                We don&apos;t pitch expensive complex architectures if a simpler tool will get you to market faster. We choose the stack that makes commercial sense for your budget and goals.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8">
              <span className="font-mono-custom text-2xl font-bold text-accent block mb-4">03</span>
              <h3 className="font-display text-2xl font-bold text-text mb-3">100% IP Ownership</h3>
              <p className="font-body text-sm text-muted leading-relaxed">
                You own every repository commit, Figma design component, and asset upon final launch. No proprietary lock-in, no hostage codebases. You have complete freedom.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text uppercase mb-6">
            Ready to talk with an engineer?
          </h2>
          <Button href="/contact" variant="pill" size="lg" withArrow>
            Start a Conversation
          </Button>
        </div>
      </Container>
    </div>
  );
}
