"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectStatus } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

const getStatusBadge = (status: ProjectStatus) => {
  if (status === "live") return { label: "LIVE", className: "bg-green-500" };
  if (status === "building")
    return { label: "BUILDING", className: "bg-rose-500" };
  if (status === "closed")
    return { label: "CLOSED", className: "bg-zinc-500" };
  return { label: "WIP", className: "bg-red-500" };
};

export function ProjectCard({ project }: { project: Project }) {
  const badge = getStatusBadge(project.status);
  const { lang, t } = useLanguage();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:border-zinc-300 hover:shadow-md"
    >
      <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-100">
        <Image
          src={project.cover}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-2">
          <p className="text-base font-semibold text-zinc-900">
            {project.name}
          </p>
          <span
            className={`rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wide text-white ${badge.className}`}
          >
            {badge.label}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-zinc-600">
          {project.tagline[lang]}
        </p>

        <span className="mt-auto pt-3 text-sm text-zinc-500 transition group-hover:text-zinc-900">
          {t("projects.viewProject")}
        </span>
      </div>
    </Link>
  );
}
