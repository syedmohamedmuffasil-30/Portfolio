import React from 'react';
import { X, Printer, Mail, Phone, MapPin, Linkedin, GraduationCap, Award, CheckCircle2, Download } from 'lucide-react';
import {
  PERSONAL_INFO,
  PROJECTS,
  SKILL_CATEGORIES,
  LANGUAGES,
  CERTIFICATIONS,
  EDUCATION_LIST,
  AWARDS_AND_ACTIVITIES,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  avatarUrl: string;
  onOpenPhotoModal?: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  avatarUrl,
  onOpenPhotoModal,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto bg-[#0B101D] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-10 text-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Controls bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800 print:hidden">
          <div className="text-xs text-teal-400 font-mono uppercase tracking-wider">
            Curriculum Vitae · Syed Mohamed Muffasil S U
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/syed-mohamed-muffasil-portfolio.zip"
              download="syed-mohamed-muffasil-portfolio.zip"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors"
              title="Download Complete Source Code ZIP"
            >
              <Download className="w-3.5 h-3.5 text-teal-400" />
              <span>Download ZIP</span>
            </a>
            {onOpenPhotoModal && (
              <button
                onClick={onOpenPhotoModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 rounded-lg transition-colors"
              >
                Change Photo
              </button>
            )}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close resume view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="py-6 space-y-8 font-sans">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-teal-500/40 bg-slate-900 shrink-0">
                <img
                  src={avatarUrl}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h1 id="resume-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
                  {PERSONAL_INFO.name}
                </h1>
                <div className="text-teal-400 font-medium text-sm mt-1">
                  {PERSONAL_INFO.tagline}
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 space-y-1 sm:text-right font-mono">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <a href={`tel:${PERSONAL_INFO.contact.phone}`} className="hover:text-white">
                  {PERSONAL_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="hover:text-white">
                  {PERSONAL_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-teal-400" />
                <a
                  href={PERSONAL_INFO.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {PERSONAL_INFO.contact.linkedinDisplay}
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>{PERSONAL_INFO.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-3 font-mono">
              Projects
            </h2>
            <div className="space-y-5">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="border-l-2 border-teal-500/40 pl-4 py-0.5">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <h3 className="text-base font-bold text-white">
                      {proj.title}
                    </h3>
                    <div className="text-xs text-teal-400 font-mono">
                      {proj.year}
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 mb-2">
                    {proj.techStack.join(' · ')}
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                    {proj.bullets.map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-3 font-mono">
              Education
            </h2>
            <div className="space-y-4">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-bold text-white">{edu.degree}</h3>
                    <div className="text-xs text-slate-300">{edu.institution}</div>
                    {edu.coursework && (
                      <div className="text-xs text-slate-400 mt-1">
                        Coursework: {edu.coursework.join(', ')}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-teal-400 font-mono whitespace-nowrap">
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-3 font-mono">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="font-semibold text-white mb-1.5">{cat.title}</div>
                  <div className="text-slate-300 space-y-1">
                    {cat.skills.map((s, sIdx) => (
                      <div key={sIdx}>
                        <span className="text-white font-medium">{s.name}</span>
                        {s.description && (
                          <span className="text-slate-400"> — {s.description}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Certifications Dual Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-3 font-mono">
                Languages
              </h2>
              <div className="space-y-2 text-xs">
                {LANGUAGES.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-slate-200 font-medium">{lang.name}</span>
                    <span className="text-teal-400 font-mono text-[11px]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-3 font-mono">
                Certifications
              </h2>
              <div className="space-y-2 text-xs">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-slate-200 font-medium">
                      {cert.title} – {cert.issuer}
                    </span>
                    <span className="text-teal-400 font-mono text-[11px]">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards & Activities */}
          <div>
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-2 font-mono">
              Awards & Activities
            </h2>
            <div className="space-y-2 text-xs text-slate-300">
              {AWARDS_AND_ACTIVITIES.map((act, idx) => (
                <div key={idx} className="leading-relaxed">
                  • {act.description}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Close */}
        <div className="pt-6 border-t border-slate-800 flex justify-end print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Resume
          </button>
        </div>
      </div>
    </div>
  );
};
