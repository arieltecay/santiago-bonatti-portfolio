import React, { useEffect } from 'react';
import Hero from './components/sections/hero/Hero';
import Experience from './components/sections/experience/Experience';
import Skills from './components/sections/skills/Skills';
import Activities from './components/sections/activities/Activities';
import { bonattiProfile, CVProfile } from './data/cv-data';
import TargetRole from './components/sections/target-role/TargetRole';
import { Mail, Phone, Download, Printer } from 'lucide-react';
import { trackEvent } from './analytics-tracker';

const Footer: React.FC<{ profile: CVProfile }> = ({ profile }) => {
  return (
    <footer className="py-10 md:py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto border-t border-slate-300/30 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-slate-900 mb-1">{profile.name}</h2>
            <p className="text-slate-500 text-sm">
              Director de Recursos Humanos
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 text-sm text-slate-500 font-medium">
            <a
              href={`mailto:${profile.contact.email}`}
              onClick={() => trackEvent('generate_lead', { method: 'email', location: 'footer' })}
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Mail size={14} className="text-blue-500" />
              {profile.contact.email}
            </a>
            <a
              href={`tel:${profile.contact.phone.replace(/[^+\d]/g, '')}`}
              onClick={() => trackEvent('generate_lead', { method: 'phone', location: 'footer' })}
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Phone size={14} className="text-blue-500" />
              {profile.contact.phone}
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
          © {new Date().getFullYear()} Santiago Bonatti • Portafolio Profesional de Alto Impacto
        </div>
      </div>
    </footer>
  );
};

function App() {
  const activeProfile = bonattiProfile;

  const scrollToSection = (id: string) => {
    trackEvent('click_navigation', { section_id: id });
    const element = document.getElementById(id);
    if (element) {
      // Offset responsive: navbar mobile es de 2 filas (~120px), desktop 80px
      const offset = window.innerWidth < 768 ? 132 : 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handlePrint = () => {
    trackEvent('print_cv');
    window.print();
  };

  const handleDownloadCV = () => {
    trackEvent('file_download', {
      file_name: 'CV-Santiago-Bonatti.pdf',
      extension: 'pdf',
    });
  };

  useEffect(() => {
    const sections = ['profile', 'contact', 'experience', 'formation', 'activities'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              trackEvent('view_section', { section_id: id });
              observer.unobserve(el);
            }
          });
        }, { threshold: 0.3 });

        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen font-sans">
      {/* Botones Flotantes de Acción */}
      <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[100] flex flex-col items-end gap-3 no-print print:hidden">
        <button
          onClick={handlePrint}
          aria-label="Imprimir CV"
          className="w-12 h-12 md:w-14 md:h-14 bg-white text-slate-900 rounded-full shadow-2xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:-translate-y-1 transition-all group"
          title="Imprimir CV"
        >
          <Printer size={22} className="group-hover:text-blue-600" />
        </button>

        <a
          href="/CV-Santiago-Bonatti.pdf"
          download="CV_Santiago_Bonatti.pdf"
          onClick={handleDownloadCV}
          className="flex items-center gap-2 md:gap-3 bg-blue-600 text-white pl-4 pr-3 py-3 md:pl-6 md:pr-4 md:py-4 rounded-full shadow-2xl hover:bg-blue-700 hover:-translate-y-1 transition-all group"
        >
          <span className="font-bold text-xs md:text-sm tracking-wide">DESCARGAR CV</span>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Download size={18} />
          </div>
        </a>
      </div>

      {/* Navegación Fija */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100/50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 md:h-20 py-2.5 md:py-0 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-1.5 md:gap-0">
          {/* Fila 1 (mobile): logo + CTA Contacto | Desktop: logo */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer group flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold group-hover:rotate-6 transition-transform">
                SB
              </div>
              <span className="font-bold text-slate-900 tracking-tight hidden sm:block">Santiago Bonatti</span>
            </div>

            {/* CTA Contacto rápido (solo mobile) */}
            <button
              onClick={() => scrollToSection('contact')}
              aria-label="Ir a contacto"
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-xl shadow-sm hover:bg-blue-700 active:scale-95 transition-all"
            >
              <Phone size={16} />
              Contacto
            </button>
          </div>

          {/* Fila 2 (mobile): secciones | Desktop: alineado a la derecha */}
          <div className="flex gap-1 bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50 overflow-x-auto w-full md:w-auto min-w-0">
            <button
              onClick={() => scrollToSection('profile')}
              className="px-2.5 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-white rounded-xl transition-all whitespace-nowrap"
            >
              Perfil
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="px-2.5 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-white rounded-xl transition-all whitespace-nowrap"
            >
              Experiencia
            </button>
            <button
              onClick={() => scrollToSection('formation')}
              className="px-2.5 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-white rounded-xl transition-all whitespace-nowrap"
            >
              Formación
            </button>
            <button
              onClick={() => scrollToSection('activities')}
              className="px-2.5 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-white rounded-xl transition-all whitespace-nowrap"
            >
              Actividades
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero profile={activeProfile} />
        {activeProfile.targetRole && <TargetRole data={activeProfile.targetRole} />}
        <div id="experience">
          <Experience experience={activeProfile.experience} />
        </div>
        <div id="formation">
          <Skills
            education={activeProfile.education}
            complementaryTraining={activeProfile.complementaryTraining}
            aptitudes={activeProfile.aptitudes}
            languages={activeProfile.languages}
          />
        </div>
        <div id="activities">
          <Activities activities={activeProfile.activities} />
        </div>
      </main>

      <Footer profile={activeProfile} />
    </div>
  );
}

export default App;
