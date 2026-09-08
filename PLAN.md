# PLAN — Santiago Bonatti Portfolio

> Planificación integral para la construcción del portafolio profesional web de **Santiago Alejandro Bonatti**, Director de Recursos Humanos. Documento vivo: cada fase tiene checklist de cierre.
>
> **ESTADO: FASES 1-4 COMPLETADAS** (scaffold, datos, componentes, build+lint verificados). FASE 5 (deploy) pendiente de pendientes externos (foto, GA4/Clarity IDs, confirmaciones de datos).

---

## 1. Análisis de Arquitectura

### 1.1 Contexto y diagnóstico

El portafolio replica y **extiende** la arquitectura probada de `bruno-tecay-portfolio` (misma base técnica, 100% reutilizable), pero el perfil de Santiago difiere estructuralmente:

| Dimensión | Bruno Tecay | Santiago Bonatti |
|---|---|---|
| Seniority | Analista/Jefe | **Director de RRHH** (reporte a Directorio) |
| Escala | Operaciones de planta | Dotaciones de **1.750 colaboradores**, 6 provincias |
| Experiencia | 5 posiciones | **8 posiciones**, 20+ años de carrera |
| Formación | Contador + Especialización | Magíster + Especialización + Licenciatura + **10 formaciones complementarias** |
| Extras | — | Actividades gremiales/académicas, disertaciones, **libro publicado (2026)** |

**Decisión técnica**: se mantiene el patrón data-driven (todo el contenido vive en `src/data/cv-data.ts`), extendiendo el modelo de datos con las entidades que el CV de Bonatti exige y que el repo base no contempla:

- `ComplementaryTraining` (formación complementaria: diplomaturas IA, coaching, posgrados cortos)
- `Activity` (actividades adicionales y distinciones: cargos gremiales, docencia, autoría)
- `stats` (métricas de impacto: 20+ años, 1.750 colaboradores, 6 provincias) — para el bloque de impacto del Hero

### 1.2 Trade-offs evaluados

- **Réplica exacta vs. extensión**: Se elige extensión. Reutilizar 1:1 dejaría fuera el 40% del valor diferencial del CV (formación complementaria en IA, actividades, libro). El costo es moderado (nuevo componente `Activities` + tipos nuevos), el beneficio es un portafolio fiel al perfil senior.
- **Multi-perfil (RRHH/Finanzas) vs. perfil único**: Bruno usa `profiles: Record<string, CVProfile>` y query param `?p=` para servir dos variantes. Para Santiago **no aplica**: es un perfil único, senior y coherente (Director de RRHH). Se simplifica a un solo perfil exportado (`bonattiProfile`), eliminando complejidad muerta sin perder la extensibilidad (si mañana quiere un foco "Consultoría/IA" solo se agrega la key).
- **Print stylesheet**: Se mantiene la estrategia de print A4 del repo base (es un diferencial real para un CV: reclutadores imprimen). Se extiende con reglas para los componentes nuevos.

### 1.3 Stack tecnológico (idéntico al repo base, validado)

| Capa | Tecnología | Justificación |
|---|---|---|
| UI | React 19 + TypeScript (strict) | Tipado de datos del CV, hooks modernos |
| Build | Vite 6 | DX rápida, bundling optimizado |
| Estilos | Tailwind CSS 4 (nativo, `@theme`) | Utility-first, tokens CSS variables |
| Animaciones | Framer Motion 12 | Acordeones de experiencia |
| Iconos | Lucide React | Iconografía profesional |
| Analytics | GA4 (gtag) + Web Vitals + Clarity | Medición de leads y comportamiento |
| Deploy | Vercel (estático) | Preview + dominio propio |

### 1.4 Estructura de archivos objetivo

```
santiago-bonatti-portfolio/
├── index.html                  # SEO + Open Graph (Santiago Bonatti)
├── package.json
├── vite.config.ts
├── tsconfig.json / tsconfig.node.json
├── eslint.config.js
├── .env / .env.example / .gitignore
├── PLAN.md                     # Este documento
├── public/
│   ├── CV-Santiago-Bonatti.pdf # CV descargable (copiar de ~/Downloads)
│   └── profile.png             # Foto (PENDIENTE: pedir a Santiago)
└── src/
    ├── main.tsx
    ├── App.tsx                 # Navbar + Footer + orquestación de secciones
    ├── analytics-tracker.ts    # GA4 + Web Vitals + Clarity
    ├── vite-env.d.ts
    ├── index.css               # @theme + print styles A4
    ├── data/
    │   └── cv-data.ts          # Modelo extendido + datos del CV Bonatti
    └── components/sections/
        ├── hero/Hero.tsx            # Bento grid: perfil + contacto + stats de impacto
        ├── experience/Experience.tsx # Acordeón 8 posiciones (Framer Motion)
        ├── skills/Skills.tsx        # Formación académica + complementaria + idiomas
        ├── activities/Activities.tsx # NUEVO: actividades y distinciones
        └── target-role/TargetRole.tsx # Bloque "postulación activa" (condicional)
```

