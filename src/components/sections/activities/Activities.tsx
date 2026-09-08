import React from 'react';
import { Activity } from '../../../data/cv-data';
import { Award, BookOpen, Presentation, Briefcase, Search, Users, Sparkles } from 'lucide-react';

const activityIcons: Record<Activity['icon'], React.ReactNode> = {
  award: <Award size={22} />,
  book: <BookOpen size={22} />,
  presentation: <Presentation size={22} />,
  briefcase: <Briefcase size={22} />,
  research: <Search size={22} />,
  users: <Users size={22} />,
};

const Activities: React.FC<{ activities: Activity[] }> = ({ activities }) => {
  return (
    <section id="activities" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Actividades y Distinciones</h2>
          <div className="h-px flex-1 bg-slate-100 mx-8 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border transition-all print-card ${
                activity.featured
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xl md:col-span-2 lg:col-span-1'
                  : 'bg-white text-slate-900 border-slate-100 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    activity.featured ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-600'
                  }`}
                >
                  {activityIcons[activity.icon]}
                </div>
                <div>
                  {activity.featured && (
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 print:bg-slate-100 print:text-slate-600">
                      <Sparkles size={12} />
                      Próximo lanzamiento 2026
                    </div>
                  )}
                  <h3 className={`font-bold leading-snug ${activity.featured ? 'text-lg' : 'text-base'}`}>
                    {activity.title}
                  </h3>
                  <p className={`text-sm mt-2 leading-relaxed ${activity.featured ? 'text-blue-100 print:text-slate-600' : 'text-slate-500'}`}>
                    {activity.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
