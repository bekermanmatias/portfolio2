"use client";

import { useState, type ReactNode } from "react";
import { useLanguage } from "@/lib/i18n";

type Skill = {
  name: string;
  /** simpleicons.org slug. When provided, renders the brand logo. */
  slug?: string;
  /** Optional fallback/custom icon used when no slug is available. */
  custom?: ReactNode;
};

/* Custom icons for skills without a brand logo on simpleicons */
const IconAi = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-violet-600"
  >
    <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-4 4v2a4 4 0 0 0 2 3.46V19a3 3 0 0 0 6 0" />
    <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1 4 4v2a4 4 0 0 1-2 3.46V19a3 3 0 0 1-6 0" />
    <path d="M9 11h.01M15 11h.01" />
  </svg>
);

const IconPrompt = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-emerald-600"
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const IconUml = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-sky-600"
  >
    <rect x="3" y="4" width="7" height="6" rx="1" />
    <rect x="14" y="4" width="7" height="6" rx="1" />
    <rect x="8.5" y="14" width="7" height="6" rx="1" />
    <path d="M6.5 10v2h11v-2" />
    <path d="M12 12v2" />
  </svg>
);

const IconMatlab = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-600"
  >
    <path d="M3 20c4-1 6-6 9-13 1.5-3 3-5 8-5" />
    <path d="M10 12l5 8" />
  </svg>
);

const IconScrum = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-indigo-600"
  >
    <path d="M21 12a9 9 0 1 1-3-6.7" />
    <polyline points="21 3 21 9 15 9" />
  </svg>
);

/* Brand logos replaced inline because the simpleicons CDN doesn't serve them (licensing / renamed slugs) */
const IconAws = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF9900">
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.167-.08-.167-.247v-.39c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55c-.048-.16-.072-.263-.072-.32 0-.127.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.567.215.878.279.32.064.631.096.95.096.504 0 .895-.088 1.167-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.216-.559c-.144-.151-.415-.287-.806-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.256.336-.48.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zm1.509 3.847c-2.554 1.885-6.261 2.887-9.45 2.887-4.466 0-8.492-1.653-11.536-4.4-.24-.216-.024-.512.263-.344 3.286 1.909 7.345 3.063 11.54 3.063 2.831 0 5.942-.591 8.808-1.797.43-.191.79.287.375.591zm1.06-1.21c-.327-.423-2.163-.2-2.99-.103-.248.032-.287-.184-.064-.343 1.461-1.03 3.863-.734 4.142-.391.28.35-.08 2.75-1.453 3.896-.215.184-.423.088-.327-.151.32-.79 1.03-2.566.694-2.91z"/>
  </svg>
);

const IconCss3 = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1572B6">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
  </svg>
);

const IconCSharp = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#512BD4">
    <path d="M23.642 8.598L13.073.418a1.78 1.78 0 0 0-2.146 0L.358 8.598A1.78 1.78 0 0 0 0 9.738v8.524c0 .547.215 1.063.643 1.388l10.569 6.18c.643.376 1.503.376 2.146 0l10.57-6.18A1.78 1.78 0 0 0 24 18.262V9.738c0-.434-.143-.853-.358-1.14zM12 19.7c-3.78 0-6.857-3.07-6.857-6.85 0-3.78 3.077-6.85 6.857-6.85 2.27 0 4.39.96 5.6 2.55l-2 1.55c-.81-.97-2.02-1.55-3.6-1.55-2.7 0-4.86 2.13-4.86 4.3 0 2.17 2.16 4.3 4.86 4.3 1.58 0 2.79-.58 3.6-1.55l2 1.55c-1.21 1.59-3.33 2.55-5.6 2.55zm5.5-7.5h-.6v.6h-.5v-.6h-.6v-.5h.6v-.6h.5v.6h.6v.5zm2.4 0h-.6v.6h-.5v-.6h-.6v-.5h.6v-.6h.5v.6h.6v.5z"/>
  </svg>
);

const IconSqlServer = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#CC2927">
    <ellipse cx="12" cy="4.5" rx="8" ry="2.5" />
    <path d="M4 7v3.5c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V7c-1.5 1.1-4.6 1.8-8 1.8S5.5 8.1 4 7z" />
    <path d="M4 13v3.5C4 17.9 7.6 19 12 19s8-1.1 8-2.5V13c-1.5 1.1-4.6 1.8-8 1.8S5.5 14.1 4 13z" />
    <path d="M4 19v.5C4 20.9 7.6 22 12 22s8-1.1 8-2.5V19c-1.5 1.1-4.6 1.8-8 1.8S5.5 20.1 4 19z" />
  </svg>
);

const IconOpenAI = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#000000">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
  </svg>
);

const IconLucidchart = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 8v8l10 6 10-6V8L12 2z" fill="#F8A11D" />
    <path d="M12 2L2 8l10 6 10-6-10-6z" fill="#FFCC4D" />
    <path d="M2 8v8l10 6V14L2 8z" fill="#E07A1A" />
  </svg>
);

const IconGoogleCloud = (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path d="M12.19 2.38a9.34 9.34 0 0 0-9.24 6.71 9.31 9.31 0 0 0 0 5.14 1 1 0 0 0 1.93-.53 7.3 7.3 0 0 1 0-4.07 7.34 7.34 0 0 1 14 0 1 1 0 0 0 1.93.53A9.32 9.32 0 0 0 12.19 2.38zM3.86 15.55a1 1 0 0 0-1.93.53 9.34 9.34 0 0 0 14 5.39 1 1 0 1 0-1.13-1.65 7.34 7.34 0 0 1-10.94-4.27z" fill="#4285F4"/>
    <path d="M19 8.18l-3.18 3.18-1.42-1.41-1.4 1.4 2.82 2.83L21 9.6 19 8.18z" fill="#34A853"/>
    <circle cx="12" cy="12" r="3" fill="#FBBC04"/>
  </svg>
);

