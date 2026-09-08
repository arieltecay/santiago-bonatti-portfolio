import React, { useState } from 'react';
import { Experience as ExperienceType } from '../../../data/cv-data';
import { motion } from 'framer-motion';
import { ChevronDown, Briefcase, Calendar, MapPin, Users } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { trackEvent } from '../../../analytics-tracker';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ExperienceItem: React.FC<{ item: ExperienceType }> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    if (newState) {
      trackEvent('toggle_experience', {
        company: item.company,
        position: item.position,
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-4 transition-all hover:shadow-md print-card">
      <button
        onClick={handleToggle}
        className="w-full text-left p-6 flex flex-col md:flex-row md:items-start justify-between gap-4 relative group"
      >
        <div className="flex gap-4 items-start flex-1 pr-8 md:pr-0">
          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors print:hidden">
            <Briefcase size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 leading-tight">{item.position}</h3>
            <p className="text-blue-600 font-medium mb-2">{item.company}</p>

            {/* Fechas visibles en móviles debajo del título */}
            <div className="flex md:hidden flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-slate-400 uppercase tracking-wider print:flex">
              <div className="flex items-center gap-1">
                <Calendar size={12} />
                {item.period}
              </div>
              <span className="text-blue-200">|</span>
              <span>{item.duration}</span>
            </div>
          </div>
        </div>

        {/* Layout para Tablet/Desktop */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end text-sm text-slate-500 whitespace-nowrap print:hidden">
            <div className="flex items-center gap-1 font-semibold text-slate-900">
              <Calendar size={14} className="text-blue-500" />
              {item.period}
            </div>
            <span className="text-xs font-medium text-slate-400">{item.duration}</span>
          </div>

          {/* Chevron oculto en impresión */}
          <div className={cn(
            'p-2 rounded-xl transition-all absolute top-6 right-6 md:static print:hidden',
            isExpanded ? 'rotate-180 bg-blue-600 text-white' : 'bg-slate-50 text-slate-400'
          )}>
            <ChevronDown size={20} />
          </div>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden print:!h-auto print:!opacity-100"
      >
        <div className="px-6 pb-8 pt-2 border-t border-slate-50 bg-slate-50/30 print:bg-transparent print:border-none print:px-0">
          <div className="space-y-4">
            {item.location && (
              <div className="flex items-center gap-2 text-sm font-medium text-slate-400 bg-white w-fit px-3 py-1 rounded-full border border-slate-100 shadow-sm print:shadow-none print:border-none print:px-0 print:text-black">
                <MapPin size={14} className="text-blue-500 print:text-black" />
                {item.location}
              </div>
            )}
            {item.headcount && (
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-700 bg-blue-50 w-fit px-3 py-1 rounded-full border border-blue-100 print:shadow-none print:border-none print:px-0 print:text-black">
                <Users size={14} className="text-blue-600 print:text-black" />
                {item.headcount}
              </div>
            )}
            <ul className="grid grid-cols-1 gap-3">
              {item.description.map((desc, idx) => (
                <li key={idx} className="flex gap-4 text-slate-600 leading-relaxed text-[0.95rem] print:text-black print:gap-2">
                  <span className="mt-2.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 print:bg-black" />
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Experience: React.FC<{ experience: ExperienceType[] }> = ({ experience }) => {
  return (
    <section id="experience" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Trayectoria Profesional</h2>
          <div className="h-px flex-1 bg-slate-100 mx-8 hidden md:block"></div>
        </div>

        <div className="space-y-4">
          {experience.map((exp) => (
            <ExperienceItem key={exp.id} item={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