---

## 2. Datos del CV (fuente única de verdad)

> Extraído de `CV_Bonatti 2026.pdf` (~/Downloads). Verificar con Santiago: teléfono completo y fecha fin TNPLATEX Gerente (CV dice "Octubre 2024" pero sigue como Director — probablemente tope de banda).

### 2.1 Perfil y contacto

- **Nombre**: Santiago Alejandro Bonatti
- **Título**: Director de Recursos Humanos
- **Teléfono**: (11) 59938115 — teléfono Buenos Aires; Santiago reside en Tucumán. **PENDIENTE confirmar**.
- **Email**: sabonatti@yahoo.com
- **Ubicación**: Tucumán, Argentina
- **Perfil profesional**: +20 años en Gestión de RRHH en empresas industriales y corporativas de alcance nacional. Liderazgo de equipos multidisciplinarios, dotaciones de hasta 1.750 colaboradores en múltiples provincias. Formación complementada con posgrados en RRHH, coaching, IA y relaciones laborales.

### 2.2 Experiencia (8 posiciones)

| # | Posición | Empresa | Período | Ubicación | Dotación |
|---|---|---|---|---|---|
| 1 | Director de Recursos Humanos | TNPLATEX | Oct 2023 – Presente | Tucumán, Catamarca, La Rioja, Chaco, Corrientes, Bs. As. | 1.750 |
| 2 | Gerente Corporativo de RRHH | TNPLATEX | Oct 2015 – Oct 2024 | 6 provincias | 1.750 |
| 3 | Gerente Corporativo de RRHH | ARGENTI GROUP | Jun 2010 – Oct 2015 | Tucumán, San Juan, Río Negro, Salta | 1.100 propios + 1.900 contratados |
| 4 | Gerente de RRHH — Chocolates y Helados | ARCOR SAIC | Jun 2008 – Jun 2010 | Córdoba, San Luis | 1.530 |
| 5 | Jefe de Relaciones Industriales — Chocolates y Helados | ARCOR SAIC | Dic 2007 – Jun 2008 | Córdoba, San Luis | 1.530 |
| 6 | Jefe de RRHH — Complejo Industrial Recreo | ARCOR SAIC | Sep 2006 – Dic 2007 | Catamarca | 720 |
| 7 | Analista de RRHH — Complejo Industrial Misky | ARCOR SAIC | Jun 2004 – Sep 2006 | Tucumán | 1.050 |
| 8 | Analista de RRHH | Papelera Tucumán S.A. | Abr 2003 – May 2004 | Tucumán | 800 |

### 2.3 Formación académica

1. **Magíster en Dirección y Gestión de RRHH** — Universidad Blas Pascal (2019–2020)
2. **Especialización en Dirección de RRHH** — Universidad Nacional de Tucumán (2004–2005)
3. **Licenciatura en Administración de Empresas** — UNT (1997–2002)

### 2.4 Formación complementaria (10 ítems)

1. Diplomatura en IA para no Programadores — UTN (2026)
2. Programa de Formación en IA — ITBA (2022)
3. Gestión del Desempeño — AO Consulting, Dr. Luis María Cravino (2012–2013)
4. Coaching: Equipos de Alto Desempeño — Newfield Group (2010–2011)
5. Posgrado en Roles de los RRHH — Universidad San Andrés (2007)
6. Posgrado en Relaciones Laborales — Fundación Magíster, Dr. Aldao Zapiola (2006)
7. Seminario Internacional de ROI en RRHH — Universidad Siglo XXI (2009)
8. Actualización en Administración de Personal — Lic. Néstor Orozco (2013)
9. Derecho Laboral — Markú & Asoc. (2006)
10. Liderazgo, Comunicación, Gestión de RRHH, Planificación e Innovación (2004–2007)

### 2.5 Idiomas

- Inglés: Intermedio
- Francés: Intermedio

### 2.6 Actividades y distinciones (7 ítems)

1. Secretario de la Unión Industrial de Tucumán (2021–presente)
2. Disertante en Control de Gestión y MBA — FCE-UNT (2023)
3. Vicepresidente de APRHNOA — Asociación de Profesionales de RRHH del NOA (2012–2016), 160 asociados
4. Docente en Indicadores de RRHH (Tablero de Gestión) — Posgrado UNT
5. Investigación sobre situación laboral rural de Tucumán — cátedra Preseminario, FCE-UNT (1999–2000)
6. **Autor del libro "Ahora Estamos Juntos"** (lanzamiento 2026, Editorial Tinta Libre)
7. *(Agrupar en 6 ítems en cv-data: investigación y docencia separadas)*

