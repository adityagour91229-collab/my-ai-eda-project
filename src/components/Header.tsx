import React from 'react';
import { Presentation, HelpCircle, Printer, LayoutGrid, Sparkles, BookOpen, Layers, Zap } from 'lucide-react';

interface Props {
  currentSlideIndex: number;
  totalSlides: number;
  isFullscreen: boolean;
  presentationMode: 'simple' | 'interactive';
  onToggleMode: () => void;
  onToggleFullscreen: () => void;
  onOpenVivaModal: () => void;
  onOpenCheatSheet: () => void;
  onToggleOverview: () => void;
  onPrintHandout: () => void;
  onSelectSlide: (index: number) => void;
}

export const Header: React.FC<Props> = ({
  currentSlideIndex,
  totalSlides,
  isFullscreen,
  presentationMode,
  onToggleMode,
  onToggleFullscreen,
  onOpenVivaModal,
  onOpenCheatSheet,
  onToggleOverview,
  onPrintHandout,
  onSelectSlide
}) => {
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md sticky top-0 z-40">
      {/* Zone 1: Title & Presenter */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onSelectSlide(0)}
          className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-white font-display hover:text-cyan-400 transition-colors whitespace-nowrap flex items-center gap-2"
        >
          <span>EDA Presentation</span>
        </button>
        <span className="hidden sm:inline text-slate-600">|</span>
        <span className="hidden sm:inline text-xs font-mono text-slate-400">
          Aditya Kumar · B.Tech CSE
        </span>
      </div>

      {/* Mode Switcher Pill */}
      <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-0.5 shadow-inner">
        <button
          onClick={onToggleMode}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
            presentationMode === 'simple'
              ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
          title="Switch to Simple Clean Mode (सरल प्रस्तुति)"
        >
          <Zap className="w-3.5 h-3.5" />
          <span>सरल Mode</span>
        </button>
        <button
          onClick={onToggleMode}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
            presentationMode === 'interactive'
              ? 'bg-indigo-600 text-white shadow-md font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
          title="Switch to Interactive Lab Mode with live sandboxes"
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Lab Mode</span>
          <span className="sm:hidden">Lab</span>
        </button>
      </div>

      {/* Zone 3: Actions */}
      <div className="flex items-center gap-2">
        {/* Quick Viva Cheat Sheet */}
        <button
          onClick={onOpenCheatSheet}
          title="Open 1-page Viva revision cheat sheet"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/50 border border-cyan-800/80 rounded-lg hover:bg-cyan-900/60 hover:text-white transition-all whitespace-nowrap shadow-sm"
        >
          <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden md:inline">Quick Viva Notes</span>
          <span className="md:hidden">Notes</span>
        </button>

        {/* Viva Voce Defense Guide */}
        <button
          onClick={onOpenVivaModal}
          title="Open comprehensive Viva Voce questions and answers"
          className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap"
        >
          <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
          <span>Viva Q&A</span>
        </button>

        {/* Slide Overview Grid */}
        <button
          onClick={onToggleOverview}
          title="View all 13 slides"
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap"
        >
          <LayoutGrid className="w-3.5 h-3.5 text-slate-400" />
          <span className="hidden sm:inline">Slides (13)</span>
        </button>

        {/* Print Handout */}
        <button
          onClick={onPrintHandout}
          title="Print or export PDF handout"
          className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap"
        >
          <Printer className="w-3.5 h-3.5 text-slate-400" />
          <span>Handout</span>
        </button>
      </div>
    </header>
  );
};
