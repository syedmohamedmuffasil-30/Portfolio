import React from 'react';
import { SKILL_CATEGORIES, LANGUAGES } from '../data/portfolioData';
import { Code2, Wrench, Brain, Users, Globe2, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    if (title.includes('Programming')) return <Code2 className="w-4 h-4 text-teal-400" />;
    if (title.includes('Tools')) return <Wrench className="w-4 h-4 text-cyan-400" />;
    if (title.includes('Core')) return <Brain className="w-4 h-4 text-teal-400" />;
    return <Users className="w-4 h-4 text-cyan-400" />;
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-slate-800/80 bg-[#090D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-teal-400">
              02. Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-2 tracking-tight">
              Skills, Tools & Methodologies
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Specialized in algorithmic foundations, rapid AI-assisted vibe prototyping, design thinking empathy, and no-code ML pipelines.
          </p>
        </div>

        {/* 4-Column Skill Category Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0C1220] border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                  {getCategoryIcon(category.title)}
                  <h3 className="font-bold text-white text-base font-display">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-white">{skill.name}</span>
                        {skill.level && (
                          <span className="text-[11px] text-teal-400 font-mono">{skill.level}</span>
                        )}
                      </div>
                      {skill.description && (
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-teal-400" />
                <span>Verified in 2025 Projects</span>
              </div>
            </div>
          ))}
        </div>

        {/* Languages & Polyglot Proficiency Section (Bar visual matching resume) */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#0B101D] border border-slate-800">
          <div className="flex items-center gap-2 mb-6">
            <Globe2 className="w-5 h-5 text-teal-400" />
            <h3 className="text-lg font-bold text-white font-display">
              Languages & Communication Fluency
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LANGUAGES.map((lang, idx) => (
              <div key={idx} className="space-y-2 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">{lang.name}</span>
                  <span className="text-xs font-mono text-teal-300">{lang.level}</span>
                </div>
                
                {/* Visual Proficiency Bar */}
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full transition-all duration-1000"
                    style={{ width: `${lang.proficiency}%` }}
                    role="progressbar"
                    aria-valuenow={lang.proficiency}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="text-[10px] text-slate-400 font-mono text-right tabular-nums">
                  {lang.proficiency}% Proficiency
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
