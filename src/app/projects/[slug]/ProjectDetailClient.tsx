"use client";

import Link from "next/link";
import type { Project, ProjectStatus } from "@/data/projects";
import { ProjectGallery } from "@/components/ProjectGallery";
import { useLanguage } from "@/lib/i18n";

const getStatusBadge = (status: ProjectStatus) => {
  if (status === "live") return { label: "LIVE", className: "bg-green-500" };
  if (status === "building")
    return { label: "BUILDING", className: "bg-rose-500" };
  if (status === "closed")
    return { label: "CLOSED", className: "bg-zinc-500" };
  return { label: "WIP", className: "bg-red-500" };
};

function getYoutubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
  );
  return match ? match[1] : null;
}

export function ProjectDetailClient({ project }: { project: Project }) {
  const { lang, t } = useLanguage();
  const badge = getStatusBadge(project.status);
  const youtubeId = project.demo ? getYoutubeId(project.demo) : null;

  return (
    <div className="flex min-h-screen justify-center bg-white px-4 py-10">
      <main className="w-full max-w-3xl">
        <Link
          href="/projects"
          className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-500 transition hover:text-zinc-900"
        >
          {t("projects.backAll")}
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold text-zinc-900">
              {project.name}
            </h1>
            <span
              className={`rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wide text-white ${badge.className}`}
            >
              {badge.label}
            </span>
          </div>
          <p className="mt-2 text-lg text-zinc-600">
            {project.tagline[lang]}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
              >
                {tech}
              </span>
            ))}
            <span className="ml-1 text-xs text-zinc-400">
              · {project.year}
            </span>
          </div>

          {(project.url || project.repo || project.paper) && (
            <div className="mt-4 flex flex-wrap gap-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
                >
                  {t("projects.visitSite")}
                </a>
              )}
              {project.paper && (
                <a
                  href={project.paper}
                  download
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-500 hover:bg-zinc-50"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <polyline points="9 15 12 18 15 15" />
                  </svg>
                  {t("projects.paper")}
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-500 hover:bg-zinc-50"
                >
                  {t("projects.sourceCode")}
                </a>
              )}
            </div>
          )}
        </header>

        {/* Description */}
        <section className="mb-10 space-y-4 text-sm leading-relaxed text-zinc-700">
          {project.description[lang]
            .split("\n\n")
            .map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
        </section>

        {/* Gallery */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900">
            {t("projects.gallery")}
          </h2>
          <ProjectGallery images={project.gallery} alt={project.name} />
        </section>

        {/* Demo video */}
        {youtubeId && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">
              {t("projects.demo")}
            </h2>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-200 bg-black shadow-sm">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={`${project.name} demo`}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
