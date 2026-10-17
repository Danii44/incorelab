"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  splitBy?: "words" | "lines" | "characters";
  delay?: number;
  stagger?: number;
}

export function SplitText({
  text,
  className,
  as: Component = "span",
  splitBy = "words",
  delay = 0,
  stagger = 0.04,
}: SplitTextProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  const items = splitBy === "words" ? text.split(" ") : text.split("\n");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Component className={cn("inline-block", className)}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.28em] gap-y-1"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        {items.map((item, idx) => (
          <span key={idx} className="relative inline-block overflow-hidden py-1">
            <motion.span variants={itemVariants} className="inline-block">
              {item}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
