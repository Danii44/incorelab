import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { projectsData } from "@/data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  projectsData.forEach((project) => {
    params.push({ slug: project.slug });
    if (project.aliases) {
      project.aliases.forEach((alias) => {
        params.push({ slug: alias });
      });
    }
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug || p.aliases?.includes(slug));

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} | ${project.projectType === "demo" ? "Original Demo" : "Case Study"}`,
    description: project.headline,
    openGraph: {
      title: `${project.name} | incorelab`,
      description: project.headline,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug || p.aliases?.includes(slug));

  if (!project) {
    notFound();
  }

  const nextProject =
    projectsData.find((p) => p.slug === project.nextSlug || p.aliases?.includes(project.nextSlug)) ||
    projectsData[0];

  return (
    <article className="pt-32 pb-24 sm:pt-40 sm:pb-36">
      {/* Top Breadcrumb & Category */}
      <Container size="fluid">
        <div className="flex items-center justify-between border-b border-border pb-6 font-mono-custom text-xs text-muted">
          <Link
            href="/work"
            className="group flex items-center gap-2 hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5 stroke-[2] transition-transform group-hover:-translate-x-1" />
            <span>BACK TO ALL WORK</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-accent">{project.number}</span>
            <span>/</span>
            <span>{project.category}</span>
          </div>
        </div>

        {/* Project Title & Headline */}
        <div className="py-12 sm:py-20 border-b border-border">
          {project.projectType === "demo" && (
            <p className="mb-5 font-mono-custom text-xs text-accent">ORIGINAL PROJECT · DEMO</p>
          )}
          <h1 className="font-display headline-huge font-bold uppercase tracking-tight text-text">
            {project.name}
          </h1>
          <p className="mt-6 max-w-3xl font-display text-xl sm:text-3xl font-normal text-muted leading-tight">
            {project.headline}
          </p>
          {project.projectType === "demo" && project.liveUrl && (
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button href={project.liveUrl} isExternal withArrow>Open demo</Button>
              <span className="font-body text-sm text-muted">Design preview. Bookings, payments, and form submissions are disabled.</span>
            </div>
          )}
        </div>

        {/* Metadata Details Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-10 border-b border-border font-mono-custom text-xs">
          <div>
            <span className="text-muted block mb-1">{project.projectType === "demo" ? "PROJECT" : "CLIENT"}</span>
            <span className="text-text font-bold text-sm">{project.client}</span>
          </div>
          <div>
            <span className="text-muted block mb-1">DISCIPLINE</span>
            <span className="text-text font-bold text-sm">{project.category}</span>
          </div>
          <div>
            <span className="text-muted block mb-1">YEAR</span>
            <span className="text-text font-bold text-sm">{project.year}</span>
          </div>
          <div>
            <span className="text-muted block mb-1">STACK</span>
            <span className="text-text font-bold text-sm">
              {project.techStack.slice(0, 2).join(", ")}
            </span>
          </div>
        </div>

        {/* Hero Full-Bleed Image */}
        <div className={`relative my-12 ${project.projectType === "demo" ? "aspect-[4/3]" : "aspect-[16/9]"} w-full overflow-hidden rounded-2xl border border-border bg-surface`}>
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1500px"
          />
        </div>

        {/* Overview, Challenge & Solution Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 py-16 border-b border-border">
          <div className="lg:col-span-4">
            <span className="font-mono-custom text-xs text-accent tracking-widest uppercase block mb-3">
              01 // THE CONTEXT
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text">
              Overview & Objectives
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8 font-body text-base sm:text-lg text-text/90 leading-relaxed">
            <p className="font-display text-xl sm:text-2xl font-medium text-text leading-snug">
              {project.overview}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-border/60">
              <div>
                <span className="font-mono-custom text-xs text-muted tracking-widest uppercase block mb-2">
                  THE CHALLENGE
                </span>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div>
                <span className="font-mono-custom text-xs text-muted tracking-widest uppercase block mb-2">
                  {project.projectType === "demo" ? "DESIGN APPROACH" : "OUR ARCHITECTURAL SOLUTION"}
                </span>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results & Key Metrics Section */}
        {project.metrics.length > 0 && <div className="py-16 border-b border-border">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <span className="font-mono-custom text-xs text-accent tracking-widest uppercase block mb-2">
                02 // IMPACT & METRICS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text">
                Quantifiable Results
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-surface p-8 flex flex-col justify-between"
              >
                <div className="font-display text-5xl font-bold text-accent mb-4">
                  {metric.value}
                </div>
                <div className="font-mono-custom text-xs text-muted uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        }

        {/* Image Gallery */}
        <div className="py-16 border-b border-border">
          <span className="font-mono-custom text-xs text-accent tracking-widest uppercase block mb-8">
            03 // VISUAL ARTIFACTS & DETAILS
          </span>
          <div className={`grid grid-cols-1 ${project.projectType === "demo" ? "" : "md:grid-cols-3"} gap-6`}>
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                className={`relative ${project.projectType === "demo" ? "aspect-[2/1]" : "aspect-[4/3]"} overflow-hidden rounded-xl border border-border bg-surface`}
              >
                <Image
                  src={img}
                  alt={`${project.name} gallery ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes={project.projectType === "demo" ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="py-12 border-b border-border flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono-custom text-xs text-muted uppercase">TECHNOLOGY STACK:</span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-border bg-surface px-3 py-1 font-mono-custom text-xs text-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              isExternal
              variant="pill-outline"
              size="sm"
              withArrow
            >
              {project.projectType === "demo" ? "Open demo" : "Launch Live Preview"}
            </Button>
          )}
        </div>

        {/* Next Project Link */}
        <div className="pt-20">
          <span className="font-mono-custom text-xs text-muted uppercase tracking-widest block mb-4">
            NEXT CASE STUDY
          </span>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block border border-border bg-surface/50 p-8 sm:p-14 rounded-2xl hover:border-accent transition-all duration-300"
            data-cursor-view="NEXT"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono-custom text-xs text-accent mb-2 block">
                  {nextProject.number} {"//"} {nextProject.category}
                </span>
                <h3 className="font-display headline-medium font-bold text-text group-hover:text-accent transition-colors">
                  {nextProject.name}
                </h3>
                <p className="mt-2 font-body text-sm text-muted max-w-xl">
                  {nextProject.headline}
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface text-text group-hover:bg-accent group-hover:text-[#0E0E10] group-hover:border-accent transition-colors">
                <ArrowUpRight className="h-6 w-6 stroke-[2]" />
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </article>
  );
}
