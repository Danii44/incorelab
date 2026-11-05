import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { demoProjectsData } from "@/data/demo-projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return demoProjectsData.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = demoProjectsData.find((item) => item.slug === slug);
  return {
    title: project ? `${project.name} | Demo` : "Demo not found",
    robots: { index: false, follow: false },
  };
}

export default async function DemoPage({ params }: Props) {
  const { slug } = await params;
  const project = demoProjectsData.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <section className="px-3 pb-6 pt-28 sm:px-6 sm:pt-32">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-surface p-4">
        <div>
          <h1 className="font-display text-xl font-bold text-text">{project.name}</h1>
          <p className="mt-1 max-w-2xl font-body text-sm text-muted">
            Original project demo. Bookings, payments, and form submissions are disabled.
          </p>
        </div>
        <Link href={`/work/${project.slug}`} className="inline-flex min-h-11 items-center gap-2 font-mono-custom text-xs text-accent hover:underline focus-visible:outline-2 focus-visible:outline-accent">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to project
        </Link>
      </div>
      <iframe
        src={`/project-demos/${project.slug}/index.html`}
        title={`${project.name} website demo`}
        sandbox="allow-scripts"
        referrerPolicy="no-referrer"
        className="h-[78dvh] min-h-[480px] w-full rounded-xl border border-border bg-white"
      />
    </section>
  );
}
