import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  RotateCcw, 
  MessageSquare, 
  Maximize2, 
  Minimize2, 
  LayoutGrid,
  Clock,
  Zap,
  BookOpen
} from 'lucide-react';

interface Props {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onToggleNotes: () => void;
  isNotesOpen: boolean;
  onToggleOverview: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  presentationMode: 'simple' | 'interactive';
  onToggleMode: () => void;
  onOpenCheatSheet: () => void;
}

export const PresenterControls: React.FC<Props> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onToggleNotes,
  isNotesOpen,
  onToggleOverview,
  isFullscreen,
  onToggleFullscreen,
  presentationMode,
  onToggleMode,
  onOpenCheatSheet
}) => {
  // Timer state for presentation practice
  const [seconds, setSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const resetTimer = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSeconds(0);
  };

  return (
    <div className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-lg no-print max-w-[98vw]">
      {/* Slide Navigation Buttons */}
      <div className="flex items-center gap-0.5 sm:gap-1">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          title="Previous slide (Left Arrow)"
          className="p-1.5 sm:p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Slide Counter */}
        <button
          onClick={onToggleOverview}
          title="Click to view all slide thumbnails (G key)"
          className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl hover:bg-slate-800/80 text-xs font-mono transition-colors flex items-center gap-1"
        >
          <span className="font-bold text-cyan-400">
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <span className="text-slate-500">/</span>
          <span className="text-slate-400">
            {String(totalSlides).padStart(2, '0')}
          </span>
        </button>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          title="Next slide (Right Arrow / Space)"
          className="p-1.5 sm:p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <div className="h-5 w-px bg-slate-800 hidden sm:block" />

      {/* Mode Switcher */}
      <button
        onClick={onToggleMode}
        title={presentationMode === 'simple' ? "Switch to Interactive Lab Mode" : "Switch to Simple Mode"}
        className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
          presentationMode === 'simple'
            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
            : 'bg-indigo-950/40 text-indigo-300 border border-indigo-700/50'
        }`}
      >
        <Zap className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">{presentationMode === 'simple' ? '⚡ सरल Mode' : '🔬 Lab Mode'}</span>
      </button>

      {/* Quick Notes Modal Trigger */}
      <button
        onClick={onOpenCheatSheet}
        title="Open Quick Viva Cheat Sheet"
        className="hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
      >
        <BookOpen className="w-3.5 h-3.5 text-amber-400" />
        <span>Viva Notes</span>
      </button>

      <div className="h-5 w-px bg-slate-800 hidden lg:block" />

      {/* Presentation Stopwatch */}
      <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300">
        <Clock className="w-3.5 h-3.5 text-cyan-400" />
        <span>{formatTime(seconds)}</span>
        <button
          onClick={() => setIsTimerRunning(!isTimerRunning)}
          title={isTimerRunning ? 'Pause timer' : 'Resume timer'}
          className="text-slate-400 hover:text-cyan-400 transition-colors ml-0.5"
        >
          {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </button>
        <button
          onClick={resetTimer}
          title="Reset timer"
          className="text-slate-500 hover:text-slate-300 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
        </button>
      </div>

      <div className="h-5 w-px bg-slate-800" />

      {/* Speaker Notes Toggle */}
      <button
        onClick={onToggleNotes}
        title="Toggle Speaker Notes & Script (N key)"
        className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
          isNotesOpen
            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm'
            : 'text-slate-300 hover:text-white hover:bg-slate-800'
        }`}
      >
        <MessageSquare className="w-4 h-4 text-cyan-400" />
        <span className="hidden sm:inline">Notes</span>
      </button>

      {/* Grid Overview Toggle */}
      <button
        onClick={onToggleOverview}
        title="View All Slides Grid (G key)"
        className="p-1.5 sm:p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
      >
        <LayoutGrid className="w-4 h-4 text-indigo-400" />
      </button>

      {/* Fullscreen Toggle */}
      <button
        onClick={onToggleFullscreen}
        title="Toggle Fullscreen (F key)"
        className="p-1.5 sm:p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
      >
        {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
      </button>
    </div>
  );
};
