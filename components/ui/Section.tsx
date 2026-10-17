import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  hasBorderTop?: boolean;
  hasBorderBottom?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(function Section(
  {
    children,
    className,
    hasBorderTop = false,
    hasBorderBottom = false,
    ...props
  },
  ref
) {
  return (
    <section
      ref={ref}
      className={cn(
        "relative py-24 sm:py-32 lg:py-40 transition-colors",
        hasBorderTop && "border-t border-border",
        hasBorderBottom && "border-b border-border",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
});

