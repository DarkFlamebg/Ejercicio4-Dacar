import { TrendingDown, TrendingUp } from "lucide-react";
import type { Kpi } from "../types";
import { formatChange, formatValue } from "../utils/format";

interface KpiRowProps {
  kpi: Kpi;
  onDetails: (kpi: Kpi) => void;
}

export function KpiRow({ kpi, onDetails }: KpiRowProps) {
  const { title, value, format, change, icon: Icon, lowerIsBetter } = kpi;
  const isUp = change >= 0;
  const isGood = lowerIsBetter ? !isUp : isUp;
  const TrendIcon = isUp ? TrendingUp : TrendingDown;

  return (
    <tr className="grid grid-cols-2 gap-x-4 gap-y-3 p-4 transition hover:bg-slate-50 sm:table-row sm:p-0">
      <th
        scope="row"
        className="col-span-2 text-left font-semibold text-slate-800 sm:px-6 sm:py-4"
      >
        <span className="flex items-center gap-3">
          <span className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          {title}
        </span>
      </th>

      <td className="sm:px-6 sm:py-4">
        <span className="block text-xs text-slate-500 sm:hidden">Valor</span>
        <span className="text-lg font-bold text-slate-900 tabular-nums">{formatValue(value, format)}</span>
      </td>

      <td className="text-right sm:px-6 sm:py-4 sm:text-left">
        <span className="block text-xs text-slate-500 sm:hidden">Variación mensual</span>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-semibold tabular-nums ${
            isGood ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
          }`}
        >
          <TrendIcon className="h-4 w-4" aria-hidden="true" />
          {formatChange(change)}
        </span>
      </td>

      <td className="col-span-2 sm:px-6 sm:py-4 sm:text-right">
        <button
          type="button"
          onClick={() => onDetails(kpi)}
          className="w-full rounded-lg border border-indigo-200 px-3 py-1.5 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:w-auto"
        >
          Ver detalles
        </button>
      </td>
    </tr>
  );
}
