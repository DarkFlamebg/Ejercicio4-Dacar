import { TrendingDown, TrendingUp } from "lucide-react";
import type { Kpi } from "../types";
import { formatChange, formatValue } from "../utils/format";

interface KpiCardProps {
  kpi: Kpi;
  onDetails: (kpi: Kpi) => void;
}

export function KpiCard({ kpi, onDetails }: KpiCardProps) {
  const { title, value, format, change, icon: Icon, lowerIsBetter } = kpi;
  const isUp = change >= 0;
  const isGood = lowerIsBetter ? !isUp : isUp;
  const TrendIcon = isUp ? TrendingUp : TrendingDown;

  return (
    <article className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <header className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-medium text-slate-500">{title}</h3>
        <span className="rounded-xl bg-indigo-50 p-2 text-indigo-600">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </header>

      <p className="text-2xl font-bold tracking-tight text-slate-900">
        {formatValue(value, format)}
      </p>

      <div className="flex items-center justify-between gap-2">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
            isGood ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
          }`}
        >
          <TrendIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {formatChange(change)}
        </span>
        <span className="text-xs text-slate-400">vs. mes anterior</span>
      </div>

      <button
        type="button"
        onClick={() => onDetails(kpi)}
        className="w-full rounded-lg border border-indigo-200 px-3 py-2 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        Ver detalles
      </button>
    </article>
  );
}
