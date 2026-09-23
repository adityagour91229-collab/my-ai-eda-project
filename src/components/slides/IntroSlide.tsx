import React, { useState } from 'react';
import { Slide } from '../../types/presentation';
import { Database, Search, HelpCircle, Compass, CheckCircle2, Lightbulb } from 'lucide-react';

interface Props {
  slide: Slide;
}

export const IntroSlide: React.FC<Props> = ({ slide }) => {
  const [activeTab, setActiveTab] = useState<'eda' | 'cda'>('eda');

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 space-y-6">
      {/* Slide Header */}
      <div>
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          Slide 02 · {slide.category}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
          Introduction to Exploratory Data Analysis
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-1 max-w-3xl">
          Understanding the fundamentals of Data Analysis and the exploratory philosophy of John Tukey.
        </p>
      </div>

      {/* Main 3-Column Concept Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Data Analysis */}
        <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-3">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">What is Data Analysis?</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              The systematic science of inspecting, cleansing, transforming, and modeling raw datasets to uncover 
              meaningful information, support decision-making, and derive business or engineering solutions.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
            Raw Data → Information → Knowledge
          </div>
        </div>

        {/* Card 2: Exploratory Data Analysis */}
        <div className="p-5 rounded-xl bg-slate-900/90 border border-cyan-500/30 ring-1 ring-cyan-500/20 shadow-lg flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-3">
              <Search className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-bold text-white">What is EDA?</h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                Pioneered 1977
              </span>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Pioneered by American statistician <span className="text-cyan-300 font-medium">John W. Tukey</span>. 
              An analytical approach focusing on summarizing main characteristics through visual plots and descriptive metrics 
              before fitting formal predictive models.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-cyan-300 flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>"Look at data like a detective examining clues."</span>
          </div>
        </div>

        {/* Card 3: Purpose of EDA */}
        <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Primary Purpose</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              To uncover hidden structures, check assumptions, spot anomalies and measurement outliers, 
              detect missingness mechanisms, and formulate data-grounded hypotheses for algorithms.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
            Assumptions Checked · Noise Filtered
          </div>
        </div>
      </div>

      {/* Interactive Comparison: Exploratory (EDA) vs Confirmatory (CDA) */}
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Critical Viva Comparison:
            </span>
            <span className="text-xs text-slate-400">Select paradigm to see examiner distinction</span>
          </div>

          <div className="flex items-center p-0.5 rounded-lg bg-slate-800 border border-slate-700">
            <button
              onClick={() => setActiveTab('eda')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'eda'
                  ? 'bg-cyan-500 text-slate-950 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Exploratory (EDA)
            </button>
            <button
              onClick={() => setActiveTab('cda')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'cda'
                  ? 'bg-indigo-500 text-white font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Confirmatory (CDA)
            </button>
          </div>
        </div>

        {activeTab === 'eda' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300">
            <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60">
              <span className="font-semibold text-cyan-300 block mb-0.5">Analogy</span>
              <span>The Detective: Seeks clues, explores unexpected directions, open to surprises.</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60">
              <span className="font-semibold text-cyan-300 block mb-0.5">Primary Tool</span>
              <span>Visual graphs, scatter plots, box plots, histograms, summary statistics.</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60">
              <span className="font-semibold text-cyan-300 block mb-0.5">Goal</span>
              <span>Generates new hypotheses and establishes data hygiene for downstream modeling.</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300">
            <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60">
              <span className="font-semibold text-indigo-300 block mb-0.5">Analogy</span>
              <span>The Judge & Jury: Evaluates formal evidence against a specific charge.</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60">
              <span className="font-semibold text-indigo-300 block mb-0.5">Primary Tool</span>
              <span>Hypothesis tests (t-test, ANOVA, Chi-Square), p-values, confidence intervals.</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60">
              <span className="font-semibold text-indigo-300 block mb-0.5">Goal</span>
              <span>Confirms or refutes a pre-existing null hypothesis with mathematical significance.</span>
            </div>
          </div>
        )}
      </div>

      {/* Slide Bottom Bullet Summary */}
      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
        <span>Tukey's Maxim: "Far better an approximate answer to the right question, than an exact answer to the wrong question."</span>
        <span className="font-mono text-cyan-400">Section 1 · Slide 2/13</span>
      </div>
    </div>
  );
};
