import React, { useState } from 'react';
import { vivaQuestions } from '../data/vivaData';
import { VivaQuestion } from '../types/presentation';
import { X, HelpCircle, ChevronDown, ChevronUp, Award, BookOpen, CheckCircle, Code, Copy, Check } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const VivaDefenseModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(1);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  if (!isOpen) return null;

  const categories = ['All', 'Fundamentals', 'Cleaning', 'Statistics', 'Visualization', 'Algorithms'];

  const filteredQuestions = selectedCategory === 'All'
    ? vivaQuestions
    : vivaQuestions.filter(q => q.category === selectedCategory);

  const toggleQuestion = (id: number) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  const handleCopy = (q: VivaQuestion) => {
    navigator.clipboard.writeText(`Q: ${q.question}\n\nAnswer: ${q.answer}`);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-4xl max-h-[88vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-white font-display">
                B.Tech CSE Project Viva Voce Defense Guide
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Targeted Examiner Questions & High-Scoring Model Answers for Aditya Kumar
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filter Chips */}
        <div className="px-6 py-2.5 border-b border-slate-800/80 bg-slate-950/40 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-mono text-slate-400 mr-2 uppercase">Domain:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Questions Accordion List */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {filteredQuestions.map((q) => {
            const isOpen = openQuestionId === q.id;
            return (
              <div
                key={q.id}
                className={`rounded-xl border transition-all ${
                  isOpen
                    ? 'bg-slate-950 border-cyan-500/50 shadow-md'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Accordion Question Header */}
                <button
                  onClick={() => toggleQuestion(q.id)}
                  className="w-full p-4 text-left flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold shrink-0 mt-0.5">
                      Q{q.id}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {q.question}
                      </h4>
                      <div className="flex items-center gap-2 mt-1.5 text-[11px] font-mono text-slate-400">
                        <span className="text-cyan-400">{q.category}</span>
                        <span>·</span>
                        <span className={`px-1.5 py-0.2 rounded text-[10px] ${
                          q.difficulty === 'Basic'
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                            : q.difficulty === 'Intermediate'
                            ? 'bg-amber-950 text-amber-300 border border-amber-800'
                            : 'bg-rose-950 text-rose-300 border border-rose-800'
                        }`}>
                          {q.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-slate-400 shrink-0 mt-1">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Answer Body */}
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-800/80 space-y-3 text-xs">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-cyan-400 font-bold mb-1">
                        Comprehensive Examiner Answer:
                      </div>
                      <p className="text-slate-200 leading-relaxed text-xs md:text-sm">
                        {q.answer}
                      </p>
                    </div>

                    {/* Key Takeaways */}
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80">
                      <div className="text-[10px] font-mono uppercase text-emerald-400 font-bold mb-1.5 flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3" />
                        <span>Bullet Points to Mention to Examiner:</span>
                      </div>
                      <ul className="space-y-1">
                        {q.keyPoints.map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-300">
                            <span className="text-cyan-400 font-mono mt-0.5">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Formula if present */}
                    {q.formula && (
                      <div className="p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-800/40 font-mono text-cyan-300 text-xs">
                        <span className="text-[10px] text-slate-400 block uppercase mb-0.5">Mathematical Expression:</span>
                        {q.formula}
                      </div>
                    )}

                    {/* Code Snippet if present */}
                    {q.exampleSnippet && (
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-cyan-300">
                        <div className="text-[10px] text-slate-400 uppercase mb-1 flex items-center gap-1">
                          <Code className="w-3 h-3 text-cyan-400" />
                          <span>Code Demonstration:</span>
                        </div>
                        <pre className="overflow-x-auto text-[11px]">
                          <code>{q.exampleSnippet}</code>
                        </pre>
                      </div>
                    )}

                    {/* Copy Button */}
                    <div className="flex justify-end pt-1">
                      <button
                        onClick={() => handleCopy(q)}
                        className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors text-[11px]"
                      >
                        {copiedId === q.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied to Clipboard</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Answer</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
          <span>Prepared for B.Tech Computer Science & Engineering Project Viva</span>
          <span className="font-mono text-cyan-400">Candidate: Aditya Kumar</span>
        </div>
      </div>
    </div>
  );
};
