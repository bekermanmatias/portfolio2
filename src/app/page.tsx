"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/projects";

const IconGithub = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const IconTwitter = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconLinkedin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconYoutube = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    label: "github",
    href: "https://github.com/",
    icon: <IconGithub />,
    hasTooltip: true,
  },
  {
    label: "twitter",
    href: "https://twitter.com/",
    icon: <IconTwitter />,
    hasTooltip: false,
  },
  {
    label: "linkedin",
    href: "https://linkedin.com/",
    icon: <IconLinkedin />,
    hasTooltip: false,
  },
  {
    label: "youtube",
    href: "https://youtube.com/",
    icon: <IconYoutube />,
    hasTooltip: false,
  },
];

function GithubTooltip() {
  return (
    <div className="absolute bottom-full left-0 z-10 mb-2 w-52 rounded-xl border border-zinc-200 bg-white p-3 shadow-md">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-white">
          MR
        </div>
        <div className="leading-tight">
          <p className="text-xs font-semibold text-zinc-900">Matias Rau</p>
          <p className="text-xs text-zinc-500">@matiasrau</p>
        </div>
      </div>
      <p className="mt-2 text-xs text-zinc-600">full-stack developer</p>
      <div className="mt-1 flex items-center gap-1 text-xs text-zinc-500">
        <MapPin size={10} />
        <span>Buenos Aires, Argentina</span>
      </div>
      <div className="mt-2 flex gap-3 text-xs text-zinc-700">
        <span>
          <strong className="text-zinc-900">24</strong> Repositories
        </span>
        <span>
          <strong className="text-zinc-900">14</strong> Followers
        </span>
      </div>
    </div>
  );
}

function SocialButton({
  label,
  href,
  icon,
  hasTooltip,
}: (typeof SOCIAL_LINKS)[number]) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => hasTooltip && setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 rounded-md border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50"
      >
        {icon}
        {label}
      </a>
      {hasTooltip && open && <GithubTooltip />}
    </div>
  );
}

