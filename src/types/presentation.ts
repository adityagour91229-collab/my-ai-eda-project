export interface SimpleNotes {
  plainSummary: string;
  hinglishExplanation: string;
  whatToSayToExaminer: string;
  keyBullets: string[];
  oneLineCode?: string;
}

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  durationMinutes: number;
  bulletPoints: string[];
  simpleNotes: SimpleNotes;
  speakerNotes: {
    script: string;
    keyTakeaway: string;
    vivaTip: string;
    commonQuestion: string;
    answer: string;
  };
  keywords: string[];
}

export interface VivaQuestion {
  id: number;
  question: string;
  category: 'Fundamentals' | 'Cleaning' | 'Statistics' | 'Visualization' | 'Algorithms';
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
  answer: string;
  keyPoints: string[];
  formula?: string;
  exampleSnippet?: string;
}

export type ThemeMode = 'dark-navy' | 'deep-slate' | 'cyber-emerald' | 'academic-light';
