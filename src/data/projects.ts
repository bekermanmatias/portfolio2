export type ProjectStatus = "live" | "wip" | "building";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  cover: string;
  gallery: string[];
  url?: string;
  repo?: string;
  demo?: string;
  tech: string[];
  year: number;
};

export const projects: Project[] = [
  {
    slug: "cafecerca",
    name: "Café Cerca",
    tagline:
      "App móvil para descubrir cafeterías cerca tuyo, guardar favoritas, organizar visitas con amigos y compartir reseñas auténticas.",
    description:
      "Café Cerca es una aplicación móvil pensada para quienes disfrutan salir a tomar un café y quieren descubrir lugares nuevos sin depender de reviews anónimas en mapas genéricos. La app permite explorar cafeterías cercanas, ver sus etiquetas y características, guardar las favoritas, y sobre todo compartir experiencias reales con otros usuarios: reseñas escritas, visitas individuales o compartidas con amigos, comentarios y likes. Apunta a una comunidad joven que disfruta explorar la ciudad, coordinar planes con amigos y dejar su opinión honesta sobre cada lugar que visitan.\n\nFue un proyecto grupal para la materia Aplicaciones Móviles en la UTN FRLP. Dentro del equipo me encargué de todo el sistema de reseñas y de la lógica de visitas compartidas entre múltiples usuarios: la creación y edición de reseñas, cómo se asocian a cada visita, cómo se vinculan a varios usuarios a la vez en visitas grupales (invitaciones, aceptación, respuesta con reseña), y toda la coordinación que implica que más de una persona pueda participar, opinar y dejar su review sobre una misma salida sin pisarse la información.",
    status: "live",
    cover: "/cafecerca/1.png",
    gallery: ["/cafecerca/1.png", "/cafecerca/2.png", "/cafecerca/3.png"],
    demo: "https://youtu.be/Lvv-yJC69rc",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express",
      "Sequelize",
      "MySQL",
      "JWT",
      "Cloudinary",
    ],
    year: 2025,
  },
  {
    slug: "odontapp",
    name: "OdontApp",
    tagline:
      "Sistema integral de gestión para clínicas odontológicas: agenda, pacientes, historias clínicas y facturación en un solo lugar.",
    description:
      "OdontApp es un sistema pensado para clínicas y consultorios odontológicos que buscan ordenar su día a día sin depender de planillas sueltas ni agendas en papel. En una sola plataforma, el equipo administrativo y los profesionales pueden coordinar turnos, acceder rápidamente a la ficha del paciente, registrar la atención y llevar el control de la facturación. Apunta a clínicas con múltiples profesionales y recepcionistas que necesitan trabajar en simultáneo sin pisarse la información, manteniendo todo centralizado, visible y actualizado en tiempo real. La interfaz es clara y directa, para que cualquier persona del consultorio, incluso sin experiencia técnica, pueda usarla desde el primer día.\n\nFue un proyecto desarrollado en equipo junto a cuatro compañeros. Dentro del grupo me encargué del módulo de Agenda y de todo lo relacionado: la visualización por profesional y por rango horario, la gestión de disponibilidad, la creación y edición de turnos, los filtros por odontólogo, el control de choques de horarios y las reglas de negocio que hacen que la agenda se comporte como la necesita un consultorio real.",
    status: "building",
    cover: "/odontapp/1.png",
    gallery: [
      "/odontapp/1.png",
      "/odontapp/2.png",
      "/odontapp/3.png",
      "/odontapp/4.png",
      "/odontapp/5.png",
      "/odontapp/6.png",
      "/odontapp/7.png",
      "/odontapp/8.png",
      "/odontapp/9.png",
      "/odontapp/10.png",
      "/odontapp/11.png",
      "/odontapp/12.png",
      "/odontapp/13.png",
    ],
    tech: [
      "React",
      "React Router",
      "SCSS",
      "Node.js",
      "Express",
      "Sequelize",
      "MySQL",
      "Docker",
    ],
    year: 2026,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
