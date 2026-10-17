"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { testimonialsData } from "@/data/testimonials";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reducedMotion = useReducedMotion();

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      transition: {
        duration: 0.35,
      },
    }),
  };

  return (
    <Section id="testimonials" className="relative overflow-hidden bg-surface/40">
      <Container size="fluid">
        {/* Header */}
        <div className="mb-14 sm:mb-20 flex items-center justify-between border-b border-border pb-8">
          <div>
            <div className="flex items-center gap-3 font-mono-custom text-xs text-muted mb-2">
              <span className="text-accent font-bold">05 //</span>
              <span>CLIENT FEEDBACK</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-text">
              What Clients Say<span className="text-accent">.</span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-none"
              aria-label="Previous quote"
              data-cursor-pointer
            >
              <ArrowLeft className="h-4 w-4 stroke-[1.5]" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-none"
              aria-label="Next quote"
              data-cursor-pointer
            >
              <ArrowRight className="h-4 w-4 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Drag Carousel Content */}
        <div className="relative min-h-[340px] sm:min-h-[280px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={reducedMotion ? {} : variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag={reducedMotion ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000 || offset.x < -80) {
                  handleNext();
                } else if (swipe > 10000 || offset.x > 80) {
                  handlePrev();
                }
              }}
              className="cursor-grab active:cursor-grabbing flex flex-col justify-between"
            >
              {/* Quote Mark Icon */}
              <div className="mb-6 text-accent opacity-70">
                <Quote className="h-10 w-10 sm:h-12 sm:w-12 rotate-180 stroke-[1]" />
              </div>

              {/* Large Editorial Quote */}
              <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-text leading-[1.18] select-none">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author & Project in Mono */}
              <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-t border-border pt-6 font-mono-custom text-xs">
                <div>
                  <span className="text-text font-bold text-sm block">
                    {current.author}
                  </span>
                  <span className="text-muted">
                    {current.role} ✦ {current.company}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-muted">
                  <span>PROJECT: {current.project}</span>
                  <span className="rounded-full border border-border px-2 py-0.5 text-accent">
                    {current.year}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="mt-12 flex items-center justify-between border-t border-border/40 pt-4 font-mono-custom text-xs text-muted">
          <span>DRAG HORIZONTALLY TO FLIP TESTIMONIALS</span>
          <div className="flex items-center gap-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  currentIndex === idx ? "w-8 bg-accent" : "w-2 bg-border hover:bg-muted"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
