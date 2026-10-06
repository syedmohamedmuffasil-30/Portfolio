import React, { useState } from 'react';
import { Menu, X, FileText, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Content', href: '#content' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#080C14]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#overview"
          className="text-base sm:text-lg font-bold tracking-tight text-white font-display hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
        >
          {PERSONAL_INFO.shortName}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="/syed-mohamed-muffasil-portfolio.zip"
            download="syed-mohamed-muffasil-portfolio.zip"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap"
            title="Download Full Project ZIP"
          >
            <Download className="w-3.5 h-3.5 text-teal-400" />
            <span>Download ZIP</span>
          </a>
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-teal-400" />
            <span>Resume</span>
          </button>
          <a
            href="#contact"
            className="inline-flex items-center px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0B101D] px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-teal-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="/syed-mohamed-muffasil-portfolio.zip"
              download="syed-mohamed-muffasil-portfolio.zip"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2 text-xs font-semibold text-center text-teal-300 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-teal-400" />
              <span>Download Complete ZIP</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2 text-xs font-semibold text-center text-slate-200 bg-slate-900 border border-slate-800 rounded-lg"
            >
              View Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2 text-xs font-semibold text-center text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
