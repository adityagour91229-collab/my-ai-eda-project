import React from 'react';
import { Slide } from '../../types/presentation';
import { CheckCircle2, MessageSquare, BookOpen, User, Award, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

interface Props {
  slide: Slide;
  onOpenVivaModal?: () => void;
  onRestart?: () => void;
}

export const ThankYouSlide: React.FC<Props> = ({ slide, onOpenVivaModal, onRestart }) => {
  return (
    <div className="h-full flex flex-col justify-between p-8 md:p-12 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Academic Subheader */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span>Project Presentation Completion</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300">Viva Voce Ready</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-300">Presentation Concluded</span>
        </div>
      </div>

      {/* Central Hero Block */}
      <div className="my-auto py-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-xs text-emerald-400 mb-6 font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>B.Tech Project Presentation Completed</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 font-display">
          Thank You!
        </h1>

        <p className="text-lg md:text-xl text-slate-300 font-sans max-w-2xl leading-relaxed mb-8">
          Thank you to the respected examiners, guides, and faculty members. 
          I welcome your valuable questions, feedback, and discussion for the Viva Voce.
        </p>

        {/* Presenter Information Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl p-5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl mb-8">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <User className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">Presenter</div>
              <div className="text-xl font-bold text-white tracking-wide">Aditya Kumar</div>
              <div className="text-xs text-cyan-400 font-medium">B.Tech Computer Science & Engineering</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-t sm:border-t-0 sm:border-l border-slate-800 pt-3 sm:pt-0 sm:pl-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">Department</div>
              <div className="text-sm font-semibold text-slate-200">Computer Science & Engg</div>
              <div className="text-xs text-slate-400">Academic Year 2025–2026</div>
            </div>
          </div>
        </div>

        {/* Action Buttons: Open Viva Voce Defense Guide */}
        <div className="flex flex-wrap items-center gap-3">
          {onOpenVivaModal && (
            <button
              onClick={onOpenVivaModal}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/25 text-sm"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Open Viva Voce Defense Guide (10 Questions & Answers)</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          )}

          {onRestart && (
            <button
              onClick={onRestart}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors border border-slate-700 text-sm"
            >
              Restart Presentation
            </button>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <span className="font-mono text-cyan-400">Exploratory Data Analysis</span>
          <span>·</span>
          <span>Open for Viva Voce Q&A</span>
        </div>
        <div>
          <span>B.Tech Project Presentation · Aditya Kumar</span>
        </div>
      </div>
    </div>
  );
};
