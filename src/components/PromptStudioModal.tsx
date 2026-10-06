import React, { useState } from 'react';
import { Sparkles, Copy, Check, X, Code2, Sliders, ExternalLink, ShieldCheck, Terminal, Award } from 'lucide-react';

interface ScenarioPreset {
  id: string;
  name: string;
  targetCategory: string;
  description: string;
  defaultPrompt: string;
  qualityBoost: string;
  codeSnippet: string;
}

const PRESETS: ScenarioPreset[] = [
  {
    id: 'automl-ui',
    name: 'AutoML No-Code Pipeline Interface',
    targetCategory: 'ML & Web Tooling',
    description: 'Generates a clean Python/HTML/CSS dashboard for non-technical users to train classifiers.',
    defaultPrompt: `System: You are an expert ML & Frontend Systems Architect.
Task: Create a lightweight, web-based AutoML interface in Python + HTML/CSS.
Constraints:
- Zero complex jargon: guide non-technical users through 4 steps (Upload, Auto-Clean, Model Fit, Predict).
- Include automated handling of missing data and categorical encoding.
- Provide clear benchmark comparison metrics (Accuracy, F1-Score, ROC-AUC) without overwhelming clutter.
- Maintain a responsive dark-slate design system with emerald accents.`,
    qualityBoost: '+64% clarity',
    codeSnippet: `# Flask / Python Backend Preview
@app.route('/api/automl/fit', methods=['POST'])
def auto_fit():
    data = load_dataset(request.files['file'])
    clean_df = automated_preprocessor(data)
    best_model, scores = evaluate_models(clean_df, target=request.form['target'])
    return jsonify({'model': best_model.name, 'metrics': scores})`,
  },
  {
    id: 'vibe-dashboard',
    name: 'Vibe Coding Component Architecture',
    targetCategory: 'Rapid Prototyping',
    description: 'Generates structured meta-prompts that prevent AI slop and ensure single-turn production readiness.',
    defaultPrompt: `System: You are a principal frontend engineer practicing strict vibe coding discipline.
Task: Build an interactive analytics panel.
Rules:
- Anti-Slop: Zero pill enclosures for static metadata; use clean unboxed text with · dividers.
- Visual contract: 60% dark canvas, 30% structural cards, 10% high-intent teal accent.
- Tabular discipline: font-variant-numeric: tabular-nums on all metrics.
- All buttons must have functioning interactive handlers.`,
    qualityBoost: '+60% structure',
    codeSnippet: `// React + Tailwind Vibe Coding Output
<div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
  <div className="flex items-center gap-2 text-xs text-slate-400">
    <span>Latency 14ms</span>
    <span aria-hidden="true">·</span>
    <span>99.9% Uptime</span>
  </div>
  <h3 className="text-xl font-bold text-white mt-1">Inference Engine</h3>
</div>`,
  },
  {
    id: 'canva-business-model',
    name: 'Business Canva Model Tutorial Generator',
    targetCategory: 'Content & Strategy',
    description: 'Generates structured business canva model breakdowns for startup ideas (YouTube/LinkedIn series).',
    defaultPrompt: `Context: Business Canva Model breakdown for emerging tech creators.
Deliverable:
1. Customer Segments (Non-technical ML adopters, indie makers)
2. Value Proposition (80% time saved via automated preprocessing)
3. Revenue Streams (Open-core prototypes, consulting tutorials)
4. Key Activities (Iterative user prototyping, community YouTube/LinkedIn workshops)`,
    qualityBoost: '+58% retention',
    codeSnippet: `// Business Canva Model Highlights
- Target: 10+ active alpha testers surveyed
- Channels: LinkedIn, YouTube Tech Tutorials
- Core Offering: No-code ML deployment in under 5 minutes`,
  },
];

interface PromptStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptStudioModal: React.FC<PromptStudioModalProps> = ({ isOpen, onClose }) => {
  const [selectedPreset, setSelectedPreset] = useState<ScenarioPreset>(PRESETS[0]);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'prompt' | 'code'>('prompt');

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(
      activeTab === 'prompt' ? selectedPreset.defaultPrompt : selectedPreset.codeSnippet
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0C1220] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="prompt-studio-title"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-teal-400 font-mono tracking-wider uppercase">
              <Code2 className="w-4 h-4" />
              <span>Interactive Prototype · 2025</span>
            </div>
            <h2 id="prompt-studio-title" className="text-2xl font-bold tracking-tight text-white mt-1">
              Prompt Engineering & Vibe Coding Studio
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Tested on 20+ design scenarios with custom Python/HTML/CSS tools, boosting output quality by 60%. Shared across tutorials on LinkedIn and YouTube.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preset Selector */}
        <div className="py-6 space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-teal-400" />
              Tested Scenarios (20+ Scenarios Evaluated)
            </label>
            <span className="text-xs text-teal-400 font-mono">
              Quality Boost: {selectedPreset.qualityBoost}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => setSelectedPreset(preset)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  selectedPreset.id === preset.id
                    ? 'border-teal-500 bg-teal-500/10 text-white'
                    : 'border-slate-800 bg-slate-900/40 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="text-xs text-slate-400 mb-1">{preset.targetCategory}</div>
                <div className="font-semibold text-sm leading-snug">{preset.name}</div>
                <div className="text-[11px] text-teal-400 mt-2 font-mono">{preset.qualityBoost} benchmarked</div>
              </button>
            ))}
          </div>

          {/* Workbench Tabs */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveTab('prompt')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === 'prompt' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Engineered System Prompt
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === 'code' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Generated Code Output
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Content</span>
                </>
              )}
            </button>
          </div>

          {/* Code/Prompt Terminal */}
          <div className="relative rounded-xl bg-[#080D17] border border-slate-800 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-teal-400" />
                <span>{activeTab === 'prompt' ? 'prompt_template_v2.md' : 'output_prototype.py'}</span>
              </div>
              <span className="text-[11px] text-slate-400">Validated 2025</span>
            </div>
            <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[280px]">
              {activeTab === 'prompt' ? selectedPreset.defaultPrompt : selectedPreset.codeSnippet}
            </pre>
          </div>

          {/* Impact Banner */}
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5 text-slate-300">
              <Award className="w-4 h-4 text-teal-400 shrink-0" />
              <span>
                Demonstrated team leadership to collaborate on iterations; shared tutorials on LinkedIn & YouTube.
              </span>
            </div>
            <a
              href="https://linkedin.com/in/syed-mohamed-muffasil-s-u-05243b383"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 inline-flex items-center gap-1 font-medium shrink-0"
            >
              <span>View LinkedIn Tutorials</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>Syed Mohamed Muffasil · Prompt Engineering & Vibe Coding</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
