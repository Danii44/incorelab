"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { faqData } from "@/data/faq";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reducedMotion = useReducedMotion();

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Section id="faq" className="relative border-b border-border bg-surface/30">
      <Container size="fluid">
        {/* Header */}
        <div className="mb-14 sm:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-border pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono-custom text-xs text-muted mb-4">
              <HelpCircle className="h-4 w-4 text-accent" />
              <span className="text-accent font-bold">FAQ //</span>
              <span>HELPFUL ANSWERS</span>
            </div>
            <h2 className="font-display headline-large text-text font-bold uppercase tracking-tight">
              Frequently Asked<span className="text-accent">.</span>
            </h2>
          </div>

          <p className="max-w-md font-body text-sm text-muted">
            Direct, candid answers about how we work, what we charge, timelines, and technical standards.
          </p>
        </div>

        {/* Accordion Questions List */}
        <div className="flex flex-col border-t border-border">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border-b border-border transition-colors ${
                  isOpen ? "bg-surface/50" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(idx)}
                  className="flex w-full items-center justify-between py-6 sm:py-8 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-expanded={isOpen}
                  data-cursor-pointer
                >
                  <div className="flex items-start sm:items-baseline gap-4 sm:gap-8 pr-4">
                    <span className="font-mono-custom text-xs text-accent font-semibold flex-shrink-0 mt-1 sm:mt-0">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <div>
                      <span className="font-mono-custom text-[10px] text-muted uppercase tracking-wider block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-text hover:text-accent transition-colors">
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border bg-surface text-text flex-shrink-0 transition-all">
                    {isOpen ? (
                      <Minus className="h-4 w-4 stroke-[2]" />
                    ) : (
                      <Plus className="h-4 w-4 stroke-[1.5]" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={reducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-2 pl-8 sm:pl-16 pr-4 sm:pr-12">
                        <p className="font-body text-sm sm:text-base text-text/85 leading-relaxed max-w-4xl">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
