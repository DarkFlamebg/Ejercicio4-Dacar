import type { LucideIcon } from "lucide-react";

export type KpiFormat = "currency" | "number" | "percent";

export interface Kpi {
  id: string;
  title: string;
  value: number;
  format: KpiFormat;
  /** Variación porcentual respecto al mes anterior (ej. 12.5 = +12.5 %). */
  change: number;
  icon: LucideIcon;
  /** true si una baja es buena noticia (ej. tasa de devolución). */
  lowerIsBetter?: boolean;
  description: string;
}
