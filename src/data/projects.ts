export type ProjectStatus = "live" | "wip" | "building" | "closed";

export type Localized = { en: string; es: string };

export type Project = {
  slug: string;
  name: string;
  tagline: Localized;
  description: Localized;
  status: ProjectStatus;
  cover: string;
  gallery: string[];
  url?: string;
  repo?: string;
  demo?: string;
  paper?: string;
  tech: string[];
  year: number;
};

export const projects: Project[] = [
  {
    slug: "odontapp",
    name: "OdontApp",
    tagline: {
      en: "Comprehensive management system for dental clinics: scheduling, patients, medical records and billing in one place.",
      es: "Sistema integral de gestión para clínicas odontológicas: agenda, pacientes, historias clínicas y facturación en un solo lugar.",
    },
    description: {
      en: "OdontApp is a system designed for dental clinics and offices that want to organize their day-to-day operations without relying on loose spreadsheets or paper agendas. On a single platform, the administrative team and professionals can coordinate appointments, quickly access a patient's file, record treatments and keep track of billing. It targets clinics with multiple professionals and receptionists who need to work simultaneously without stepping on each other's information, keeping everything centralized, visible and updated in real time. The interface is clear and direct so anyone at the office, even without technical experience, can use it from day one.\n\nIt was a team project developed together with four classmates. Within the group I was in charge of the Scheduling module and everything related to it: the view by professional and by time range, availability management, appointment creation and editing, filters by dentist, time-clash control, and the business rules that make the schedule behave the way a real dental office needs.",
      es: "OdontApp es un sistema pensado para clínicas y consultorios odontológicos que buscan ordenar su día a día sin depender de planillas sueltas ni agendas en papel. En una sola plataforma, el equipo administrativo y los profesionales pueden coordinar turnos, acceder rápidamente a la ficha del paciente, registrar la atención y llevar el control de la facturación. Apunta a clínicas con múltiples profesionales y recepcionistas que necesitan trabajar en simultáneo sin pisarse la información, manteniendo todo centralizado, visible y actualizado en tiempo real. La interfaz es clara y directa, para que cualquier persona del consultorio, incluso sin experiencia técnica, pueda usarla desde el primer día.\n\nFue un proyecto desarrollado en equipo junto a cuatro compañeros. Dentro del grupo me encargué del módulo de Agenda y de todo lo relacionado: la visualización por profesional y por rango horario, la gestión de disponibilidad, la creación y edición de turnos, los filtros por odontólogo, el control de choques de horarios y las reglas de negocio que hacen que la agenda se comporte como la necesita un consultorio real.",
    },
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
  {
    slug: "salgest",
    name: "Salgest",
    tagline: {
      en: "AgTech IoT platform for real-time grain silo monitoring, with telemetry, in-silo vision and intelligent alerts deployed end to end on AWS.",
      es: "Plataforma AgTech IoT para monitoreo en tiempo real de silos de granos, con telemetría, visión interior y alertas inteligentes desplegada de punta a punta sobre AWS.",
    },
    description: {
      en: "Salgest is an integral AgTech platform designed to monitor grain storage silos in real time, replacing dangerous manual inspections with precision telemetry from ESP32 sensors and visual inspection through onboard cameras. The system reads temperature, humidity, gases, pressure and ultrasonic distance to compute physical stock (level %, tons, dew point, air quality index) and runs a server-side rules engine that generates intelligent alerts for active fermentation, condensation risk, sudden level drops, heat foci, communication loss and more. Each user manages their own silos under a multi-tenant model, with a global gallery, visual history synchronized with sensor timeline, topographic heatmaps and a dashboard of active and historical alerts.\n\nIt was built solo as the final project for the Cloud Software Development course at UTN FRLP. The whole stack is deployed on AWS: a Node.js + Express API on EC2 that also serves the React + Vite SPA, PostgreSQL on RDS for relational data (users, silos, sensor_data, alerts, alert configs, gallery captures), and S3 for storing the silo photos sent by the ESP32 (uploaded via multer-s3 with public URLs persisted in the DB). Authentication uses JWT with multi-tenant isolation at every query, the IoT protocol is HTTP multipart/form-data tying each device to a silo via a kit_code, and the frontend renders charts with Recharts and Plotly plus a custom topographic heatmap. The roadmap contemplates a geospatial module with React Leaflet, executive PDF/Excel reports and predictive models (ARIMA / LSTM) to anticipate stock depletion and putrefaction.",
      es: "Salgest es una plataforma AgTech integral diseñada para monitorear silos de almacenamiento de granos en tiempo real, reemplazando inspecciones manuales peligrosas con telemetría de precisión desde sensores ESP32 e inspección visual mediante cámara embarcada. El sistema lee temperatura, humedad, gases, presión y distancia ultrasónica para calcular el stock físico (nivel %, toneladas, punto de rocío, índice de calidad del aire) y ejecuta un motor de reglas en el servidor que dispara alertas inteligentes ante fermentación activa, riesgo de condensación, descensos bruscos de nivel, focos de calor, pérdida de comunicación y más. Cada usuario gestiona sus propios silos bajo un modelo multi-tenant, con galería global, historial visual sincronizado con la línea temporal de sensores, mapas de calor topográficos y un dashboard de alertas activas e históricas.\n\nLo desarrollé solo como trabajo práctico final de la materia Desarrollo de Software Cloud en la UTN FRLP. Todo el stack está desplegado sobre AWS: una API Node.js + Express corriendo en EC2 que además sirve la SPA React + Vite, PostgreSQL en RDS para los datos relacionales (users, silos, sensor_data, alerts, alert configs, gallery captures), y S3 para guardar las fotos de los silos que envía el ESP32 (subidas con multer-s3 y URLs públicas persistidas en la DB). La autenticación usa JWT con aislamiento multi-tenant en cada query, el protocolo IoT es HTTP multipart/form-data que ata cada dispositivo a un silo mediante un kit_code, y el frontend renderiza gráficos con Recharts y Plotly junto con un mapa de calor topográfico propio. El roadmap contempla un módulo geoespacial con React Leaflet, reportes ejecutivos PDF/Excel y modelos predictivos (ARIMA / LSTM) para anticipar agotamiento de stock y putrefacción.",
    },
    status: "building",
    cover: "/salgest/1.png",
    gallery: ["/salgest/1.png"],
    demo: "https://youtu.be/J5fz-ZG7sRA",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "AWS EC2",
      "AWS RDS",
      "AWS S3",
      "JWT",
      "ESP32",
      "Recharts",
      "Plotly",
    ],
    year: 2026,
  },
  {
    slug: "solar360",
    name: "Solar360",
    tagline: {
      en: "Web simulator for solar panels that estimates generation, savings and ROI using real climate data and a mathematical cluster-based model.",
      es: "Simulador web de paneles solares que estima generación, ahorro y retorno de inversión a partir de datos climáticos reales y un modelo matemático de clusters.",
    },
    description: {
      en: "Solar360 is an interactive simulator that lets anyone calculate how much energy a photovoltaic system could generate at their home, how much they would save per month and in how many years they would recover their investment. The user marks a location on a map, enters their consumption and tariff, picks the installation angle and gets a full simulation with monthly charts, cash flow, environmental impact and a downloadable PDF report.\n\nIt was the final project of the Numerical Analysis course at UTN FRLP and is documented in a scientific paper (available for download on this page). The mathematical model was built from an experimental dataset segmented into 6 operating clusters by ambient temperature and panel inclination, fitting a linear transfer function P = β₁·G in each one by Ordinary Least Squares (OLS), after comparing it against quadratic and exponential models using R² as the validation metric. At runtime, the simulator queries the NASA POWER API to fetch real monthly irradiance and temperature, iterates month by month to dimension the number of panels, and computes the financial (Payback) and environmental (CO₂ avoided, tree/car equivalents) models.",
      es: "Solar360 es un simulador interactivo que permite a cualquier persona calcular cuánta energía podría generar una instalación fotovoltaica en su domicilio, cuánto ahorraría por mes y en cuántos años recuperaría la inversión. El usuario marca su ubicación en un mapa, ingresa su consumo y su tarifa, elige el ángulo de instalación y obtiene una simulación completa con gráficos mensuales, flujo de fondos, impacto ambiental y un reporte descargable en PDF.\n\nFue el trabajo práctico final de la materia Análisis Numérico en la UTN FRLP y está documentado en un paper científico (disponible para descargar desde esta página). El modelo matemático se construyó a partir de un dataset experimental segmentado en 6 clusters operativos según temperatura ambiente e inclinación del panel, ajustando en cada uno una función de transferencia lineal P = β₁·G mediante Mínimos Cuadrados Ordinarios (OLS), luego de compararla contra modelos cuadrático y exponencial usando R² como métrica de validación. En ejecución, el simulador consulta la API de NASA POWER para traer irradiancia y temperatura mensuales reales, itera mes a mes para dimensionar la cantidad de paneles y calcula los modelos financiero (Payback) y ambiental (CO₂ evitado, equivalencias en árboles y autos).",
    },
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
    paper: "/Paper_Simulador_Fotovoltaico_v3.pdf",
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
    tagline: {
      en: "Mobile app to discover coffee shops near you, save favorites, organize visits with friends and share authentic reviews.",
      es: "App móvil para descubrir cafeterías cerca tuyo, guardar favoritas, organizar visitas con amigos y compartir reseñas auténticas.",
    },
    description: {
      en: "Café Cerca is a mobile app for people who enjoy going out for a coffee and want to discover new places without relying on anonymous reviews on generic maps. The app allows exploring nearby coffee shops, seeing their tags and features, saving favorites, and above all sharing real experiences with other users: written reviews, individual or shared visits with friends, comments and likes. It targets a young community that enjoys exploring the city, coordinating plans with friends and leaving honest opinions about every place they visit.\n\nIt was a team project for the Mobile Applications course at UTN FRLP. Within the team I was in charge of the entire review system and the shared-visit logic between multiple users: creating and editing reviews, how they are linked to each visit, how they are associated with several users at once in group visits (invitations, acceptance, response with a review), and all the coordination required for more than one person to participate, give their opinion and leave their own review about the same outing without stepping on each other's information.",
      es: "Café Cerca es una aplicación móvil pensada para quienes disfrutan salir a tomar un café y quieren descubrir lugares nuevos sin depender de reviews anónimas en mapas genéricos. La app permite explorar cafeterías cercanas, ver sus etiquetas y características, guardar las favoritas, y sobre todo compartir experiencias reales con otros usuarios: reseñas escritas, visitas individuales o compartidas con amigos, comentarios y likes. Apunta a una comunidad joven que disfruta explorar la ciudad, coordinar planes con amigos y dejar su opinión honesta sobre cada lugar que visitan.\n\nFue un proyecto grupal para la materia Aplicaciones Móviles en la UTN FRLP. Dentro del equipo me encargué de todo el sistema de reseñas y de la lógica de visitas compartidas entre múltiples usuarios: la creación y edición de reseñas, cómo se asocian a cada visita, cómo se vinculan a varios usuarios a la vez en visitas grupales (invitaciones, aceptación, respuesta con reseña), y toda la coordinación que implica que más de una persona pueda participar, opinar y dejar su review sobre una misma salida sin pisarse la información.",
    },
    status: "closed",
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
    slug: "app-recetas",
    name: "App Recetas",
    tagline: {
      en: "Mobile app to discover, search and save recipes, with an interactive ingredient list and search based on what you already have at home.",
      es: "App móvil para descubrir, buscar y guardar recetas, con lista interactiva de ingredientes y búsqueda por lo que ya tenés en casa.",
    },
    description: {
      en: "App Recetas is a mobile app for people who love cooking but don't always know what to make with what they have in the pantry. The app lets you search recipes by name or ingredient, see the full detail of each one (ingredients, steps and times), save favorites, and mark which ingredients the user already has to see at a glance what's missing. It includes user authentication, profile, dark/light mode and suggested search based on available ingredients. It targets users who want to make the most of what they have at home and discover new recipes without having to do a specific shopping every time.\n\nIt was a team project for the Mobile Applications Development course. Within the team my contribution was focused on the entire recipes module: the detail screen with its ingredients and steps, and especially the logic for marking the ingredients the user already has, persisting that state so when they reopen the recipe it still remembers what was already checked. I also integrated the external recipes API that brings all the content (name, image, ingredients, measures, instructions and categories), normalizing the response to adapt it to the UI and combining it with the own database where favorites, marked ingredients and user data are stored.",
      es: "App Recetas es una aplicación móvil para quienes les gusta cocinar pero no siempre saben qué preparar con lo que tienen en la alacena. La app permite buscar recetas por nombre o por ingredientes, ver el detalle completo de cada una (ingredientes, pasos y tiempos), guardar las favoritas y marcar qué ingredientes ya tiene el usuario para ver de un vistazo qué le falta. Incluye autenticación de usuarios, perfil, modo oscuro/claro y búsqueda sugerida a partir de los ingredientes disponibles. Apunta a usuarios que quieren aprovechar lo que tienen en casa y descubrir nuevas recetas sin tener que hacer una compra específica cada vez.\n\nFue un proyecto grupal para la materia Desarrollo de Aplicaciones Móviles. Dentro del equipo mi aporte estuvo centrado en todo el módulo de recetas: la pantalla de detalle con sus ingredientes y pasos, y sobre todo la lógica de marcar los ingredientes que el usuario ya tiene, persistiendo ese estado para que al volver a abrir la receta siga recordando lo que ya estaba tildado. Además integré la API externa de recetas que trae todo el contenido (nombre, imagen, ingredientes, medidas, instrucciones y categorías), normalizando la respuesta para adaptarla a la UI y combinándola con la base de datos propia donde se guardan favoritos, ingredientes marcados y datos del usuario.",
    },
    status: "closed",
    cover: "/app-recetas/1.png",
    gallery: [
      "/app-recetas/1.png",
      "/app-recetas/2.png",
      "/app-recetas/3.png",
      "/app-recetas/4.png",
      "/app-recetas/5.png",
    ],
    tech: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "Firebase Auth",
      "Firestore",
      "AsyncStorage",
    ],
    year: 2025,
  },
  {
    slug: "raim",
    name: "RAIM",
    tagline: {
      en: "Internal web system to manage incidents, requests and improvements within an organization, with full traceability for every requirement.",
      es: "Sistema web interno para gestionar incidencias, solicitudes y mejoras dentro de una organización, con trazabilidad completa de cada requerimiento.",
    },
    description: {
      en: "RAIM is a web application for managing internal requirements of an organization: incidents, requests and improvements. It lets you register each request with a unique code, classify it by type, category, priority and status, assign it to a responsible user, track its progress through comments, attach files and see the full history from one place. It also includes basic user and department management so you always know who created, who receives and who is working on each ticket. It targets internal teams that today handle these requests via email or chat and need an orderly flow, with real end-to-end traceability.\n\nIt was a team project and within the team my contribution was focused on the entire end-to-end management of requirements: creation with its unique code and linkage to the catalogs (status, priority, type and category), relationships with other entities (creator user, assigned responsible, comments and attachments), and the listing with combinable filters by status, type, category and user participation. I also handled file uploads and the whole transformation before persisting them into the database: type and size validation, name normalization, multipart payload processing and linking to both requirements and comments, making sure every file ends up associated with the correct record and can be retrieved from the detail.",
      es: "RAIM es una aplicación web para la gestión de requerimientos internos de una organización: incidencias, solicitudes y mejoras. Permite registrar cada pedido con un código único, clasificarlo por tipo, categoría, prioridad y estado, asignarlo a un responsable, seguir su avance con comentarios, adjuntar archivos y ver todo el historial desde un mismo lugar. Incluye además gestión básica de usuarios y departamentos para saber en todo momento quién creó, quién recibe y quién está trabajando cada ticket. Apunta a equipos internos que hoy resuelven estos pedidos por mail o chat y necesitan un flujo ordenado, con trazabilidad real de principio a fin.\n\nFue un proyecto grupal y dentro del equipo mi aporte estuvo centrado en toda la gestión de requerimientos end-to-end: el alta con su código único y la vinculación con los catálogos (estado, prioridad, tipo y categoría), las relaciones con otras entidades (usuario creador, responsable asignado, comentarios y adjuntos), y el listado con filtros combinables por estado, tipo, categoría y participación del usuario. También me encargué de la carga de archivos adjuntos y de toda la transformación previa a persistirlos en la base de datos: validación de tipo y tamaño, normalización del nombre, procesamiento del payload multipart y su vinculación tanto a requerimientos como a comentarios, asegurando que cada archivo quede asociado al registro correcto y se pueda recuperar desde el detalle.",
    },
    status: "closed",
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
    year: 2024,
  },
  {
    slug: "eventhub",
    name: "EventHub",
    tagline: {
      en: "Web platform to discover and manage events in a simple and organized way.",
      es: "Plataforma web para descubrir y gestionar eventos, de forma sencilla y organizada.",
    },
    description: {
      en: "EventHub is a web platform designed for anyone who organizes or discovers events: it lets you create and manage events, list them in a dashboard, see the detail of each one and know clearly how much is left before it starts. It targets both organizers who need to keep their catalog tidy and users who want to browse only current events without having to manually filter those that already happened.\n\nIt was a group project for a course where we started from an existing codebase, so a good part of the work consisted of reading, understanding and adapting to design decisions made by others before adding new functionality. Within the team my main contributions were: the countdown module to the event date (with dynamic calculation of days, hours, minutes and seconds and its integration in the detail view), the design of the new entities and relationships added to the database, hiding past events from the dashboard by default so the listing always shows what's relevant first, and the whole Docker and CI/CD pipeline configuration so the project can be spun up and deployed reproducibly. The whole development was accompanied by automated tests (unit and end-to-end with Playwright) to validate every critical flow of the application.",
      es: "EventHub es una plataforma web pensada para quienes organizan o descubren eventos: permite crear y administrar eventos, listarlos en un dashboard, ver el detalle de cada uno y saber de forma clara cuánto falta para que empiece. Apunta tanto a organizadores que necesitan mantener su catálogo ordenado como a usuarios que quieren explorar solamente los eventos vigentes sin tener que filtrar manualmente los que ya pasaron.\n\nFue un proyecto grupal para una materia en la que partimos de un código base ya existente, por lo que buena parte del trabajo consistió en leer, entender y adaptarnos a decisiones de diseño tomadas por otros antes de sumar funcionalidad nueva. Dentro del equipo mis aportes principales fueron: el módulo de cuenta regresiva hasta la fecha del evento (con el cálculo dinámico de días, horas, minutos y segundos y su integración en la vista de detalle), el diseño de las nuevas entidades y relaciones agregadas a la base de datos, ocultar por defecto los eventos pasados en el dashboard para que el listado siempre muestre lo relevante primero, y toda la configuración de Docker y del pipeline de CI/CD para que el proyecto se pueda levantar y desplegar de forma reproducible. Todo el desarrollo se acompañó con tests automáticos (unitarios y end-to-end con Playwright) para validar cada flujo crítico de la aplicación.",
    },
    status: "closed",
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
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
