import React, { useState } from 'react';
import { Slide } from '../../types/presentation';
import { Layers, TrendingUp, AlertTriangle, Crosshair, Network, Code, CheckCircle } from 'lucide-react';

interface Props {
  slide: Slide;
}

interface ObjectiveItem {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  pythonCode: string;
  whyItMatters: string;
  badge: string;
}

export const ObjectivesSlide: React.FC<Props> = ({ slide }) => {
  const [selectedObjective, setSelectedObjective] = useState<number>(1);

  const objectives: ObjectiveItem[] = [
    {
      id: 1,
      title: "Understand the Dataset",
      desc: "Analyze row/column cardinality, feature types, memory usage, and column distributions.",
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      pythonCode: "df.info()\nprint(df.shape)\ndf.head(5)",
      whyItMatters: "Prevents type confusion (e.g. numerical data stored as string objects) and gauges computational scale.",
      badge: "Structure & Schema"
    },
    {
      id: 2,
      title: "Find Patterns & Trends",
      desc: "Uncover seasonal peaks, recurring cyclic patterns, group clustering, and distribution shapes.",
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      pythonCode: "df.groupby('month')['sales'].mean()\nsns.lineplot(data=df, x='date', y='value')",
      whyItMatters: "Directs feature engineering, such as creating lag features or seasonal indicators.",
      badge: "Temporal & Grouping"
    },
    {
      id: 3,
      title: "Detect Missing Values",
      desc: "Audit null counts, percentages, and diagnose whether missingness is MCAR, MAR, or MNAR.",
      icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
      pythonCode: "missing = df.isnull().sum()\npercent = (missing / len(df)) * 100",
      whyItMatters: "Machine learning algorithms (Scikit-Learn estimators) fail or crash on unhandled NaN values.",
      badge: "Data Completeness"
    },
    {
      id: 4,
      title: "Identify Outliers",
      desc: "Detect extreme observations, measurement anomalies, or faulty sensor records using IQR and Z-scores.",
      icon: <Crosshair className="w-5 h-5 text-rose-400" />,
      pythonCode: "Q1 = df['val'].quantile(0.25)\nQ3 = df['val'].quantile(0.75)\nIQR = Q3 - Q1\noutliers = df[(df['val'] < Q1 - 1.5*IQR) | (df['val'] > Q3 + 1.5*IQR)]",
      whyItMatters: "Outliers pull the mean, inflate variance, and distort linear regression gradients.",
      badge: "Anomaly Detection"
    },
    {
      id: 5,
      title: "Understand Variable Relationships",
      desc: "Map pairwise correlations, conditional dependencies, and identify harmful multicollinearity.",
      icon: <Network className="w-5 h-5 text-indigo-400" />,
      pythonCode: "corr = df.corr(numeric_only=True)\nsns.heatmap(corr, annot=True, cmap='coolwarm')",
      whyItMatters: "Highlights redundant duplicate features to eliminate before feeding into predictive models.",
      badge: "Multivariate Insights"
    }
  ];

  const current = objectives.find(o => o.id === selectedObjective) || objectives[0];

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 space-y-5">
      {/* Slide Header */}
      <div>
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          Slide 03 · {slide.category}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
          Key Objectives of Exploratory Data Analysis
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-1 max-w-3xl">
          The 5 foundational goals every data engineer and computer scientist pursues during initial data investigation.
        </p>
      </div>

      {/* Main Grid: Left interactive selector list, Right live inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1">
        {/* Left Column: 5 Objective cards */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5">
          {objectives.map((obj) => {
            const isSelected = obj.id === selectedObjective;
            return (
              <button
                key={obj.id}
                onClick={() => setSelectedObjective(obj.id)}
                className={`w-full text-left p-3.5 rounded-xl transition-all border flex items-center justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/50 shadow-md ring-1 ring-cyan-500/30'
                    : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-900/90 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-500/20' : 'bg-slate-800'}`}>
                    {obj.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">
                        {obj.id}. {obj.title}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                        {obj.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                      {obj.desc}
                    </p>
                  </div>
                </div>

                <div className="text-right pl-3 shrink-0">
                  <span className={`text-xs font-mono font-medium ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}>
                    {isSelected ? 'Active Focus' : 'Inspect →'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Code & Architectural Significance Inspector */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-xl bg-slate-900 border border-slate-800">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <div className="flex items-center gap-2 text-cyan-400">
                <Code className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                  Technical Implementation
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Python Pandas / Seaborn
              </span>
            </div>

            <div className="mb-4">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-mono mb-1">
                Objective #{current.id}
              </div>
              <h4 className="text-lg font-bold text-white">
                {current.title}
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {current.desc}
              </p>
            </div>

            <div className="mb-4">
              <div className="text-[11px] font-mono text-slate-400 mb-1.5 flex items-center justify-between">
                <span>Code snippet:</span>
                <span className="text-cyan-400">Executable Python</span>
              </div>
              <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto">
                <code>{current.pythonCode}</code>
              </pre>
            </div>

            <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-800/40">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 mb-1">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Why It Matters in Software & ML:</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {current.whyItMatters}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Click any objective on the left to inspect its implementation.</span>
          </div>
        </div>
      </div>

      {/* Slide Bottom Bullet Summary */}
      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
        <span>"Skipping EDA is like building a skyscraper on uninspected quicksand."</span>
        <span className="font-mono text-cyan-400">Section 1 · Slide 3/13</span>
      </div>
    </div>
  );
};
