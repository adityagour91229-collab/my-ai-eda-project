import React, { useState } from 'react';
import { Slide } from '../../types/presentation';
import { Terminal, Database, Cpu, PieChart, BarChart2, BookOpen, ExternalLink, Code } from 'lucide-react';

interface Props {
  slide: Slide;
}

interface ToolItem {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  version: string;
  role: string;
  whyEssential: string;
  codeSnippet: string;
  highlights: string[];
}

export const ToolsSlide: React.FC<Props> = ({ slide }) => {
  const [activeTool, setActiveTool] = useState<string>('pandas');

  const tools: ToolItem[] = [
    {
      id: 'python',
      name: 'Python',
      category: 'Core Language',
      icon: <Terminal className="w-5 h-5 text-sky-400" />,
      version: 'v3.11+',
      role: 'The primary lingua franca of modern data science, machine learning, and computational statistics.',
      whyEssential: 'Combines dynamic developer ergonomics with high-performance C-extensions (NumPy, Scipy) and extensive ML ecosystems.',
      codeSnippet: "# Interactive exploratory script\ndef audit_dataset(df):\n    print(f'Shape: {df.shape}')\n    print(f'Null Count: {df.isna().sum().sum()}')\n    return df.describe()",
      highlights: ['Dynamic typing', 'Massive package repository (PyPI)', 'C-interoperability', 'Readability']
    },
    {
      id: 'pandas',
      name: 'Pandas',
      category: 'Data Wrangling',
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      version: 'v2.2+',
      role: 'Provides high-level DataFrame abstractions for tabular manipulation, slicing, pivoting, and aggregation.',
      whyEssential: 'Turns complex tabular operations (handling nulls, deduplication, groupby aggregations) into one-line vectorized commands.',
      codeSnippet: "import pandas as pd\ndf = pd.read_csv('records.csv')\n# Filter and group in one chain\nsummary = (df.dropna(subset=['salary'])\n             .groupby('department')['salary']\n             .agg(['mean', 'median', 'count']))",
      highlights: ['Two-dimensional DataFrame', 'Vectorized string operations', 'GroupBy split-apply-combine', 'Time-series tools']
    },
    {
      id: 'numpy',
      name: 'NumPy',
      category: 'Vector Computing',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      version: 'v1.26+',
      role: 'The foundational scientific package for multi-dimensional array math, linear algebra, and fast numeric computations.',
      whyEssential: 'Executes computations 50x–100x faster than native Python lists by storing contiguous homogenous memory blocks and using SIMD.',
      codeSnippet: "import numpy as np\n# Vectorized array transformation & masking\nscores = np.array([88, 92, 79, 95, 65, 91])\nmean_val = np.mean(scores)\nz_scores = (scores - mean_val) / np.std(scores)\noutliers = scores[np.abs(z_scores) > 2.0]",
      highlights: ['N-dimensional ndarray', 'Broadcasting capability', 'BLAS/LAPACK optimized', 'C-memory layout']
    },
    {
      id: 'matplotlib',
      name: 'Matplotlib',
      category: '2D Graphics',
      icon: <BarChart2 className="w-5 h-5 text-amber-400" />,
      version: 'v3.8+',
      role: 'The foundational plotting library that gives fine-grained control over every figure, canvas, axis, and tick mark.',
      whyEssential: 'Serves as the low-level rendering backend for Pandas and Seaborn; allows total customization for publication-grade graphics.',
      codeSnippet: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots(figsize=(8, 4), dpi=150)\nax.plot(x, y, color='#0284c7', lw=2, label='Trend')\nax.set_title('Bivariate Relationship')\nax.grid(True, alpha=0.3)\nplt.tight_layout()\nplt.show()",
      highlights: ['Granular Figure/Axes API', 'Supports PNG, SVG, PDF export', 'LaTeX font rendering', 'Backend agnostic']
    },
    {
      id: 'seaborn',
      name: 'Seaborn',
      category: 'Statistical Viz',
      icon: <PieChart className="w-5 h-5 text-indigo-400" />,
      version: 'v0.13+',
      role: 'High-level statistical visualization library built on top of Matplotlib with modern aesthetics and automated aggregation.',
      whyEssential: 'Produces multi-variable plots (pairplots, heatmaps, violin plots) with automatic color palettes and statistical confidence intervals.',
      codeSnippet: "import seaborn as sns\n# Generate correlation matrix heatmap\nsns.set_theme(style='darkgrid')\nsns.heatmap(\n    df.corr(numeric_only=True),\n    annot=True,\n    cmap='vlag',\n    fmt='.2f'\n)",
      highlights: ['Automated confidence intervals', 'Built-in color palettes', 'PairGrid & FacetGrid', 'Categorical plot engines']
    },
    {
      id: 'jupyter',
      name: 'Jupyter / Colab',
      category: 'Interactive IDE',
      icon: <BookOpen className="w-5 h-5 text-rose-400" />,
      version: 'Lab 4+',
      role: 'Web-based interactive computing platform uniting live executable code, rich markdown prose, and graphical visual outputs.',
      whyEssential: 'Enables reproducible scientific research where code explanations, data transformations, and interactive charts live in one document.',
      codeSnippet: "# In Jupyter cell:\n%matplotlib inline\ndisplay(df.head())\n# Immediate visual execution & inspection",
      highlights: ['Cell-by-cell REPL execution', 'Markdown & LaTeX support', 'Zero-setup Cloud Colab option', 'Rich HTML outputs']
    }
  ];

  const current = tools.find(t => t.id === activeTool) || tools[0];

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 space-y-4">
      {/* Slide Header */}
      <div>
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          Slide 10 · {slide.category}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
          Modern EDA Technology Stack
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-1 max-w-3xl">
          The industry-standard open-source ecosystem powering data wrangling, scientific computing, and statistical visualization.
        </p>
      </div>

      {/* 6 Tools Selector Bar */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
        {tools.map((t) => {
          const isActive = t.id === activeTool;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTool(t.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? 'bg-slate-800/90 border-cyan-400 ring-1 ring-cyan-400/40 shadow-lg'
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="p-1 rounded bg-slate-950">{t.icon}</span>
                <span className="text-[10px] font-mono text-slate-500">{t.category}</span>
              </div>
              <div className="text-xs font-bold text-white">{t.name}</div>
              <div className="text-[10px] text-slate-400 mt-0.5 truncate">{t.role}</div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Tool Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch p-5 rounded-xl bg-slate-900 border border-slate-800 flex-1">
        {/* Left Column: Purpose & Key Highlights */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                {current.icon}
              </span>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>{current.name}</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700 font-normal">
                    {current.category}
                  </span>
                </h3>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4">
              {current.role}
            </p>

            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 mb-4">
              <span className="text-[11px] font-mono uppercase text-cyan-400 block mb-1">
                Why It Is Essential for Engineers:
              </span>
              <p className="text-xs text-slate-300">
                {current.whyEssential}
              </p>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-2">
                Core Architectural Strengths:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
            Automated alternatives: <span className="text-cyan-300">ydata-profiling</span> & <span className="text-cyan-300">Sweetviz</span> generate automated EDA reports.
          </div>
        </div>

        {/* Right Column: Code Snippet */}
        <div className="lg:col-span-6 flex flex-col justify-between p-4 rounded-lg bg-slate-950 border border-slate-800">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2 mb-2">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-cyan-400" />
                <span>Production Usage Example</span>
              </span>
              <span className="text-cyan-400 font-mono text-[11px]">Python Script</span>
            </div>

            <pre className="font-mono text-xs text-cyan-300 overflow-x-auto p-3 rounded bg-slate-900 border border-slate-800/80 leading-relaxed">
              <code>{current.codeSnippet}</code>
            </pre>
          </div>

          <div className="mt-3 p-2.5 rounded bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            <strong className="text-white">B.Tech Project Stack:</strong> We combine Pandas for transformations, NumPy for vectorization, and Seaborn for rich statistical visuals inside a Jupyter Notebook.
          </div>
        </div>
      </div>

      {/* Slide Bottom Bullet Summary */}
      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800">
        <span>"NumPy accelerates numeric arrays at C-speed; Pandas organizes tabular schemas; Seaborn visualizes distributions."</span>
        <span className="font-mono text-cyan-400">Section 4 · Slide 10/13</span>
      </div>
    </div>
  );
};
