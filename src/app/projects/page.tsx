import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "All Projects | Matias Rau Bekerman",
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen justify-center bg-white px-4 py-10">
      <main className="w-full max-w-3xl">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-500 transition hover:text-zinc-900"
        >
          ← Back home
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-zinc-900">All Projects</h1>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:border-zinc-300 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
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
                    className={`rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wide text-white ${
                      project.status === "live"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {project.status === "live" ? "LIVE" : "WIP"}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-zinc-600">
                  {project.tagline}
                </p>

                <span className="mt-auto pt-3 text-sm text-zinc-500 transition group-hover:text-zinc-900">
                  View Project ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
