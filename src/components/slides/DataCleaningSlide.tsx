import React, { useState } from 'react';
import { Slide } from '../../types/presentation';
import { Sparkles, Trash2, CheckCircle, RefreshCw, AlertCircle, FileCheck, Split } from 'lucide-react';

interface Props {
  slide: Slide;
}

interface RawRecord {
  id: number;
  name: string;
  city: string;
  age: number | null;
  salary: string | number | null;
  isDuplicate?: boolean;
  hasNull?: boolean;
  isInconsistent?: boolean;
}

export const DataCleaningSlide: React.FC<Props> = ({ slide }) => {
  const initialData: RawRecord[] = [
    { id: 101, name: "Aarav Sharma", city: "delhi", age: 24, salary: "₹55,000", isInconsistent: true },
    { id: 102, name: "Priya Patel", city: "Mumbai", age: null, salary: "₹62,000", hasNull: true },
    { id: 103, name: "Rohan Verma", city: "Bengaluru", age: 29, salary: "₹78,000" },
    { id: 103, name: "Rohan Verma", city: "Bengaluru", age: 29, salary: "₹78,000", isDuplicate: true },
    { id: 104, name: "Ananya Das", city: "Delhi ", age: 22, salary: null, hasNull: true, isInconsistent: true },
    { id: 105, name: "Kabir Singh", city: "mumbai", age: 31, salary: "₹90,000", isInconsistent: true },
  ];

  const cleanedData: RawRecord[] = [
    { id: 101, name: "Aarav Sharma", city: "Delhi", age: 24, salary: 55000 },
    { id: 102, name: "Priya Patel", city: "Mumbai", age: 26.5, salary: 62000 }, // Imputed median age
    { id: 103, name: "Rohan Verma", city: "Bengaluru", age: 29, salary: 78000 },
    { id: 104, name: "Ananya Das", city: "Delhi", age: 22, salary: 62000 }, // Imputed median salary
    { id: 105, name: "Kabir Singh", city: "Mumbai", age: 31, salary: 90000 },
  ];

  const [isCleaned, setIsCleaned] = useState<boolean>(false);
  const [imputationMethod, setImputationMethod] = useState<'median' | 'mean'>('median');

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 space-y-4">
      {/* Slide Header */}
      <div>
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          Slide 05 · {slide.category}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
          Data Cleaning & Preprocessing
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-1 max-w-3xl">
          Transforming corrupt, incomplete, and heterogeneous records into normalized data for mathematical modeling.
        </p>
      </div>

      {/* 4 Pillars of Data Cleaning Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2 mb-1.5 text-cyan-400">
            <span className="text-xs font-mono font-bold">01.</span>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Handling Nulls</h4>
          </div>
          <p className="text-xs text-slate-300">
            Evaluate MCAR/MAR. Drop rows if &lt;3% or impute via Median (skewed) or Mode (categorical).
          </p>
          <div className="mt-2 text-[10px] font-mono text-cyan-300">
            df.fillna(df.median())
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2 mb-1.5 text-emerald-400">
            <span className="text-xs font-mono font-bold">02.</span>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Removing Duplicates</h4>
          </div>
          <p className="text-xs text-slate-300">
            Deduplicate redundant records that artificially inflate loss functions and overfit models.
          </p>
          <div className="mt-2 text-[10px] font-mono text-emerald-300">
            df.drop_duplicates()
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2 mb-1.5 text-amber-400">
            <span className="text-xs font-mono font-bold">03.</span>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Inconsistent Data</h4>
          </div>
          <p className="text-xs text-slate-300">
            Strip accidental whitespace, normalize casing ('delhi' vs 'Delhi'), standardize currency symbols.
          </p>
          <div className="mt-2 text-[10px] font-mono text-amber-300">
            str.strip().str.title()
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2 mb-1.5 text-indigo-400">
            <span className="text-xs font-mono font-bold">04.</span>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Data Type Casting</h4>
          </div>
          <p className="text-xs text-slate-300">
            Convert strings containing prices to numeric floats, and ISO strings to native Datetime objects.
          </p>
          <div className="mt-2 text-[10px] font-mono text-indigo-300">
            pd.to_numeric()
          </div>
        </div>
      </div>

      {/* Interactive Live Data Cleaning Simulator */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex-1 flex flex-col justify-between">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3 border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
              Interactive Cleaning Demonstration:
            </span>
            <span className={`text-[11px] px-2 py-0.5 rounded font-mono ${
              isCleaned ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-amber-950 text-amber-300 border border-amber-800'
            }`}>
              {isCleaned ? '● Cleaned State (5 rows, 0 nulls, casted dtypes)' : '▲ Dirty State (Contains duplicates, nulls, casing errors)'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCleaned(!isCleaned)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isCleaned
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
              }`}
            >
              {isCleaned ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset to Raw Data</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Run Cleaning Pipeline</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Mini Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                <th className="py-1.5 px-3">ID</th>
                <th className="py-1.5 px-3">Name</th>
                <th className="py-1.5 px-3">City (String)</th>
                <th className="py-1.5 px-3">Age (Int/Float)</th>
                <th className="py-1.5 px-3">Salary (Numeric)</th>
                <th className="py-1.5 px-3 text-right">Audit Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {(isCleaned ? cleanedData : initialData).map((row, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    !isCleaned && row.isDuplicate
                      ? 'bg-rose-950/20 text-rose-300'
                      : !isCleaned && row.hasNull
                      ? 'bg-amber-950/20 text-amber-200'
                      : !isCleaned && row.isInconsistent
                      ? 'bg-sky-950/20 text-sky-200'
                      : 'text-slate-300 hover:bg-slate-800/40'
                  }`}
                >
                  <td className="py-2 px-3 text-slate-400">{row.id}</td>
                  <td className="py-2 px-3 font-semibold text-white">{row.name}</td>
                  <td className="py-2 px-3">
                    {row.city}
                    {!isCleaned && row.isInconsistent && (
                      <span className="text-[10px] text-amber-400 ml-1.5">⚠️ Unnormalized</span>
                    )}
                  </td>
                  <td className="py-2 px-3">
                    {row.age === null ? (
                      <span className="text-rose-400 font-bold bg-rose-950/80 px-1 rounded">NaN</span>
                    ) : (
                      <span>{row.age} {isCleaned && row.age === 26.5 && <span className="text-emerald-400 text-[10px]">(imputed)</span>}</span>
                    )}
                  </td>
                  <td className="py-2 px-3">
                    {row.salary === null ? (
                      <span className="text-rose-400 font-bold bg-rose-950/80 px-1 rounded">NaN</span>
                    ) : (
                      <span>
                        {typeof row.salary === 'number' ? `₹${row.salary.toLocaleString()}` : row.salary}
                        {isCleaned && row.id === 104 && <span className="text-emerald-400 text-[10px] ml-1">(imputed)</span>}
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-3 text-right">
                    {isCleaned ? (
                      <span className="text-[10px] text-emerald-400 flex items-center justify-end gap-1 font-sans">
                        <CheckCircle className="w-3 h-3" /> Validated
                      </span>
                    ) : row.isDuplicate ? (
                      <span className="text-[10px] text-rose-400 flex items-center justify-end gap-1 font-sans">
                        <Trash2 className="w-3 h-3" /> Duplicate Row
                      </span>
                    ) : row.hasNull ? (
                      <span className="text-[10px] text-amber-400 flex items-center justify-end gap-1 font-sans">
                        <AlertCircle className="w-3 h-3" /> Missing Cell
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-500 font-sans">Raw Record</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Status Callout */}
        <div className="mt-2 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
          <span>
            {isCleaned
              ? "✓ Deduplicated: 1 row purged | Missing values: Imputed via median | Strings stripped and Title-Cased."
              : "Click 'Run Cleaning Pipeline' above to see live imputation, deduplication, and string normalization."}
          </span>
          <span className="font-mono text-cyan-400">Pandas Engine Ready</span>
        </div>
      </div>

      {/* Slide Bottom Bullet Summary */}
      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800">
        <span>"Data cleaning accounts for 70% of an engineer's time — precision here dictates model success."</span>
        <span className="font-mono text-cyan-400">Section 2 · Slide 5/13</span>
      </div>
    </div>
  );
};