### 2.7 Aptitudes (derivadas del perfil)

Liderazgo de equipos multidisciplinarios · Gestión de dotaciones masivas · Relaciones laborales · Compensaciones · Desarrollo organizacional · Gestión del desempeño · Coaching ejecutivo · Inteligencia artificial aplicada a RRHH · Negociación colectiva · Talento y sucesión

### 2.8 Métricas de impacto (Hero stats)

- **20+** años de trayectoria
- **1.750** colaboradores gestionados
- **6** provincias de alcance
- **10** formaciones de posgrado y complementarias

---

## 3. Decisión Técnica: componentes y UX

### 3.1 Hero (Bento Grid)

- **Bloque principal (8/12)**: foto (fallback avatar ui-avatars con iniciales SB y color del tema), nombre, título "Director de Recursos Humanos", resumen del perfil.
- **Tags**: Tucumán AR · Lic. Administración · Magíster RRHH · Enfoque Corporativo
- **Bloque contacto (4/12)**: tarjeta oscura con teléfono, WhatsApp, email, ubicación. **PENDIENTE**: WhatsApp requiere número internacional — si el (11) 59938115 es correcto, sería 5491159938115.
- **Bloque stats de impacto (4/12, en lugar del "15+" de Bruno)**: grid 2×2 con las 4 métricas. Este bloque reemplaza el CTA de años de Bruno porque el valor de Santiago es la **escala** (dotación + alcance provincial).

### 3.2 Experience (acordeón Framer Motion)

- 8 posiciones, colapsadas por defecto, expandibles con animación de altura.
- Badge de dotación por posición (elemento nuevo vs. Bruno: "1.750 colaboradores" como chip destacable).
- Período + duración calculada en el dato (ej. "2 años", "5 años").
- Icono Briefcase, chevron rotatorio, print: expandido.

### 3.3 Skills (formación)

- Columna 1: **Formación Académica** (timeline con puntos, 3 títulos) + **Idiomas** (Inglés/Francés nivel intermedio).
- Columna 2 (oscura): **Aptitudes** (10 chips). En Bonatti la formación complementaria es tan extensa que se separa en su propio bloque dentro de esta misma sección.

### 3.4 Activities (NUEVO — componente exclusivo de Bonatti)

Sección nueva: grid de tarjetas con las 7 actividades/distinciones. El libro "Ahora Estamos Juntos" merece tratamiento destacado (card con icono BookOpen, badge "Próximo lanzamiento 2026").

### 3.5 TargetRole (condicional)

- Se mantiene el componente del repo base pero **sin datos** (Bonatti no tiene postulación activa declarada) → no se renderiza hasta que Santiago defina un objetivo. Alternativa: usarlo como bloque "Perfil Ejecutivo — ¿Qué puedo aportar?" con 4 matchPoints (escala, alcance multi-provincia, formación IA+RRHH, relaciones laborales).
- **Decisión**: usarlo como "Value Proposition" con matchPoints basados en su perfil real. Aporta estructura visual potente y el CV las respeta.

## 4. Plataforma: index.html / SEO / Analytics

- **Title**: `Santiago Bonatti | Director de Recursos Humanos`
- **Meta description**: perfil senior, escala nacional, IA aplicada a RRHH.
- **Open Graph / Twitter**: summary_large_image con `/profile.png`.
- **GA4**: mismo patrón del tracker del repo base (solo PROD, `VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID`). **PENDIENTE**: crear propiedad GA4 nueva para este dominio y obtener Measurement ID.
- **Clarity**: mismo patrón (`VITE_CLARITY_ID`). **PENDIENTE**: crear proyecto Clarity.
- **Eventos**: `generate_lead` (phone/whatsapp/email), `view_section`, `toggle_experience`, `file_download`, `print_cv`, `click_navigation`.

---

## 5. Fases de ejecución

### FASE 1 — Scaffolding (base técnica)

