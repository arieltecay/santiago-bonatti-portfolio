import React from 'react';
import { CVProfile } from '../../../data/cv-data';
import { MapPin, Phone, Mail, GraduationCap, MessageCircle, Building2, User } from 'lucide-react';
import { trackEvent } from '../../../analytics-tracker';

const Hero: React.FC<{ profile: CVProfile }> = ({ profile }) => {
  return (
    <section id="profile" className="pt-36 md:pt-24 pb-12 px-4 md:px-6 print:pt-0 print:pb-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 print:flex print:flex-col">
        {/* Bloque Principal: Perfil */}
        <div className="md:col-span-8 bg-white p-5 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between print:shadow-none print:border-none print:p-0">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-left print:flex-row print:gap-6">
            {/* Foto de Perfil - Rectangular (ratio 2:3) para no recortar la imagen */}
            <div className="w-32 aspect-[2/3] md:w-52 bg-blue-50 rounded-3xl overflow-hidden border-4 border-white shadow-xl flex-shrink-0 mx-auto md:mx-0 print:w-28 print:aspect-[2/3] print:shadow-none print:border-none print:rounded-2xl">
              <img
                src="/profile.png"
                alt={profile.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Santiago+Bonatti&background=1e3a8a&color=fff&size=200';
                }}
              />
            </div>

            <div className="flex-1 w-full">
              <div className="mb-4 print:mb-2 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight print:text-3xl">{profile.name}</h1>
                <p className="text-base md:text-xl text-blue-600 font-semibold mt-1 print:text-lg">{profile.title}</p>
              </div>
              <p className="text-sm md:text-lg text-slate-600 leading-relaxed print:text-sm print:leading-normal">
                {profile.profile}
              </p>
            </div>
          </div>

          {/* Tags de Perfil */}
          <div className="mt-6 md:mt-8 flex flex-wrap justify-center md:justify-start gap-2.5 md:gap-4 print:mt-4 print:gap-6">
            <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-xs md:text-sm font-medium print:bg-transparent print:p-0 print:text-xs">
              <MapPin size={16} className="text-blue-500 print:text-slate-400" />
              Tucumán, AR
            </div>
            <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-xs md:text-sm font-medium print:bg-transparent print:p-0 print:text-xs">
              <GraduationCap size={16} className="text-blue-500 print:text-slate-400" />
              Magíster en RRHH
            </div>
            <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-xs md:text-sm font-medium print:bg-transparent print:p-0 print:text-xs">
              <Building2 size={16} className="text-blue-500 print:text-slate-400" />
              Alcance Corporativo
            </div>
          </div>
        </div>

        {/* Bloque de Contacto: SIEMPRE VISIBLE */}
        <div id="contact" className="md:col-span-4 space-y-6 scroll-mt-32 md:scroll-mt-24 print:mt-4 print:space-y-4">
          <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white print:bg-white print:text-slate-900 print:p-0 print:shadow-none print:border-t print:border-slate-100 print:pt-4">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 print:text-lg print:mb-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full print:hidden" />
              Contacto y Ubicación
            </h2>

            <div className="space-y-4 print:grid print:grid-cols-2 print:gap-4 print:space-y-0">
              <a
                href={`tel:${profile.contact.phone.replace(/[^+\d]/g, '')}`}
                onClick={() => trackEvent('generate_lead', { method: 'phone', location: 'hero' })}
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all print:bg-transparent print:border-none print:p-0"
              >
                <Phone size={20} className="text-blue-400 print:text-blue-600" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold hidden print:block">Teléfono</span>
                  <span className="font-medium text-sm">{profile.contact.phone}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${profile.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('generate_lead', { method: 'whatsapp', location: 'hero' })}
                className="flex items-center gap-3 p-3 bg-green-600/10 border border-green-600/20 rounded-2xl hover:bg-green-600/20 transition-all print:bg-transparent print:border-none print:p-0"
              >
                <MessageCircle size={20} className="text-green-500" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold hidden print:block">WhatsApp</span>
                  <span className="font-medium text-sm text-white print:text-slate-900">WhatsApp</span>
                </div>
              </a>

              <a
                href={`mailto:${profile.contact.email}`}
                onClick={() => trackEvent('generate_lead', { method: 'email', location: 'hero' })}
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all print:bg-transparent print:border-none print:p-0"
              >
                <Mail size={20} className="text-blue-400 print:text-blue-600" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold hidden print:block">Email</span>
                  <span className="font-medium text-sm">{profile.contact.email}</span>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-2xl print:bg-transparent print:border-none print:p-0 print:col-span-2">
                <MapPin size={20} className="text-blue-400 print:text-blue-600 mt-1" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold hidden print:block">Ubicación</span>
                  <span className="font-medium text-sm leading-snug">{profile.contact.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bloque de Estadísticas de Impacto */}
          <div className="bg-blue-600 p-4 md:p-6 rounded-3xl shadow-lg text-white relative overflow-hidden print:hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <User size={16} className="text-blue-100" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Impacto Profesional</span>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="bg-white/10 rounded-2xl p-3 md:p-4 border border-white/20">
                    <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                    <div className="text-blue-100 opacity-90 text-[11px] md:text-xs font-medium leading-tight mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <Building2 size={80} className="absolute -right-4 -bottom-4 text-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
