import { useCallback, useState } from "react";
import type { Kpi } from "../types";
import { KpiRow } from "./KpiRow";
import { DetailsDialog } from "./DetailsDialog";

interface SalesSummaryProps {
  title?: string;
  kpis: Kpi[];
}

export function SalesSummary({ title = "Resumen de ventas E‑commerce", kpis }: SalesSummaryProps) {
  const [selected, setSelected] = useState<Kpi | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section className="mx-auto w-full max-w-5xl">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h1>
        <p className="mt-1 text-sm text-slate-500">Indicadores del mes actual comparados con el mes anterior.</p>
      </header>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="hidden bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 sm:table-header-group">
            <tr>
              <th scope="col" className="px-6 py-3">Indicador</th>
              <th scope="col" className="px-6 py-3">Valor</th>
              <th scope="col" className="px-6 py-3">Variación mensual</th>
              <th scope="col" className="px-6 py-3 text-right">
                <span className="sr-only">Acciones</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {kpis.map((kpi) => (
              <KpiRow key={kpi.id} kpi={kpi} onDetails={setSelected} />
            ))}
          </tbody>
        </table>
      </div>

      <DetailsDialog kpi={selected} onClose={close} />
    </section>
  );
}
