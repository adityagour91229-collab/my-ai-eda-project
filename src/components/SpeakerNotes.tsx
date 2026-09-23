import React from 'react';
import { Slide } from '../types/presentation';
import { X, Mic, Lightbulb, HelpCircle, CheckCircle, Award } from 'lucide-react';

interface Props {
  slide: Slide;
  isOpen: boolean;
  onClose: () => void;
}

export const SpeakerNotes: React.FC<Props> = ({ slide, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <aside aria-label="Speaker notes and viva preparation" className="fixed bottom-20 right-4 md:right-8 z-40 w-full max-w-lg max-h-[75vh] flex flex-col rounded-2xl bg-slate-900/98 border border-slate-700/80 shadow-2xl backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
      {/* Drawer Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/70">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Mic className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Aditya's Speaker Notes & Viva Defense
            </h3>
            <span className="text-[10px] font-mono text-cyan-400">
              Slide {slide.id}: {slide.title}
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Drawer Content */}
      <div className="p-4 space-y-4 overflow-y-auto text-xs">
        {/* Section 1: Exact Speech Script */}
        <div>
          <div className="flex items-center gap-1.5 text-cyan-300 font-bold mb-1.5">
            <Mic className="w-3.5 h-3.5" />
            <span>Spoken Script (30–60 Seconds for Examiner):</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/90 text-slate-200 leading-relaxed font-sans italic">
            "{slide.speakerNotes.script}"
          </div>
        </div>

        {/* Section 2: Key Takeaway */}
        <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-800/40">
          <div className="flex items-center gap-1.5 text-cyan-300 font-bold mb-1">
            <Lightbulb className="w-3.5 h-3.5 text-cyan-400" />
            <span>Key Takeaway:</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {slide.speakerNotes.keyTakeaway}
          </p>
        </div>

        {/* Section 3: Examiner Viva Tip */}
        <div className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-800/40">
          <div className="flex items-center gap-1.5 text-indigo-300 font-bold mb-1">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>Viva Tip for College Panel:</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {slide.speakerNotes.vivaTip}
          </p>
        </div>

        {/* Section 4: Expected Viva Question & Model Answer */}
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Anticipated Examiner Question:</span>
          </div>
          <p className="font-semibold text-white mb-2">
            "{slide.speakerNotes.commonQuestion}"
          </p>
          <div className="pt-2 border-t border-slate-800/80 text-slate-300 leading-relaxed">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block mb-1">
              Recommended Model Answer:
            </span>
            {slide.speakerNotes.answer}
          </div>
        </div>
      </div>
    </aside>
  );
};
