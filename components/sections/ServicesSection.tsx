"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { servicesData, ServiceItem } from "@/data/services";
import { Plus, Minus, Check, Layers } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function ServiceRow({
  service,
  isExpanded,
  onToggle,
}: {
  service: ServiceItem;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={`group relative border-b border-border transition-all duration-300 ${
        isExpanded
          ? "bg-surface/60 border-l-4 border-l-accent pl-3 sm:pl-6"
          : isHovered
          ? "bg-surface/30 border-l-4 border-l-accent pl-3 sm:pl-6"
          : "pl-0"
      }`}
    >
      {/* Main Clickable Header Row */}
      <button
        type="button"
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex w-full items-center justify-between py-8 sm:py-10 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-expanded={isExpanded}
        data-cursor-pointer
      >
        <div className="flex items-start sm:items-baseline gap-4 sm:gap-10 md:gap-14">
          {/* Mono Number & Category */}
          <div className="flex flex-col">
            <span className="font-mono-custom text-sm sm:text-base font-semibold tracking-wider text-accent">
              {service.number}
            </span>
            <span className="font-mono-custom text-[10px] hidden sm:block uppercase tracking-widest mt-1 text-muted">
              {service.category}
            </span>
          </div>

          {/* Service Title & Sub-count */}
          <div>
            <div className="flex flex-wrap items-baseline gap-3">
              <h3
                className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-colors duration-200 ${
                  isHovered || isExpanded ? "text-accent" : "text-text"
                }`}
              >
                {service.title}
              </h3>
              <span
                className={`rounded-full border px-2.5 py-0.5 font-mono-custom text-[11px] transition-colors duration-200 ${
                  isHovered || isExpanded
                    ? "border-accent/40 bg-accent/10 text-accent font-semibold"
                    : "border-border text-muted"
                }`}
              >
                {service.subServices.length} SUB-SERVICES
              </span>
            </div>
            <p
              className={`mt-2 font-body text-xs sm:text-sm line-clamp-1 transition-colors duration-200 ${
                isHovered || isExpanded ? "text-text/90" : "text-muted"
              }`}
            >
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Right Row Actions: Thumbnail Preview & Expand Button */}
        <div className="flex items-center gap-4 sm:gap-6 ml-4 flex-shrink-0">
          {/* Service Architecture Preview Thumbnail */}
          <div className="hidden sm:block relative h-12 w-20 md:h-14 md:w-24 lg:h-16 lg:w-28 rounded-lg overflow-hidden border border-border bg-surface/80 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-accent/60">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="112px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
          </div>

          {/* Action Icon: Arrow rotates / Plus/Minus */}
          <div
            className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border transition-all duration-300 ${
              isHovered || isExpanded
                ? "border-accent bg-accent text-[#0E0E10] shadow-md shadow-accent/20 scale-105"
                : "border-border text-text bg-surface/50"
            }`}
          >
            {isExpanded ? (
              <Minus className="h-5 w-5 stroke-[2]" />
            ) : (
              <Plus className="h-5 w-5 stroke-[1.5]" />
            )}
          </div>
        </div>
      </button>

      {/* Accordion Content with Visible Image & Sub-Services */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
            className="overflow-hidden"
          >
            <div className="pb-12 pt-2 border-t border-border/40">
              {/* Overview & Visual Artwork */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
                {/* Visual Image / Artwork (Always explicitly visible) */}
                <div className="lg:col-span-5 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-md">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4 rounded-full border border-border bg-surface/85 px-3 py-1 font-mono-custom text-[11px] text-accent backdrop-blur-md">
                    TECHNICAL ARCHITECTURE
                  </div>
                </div>

                {/* Description & Metric */}
                <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                  <div>
                    <span className="font-mono-custom text-xs text-accent uppercase tracking-wider block mb-2">
                      WHAT WE DELIVER
                    </span>
                    <p className="font-display text-lg sm:text-xl text-text/95 font-medium leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3.5">
                      <span className="font-display text-3xl font-bold text-accent">
                        {service.metrics.value}
                      </span>
                      <span className="font-mono-custom text-xs text-muted max-w-[150px]">
                        {service.metrics.label}
                      </span>
                    </div>

                    <Button href="/contact" variant="pill" size="sm" withArrow>
                      Book a discovery call
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sub-Services Matrix Grid */}
              <div className="pt-4 border-t border-border/40">
                <div className="flex items-center gap-2 font-mono-custom text-xs text-muted mb-6">
                  <Layers className="h-4 w-4 text-accent" />
                  <span className="tracking-widest uppercase font-semibold text-text">
                    SPECIALIZED SUB-SERVICES &amp; STACK
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {service.subServices.map((sub) => (
                    <div
                      key={sub.id}
                      className="rounded-xl border border-border bg-surface/70 p-5 hover:border-accent/60 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-display text-base font-bold text-text">
                          {sub.title}
                        </h4>
                        <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono-custom text-[10px] text-accent font-semibold flex-shrink-0">
                          {sub.badge}
                        </span>
                      </div>
                      <p className="font-body text-xs text-muted leading-relaxed mb-4">
                        {sub.description}
                      </p>
                      <div className="flex flex-col gap-1.5 pt-3 border-t border-border/40">
                        {sub.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 font-mono-custom text-[11px] text-text/80"
                          >
                            <Check className="h-3 w-3 text-accent stroke-[3] flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips Bar */}
              <div className="mt-8 pt-4 border-t border-border/40 flex flex-wrap items-center gap-2">
                <span className="font-mono-custom text-xs text-muted mr-2">PRIMARY TECH:</span>
                {service.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-border bg-surface px-3 py-1 font-mono-custom text-[11px] text-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string | null>("web-development");
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxPrismY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const rotatePlate = useTransform(scrollYProgress, [0, 1], [0, 35]);

  const categories = [
    "ALL",
    "ENGINEERING",
    "COMMERCE",
    "MOBILE",
    "SPATIAL & 3D",
    "DESIGN ATELIER",
    "ARTIFICIAL INTELLIGENCE",
    "GROWTH & ATTRIBUTION",
    "INFRASTRUCTURE",
  ];

  const filteredServices =
    activeCategory === "ALL"
      ? servicesData
      : servicesData.filter((s) => s.category.toUpperCase() === activeCategory);

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <Section ref={sectionRef} id="services" className="relative overflow-hidden">
      {/* Background Ambient Layer 1: Directional Sunlight Caustic */}
      <div
        className="pointer-events-none absolute inset-0 z-[0] select-none opacity-20 dark:opacity-35 mix-blend-soft-light dark:mix-blend-screen transition-opacity duration-700"
        aria-hidden="true"
      >
        <Image
          src="/images/ambient/architectural-sunlight-caustic.png"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* Background Ambient Layer 2: 3D Smoked Quartz Prism Monolith */}
      <motion.div
        style={{ y: parallaxPrismY }}
        className="pointer-events-none absolute -right-20 sm:right-4 top-1/4 w-[380px] sm:w-[580px] h-[380px] sm:h-[580px] z-[0] select-none opacity-15 dark:opacity-25 mix-blend-screen transition-opacity duration-700"
        aria-hidden="true"
      >
        <Image
          src="/images/ambient/optical-prism-monolith.png"
          alt=""
          fill
          className="object-contain"
          sizes="580px"
        />
      </motion.div>

      {/* Background Ambient Layer 3: Swiss Datum Spec Plate */}
      <motion.div
        style={{ rotate: rotatePlate }}
        className="pointer-events-none absolute -left-20 bottom-12 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] z-[0] select-none opacity-10 dark:opacity-20 mix-blend-screen transition-opacity duration-700"
        aria-hidden="true"
      >
        <Image
          src="/images/ambient/studio-spec-plate.png"
          alt=""
          fill
          className="object-contain"
          sizes="480px"
        />
      </motion.div>

      <Container size="fluid" className="relative z-10">
        {/* Header */}
        <div className="mb-12 border-b border-border pb-8">
          <div className="flex items-center gap-3 font-mono-custom text-xs text-muted mb-4">
            <span className="text-accent font-bold">02 //</span>
            <span>SERVICES</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="font-display headline-large text-text font-bold uppercase tracking-tight">
                What We Build<span className="text-accent">.</span>
              </h2>
              <p className="mt-3 max-w-2xl font-display text-lg text-muted font-normal">
                From custom Next.js websites and Shopify stores to mobile apps and AI tools. We write clean code, set up dependable hosting, and make sure everything loads fast.
              </p>
            </div>

            <Button href="/contact" variant="pill" size="md" withArrow>
              Talk with us
            </Button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-8 flex flex-wrap gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 font-mono-custom text-xs transition-all ${
                activeCategory === cat
                  ? "bg-accent text-[#0E0E10] font-bold shadow-md shadow-accent/20"
                  : "border border-border bg-surface text-muted hover:border-accent/60 hover:text-text"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Rows List */}
        <div className="flex flex-col border-t border-border">
          {filteredServices.map((service) => (
            <ServiceRow
              key={service.id}
              service={service}
              isExpanded={expandedId === service.id}
              onToggle={() => handleToggle(service.id)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
