import React, { useState, useMemo } from 'react';
import { Slide } from '../../types/presentation';
import { TrendingUp, TrendingDown, Minus, Sliders, AlertCircle, Grid } from 'lucide-react';

interface Props {
  slide: Slide;
}

export const CorrelationSlide: React.FC<Props> = ({ slide }) => {
  // r ranges from -1.0 to 1.0
  const [correlationR, setCorrelationR] = useState<number>(0.85);

  // Generate synthetic points based on r
  const points = useMemo(() => {
    const basePoints = [
      { x: 10, noise: -8 }, { x: 15, noise: 12 }, { x: 20, noise: -5 },
      { x: 25, noise: 7 }, { x: 30, noise: -12 }, { x: 35, noise: 15 },
      { x: 40, noise: -4 }, { x: 45, noise: 9 }, { x: 50, noise: -15 },
      { x: 55, noise: 11 }, { x: 60, noise: -7 }, { x: 65, noise: 14 },
      { x: 70, noise: -10 }, { x: 75, noise: 6 }, { x: 80, noise: -9 },
      { x: 85, noise: 13 }, { x: 90, noise: -6 }
    ];

    return basePoints.map(pt => {
      // Linear slope from -1 to +1
      // When r = 1, y follows x closely. When r = -1, y follows 100 - x.
      // When r = 0, noise dominates.
      const trendY = correlationR >= 0
        ? pt.x * correlationR + 50 * (1 - correlationR)
        : (100 - pt.x) * Math.abs(correlationR) + 50 * (1 - Math.abs(correlationR));
      
      const noiseScaled = pt.noise * (1 - Math.abs(correlationR) * 0.85);
      const finalY = Math.max(10, Math.min(90, trendY + noiseScaled));

      return { x: pt.x, y: finalY };
    });
  }, [correlationR]);

  // Compute trendline coordinates
  const lineStart = correlationR >= 0
    ? { x: 10, y: 10 * correlationR + 50 * (1 - correlationR) }
    : { x: 10, y: 90 * Math.abs(correlationR) + 50 * (1 - Math.abs(correlationR)) };

  const lineEnd = correlationR >= 0
    ? { x: 90, y: 90 * correlationR + 50 * (1 - correlationR) }
    : { x: 90, y: 10 * Math.abs(correlationR) + 50 * (1 - Math.abs(correlationR)) };

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 space-y-4">
      {/* Slide Header */}
      <div>
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          Slide 08 · {slide.category}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
          Correlation Analysis & Feature Association
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-1 max-w-3xl">
          Quantifying the linear relationship between variables using Pearson's correlation coefficient (r ∈ [-1, +1]).
        </p>
      </div>

      {/* 3 Core Types Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <button
          onClick={() => setCorrelationR(0.85)}
          className={`p-3.5 rounded-xl border text-left transition-all ${
            correlationR > 0.4
              ? 'bg-emerald-950/40 border-emerald-500/60 ring-1 ring-emerald-500/30'
              : 'bg-slate-900 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center gap-2 mb-1.5 text-emerald-400">
            <TrendingUp className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Positive (r &gt; 0)</h4>
          </div>
          <p className="text-xs text-slate-300">
            As X increases, Y increases proportionately.
          </p>
          <div className="mt-2 text-[11px] font-mono text-emerald-400">
            e.g., Study Hours vs GPA
          </div>
        </button>

        <button
          onClick={() => setCorrelationR(-0.85)}
          className={`p-3.5 rounded-xl border text-left transition-all ${
            correlationR < -0.4
              ? 'bg-rose-950/40 border-rose-500/60 ring-1 ring-rose-500/30'
              : 'bg-slate-900 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center gap-2 mb-1.5 text-rose-400">
            <TrendingDown className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Negative (r &lt; 0)</h4>
          </div>
          <p className="text-xs text-slate-300">
            As X increases, Y decreases proportionately.
          </p>
          <div className="mt-2 text-[11px] font-mono text-rose-400">
            e.g., Car Age vs Resale Price
          </div>
        </button>

        <button
          onClick={() => setCorrelationR(0.0)}
          className={`p-3.5 rounded-xl border text-left transition-all ${
            Math.abs(correlationR) <= 0.4
              ? 'bg-sky-950/40 border-sky-500/60 ring-1 ring-sky-500/30'
              : 'bg-slate-900 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center gap-2 mb-1.5 text-sky-400">
            <Minus className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Zero / None (r ≈ 0)</h4>
          </div>
          <p className="text-xs text-slate-300">
            No discernible linear association exists.
          </p>
          <div className="mt-2 text-[11px] font-mono text-sky-400">
            e.g., Shoe Size vs IQ Score
          </div>
        </button>
      </div>

      {/* Interactive Correlation Sandbox & Scatter */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch p-5 rounded-xl bg-slate-900 border border-slate-800 flex-1">
        {/* Dynamic Scatter Canvas */}
        <div className="lg:col-span-7 flex flex-col justify-between p-4 rounded-lg bg-slate-950 border border-slate-800">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2 mb-2">
            <span>Dynamic Scatter Plot & Trendline</span>
            <span className={`font-bold ${
              correlationR > 0.4 ? 'text-emerald-400' : correlationR < -0.4 ? 'text-rose-400' : 'text-sky-400'
            }`}>
              Pearson r = {correlationR > 0 ? `+${correlationR.toFixed(2)}` : correlationR.toFixed(2)}
            </span>
          </div>

          {/* SVG Plot */}
          <div className="h-48 flex items-center justify-center">
            <svg viewBox="0 0 320 180" className="w-full h-full max-w-sm">
              {/* Axes */}
              <line x1="30" y1="160" x2="300" y2="160" stroke="#334155" strokeWidth="1.5" />
              <line x1="30" y1="20" x2="30" y2="160" stroke="#334155" strokeWidth="1.5" />

              {/* Gridlines */}
              <line x1="30" y1="90" x2="300" y2="90" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="165" y1="20" x2="165" y2="160" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />

              {/* Dynamic Trendline (SVG coordinates: y is inverted) */}
              <line
                x1={30 + (lineStart.x / 100) * 270}
                y1={160 - (lineStart.y / 100) * 140}
                x2={30 + (lineEnd.x / 100) * 270}
                y2={160 - (lineEnd.y / 100) * 140}
                stroke={correlationR > 0.4 ? '#10b981' : correlationR < -0.4 ? '#f43f5e' : '#38bdf8'}
                strokeWidth="2.5"
                strokeDasharray={Math.abs(correlationR) < 0.2 ? '3 3' : 'none'}
              />

              {/* Scatter Points */}
              {points.map((pt, i) => (
                <circle
                  key={i}
                  cx={30 + (pt.x / 100) * 270}
                  cy={160 - (pt.y / 100) * 140}
                  r="3.5"
                  fill="#38bdf8"
                  opacity="0.85"
                />
              ))}

              <text x="165" y="174" fill="#94a3b8" fontSize="9" textAnchor="middle">Feature X (Standardized)</text>
              <text x="18" y="90" fill="#94a3b8" fontSize="9" textAnchor="middle" transform="rotate(-90 18 90)">Feature Y</text>
            </svg>
          </div>

          {/* Interactive Slider */}
          <div className="pt-2 border-t border-slate-800">
            <div className="flex items-center justify-between text-xs font-mono mb-1.5">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                <span>Adjust Correlation Coefficient (r):</span>
              </span>
              <span className="font-bold text-cyan-400">{correlationR.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="-1.0"
              max="1.0"
              step="0.05"
              value={correlationR}
              onChange={(e) => setCorrelationR(parseFloat(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
              <span>-1.0 (Inverse)</span>
              <span>0.0 (Uncorrelated)</span>
              <span>+1.0 (Direct)</span>
            </div>
          </div>
        </div>

        {/* Right Info: Heatmap Matrix & Formula */}
        <div className="lg:col-span-5 flex flex-col justify-between p-4 rounded-lg bg-slate-950 border border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
              <Grid className="w-4 h-4" />
              <span className="font-semibold uppercase">Correlation Matrix & Heatmap</span>
            </div>

            {/* Mini Heatmap Grid */}
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 mb-3">
              <div className="text-[10px] font-mono text-slate-400 mb-2">df.corr(numeric_only=True)</div>
              <div className="grid grid-cols-4 gap-1 text-[10px] font-mono text-center">
                <div className="text-slate-500"></div>
                <div className="text-slate-400 font-bold">X1</div>
                <div className="text-slate-400 font-bold">X2</div>
                <div className="text-slate-400 font-bold">Y</div>

                <div className="text-slate-400 font-bold text-left pl-1">X1</div>
                <div className="bg-sky-500/20 text-cyan-300 py-1 rounded">1.00</div>
                <div className="bg-emerald-500/20 text-emerald-300 py-1 rounded">+0.82</div>
                <div className="bg-slate-800 text-slate-400 py-1 rounded">-0.12</div>

                <div className="text-slate-400 font-bold text-left pl-1">X2</div>
                <div className="bg-emerald-500/20 text-emerald-300 py-1 rounded">+0.82</div>
                <div className="bg-sky-500/20 text-cyan-300 py-1 rounded">1.00</div>
                <div className="bg-rose-500/20 text-rose-300 py-1 rounded">-0.45</div>

                <div className="text-slate-400 font-bold text-left pl-1">Y</div>
                <div className="bg-slate-800 text-slate-400 py-1 rounded">-0.12</div>
                <div className="bg-rose-500/20 text-rose-300 py-1 rounded">-0.45</div>
                <div className="bg-sky-500/20 text-cyan-300 py-1 rounded">1.00</div>
              </div>
            </div>

            {/* Pearson Formula */}
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs mb-3">
              <span className="text-[10px] font-mono text-cyan-400 block uppercase mb-1">Pearson Formula:</span>
              <div className="font-mono text-xs text-slate-200">
                r = Σ((x - x̄)(y - ȳ)) / [ √(Σ(x - x̄)²) · √(Σ(y - ȳ)²) ]
              </div>
            </div>

            {/* Golden Rule Note */}
            <div className="p-2 rounded bg-amber-950/20 border border-amber-800/40 text-[11px] text-amber-200/90 flex items-start gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Correlation ≠ Causation:</strong> High correlation does not prove that X causes Y; third lurking factors may drive both.
              </span>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
            Multicollinearity warning: Flag pairs with |r| &gt; 0.80.
          </div>
        </div>
      </div>

      {/* Slide Bottom Bullet Summary */}
      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800">
        <span>"Correlation evaluates the direction and strength of linear dependence between paired variables."</span>
        <span className="font-mono text-cyan-400">Section 3 · Slide 8/13</span>
      </div>
    </div>
  );
};