const IconPlaywright = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#2EAD33" />
    <path d="M7 9.5c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    <path d="M13.4 9.5c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    <circle cx="9" cy="10" r="0.9" fill="#fff" />
    <circle cx="15.2" cy="10" r="0.9" fill="#fff" />
    <path d="M7.5 14c1 1.6 2.7 2.6 4.5 2.6s3.5-1 4.5-2.6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
  </svg>
);

const IconAzure = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0078D4">
    <path d="M5.483 21.3h17.215L13.297 5.058l-4.604 7.94 5.484 6.5L5.483 21.3zM10.103 2.7L1.302 17.66l4.879.001 8.81-15.42-4.888.001z"/>
  </svg>
);

const IconExcel = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#217346">
    <path d="M14.5 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V9.5L14.5 2zM14 9V3.5L19.5 9H14zM9.5 12h1.6l1.4 2.2 1.4-2.2H15.5l-2.2 3.3 2.3 3.5H14l-1.5-2.4-1.5 2.4H9.4l2.3-3.5L9.5 12z"/>
  </svg>
);

const IconEsp32 = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#E7352C">
    <path d="M6 6h12v12H6z" />
    <path d="M3 9h2v2H3zM3 13h2v2H3zM19 9h2v2h-2zM19 13h2v2h-2zM9 3h2v2H9zM13 3h2v2h-2zM9 19h2v2H9zM13 19h2v2h-2z" />
  </svg>
);

const IconIot = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-cyan-600"
  >
    <rect x="7" y="11" width="10" height="9" rx="1.5" />
    <path d="M9 14h.01M12 14h.01M15 14h.01M9 17h.01M12 17h.01M15 17h.01" />
    <path d="M8 8.5a4 4 0 0 1 8 0" />
    <path d="M5 6a7 7 0 0 1 14 0" />
  </svg>
);

const IconServerless = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-amber-600"
  >
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    <polyline points="13 11 9 13 13 15 9 17" />
  </svg>
);

const IconRestApi = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-rose-600"
  >
    <path d="M3 12h3l2-5 4 10 2-5h7" />
  </svg>
);

const SKILLS: Skill[] = [
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Python", slug: "python" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Docker", slug: "docker" },
  { name: "AWS", custom: IconAws },
  { name: "Google Cloud", custom: IconGoogleCloud },
  { name: "Azure", custom: IconAzure },
  { name: "Tailwind CSS", slug: "tailwindcss" },

  { name: "JavaScript", slug: "javascript" },
  { name: "React Native", slug: "react" },
  { name: "Expo", slug: "expo" },
  { name: "Astro", slug: "astro" },
  { name: "Vite", slug: "vite" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", custom: IconCss3 },
  { name: "Sass / SCSS", slug: "sass" },
  { name: "Express", slug: "express" },
  { name: "Sequelize", slug: "sequelize" },
  { name: "Django", slug: "django" },
  { name: ".NET", slug: "dotnet" },
  { name: "C#", custom: IconCSharp },
  { name: "C++", slug: "cplusplus" },
  { name: "Kotlin", slug: "kotlin" },
  { name: "Java", slug: "openjdk" },
  { name: "Supabase", slug: "supabase" },
  { name: "Firebase", slug: "firebase" },
  { name: "MySQL", slug: "mysql" },
  { name: "SQL Server", custom: IconSqlServer },
  { name: "SQLite", slug: "sqlite" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "JWT", slug: "jsonwebtokens" },
  { name: "REST APIs", custom: IconRestApi },
  { name: "Vercel", slug: "vercel" },
  { name: "Serverless", custom: IconServerless },
  { name: "IoT", custom: IconIot },
  { name: "ESP32", custom: IconEsp32 },
  { name: "Git", slug: "git" },
  { name: "GitHub Actions", slug: "githubactions" },
  { name: "Playwright", custom: IconPlaywright },
  { name: "Linux", slug: "linux" },
  { name: "OpenAI", custom: IconOpenAI },
  { name: "AI Integration", custom: IconAi },
  { name: "Prompt Engineering", custom: IconPrompt },
  { name: "Figma", slug: "figma" },
  { name: "Lucidchart", custom: IconLucidchart },
  { name: "UML", custom: IconUml },
  { name: "MATLAB", custom: IconMatlab },
  { name: "Excel", custom: IconExcel },
  { name: "Scrum / Agile", custom: IconScrum },
];

const INITIAL_COUNT = 9;

function SkillIcon({ slug, custom, name }: Skill) {
  if (slug) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt={`${name} logo`}
        width={18}
        height={18}
        loading="lazy"
        className="h-[18px] w-[18px] object-contain"
      />
    );
  }
  return <span className="inline-flex h-[18px] w-[18px] items-center justify-center">{custom}</span>;
}

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50">
      <SkillIcon {...skill} />
      <span className="truncate">{skill.name}</span>
    </div>
  );
}

export function SkillsSection() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? SKILLS : SKILLS.slice(0, INITIAL_COUNT);

  return (
    <section className="mt-10">
      <h2 className="mb-5 text-2xl font-bold text-zinc-900">
        {t("skills.title")}
      </h2>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {visible.map((s) => (
          <SkillBadge key={s.name} skill={s} />
        ))}
      </div>

      {SKILLS.length > INITIAL_COUNT && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full border border-zinc-300 px-5 py-2 text-sm text-zinc-700 transition hover:border-zinc-500 hover:bg-zinc-50"
          >
            {expanded ? t("skills.showLess") : t("skills.showAll")}
          </button>
        </div>
      )}
    </section>
  );
}
