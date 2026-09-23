import React from 'react';
import { Slide } from '../../types/presentation';
import { CheckCircle2, ShieldCheck, Eye, Sparkles, Award, ArrowUpRight } from 'lucide-react';

interface Props {
  slide: Slide;
}

export const ConclusionSlide: React.FC<Props> = ({ slide }) => {
  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 space-y-4">
      {/* Slide Header */}
      <div>
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          Slide 12 · {slide.category}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
          Conclusion & Key Takeaways
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-1 max-w-3xl">
          Synthesizing the core engineering values and mathematical rigor established through Exploratory Data Analysis.
        </p>
      </div>

      {/* 4 Core Pillars of the Conclusion */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 items-stretch">
        {/* Pillar 1 */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-2.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm md:text-base font-bold text-white mb-1.5">
              1. Understand Data Before Modeling
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              EDA is the indispensable foundation before training any machine learning or statistical model. 
              Understanding dimensionality, distributions, and missingness safeguards the model against 
              premature overfitting and computational failure.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] font-mono text-cyan-300">
            Rule: Never train a model on uninspected data.
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm md:text-base font-bold text-white mb-1.5">
              2. Identifies Patterns, Errors & Relationships
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Systematic EDA surfaces hidden data leakage, sensor noise, duplicates, and multicollinearity. 
              It clarifies whether relationships are linear or non-linear, guiding feature engineering 
              with mathematical precision.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] font-mono text-emerald-300">
            Outcome: Clean, non-redundant feature matrices.
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-2.5">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-sm md:text-base font-bold text-white mb-1.5">
              3. Visualization Makes Data Intuitive
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Graphical encoding translates high-dimensional tabular data into human-interpretable visual signals. 
              Plots like histograms, box plots, and scatter charts expose anomalies and cluster patterns that 
              summary metrics alone obscure.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] font-mono text-indigo-300">
            Cognitive Insight: Anscombe's lesson proven in practice.
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-2.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-sm md:text-base font-bold text-white mb-1.5">
              4. Improves Data-Driven Decision Quality
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Engineering decisions founded on audited evidence prevent multi-million-dollar production bugs. 
              EDA ensures that algorithms ingest verified signals rather than sensor noise or demographic sampling bias.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] font-mono text-amber-300">
            Standard: Reliable, reproducible software systems.
          </div>
        </div>
      </div>

      {/* The Core Golden Maxim Callout */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              The Golden Principle of Computer Science & ML
            </div>
            <div className="text-sm text-cyan-200 font-medium">
              "Garbage In, Garbage Out — EDA is the foundational discipline that guarantees quality in."
            </div>
          </div>
        </div>

        <div className="text-xs font-mono text-slate-400">
          Presented by: Aditya Kumar · B.Tech CSE
        </div>
      </div>

      {/* Slide Bottom Bullet Summary */}
      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800">
        <span>"EDA completes the scientific method by ensuring hypotheses originate from observable reality."</span>
        <span className="font-mono text-cyan-400">Section 5 · Slide 12/13</span>
      </div>
    </div>
  );
};
