"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { useState } from "react";

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


/* ─── Skills ────────────────────────────────────────────────────── */
const SKILLS = [
  {
    name: "JavaScript",
    color: "#F7DF1E",
    bg: "#1a1a1a",
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
    color: "#3178C6",
    bg: "#fff",
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
    color: "#339933",
    bg: "#fff",
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
    color: "#61DAFB",
    bg: "#1a1a1a",
    icon: (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" fill="#1a1a1a" />
        <circle cx="16" cy="16" r="3" fill="#61DAFB" />
        <ellipse
          cx="16"
          cy="16"
          rx="13"
          ry="5"
          stroke="#61DAFB"
          strokeWidth="1.5"
          fill="none"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="13"
          ry="5"
          stroke="#61DAFB"
          strokeWidth="1.5"
          fill="none"
          transform="rotate(60 16 16)"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="13"
          ry="5"
          stroke="#61DAFB"
          strokeWidth="1.5"
          fill="none"
          transform="rotate(120 16 16)"
        />
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#000",
    bg: "#fff",
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
    color: "#06B6D4",
    bg: "#fff",
    icon: (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 7c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.225 1.55.88 2.27 1.61C17.67 12.85 19.1 14.4 22 14.4c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.225-1.55-.88-2.27-1.61C20.33 8.55 18.9 7 16 7zm-6 9.6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.225 1.55.88 2.27 1.61C11.67 22.45 13.1 24 16 24c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.225-1.55-.88-2.27-1.61C14.33 18.15 12.9 16.6 10 16.6z"
          fill="#06B6D4"
        />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    color: "#47A248",
    bg: "#fff",
    icon: (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 2C16 2 9 10 9 18a7 7 0 0 0 6 6.9V28h2v-3.1A7 7 0 0 0 23 18C23 10 16 2 16 2z"
          fill="#47A248"
        />
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    bg: "#fff",
    icon: (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
        <path
          d="M29.47 14.53 17.47 2.53a1.8 1.8 0 0 0-2.54 0L12.4 5.07l3.2 3.2a2.14 2.14 0 0 1 2.71 2.73l3.08 3.08a2.14 2.14 0 1 1-1.28 1.28l-2.88-2.88v7.56a2.14 2.14 0 1 1-1.76-.07V12.3a2.14 2.14 0 0 1-1.16-2.81L11.1 6.34 2.53 14.9a1.8 1.8 0 0 0 0 2.54l12 12a1.8 1.8 0 0 0 2.54 0l12.4-12.4a1.8 1.8 0 0 0 0-2.51z"
          fill="#F05032"
        />
      </svg>
    ),
  },
  {
    name: "Java",
    color: "#ED8B00",
    bg: "#fff",
    icon: (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
        <path
          d="M12.2 22.5s-1.3.75.9 1c2.7.3 4.1.26 7.1-.3 0 0 .8.5 1.9.93-6.7 2.88-15.2-.17-9.9-1.63zM11.3 19.1s-1.4 1.05 .75 1.27c2.8.27 5 .3 8.8-.4 0 0 .55.56 1.43.87-7.8 2.28-16.5.18-11-1.74z"
          fill="#ED8B00"
        />
        <path
          d="M17.7 13.3c1.59 1.83-.42 3.47-.42 3.47s4.04-2.08 2.18-4.69c-1.73-2.44-3.06-3.65 4.13-7.83 0 0-11.29 2.82-5.89 9.05z"
          fill="#ED8B00"
        />
        <path
          d="M25.4 24.7s.96.8-1.06 1.41c-3.84 1.16-15.98 1.51-19.36.05-1.21-.53 1.06-1.26 1.78-1.41.74-.16 1.17-.13 1.17-.13-1.35-.95-8.72 1.87-3.74 2.67 13.56 2.2 24.72-.99 21.21-2.59zM12.8 15.7s-6.17 1.47-2.19 2c1.68.22 5.03.17 8.15-.08 2.55-.21 5.11-.66 5.11-.66s-.9.38-1.55.83c-6.27 1.65-18.38.88-14.9-.8 2.94-1.42 5.38-1.29 5.38-1.29z"
          fill="#ED8B00"
        />
        <path
          d="M22.4 20.6c6.38-3.31 3.43-6.5 1.37-6.07-.5.1-.73.2-.73.2s.19-.29.54-.41c4.04-1.42 7.14 4.19-1.31 6.41 0 0 .1-.09.13-.13z"
          fill="#ED8B00"
        />
        <path
          d="M19.4 2s3.53 3.53-3.35 8.96c-5.52 4.36-1.26 6.84 0 9.68-3.22-2.9-5.58-5.46-4-7.83C14.28 9.38 20.98 7.63 19.4 2z"
          fill="#ED8B00"
        />
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
        <footer className="mt-3 text-xs text-zinc-500">— George Savile</footer>
      </blockquote>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Sponsors", href: "#" },
  { label: "Open Source", href: "#" },
  { label: "Resume", href: "#" },
];

const CONNECT_ICONS = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: <IconGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: <IconLinkedin />,
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com/",
    icon: <IconTwitter />,
  },
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
        {/* Navigate */}
        <div>
          <p className="mb-3 text-xs font-semibold tracking-widest text-blue-500 uppercase">
            Navigate
          </p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-1 sm:grid-cols-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-blue-500 transition hover:text-blue-700"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Connect */}
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

      {/* Bottom bar */}
      <div className="mt-6 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <p className="text-xs text-blue-500">
          © 2026 Matias Rau Bekerman. All rights reserved.
        </p>
        <p className="text-xs text-zinc-400">You&apos;re the — visitor</p>
      </div>
    </footer>
  );
}

/* ─── Projects ──────────────────────────────────────────────────── */
type Project = {
  slug: string;
  status: "live" | "wip";
  name: JSX.Element;
  description: JSX.Element;
  href: string;
  bg: string;
  previewText: string;
};

const PROJECTS: Project[] = [
  {
    slug: "sum-o",
    status: "live",
    name: (
      <>
        SUM<span className="text-orange-500">-o</span>
      </>
    ),
    description: (
      <>
        Just{" "}
        <span className="text-green-600">copy-paste a link</span> and get one
        line summaries of{" "}
        <span className="text-blue-500">LinkedIn posts</span>
      </>
    ),
    href: "#",
    bg: "from-zinc-900 to-zinc-800",
    previewText: "Get the gist, skip the scroll",
  },
  {
    slug: "chron",
    status: "live",
    name: <span className="text-orange-500">CHRON</span>,
    description: (
      <>
        The days you don&apos;t{" "}
        <span className="text-orange-400">count</span> are the days that{" "}
        <span className="text-orange-400">count</span> the most.
      </>
    ),
    href: "#",
    bg: "from-zinc-900 to-red-950",
    previewText: "EVERY DAY COUNTS.",
  },
  {
    slug: "drift",
    status: "wip",
    name: (
      <>
        <span className="text-red-500">Drift</span> — Anonymous Video Chat
      </>
    ),
    description: (
      <>
        <span className="text-purple-400">Talk to Strangers</span>,{" "}
        <span className="text-purple-400">Stay Anonymous</span>. Connect
        through{" "}
        <span className="text-green-500">text, voice, and video</span> — no
        sign up required.
      </>
    ),
    href: "#",
    bg: "from-purple-950 to-zinc-900",
    previewText: "Talk to Strangers. Stay Anonymous.",
  },
  {
    slug: "brainly",
    status: "live",
    name: (
      <>
        <span className="text-green-500">Brainly</span> — Your Second Brain
      </>
    ),
    description: (
      <>
        A centralized hub for managing digital content from{" "}
        <span className="text-blue-400">Twitter, YouTube, Instagram</span>, and{" "}
        <span className="text-blue-400">LinkedIn</span>.
      </>
    ),
    href: "#",
    bg: "from-blue-950 to-zinc-900",
    previewText: "Your Second Brain",
  },
  {
    slug: "cac-url",
    status: "live",
    name: <span className="text-green-500">CAC-URL</span>,
    description: (
      <>
        URL shortener tool for creating{" "}
        <span className="text-green-500">short, shareable links</span>
      </>
    ),
    href: "#",
    bg: "from-zinc-900 to-indigo-950",
    previewText: "Shorten Your Links",
  },
  {
    slug: "the-daily-dev",
    status: "live",
    name: <span className="text-green-500">TheDailyDev</span>,
    description: (
      <>
        A centralized{" "}
        <span className="text-green-500">developer news platform</span> built
        to reduce noise and surface only{" "}
        <span className="text-green-500">high-signal content</span>.
      </>
    ),
    href: "#",
    bg: "from-zinc-100 to-white",
    previewText: "THE DAILY DEV",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const isDark = !project.bg.includes("zinc-100");
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:shadow-sm">
      {/* Screenshot placeholder */}
      <div
        className={`relative flex h-36 items-center justify-center bg-linear-to-br ${project.bg} px-4`}
      >
        <p
          className={`text-center text-sm font-semibold ${isDark ? "text-white/70" : "text-zinc-700"}`}
        >
          {project.previewText}
        </p>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 shrink-0 rounded-full ${project.status === "live" ? "bg-green-500" : "bg-red-500"}`}
          />
          <p className="text-sm font-semibold text-zinc-900">{project.name}</p>
        </div>
        <p className="text-xs leading-relaxed text-zinc-600">
          {project.description}
        </p>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="mt-auto pt-1 text-xs text-zinc-400 transition hover:text-zinc-700"
        >
          View Project ↗
        </a>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section className="mt-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-zinc-900">projects</h2>
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

      <div className="grid grid-cols-2 gap-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <div className="mt-5 flex justify-center">
        <a
          href="#"
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm text-zinc-700 transition hover:border-zinc-500 hover:bg-zinc-50"
        >
          View All →
        </a>
      </div>
    </section>
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
              <p className="text-sm text-zinc-500">full-stack developer</p>
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-700">
          <p>
            Hey, Matias acá. Un full-stack developer que disfruta construir
            productos web limpios y bien pensados. Me enfoco en experiencias
            donde el diseño, la funcionalidad y los detalles pequeños importan.
          </p>
          <p>
            Actualmente perfeccionando mi stack para que la tecnología no sea
            una limitación. Siempre abierto a colaborar y aprender.
          </p>
          <p className="text-zinc-500">
            Buenos Aires, Argentina · contacto:{" "}
            <a
              href="mailto:matias@example.com"
              className="underline underline-offset-2 hover:text-zinc-800"
            >
              matias@example.com
            </a>
          </p>
        </section>

        {/* Social links */}
        <section className="mt-5 flex flex-wrap items-center gap-2">
          {SOCIAL_LINKS.map((s) => (
            <SocialButton key={s.label} {...s} />
          ))}
          {/* Pinterest-style icon only */}
          <a
            href="#"
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700"
            aria-label="Pinterest"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
          </a>
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
