import React from 'react';
import { Education, ComplementaryTraining, LanguageSkill } from '../../../data/cv-data';
import { CheckCircle2, GraduationCap, Languages, Award } from 'lucide-react';

interface SkillsProps {
  education: Education[];
  complementaryTraining: ComplementaryTraining[];
  aptitudes: string[];
  languages: LanguageSkill[];
}

const Skills: React.FC<SkillsProps> = ({ education, complementaryTraining, aptitudes, languages }) => {
  return (
    <section id="formation" className="py-10 md:py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Bloque: Educación y Formación Complementaria */}
        <div className="bg-white p-5 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">Formación Académica</h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-slate-50">
                <div className="absolute top-0 -left-1.5 w-3 h-3 bg-blue-600 rounded-full" />
                <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug">{edu.degree}</h3>
                <p className="text-blue-600 text-sm font-medium mt-1">{edu.institution}</p>
                {edu.period && <p className="text-slate-400 text-xs mt-1">{edu.period}</p>}
                {edu.details && <p className="text-slate-500 text-sm mt-2 italic">{edu.details}</p>}
              </div>
            ))}
          </div>

          {/* Formación Complementaria */}
          <div className="mt-8 pt-8 border-t border-slate-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                <Award size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Formación Complementaria</h3>
            </div>
            <div className="space-y-3">
              {complementaryTraining.map((training, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-2xl">
                  <div className="flex justify-between items-start gap-4 flex-wrap">
                    <div>
                      <span className="font-bold text-slate-900 text-sm">{training.title}</span>
                      <p className="text-slate-500 text-xs mt-0.5">{training.institution}</p>
                    </div>
                    <span className="text-blue-600 font-semibold text-xs whitespace-nowrap print:text-black">{training.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Idiomas */}
          <div className="mt-8 pt-8 border-t border-slate-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                <Languages size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Idiomas</h3>
            </div>
            <div className="space-y-2">
              {languages.map((lang, idx) => (
                <div key={idx} className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl">
                  <span className="font-bold text-slate-900">{lang.language}</span>
                  <span className="text-blue-600 font-medium text-sm print:text-black">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bloque: Aptitudes */}
        <div className="bg-slate-900 p-5 md:p-8 rounded-3xl shadow-xl text-white">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400">
              <CheckCircle2 size={24} />
            </div>
            <h2 className="text-xl md:text-2xl font-bold">Habilidades & Aptitudes</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {aptitudes.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-slate-800/50 p-3.5 md:p-4 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors group">
                <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform" />
                <span className="text-slate-200 text-sm md:text-base font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
