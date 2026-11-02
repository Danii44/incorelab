"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [count, setCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // If reduced motion is preferred, complete almost immediately
    if (reducedMotion) {
      const timer = setTimeout(() => {
        setIsCompleted(true);
        onComplete?.();
      }, 0);
      return () => clearTimeout(timer);
    }

    // Check if session has already seen preloader
    let hasSeen = false;
    try {
      hasSeen = !!sessionStorage.getItem("incorelab_loaded");
    } catch {
      hasSeen = false;
    }

    if (hasSeen) {
      const timer = setTimeout(() => {
        setIsCompleted(true);
        onComplete?.();
      }, 0);
      return () => clearTimeout(timer);
    }

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 2;
      if (current >= 100) {
        current = 100;
        setCount(100);
        clearInterval(interval);
        sessionStorage.setItem("incorelab_loaded", "true");

        setTimeout(() => {
          setIsCompleted(true);
          onComplete?.();
        }, 500);
      } else {
        setCount(current);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [reducedMotion, onComplete]);

  return (
    <AnimatePresence>
      {!isCompleted && (
        <motion.div
          key="preloader"
          initial={{ y: "0%" }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between bg-[#0E0E10] p-6 text-[#F2EFE9] sm:p-12"
        >
          {/* Top metadata */}
          <div className="flex items-center justify-between font-mono-custom text-xs text-[#8A8A8F]">
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>INCORELAB / ARCHITECTURE</span>
            </div>
            <span>EST. 2024</span>
          </div>

          {/* Center editorial logo */}
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-4 flex items-center justify-center rounded-2xl bg-[#141418] p-5 border border-white/10 shadow-[0_0_50px_rgba(78,136,255,0.2)]"
            >
              <Image
                src="/logo/incorelab-logo.png"
                alt="incorelab"
                width={260}
                height={60}
                style={{ width: "auto" }}
                className="h-10 sm:h-14 w-auto object-contain"
                priority
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-2 font-mono-custom text-xs tracking-[0.25em] text-[#8A8A8F] uppercase"
            >
              DIGITAL PRODUCT STUDIO // WE BUILD WHAT&apos;S NEXT
            </motion.p>
          </div>

          {/* Bottom counter */}
          <div className="flex items-end justify-between border-t border-[#2A2A2E] pt-6 font-mono-custom">
            <div className="text-xs text-[#8A8A8F]">
              <span>INITIALIZING ENGINE</span>
            </div>
            <div className="text-5xl sm:text-7xl font-bold tracking-tight text-[#F2EFE9]">
              {count.toString().padStart(3, "0")}
              <span className="text-lg text-accent ml-1">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
