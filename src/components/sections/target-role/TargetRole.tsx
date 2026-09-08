import React from 'react';
import { TargetRole as TargetRoleType } from '../../../data/cv-data';
import { Target, CheckCircle2 } from 'lucide-react';

const TargetRole: React.FC<{ data: TargetRoleType }> = ({ data }) => {
  return (
    <section className="px-4 md:px-6 py-4 print:py-2">
      <div className="max-w-6xl mx-auto bg-blue-600 p-5 md:p-8 rounded-3xl text-white shadow-xl relative overflow-hidden print:bg-white print:text-slate-900 print:shadow-none print:border print:border-slate-200 print:p-6">
        <Target size={120} className="absolute -right-10 -top-10 text-white/10 print:hidden" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs md:text-sm font-medium mb-4 print:bg-slate-100 print:text-slate-600">
            <Target size={16} />
            <span>Perfil Ejecutivo</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-2">{data.title}</h2>
          <p className="text-blue-100 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl print:text-slate-600">{data.description}</p>

          <div className="bg-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-sm border border-white/20 print:bg-slate-50 print:border-slate-200">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center gap-2 print:text-slate-800">
              <CheckCircle2 className="text-green-400 print:text-green-600" />
              ¿Por qué soy el candidato ideal?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {data.matchPoints.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0 print:bg-blue-100">
                    <span className="font-bold text-sm">{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg mb-1 print:text-slate-800">{point.title}</h4>
                    <p className="text-blue-50 text-xs md:text-sm leading-relaxed print:text-slate-600">{point.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetRole;
