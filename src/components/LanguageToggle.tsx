"use client";

import { useLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex overflow-hidden rounded-full border border-zinc-200 bg-white/90 text-xs font-semibold shadow-sm backdrop-blur">
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        aria-label={t("lang.switchToEn")}
        className={`px-3 py-1.5 transition ${
          lang === "en"
            ? "bg-zinc-900 text-white"
            : "text-zinc-600 hover:bg-zinc-50"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        aria-label={t("lang.switchToEs")}
        className={`px-3 py-1.5 transition ${
          lang === "es"
            ? "bg-zinc-900 text-white"
            : "text-zinc-600 hover:bg-zinc-50"
        }`}
      >
        ES
      </button>
    </div>
  );
}
