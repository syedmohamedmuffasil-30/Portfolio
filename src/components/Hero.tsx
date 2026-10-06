import React, { useState } from 'react';
import { ArrowRight, MapPin, Mail, Phone, Linkedin, Check, Copy, Sparkles, Cpu, Layers, Camera, Download } from 'lucide-react';
import { PERSONAL_INFO, METRIC_HIGHLIGHTS } from '../data/portfolioData';

interface HeroProps {
  avatarUrl: string;
  onOpenPhotoModal: () => void;
  onOpenAutoML: () => void;
  onOpenPromptStudio: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  avatarUrl,
  onOpenPhotoModal,
  onOpenAutoML,
  onOpenPromptStudio,
  onOpenResume,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [imgError, setImgError] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="overview" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean Unboxed Metadata kicker (Zero-Pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
              <span className="text-teal-400 font-semibold tracking-wide uppercase font-mono">
                {PERSONAL_INFO.tagline}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                {PERSONAL_INFO.contact.location}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">SNS College of Technology (2025–2029)</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08] text-balance">
              Syed Mohamed Muffasil S U
            </h1>

            {/* Sub-headline focus */}
            <p className="text-lg sm:text-xl font-medium text-teal-300/90 leading-snug">
              {PERSONAL_INFO.headline}
            </p>

            {/* Professional Summary from Resume */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.summary}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenAutoML}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all shadow-lg shadow-teal-500/20 active:scale-95"
              >
                <Cpu className="w-4 h-4 fill-current" />
                <span>Try AutoML Prototype</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPromptStudio}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span>Prompt Studio</span>
              </button>

              <a
                href="/syed-mohamed-muffasil-portfolio.zip"
                download="syed-mohamed-muffasil-portfolio.zip"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 rounded-xl transition-all active:scale-95"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>Download ZIP</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <span>Full Resume</span>
              </button>
            </div>

            {/* Quick Contact Ribbon */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
              <a
                href={`tel:${PERSONAL_INFO.contact.phone}`}
                className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>{PERSONAL_INFO.contact.phone}</span>
              </a>

              <div className="flex items-center gap-1.5">
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-teal-400" />
                  <span>{PERSONAL_INFO.contact.email}</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="text-slate-500 hover:text-slate-300 p-0.5"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-teal-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5 text-teal-400" />
                <span>{PERSONAL_INFO.contact.linkedinDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Container & Card Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-teal-500/20 via-slate-800 to-cyan-500/20 blur-sm -z-10" />

              {/* Card Container */}
              <div className="p-6 rounded-3xl bg-[#0C1220] border border-slate-800/90 shadow-2xl space-y-6">
                
                {/* Profile Portrait & Identity Header */}
                <div className="flex items-center gap-4">
                  <div className="relative group">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-teal-500/40 bg-slate-900 shrink-0 shadow-lg shadow-teal-500/10">
                      {!imgError ? (
                        <img
                          src={avatarUrl}
                          alt="Syed Mohamed Muffasil S U"
                          referrerPolicy="no-referrer"
                          onError={() => setImgError(true)}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-teal-900/60 to-slate-950 text-teal-300 font-display font-bold text-xl">
                          SM
                        </div>
                      )}

                      {/* Hover Overlay Button to Change Photo */}
                      <button
                        onClick={onOpenPhotoModal}
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 text-white text-[11px] font-semibold cursor-pointer"
                        title="Change Profile Photo"
                        aria-label="Change Profile Photo"
                      >
                        <Camera className="w-4 h-4 text-teal-300" />
                        <span>Change</span>
                      </button>
                    </div>

                    {/* Small badge button on corner */}
                    <button
                      onClick={onOpenPhotoModal}
                      className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-slate-900 border border-teal-500/60 text-teal-300 hover:text-white hover:bg-teal-600 transition-colors shadow-md"
                      title="Change Photo"
                      aria-label="Change Photo"
                    >
                      <Camera className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-teal-400 font-mono">B.E. CS & Design (2025–29)</span>
                    </div>
                    <div className="font-bold text-lg sm:text-xl text-white font-display mt-0.5">
                      Syed Mohamed Muffasil
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      SNS College of Technology · Coimbatore
                    </div>
                    <button
                      onClick={onOpenPhotoModal}
                      className="text-[11px] text-teal-400 hover:text-teal-300 font-medium mt-1 flex items-center gap-1 transition-colors"
                    >
                      <Camera className="w-3 h-3" />
                      <span>Change Photo</span>
                    </button>
                  </div>
                </div>

                {/* Highlights Bento Snippets */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800">
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">AutoML Platform Pioneer</div>
                      <div className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        Automating data preprocessing, model selection & tuning; -80% workflow time.
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Prompt & Vibe Architect</div>
                      <div className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        Tested 20+ design scenarios with +60% output boost; YouTube & LinkedIn educator.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Open to internships & ML projects</span>
                  <a
                    href="#contact"
                    className="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Connect directly</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Metrics Ribbon adjacent to claims */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {METRIC_HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
                  <span className="text-teal-400">{item.value}</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                  {item.label}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                  {item.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
