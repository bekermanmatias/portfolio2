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
    slug: "raim",
    name: "RAIM",
    tagline:
      "Sistema web interno para gestionar incidencias, solicitudes y mejoras dentro de una organización, con trazabilidad completa de cada requerimiento.",
    description:
      "RAIM es una aplicación web para la gestión de requerimientos internos de una organización: incidencias, solicitudes y mejoras. Permite registrar cada pedido con un código único, clasificarlo por tipo, categoría, prioridad y estado, asignarlo a un responsable, seguir su avance con comentarios, adjuntar archivos y ver todo el historial desde un mismo lugar. Incluye además gestión básica de usuarios y departamentos para saber en todo momento quién creó, quién recibe y quién está trabajando cada ticket. Apunta a equipos internos que hoy resuelven estos pedidos por mail o chat y necesitan un flujo ordenado, con trazabilidad real de principio a fin.\n\nFue un proyecto grupal y dentro del equipo mi aporte estuvo centrado en toda la gestión de requerimientos end-to-end: el alta con su código único y la vinculación con los catálogos (estado, prioridad, tipo y categoría), las relaciones con otras entidades (usuario creador, responsable asignado, comentarios y adjuntos), y el listado con filtros combinables por estado, tipo, categoría y participación del usuario. También me encargué de la carga de archivos adjuntos y de toda la transformación previa a persistirlos en la base de datos: validación de tipo y tamaño, normalización del nombre, procesamiento del payload multipart y su vinculación tanto a requerimientos como a comentarios, asegurando que cada archivo quede asociado al registro correcto y se pueda recuperar desde el detalle.",
    status: "live",
    cover: "/raim/1.png",
    gallery: [
      "/raim/1.png",
      "/raim/2.png",
      "/raim/3.png",
      "/raim/4.png",
      "/raim/5.png",
      "/raim/6.png",
      "/raim/7.png",
    ],
    tech: [
      "React",
      "React Router",
      "Chakra UI",
      "Axios",
      "Node.js",
      "Express",
      "Sequelize",
      "MySQL",
      "JWT",
    ],
    year: 2024
  },
  {
    slug: "eventhub",
    name: "EventHub",
    tagline:
      "Plataforma web para descubrir y gestionar eventos, de forma sencilla y organizada.",
    description:
      "EventHub es una plataforma web pensada para quienes organizan o descubren eventos: permite crear y administrar eventos, listarlos en un dashboard, ver el detalle de cada uno y saber de forma clara cuánto falta para que empiece. Apunta tanto a organizadores que necesitan mantener su catálogo ordenado como a usuarios que quieren explorar solamente los eventos vigentes sin tener que filtrar manualmente los que ya pasaron.\n\nFue un proyecto grupal para una materia en la que partimos de un código base ya existente, por lo que buena parte del trabajo consistió en leer, entender y adaptarnos a decisiones de diseño tomadas por otros antes de sumar funcionalidad nueva. Dentro del equipo mis aportes principales fueron: el módulo de cuenta regresiva hasta la fecha del evento (con el cálculo dinámico de días, horas, minutos y segundos y su integración en la vista de detalle), el diseño de las nuevas entidades y relaciones agregadas a la base de datos, ocultar por defecto los eventos pasados en el dashboard para que el listado siempre muestre lo relevante primero, y toda la configuración de Docker y del pipeline de CI/CD para que el proyecto se pueda levantar y desplegar de forma reproducible. Todo el desarrollo se acompañó con tests automáticos (unitarios y end-to-end con Playwright) para validar cada flujo crítico de la aplicación.",
    status: "live",
    cover: "/eventhub/1.png",
    gallery: ["/eventhub/1.png", "/eventhub/2.png"],
    tech: [
      "Python 3",
      "Django",
      "SQLite",
      "Playwright",
      "Ruff",
      "Docker",
      "CI/CD",
    ],
    year: 2025,
  },
  {
    slug: "solar360",
    name: "Solar360",
    tagline:
      "Simulador web de paneles solares que estima generación, ahorro y retorno de inversión a partir de datos climáticos reales y un modelo matemático de clusters.",
    description:
      "Solar360 es un simulador interactivo que permite a cualquier persona calcular cuánta energía podría generar una instalación fotovoltaica en su domicilio, cuánto dinero ahorraría por mes y en cuántos años recuperaría la inversión. El usuario marca su ubicación en un mapa, ingresa su consumo y el precio del kWh, ajusta el porcentaje de cobertura que quiere cubrir y elige el ángulo de instalación; con esos datos la app devuelve una simulación completa con gráficos mensuales, flujo de fondos, impacto ambiental y un reporte descargable en PDF. Apunta a usuarios finales que están evaluando instalar paneles, pero también a estudiantes e instaladores que quieren entender, visualmente, cómo se comporta un sistema solar en una ubicación concreta de Argentina.\n\nFue el trabajo práctico final de la materia Análisis Numérico en la UTN FRLP, por lo que la app es en esencia una aplicación práctica de todo lo visto en la cursada. El modelo se construyó a partir de un dataset experimental entregado por el profesor, con mediciones reales de temperatura de celda, inclinación e irradiancia. Sobre ese dataset aplicamos análisis numérico de punta a punta: limpieza y análisis estadístico de los datos, clustering en seis grupos operativos según temperatura (10°, 20°, 30°) e inclinación (20°, 45°), y una regresión lineal por mínimos cuadrados dentro de cada cluster para obtener los coeficientes β₁ que representan la eficiencia efectiva del panel en esas condiciones. El modelo final queda como P = β₁ · G (potencia generada en función de la irradiancia solar), con un performance ratio PR = 0.85 que absorbe las pérdidas del sistema.\n\nA eso se suman la integración con la NASA POWER API (y OpenMeteo como fallback) para traer irradiancia y temperatura históricas del punto exacto seleccionado, la geocodificación con Nominatim, y un modelo económico BOS (Balance of System) para estimar costos iniciales, flujo de fondos acumulado y ROI. Todo el cálculo se valida contra el dataset original antes de mostrarse al usuario, y los resultados se presentan en cinco pestañas: general, análisis energético, impacto ambiental, análisis financiero y ficha técnica de la instalación.",
    status: "live",
    cover: "/360solar/1.png",
    gallery: [
      "/360solar/1.png",
      "/360solar/2.png",
      "/360solar/3.png",
      "/360solar/4.png",
      "/360solar/5.png",
    ],
    url: "https://360solar.vercel.app",
    tech: [
      "JavaScript",
      "Vite",
      "HTML",
      "CSS",
      "Chart.js",
      "Leaflet",
      "jsPDF",
      "NASA POWER API",
      "OpenMeteo",
    ],
    year: 2025,
  },
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
