# Santiago Bonatti - Portafolio Profesional

Este proyecto es una versión web innovadora, responsiva e interactiva del CV de Santiago Bonatti. Diseñado con una arquitectura moderna para destacar su perfil como **Director de Recursos Humanos** con más de 20 años de trayectoria en empresas industriales de alcance nacional.

## 🚀 Tecnologías
- **React 19**
- **Vite 6**
- **Tailwind CSS 4** (Configuración nativa)
- **Framer Motion** (Animaciones y menús expandibles)
- **Lucide React** (Iconografía profesional)

## 📁 Estructura del Proyecto
- `src/data/cv-data.ts`: Contiene toda la información del CV centralizada para fácil edición.
- `src/components/sections/`: Secciones principales (Hero con Bento Grid y stats de impacto, Experiencia expandible con chips de dotación, Formación académica + complementaria, Actividades y distinciones).
- `src/index.css`: Configuración de temas con variables CSS nativas de Tailwind 4 + estilos de impresión A4.
- `PLAN.md`: Documento de planificación completo del proyecto.

## 🛠️ Instalación y Desarrollo
1. Clona el repositorio:
   ```bash
   git clone <tu-url-de-github>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## ✏️ Cómo editar el contenido

**Todo el contenido del CV vive en `src/data/cv-data.ts`.** No es necesario tocar componentes para:
- Actualizar datos de contacto (teléfono, email, WhatsApp)
- Agregar/modificar/eliminar experiencias laborales
- Actualizar formación académica o complementaria
- Modificar aptitudes, idiomas o actividades
- Editar las métricas de impacto del Hero

## 🔗 Integraciones pendientes (handoff)

| Ítem | Cómo completarlo |
|---|---|
| **Foto de perfil** | Reemplazar `public/profile.png` (hoy usa fallback con iniciales) |
| **Google Analytics 4** | Crear propiedad GA4 y setear `VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID` en `.env` / Vercel |
| **Microsoft Clarity** | Crear proyecto y setear `VITE_CLARITY_ID` |
| **Datos a confirmar con Santiago** | Teléfono ((11) es prefijo Bs. As. pero reside en Tucumán), fecha fin del rol Gerente TNPLATEX (CV indica Oct 2024 con solapamiento), WhatsApp válido para leads |

## 🌐 Publicación
Para publicar en Vercel:
1. Ejecuta `npm run build`.
2. Sube el repositorio a GitHub e importa el proyecto en Vercel, o usa `vercel` CLI.

Para GitHub Pages: asegura que `vite.config.ts` tenga el `base` correcto si no usas un dominio personalizado.

---
Proyecto creado por **Ariel Tecay Software Engineer** para Santiago Bonatti.
