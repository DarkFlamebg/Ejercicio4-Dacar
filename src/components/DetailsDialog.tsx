import { useEffect } from "react";
import { X } from "lucide-react";
import type { Kpi } from "../types";
import { formatChange, formatValue } from "../utils/format";

interface DetailsDialogProps {
  kpi: Kpi | null;
  onClose: () => void;
}

export function DetailsDialog({ kpi, onClose }: DetailsDialogProps) {
  useEffect(() => {
    if (!kpi) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [kpi, onClose]);

  if (!kpi) return null;
  const Icon = kpi.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-indigo-50 p-2 text-indigo-600">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 id="dialog-title" className="text-lg font-semibold text-slate-900">
              {kpi.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-4 text-sm text-slate-600">{kpi.description}</p>

        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg bg-slate-50 p-3">
            <dt className="text-slate-500">Valor actual</dt>
            <dd className="font-semibold text-slate-900">{formatValue(kpi.value, kpi.format)}</dd>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <dt className="text-slate-500">Variación mensual</dt>
            <dd className="font-semibold text-slate-900">{formatChange(kpi.change)}</dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
