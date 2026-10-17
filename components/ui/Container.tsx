import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "fluid" | "narrow";
}

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16",
        {
          "max-w-7xl": size === "default",
          "max-w-[1520px]": size === "fluid",
          "max-w-4xl": size === "narrow",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
