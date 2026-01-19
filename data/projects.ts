export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  cover: string;
  role: string;
  duration: string;
  description: string;
  tools: string[];
  overview: {
    context: string;
    problemStatement: string;
    goal: string;
  };
  research: {
    hypothesis: string;
    why: string;
    persona: {
      name: string;
      age: number;
      profile: string;
      location: string;
      context: string;
      motivations: string[];
      frustrations: string[];
      img: string;
    };
    journey: { stage: string; action: string; pain: string }[];
    keyInsights: string[];
  };
  architecture: {
    sitemap: string[];
    navigationGoals: string[];
  };
  process: {
    context: string;
    steps: string[];
  };
  solution: {
    uxStrategy: string[];
    visualDecisions: { colors: string; imagery: string };
    nextStepsNote: string;
  };
  outcomes: {
    impact: string[];
    learnings: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "molina-producciones-ux-case",
    title: "Molina Producciones",
    subtitle: "Optimización de conversión desde redes sociales",
    category: "UX/UI · Research · Web Design",
    cover: "/cover.jpeg",
    role: "UX/UI Designer · Frontend",
    duration: "4 semanas",

    description:
      "Caso de estudio enfocado en transformar el interés generado en Instagram en contactos reales, mediante una experiencia web clara, confiable y orientada a conversión.",

    tools: [
      "UX Research",
      "Figma",
      "User Journey",
      "Information Architecture",
      "Prototyping",
    ],

    // ================= CONTEXTO =================
    overview: {
      context:
        "La mayoría de los usuarios llegaba a Molina Producciones desde Instagram con una alta intención inicial. Sin embargo, al aterrizar en la web, encontraban información poco estructurada, servicios poco claros y una falta de señales de confianza que los ayudaran a tomar una decisión. Esto generaba abandono temprano y pérdida de oportunidades, a pesar del interés previo.",

      problemStatement:
        "Aunque los usuarios mostraban un interés genuino en redes sociales, la experiencia web no facilitaba una transición clara, confiable y natural hacia el contacto directo, provocando fricción, abandono y baja conversión.",

      goal:
        "Diseñar una experiencia web enfocada en conversión que transforme visitas provenientes de redes sociales en contactos reales, brindando claridad sobre los servicios, reforzando la confianza del usuario y facilitando una toma de decisión rápida y segura.",
    },

    // ================= UX RESEARCH =================
    research: {
      hypothesis:
        "Si se estructura la información de forma clara, se refuerza la confianza visual con trabajos reales y se prioriza un CTA visible hacia WhatsApp, los usuarios estarán más dispuestos a contactar sin fricción.",

      why:
        "El proceso de UX Research se enfocó en comprender cómo los usuarios evaluaban servicios fotográficos después de descubrir la marca en Instagram. Se analizaron patrones de comportamiento, expectativas y puntos de abandono para identificar qué elementos generaban confianza y cuáles provocaban fricción en la toma de decisión.",

      persona: {
        name: "Andrea López",
        age: 28,
        profile: "Emprendedora",
        location: "Lima, Perú",
        context:
          "Busca un fotógrafo profesional para eventos familiares y evalúa opciones principalmente desde redes sociales, tomando decisiones rápidas basadas en confianza visual, claridad de servicios y facilidad de contacto.",

        motivations: [
          "Sentirse segura antes de contratar",
          "Ver trabajos reales y recientes",
          "Contactar rápidamente sin formularios complejos",
        ],

        frustrations: [
          "Información desordenada",
          "Pocos testimonios o referencias reales",
          "Paquetes poco claros o confusos",
        ],

        img: "/persona.jpg",
      },

      journey: [
        {
          stage: "Descubrimiento",
          action: "Encuentra la marca en Instagram y siente interés inicial",
          pain: "No entiende con claridad qué servicios ofrece ni qué incluye cada uno",
        },
        {
          stage: "Exploración",
          action: "Revisa el portafolio y los paquetes disponibles",
          pain: "Percibe el contenido como desordenado y poco orientado a la decisión",
        },
        {
          stage: "Decisión",
          action: "Evalúa si contactar para solicitar información",
          pain: "Falta de confianza visual y CTA poco visible generan abandono",
        },
      ],

      keyInsights: [
        "La confianza visual es el principal factor de conversión en servicios creativos",
        "Menos contenido, pero mejor estructurado, genera mayor seguridad",
        "WhatsApp es percibido como el canal más directo y confiable de contacto",
      ],
    },

    // ================= ARQUITECTURA =================
    architecture: {
      sitemap: [
        "Home",
        "Sobre Nosotros",
        "Portafolio",
        "Servicios",
        "Contacto",
      ],
      navigationGoals: [
        "Acceso rápido al portafolio visual",
        "Claridad en los servicios ofrecidos",
        "Contacto inmediato sin fricción",
      ],
    },

    // ================= PROCESO =================
    process: {
      context:
        "Durante el desarrollo del proyecto, el principal reto fue diseñar una experiencia clara y persuasiva sin sobrecargar de información. Se priorizó la confianza visual, la simplicidad y la jerarquía del contenido para acompañar al usuario en su toma de decisión.",

      steps: [
        "Análisis del comportamiento de usuarios provenientes de Instagram",
        "Definición de User Persona basada en patrones reales",
        "Mapeo del User Journey y detección de puntos de fricción",
        "Reestructuración de la arquitectura de información",
        "Definición de una estrategia UX orientada a conversión",
        "Diseño de jerarquía visual y estructura de contenidos",
      ],
    },

    // ================= SOLUCIÓN UX/UI =================
    solution: {
      uxStrategy: [
        "Hero con propuesta de valor clara desde el primer impacto",
        "Portafolio visual organizado por categorías",
        "Servicios explicados de forma simple y directa",
        "CTA persistente y visible hacia WhatsApp",
      ],

      visualDecisions: {
        colors:
          "Paleta basada en tonos cálidos y contrastes suaves para transmitir cercanía, profesionalismo y confianza.",

        imagery:
          "Uso de fotografías reales de trabajos realizados para reforzar autenticidad y credibilidad.",
      },

      nextStepsNote:
        "Los mockups visuales de alta fidelidad y el prototipo interactivo se encuentran en proceso de desarrollo.",
    },

    // ================= RESULTADOS =================
    outcomes: {
      impact: [
        "Se logró una propuesta de valor clara desde el primer impacto visual, alineada con las expectativas del usuario",
        "Se redujo la fricción en el proceso de decisión al simplificar la arquitectura de información",
        "La estructura de contenidos se alineó a objetivos de conversión, priorizando confianza y claridad",
        "La experiencia final acompaña al usuario desde el descubrimiento hasta el contacto directo",
      ],

      learnings: [
        "El UX orientado a conversión es clave en servicios profesionales",
        "La evidencia visual genera confianza inmediata",
        "La arquitectura de información importa más que la cantidad de contenido",
      ],
    },
  },

  {
  id: 2,
  slug: "profe-ideal-ux-case",
  title: "Profe Ideal",
  subtitle: "Plataforma de evaluación y selección docente",
  category: "UX/UI · Research · Web Platform",
  cover: "/profe-ideal-cover.jpg",
  role: "UX/UI Designer · Research",
  duration: "6 semanas",

  description:
    "Profe Ideal es una plataforma web que centraliza información objetiva y reseñas verificadas sobre docentes universitarios, permitiendo a los estudiantes tomar decisiones informadas al momento de matricularse.",

  tools: [
    "UX Research",
    "User Persona",
    "Journey Map",
    "Information Architecture",
    "Prototyping",
    "Figma",
  ],

  // ================= CONTEXTO =================
  overview: {
    context:
      "Actualmente no existe una fuente centralizada y confiable donde los estudiantes puedan evaluar a los docentes universitarios. La información se encuentra dispersa en redes sociales, grupos de WhatsApp y comentarios informales, lo que genera confusión y malas decisiones académicas.",

    problemStatement:
      "Los estudiantes toman decisiones importantes basándose en opiniones subjetivas, contradictorias y sin validación, lo que incrementa el riesgo de elegir docentes que no se ajusten a su estilo de aprendizaje.",

    goal:
      "Diseñar una plataforma confiable, clara y accesible que permita a los estudiantes evaluar, comparar y elegir docentes basándose en datos objetivos y reseñas verificadas.",
  },

  // ================= UX RESEARCH =================
  research: {
    hypothesis:
      "Si los estudiantes cuentan con una plataforma centralizada que valide reseñas reales y muestre indicadores claros del desempeño docente, podrán tomar decisiones más seguras y rápidas durante el proceso de matrícula.",

    why:
      "La investigación UX se enfocó en entender cómo los estudiantes buscan información sobre docentes, qué fuentes utilizan, qué emociones experimentan y qué dificultades enfrentan al no contar con datos confiables.",

    persona: {
      name: "Camila Carrion",
      age: 20,
      profile: "Estudiante de Ingeniería de Sistemas",
      location: "Lima, Perú",
      context:
        "Busca elegir docentes que se adapten a su estilo de aprendizaje. Actualmente se guía por comentarios dispersos en redes sociales y recomendaciones informales.",

      motivations: [
        "Elegir docentes adecuados a su estilo de aprendizaje",
        "Evitar malas experiencias académicas",
        "Tomar decisiones seguras durante la matrícula",
      ],

      frustrations: [
        "Información dispersa y contradictoria",
        "Opiniones sin validación",
        "Pérdida de tiempo buscando referencias",
      ],

      img: "/persona-camila.jpg",
    },

    journey: [
      {
        stage: "Búsqueda",
        action:
          "Busca información en Google, redes sociales y grupos de WhatsApp",
        pain:
          "Encuentra opiniones contradictorias y sin respaldo",
      },
      {
        stage: "Comparación",
        action:
          "Compara experiencias de otros estudiantes y perfiles en LinkedIn",
        pain:
          "No existen criterios claros para comparar docentes",
      },
      {
        stage: "Decisión",
        action:
          "Elige un docente basándose en la información disponible",
        pain:
          "Miedo a equivocarse y afectar su rendimiento académico",
      },
    ],

    keyInsights: [
      "Los estudiantes necesitan datos objetivos además de opiniones",
      "La validación de reseñas aumenta la confianza",
      "La centralización de información reduce el estrés en matrícula",
    ],
  },

  // ================= ARQUITECTURA =================
  architecture: {
    sitemap: [
      "Home",
      "Docentes",
      "Comparador",
      "Ranking",
      "Foro",
      "Perfil de Usuario",
      "Panel Administrativo",
    ],
    navigationGoals: [
      "Búsqueda rápida de docentes",
      "Comparación clara entre opciones",
      "Acceso a reseñas verificadas",
    ],
  },

  // ================= PROCESO =================
  process: {
    context:
      "El diseño se centró en reducir la complejidad del proceso de búsqueda y evaluación docente, priorizando claridad, confianza y accesibilidad.",

    steps: [
      "Investigación sobre hábitos de búsqueda de estudiantes",
      "Definición de User Persona y mapas de empatía",
      "Análisis de puntos de dolor y barreras",
      "Definición de arquitectura de información",
      "Diseño de flujos de evaluación y comparación",
      "Propuesta de una experiencia intuitiva y transparente",
    ],
  },

  // ================= SOLUCIÓN UX/UI =================
  solution: {
    uxStrategy: [
      "Plataforma centralizada con información validada",
      "Buscador y filtros por curso, categoría y puntuación",
      "Comparador visual de docentes",
      "Sistema de reseñas verificadas",
      "Ranking basado en métricas objetivas",
    ],

    visualDecisions: {
      colors:
        "Uso de colores suaves y profesionales para transmitir confianza y claridad.",
      imagery:
        "Diseño limpio con énfasis en datos, métricas y perfiles claros.",
    },

    nextStepsNote:
      "El prototipo de alta fidelidad y pruebas de usabilidad están planificadas para la siguiente fase.",
  },

  // ================= RESULTADOS =================
  outcomes: {
    impact: [
      "Reducción del tiempo de búsqueda de información docente",
      "Mayor confianza en la toma de decisiones académicas",
      "Mejor experiencia de matrícula para los estudiantes",
      "Base sólida para la mejora continua de la calidad educativa",
    ],

    learnings: [
      "La transparencia genera confianza",
      "Los datos objetivos complementan la opinión subjetiva",
      "UX bien estructurado impacta directamente en decisiones críticas",
    ],
  },
},

  {
  id: 3,
  slug: "jeshy-ecommerce-ux-case",
  title: "Jeshy E-commerce",
  subtitle: "Optimización de la experiencia de compra online",
  category: "UX/UI · Research · E-commerce",
  cover: "/jeshy-cover.jpg",
  role: "UX/UI Designer · Research",
  duration: "5 semanas",

  description:
    "Caso de estudio enfocado en mejorar la experiencia de compra online de la marca Jeshy, reduciendo el abandono del carrito y aumentando la confianza del usuario mediante una navegación clara, información detallada de productos y una presentación visual optimizada.",

  tools: [
    "UX Research",
    "User Persona",
    "Empathy Map",
    "User Journey",
    "Information Architecture",
    "E-commerce UX",
    "Figma",
  ],

  // ================= CONTEXTO =================
  overview: {
    context:
      "Jeshy es una marca de ropa juvenil que capta a la mayoría de sus clientes a través de redes sociales, especialmente Instagram. Sin embargo, su experiencia de compra online presenta problemas de visualización, información incompleta de productos y una navegación poco intuitiva, lo que genera abandono del carrito.",

    problemStatement:
      "Los clientes se interesan por las prendas, pero no cuentan con información clara sobre tallas, colores, materiales ni políticas de compra, lo que provoca inseguridad, frustración y la decisión de no comprar online.",

    goal:
      "Diseñar una experiencia de compra online intuitiva, visualmente atractiva y confiable que facilite la exploración de productos, reduzca el abandono del carrito y aumente la conversión y satisfacción del cliente.",
  },

  // ================= UX RESEARCH =================
  research: {
    hypothesis:
      "Si los productos cuentan con imágenes claras, guías de tallas visibles, descripciones completas y una navegación bien estructurada, los usuarios se sentirán más seguros y estarán más dispuestos a finalizar la compra online.",

    why:
      "La investigación UX se centró en entender cómo los clientes descubren Jeshy en redes sociales, cómo exploran los productos, qué información buscan antes de comprar y qué barreras los llevan a abandonar la compra.",

    persona: {
      name: "Valeria Camila Rojas",
      age: 23,
      profile: "Comunicadora digital",
      location: "Lima, Perú",
      context:
        "Descubre marcas de moda en Instagram y disfruta comprar ropa cuando algo le llama la atención, pero necesita seguridad visual e información clara antes de comprar online.",

      motivations: [
        "Comprar ropa de tendencia sin complicaciones",
        "Ver claramente cómo es la prenda antes de comprar",
        "Sentirse segura con la talla, el material y el color",
      ],

      frustrations: [
        "Fotos poco claras o con mala iluminación",
        "Falta de guías de tallas y materiales",
        "Información dispersa o incompleta en la tienda online",
      ],

      img: "/persona-valeria.jpg",
    },

    journey: [
      {
        stage: "Descubrimiento",
        action:
          "Descubre Jeshy en Instagram a través de publicaciones y videos",
        pain:
          "Encuentra mucho contenido visual pero poca información útil del producto",
      },
      {
        stage: "Exploración",
        action:
          "Navega por la tienda online para ver prendas y detalles",
        pain:
          "Las imágenes y descripciones no son suficientes para tomar una decisión",
      },
      {
        stage: "Decisión",
        action:
          "Evalúa si comprar online o ir a la tienda física",
        pain:
          "Prefiere abandonar la compra online por falta de confianza",
      },
    ],

    keyInsights: [
      "La información visual es clave en la moda online",
      "Las guías de tallas reducen la inseguridad al comprar",
      "La falta de claridad genera abandono del carrito",
    ],
  },

  // ================= ARQUITECTURA =================
  architecture: {
    sitemap: [
      "Home",
      "Productos",
      "Categorías",
      "Detalle de Producto",
      "Guía de Tallas",
      "Lookbook",
      "Carrito",
      "Checkout",
      "Sobre la Marca",
      "Atención al Cliente",
    ],
    navigationGoals: [
      "Explorar productos fácilmente",
      "Acceder rápido a información clave",
      "Finalizar la compra sin fricción",
    ],
  },

  // ================= PROCESO =================
  process: {
    context:
      "El proceso de diseño se enfocó en simplificar la experiencia de compra, reducir la carga cognitiva del usuario y mejorar la presentación visual de los productos para generar confianza.",

    steps: [
      "Análisis del comportamiento de compra en redes sociales",
      "Definición de User Persona y mapa de empatía",
      "Identificación de puntos de dolor en la compra online",
      "Reestructuración del catálogo y categorías",
      "Diseño de flujos de compra y carrito",
      "Propuesta de una experiencia visual clara y atractiva",
    ],
  },

  // ================= SOLUCIÓN UX/UI =================
  solution: {
    uxStrategy: [
      "Catálogo organizado por categorías claras",
      "Imágenes de alta calidad con opción de zoom",
      "Guías de tallas y cuadros de medidas visibles",
      "Información completa de productos (materiales, colores)",
      "Proceso de compra simple y ordenado",
    ],

    visualDecisions: {
      colors:
        "Uso de una paleta limpia y moderna alineada a la identidad juvenil de la marca.",
      imagery:
        "Fotografías claras con modelos diversos y múltiples ángulos de cada prenda.",
    },

    nextStepsNote:
      "Se plantea realizar pruebas de usabilidad y validar el flujo de compra con usuarios reales antes de su implementación final.",
  },

  // ================= RESULTADOS =================
  outcomes: {
    impact: [
      "Mejor comprensión de los productos antes de comprar",
      "Reducción del abandono del carrito",
      "Mayor confianza en la compra online",
      "Experiencia alineada a las expectativas del público joven",
    ],

    learnings: [
      "La claridad visual es esencial en e-commerce de moda",
      "La información detallada impulsa la conversión",
      "Una buena arquitectura reduce la fricción en la compra",
    ],
  },
},

