import { useCallback, useState } from "react";
import type { Kpi } from "../types";
import { KpiCard } from "./KpiCard";
import { DetailsDialog } from "./DetailsDialog";

interface SalesSummaryProps {
  title?: string;
  kpis: Kpi[];
}

export function SalesSummary({ title = "Resumen de ventas E‑commerce", kpis }: SalesSummaryProps) {
  const [selected, setSelected] = useState<Kpi | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section className="mx-auto w-full max-w-7xl">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h1>
        <p className="mt-1 text-sm text-slate-500">Indicadores del mes actual comparados con el mes anterior.</p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} onDetails={setSelected} />
        ))}
      </div>

      <DetailsDialog kpi={selected} onClose={close} />
    </section>
  );
}
