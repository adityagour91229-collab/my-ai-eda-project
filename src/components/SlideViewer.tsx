import React from 'react';
import { Slide } from '../types/presentation';
import { TitleSlide } from './slides/TitleSlide';
import { IntroSlide } from './slides/IntroSlide';
import { ObjectivesSlide } from './slides/ObjectivesSlide';
import { ProcessSlide } from './slides/ProcessSlide';
import { DataCleaningSlide } from './slides/DataCleaningSlide';
import { StatisticsSlide } from './slides/StatisticsSlide';
import { VisualizationSlide } from './slides/VisualizationSlide';
import { CorrelationSlide } from './slides/CorrelationSlide';
import { OutlierSlide } from './slides/OutlierSlide';
import { ToolsSlide } from './slides/ToolsSlide';
import { ApplicationsSlide } from './slides/ApplicationsSlide';
import { ConclusionSlide } from './slides/ConclusionSlide';
import { ThankYouSlide } from './slides/ThankYouSlide';
import { SimpleSlideContent } from './slides/SimpleSlideContent';

interface Props {
  slide: Slide;
  presentationMode: 'simple' | 'interactive';
  onNextSlide: () => void;
  onOpenVivaModal: () => void;
  onRestart: () => void;
  onToggleMode?: () => void;
}

export const SlideViewer: React.FC<Props> = ({
  slide,
  presentationMode,
  onNextSlide,
  onOpenVivaModal,
  onRestart,
  onToggleMode
}) => {
  // If in Simple Mode, render the clean, simple, easy-to-read slide layout
  if (presentationMode === 'simple') {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="w-full max-w-5xl aspect-[16/10] sm:aspect-[16/9] min-h-[560px] rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col ring-1 ring-slate-800/80">
          <SimpleSlideContent
            slide={slide}
            onNextSlide={onNextSlide}
            onOpenVivaModal={onOpenVivaModal}
            onRestart={onRestart}
          />
        </div>
      </div>
    );
  }

  // Interactive Laboratory Mode
  const renderInteractiveSlideContent = () => {
    switch (slide.id) {
      case 1:
        return <TitleSlide slide={slide} onStartPresentation={onNextSlide} />;
      case 2:
        return <IntroSlide slide={slide} />;
      case 3:
        return <ObjectivesSlide slide={slide} />;
      case 4:
        return <ProcessSlide slide={slide} />;
      case 5:
        return <DataCleaningSlide slide={slide} />;
      case 6:
        return <StatisticsSlide slide={slide} />;
      case 7:
        return <VisualizationSlide slide={slide} />;
      case 8:
        return <CorrelationSlide slide={slide} />;
      case 9:
        return <OutlierSlide slide={slide} />;
      case 10:
        return <ToolsSlide slide={slide} />;
      case 11:
        return <ApplicationsSlide slide={slide} />;
      case 12:
        return <ConclusionSlide slide={slide} />;
      case 13:
        return <ThankYouSlide slide={slide} onOpenVivaModal={onOpenVivaModal} onRestart={onRestart} />;
      default:
        return <TitleSlide slide={slide} />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-2 sm:p-4 md:p-6 lg:p-8">
      {/* 16:9 Presentation Stage Card with subtle glow */}
      <div className="w-full max-w-6xl aspect-[16/10] sm:aspect-[16/9] min-h-[580px] rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col ring-1 ring-slate-800">
        {renderInteractiveSlideContent()}
      </div>
    </div>
  );
};