{
  id: 4,
  slug: "plataforma-reserva-consumo",
  title: "Plataforma de Reserva de Consumo",
  subtitle: "Sistema digital de reserva de alimentos para comunidad universitaria",
  category: "UX/UI · Research · Web Platform",
  cover: "/reserva-consumo-cover.jpg",
  role: "UX/UI Designer · UX Research",
  duration: "5 semanas",

  description:
    "Plataforma de Reserva de Consumo es un sistema digital diseñado para facilitar la reserva anticipada de comidas, bebidas, desayunos y postres dentro de una universidad, optimizando la experiencia del usuario y la gestión operativa del servicio de alimentación.",

  tools: [
    "UX Research",
    "User Persona",
    "Journey Map",
    "Information Architecture",
    "User Flows",
    "Wireframes",
    "Prototyping",
    "Figma",
  ],

  // ================= CONTEXTO =================
  overview: {
    context:
      "En la universidad, los estudiantes y el personal enfrentan largas filas, tiempos de espera elevados y poca claridad sobre la disponibilidad de alimentos en los puntos de consumo. El proceso actual es manual o poco digitalizado, generando frustración y desperdicio de tiempo.",

    problemStatement:
      "La falta de un sistema centralizado de reservas dificulta la planificación del consumo, provoca aglomeraciones en horas pico y reduce la satisfacción de los usuarios.",

    goal:
      "Diseñar una plataforma intuitiva y eficiente que permita a los usuarios reservar alimentos de manera anticipada, reduciendo tiempos de espera y mejorando la experiencia dentro del campus.",
  },

  // ================= UX RESEARCH =================
  research: {
    hypothesis:
      "Si los usuarios pueden reservar su consumo con anticipación desde una plataforma clara y rápida, se reducirá el tiempo de espera, aumentará la satisfacción y se optimizará la gestión del servicio de alimentación.",

    why:
      "La investigación UX permitió entender los hábitos de consumo dentro del campus, los momentos de mayor demanda, las frustraciones actuales y las necesidades reales de los usuarios.",

    persona: {
      name: "Daniel Torres",
      age: 21,
      profile: "Estudiante universitario",
      location: "Lima, Perú",
      context:
        "Tiene horarios ajustados entre clases y actividades académicas. Busca soluciones rápidas para alimentarse sin perder tiempo en filas.",

      motivations: [
        "Ahorrar tiempo entre clases",
        "Asegurar disponibilidad de alimentos",
        "Tener control sobre su consumo diario",
      ],

      frustrations: [
        "Largas filas en cafetería",
        "Falta de información sobre disponibilidad",
        "Pérdida de tiempo en horas pico",
      ],

      img: "/persona-daniel.jpg",
    },

    journey: [
      {
        stage: "Necesidad",
        action:
          "Busca una opción rápida para desayunar o almorzar antes de clase",
        pain:
          "No sabe si habrá disponibilidad ni cuánto tiempo perderá",
      },
      {
        stage: "Reserva",
        action:
          "Ingresa a la plataforma para reservar su consumo",
        pain:
          "Quiere un proceso rápido y sin pasos innecesarios",
      },
      {
        stage: "Recojo",
        action:
          "Se acerca al punto de consumo a la hora reservada",
        pain:
          "Espera que el pedido esté listo sin filas",
      },
    ],

    keyInsights: [
      "El tiempo es el factor más crítico para los usuarios",
      "La anticipación reduce el estrés y la frustración",
      "Una experiencia simple aumenta el uso recurrente",
    ],
  },

  // ================= ARQUITECTURA =================
  architecture: {
    sitemap: [
      "Home",
      "Menú del Día",
      "Categorías (Comidas, Bebidas, Postres)",
      "Detalle del Producto",
      "Reserva",
      "Mis Reservas",
      "Historial",
      "Perfil de Usuario",
      "Ayuda y Soporte",
    ],
    navigationGoals: [
      "Acceso rápido al menú",
      "Reserva en pocos pasos",
      "Visualización clara del estado del pedido",
    ],
  },

  // ================= PROCESO =================
  process: {
    context:
      "El proceso de diseño se enfocó en reducir fricciones, priorizar rapidez y claridad, y adaptarse a los tiempos limitados del entorno universitario.",

    steps: [
      "Investigación de hábitos de consumo universitario",
      "Definición de user persona y mapa de empatía",
      "Identificación de puntos de dolor",
      "Diseño de arquitectura de información",
      "Creación de flujos de reserva",
      "Diseño de wireframes y prototipo interactivo",
    ],
  },

  // ================= SOLUCIÓN UX/UI =================
  solution: {
    uxStrategy: [
      "Reserva anticipada por horarios",
      "Menú visual con disponibilidad en tiempo real",
      "Filtros por tipo de alimento",
      "Historial y repetición rápida de pedidos",
      "Confirmación clara de reserva",
    ],

    visualDecisions: {
      colors:
        "Uso de colores cálidos y amigables que transmiten rapidez y cercanía.",
      imagery:
        "Fotografías claras de los alimentos para facilitar la decisión.",
    },

    nextStepsNote:
      "Se plantea realizar pruebas de usabilidad y optimizar la plataforma con base en métricas de uso real.",
  },

  // ================= RESULTADOS =================
  outcomes: {
    impact: [
      "Reducción de tiempos de espera en cafetería",
      "Mejor organización del servicio de alimentación",
      "Incremento en la satisfacción del usuario",
      "Mayor control operativo del consumo diario",
    ],

    learnings: [
      "La simplicidad es clave en entornos de alta demanda",
      "Reducir pasos mejora la adopción",
      "UX eficiente impacta directamente en la rutina del usuario",
    ],
  },
}
];
