import type { KpiFormat } from "../types";

export function formatValue(value: number, format: KpiFormat): string {
  switch (format) {
    case "currency":
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: value % 1 === 0 ? 0 : 2,
      }).format(value);
    case "percent":
      return `${value.toFixed(1)} %`;
    default:
      return new Intl.NumberFormat("es-EC").format(value);
  }
}

export function formatChange(change: number): string {
  const sign = change > 0 ? "+" : "";
  return `${sign}${change.toFixed(1)} %`;
}
