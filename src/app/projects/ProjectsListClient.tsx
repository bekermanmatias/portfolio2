"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsListClient() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen justify-center bg-white px-4 py-10">
      <main className="w-full max-w-3xl">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-500 transition hover:text-zinc-900"
        >
          {t("projects.backHome")}
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-zinc-900">
          {t("projects.section.all")}
        </h1>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </main>
    </div>
  );
}
