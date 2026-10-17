import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { servicesData } from "@/data/services";
import { FaqSection } from "@/components/sections/FaqSection";
import { Check, ArrowUpRight, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities | What We Build",
  description:
    "Our services include Next.js web development, custom Shopify stores, React Native mobile apps, 3D WebGL, branding, AI automation, growth marketing, and cloud hosting.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-36 overflow-hidden">
      {/* Atmospheric depth glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#5B8DEF]/10 via-[#5B8DEF]/3 to-transparent blur-3xl -z-10" />
      <Container size="fluid">
        {/* Header */}
        <div className="border-b border-border pb-12 sm:pb-16">
          <div className="flex items-center gap-3 font-mono-custom text-xs text-muted mb-4">
            <span className="text-accent font-bold">CAPABILITIES //</span>
            <span>WHAT WE BUILD &amp; SHIP</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-display headline-huge font-bold uppercase tracking-tight text-text">
                Services<span className="text-accent">.</span>
              </h1>
              <p className="mt-4 max-w-2xl font-display text-xl text-muted font-normal">
                Eight services backed by experienced engineers, clear deliverables, and fixed timelines.
              </p>
            </div>
            <Button href="/contact" variant="pill" size="lg" withArrow>
              Start a Project
            </Button>
          </div>
        </div>

        {/* Detailed Service Pillars List */}
        <div className="flex flex-col gap-28 pt-16">
          {servicesData.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="border-b border-border pb-24 last:border-b-0"
            >
              {/* Pillar Header & Graphic */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
                {/* Left Overview */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 font-mono-custom text-xs text-accent font-semibold mb-3">
                      <span>{service.number} //</span>
                      <span>{service.category}</span>
                    </div>

                    <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text">
                      {service.title}
                    </h2>

                    <p className="mt-4 font-display text-xl text-muted font-normal leading-relaxed">
                      {service.tagline}
                    </p>

                    <p className="mt-6 font-body text-base text-text/80 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-4 rounded-xl border border-border bg-surface p-4">
                      <span className="font-display text-4xl font-bold text-accent">
                        {service.metrics.value}
                      </span>
                      <span className="font-mono-custom text-xs text-muted max-w-[160px]">
                        {service.metrics.label}
                      </span>
                    </div>
                  </div>

                  <div className="pt-8">
                    <Button href="/contact" variant="pill" size="md" withArrow>
                      Book {service.title}
                    </Button>
                  </div>
                </div>

                {/* Right Visual Artwork (Always Visible) */}
                <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-md">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 rounded-full border border-border bg-surface/85 px-3 py-1 font-mono-custom text-[11px] text-accent backdrop-blur-md">
                    TECHNICAL ARCHITECTURE
                  </div>
                </div>
              </div>

              {/* Sub-Services Deep-Dive Matrix */}
              <div className="rounded-2xl border border-border bg-surface/50 p-6 sm:p-10 backdrop-blur-sm">
                <div className="flex items-center gap-2 font-mono-custom text-xs text-muted mb-6">
                  <Layers className="h-4 w-4 text-accent" />
                  <span className="tracking-widest uppercase font-semibold text-text">
                    SPECIALIZED SUB-SERVICES &amp; DELIVERABLES
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {service.subServices.map((sub) => (
                    <div
                      key={sub.id}
                      className="rounded-xl border border-border bg-surface p-6 flex flex-col justify-between hover:border-accent/60 transition-colors"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <h3 className="font-display text-lg font-bold text-text">
                            {sub.title}
                          </h3>
                          <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono-custom text-[10px] text-accent font-semibold flex-shrink-0">
                            {sub.badge}
                          </span>
                        </div>
                        <p className="font-body text-xs sm:text-sm text-muted leading-relaxed mb-6">
                          {sub.description}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 pt-4 border-t border-border/40">
                        {sub.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2.5 font-mono-custom text-xs text-text/80"
                          >
                            <Check className="h-3.5 w-3.5 text-accent stroke-[3] flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Footer Bar */}
                <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap items-center gap-2">
                  <span className="font-mono-custom text-xs text-muted mr-2">TECH STACK:</span>
                  {service.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-border bg-surface px-3 py-1 font-mono-custom text-xs text-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Embedded FAQ Section */}
        <div className="mt-20">
          <FaqSection />
        </div>
      </Container>
    </div>
  );
}
