import React, { useState } from 'react';
import { Slide } from '../../types/presentation';
import { AlertOctagon, HelpCircle, CheckCircle, ShieldAlert, Cpu } from 'lucide-react';

interface Props {
  slide: Slide;
}

export const OutlierSlide: React.FC<Props> = ({ slide }) => {
  const [multiplier, setMultiplier] = useState<1.5 | 3.0>(1.5);
  const [activeTab, setActiveTab] = useState<'iqr' | 'zscore'>('iqr');

  // Box plot dimensions
  // Q1 = 30, Q3 = 60, IQR = 30
  // When 1.5x: Lower fence = 30 - 45 = -15 (clamped to 5), Upper fence = 60 + 45 = 105
  // Outliers: 115, 135

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 space-y-4">
      {/* Slide Header */}
      <div>
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          Slide 09 · {slide.category}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
          Outlier Detection & Evaluation
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-1 max-w-3xl">
          Identifying observations that deviate markedly from the general sample pattern using Tukey's Fences and Z-Scores.
        </p>
      </div>

      {/* 2 Top Core Cards: What are outliers & Why are they important? */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2 mb-1 text-rose-400">
            <AlertOctagon className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">What Are Outliers?</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Data points that lie an abnormal distance from other values in a random sample. 
            Causes include measurement instrument error, data entry typos, transmission packet noise, 
            or genuine rare real-world phenomena (e.g. credit card fraud, disease outbreaks).
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2 mb-1 text-amber-400">
            <ShieldAlert className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Why Are They Important?</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Outliers artificially pull sample means, inflate variance, violate normal distribution assumptions, 
            and destabilize linear models. However, in anomaly detection tasks, the outlier is the 
            exact high-value signal engineers seek to classify.
          </p>
        </div>
      </div>

      {/* Interactive Outlier Detection Showcase with Box Plot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch p-5 rounded-xl bg-slate-900 border border-slate-800 flex-1">
        {/* Left: Annotated Interactive Box Plot */}
        <div className="lg:col-span-7 flex flex-col justify-between p-4 rounded-lg bg-slate-950 border border-slate-800">
          <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2 mb-2">
            <span className="text-white font-semibold">Tukey Box-and-Whisker Plot Example</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-slate-400">Threshold:</span>
              <button
                onClick={() => setMultiplier(1.5)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                  multiplier === 1.5 ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                }`}
              >
                1.5 × IQR (Mild)
              </button>
              <button
                onClick={() => setMultiplier(3.0)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                  multiplier === 3.0 ? 'bg-indigo-500 text-white font-bold' : 'bg-slate-800 text-slate-300'
                }`}
              >
                3.0 × IQR (Extreme)
              </button>
            </div>
          </div>

          {/* SVG Box Plot with Explicit Annotations */}
          <div className="h-48 flex items-center justify-center">
            <svg viewBox="0 0 380 170" className="w-full h-full max-w-md">
              {/* Baseline axis */}
              <line x1="30" y1="90" x2="350" y2="90" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />

              {/* Lower Whisker & Fence */}
              <line x1="60" y1="65" x2="60" y2="115" stroke="#38bdf8" strokeWidth="2" />
              <line x1="60" y1="90" x2="120" y2="90" stroke="#38bdf8" strokeWidth="2" />

              {/* IQR Box (Q1 = 120, Q3 = 240, Median = 175) */}
              <rect x="120" y="50" width="120" height="80" fill="#0369a1" fillOpacity="0.3" stroke="#0284c7" strokeWidth="2" rx="3" />
              
              {/* Median Line */}
              <line x1="175" y1="50" x2="175" y2="130" stroke="#38bdf8" strokeWidth="3" />

              {/* Upper Whisker & Fence */}
              <line x1="240" y1="90" x2="300" y2="90" stroke="#38bdf8" strokeWidth="2" />
              <line x1="300" y1="65" x2="300" y2="115" stroke="#38bdf8" strokeWidth="2" />

              {/* Outlier Dots */}
              <circle cx="330" cy="90" r="5" fill="#f43f5e" className="animate-pulse" />
              <circle cx="355" cy="90" r="5" fill="#f43f5e" className="animate-pulse" />

              {/* Labels */}
              <text x="60" y="135" fill="#94a3b8" fontSize="9" textAnchor="middle">Lower Fence</text>
              <text x="60" y="148" fill="#64748b" fontSize="8" textAnchor="middle">Q1 - {multiplier}×IQR</text>

              <text x="120" y="42" fill="#38bdf8" fontSize="10" textAnchor="middle" fontWeight="bold">Q1 (25%)</text>
              <text x="175" y="145" fill="#38bdf8" fontSize="10" textAnchor="middle" fontWeight="bold">Median (50%)</text>
              <text x="240" y="42" fill="#38bdf8" fontSize="10" textAnchor="middle" fontWeight="bold">Q3 (75%)</text>

              <text x="300" y="135" fill="#94a3b8" fontSize="9" textAnchor="middle">Upper Fence</text>
              <text x="300" y="148" fill="#64748b" fontSize="8" textAnchor="middle">Q3 + {multiplier}×IQR</text>

              <text x="342" y="75" fill="#f43f5e" fontSize="10" textAnchor="middle" fontWeight="bold">Outliers (2)</text>
              <path d="M 342 80 L 342 85" stroke="#f43f5e" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
            <span>
              <strong className="text-cyan-400">IQR Formula:</strong> IQR = Q3 - Q1 | Whiskers extend to ±{multiplier} × IQR.
            </span>
            <span className="font-mono text-emerald-400">Tukey Fences Standard</span>
          </div>
        </div>

        {/* Right: Methods & Outlier Action Strategies */}
        <div className="lg:col-span-5 flex flex-col justify-between p-4 rounded-lg bg-slate-950 border border-slate-800">
          <div>
            <div className="flex items-center gap-1 p-0.5 rounded-lg bg-slate-900 border border-slate-800 mb-3">
              <button
                onClick={() => setActiveTab('iqr')}
                className={`flex-1 py-1 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === 'iqr' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                1.5 × IQR Rule
              </button>
              <button
                onClick={() => setActiveTab('zscore')}
                className={`flex-1 py-1 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === 'zscore' ? 'bg-indigo-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Z-Score Method
              </button>
            </div>

            {activeTab === 'iqr' ? (
              <div className="space-y-2 mb-3 text-xs text-slate-300">
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span className="font-bold text-cyan-300 block mb-1">Non-Parametric & Robust:</span>
                  <span>Does not assume normal distribution. Works on skewed datasets (salaries, durations).</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-[11px] text-cyan-300">
                  lower_fence = Q1 - 1.5 * IQR<br />
                  upper_fence = Q3 + 1.5 * IQR
                </div>
              </div>
            ) : (
              <div className="space-y-2 mb-3 text-xs text-slate-300">
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span className="font-bold text-indigo-300 block mb-1">Parametric (Assumes Gaussian):</span>
                  <span>Measures standard deviations from the mean. Typically flags observations where |Z| &gt; 3.0.</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-[11px] text-indigo-300">
                  Z = (x - mean) / std_dev<br />
                  outliers = df[np.abs(Z) &gt; 3]
                </div>
              </div>
            )}

            {/* Treatment Strategies */}
            <div className="space-y-1.5 text-xs">
              <span className="text-[10px] font-mono uppercase text-slate-400 block">Engineering Remedies:</span>
              <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <strong className="text-white">1. Winsorization:</strong> Cap at 95th/99th percentile.
                </div>
                <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <strong className="text-white">2. Transformation:</strong> Apply Log or Box-Cox.
                </div>
                <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <strong className="text-white">3. Retention:</strong> Keep if fraud or rare event.
                </div>
                <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <strong className="text-white">4. Deletion:</strong> Drop only if verified sensor error.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
            Never delete outliers without domain justification.
          </div>
        </div>
      </div>

      {/* Slide Bottom Bullet Summary */}
      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800">
        <span>"Tukey chose 1.5×IQR because for a normal distribution it catches ~0.7% of points, balancing precision and recall."</span>
        <span className="font-mono text-cyan-400">Section 3 · Slide 9/13</span>
      </div>
    </div>
  );
};
