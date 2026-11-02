"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroWebGL } from "@/components/ui/HeroWebGL";
import { Container } from "@/components/ui/Container";
import { ArrowDown } from "lucide-react";
import { useLenis } from "@/components/layout/SmoothScrollProvider";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useLenis();

  // Scroll animations for headline scale and parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headlineScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const prismParallaxY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const causticParallaxX = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const splashParallaxY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const splashRotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  const handleScrollClick = () => {
    scrollTo("#marquee-section");
  };

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden pt-28 sm:pt-36 pb-10 sm:pb-14"
    >
      {/* Background WebGL Shader Blob */}
      <HeroWebGL />

      {/* Dynamic Chromatic Aurora Glow for "Live" Atmosphere */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-20 top-1/6 h-[500px] w-[500px] sm:h-[720px] sm:w-[720px] rounded-full bg-gradient-to-tr from-accent/35 via-[#38BDF8]/30 to-[#EC4899]/25 blur-[120px] z-[0]"
        aria-hidden="true"
      />

      {/* Layer 1: Authentic Natural Sunlight Caustic (Directional Glass Louver Beam) */}
      <motion.div
        style={{ x: causticParallaxX }}
        className="pointer-events-none absolute -top-10 -left-20 sm:left-0 w-[140%] sm:w-full h-full max-w-[1600px] z-[1] select-none opacity-20 dark:opacity-30 mix-blend-soft-light dark:mix-blend-screen transition-opacity duration-700"
        aria-hidden="true"
      >
        <Image
          src="/images/ambient/architectural-sunlight-caustic.png"
          alt=""
          fill
          priority
          loading="eager"
          className="object-cover object-top"
          sizes="100vw"
        />
      </motion.div>

      {/* Layer 2: 3D Chromatic Liquid Splash PNG with organic live floating animation */}
      <motion.div
        style={{ y: splashParallaxY, rotate: splashRotate }}
        className="pointer-events-none absolute -right-24 sm:-right-6 lg:right-4 top-1/4 sm:top-12 w-[440px] sm:w-[700px] lg:w-[900px] h-[420px] sm:h-[660px] lg:h-[800px] z-[1] select-none opacity-90 dark:opacity-100 transition-opacity duration-700"
        aria-hidden="true"
      >
        <motion.div
          animate={{
            y: [0, -18, 6, 0],
            x: [0, 8, -6, 0],
            rotate: [0, 2, -1.5, 0],
            scale: [1, 1.03, 0.98, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full h-full filter drop-shadow-[0_20px_60px_rgba(122,125,248,0.3)]"
        >
          <Image
            src="/images/ambient/hero-splash.png"
            alt=""
            fill
            priority
            loading="eager"
            className="object-contain"
            sizes="(max-width: 768px) 440px, (max-width: 1200px) 700px, 900px"
          />
        </motion.div>
      </motion.div>

      {/* Layer 3: 3D Smoked Quartz Optical Prism Monolith with subtle float & parallax */}
      <motion.div
        style={{ y: prismParallaxY }}
        className="pointer-events-none absolute -right-24 sm:right-6 lg:right-16 top-1/4 sm:top-20 w-[380px] sm:w-[540px] lg:w-[680px] h-[380px] sm:h-[540px] lg:h-[680px] z-[2] select-none opacity-20 dark:opacity-35 mix-blend-screen transition-opacity duration-700"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 1.2, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/ambient/optical-prism-monolith.png"
            alt=""
            fill
            priority
            loading="eager"
            className="object-contain"
            sizes="(max-width: 768px) 380px, 680px"
          />
        </motion.div>
      </motion.div>

      {/* Ambient Live Floating Particles & Droplet Sparks */}
      <motion.div
        animate={{
          y: [-12, 16, -12],
          x: [-6, 10, -6],
          opacity: [0.35, 0.85, 0.35],
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[30%] top-[40%] h-3 w-3 rounded-full bg-accent/70 blur-[1px] shadow-[0_0_14px_#7A7DF8] z-[3]"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          y: [14, -16, 14],
          x: [8, -6, 8],
          opacity: [0.3, 0.75, 0.3],
        }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="pointer-events-none absolute right-[42%] top-[65%] h-2.5 w-2.5 rounded-full bg-[#38BDF8]/70 blur-[1px] shadow-[0_0_12px_#38BDF8] z-[3]"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          y: [-10, 12, -10],
          x: [5, -8, 5],
          opacity: [0.25, 0.7, 0.25],
        }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="pointer-events-none absolute right-[22%] top-[24%] h-2 w-2 rounded-full bg-[#EC4899]/60 blur-[1px] shadow-[0_0_10px_#EC4899] z-[3]"
        aria-hidden="true"
      />

      {/* Top Header Mono Tag */}
      <Container size="fluid" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-border/40 pb-4 font-mono-custom text-xs text-muted"
        >
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            <span>DIGITAL STUDIO / EST. 2024</span>
          </div>
          <div className="hidden sm:block">
            <span>DUBAI ✦ ZURICH ✦ GLOBAL DEPLOYMENT</span>
          </div>
        </motion.div>
      </Container>

      {/* Center Huge Masked Headline */}
      <Container size="fluid" className="relative z-10 my-auto py-12 sm:py-20">
        <motion.div
          style={{ scale: headlineScale, opacity: headlineOpacity }}
          className="flex flex-col select-none"
        >
          {/* Line 1 */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1.1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display headline-huge font-bold uppercase tracking-tighter text-text"
            >
              We build
            </motion.h1>
          </div>

          {/* Line 2 with Accent Dot */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1.1,
                delay: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display headline-huge font-bold uppercase tracking-tighter text-text flex items-baseline"
            >
              <span>what&apos;s next</span>
              <span className="text-accent ml-1">.</span>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Bottom Subtitle & Interactive Scroll Indicator */}
      <Container size="fluid" className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-t border-border/40 pt-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-md"
          >
            <p className="font-display text-base sm:text-lg text-text/90 leading-relaxed font-normal">
              We build custom websites, Shopify stores, mobile apps, and practical AI tools. No slow templates, no middle managers. Just clean code and design that helps you grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-4"
          >
            <button
              type="button"
              onClick={handleScrollClick}
              className="group flex items-center gap-3 font-mono-custom text-xs text-text hover:text-accent transition-colors focus-visible:outline-none"
              data-cursor-pointer
            >
              <span>EXPLORE WORK</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/60 backdrop-blur-md group-hover:border-accent group-hover:text-accent transition-colors">
                <ArrowDown className="h-4 w-4 stroke-[1.5] animate-bounce" />
              </div>
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
