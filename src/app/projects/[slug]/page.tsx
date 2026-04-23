import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { ProjectGallery } from "@/components/ProjectGallery";

const getStatusBadge = (status: "live" | "wip" | "building") => {
  if (status === "live") return { label: "LIVE", className: "bg-green-500" };
  if (status === "building")
    return { label: "BUILDING", className: "bg-rose-500" };
  return { label: "WIP", className: "bg-red-500" };
};

function getYoutubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
  );
  return match ? match[1] : null;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} | Matias Rau Bekerman`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const badge = getStatusBadge(project.status);

  return (
    <div className="flex min-h-screen justify-center bg-white px-4 py-10">
      <main className="w-full max-w-3xl">
        <Link
          href="/projects"
          className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-500 transition hover:text-zinc-900"
        >
          ← All projects
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold text-zinc-900">{project.name}</h1>
            <span
              className={`rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wide text-white ${badge.className}`}
            >
              {badge.label}
            </span>
          </div>
          <p className="mt-2 text-lg text-zinc-600">{project.tagline}</p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
              >
                {t}
              </span>
            ))}
            <span className="ml-1 text-xs text-zinc-400">· {project.year}</span>
          </div>

          {(project.url || project.repo) && (
            <div className="mt-4 flex gap-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
                >
                  Visit site ↗
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-500 hover:bg-zinc-50"
                >
                  Source code
                </a>
              )}
            </div>
          )}
        </header>

        {/* Description */}
        <section className="mb-10 space-y-4 text-sm leading-relaxed text-zinc-700">
          {project.description.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>

        {/* Gallery */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900">Gallery</h2>
          <ProjectGallery images={project.gallery} alt={project.name} />
        </section>

        {/* Demo video */}
        {project.demo && getYoutubeId(project.demo) && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">Demo</h2>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-200 bg-black shadow-sm">
              <iframe
                src={`https://www.youtube.com/embed/${getYoutubeId(project.demo)}`}
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
