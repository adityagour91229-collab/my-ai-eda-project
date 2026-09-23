import React, { useState } from 'react';
import { Slide } from '../../types/presentation';
import { 
  Sparkles, 
  Terminal, 
  MessageSquare, 
  CheckCircle2, 
  Copy, 
  Check, 
  Volume2, 
  HelpCircle, 
  BookOpen, 
  Lightbulb, 
  Code2, 
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Layers,
  Database,
  Search,
  BarChart3
} from 'lucide-react';

interface Props {
  slide: Slide;
  onNextSlide?: () => void;
  onOpenVivaModal?: () => void;
  onRestart?: () => void;
}

export const SimpleSlideContent: React.FC<Props> = ({
  slide,
  onNextSlide,
  onOpenVivaModal,
  onRestart
}) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [showHinglish, setShowHinglish] = useState(true);

  const handleCopyCode = () => {
    if (slide.simpleNotes.oneLineCode) {
      navigator.clipboard.writeText(slide.simpleNotes.oneLineCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  // Render a specific visual mini-widget depending on slide ID to make it instantly visual
  const renderVisualSummary = () => {
    switch (slide.id) {
      case 1:
        return (
          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/50 flex flex-col justify-center items-center text-center">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono mb-2">
              Aditya Kumar · B.Tech CSE
            </span>
            <h4 className="text-white font-semibold text-sm mb-1">Major Project Defense</h4>
            <p className="text-slate-400 text-xs">Exploratory Data Analysis (EDA) in Machine Learning</p>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-800/40">
              <span className="font-semibold text-indigo-300 block mb-1">🕵️ EDA (Detective)</span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Finds hidden clues, anomalies, and patterns without rigid assumptions.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40">
              <span className="font-semibold text-emerald-300 block mb-1">⚖️ Modeling (Judge)</span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Evaluates clean data to make formal predictions and classifications.
              </p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex items-center justify-between gap-1 p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-center">
            <div className="flex-1 py-1.5 px-1 rounded bg-slate-800/80">
              <span className="font-bold text-cyan-400 block">1. Shape</span>
              <span className="text-slate-400 text-[10px]">df.shape</span>
            </div>
            <div className="text-slate-600">→</div>
            <div className="flex-1 py-1.5 px-1 rounded bg-slate-800/80">
              <span className="font-bold text-amber-400 block">2. Nulls</span>
              <span className="text-slate-400 text-[10px]">isnull()</span>
            </div>
            <div className="text-slate-600">→</div>
            <div className="flex-1 py-1.5 px-1 rounded bg-slate-800/80">
              <span className="font-bold text-rose-400 block">3. Outliers</span>
              <span className="text-slate-400 text-[10px]">1.5×IQR</span>
            </div>
            <div className="text-slate-600">→</div>
            <div className="flex-1 py-1.5 px-1 rounded bg-slate-800/80">
              <span className="font-bold text-emerald-400 block">4. Trends</span>
              <span className="text-slate-400 text-[10px]">corr()</span>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1 text-center text-[10px]">
            {['1. Ingest', '2. Clean', '3. Explore', '4. Plot', '5. Detect', '6. ML Ready'].map((step, i) => (
              <div key={i} className="p-2 rounded bg-slate-800/80 border border-slate-700/60 font-mono text-cyan-300">
                {step}
              </div>
            ))}
          </div>
        );
      case 5:
        return (
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 grid grid-cols-2 gap-2 text-xs">
            <div className="border-r border-slate-800 pr-2">
              <span className="text-rose-400 font-semibold block mb-0.5">❌ Dirty Data</span>
              <span className="text-slate-400 text-[11px] block">Missing cells, duplicate rows, mixed case ('delhi' vs 'Delhi')</span>
            </div>
            <div>
              <span className="text-emerald-400 font-semibold block mb-0.5">✅ Clean Data</span>
              <span className="text-slate-400 text-[11px] block">Imputed with Median, deduplicated, standardized types</span>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
            <div className="flex justify-between items-center text-slate-300 mb-1">
              <span>Salary: ₹20k, ₹22k, ₹25k, ₹28k, ₹10 Crore</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-1.5 rounded bg-rose-950/40 border border-rose-800/40 text-rose-300">
                <strong>Mean: ₹2 Crore</strong> (Distorted by outlier!)
              </div>
              <div className="p-1.5 rounded bg-emerald-950/40 border border-emerald-800/40 text-emerald-300">
                <strong>Median: ₹25,000</strong> (Accurate real middle!)
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="grid grid-cols-4 gap-1.5 text-center text-xs">
            <div className="p-2 rounded bg-slate-800/90 border border-slate-700 text-cyan-300">
              <span className="font-semibold block">📊 Bar Chart</span>
              <span className="text-slate-400 text-[10px]">Categories</span>
            </div>
            <div className="p-2 rounded bg-slate-800/90 border border-slate-700 text-indigo-300">
              <span className="font-semibold block">📈 Histogram</span>
              <span className="text-slate-400 text-[10px]">Distribution</span>
            </div>
            <div className="p-2 rounded bg-slate-800/90 border border-slate-700 text-amber-300">
              <span className="font-semibold block">📦 Box Plot</span>
              <span className="text-slate-400 text-[10px]">Outliers & IQR</span>
            </div>
            <div className="p-2 rounded bg-slate-800/90 border border-slate-700 text-emerald-300">
              <span className="font-semibold block">✨ Scatter</span>
              <span className="text-slate-400 text-[10px]">X vs Y</span>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
            <div className="flex items-center justify-between text-[11px] font-mono mb-1">
              <span className="text-rose-400">-1.0 (Opposite)</span>
              <span className="text-slate-400">0.0 (No Link)</span>
              <span className="text-emerald-400">+1.0 (Both Rise)</span>
            </div>
            <div className="h-2 rounded-full bg-gradient-to-r from-rose-500 via-slate-600 to-emerald-500" />
            <span className="text-[10px] text-slate-400 block mt-1 text-center">
              ⚠️ Golden Rule: Correlation does NOT imply Causation
            </span>
          </div>
        );
      case 9:
        return (
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
            <div className="flex items-center justify-between text-cyan-300 font-mono text-[11px] mb-1">
              <span>Lower: Q1 - 1.5×IQR</span>
              <span>IQR = Q3 - Q1</span>
              <span>Upper: Q3 + 1.5×IQR</span>
            </div>
            <p className="text-[10px] text-slate-400 text-center">
              Any point outside [Lower, Upper] is flagged as an Outlier!
            </p>
          </div>
        );
      case 10:
        return (
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <span className="px-2 py-1 rounded bg-blue-950/80 text-blue-300 border border-blue-800/50">🐍 Python</span>
            <span className="px-2 py-1 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800/50">🐼 Pandas</span>
            <span className="px-2 py-1 rounded bg-sky-950/80 text-sky-300 border border-sky-800/50">🔢 NumPy</span>
            <span className="px-2 py-1 rounded bg-teal-950/80 text-teal-300 border border-teal-800/50">📊 Matplotlib</span>
            <span className="px-2 py-1 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">🌊 Seaborn</span>
            <span className="px-2 py-1 rounded bg-amber-950/80 text-amber-300 border border-amber-800/50">🪐 Jupyter</span>
          </div>
        );
      case 11:
        return (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center text-xs">
            <div className="p-1.5 rounded bg-slate-800/90 border border-slate-700 text-slate-300">
              🤖 ML Features
            </div>
            <div className="p-1.5 rounded bg-slate-800/90 border border-slate-700 text-slate-300">
              💳 Fraud Alert
            </div>
            <div className="p-1.5 rounded bg-slate-800/90 border border-slate-700 text-slate-300">
              🏥 Patient Vitals
            </div>
            <div className="p-1.5 rounded bg-slate-800/90 border border-slate-700 text-slate-300">
              🛒 Customer Churn
            </div>
          </div>
        );
      case 12:
        return (
          <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-center">
            <span className="text-cyan-300 font-bold text-xs block mb-0.5">Golden Rule of Computer Science</span>
            <p className="text-white text-xs font-semibold">"Better data beats fancier algorithms every single time."</p>
          </div>
        );
      case 13:
        return (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-2">
            <button
              onClick={onOpenVivaModal}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-all"
            >
              <HelpCircle className="w-4 h-4" />
              Open Examiner Viva Guide (10+ Questions)
            </button>
            <button
              onClick={onRestart}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors"
            >
              Restart from Slide 1
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col justify-between p-5 md:p-8 relative overflow-y-auto">
      {/* Slide Top Metadata Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-mono text-xs font-semibold">
            Slide {slide.id} of 13
          </span>
          <span className="text-slate-600">/</span>
          <span className="text-xs font-mono text-slate-400">{slide.category}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowHinglish(!showHinglish)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Toggle Hindi/Hinglish simple explanation"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span>{showHinglish ? 'Hide Simple Hindi' : 'Show Simple Hindi'}</span>
          </button>
        </div>
      </div>

      {/* Main Slide Title & Subtitle */}
      <div className="my-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display mb-1">
          {slide.title}
        </h2>
        <p className="text-xs md:text-sm text-cyan-400/90 font-medium">
          {slide.subtitle}
        </p>
      </div>

      {/* Visual Summary Box */}
      <div className="my-1.5">
        {renderVisualSummary()}
      </div>

      {/* 4 Simple Key Points Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-2">
        {slide.simpleNotes.keyBullets.map((bullet: string, idx: number) => (
          <div
            key={idx}
            className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-slate-700 transition-all shadow-sm"
          >
            <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400 mt-0.5">
              <span className="text-[11px] font-bold">{idx + 1}</span>
            </div>
            <p className="text-xs md:text-sm text-slate-200 leading-snug font-sans">
              {bullet}
            </p>
          </div>
        ))}
      </div>

      {/* Simple Understanding Callout (English + Hindi/Hinglish) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 my-1.5">
        {/* In Simple Words (Hinglish/Hindi) */}
        {showHinglish && (
          <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs">
            <div className="flex items-center gap-1.5 text-amber-300 font-semibold mb-1">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>आसान शब्दों में समझो (Hindi / Hinglish):</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              {slide.simpleNotes.hinglishExplanation}
            </p>
          </div>
        )}

        {/* What to Say to Examiner (वाइवा में क्या बोलना है) */}
        <div className={`p-3 rounded-xl bg-indigo-950/20 border border-indigo-800/40 text-xs ${!showHinglish ? 'md:col-span-2' : ''}`}>
          <div className="flex items-center gap-1.5 text-indigo-300 font-semibold mb-1">
            <Volume2 className="w-3.5 h-3.5" />
            <span>🎯 Examiner को क्या बोलना है (Viva Voce Script):</span>
          </div>
          <p className="text-slate-200 text-xs italic leading-relaxed">
            "{slide.simpleNotes.whatToSayToExaminer}"
          </p>
        </div>
      </div>

      {/* Bottom Footer: Python Code + Slide Advance */}
      <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-800/80 mt-1 flex-wrap">
        {slide.simpleNotes.oneLineCode ? (
          <div className="flex items-center gap-2 max-w-full overflow-hidden">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Terminal className="w-3 h-3 text-cyan-400" /> Python:
            </span>
            <div className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 font-mono text-[11px] text-cyan-300 truncate max-w-md">
              {slide.simpleNotes.oneLineCode.split('\n')[0]}
            </div>
            <button
              onClick={handleCopyCode}
              title="Copy python command"
              className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        ) : (
          <div className="text-[11px] text-slate-500 font-mono">
            Aditya Kumar · B.Tech Project
          </div>
        )}

        {slide.id < 13 && onNextSlide && (
          <button
            onClick={onNextSlide}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all ml-auto"
          >
            <span>Next Slide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
