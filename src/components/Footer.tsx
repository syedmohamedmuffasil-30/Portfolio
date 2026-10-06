import React from 'react';
import { ArrowUp, Mail, Phone, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060910] py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center md:text-left">
            <div className="font-bold text-white text-sm font-display">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-slate-400">
              Computer Science & Design Student · Machine Learning Enthusiast · Coimbatore, India
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenResume}
              className="hover:text-teal-400 transition-colors"
            >
              Curriculum Vitae
            </button>
            <a
              href="/syed-mohamed-muffasil-portfolio.zip"
              download="syed-mohamed-muffasil-portfolio.zip"
              className="hover:text-teal-400 transition-colors flex items-center gap-1"
            >
              <span>Download ZIP</span>
            </a>
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="hover:text-teal-400 transition-colors"
            >
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Syed Mohamed Muffasil S U. All projects and research documented from verified coursework & prototypes.
          </div>
          <div>
            SNS College of Technology · B.E. CS & Design
          </div>
        </div>
      </div>
    </footer>
  );
};
