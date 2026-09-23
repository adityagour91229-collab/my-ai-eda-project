import React from 'react';
import { slidesData } from '../data/slidesData';
import { BookOpen, User, Calendar, Award, Printer, ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const PrintHandoutView: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 print:p-0 print:bg-white print:text-slate-900">
      {/* Top Floating Controls - hidden during print */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between no-print">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800 transition-colors text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Presentation</span>
        </button>

        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/25 text-xs"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Handout Header Document */}
      <div className="max-w-4xl mx-auto mb-10 pb-6 border-b border-slate-800 print:border-slate-300">
        <div className="flex items-center justify-between text-xs font-mono text-cyan-400 print:text-slate-600 mb-2">
          <span>B.TECH COMPUTER SCIENCE & ENGINEERING</span>
          <span>ACADEMIC PROJECT PRESENTATION</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold font-display text-white print:text-slate-900 mb-2">
          Exploratory Data Analysis (EDA) — Presentation Handout
        </h1>
        <p className="text-sm text-slate-400 print:text-slate-600 mb-4">
          Complete 13-Slide Academic Summary, Technical Methodologies & Viva Voce Reference Notes.
        </p>
        <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 print:text-slate-700 bg-slate-900/60 print:bg-slate-100 p-3 rounded-xl border border-slate-800 print:border-slate-300">
          <div><strong className="text-white print:text-black">Presented By:</strong> Aditya Kumar</div>
          <div>·</div>
          <div><strong className="text-white print:text-black">Department:</strong> Computer Science & Engineering</div>
          <div>·</div>
          <div><strong className="text-white print:text-black">Total Slides:</strong> 13</div>
        </div>
      </div>

      {/* Sequential List of All 13 Slides */}
      <div className="max-w-4xl mx-auto space-y-8">
        {slidesData.map((s) => (
          <div
            key={s.id}
            className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 print-card print:border print:border-slate-300 print:p-6 print:mb-6 print-page-break"
          >
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400 print:text-slate-600 border-b border-slate-800 print:border-slate-300 pb-2 mb-3">
              <span className="font-bold">SLIDE {String(s.id).padStart(2, '0')} · {s.category.toUpperCase()}</span>
              <span>Estimated Duration: {s.durationMinutes} min</span>
            </div>

            <h2 className="text-xl font-bold text-white print:text-slate-900 mb-1 font-display">
              {s.title}
            </h2>
            <div className="text-xs text-slate-400 print:text-slate-600 mb-4 font-mono">
              {s.subtitle}
            </div>

            {/* Bullet Points */}
            <div className="space-y-2 mb-4">
              <h3 className="text-xs font-mono font-bold uppercase text-slate-300 print:text-slate-800">
                Key Slide Content & Methodologies:
              </h3>
              <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-300 print:text-slate-700 leading-relaxed">
                {s.bulletPoints.map((bp, i) => (
                  <li key={i}>{bp}</li>
                ))}
              </ul>
            </div>

            {/* Speaker Notes Summary */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 print:border-slate-300 bg-slate-950/50 print:bg-slate-50 p-3.5 rounded-xl">
              <div className="text-[11px] font-mono font-bold text-cyan-300 print:text-slate-800 uppercase mb-1">
                Aditya's Presentation Script & Examiner Tip:
              </div>
              <p className="text-xs text-slate-300 print:text-slate-700 italic mb-2">
                "{s.speakerNotes.script}"
              </p>
              <div className="text-[11px] text-emerald-400 print:text-slate-800 font-medium">
                <strong>Viva Tip:</strong> {s.speakerNotes.vivaTip}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Handout Footer */}
      <div className="max-w-4xl mx-auto mt-12 pt-6 border-t border-slate-800 print:border-slate-300 text-center text-xs text-slate-500">
        <div>Exploratory Data Analysis · B.Tech CSE Project Defense · Aditya Kumar</div>
      </div>
    </div>
  );
};
