import type { KpiFormat } from "../types";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const integer = new Intl.NumberFormat("en-US");

export function formatValue(value: number, format: KpiFormat): string {
  switch (format) {
    case "currency":
      return currency.format(value); // $275,634.50
    case "percent":
      return `${value.toFixed(2)}%`; // 3.75%
    default:
      return integer.format(value); // 1,248
  }
}

export function formatChange(change: number): string {
  const sign = change > 0 ? "+" : "";
  return `${sign}${change.toFixed(1)}%`; // +8.2% / -0.4%
}
