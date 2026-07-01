"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "es";

type LocalizedString = { en: string; es: string };
type Dictionary = Record<string, LocalizedString>;

export const dict: Dictionary = {
  "header.title": {
    en: "full-stack developer and systems engineer coming soon",
    es: "full-stack developer e ingeniero en sistemas próximamente",
  },
  "header.verified": {
    en: "verified",
    es: "verificado",
  },

  "bio.p1": {
    en: "Hi, I'm Matias. I build modern, scalable web applications with a mindset focused on creative problem-solving. As a 5th-year Systems Engineering student, my premise is clear: I don't just write code, I design high-concurrency systems.",
    es: "Hola, soy Matias. Construyo aplicaciones web modernas y escalables con una mentalidad orientada a la resolución creativa de problemas. Como estudiante de 5to año de Ingeniería en Sistemas, mi premisa es clara: no solo escribo código, diseño sistemas de alta concurrencia.",
  },
  "bio.p2": {
    en: "I have a proven track record managing end-to-end projects: from requirement gathering and Cloud (Serverless) infrastructure design, to full-stack development and automated deployment (CI/CD) in production.",
    es: "Cuento con historial comprobable gestionando proyectos end-to-end: desde el relevamiento y diseño de infraestructura Cloud (Serverless), hasta el desarrollo full-stack y el despliegue automatizado (CI/CD) en producción.",
  },
  "bio.p3": {
    en: "I am passionate about transforming complex business problems into efficient and robust technological products, always ensuring that clean architecture behind the scenes results in a smooth, frictionless user experience.",
    es: "Me apasiona transformar problemas de negocio complejos en productos tecnológicos eficientes y robustos, garantizando siempre que una arquitectura limpia por detrás resulte en una experiencia de usuario fluida y sin fricciones.",
  },
  "bio.location": {
    en: "La Plata, Argentina",
    es: "La Plata, Argentina",
  },
  "bio.contactPrefix": {
    en: "Based in",
    es: "Desde",
  },
  "bio.contactReach": {
    en: "Reach me at",
    es: "Escribime a",
  },

  "projects.section.all": {
    en: "All Projects",
    es: "Todos los Proyectos",
  },
  "projects.viewProject": {
    en: "View Project ↗",
    es: "Ver Proyecto ↗",
  },
  "projects.viewAll": {
    en: "View All →",
    es: "Ver Todos →",
  },
  "projects.visitSite": {
    en: "Visit site ↗",
    es: "Visitar sitio ↗",
  },
  "projects.sourceCode": {
    en: "Source code",
    es: "Código fuente",
  },
  "projects.gallery": {
    en: "Gallery",
    es: "Galería",
  },
  "projects.demo": {
    en: "Demo",
    es: "Demo",
  },
  "projects.backHome": {
    en: "← Back home",
    es: "← Volver al inicio",
  },
  "projects.backAll": {
    en: "← All projects",
    es: "← Todos los proyectos",
  },
  "projects.paper": {
    en: "Download paper",
    es: "Descargar paper",
  },

  "skills.title": {
    en: "skills & technologies",
    es: "habilidades y tecnologías",
  },
  "skills.showAll": {
    en: "Show all",
    es: "Ver todas",
  },
  "skills.showLess": {
    en: "Show less",
    es: "Ver menos",
  },

  "quote.text": {
    en: "A man who is master of patience is master of everything else.",
    es: "El hombre que domina la paciencia domina todo lo demás.",
  },

  "footer.navigate": {
    en: "Navigate",
    es: "Navegación",
  },
  "footer.connect": {
    en: "Connect",
    es: "Contacto",
  },
  "footer.rights": {
    en: "© 2026 Matias Rau Bekerman. All rights reserved.",
    es: "© 2026 Matias Rau Bekerman. Todos los derechos reservados.",
  },

  "nav.home": { en: "Home", es: "Inicio" },
  "nav.projects": { en: "Projects", es: "Proyectos" },
  "nav.blog": { en: "Blog", es: "Blog" },
  "nav.sponsors": { en: "Sponsors", es: "Sponsors" },
  "nav.openSource": { en: "Open Source", es: "Código Abierto" },
  "nav.resume": { en: "Resume", es: "CV" },

  "lang.switchToEn": { en: "Switch to English", es: "Cambiar a inglés" },
  "lang.switchToEs": { en: "Switch to Spanish", es: "Cambiar a español" },

  "social.resume": { en: "resume", es: "cv" },
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "es") {
        setLangState(saved);
      }
    } catch {
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      const entry = dict[key];
      if (!entry) return key;
      return entry[lang];
    },
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
