import React, { useState, useEffect, useCallback } from 'react';
import { slidesData } from './data/slidesData';
import { Header } from './components/Header';
import { SlideViewer } from './components/SlideViewer';
import { PresenterControls } from './components/PresenterControls';
import { SpeakerNotes } from './components/SpeakerNotes';
import { SlideOverviewDrawer } from './components/SlideOverviewDrawer';
import { VivaDefenseModal } from './components/VivaDefenseModal';
import { SimpleVivaCheatSheetModal } from './components/SimpleVivaCheatSheetModal';
import { PrintHandoutView } from './components/PrintHandoutView';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [presentationMode, setPresentationMode] = useState<'simple' | 'interactive'>('simple');
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState<boolean>(false);
  const [isVivaModalOpen, setIsVivaModalOpen] = useState<boolean>(false);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState<boolean>(false);
  const [isHandoutView, setIsHandoutView] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const totalSlides = slidesData.length;
  const currentSlide = slidesData[currentSlideIndex];

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex, totalSlides]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  const handleSelectSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
    }
  };

  const handleRestart = () => {
    setCurrentSlideIndex(0);
  };

  const togglePresentationMode = () => {
    setPresentationMode((prev) => (prev === 'simple' ? 'interactive' : 'simple'));
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        setIsFullscreen(!isFullscreen);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {
        setIsFullscreen(false);
      });
    }
  };

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setIsNotesOpen((prev) => !prev);
      } else if (e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        setIsOverviewOpen((prev) => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        togglePresentationMode();
      } else if (e.key === 'Escape') {
        setIsOverviewOpen(false);
        setIsVivaModalOpen(false);
        setIsCheatSheetOpen(false);
        setIsNotesOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // If in printable handout view mode
  if (isHandoutView) {
    return <PrintHandoutView onBack={() => setIsHandoutView(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      {/* 3-Zone Top Navigation Contract */}
      <Header
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        isFullscreen={isFullscreen}
        presentationMode={presentationMode}
        onToggleMode={togglePresentationMode}
        onToggleFullscreen={toggleFullscreen}
        onOpenVivaModal={() => setIsVivaModalOpen(true)}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        onToggleOverview={() => setIsOverviewOpen(true)}
        onPrintHandout={() => setIsHandoutView(true)}
        onSelectSlide={handleSelectSlide}
      />

      {/* Main Slide Presentation Stage */}
      <main className="flex-1 flex items-center justify-center relative w-full overflow-y-auto">
        <SlideViewer
          slide={currentSlide}
          presentationMode={presentationMode}
          onNextSlide={handleNext}
          onOpenVivaModal={() => setIsVivaModalOpen(true)}
          onRestart={handleRestart}
          onToggleMode={togglePresentationMode}
        />
      </main>

      {/* Persistent Presenter Controls Toolbar */}
      <PresenterControls
        currentSlide={currentSlideIndex}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
        isNotesOpen={isNotesOpen}
        onToggleOverview={() => setIsOverviewOpen((prev) => !prev)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        presentationMode={presentationMode}
        onToggleMode={togglePresentationMode}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
      />

      {/* Speaker Notes Drawer */}
      <SpeakerNotes
        slide={currentSlide}
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
      />

      {/* 13-Slide Overview Grid Modal */}
      <SlideOverviewDrawer
        slides={slidesData}
        currentSlide={currentSlideIndex}
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        onSelectSlide={handleSelectSlide}
      />

      {/* Viva Defense Examination Guide Modal */}
      <VivaDefenseModal
        isOpen={isVivaModalOpen}
        onClose={() => setIsVivaModalOpen(false)}
      />

      {/* 1-Page Quick Viva Revision Sheet Modal */}
      <SimpleVivaCheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />
    </div>
  );
}
