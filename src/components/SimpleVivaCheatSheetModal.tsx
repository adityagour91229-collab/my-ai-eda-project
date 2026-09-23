import React, { useState } from 'react';
import { slidesData } from '../data/slidesData';
import { vivaQuestions } from '../data/vivaData';
import { X, Copy, Check, Printer, BookOpen, Lightbulb, HelpCircle, Sparkles, CheckCircle2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SimpleVivaCheatSheetModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'slides' | 'viva' | 'formulas'>('viva');

  if (!isOpen) return null;

  const handleCopyAll = () => {
    let text = "=== EXPLORATORY DATA ANALYSIS (EDA) - VIVA REVISION CHEAT SHEET ===\n";
    text += "Presented by: Aditya Kumar (B.Tech Computer Science & Engineering)\n\n";

    text += "--- 1. SLIDE-BY-SLIDE QUICK SUMMARY (13 SLIDES) ---\n";
    slidesData.forEach((s) => {
      text += `Slide ${s.id}: ${s.title}\n`;
      text += `  • Meaning: ${s.simpleNotes.plainSummary}\n`;
      text += `  • Hinglish: ${s.simpleNotes.hinglishExplanation}\n`;
      text += `  • What to say: "${s.simpleNotes.whatToSayToExaminer}"\n\n`;
    });

    text += "\n--- 2. TOP 10 VIVA QUESTIONS & MODEL ANSWERS ---\n";
    vivaQuestions.forEach((q, idx) => {
      text += `Q${idx + 1}: ${q.question}\n`;
      text += `Answer: ${q.answer}\n\n`;
    });

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold">
                Aditya Kumar · CSE
              </span>
              <h3 className="text-lg font-bold text-white font-display">
                📋 Quick Viva Voce Revision Sheet (सरल नोट्स)
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              1-Page Simple Notes & Examiner Questions for B.Tech Project Defense
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              title="Copy complete cheat sheet to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy All'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              title="Print cheat sheet"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-slate-950/40 border-b border-slate-800/80 text-xs">
          <button
            onClick={() => setActiveTab('viva')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${activeTab === 'viva' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'}`}
          >
            🎯 Top 10 Viva Questions (सबसे जरूरी सवाल)
          </button>
          <button
            onClick={() => setActiveTab('slides')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${activeTab === 'slides' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'}`}
          >
            📑 All 13 Slides in 1-Liner (स्लाइड सारांश)
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${activeTab === 'formulas' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'}`}
          >
            📐 Key Formulas & Code (फॉर्मूले और कोड)
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {activeTab === 'viva' && (
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200">
                💡 <strong>Viva Voce Tip for Aditya:</strong> Always keep your answers short, confident, and relate back to real-world data quality!
              </div>

              {vivaQuestions.map((q, idx) => (
                <div key={q.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 shadow-sm space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-white text-sm">
                      Q{idx + 1}. {q.question}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-cyan-300 shrink-0">
                      {q.difficulty}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    <strong className="text-cyan-300">Simple Answer:</strong> {q.answer}
                  </p>

                  {q.formula && (
                    <div className="text-[11px] font-mono text-amber-300 bg-amber-950/20 px-3 py-1.5 rounded border border-amber-800/40">
                      Formula: {q.formula}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'slides' && (
            <div className="space-y-3">
              {slidesData.map((slide) => (
                <div key={slide.id} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold">
                      Slide {slide.id}
                    </span>
                    <h4 className="text-sm font-semibold text-white">
                      {slide.title}
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs mt-2">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800/80">
                      <span className="text-slate-400 block text-[10px] font-mono uppercase">English Summary</span>
                      <p className="text-slate-200 mt-0.5">{slide.simpleNotes.plainSummary}</p>
                    </div>
                    <div className="p-2 rounded bg-amber-950/20 border border-amber-800/30">
                      <span className="text-amber-400 block text-[10px] font-mono uppercase">आसान भाषा में (Hindi)</span>
                      <p className="text-slate-200 mt-0.5">{slide.simpleNotes.hinglishExplanation}</p>
                    </div>
                  </div>

                  <div className="mt-2 text-xs bg-indigo-950/20 border border-indigo-800/30 p-2 rounded text-indigo-200">
                    <strong>🎯 Examiner को क्या बोलना है:</strong> "{slide.simpleNotes.whatToSayToExaminer}"
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'formulas' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="text-cyan-400 font-bold text-sm">1. Tukey's 1.5 × IQR Outlier Formula</h4>
                <div className="p-3 rounded bg-slate-900 font-mono text-xs text-amber-300 space-y-1">
                  <div>IQR = Q3 - Q1 (Interquartile Range)</div>
                  <div>Lower Fence = Q1 - (1.5 × IQR)</div>
                  <div>Upper Fence = Q3 + (1.5 × IQR)</div>
                </div>
                <p className="text-xs text-slate-300">
                  Any data point smaller than Lower Fence or larger than Upper Fence is an outlier!
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="text-cyan-400 font-bold text-sm">2. Z-Score Outlier Formula</h4>
                <div className="p-3 rounded bg-slate-900 font-mono text-xs text-amber-300 space-y-1">
                  <div>Z = (X - μ) / σ</div>
                  <div>|Z| &gt; 3  → Flagged as Outlier</div>
                </div>
                <p className="text-xs text-slate-300">
                  Measures how many standard deviations away a data point is from the mean.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="text-cyan-400 font-bold text-sm">3. Pearson's Correlation (r)</h4>
                <div className="p-3 rounded bg-slate-900 font-mono text-xs text-amber-300 space-y-1">
                  <div>r ∈ [-1.0, +1.0]</div>
                  <div>+1.0 = Perfect Positive Correlation</div>
                  <div>-1.0 = Perfect Negative Correlation</div>
                  <div>0.0 = No Linear Correlation</div>
                </div>
                <p className="text-xs text-slate-300">
                  Remember: Correlation does NOT imply Causation!
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="text-cyan-400 font-bold text-sm">4. Essential 1-Line Python Commands</h4>
                <div className="p-3 rounded bg-slate-900 font-mono text-xs text-emerald-300 space-y-1">
                  <div>df.shape            # (rows, cols)</div>
                  <div>df.isnull().sum()   # count nulls</div>
                  <div>df.describe()       # 5-number stats</div>
                  <div>df.drop_duplicates()# remove dupes</div>
                  <div>df.corr()           # correlation matrix</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
          <span>Aditya Kumar · B.Tech CSE Project Presentation</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-colors"
          >
            Got it, Let's Present!
          </button>
        </div>
      </div>
    </div>
  );
};
