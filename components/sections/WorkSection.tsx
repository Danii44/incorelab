"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { projectsData, ProjectItem } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  return (
    <div
      className="group relative flex flex-col justify-between h-full w-[82vw] sm:w-[60vw] md:w-[50vw] lg:w-[42vw] xl:w-[38vw] flex-shrink-0 rounded-2xl border border-border bg-surface p-6 sm:p-8 transition-all duration-500 hover:border-accent/60 shadow-sm"
      data-cursor-view="VIEW"
    >
      <Link href={`/work/${project.slug}`} className="flex flex-col h-full justify-between">
        {/* Top Card Info */}
        <div className="flex items-center justify-between pb-6 font-mono-custom text-xs text-muted">
          <div className="flex items-center gap-2">
            <span className="text-accent">{project.number}</span>
            <span>/ {project.category}</span>
          </div>
          <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px]">
            {project.year}
          </span>
        </div>

        {/* Media Container with Clip-Path Reveal and Zoom */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-border/40 my-auto">
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            sizes="(max-width: 768px) 85vw, 42vw"
          />
          {/* Subtle dark film vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-30" />

          {/* Quick metric pill badge on card */}
          {project.metrics?.[0] && (
            <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 backdrop-blur-md font-mono-custom text-xs text-white">
              <span className="text-accent font-bold mr-1.5">{project.metrics[0].value}</span>
              <span>{project.metrics[0].label}</span>
            </div>
          )}
        </div>

        {/* Bottom Headline & Name */}
        <div className="pt-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text group-hover:text-accent transition-colors">
              {project.name}
            </h3>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/80 text-text transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-[#0E0E10]">
              <ArrowUpRight className="h-4 w-4 stroke-[2]" />
            </div>
          </div>
          <p className="mt-2 line-clamp-2 font-body text-xs sm:text-sm text-muted">
            {project.headline}
          </p>
        </div>
      </Link>
    </div>
  );
}

