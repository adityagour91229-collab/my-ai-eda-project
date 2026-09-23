import React from 'react';
import { Slide } from '../../types/presentation';
import { Award, BookOpen, User, Calendar, Sparkles, Terminal, ArrowRight } from 'lucide-react';

interface Props {
  slide: Slide;
  onStartPresentation?: () => void;
}

export const TitleSlide: React.FC<Props> = ({ slide, onStartPresentation }) => {
  return (
    <div className="h-full flex flex-col justify-between p-8 md:p-12 relative overflow-hidden">
      {/* Subtle decorative background linework */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Top Academic Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span>B.Tech Project Presentation</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300">Department of Computer Science & Engineering</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Calendar className="w-3.5 h-3.5 text-indigo-400" />
            <span>Academic Year 2025–2026</span>
          </span>
          <span className="px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-800/50 text-[11px] font-sans">
            Viva Voce Defense
          </span>
        </div>
      </div>

      {/* Main Hero Title Section */}
      <div className="my-auto py-8 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/60 text-xs text-cyan-400 mb-6 font-mono">
          <Terminal className="w-3.5 h-3.5" />
          <span>CSE-499 · Major Project Defense</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 font-display leading-[1.1]">
          Exploratory <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            Data Analysis
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 font-sans max-w-2xl leading-relaxed mb-8">
          The foundational discipline of discovering data structure, testing hypotheses, 
          identifying anomalies, and engineering robust features for Machine Learning systems.
        </p>

        {/* Presenter Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl p-5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <User className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">Presented By</div>
              <div className="text-lg font-bold text-white tracking-wide">Aditya Kumar</div>
              <div className="text-xs text-cyan-400 font-medium">B.Tech CSE Student</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-t sm:border-t-0 sm:border-l border-slate-800 pt-3 sm:pt-0 sm:pl-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">Specialization</div>
              <div className="text-sm font-semibold text-slate-200">Data Science & ML</div>
              <div className="text-xs text-slate-400">Computer Science & Engg</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info & Quick Nav */}
      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>13 Comprehensive Slides</span>
          </span>
          <span>·</span>
          <span>Interactive Visualizations & Live Stats</span>
          <span>·</span>
          <span>Viva Q&A Guide Included</span>
        </div>

        {onStartPresentation && (
          <button
            onClick={onStartPresentation}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 text-xs"
          >
            <span>Begin Presentation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
