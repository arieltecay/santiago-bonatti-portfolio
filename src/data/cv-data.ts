export interface TargetRole {
  title: string;
  description: string;
  matchPoints: { title: string; detail: string }[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  duration: string;
  description: string[];
  location?: string;
  headcount?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface ComplementaryTraining {
  title: string;
  institution: string;
  period: string;
}

export interface Activity {
  icon: 'award' | 'book' | 'presentation' | 'briefcase' | 'research' | 'users';
  title: string;
  detail: string;
  featured?: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface LanguageSkill {
  language: string;
  level: string;
}

export interface CVProfile {
  name: string;
  title: string;
  profile: string;
  contact: {
    address: string;
    phone: string;
    whatsapp: string;
    email: string;
  };
  stats: Stat[];
  aptitudes: string[];
  education: Education[];
  complementaryTraining: ComplementaryTraining[];
  languages: LanguageSkill[];
  experience: Experience[];
  activities: Activity[];
  targetRole?: TargetRole;
}

export const bonattiProfile: CVProfile = {
  name: 'Santiago Bonatti',
  title: 'Director de Recursos Humanos',
  profile:
    'Profesional con más de 20 años de trayectoria en Gestión de Recursos Humanos en empresas industriales y corporativas de alcance nacional. Amplia experiencia liderando equipos multidisciplinarios y gestionando dotaciones de hasta 1.750 colaboradores en múltiples provincias. Sólida formación académica complementada con programas de posgrado en RRHH, coaching, inteligencia artificial y relaciones laborales.',
  contact: {
    address: 'Tucumán, Argentina',
    phone: '(11) 5993-8115',
    whatsapp: '5491159938115',
    email: 'sabonatti@yahoo.com',
  },
  stats: [
    { value: '20+', label: 'Años de trayectoria en RRHH' },
    { value: '1.750', label: 'Colaboradores gestionados' },
    { value: '6', label: 'Provincias de alcance' },
    { value: '10+', label: 'Posgrados y formaciones complementarias' },
  ],
  aptitudes: [
    'Liderazgo de equipos multidisciplinarios',
    'Gestión de dotaciones masivas',
    'Relaciones laborales',
    'Compensaciones',
    'Desarrollo organizacional',
    'Gestión del desempeño',
    'Coaching ejecutivo',
    'Inteligencia artificial aplicada a RRHH',
    'Negociación colectiva',
    'Desarrollo de talento y sucesión',
  ],
  education: [
    {
      degree: 'Magíster en Dirección y Gestión de Recursos Humanos',
      institution: 'Universidad Blas Pascal (UBP)',
      period: '2019 – 2020',
    },
    {
      degree: 'Especialización en Dirección de Recursos Humanos',
      institution: 'Universidad Nacional de Tucumán (UNT)',
      period: '2004 – 2005',
    },
    {
      degree: 'Licenciatura en Administración de Empresas',
      institution: 'Universidad Nacional de Tucumán (UNT)',
      period: '1997 – 2002',
    },
  ],
  complementaryTraining: [
    { title: 'Diplomatura en IA para no Programadores', institution: 'UTN', period: '2026' },
    { title: 'Programa de Formación en Inteligencia Artificial', institution: 'ITBA', period: '2022' },
    { title: 'Programa de Gestión del Desempeño', institution: 'AO Consulting — Dr. Luis María Cravino', period: '2012 – 2013' },
    { title: 'Programa de Coaching: Equipos de Alto Desempeño', institution: 'Newfield Group', period: '2010 – 2011' },
    { title: 'Posgrado en Roles de los RRHH', institution: 'Universidad San Andrés', period: '2007' },
    { title: 'Posgrado en Relaciones Laborales', institution: 'Fundación Magíster — Dr. Aldao Zapiola', period: '2006' },
    { title: 'Seminario Internacional de ROI en RRHH', institution: 'Universidad Siglo XXI', period: '2009' },
    { title: 'Actualización en Administración de Personal', institution: 'Lic. Néstor Orozco', period: '2013' },
    { title: 'Curso de Derecho Laboral', institution: 'Consultora Markú & Asoc.', period: '2006' },
    { title: 'Cursos de Liderazgo, Comunicación, Gestión de RRHH, Planificación e Innovación', institution: 'Formación continua', period: '2004 – 2007' },
  ],
  languages: [
    { language: 'Inglés', level: 'Nivel Intermedio' },
    { language: 'Francés', level: 'Nivel Intermedio' },
  ],
  experience: [
    {
      id: 'tnplatex-director',
      company: 'TNPLATEX',
      position: 'Director de Recursos Humanos',
      period: '10/2023 - Actual',
      duration: '2 años',
      location: 'Tucumán, Catamarca, La Rioja, Chaco, Corrientes y Buenos Aires',
      headcount: '1.750 colaboradores',
      description: [
        'Reporte directo al Directorio.',
        'Gestión de una dotación promedio de 1.750 colaboradores.',
        'Liderazgo estratégico del área de RRHH a nivel corporativo en 6 provincias.',
      ],
    },
    {
      id: 'tnplatex-gerente',
      company: 'TNPLATEX',
      position: 'Gerente Corporativo de Recursos Humanos',
      period: '10/2015 - 10/2024',
      duration: '9 años',
      location: 'Tucumán, Catamarca, La Rioja, Chaco, Corrientes y Buenos Aires',
      headcount: '1.750 colaboradores',
      description: [
        'Reporte directo al Directorio. Dotación promedio de 1.750 colaboradores.',
        'Diseño e implementación de políticas corporativas de RRHH en todas las unidades de negocio.',
        'Gestión de relaciones laborales, desarrollo organizacional y compensaciones.',
      ],
    },
    {
      id: 'argenti',
      company: 'ARGENTI GROUP',
      position: 'Gerente Corporativo de Recursos Humanos',
      period: '06/2010 - 10/2015',
      duration: '5 años y 5 meses',
      location: 'Tucumán, San Juan, Río Negro y Salta',
      headcount: '1.100 propios + 1.900 contratados',
      description: [
        'Gestión de 1.100 colaboradores propios y 1.900 contratados. Reporte directo al Directorio.',
        'Implementación de sistemas de gestión del desempeño y planes de desarrollo de talento.',
      ],
    },
    {
      id: 'arcor-gerente',
      company: 'ARCOR SAIC',
      position: 'Gerente de RRHH — Negocio Chocolates y Helados',
      period: '06/2008 - 06/2010',
      duration: '2 años',
      location: 'Córdoba y San Luis',
      headcount: '1.530 colaboradores',
      description: [
        'Gestión de 1.530 colaboradores.',
        'Reporte al Gerente Industrial del Negocio y al Gerente Industrial de RRHH.',
        'Coordinación de relaciones industriales, administración de personal y capacitación.',
      ],
    },
    {
      id: 'arcor-jefe-ri',
      company: 'ARCOR SAIC',
      position: 'Jefe de Relaciones Industriales — Negocio Chocolates y Helados',
      period: '12/2007 - 06/2008',
      duration: '7 meses',
      location: 'Córdoba y San Luis',
      headcount: '1.530 colaboradores',
      description: [
        'Gestión de relaciones laborales para una dotación de 1.530 colaboradores con base en Colonia Caroya.',
      ],
    },
    {
      id: 'arcor-jefe-recreo',
      company: 'ARCOR SAIC',
      position: 'Jefe de RRHH — Complejo Industrial Recreo',
      period: '09/2006 - 12/2007',
      duration: '1 año y 4 meses',
      location: 'Catamarca',
      headcount: '720 colaboradores',
      description: [
        'Responsable integral de RRHH para 720 colaboradores.',
        'Reporte al Gerente Operativo y al Gerente Industrial de RRHH.',
      ],
    },
    {
      id: 'arcor-analista-misky',
      company: 'ARCOR SAIC',
      position: 'Analista de Recursos Humanos — Complejo Industrial Misky',
      period: '06/2004 - 09/2006',
      duration: '2 años y 4 meses',
      location: 'Tucumán',
      headcount: '1.050 colaboradores',
      description: [
        'Encargado de la gestión industrial de RRHH para 1.050 colaboradores.',
      ],
    },
    {
      id: 'papelera',
      company: 'Papelera Tucumán S.A.',
      position: 'Analista de RRHH',
      period: '04/2003 - 05/2004',
      duration: '1 año y 2 meses',
      location: 'Tucumán',
      headcount: '800 colaboradores',
      description: [
        'Gestión de personal para 800 colaboradores.',
        'Reporte al Gerente de Planta y Gerente de RRHH.',
      ],
    },
  ],
  activities: [
    {
      icon: 'briefcase',
      title: 'Secretario de la Unión Industrial de Tucumán',
      detail: '2021 – presente.',
    },
    {
      icon: 'presentation',
      title: 'Disertante en Control de Gestión y MBA',
      detail: 'Facultad de Ciencias Económicas, UNT (2023).',
    },
    {
      icon: 'users',
      title: 'Vicepresidente de APRHNOA',
      detail: 'Asociación de Profesionales de RRHH del NOA (2012–2016), con 160 asociados, actividades de formación y convenios universitarios.',
    },
    {
      icon: 'presentation',
      title: 'Docente en Indicadores de RRHH (Tablero de Gestión)',
      detail: 'Posgrado de Administración de Personal, Universidad San Pablo T, Tucumán.',
    },
    {
      icon: 'research',
      title: 'Investigación sobre situación laboral en el área rural de Tucumán',
      detail: 'Designado por la cátedra de Preseminario, FCE-UNT (1999–2000).',
    },
    {
      icon: 'book',
      title: 'Autor del libro "Ahora Estamos Juntos"',
      detail: 'Editorial Tinta Libre.',
      featured: true,
    },
  ],
  targetRole: {
    title: 'Perfil Ejecutivo — ¿Qué puedo aportar?',
    description:
      'Director de RRHH orientado a la escala corporativa: estrategia, relaciones laborales y desarrollo organizacional con impacto medible en el negocio.',
    matchPoints: [
      {
        title: 'Escala Corporativa',
        detail: 'Gestión de dotaciones de hasta 1.750 colaboradores en 6 provincias, con reporte directo al Directorio en TNPLATEX y ARGENTI GROUP.',
      },
      {
        title: 'Alcance Corporativo',
        detail: 'Liderazgo de RRHH en operaciones distribuidas en Tucumán, Catamarca, La Rioja, Chaco, Corrientes, Buenos Aires, San Juan, Río Negro, Salta, Córdoba y San Luis.',
      },
      {
        title: 'Formación de Vanguardia',
        detail: 'Magíster en Dirección y Gestión de RRHH, complementado con formación en Inteligencia Artificial (UTN, ITBA) aplicada a la gestión de capital humano.',
      },
      {
        title: 'Relaciones Laborales y Gremiales',
        detail: 'Profundo dominio de relaciones laborales industriales, negociación colectiva y vinculación gremial, incluyendo su rol como Secretario de la Unión Industrial de Tucumán.',
      },
    ],
  },
};