/* ─── Projects ──────────────────────────────────────────────────── */
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
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
            className={`rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wide text-white ${
              project.status === "live" ? "bg-green-500" : "bg-red-500"
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
  );
}

function ProjectsSection() {
  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-zinc-900">All Projects</h2>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-400 transition hover:text-zinc-700"
          aria-label="GitHub"
        >
          <IconGithub />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/projects"
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm text-zinc-700 transition hover:border-zinc-500 hover:bg-zinc-50"
        >
          View All →
        </Link>
      </div>
    </section>
  );
}

/* ─── Skills ────────────────────────────────────────────────────── */
const SKILLS = [
  {
    name: "JavaScript",
    icon: (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="3" fill="#F7DF1E" />
        <text x="4" y="24" fontSize="16" fontWeight="bold" fill="#1a1a1a">
          JS
        </text>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="3" fill="#3178C6" />
        <text x="3" y="24" fontSize="14" fontWeight="bold" fill="white">
          TS
        </text>
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" fill="#339933" />
        <text x="7" y="21" fontSize="13" fontWeight="bold" fill="white">
          N
        </text>
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" fill="#1a1a1a" />
        <circle cx="16" cy="16" r="3" fill="#61DAFB" />
        <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
        <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" fill="#000" />
        <text x="8" y="22" fontSize="16" fontWeight="bold" fill="white">
          N
        </text>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
        <path d="M16 7c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.225 1.55.88 2.27 1.61C17.67 12.85 19.1 14.4 22 14.4c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.225-1.55-.88-2.27-1.61C20.33 8.55 18.9 7 16 7zm-6 9.6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.225 1.55.88 2.27 1.61C11.67 22.45 13.1 24 16 24c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.225-1.55-.88-2.27-1.61C14.33 18.15 12.9 16.6 10 16.6z" fill="#06B6D4" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
        <path d="M16 2C16 2 9 10 9 18a7 7 0 0 0 6 6.9V28h2v-3.1A7 7 0 0 0 23 18C23 10 16 2 16 2z" fill="#47A248" />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
        <path d="M29.47 14.53 17.47 2.53a1.8 1.8 0 0 0-2.54 0L12.4 5.07l3.2 3.2a2.14 2.14 0 0 1 2.71 2.73l3.08 3.08a2.14 2.14 0 1 1-1.28 1.28l-2.88-2.88v7.56a2.14 2.14 0 1 1-1.76-.07V12.3a2.14 2.14 0 0 1-1.16-2.81L11.1 6.34 2.53 14.9a1.8 1.8 0 0 0 0 2.54l12 12a1.8 1.8 0 0 0 2.54 0l12.4-12.4a1.8 1.8 0 0 0 0-2.51z" fill="#F05032" />
      </svg>
    ),
  },
  {
    name: "Java",
    icon: (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
        <path d="M12.2 22.5s-1.3.75.9 1c2.7.3 4.1.26 7.1-.3 0 0 .8.5 1.9.93-6.7 2.88-15.2-.17-9.9-1.63zM11.3 19.1s-1.4 1.05 .75 1.27c2.8.27 5 .3 8.8-.4 0 0 .55.56 1.43.87-7.8 2.28-16.5.18-11-1.74z" fill="#ED8B00" />
        <path d="M17.7 13.3c1.59 1.83-.42 3.47-.42 3.47s4.04-2.08 2.18-4.69c-1.73-2.44-3.06-3.65 4.13-7.83 0 0-11.29 2.82-5.89 9.05z" fill="#ED8B00" />
        <path d="M25.4 24.7s.96.8-1.06 1.41c-3.84 1.16-15.98 1.51-19.36.05-1.21-.53 1.06-1.26 1.78-1.41.74-.16 1.17-.13 1.17-.13-1.35-.95-8.72 1.87-3.74 2.67 13.56 2.2 24.72-.99 21.21-2.59zM12.8 15.7s-6.17 1.47-2.19 2c1.68.22 5.03.17 8.15-.08 2.55-.21 5.11-.66 5.11-.66s-.9.38-1.55.83c-6.27 1.65-18.38.88-14.9-.8 2.94-1.42 5.38-1.29 5.38-1.29z" fill="#ED8B00" />
        <path d="M22.4 20.6c6.38-3.31 3.43-6.5 1.37-6.07-.5.1-.73.2-.73.2s.19-.29.54-.41c4.04-1.42 7.14 4.19-1.31 6.41 0 0 .1-.09.13-.13z" fill="#ED8B00" />
        <path d="M19.4 2s3.53 3.53-3.35 8.96c-5.52 4.36-1.26 6.84 0 9.68-3.22-2.9-5.58-5.46-4-7.83C14.28 9.38 20.98 7.63 19.4 2z" fill="#ED8B00" />
      </svg>
    ),
  },
];

function SkillBadge({ name, icon }: (typeof SKILLS)[number]) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50">
      {icon}
      {name}
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-base font-semibold text-zinc-900">
        skills &amp; technologies
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {SKILLS.map((s) => (
          <SkillBadge key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
}

/* ─── Quote ─────────────────────────────────────────────────────── */
function QuoteSection() {
  return (
    <section className="mt-10">
      <blockquote className="rounded-xl bg-zinc-50 px-8 py-7 text-center">
        <p className="text-sm italic leading-relaxed text-zinc-700">
          &ldquo;A man who is master of patience is master of everything
          else.&rdquo;
        </p>
        <footer className="mt-3 text-xs text-zinc-500">
          — George Savile
        </footer>
      </blockquote>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "#" },
  { label: "Sponsors", href: "#" },
  { label: "Open Source", href: "#" },
  { label: "Resume", href: "#" },
];

const CONNECT_ICONS = [
  { label: "GitHub", href: "https://github.com/", icon: <IconGithub /> },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: <IconLinkedin /> },
  { label: "X / Twitter", href: "https://twitter.com/", icon: <IconTwitter /> },
  {
    label: "Email",
    href: "mailto:matias@example.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="mt-10 border-t border-zinc-200 pt-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold tracking-widest text-blue-500 uppercase">
            Navigate
          </p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-1 sm:grid-cols-2">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-blue-500 transition hover:text-blue-700"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold tracking-widest text-blue-500 uppercase">
            Connect
          </p>
          <div className="flex gap-2">
            {CONNECT_ICONS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                aria-label={c.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition hover:border-zinc-400 hover:bg-zinc-50"
              >
                {c.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <p className="text-xs text-blue-500">
          © 2026 Matias Rau Bekerman. All rights reserved.
        </p>
        <p className="text-xs text-zinc-400">
          You&apos;re the — visitor
        </p>
      </div>
    </footer>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-white px-4 py-10">
      <main className="w-full max-w-3xl">
        {/* Banner + avatar */}
        <section>
          <div className="overflow-hidden rounded-xl border border-zinc-200">
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src="/fondo.png"
                alt="Banner"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          <div className="mt-3 flex items-end gap-4 px-1">
            <div className="relative z-10 -mt-16 h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-md transition-transform duration-300 hover:scale-110">
              <Image
                src="/matias.png"
                alt="Matias Rau Bekerman"
                width={112}
                height={112}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="pb-0.5">
              <h1 className="flex items-center gap-1.5 text-xl font-semibold text-zinc-900">
                Matias Rau Bekerman
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-label="verificado"
                >
                  <circle cx="8" cy="8" r="8" fill="#3B82F6" />
                  <path
                    d="M5 8.5l2 2 4-4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </h1>
              <p className="text-sm font-medium text-zinc-900">
                full-stack developer and systems engineer coming soon
              </p>
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-900">
          <p>
            Hey, Matias here, a full-stack developer who loves building fun,
            cool projects with a creative mindset. I focus on creating clean,
            modern experiences where design, functionality, and the smallest
            details matter.
          </p>
          <p>
            Currently sharpening my skills so technology never becomes a
            limitation. I am always open to collaborating, building, and
            learning. Coming soon: Systems Information Engineering graduate.
          </p>
          <p className="text-zinc-900">
            Based in La Plata, Argentina. Reach me at{" "}
            <a
              href="mailto:bekermanmatias@gmail.com"
              className="underline underline-offset-2 hover:text-zinc-700"
            >
              bekermanmatias@gmail.com
            </a>
            . 5th year student of Systems Information Engineering at UTN FRLP.
          </p>
        </section>

        {/* Social links */}
        <section className="mt-5 flex flex-wrap items-center gap-2">
          {SOCIAL_LINKS.map((s) => (
            <SocialButton key={s.label} {...s} />
          ))}
        </section>

        {/* Projects */}
        <ProjectsSection />

        {/* Skills */}
        <SkillsSection />

        {/* Quote */}
        <QuoteSection />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
