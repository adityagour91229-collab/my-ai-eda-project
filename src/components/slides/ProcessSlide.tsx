import React, { useState } from 'react';
import { Slide } from '../../types/presentation';
import { 
  DownloadCloud, 
  Sparkles, 
  Search, 
  BarChart3, 
  BrainCircuit, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  RotateCcw
} from 'lucide-react';

interface Props {
  slide: Slide;
}

interface StepInfo {
  step: number;
  name: string;
  shortDesc: string;
  icon: React.ReactNode;
  inputs: string;
  actions: string[];
  outputs: string;
  codeSnippet: string;
}

export const ProcessSlide: React.FC<Props> = ({ slide }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps: StepInfo[] = [
    {
      step: 1,
      name: "Data Collection",
      shortDesc: "Aggregating raw telemetry, APIs, SQL databases & web crawlers.",
      icon: <DownloadCloud className="w-5 h-5 text-sky-400" />,
      inputs: "REST APIs, PostgreSQL tables, AWS S3 buckets, CSV/JSON logs.",
      actions: [
        "Query relational databases using SQL connectors",
        "Ingest streaming feeds or static batch exports",
        "Verify ingestion checksums and encoding formats"
      ],
      outputs: "Raw tabular dataset loaded in memory (pd.DataFrame).",
      codeSnippet: "import pandas as pd\ndf = pd.read_csv('dataset_v1.csv')"
    },
    {
      step: 2,
      name: "Data Cleaning",
      shortDesc: "Purging nulls, duplicates, inconsistent encodings & corrupt values.",
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      inputs: "Raw unvalidated DataFrame.",
      actions: [
        "Detect and impute missing cells (Mean/Median/KNN)",
        "Drop exact and semantic duplicate rows",
        "Cast mismatched data types (string to float, epoch to datetime)"
      ],
      outputs: "Cleaned, standardized dataset ready for mathematical operations.",
      codeSnippet: "df.drop_duplicates(inplace=True)\ndf['age'].fillna(df['age'].median(), inplace=True)"
    },
    {
      step: 3,
      name: "Data Exploration",
      shortDesc: "Initial programmatic inspection of dimensions and statistical distribution.",
      icon: <Search className="w-5 h-5 text-cyan-400" />,
      inputs: "Cleaned DataFrame.",
      actions: [
        "Inspect shape, column indices, and memory usage",
        "Generate 5-number descriptive statistical summaries",
        "Compute skewness, kurtosis, and cardinality of categorical features"
      ],
      outputs: "Summary statistics table and preliminary distribution profiles.",
      codeSnippet: "print(df.shape)\nprint(df.describe(include='all'))\nprint(df.nunique())"
    },
    {
      step: 4,
      name: "Data Visualization",
      shortDesc: "Graphical rendering of univariate, bivariate, and multivariate relationships.",
      icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
      inputs: "Summary statistics and feature arrays.",
      actions: [
        "Plot Histograms & KDE density curves for continuous variables",
        "Render Box Plots to identify distributional spread and outliers",
        "Construct Scatter Plots and Pairplots to assess cross-feature trends"
      ],
      outputs: "Visual charts, correlation heatmaps, and distribution plots.",
      codeSnippet: "import seaborn as sns\nimport matplotlib.pyplot as plt\nsns.histplot(df['income'], kde=True)\nplt.show()"
    },
    {
      step: 5,
      name: "Pattern Detection",
      shortDesc: "Isolating clusters, correlations, anomalies, and structural dependencies.",
      icon: <BrainCircuit className="w-5 h-5 text-indigo-400" />,
      inputs: "Visual plots and statistical correlation matrices.",
      actions: [
        "Identify high correlation (|r| > 0.8) for multicollinearity warning",
        "Isolate multivariate anomalies using clustering or IQR fences",
        "Discover sub-population clusters and behavioral segments"
      ],
      outputs: "Annotated pattern catalogue and feature interaction matrix.",
      codeSnippet: "corr_matrix = df.corr(numeric_only=True)\noutliers = df[df['z_score'].abs() > 3]"
    },
    {
      step: 6,
      name: "Actionable Insights",
      shortDesc: "Synthesizing findings into feature engineering and modeling strategies.",
      icon: <CheckCircle2 className="w-5 h-5 text-teal-400" />,
      inputs: "Validated patterns, anomalies, and feature interactions.",
      actions: [
        "Formulate data-driven hypotheses for machine learning algorithms",
        "Engineer new derived features (e.g. log-transforms, ratios)",
        "Document data dictionary and quality report for engineering stakeholders"
      ],
      outputs: "Curated training dataset, feature store, and executive report.",
      codeSnippet: "# Final transformed feature set ready for Scikit-Learn\nX_train, y_train = df.drop('target', axis=1), df['target']"
    }
  ];

  const current = steps.find(s => s.step === activeStep) || steps[0];

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 space-y-4">
      {/* Slide Header */}
      <div>
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          Slide 04 · {slide.category}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
          The End-to-End EDA Process Flow
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-1 max-w-3xl">
          A systematic 6-phase engineering lifecycle: from raw heterogeneous data ingestion to feature-ready intelligence.
        </p>
      </div>

      {/* Interactive Process Flow Diagram */}
      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Sequential Pipeline Flow (Click node to inspect)
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveStep(prev => prev > 1 ? prev - 1 : 6)}
              className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
            >
              ← Prev
            </button>
            <span className="text-xs font-mono text-cyan-400">
              Stage {activeStep} of 6
            </span>
            <button
              onClick={() => setActiveStep(prev => prev < 6 ? prev + 1 : 1)}
              className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Nodes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 pt-1">
          {steps.map((st, idx) => {
            const isActive = st.step === activeStep;
            return (
              <button
                key={st.step}
                onClick={() => setActiveStep(st.step)}
                className={`p-3 rounded-lg border text-left transition-all relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-800/90 border-cyan-400 ring-1 ring-cyan-400/50 shadow-lg'
                    : 'bg-slate-950/60 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-cyan-950 text-cyan-300 border border-cyan-800' : 'bg-slate-800 text-slate-500'
                  }`}>
                    0{st.step}
                  </span>
                  <div>{st.icon}</div>
                </div>

                <div className="text-xs font-bold text-white leading-snug">
                  {st.name}
                </div>

                {/* Arrow connector indicator */}
                {idx < 5 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail Inspector for the Active Step */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch p-5 rounded-xl bg-slate-900 border border-slate-800 flex-1">
        {/* Left Column: Actions and inputs/outputs */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-cyan-400 font-semibold">
                Phase 0{current.step}:
              </span>
              <h3 className="text-lg font-bold text-white">
                {current.name}
              </h3>
            </div>
            <p className="text-xs md:text-sm text-slate-300 mb-3">
              {current.shortDesc}
            </p>

            <div className="space-y-1.5 mb-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Core Engineering Actions:
              </div>
              {current.actions.map((act, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="text-cyan-400 font-mono mt-0.5">•</span>
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-xs">
            <div>
              <span className="text-[10px] font-mono text-slate-500 block uppercase">Input Artifact</span>
              <span className="text-slate-300 text-[11px]">{current.inputs}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 block uppercase">Output Artifact</span>
              <span className="text-emerald-400 text-[11px] font-medium">{current.outputs}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Code Snippet & Feedback Loop Note */}
        <div className="md:col-span-5 flex flex-col justify-between p-3.5 rounded-lg bg-slate-950 border border-slate-800/80">
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800 pb-2 mb-2">
              <span>Standard Python Implementation</span>
              <span className="text-cyan-400">Pandas / Seaborn</span>
            </div>
            <pre className="font-mono text-xs text-cyan-300 overflow-x-auto p-2 rounded bg-slate-900/60 border border-slate-800/50">
              <code>{current.codeSnippet}</code>
            </pre>
          </div>

          <div className="mt-3 p-2.5 rounded bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              <strong className="text-slate-200">Iterative Loop:</strong> If visualization uncovers corrupt data or unexpected nulls, return to Step 2!
            </span>
          </div>
        </div>
      </div>

      {/* Slide Bottom Bullet Summary */}
      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800">
        <span>Workflow: Collection → Cleaning → Exploration → Visualization → Pattern Detection → Actionable Insights</span>
        <span className="font-mono text-cyan-400">Section 2 · Slide 4/13</span>
      </div>
    </div>
  );
};
