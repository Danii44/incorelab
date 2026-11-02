"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function emptySubscribe() {
  return () => {};
}

export function Cursor() {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [cursorText, setCursorText] = useState<string>("");
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const reducedMotion = useReducedMotion();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth lagging ring with spring physics
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only show on fine pointer devices (desktops/laptops with mouse)
    const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isTouch || reducedMotion) return;

    document.body.classList.add("has-custom-cursor");

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check for project view triggers
      const viewEl = target.closest("[data-cursor-view]");
      if (viewEl) {
        const text = viewEl.getAttribute("data-cursor-view") || "VIEW";
        setCursorText(text);
        setIsHovered(true);
        return;
      }

      // Check for magnetic or clickable targets
      const clickableEl = target.closest(
        'a, button, [role="button"], input, select, textarea, [data-cursor-pointer]'
      );
      if (clickableEl) {
        setIsPointer(true);
        setIsHovered(false);
        setCursorText("");
      } else {
        setIsPointer(false);
        setIsHovered(false);
        setCursorText("");
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [reducedMotion, isVisible, mouseX, mouseY]);

  if (!mounted || reducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden mix-blend-difference"
      aria-hidden="true"
    >
      {/* Lagging ring / expanded bubble */}
      <motion.div
        className="fixed left-0 top-0 flex items-center justify-center rounded-full bg-white text-black font-mono-custom text-[10px] font-bold tracking-widest uppercase transition-colors"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 96 : isPointer ? 48 : 34,
          height: isHovered ? 96 : isPointer ? 48 : 34,
          opacity: isVisible ? (isHovered ? 1 : 0.8) : 0,
          scale: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="select-none text-black font-extrabold"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Tiny direct center dot (instant tracking) */}
      <motion.div
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-white"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible && !isHovered ? 1 : 0,
          scale: isPointer ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
