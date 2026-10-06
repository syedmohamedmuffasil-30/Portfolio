import React, { useState } from 'react';
import { Play, CheckCircle2, Cpu, BarChart3, Rocket, RefreshCw, X, ArrowRight, ShieldCheck, Sparkles, Layers } from 'lucide-react';

interface DatasetOption {
  id: string;
  name: string;
  task: 'Classification' | 'Regression';
  rows: string;
  features: string[];
  target: string;
  sampleInsight: string;
}

const DATASETS: DatasetOption[] = [
  {
    id: 'churn',
    name: 'Customer Churn Predictor',
    task: 'Classification',
    rows: '1,250 records',
    features: ['AccountAge', 'MonthlySpend', 'SupportTickets', 'ContractType'],
    target: 'Will_Churn (0/1)',
    sampleInsight: 'Detect customer churn risk before renewal cycle ends',
  },
  {
    id: 'housing',
    name: 'Property Valuation Engine',
    task: 'Regression',
    rows: '840 properties',
    features: ['SquareFeet', 'Bedrooms', 'LocationScore', 'TransitDistance'],
    target: 'Market_Price ($)',
    sampleInsight: 'Automated valuation model for regional real estate listings',
  },
  {
    id: 'student',
    name: 'Student Exam Performance',
    task: 'Classification',
    rows: '960 students',
    features: ['StudyHours', 'AttendanceRate', 'QuizAverage', 'ProjectScores'],
    target: 'Grade_Tier (High/Pass)',
    sampleInsight: 'Early intervention predictor for academic mentoring',
  },
];

