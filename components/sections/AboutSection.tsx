"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { statsData, StatItem } from "@/data/stats";
import { Zap, ShieldCheck, Users } from "lucide-react";

function CounterStat({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const end = stat.number;
    const duration = 1500;
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easedProgress * end);

      setDisplayValue(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, stat.number]);

  return (
    <div
      ref={ref}
      className="flex flex-col border-t border-border pt-5 pb-3"
    >
      <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text">
        {displayValue}
        <span className="text-accent">{stat.suffix}</span>
      </div>
      <div className="mt-1 font-mono-custom text-xs font-semibold text-text uppercase tracking-wider">
        {stat.label}
      </div>
      <p className="mt-1 font-body text-xs text-muted leading-relaxed">
        {stat.detail}
      </p>
    </div>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotateSpecPlate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const parallaxPlateY = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <Section ref={sectionRef} id="about" className="py-20 sm:py-28 overflow-hidden relative">
      {/* Background Layer: Swiss Studio Datum & Spec Plate (Transparent PNG) */}
      <motion.div
        style={{ y: parallaxPlateY, rotate: rotateSpecPlate }}
        className="pointer-events-none absolute -right-20 sm:right-10 top-1/4 w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] z-[0] select-none opacity-15 dark:opacity-25 mix-blend-screen transition-opacity duration-700"
        aria-hidden="true"
      >
        <Image
          src="/images/ambient/studio-spec-plate.png"
          alt=""
          fill
          className="object-contain"
          sizes="580px"
        />
      </motion.div>

      <Container size="fluid" className="relative z-10">
        {/* Section Top Label */}
        <div className="mb-10 flex items-center gap-3 font-mono-custom text-xs text-muted">
          <span className="text-accent font-bold">01 //</span>
          <span>WHO WE ARE</span>
        </div>

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Cols 1-7): Human-readable studio story & guarantees */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight uppercase leading-[1.08] mb-6">
                Custom websites and apps built to load fast and win clients<span className="text-accent">.</span>
              </h2>

              <p className="font-body text-base sm:text-lg text-text/85 leading-relaxed mb-8">
                Incorelab is an independent studio based in Zurich. You work directly with the senior engineers and designers building your site, without account managers in between. We build clean, fast software that solves real business problems.
              </p>

              {/* Core Human Principles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="rounded-xl border border-border bg-surface/50 p-4">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <Users className="h-4 w-4" />
                    <span className="font-mono-custom text-xs font-bold uppercase text-text">Direct Senior Access</span>
                  </div>
                  <p className="font-body text-xs text-muted leading-relaxed">
                    You talk straight to the people writing your code. Questions get answered quickly without delay.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-surface/50 p-4">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <Zap className="h-4 w-4" />
                    <span className="font-mono-custom text-xs font-bold uppercase text-text">Under 400ms Speed</span>
                  </div>
                  <p className="font-body text-xs text-muted leading-relaxed">
                    We tune every page so it opens instantly on phones and ranks well on Google Search.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-surface/50 p-4">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="font-mono-custom text-xs font-bold uppercase text-text">You Own Everything</span>
                  </div>
                  <p className="font-body text-xs text-muted leading-relaxed">
                    All source code, designs, and credentials belong to you from day one. No lock-in, ever.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 font-mono-custom text-xs text-muted">
              <span>ZURICH ✦ DUBAI ✦ NEW YORK</span>
              <span className="text-accent font-semibold">PRODUCTION-READY NEXT.JS &amp; SHOPIFY</span>
            </div>
          </div>

          {/* Right Column (Cols 8-12): Side Stats with Clean Counters */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {statsData.map((stat) => (
                <CounterStat key={stat.id} stat={stat} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
