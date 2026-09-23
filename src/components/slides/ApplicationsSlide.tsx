import React, { useState } from 'react';
import { Slide } from '../../types/presentation';
import { Briefcase, HeartPulse, DollarSign, Megaphone, Brain, GraduationCap, ChevronRight, CheckCircle2 } from 'lucide-react';

interface Props {
  slide: Slide;
}

interface DomainApp {
  id: string;
  name: string;
  icon: React.ReactNode;
  tagline: string;
  edaProblem: string;
  edaTechniques: string[];
  realWorldImpact: string;
}

export const ApplicationsSlide: React.FC<Props> = ({ slide }) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('ml');

  const domains: DomainApp[] = [
    {
      id: 'ml',
      name: 'Machine Learning',
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      tagline: 'Feature Engineering & Pipeline Safeguards',
      edaProblem: 'Feeding raw, collinear, or heavily skewed features causes gradient explosion, bias, and overfitting.',
      edaTechniques: [
        'Correlation heatmaps to purge multicollinear redundant predictors',
        'Box-Cox & Log transformations to normalize long-tailed features',
        'Target class imbalance inspection (e.g. 99% negative vs 1% positive)'
      ],
      realWorldImpact: 'Improves model accuracy by 15-30% and reduces model training compute hours drastically.'
    },
    {
      id: 'finance',
      name: 'Finance & Banking',
      icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
      tagline: 'Credit Risk & Real-time Fraud Detection',
      edaProblem: 'Credit card fraudulent transactions constitute less than 0.1% of transactions and disguise as normal purchases.',
      edaTechniques: [
        'Outlier detection via Isolation Forests and Mahalanobis distance',
        'Time-series frequency analysis of rapid micro-transactions',
        'Scatter bivariate analysis of transaction amount vs location velocity'
      ],
      realWorldImpact: 'Prevents billions in fraudulent wire transfers while avoiding false positive card declines.'
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Pharma',
      icon: <HeartPulse className="w-5 h-5 text-rose-400" />,
      tagline: 'Patient Vitals & Clinical Trial Efficacy',
      edaProblem: 'Electronic health records contain missing lab panels and sensor telemetry drift from medical monitors.',
      edaTechniques: [
        'Distributional analysis of blood pressure, glucose, and oxygen saturation',
        'Sub-cohort segmentation by age, pre-existing conditions, and dosage',
        'Missingness audit to prevent biased medical conclusions'
      ],
      realWorldImpact: 'Accelerates early sepsis identification in ICUs by up to 6 hours before septic shock.'
    },
    {
      id: 'business',
      name: 'Business Analytics',
      icon: <Briefcase className="w-5 h-5 text-amber-400" />,
      tagline: 'Customer Churn & Revenue Optimization',
      edaProblem: 'Subscription platforms lose recurring revenue without knowing which user behaviors precede cancellations.',
      edaTechniques: [
        'Cohort retention matrices tracking weekly user drop-offs',
        'Pareto 80/20 distribution analysis on customer lifetime value (LTV)',
        'Correlation between customer support ticket volume and churn risk'
      ],
      realWorldImpact: 'Enables targeted retention interventions, lowering customer churn rates by up to 22%.'
    },
    {
      id: 'marketing',
      name: 'Marketing & AdTech',
      icon: <Megaphone className="w-5 h-5 text-indigo-400" />,
      tagline: 'Attribution Modeling & Campaign ROI',
      edaProblem: 'Marketing spend is fragmented across search, social, and display ads without verified touchpoint conversion.',
      edaTechniques: [
        'Bivariate scatter plots of marketing spend vs customer acquisition cost',
        'A/B test response distribution analysis with violin plots',
        'Clustering customer segments using demographic & behavioral features'
      ],
      realWorldImpact: 'Optimizes ad spend allocation and boosts click-through conversion efficiency.'
    },
    {
      id: 'education',
      name: 'Education Technology',
      icon: <GraduationCap className="w-5 h-5 text-teal-400" />,
      tagline: 'Student Success & Early Dropout Warnings',
      edaProblem: 'University learning management systems generate massive clickstream logs with uneven student engagement.',
      edaTechniques: [
        'Tracking quiz completion rates and login frequency trends',
        'Correlating assignment submission lag with exam failure rates',
        'Detecting outlier students who need academic counseling support'
      ],
      realWorldImpact: 'Provides academic advisors with early warnings 4 weeks before semester finals.'
    }
  ];

  const current = domains.find(d => d.id === selectedDomain) || domains[0];

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 space-y-4">
      {/* Slide Header */}
      <div>
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          Slide 11 · {slide.category}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
          Cross-Domain Applications of EDA
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-1 max-w-3xl">
          Exploratory Data Analysis powers critical engineering decisions across high-stakes industries.
        </p>
      </div>

      {/* 6 Domain Selector Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {domains.map((dom) => {
          const isActive = dom.id === selectedDomain;
          return (
            <button
              key={dom.id}
              onClick={() => setSelectedDomain(dom.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? 'bg-slate-800/90 border-cyan-400 ring-1 ring-cyan-400/40 shadow-lg'
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-1.5 rounded-lg bg-slate-950">{dom.icon}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
              </div>
              <div className="text-xs font-bold text-white leading-tight">{dom.name}</div>
            </button>
          );
        })}
      </div>

      {/* Deep Case Study Inspector for Active Domain */}
      <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                {current.icon}
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">{current.name}</h3>
                <span className="text-xs text-cyan-400 font-medium">{current.tagline}</span>
              </div>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              Production Case Study
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* The Analytical Problem */}
            <div className="md:col-span-5 p-3.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-rose-400 block mb-1">
                The Engineering Challenge:
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {current.edaProblem}
              </p>
            </div>

            {/* Techniques Applied */}
            <div className="md:col-span-7 p-3.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-cyan-400 block mb-1.5">
                Applied EDA Methodologies:
              </span>
              <div className="space-y-1.5">
                {current.edaTechniques.map((tech, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Outcome Banner */}
        <div className="mt-3 p-3 rounded-lg bg-emerald-950/20 border border-emerald-800/40 text-xs text-slate-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-mono text-[10px] font-bold">
              VERIFIED IMPACT
            </span>
            <span className="text-slate-200">{current.realWorldImpact}</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
            Click another sector above to explore
          </span>
        </div>
      </div>

      {/* Slide Bottom Bullet Summary */}
      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800">
        <span>"Across domains, EDA bridges raw observation and high-fidelity algorithmic decision making."</span>
        <span className="font-mono text-cyan-400">Section 4 · Slide 11/13</span>
      </div>
    </div>
  );
};