interface AutoMLPlaygroundProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AutoMLPlayground: React.FC<AutoMLPlaygroundProps> = ({ isOpen, onClose }) => {
  const [selectedDataset, setSelectedDataset] = useState<DatasetOption>(DATASETS[0]);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [testInput, setTestInput] = useState<string>('SupportTickets=4, MonthlySpend=$120');
  const [predictionResult, setPredictionResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRunPipeline = () => {
    setIsProcessing(true);
    setCurrentStep(2);
    setTimeout(() => {
      setCurrentStep(3);
      setTimeout(() => {
        setCurrentStep(4);
        setIsProcessing(false);
      }, 900);
    }, 900);
  };

  const handleTestInference = () => {
    if (selectedDataset.id === 'churn') {
      setPredictionResult('High Risk (86.4% Probability of Churn) → Recommendation: Issue loyalty retention incentive.');
    } else if (selectedDataset.id === 'housing') {
      setPredictionResult('Estimated Market Valuation: $428,500 (±2.8% Confidence Interval).');
    } else {
      setPredictionResult('Predicted Outcome: High Academic Distinction (91.2% Likelihood).');
    }
  };

  const resetPlayground = () => {
    setCurrentStep(1);
    setIsProcessing(false);
    setPredictionResult(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0C1220] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="automl-title"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-teal-400 font-mono tracking-wider uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Interactive Prototype Simulation · 2025</span>
            </div>
            <h2 id="automl-title" className="text-2xl font-bold tracking-tight text-white mt-1">
              Web-based AutoML Platform
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Experience the no-code automated ML pipeline built by Syed Mohamed Muffasil. Automates data preprocessing, model selection, hyperparameter tuning, and deployment—reducing workflow time by 80%.
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

        {/* Pipeline Stepper Progress */}
        <div className="py-6 border-b border-slate-800/80">
          <div className="grid grid-cols-4 gap-2">
            {[
              { step: 1, label: '1. Dataset', desc: 'Selection & Intake' },
              { step: 2, label: '2. Auto Clean', desc: 'Imputation & Scaling' },
              { step: 3, label: '3. Model Tuning', desc: 'RandomForest & XGBoost' },
              { step: 4, label: '4. Deploy & Test', desc: 'REST Endpoint Ready' },
            ].map((s) => (
              <div
                key={s.step}
                className={`p-3 rounded-xl border text-left transition-all ${
                  currentStep === s.step
                    ? 'bg-teal-950/40 border-teal-500/50 text-teal-300'
                    : currentStep > s.step
                    ? 'bg-slate-900/60 border-slate-700/60 text-slate-300'
                    : 'bg-slate-950/40 border-slate-900 text-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold">{s.label}</span>
                  {currentStep > s.step && <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 truncate">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Workspace */}
        <div className="py-6 space-y-6">
          {/* Step 1: Dataset Selection */}
          <div>
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
              Select Sample Dataset
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {DATASETS.map((dataset) => (
                <button
                  key={dataset.id}
                  onClick={() => {
                    setSelectedDataset(dataset);
                    resetPlayground();
                  }}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    selectedDataset.id === dataset.id
                      ? 'border-teal-500 bg-teal-500/10 text-white shadow-sm'
                      : 'border-slate-800 bg-slate-900/40 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="font-semibold text-sm">{dataset.name}</div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                    <span>{dataset.rows}</span>
                    <span>·</span>
                    <span className="text-teal-400">{dataset.task}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-2 line-clamp-2">
                    Target: <code className="text-slate-300 font-mono">{dataset.target}</code>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Pipeline Actions & Status */}
          <div className="bg-[#090E17] border border-slate-800 rounded-xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-teal-400" />
                  AutoML Engine: Python/Scikit-Learn Pipeline
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Automated preprocessing · 5-fold cross validation · Bayesian hyperparameter optimization
                </p>
              </div>

              <div className="flex items-center gap-3">
                {currentStep === 1 ? (
                  <button
                    onClick={handleRunPipeline}
                    disabled={isProcessing}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run AutoML Pipeline</span>
                  </button>
                ) : (
                  <button
                    onClick={resetPlayground}
                    className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reset Simulation</span>
                  </button>
                )}
              </div>
            </div>

            {/* Active Execution Output */}
            {isProcessing && (
              <div className="mt-4 p-4 rounded-lg bg-teal-950/20 border border-teal-800/40 text-xs font-mono text-teal-300 flex items-center gap-3">
                <RefreshCw className="w-4 h-4 animate-spin text-teal-400 shrink-0" />
                <span>
                  {currentStep === 2
                    ? '[Step 2/4] Imputing missing values with median, applying StandardScaler and One-Hot Encoding...'
                    : '[Step 3/4] Benchmarking Random Forest vs XGBoost with 5-fold Cross-Validation...'}
                </span>
              </div>
            )}

            {/* Step 4 Results and Metrics */}
            {currentStep >= 4 && (
              <div className="mt-5 space-y-4 pt-4 border-t border-slate-800 animate-in fade-in duration-300">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Winning Model</div>
                    <div className="text-sm font-semibold text-white mt-1">Random Forest Classifier</div>
                    <div className="text-[10px] text-teal-400 mt-0.5">Automated Selection</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Validation Accuracy</div>
                    <div className="text-sm font-semibold text-teal-300 mt-1 tabular-nums">94.2%</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">5-Fold CV Mean</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">F1-Score / ROC-AUC</div>
                    <div className="text-sm font-semibold text-white mt-1 tabular-nums">0.938 / 0.97</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Optimal Threshold</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Time Saved</div>
                    <div className="text-sm font-semibold text-teal-300 mt-1 tabular-nums">80%</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">vs Manual Scripting</div>
                  </div>
                </div>

                {/* Live Test Inference Box */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <Rocket className="w-3.5 h-3.5 text-teal-400" />
                      Live Deployment Testing Sandbox
                    </span>
                    <span className="text-[11px] text-teal-400 font-mono">STATUS: 200 OK · Serving</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-3">
                    Endpoint generated: <code className="text-teal-300 font-mono">POST /api/v1/predict/model_automl_2025</code>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={testInput}
                      onChange={(e) => setTestInput(e.target.value)}
                      placeholder="Input parameters (e.g. SupportTickets=3, MonthlySpend=$90)"
                      className="flex-1 px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-teal-500 font-mono"
                    />
                    <button
                      onClick={handleTestInference}
                      className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap"
                    >
                      Run Inference
                    </button>
                  </div>

                  {predictionResult && (
                    <div className="mt-3 p-3 rounded-lg bg-teal-950/30 border border-teal-500/30 text-xs text-teal-200 font-mono">
                      {predictionResult}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Notes from Resume */}
        <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Built using Python, HTML, CSS · Validated by 10+ testers in 2025</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
