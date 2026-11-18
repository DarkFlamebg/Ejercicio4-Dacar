import { BatteryCharging, DollarSign, Percent, Receipt, ShoppingCart } from "lucide-react";
import type { Kpi } from "../types";

export const kpis: Kpi[] = [
  {
    id: "baterias",
    title: "Baterías vendidas",
    value: 1248,
    format: "number",
    change: 8.2,
    icon: BatteryCharging,
    description: "Unidades de baterías vendidas durante el mes.",
  },
  {
    id: "ventas",
    title: "Ventas totales",
    value: 275634.5,
    format: "currency",
    change: 12.5,
    icon: DollarSign,
    description: "Ingresos brutos generados por todas las órdenes del mes.",
  },
  {
    id: "pedidos",
    title: "Pedidos realizados",
    value: 1032,
    format: "number",
    change: 6.1,
    icon: ShoppingCart,
    description: "Número de órdenes realizadas en el mes.",
  },
  {
    id: "ticket",
    title: "Ticket promedio",
    value: 267.09,
    format: "currency",
    change: 4.2,
    icon: Receipt,
    description: "Ventas totales divididas entre el número de pedidos.",
  },
  {
    id: "conversion",
    title: "Tasa de conversión",
    value: 3.75,
    format: "percent",
    change: -0.4,
    icon: Percent,
    description: "Porcentaje de visitas que terminaron en una compra.",
  },
];