export function WorkSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const reducedMotion = useReducedMotion();

  // Dynamically compute exact horizontal scroll distance in pixels based on rendered track width
  useEffect(() => {
    const computeDistance = () => {
      if (trackRef.current) {
        const fullWidth = trackRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        const dist = Math.max(0, fullWidth - windowWidth + 96);
        setScrollRange(dist);
      }
    };

    // Initial calculation and observer
    computeDistance();
    const timer = setTimeout(computeDistance, 200);

    window.addEventListener("resize", computeDistance);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", computeDistance);
    };
  }, []);

  // Desktop horizontal scroll transformation linked to target container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Calculate pixel translation range for horizontal scroll
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  const moireX = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const rotatePlate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section id="work" className="relative border-b border-border">
      {/* Desktop & Tablet Sticky Pinned Horizontal Scroll */}
      <div
        ref={targetRef}
        className="relative hidden md:block h-[320vh]"
      >
        <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden py-10 sm:py-14 relative">
          {/* Background Ambient Layer 1: Directional Sunlight Caustic */}
          <div
            className="pointer-events-none absolute inset-0 z-[0] select-none opacity-20 dark:opacity-30 mix-blend-soft-light dark:mix-blend-screen transition-opacity duration-700"
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

          {/* Background Ambient Layer 2: Moiré Wave Interference Grid with Horizontal Parallax */}
          <motion.div
            style={{ x: moireX }}
            className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 w-[850px] h-[850px] z-[0] select-none opacity-15 dark:opacity-25 mix-blend-screen transition-opacity duration-700"
            aria-hidden="true"
          >
            <Image
              src="/images/ambient/moire-interference-grid.png"
              alt=""
              fill
              className="object-contain"
              sizes="850px"
            />
          </motion.div>

          {/* Background Ambient Layer 3: Swiss Studio Spec Datum Plate */}
          <motion.div
            style={{ rotate: rotatePlate }}
            className="pointer-events-none absolute -right-16 top-10 w-[420px] h-[420px] z-[0] select-none opacity-10 dark:opacity-20 mix-blend-screen transition-opacity duration-700"
            aria-hidden="true"
          >
            <Image
              src="/images/ambient/studio-spec-plate.png"
              alt=""
              fill
              className="object-contain"
              sizes="420px"
            />
          </motion.div>

          {/* Section Header */}
          <Container size="fluid" className="relative z-10 w-full">
            <div className="flex items-end justify-between border-b border-border pb-4 sm:pb-6">
              <div>
                <div className="flex items-center gap-3 font-mono-custom text-xs text-muted mb-2">
                  <span className="text-accent font-bold">03 //</span>
                  <span>SELECTED ARCHITECTURE</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-bold uppercase tracking-tight text-text">
                  Selected Work<span className="text-accent">.</span>
                </h2>
              </div>
              <div className="font-mono-custom text-xs text-muted">
                [ {projectsData.length} CASE STUDIES ]
              </div>
            </div>
          </Container>

          {/* Horizontally Moving Track */}
          <div className="w-full overflow-hidden my-auto py-4 sm:py-6">
            <motion.div
              ref={trackRef}
              style={reducedMotion ? {} : { x }}
              className="flex gap-6 sm:gap-8 pl-8 sm:pl-12 xl:pl-16 pr-24 w-max"
            >
              {projectsData.slice(0, 8).map((project, idx) => (
                <ProjectCard key={project.slug} project={project} index={idx} />
              ))}

              {/* End Archive Card */}
              <div className="group relative flex flex-col justify-between h-full w-[82vw] sm:w-[60vw] lg:w-[32vw] xl:w-[28vw] flex-shrink-0 rounded-2xl border border-dashed border-border bg-surface/50 p-8 transition-all duration-500 hover:border-accent">
                <Link href="/work" className="flex flex-col h-full justify-between">
                  <div className="font-mono-custom text-xs text-accent">
                    COMPLETE ARCHIVE //
                  </div>
                  <div className="my-auto text-center py-8">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-[#0E0E10] transition-all">
                      <ArrowUpRight className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-text mb-2">
                      View All {projectsData.length} Projects
                    </h3>
                    <p className="font-body text-xs text-muted max-w-xs mx-auto leading-relaxed">
                      Rental car apps, enterprise ERP dashboards, n8n AI workflows, real estate, and healthcare platforms.
                    </p>
                  </div>
                  <div className="font-mono-custom text-xs text-muted text-center group-hover:text-accent transition-colors">
                    EXPLORE 16 CASE STUDIES →
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Bottom Progress Bar */}
          <Container size="fluid" className="w-full">
            <div className="flex items-center justify-between border-t border-border pt-4 font-mono-custom text-xs text-muted">
              <span>SCROLL DOWN TO BROWSE PROJECTS</span>
              <div className="h-1 w-32 rounded-full bg-border overflow-hidden">
                <motion.div
                  style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
                  className="h-full w-full bg-accent"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Mobile Vertical Stack (< 768px) */}
      <div className="block md:hidden py-20">
        <Container size="fluid">
          <div className="mb-12 border-b border-border pb-6 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 font-mono-custom text-xs text-muted mb-2">
                <span className="text-accent font-bold">03 //</span>
                <span>SELECTED ARCHITECTURE</span>
              </div>
              <h2 className="font-display headline-large text-text font-bold uppercase tracking-tight">
                Selected Work<span className="text-accent">.</span>
              </h2>
            </div>
            <span className="font-mono-custom text-xs text-muted">
              [ {projectsData.length} PROJECTS ]
            </span>
          </div>

          <div className="flex flex-col gap-10">
            {projectsData.slice(0, 6).map((project, idx) => (
              <ProjectCard key={project.slug} project={project} index={idx} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-mono-custom text-xs font-bold uppercase text-[#0E0E10] transition-transform hover:scale-105"
            >
              <span>Explore All {projectsData.length} Case Studies</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
