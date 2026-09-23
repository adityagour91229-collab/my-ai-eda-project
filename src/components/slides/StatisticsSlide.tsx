import React, { useState, useMemo } from 'react';
import { Slide } from '../../types/presentation';
import { Calculator, AlertTriangle, ShieldCheck, BarChart2, Plus, RefreshCw } from 'lucide-react';

interface Props {
  slide: Slide;
}

export const StatisticsSlide: React.FC<Props> = ({ slide }) => {
  // Interactive array of sample data points
  const [dataPoints, setDataPoints] = useState<number[]>([15, 18, 20, 20, 22, 25, 28, 32]);
  const [hasOutlier, setHasOutlier] = useState<boolean>(false);

  const activeData = useMemo(() => {
    if (hasOutlier) {
      return [...dataPoints, 98];
    }
    return dataPoints;
  }, [dataPoints, hasOutlier]);

  // Calculate descriptive stats dynamically
  const stats = useMemo(() => {
    const sorted = [...activeData].sort((a, b) => a - b);
    const n = sorted.length;
    const sum = sorted.reduce((acc, v) => acc + v, 0);
    const mean = sum / n;

    // Median
    const mid = Math.floor(n / 2);
    const median = n % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

    // Mode
    const freq: Record<number, number> = {};
    sorted.forEach(val => { freq[val] = (freq[val] || 0) + 1; });
    let maxFreq = 0;
    let modeVal = sorted[0];
    Object.entries(freq).forEach(([k, count]) => {
      if (count > maxFreq) {
        maxFreq = count;
        modeVal = Number(k);
      }
    });

    const min = sorted[0];
    const max = sorted[n - 1];
    const range = max - min;

    // Variance and Standard Deviation
    const variance = sorted.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / n;
    const stdDev = Math.sqrt(variance);

    return {
      n,
      mean: Number(mean.toFixed(2)),
      median: Number(median.toFixed(2)),
      mode: maxFreq > 1 ? modeVal : 'No distinct mode',
      min,
      max,
      range,
      stdDev: Number(stdDev.toFixed(2)),
      variance: Number(variance.toFixed(2))
    };
  }, [activeData]);

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 space-y-4">
      {/* Slide Header */}
      <div>
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          Slide 06 · {slide.category}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
          Descriptive Statistics in EDA
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-1 max-w-3xl">
          Quantifying central tendency, dispersion, and understanding the vulnerability of the Mean vs robustness of the Median.
        </p>
      </div>

      {/* Top 5 Stat Definitions */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5">
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">01. Mean (x̄)</div>
          <div className="text-sm font-bold text-white mt-0.5">x̄ = (Σx) / n</div>
          <div className="text-[11px] text-slate-300 mt-1">Arithmetic center of mass. Sensitive to extreme values.</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">02. Median (Q2)</div>
          <div className="text-sm font-bold text-white mt-0.5">50th Percentile</div>
          <div className="text-[11px] text-slate-300 mt-1">Middle observation. Resistant to skewness & outliers.</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">03. Mode</div>
          <div className="text-sm font-bold text-white mt-0.5">Highest Frequency</div>
          <div className="text-[11px] text-slate-300 mt-1">Most recurring value. Useful for categorical data.</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <div className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider">04. Min & Max</div>
          <div className="text-sm font-bold text-white mt-0.5">Range = Max - Min</div>
          <div className="text-[11px] text-slate-300 mt-1">Absolute data boundaries; flags impossible numbers.</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 col-span-2 md:col-span-1">
          <div className="text-[11px] font-mono text-rose-400 uppercase tracking-wider">05. Std Dev (σ)</div>
          <div className="text-sm font-bold text-white mt-0.5">σ = √(Σ(x-μ)²/N)</div>
          <div className="text-[11px] text-slate-300 mt-1">Spread of observations around the sample mean.</div>
        </div>
      </div>

      {/* Interactive Live Calculation Sandbox */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex-1 flex flex-col justify-between">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Interactive Descriptive Statistics Sandbox
            </span>
            <span className="text-xs text-slate-400 ml-2">
              Inject an extreme outlier to observe the Mean vs Median impact live.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setHasOutlier(!hasOutlier)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                hasOutlier
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              }`}
            >
              {hasOutlier ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Remove Outlier (98)</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Inject Outlier (+98)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Current Active Array Badges */}
        <div className="py-2">
          <div className="text-[11px] font-mono text-slate-400 mb-1.5 flex items-center justify-between">
            <span>Sample Dataset (Sorted):</span>
            <span className="text-slate-300">n = {stats.n} observations</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {[...activeData].sort((a, b) => a - b).map((num, i) => (
              <span
                key={i}
                className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                  num === 98
                    ? 'bg-rose-950 text-rose-300 border border-rose-500 animate-pulse'
                    : 'bg-slate-800 text-slate-200 border border-slate-700'
                }`}
              >
                {num} {num === 98 && '⚠️ (outlier)'}
              </span>
            ))}
          </div>
        </div>

        {/* Computed Metrics Dashboard */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5 pt-2">
          <div className={`p-2.5 rounded-lg border transition-all ${
            hasOutlier ? 'bg-rose-950/20 border-rose-800 text-rose-300' : 'bg-slate-950 border-slate-800 text-cyan-300'
          }`}>
            <span className="text-[10px] uppercase font-mono block text-slate-400">Mean (x̄)</span>
            <span className="text-lg font-bold font-mono">{stats.mean}</span>
            <span className="text-[10px] block mt-0.5 text-slate-400">
              {hasOutlier ? '↑ Pulled drastically by 98' : 'Standard average'}
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950 border border-emerald-800/60 text-emerald-300">
            <span className="text-[10px] uppercase font-mono block text-slate-400">Median (Q2)</span>
            <span className="text-lg font-bold font-mono">{stats.median}</span>
            <span className="text-[10px] block mt-0.5 text-emerald-400/80">
              {hasOutlier ? '✓ Stable (Robust to outlier)' : 'Middle value'}
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-amber-300">
            <span className="text-[10px] uppercase font-mono block text-slate-400">Mode</span>
            <span className="text-lg font-bold font-mono">{stats.mode}</span>
            <span className="text-[10px] block mt-0.5 text-slate-400">Peak frequency</span>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200">
            <span className="text-[10px] uppercase font-mono block text-slate-400">Min - Max</span>
            <span className="text-lg font-bold font-mono">{stats.min} – {stats.max}</span>
            <span className="text-[10px] block mt-0.5 text-slate-400">Range: {stats.range}</span>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-rose-300">
            <span className="text-[10px] uppercase font-mono block text-slate-400">Std Dev (σ)</span>
            <span className="text-lg font-bold font-mono">{stats.stdDev}</span>
            <span className="text-[10px] block mt-0.5 text-slate-400">
              {hasOutlier ? '↑ Variance inflated' : 'Normal spread'}
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-indigo-300">
            <span className="text-[10px] uppercase font-mono block text-slate-400">Python Pandas</span>
            <span className="text-xs font-mono text-cyan-400 block mt-1 font-bold">df.describe()</span>
            <span className="text-[10px] block mt-0.5 text-slate-400">1-line summary</span>
          </div>
        </div>

        {/* Viva Takeaway Callout */}
        <div className="mt-2 p-2.5 rounded bg-cyan-950/20 border border-cyan-800/40 text-xs text-slate-300 flex items-center justify-between">
          <span>
            <strong className="text-cyan-300">Viva Insight:</strong> Notice how adding 98 inflates the Mean by nearly +10 points and triples the Standard Deviation, while the Median moves by only 1 point. This is why median is used for salaries and real estate.
          </span>
        </div>
      </div>

      {/* Slide Bottom Bullet Summary */}
      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800">
        <span>"For symmetrical data: Mean ≈ Median ≈ Mode. For right-skewed data: Mean &gt; Median &gt; Mode."</span>
        <span className="font-mono text-cyan-400">Section 2 · Slide 6/13</span>
      </div>
    </div>
  );
};
