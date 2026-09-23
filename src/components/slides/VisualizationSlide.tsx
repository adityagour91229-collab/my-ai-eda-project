import React, { useState } from 'react';
import { Slide } from '../../types/presentation';
import { BarChart3, PieChart, Activity, BoxSelect, ScatterChart as ScatterIcon, Code } from 'lucide-react';

interface Props {
  slide: Slide;
}

type ChartType = 'bar' | 'hist' | 'box' | 'scatter' | 'pie';

export const VisualizationSlide: React.FC<Props> = ({ slide }) => {
  const [activeChart, setActiveChart] = useState<ChartType>('bar');

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 space-y-4">
      {/* Slide Header */}
      <div>
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          Slide 07 · {slide.category}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
          Data Visualization in EDA
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-1 max-w-3xl">
          Visual graphics reveal patterns, distributional skewness, and non-linear associations invisible to summary numbers alone.
        </p>
      </div>

      {/* Chart Selector Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
        <button
          onClick={() => setActiveChart('bar')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeChart === 'bar'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>1. Bar Chart</span>
        </button>

        <button
          onClick={() => setActiveChart('hist')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeChart === 'hist'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>2. Histogram</span>
        </button>

        <button
          onClick={() => setActiveChart('box')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeChart === 'box'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <BoxSelect className="w-4 h-4" />
          <span>3. Box Plot</span>
        </button>

        <button
          onClick={() => setActiveChart('scatter')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeChart === 'scatter'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <ScatterIcon className="w-4 h-4" />
          <span>4. Scatter Plot</span>
        </button>

        <button
          onClick={() => setActiveChart('pie')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeChart === 'pie'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <PieChart className="w-4 h-4" />
          <span>5. Pie Chart</span>
        </button>
      </div>

      {/* Main Chart Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch p-5 rounded-xl bg-slate-900 border border-slate-800 flex-1">
        {/* Visual Render Canvas */}
        <div className="lg:col-span-7 flex flex-col justify-between p-4 rounded-lg bg-slate-950 border border-slate-800">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2 mb-2">
            <span className="text-white font-semibold">Interactive Graphical Render</span>
            <span className="text-cyan-400">Scale: Auto-Normalized</span>
          </div>

          {/* SVG Visualizations based on activeChart */}
          <div className="h-52 flex items-center justify-center w-full">
            {activeChart === 'bar' && (
              <svg viewBox="0 0 360 180" className="w-full h-full max-w-sm">
                {/* Axes */}
                <line x1="40" y1="150" x2="340" y2="150" stroke="#334155" strokeWidth="1.5" />
                <line x1="40" y1="20" x2="40" y2="150" stroke="#334155" strokeWidth="1.5" />
                {/* Bars */}
                <rect x="60" y="50" width="36" height="100" fill="#06b6d4" rx="3" className="hover:opacity-80 transition-opacity" />
                <text x="78" y="165" fill="#94a3b8" fontSize="10" textAnchor="middle">Python</text>
                <text x="78" y="42" fill="#38bdf8" fontSize="10" textAnchor="middle" fontWeight="bold">85%</text>

                <rect x="120" y="70" width="36" height="80" fill="#3b82f6" rx="3" className="hover:opacity-80 transition-opacity" />
                <text x="138" y="165" fill="#94a3b8" fontSize="10" textAnchor="middle">SQL</text>
                <text x="138" y="62" fill="#60a5fa" fontSize="10" textAnchor="middle" fontWeight="bold">68%</text>

                <rect x="180" y="90" width="36" height="60" fill="#6366f1" rx="3" className="hover:opacity-80 transition-opacity" />
                <text x="198" y="165" fill="#94a3b8" fontSize="10" textAnchor="middle">R</text>
                <text x="198" y="82" fill="#818cf8" fontSize="10" textAnchor="middle" fontWeight="bold">52%</text>

                <rect x="240" y="110" width="36" height="40" fill="#8b5cf6" rx="3" className="hover:opacity-80 transition-opacity" />
                <text x="258" y="165" fill="#94a3b8" fontSize="10" textAnchor="middle">Java</text>
                <text x="258" y="102" fill="#a78bfa" fontSize="10" textAnchor="middle" fontWeight="bold">34%</text>

                <rect x="300" y="125" width="30" height="25" fill="#ec4899" rx="3" className="hover:opacity-80 transition-opacity" />
                <text x="315" y="165" fill="#94a3b8" fontSize="10" textAnchor="middle">C++</text>
                <text x="315" y="118" fill="#f472b6" fontSize="10" textAnchor="middle" fontWeight="bold">21%</text>
              </svg>
            )}

            {activeChart === 'hist' && (
              <svg viewBox="0 0 360 180" className="w-full h-full max-w-sm">
                <line x1="40" y1="150" x2="340" y2="150" stroke="#334155" strokeWidth="1.5" />
                <line x1="40" y1="20" x2="40" y2="150" stroke="#334155" strokeWidth="1.5" />
                {/* Bins showing bell curve normal distribution */}
                <rect x="50" y="130" width="32" height="20" fill="#0ea5e9" opacity="0.7" />
                <rect x="85" y="100" width="32" height="50" fill="#0ea5e9" opacity="0.8" />
                <rect x="120" y="60" width="32" height="90" fill="#0ea5e9" opacity="0.9" />
                <rect x="155" y="30" width="32" height="120" fill="#0284c7" opacity="1.0" />
                <rect x="190" y="60" width="32" height="90" fill="#0ea5e9" opacity="0.9" />
                <rect x="225" y="100" width="32" height="50" fill="#0ea5e9" opacity="0.8" />
                <rect x="260" y="130" width="32" height="20" fill="#0ea5e9" opacity="0.7" />
                {/* Fitted Gaussian Curve overlay */}
                <path d="M 50 145 Q 171 15 292 145" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3 3" />
                <text x="171" y="20" fill="#f59e0b" fontSize="10" textAnchor="middle" fontWeight="bold">Gaussian KDE Fit</text>
                <text x="190" y="165" fill="#94a3b8" fontSize="10" textAnchor="middle">Continuous Feature Values (Bins)</text>
              </svg>
            )}

            {activeChart === 'box' && (
              <svg viewBox="0 0 360 180" className="w-full h-full max-w-sm">
                {/* Axes */}
                <line x1="30" y1="90" x2="330" y2="90" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                {/* Whisker Min */}
                <line x1="60" y1="65" x2="60" y2="115" stroke="#38bdf8" strokeWidth="2" />
                <line x1="60" y1="90" x2="110" y2="90" stroke="#38bdf8" strokeWidth="2" />
                {/* Box (Q1 to Q3) */}
                <rect x="110" y="55" width="110" height="70" fill="#0369a1" fillOpacity="0.4" stroke="#0284c7" strokeWidth="2" rx="2" />
                {/* Median Line */}
                <line x1="160" y1="55" x2="160" y2="125" stroke="#f43f5e" strokeWidth="3" />
                {/* Whisker Max */}
                <line x1="220" y1="90" x2="270" y2="90" stroke="#38bdf8" strokeWidth="2" />
                <line x1="270" y1="65" x2="270" y2="115" stroke="#38bdf8" strokeWidth="2" />
                {/* Outlier dots beyond upper fence */}
                <circle cx="305" cy="90" r="4.5" fill="#f43f5e" />
                <circle cx="325" cy="90" r="4.5" fill="#f43f5e" />

                {/* Labels */}
                <text x="60" y="135" fill="#94a3b8" fontSize="9" textAnchor="middle">Min (Q1-1.5*IQR)</text>
                <text x="110" y="48" fill="#38bdf8" fontSize="10" textAnchor="middle" fontWeight="bold">Q1 (25%)</text>
                <text x="160" y="145" fill="#f43f5e" fontSize="10" textAnchor="middle" fontWeight="bold">Median (50%)</text>
                <text x="220" y="48" fill="#38bdf8" fontSize="10" textAnchor="middle" fontWeight="bold">Q3 (75%)</text>
                <text x="270" y="135" fill="#94a3b8" fontSize="9" textAnchor="middle">Max Fence</text>
                <text x="315" y="78" fill="#f43f5e" fontSize="9" textAnchor="middle" fontWeight="bold">Outliers</text>
              </svg>
            )}

            {activeChart === 'scatter' && (
              <svg viewBox="0 0 360 180" className="w-full h-full max-w-sm">
                <line x1="40" y1="150" x2="330" y2="150" stroke="#334155" strokeWidth="1.5" />
                <line x1="40" y1="20" x2="40" y2="150" stroke="#334155" strokeWidth="1.5" />
                {/* Trendline */}
                <line x1="50" y1="140" x2="310" y2="35" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
                {/* Points */}
                {[
                  [60, 135], [75, 128], [95, 120], [110, 115], [130, 95], [145, 105],
                  [165, 85], [180, 75], [200, 80], [215, 65], [240, 55], [260, 48],
                  [280, 42], [300, 36], [290, 52], [225, 70], [170, 98]
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="3.5" fill="#06b6d4" opacity="0.85" />
                ))}
                <text x="185" y="168" fill="#94a3b8" fontSize="10" textAnchor="middle">Independent Feature (X)</text>
                <text x="25" y="85" fill="#94a3b8" fontSize="10" textAnchor="middle" transform="rotate(-90 25 85)">Dependent (Y)</text>
                <text x="240" y="30" fill="#38bdf8" fontSize="10" fontWeight="bold">Positive Trend (r = +0.88)</text>
              </svg>
            )}

            {activeChart === 'pie' && (
              <svg viewBox="0 0 360 180" className="w-full h-full max-w-sm">
                <g transform="translate(140, 90)">
                  {/* Slices */}
                  <path d="M 0 0 L 0 -65 A 65 65 0 0 1 61.8 -19.9 Z" fill="#06b6d4" />
                  <path d="M 0 0 L 61.8 -19.9 A 65 65 0 0 1 38.2 52.6 Z" fill="#3b82f6" />
                  <path d="M 0 0 L 38.2 52.6 A 65 65 0 0 1 -45.9 45.9 Z" fill="#6366f1" />
                  <path d="M 0 0 L -45.9 45.9 A 65 65 0 0 1 -61.8 -20 Z" fill="#f59e0b" />
                  <path d="M 0 0 L -61.8 -20 A 65 65 0 0 1 0 -65 Z" fill="#ec4899" />
                  {/* Donut hole */}
                  <circle cx="0" cy="0" r="30" fill="#020617" />
                  <text x="0" y="4" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">100%</text>
                </g>
                {/* Legend */}
                <g transform="translate(230, 35)" fontSize="10" fill="#cbd5e1">
                  <circle cx="5" cy="10" r="4" fill="#06b6d4" /><text x="15" y="14">EDA (35%)</text>
                  <circle cx="5" cy="30" r="4" fill="#3b82f6" /><text x="15" y="34">Cleaning (25%)</text>
                  <circle cx="5" cy="50" r="4" fill="#6366f1" /><text x="15" y="54">Modeling (20%)</text>
                  <circle cx="5" cy="70" r="4" fill="#f59e0b" /><text x="15" y="74">Evaluation (12%)</text>
                  <circle cx="5" cy="90" r="4" fill="#ec4899" /><text x="15" y="94">Deploy (8%)</text>
                </g>
              </svg>
            )}
          </div>

          <div className="text-[11px] font-mono text-slate-400 text-center pt-1 border-t border-slate-800">
            {activeChart === 'bar' && "Best for: Comparing counts/metrics across discrete categories."}
            {activeChart === 'hist' && "Best for: Continuous distribution shape, skewness, and modality."}
            {activeChart === 'box' && "Best for: 5-number summary and rapid outlier boundary flagging."}
            {activeChart === 'scatter' && "Best for: Bivariate correlation, linear vs non-linear trends, and clusters."}
            {activeChart === 'pie' && "Best for: Proportional composition (recommend ≤ 5 distinct categories)."}
          </div>
        </div>

        {/* Right Info & Python Code Implementation */}
        <div className="lg:col-span-5 flex flex-col justify-between p-4 rounded-lg bg-slate-950 border border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
              <Code className="w-4 h-4" />
              <span className="font-semibold uppercase">Python Seaborn Syntax</span>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 mb-3">
              <div className="text-xs font-bold text-white mb-1">
                {activeChart === 'bar' && "Seaborn barplot()"}
                {activeChart === 'hist' && "Seaborn histplot() with KDE"}
                {activeChart === 'box' && "Seaborn boxplot()"}
                {activeChart === 'scatter' && "Seaborn scatterplot()"}
                {activeChart === 'pie' && "Matplotlib plt.pie()"}
              </div>
              <pre className="font-mono text-xs text-cyan-300 overflow-x-auto">
                <code>
                  {activeChart === 'bar' && "sns.barplot(\n  data=df, x='category', y='sales',\n  palette='Blues_d'\n)"}
                  {activeChart === 'hist' && "sns.histplot(\n  data=df['age'], bins=20,\n  kde=True, color='skyblue'\n)"}
                  {activeChart === 'box' && "sns.boxplot(\n  x='department', y='salary',\n  data=df, fliersize=4\n)"}
                  {activeChart === 'scatter' && "sns.scatterplot(\n  data=df, x='study_hrs', y='score',\n  hue='class'\n)"}
                  {activeChart === 'pie' && "plt.pie(\n  df['market_share'],\n  labels=df['brand'],\n  autopct='%1.1f%%'\n)"}
                </code>
              </pre>
            </div>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="text-[11px] font-mono text-slate-400 uppercase">Interpretation Rule:</div>
              {activeChart === 'bar' && (
                <p>Ensure baseline starts at zero to avoid distorting proportions. Sort bars by descending frequency for immediate readability.</p>
              )}
              {activeChart === 'hist' && (
                <p>Adjust bin widths carefully; too few bins obscure multimodality, while too many bins introduce high sampling noise.</p>
              )}
              {activeChart === 'box' && (
                <p>The box spans $Q1$ to $Q3$ (Interquartile Range). The central bold line is the Median. Points beyond whiskers are candidate outliers.</p>
              )}
              {activeChart === 'scatter' && (
                <p>Inspect slope and dispersion. If scatter creates a curve (e.g. U-shape), Pearson's r is inadequate; a non-linear model is required.</p>
              )}
              {activeChart === 'pie' && (
                <p>Human eyes struggle to judge relative angles. Always print numeric percentages or consider a horizontal bar chart as an alternative.</p>
              )}
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
            Click tabs above to switch chart paradigms.
          </div>
        </div>
      </div>

      {/* Slide Bottom Bullet Summary */}
      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800">
        <span>"Anscombe's Quartet reminder: Always visualize data before trusting numerical summaries alone."</span>
        <span className="font-mono text-cyan-400">Section 3 · Slide 7/13</span>
      </div>
    </div>
  );
};
