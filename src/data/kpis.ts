import { DollarSign, Percent, Receipt, ShoppingCart, Users } from "lucide-react";
import type { Kpi } from "../types";

// Reemplazar valores con los de la tabla de referencia.
export const kpis: Kpi[] = [
  {
    id: "ventas",
    title: "Ventas totales",
    value: 128450,
    format: "currency",
    change: 12.5,
    icon: DollarSign,
    description: "Ingresos brutos generados por todas las órdenes del mes.",
  },
  {
    id: "pedidos",
    title: "Pedidos",
    value: 1842,
    format: "number",
    change: 8.2,
    icon: ShoppingCart,
    description: "Número de órdenes completadas en el mes.",
  },
  {
    id: "ticket",
    title: "Ticket promedio",
    value: 69.74,
    format: "currency",
    change: -3.1,
    icon: Receipt,
    description: "Ventas totales divididas entre el número de pedidos.",
  },
  {
    id: "clientes",
    title: "Clientes nuevos",
    value: 624,
    format: "number",
    change: 15.4,
    icon: Users,
    description: "Clientes que realizaron su primera compra este mes.",
  },
  {
    id: "conversion",
    title: "Tasa de conversión",
    value: 3.8,
    format: "percent",
    change: -1.2,
    icon: Percent,
    description: "Porcentaje de visitas que terminaron en una compra.",
  },
];
