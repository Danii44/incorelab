"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "pill" | "pill-outline" | "circle" | "editorial" | "secondary";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  isExternal?: boolean;
  withArrow?: boolean;
  magnetic?: boolean;
  magneticStrength?: number;
  children: React.ReactNode;
}

export function Button({
  variant = "pill",
  size = "md",
  href,
  isExternal = false,
  withArrow = false,
  magnetic = true,
  magneticStrength = 0.3,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center font-mono-custom text-xs font-semibold tracking-wider uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-[11px]",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-xs tracking-widest",
    xl: "px-10 py-5 text-sm tracking-widest",
  };

  const variantStyles = {
    pill: "rounded-full bg-accent text-[#0E0E10] hover:bg-text hover:text-bg shadow-sm hover:shadow-lg hover:shadow-accent/25 active:scale-95",
    "pill-outline":
      "rounded-full border border-border bg-surface/50 text-text backdrop-blur-sm hover:border-accent hover:text-accent hover:bg-surface active:scale-95",
    circle:
      "rounded-full aspect-square w-36 sm:w-44 lg:w-48 bg-accent text-[#0E0E10] flex-col p-4 text-center font-display text-base sm:text-lg font-bold tracking-tight lowercase hover:scale-105 transition-transform duration-300 shadow-xl",
    editorial:
      "border-b border-text/40 pb-1 text-text hover:border-accent hover:text-accent rounded-none px-0 py-0 text-xs tracking-widest",
    secondary:
      "rounded-full bg-surface border border-border text-text hover:bg-accent hover:text-[#0E0E10] hover:border-accent",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2]" />
        )}
      </span>
    </>
  );

  const combinedClasses = cn(
    baseStyles,
    variant !== "circle" && variant !== "editorial" && sizeStyles[size],
    variantStyles[variant],
    className
  );

  const renderedButton = href ? (
    isExternal ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {content}
      </a>
    ) : (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    )
  ) : (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );

  if (magnetic) {
    return (
      <MagneticWrapper strength={magneticStrength}>
        {renderedButton}
      </MagneticWrapper>
    );
  }

  return renderedButton;
}
