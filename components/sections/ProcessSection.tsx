"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { processData, ProcessStep } from "@/data/process";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Check } from "lucide-react";

function ProcessStepItem({
  step,
  index,
}: {
  step: ProcessStep;
  index: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative pl-8 sm:pl-16 md:pl-24 pb-16 last:pb-0">
      {/* Step Marker Node on the line */}
      <motion.div
        initial={reducedMotion ? {} : { scale: 0, rotate: -90 }}
        whileInView={reducedMotion ? {} : { scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-[-16px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg text-text shadow-sm"
      >
        <span className="h-2 w-2 rounded-full bg-accent" />
      </motion.div>

      {/* Step Card Content */}
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, x: 20 }}
        whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl border border-border bg-surface/50 p-6 sm:p-10 backdrop-blur-sm"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-border pb-6">
          <div className="flex items-baseline gap-4">
            {/* Flipping 3D step number */}
            <motion.span
              initial={reducedMotion ? {} : { rotateX: 90, opacity: 0 }}
              whileInView={reducedMotion ? {} : { rotateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-mono-custom text-2xl sm:text-3xl font-bold text-accent"
            >
              {step.number}
            </motion.span>
            <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-text">
              {step.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 font-mono-custom text-xs text-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            <span>TIMELINE: {step.duration}</span>
          </div>
        </div>

        <p className="mt-6 font-display text-base sm:text-lg text-text/90 font-normal leading-relaxed">
          {step.description}
        </p>

        {/* Deliverables Checklist */}
        <div className="mt-8 pt-6 border-t border-border/40">
          <span className="font-mono-custom text-xs text-muted tracking-widest uppercase block mb-3">
            PHASE MILESTONES
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {step.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 font-mono-custom text-xs text-muted"
              >
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProcessSection() {
  const lineContainerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  // Scroll animation for self-drawing vertical progress line
  const { scrollYProgress } = useScroll({
    target: lineContainerRef,
    offset: ["start 65%", "end 75%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const { scrollYProgress: sectionScroll } = useScroll({
    target: lineContainerRef,
    offset: ["start end", "end start"],
  });
  const moireParallaxY = useTransform(sectionScroll, [0, 1], [-80, 80]);

  return (
    <Section id="process" className="relative overflow-hidden">
      {/* Background Layer: Authentic Moiré Wave Interference Grid (Transparent PNG) */}
      <motion.div
        style={{ y: moireParallaxY }}
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1100px] lg:w-[1400px] h-[700px] sm:h-[1100px] lg:h-[1400px] z-[0] select-none opacity-20 dark:opacity-30 mix-blend-screen transition-opacity duration-700"
        aria-hidden="true"
      >
        <Image
          src="/images/ambient/moire-interference-grid.png"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 768px) 700px, 1400px"
        />
      </motion.div>

      <Container size="fluid" className="relative z-10">
        {/* Header */}
        <div className="mb-16 sm:mb-24 border-b border-border pb-8">
          <div className="flex items-center gap-3 font-mono-custom text-xs text-muted mb-4">
            <span className="text-accent font-bold">04 //</span>
            <span>HOW WE WORK</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-display headline-large text-text font-bold uppercase tracking-tight">
              Our Process<span className="text-accent">.</span>
            </h2>
            <p className="max-w-md font-body text-sm text-muted">
              Four clear stages from initial blueprint to live launch. You always know what we are building and what comes next.
            </p>
          </div>
        </div>

        {/* Process Timeline with Self-Drawing Line */}
        <div ref={lineContainerRef} className="relative ml-2 sm:ml-4 lg:ml-8">
          {/* Background Track Line */}
          <div className="absolute left-0 top-0 h-full w-[1px] bg-border" />

          {/* Foreground Animated Self-Drawing Line */}
          {!reducedMotion && (
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-0 top-0 w-[1px] bg-accent origin-top transition-colors"
            />
          )}

          {/* Steps */}
          <div className="relative">
            {processData.map((step, idx) => (
              <ProcessStepItem key={step.number} step={step} index={idx} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
