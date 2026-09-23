import React from 'react';
import { Slide } from '../types/presentation';
import { X, CheckCircle, Clock } from 'lucide-react';

interface Props {
  slides: Slide[];
  currentSlide: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (index: number) => void;
}

export const SlideOverviewDrawer: React.FC<Props> = ({
  slides,
  currentSlide,
  isOpen,
  onClose,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-5xl max-h-[85vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div>
            <h3 className="text-base font-bold text-white font-display">
              Presentation Slide Deck (13 Slides)
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Exploratory Data Analysis · Presented by Aditya Kumar · B.Tech CSE
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slides Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {slides.map((s, idx) => {
            const isCurrent = idx === currentSlide;
            return (
              <button
                key={s.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between group ${
                  isCurrent
                    ? 'bg-slate-800 border-cyan-400 ring-2 ring-cyan-400/40 shadow-lg'
                    : 'bg-slate-950/80 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                    <span className={`px-1.5 py-0.5 rounded font-bold ${
                      isCurrent ? 'bg-cyan-950 text-cyan-300 border border-cyan-800' : 'bg-slate-800 text-slate-400'
                    }`}>
                      Slide {String(s.id).padStart(2, '0')}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{s.durationMinutes}m</span>
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-1">
                    {s.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {s.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>{s.category}</span>
                  {isCurrent && (
                    <span className="text-cyan-400 font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Current
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <span>Click any slide thumbnail to jump directly to it. Press Escape to close.</span>
          <span className="font-mono text-cyan-400">Total Duration ~20 mins</span>
        </div>
      </div>
    </div>
  );
};
