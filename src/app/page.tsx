"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/Skills";

const IconGithub = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const IconLinkedin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconResume = () => (
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
);

const GITHUB_URL = "https://github.com/bekermanmatias";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/matias-rau-bekerman-32a614199/?skipRedirect=true";
const RESUME_URL = "/MATIAS%20RAU%20BEKERMAN.pdf";

type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
  download?: boolean;
};

function SocialButton({ label, href, icon, download }: SocialLink) {
  return (
    <a
      href={href}
      {...(download
        ? { download: "MATIAS RAU BEKERMAN.pdf" }
        : { target: "_blank", rel: "noreferrer" })}
      className="flex items-center gap-1.5 rounded-md border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50"
    >
      {icon}
      {label}
    </a>
  );
}

function ProjectsSection() {
  const { t } = useLanguage();
  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-zinc-900">
          {t("projects.section.all")}
        </h2>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="text-zinc-400 transition hover:text-zinc-700"
          aria-label="GitHub"
        >
          <IconGithub />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.slice(0, 4).map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/projects"
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm text-zinc-700 transition hover:border-zinc-500 hover:bg-zinc-50"
        >
          {t("projects.viewAll")}
        </Link>
      </div>
    </section>
  );
}

/* ─── Quote ─────────────────────────────────────────────────────── */
function QuoteSection() {
  const { t } = useLanguage();
  return (
    <section className="mt-10">
      <blockquote className="rounded-xl bg-zinc-50 px-8 py-9 text-center">
        <p className="text-lg italic leading-relaxed text-zinc-700 sm:text-xl">
          &ldquo;{t("quote.text")}&rdquo;
        </p>
        <footer className="mt-4 text-sm text-zinc-500">
          — George Savile
        </footer>
      </blockquote>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { key: "nav.home", href: "/" },
  { key: "nav.projects", href: "/projects" },
];

const CONNECT_ICONS = [
  {
    label: "GitHub",
    href: GITHUB_URL,
    external: true,
    icon: <IconGithub />,
  },
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    external: true,
    icon: <IconLinkedin />,
  },
  {
    label: "Email",
    href: "mailto:bekermanmatias@gmail.com",
    external: false,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-10 border-t border-zinc-200 pt-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold tracking-widest text-zinc-900 uppercase">
            {t("footer.navigate")}
          </p>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) =>
              l.key === "nav.home" ? (
                <Link
                  key={l.key}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-sm text-zinc-900 transition hover:text-zinc-600"
                >
                  {t(l.key)}
                </Link>
              ) : (
                <Link
                  key={l.key}
                  href={l.href}
                  className="text-sm text-zinc-900 transition hover:text-zinc-600"
                >
                  {t(l.key)}
                </Link>
              ),
            )}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold tracking-widest text-zinc-900 uppercase">
            {t("footer.connect")}
          </p>
          <div className="flex gap-2">
            {CONNECT_ICONS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                aria-label={c.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50"
              >
                {c.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs text-zinc-900">{t("footer.rights")}</p>
      </div>
    </footer>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */
export default function Home() {
  const { t } = useLanguage();

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
                  aria-label={t("header.verified")}
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
                {t("header.title")}
              </p>
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-900">
          <p>{t("bio.p1")}</p>
          <p>{t("bio.p2")}</p>
          <p>{t("bio.p3")}</p>
          <p className="text-zinc-900">
            {t("bio.contactPrefix")} {t("bio.location")}.{" "}
            {t("bio.contactReach")}{" "}
            <a
              href="mailto:bekermanmatias@gmail.com"
              className="underline underline-offset-2 hover:text-zinc-700"
            >
              bekermanmatias@gmail.com
            </a>
            .
          </p>
        </section>

        {/* Social links */}
        <section className="mt-5 flex flex-wrap items-center gap-2">
          <SocialButton
            label="github"
            href={GITHUB_URL}
            icon={<IconGithub />}
          />
          <SocialButton
            label="linkedin"
            href={LINKEDIN_URL}
            icon={<IconLinkedin />}
          />
          <SocialButton
            label={t("social.resume")}
            href={RESUME_URL}
            icon={<IconResume />}
            download
          />
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
