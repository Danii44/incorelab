import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { projectsData } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Selected Work | Client Projects & Case Studies",
  description:
    "Explore our recent client work across custom Next.js web applications, headless Shopify stores, 3D WebGL configurators, and AI systems.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-36 overflow-hidden">
      {/* Atmospheric depth glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-accent/10 via-accent/3 to-transparent blur-3xl -z-10" />
      <Container size="fluid">
        {/* Header */}
        <div className="border-b border-border pb-12 sm:pb-16">
          <div className="flex items-center gap-3 font-mono-custom text-xs text-muted mb-4">
            <span className="text-accent font-bold">PORTFOLIO //</span>
            <span>PROVEN CLIENT RESULTS</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-display headline-huge font-bold uppercase tracking-tight text-text">
                Selected Work<span className="text-accent">.</span>
              </h1>
              <p className="mt-4 max-w-2xl font-display text-xl text-muted font-normal">
                Real software shipped for real clients. From high-frequency trading interfaces and headless Shopify stores to 3D vehicle configurators and spatial audio tools.
              </p>
            </div>
            <p className="font-mono-custom text-xs text-muted">
              [ {projectsData.length} FEATURED CASE STUDIES ]
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-16">
          {projectsData.map((project, idx) => (
            <article
              key={project.slug}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-10 transition-all duration-300 hover:border-accent"
              data-cursor-view="VIEW"
            >
              <Link href={`/work/${project.slug}`} className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between pb-6 font-mono-custom text-xs text-muted">
                    <span className="text-accent font-semibold">{project.number} // {project.category}</span>
                    <span className="rounded-full border border-border px-2.5 py-0.5">{project.year}</span>
                  </div>

                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-border/40 mb-8">
                    <Image
                      src={project.heroImage}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    {project.metrics?.[0] && (
                      <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 backdrop-blur-md font-mono-custom text-xs text-white">
                        <span className="text-accent font-bold mr-1.5">{project.metrics[0].value}</span>
                        <span>{project.metrics[0].label}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text group-hover:text-accent transition-colors">
                      {project.name}
                    </h2>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text group-hover:border-accent group-hover:bg-accent group-hover:text-[#0E0E10] transition-colors">
                      <ArrowUpRight className="h-5 w-5 stroke-[2]" />
                    </div>
                  </div>
                  <p className="mt-3 font-body text-sm text-muted leading-relaxed line-clamp-2">
                    {project.headline}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
