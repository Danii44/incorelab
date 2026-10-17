"use client";

import React, { useEffect, useRef } from "react";
import { marqueeItems, clientLogos } from "@/data/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    let lastScrollY = window.scrollY;
    let velocity = 1;
    let targetVelocity = 1;
    let x1 = 0;
    let x2 = 0;
    let animationFrameId: number;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Reverse direction when scrolling up; speed up proportionally
      targetVelocity = delta !== 0 ? Math.sign(delta) * (1 + Math.min(Math.abs(delta) * 0.12, 6)) : 1;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = () => {
      // Damping velocity back towards base 1 or -1
      velocity += (targetVelocity - velocity) * 0.08;
      if (Math.abs(velocity) < 1) velocity = Math.sign(velocity) || 1;

      // Track 1
      x1 -= velocity * 0.8;
      if (track1Ref.current) {
        const width = track1Ref.current.scrollWidth / 2;
        if (Math.abs(x1) >= width) {
          x1 = 0;
        } else if (x1 > 0) {
          x1 = -width;
        }
        track1Ref.current.style.transform = `translate3d(${x1}px, 0, 0)`;
      }

      // Track 2 (opposite default direction)
      x2 += velocity * 0.6;
      if (track2Ref.current) {
        const width = track2Ref.current.scrollWidth / 2;
        if (Math.abs(x2) >= width) {
          x2 = 0;
        } else if (x2 > 0) {
          x2 = -width;
        }
        track2Ref.current.style.transform = `translate3d(${x2}px, 0, 0)`;
      }

      // Decay target velocity back to 1
      targetVelocity += (1 - targetVelocity) * 0.03;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  const duplicatedMarquee = [...marqueeItems, ...marqueeItems, ...marqueeItems];
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <div
      id="marquee-section"
      ref={containerRef}
      className="relative w-full overflow-hidden border-y border-border bg-surface/50 py-6 sm:py-8 select-none"
    >
      {/* Strip 1: Keywords */}
      <div className="flex w-max items-center whitespace-nowrap will-change-transform" ref={track1Ref}>
        {duplicatedMarquee.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 px-6 font-display text-lg sm:text-2xl font-semibold uppercase tracking-tight text-text">
            <span>{item}</span>
            <span className="text-accent text-sm">✦</span>
          </div>
        ))}
      </div>

      {/* Strip 2: Client Logos in Mono font */}
      <div className="mt-3 flex w-max items-center whitespace-nowrap opacity-60 will-change-transform" ref={track2Ref}>
        {duplicatedLogos.map((client, idx) => (
          <div key={idx} className="flex items-center gap-6 px-6 font-mono-custom text-xs sm:text-sm text-muted">
            <span>{client}</span>
            <span className="text-accent text-xs">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
