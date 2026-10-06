import React, { useState } from 'react';
import { Play, Sparkles, ExternalLink, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsProps {
  onOpenAutoML: () => void;
  onOpenPromptStudio: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenAutoML, onOpenPromptStudio }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-teal-400">
              01. Featured Engineering Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-2 tracking-tight">
              Prototypes & Machine Learning Systems
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Production-focused software engineered using Python, HTML, and CSS—validated with end-user interviews and iterative design thinking.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;
            const isAutoML = project.demoType === 'automl';

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-[#0B101D] border border-slate-800/90 overflow-hidden transition-all hover:border-slate-700/80"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
                  
                  {/* Visual container */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:col-start-7' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video group">
                      {!imageErrors[project.id] ? (
                        <img
                          src={project.imagePath}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          onError={() => handleImageError(project.id)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 p-6 text-center">
                          <Cpu className="w-10 h-10 text-teal-400 mb-2" />
                          <div className="text-sm font-semibold text-white">{project.title}</div>
                          <div className="text-xs text-slate-400 mt-1">{project.techStack.join(' · ')}</div>
                        </div>
                      )}

                      {/* Overlay action trigger */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                        <button
                          onClick={isAutoML ? onOpenAutoML : onOpenPromptStudio}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-md transition-colors"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Launch Interactive Sandbox</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Editorial & Spec Details */}
                  <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:col-start-1' : ''}`}>
                    
                    {/* Unboxed Metadata (Zero-pill discipline) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
                      <span className="text-teal-400 font-semibold">{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.role}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-300">{project.techStack.join(' · ')}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Bullet Points from Resume */}
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      {project.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Quantified Metrics Box */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                          <div className="text-base sm:text-lg font-bold text-teal-300 font-display tabular-nums">
                            {metric.value}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Interactive CTA */}
                    <div className="pt-2">
                      <button
                        onClick={isAutoML ? onOpenAutoML : onOpenPromptStudio}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors group"
                      >
                        <span>
                          {isAutoML ? 'Run AutoML Simulation & Testing Playground' : 'Open Prompt & Vibe Workbench'}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
