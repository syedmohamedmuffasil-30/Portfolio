import React from 'react';
import { EDUCATION_LIST, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle, ExternalLink, Calendar, MapPin } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-teal-400">
              03. Academic Foundations & Industry Certifications
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-2 tracking-tight">
              Education & Verified Credentials
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Rigorous undergraduate engineering studies paired with internationally recognized machine learning and AI certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-teal-400" />
              <h3 className="text-xl font-bold text-white font-display">
                Formal Academic Background
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_LIST.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0B101D] border border-slate-800 hover:border-slate-700/80 transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="text-base sm:text-lg font-bold text-white font-display">
                      {edu.degree}
                    </h4>
                    <span className="text-xs text-teal-400 font-mono font-medium whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-sm text-slate-300 font-medium flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-teal-400" />
                    <span>{edu.institution}</span>
                  </div>

                  {edu.details && (
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {edu.details}
                    </p>
                  )}

                  {edu.coursework && (
                    <div className="pt-2 border-t border-slate-800/80">
                      <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                        <span>Core Coursework:</span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs text-slate-400 font-mono">
                        {edu.coursework.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div id="credentials" className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-teal-400" />
              <h3 className="text-xl font-bold text-white font-display">
                Industry Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0B101D] border border-slate-800 hover:border-slate-700/80 transition-all space-y-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs text-teal-400 font-mono uppercase tracking-wider">
                        {cert.issuer}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white font-display mt-0.5">
                        {cert.title}
                      </h4>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      {cert.year}
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Verified Curriculum & Scope:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {cert.skillsCovered.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 text-[11px] text-teal-400 font-mono flex items-center justify-between">
                    <span>Verified Credential</span>
                    <span>2025 Cohort</span>
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
