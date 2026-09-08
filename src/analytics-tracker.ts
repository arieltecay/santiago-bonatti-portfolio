/**
 * Script para inicializar el seguimiento de Google Analytics (GA4).
 * Este script debe ejecutarse una sola vez al cargar la aplicación.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

(function initializeAnalytics(): void {
  // Bloquear ejecución si NO estamos en producción
  if (!import.meta.env.PROD) {
    console.log('Google Analytics: Modo Desarrollo detectado. Rastreo deshabilitado.');
    return;
  }

  // Obtener el ID desde las variables de entorno de Vite
  const measurementId = import.meta.env.VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn(
      'ADVERTENCIA: La variable VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID no está definida en el entorno. ' +
      'El seguimiento de Google Analytics está deshabilitado.'
    );
    return;
  }

  // Cargar la librería gtag.js si aún no está cargada (carga asíncrona)
  if (typeof window.gtag === 'undefined') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  // Inicializar dataLayer y la función gtag
  window.dataLayer = window.dataLayer || [];

  // Implementación estándar de gtag según documentación oficial de GA4
  window.gtag = function gtag(...args: any[]): void {
    window.dataLayer.push(args);
  };

  // Configuración inicial
  window.gtag('js', new Date());
  window.gtag('config', measurementId);
})();

/**
 * Utilidad global para trackear eventos personalizados.
 * @param eventName Nombre del evento (ej: 'generate_lead')
 * @param params Parámetros adicionales (ej: { method: 'whatsapp' })
 */
export const trackEvent = (eventName: string, params?: Record<string, any>): void => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, params);
  }
};

/**
 * Inicializa la medición de Core Web Vitals (Performance) de Google.
 * Envía métricas LCP, FID y CLS a Google Analytics.
 */
export const reportWebVitals = (): void => {
  if (typeof window.gtag === 'undefined') return;

  try {
    // 1. Medir LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      trackEvent('web_vitals_lcp', {
        value: Math.round(lastEntry.startTime),
        event_label: lastEntry.id || 'main-content',
        non_interaction: true,
      });
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

    // 2. Medir FID (First Input Delay)
    const fidObserver = new PerformanceObserver((entryList) => {
      entryList.getEntries().forEach((entry) => {
        const fidEntry = entry as PerformanceEventTiming;
        trackEvent('web_vitals_fid', {
          value: Math.round(fidEntry.processingStart - fidEntry.startTime),
          event_label: fidEntry.name,
          non_interaction: true,
        });
      });
    });
    fidObserver.observe({ type: 'first-input', buffered: true });

    // 3. Medir CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      trackEvent('web_vitals_cls', {
        value: clsValue,
        non_interaction: true,
      });
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });

  } catch (e) {
    console.error('Error al inicializar Web Vitals:', e);
  }
};

/**
 * Inicializa Microsoft Clarity para mapas de calor y grabaciones.
 * @param clarityId ID del proyecto en Clarity
 */
export const initializeClarity = (clarityId: string): void => {
  if (!clarityId) return;

  (function(c: any, l: any, a: any, r: any, i: any): void {
    c[a] = c[a] || function(...args: any[]) { (c[a].q = c[a].q || []).push(args); };
    const t: HTMLScriptElement = l.createElement(r);
    t.async = true;
    t.src = 'https://www.clarity.ms/tag/' + i;
    const y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', clarityId);
};
