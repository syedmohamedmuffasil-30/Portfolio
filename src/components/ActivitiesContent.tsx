import React from 'react';
import { Youtube, Linkedin, Video, BookMarked, Sparkles, ArrowRight, Share2, Users } from 'lucide-react';
import { AWARDS_AND_ACTIVITIES } from '../data/portfolioData';

interface ActivitiesContentProps {
  onOpenPromptStudio: () => void;
}

export const ActivitiesContent: React.FC<ActivitiesContentProps> = ({ onOpenPromptStudio }) => {
  const tutorialSeries = [
    {
      title: 'Business Canva Model Series',
      count: '5+ In-Depth Tutorials',
      platform: 'YouTube & LinkedIn',
      description: 'Deconstructing value propositions, customer segments, and revenue models for technology and AI projects.',
      highlights: ['Customer segment mapping', 'Cost structure analysis', 'Iterative value propositions'],
    },
    {
      title: 'Prompt Engineering & AI Tools Mastery',
      count: 'Active Tutorial Series',
      platform: 'LinkedIn & YouTube',
      description: 'Hands-on tutorials teaching learners how to harness LLMs, structured prompting, and vibe coding prototypes.',
      highlights: ['System prompt architecture', '60% quality output benchmark', 'No-code ML toolchains'],
    },
  ];

  return (
    <section id="content" className="py-20 sm:py-28 border-t border-slate-800/80 bg-[#090D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-teal-400">
              04. Community Impact & Media
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-2 tracking-tight">
              Awards & Educational Content Creation
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Sharing practical technical insights, Business Canva Model frameworks, and AI prompt engineering tutorials with an expanding community of developers.
          </p>
        </div>

        {/* Content Highlights Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tutorialSeries.map((series, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0C1220] border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-teal-400 font-mono">
                    <Video className="w-4 h-4" />
                    <span>{series.platform}</span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    {series.count}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white font-display">
                  {series.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {series.description}
                </p>

                <div className="pt-2">
                  <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider font-mono">
                    Core Focus Topics:
                  </div>
                  <div className="space-y-1.5">
                    {series.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href="https://linkedin.com/in/syed-mohamed-muffasil-s-u-05243b383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect & Watch on LinkedIn</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenPromptStudio}
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  View Framework
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Impact Summary Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-teal-950/30 via-slate-900/80 to-cyan-950/30 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Empowering Learners & Non-Technical Builders</div>
              <div className="text-xs text-slate-400 mt-0.5">
                Bridging the gap between complex machine learning paradigms and accessible no-code implementations.
              </div>
            </div>
          </div>

          <a
            href="mailto:sidmuffasil@gmail.com?subject=Collab%20or%20Mentoring%20Inquiry"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap"
          >
            Request a Workshop / Collaboration
          </a>
        </div>

      </div>
    </section>
  );
};