- [ ] `package.json` (mismas deps y versiones del repo base, name `santiago-bonatti-portfolio`)
- [ ] `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, `eslint.config.js`, `.gitignore`
- [ ] `src/vite-env.d.ts` (GA4 + Clarity envs)
- [ ] `src/main.tsx` (GA init + Web Vitals + Clarity en PROD)
- [ ] `src/index.css` (tema: azul corporativo senior #1e3a8a base + gradient slate; print A4 completo)
- [ ] `index.html` (SEO completo Bonatti)
- [ ] `.env.example` con claves vacías + `.env` local (sin valores: pendiente crear GA4/Clarity)
- [ ] `npm install` y smoke test `npm run dev`

### FASE 2 — Datos y modelo (cv-data.ts)

- [ ] Interfaces extendidas: `TargetRole`, `Experience` (+ `headcount`), `Education`, `ComplementaryTraining`, `Activity`, `CVProfile` (+ `stats`, `complementaryTraining`, `activities`, `whatsapp`, quitar campos no usados como `nationality/dni/status`)
- [ ] Cargar 8 experiencias con duración calculada y descripciones del CV
- [ ] Formación académica (3) + complementaria (10) + idiomas (2) + aptitudes (10)
- [ ] actividades (7, libro destacado), stats (4 métricas)
- [ ] TargetRole como Value Proposition (4 matchPoints reales)
- [ ] Copy del Hero: profile resumen del CV + tags

### FASE 3 — Componentes

- [ ] `analytics-tracker.ts` (adaptado 1:1, tipando mejor los params)
- [ ] `Hero.tsx` (bento grid, stats de impacto, contacto con trackEvent, fallback avatar SB)
- [ ] `Experience.tsx` (acordeón Framer Motion, chip dotación, print expandido)
- [ ] `Skills.tsx` (académica + complementaria + idiomas + aptitudes)
- [ ] `Activities.tsx` (grid tarjetas + libro destacado)
- [ ] `TargetRole.tsx` (value proposition ejecutivo)
- [ ] `App.tsx` (navbar fija, smooth scroll + offset, botones flotantes print/download con trackEvent, IntersectionObserver `view_section`, Footer con leads)
- [ ] Copiar CV PDF a `public/CV-Santiago-Bonatti.pdf`

### FASE 4 — Validación y calidad

- [ ] `npm run build` (tsc + vite) sin errores
- [ ] `npm run lint` (0 warnings)
- [ ] Test visual responsive (mobile-first 375px, tablet, desktop 1280px)
- [ ] Test print (A4, sin UI interactiva, acordeones expandidos, colores reseteados)
- [ ] Test de accesibilidad básica (alt en imágenes, aria-labels en botones icónicos)
- [ ] SEO: OG tags, canonical, robots
- [ ] Lighthouse ≥ 90 en Performance/SEO/Best Practices

### FASE 5 — Deploy y handoff

- [ ] git init + primer commit
- [ ] Deploy Vercel (o GitHub Pages según preferencia)
- [ ] Configurar dominio (opcional)
- [ ] Crear GA4 + Clarity y setear IDs en Vercel envs
- [ ] Entregar README con instrucciones de edición de contenido (todo se edita en cv-data.ts)

## 6. Riesgos y deudas pendientes

### 6.1 Pendientes externos (bloqueantes para producción)

| # | Ítem | Responsable | Impacto |
|---|---|---|---|
| 1 | Foto de perfil profesional (sin foto en el CV) | Santiago | Alto (usa fallback avatar con iniciales "SB") |
| 2 | GA4 Measurement ID y Clarity Project ID | Ariel | Medio (analytics deshabilitado) |
| 3 | Confirmar fechas TNPLATEX Gerente (fin "Oct 2024" vs. continuidad como Director) | Santiago | Bajo (se ajusta un string) |
| 4 | Confirmar WhatsApp válido para leads (el (11) es prefijo Bs. As.) | Santiago | Medio |

### 6.2 Trade-off conocido: DNI/nacionalidad

El repo base incluye DNI, nacionalidad y estado civil en el CV digital. Para un perfil **Director/senior**, exponer esos datos no aporta al objetivo de conversión (lead) y es data sensible. **Decisión**: omitirlos del modelo. Si Santiago los quiere, se re-agregan en 1 minuto (el modelo lo permite).

### 6.3 Calidad de los datos de origen

El PDF contiene dos anomalías a validar con Santiago:
- La posición 2 (Gerente TNPLATEX) termina "Octubre 2024" pero es la posición previa a la actual (Director desde Oct 2023) → solapamiento de un año. Probablemente tope salarial/banda o promoción interna.
- El teléfono tiene prefijo (11) de Buenos Aires pero reside en Tucumán → confirmar.

## 7. Checklist de cierre (definición de terminado)

- [ ] Build + lint sin errores ni warnings
- [ ] Todas las secciones renderizan con datos reales del CV
- [ ] Botón DESCARGAR CV funciona y descarga el PDF original
- [ ] Botón imprimir genera un CV A4 limpio
- [ ] Mobile: navbar colapsable funciona, botones flotantes no tapan contenido
- [ ] PLAN.md actualizado con lo efectivamente construido
- [ ] README.md con guía de edición de contenido
- [ ] Pendientes externos documentados en README para handoff
