# Resumen de ventas E-commerce

Sección de indicadores de ventas (KPI) para una plataforma e-commerce, hecha con **React + TypeScript**, **Tailwind CSS** y **Lucide React**.

**Demo:** https://darkflamebg.github.io/Ejercicio4-Dacar/

## Funcionalidades

- Tabla con 5 indicadores: nombre, ícono, valor principal y variación respecto al mes anterior.
- Variaciones positivas en verde y negativas en rojo.
- Botón **Ver detalles** por indicador que abre un diálogo (se cierra con la X, `Esc` o clic fuera).
- Diseño responsive: tabla en escritorio y tablet; filas apiladas en móvil.

## Estructura

```
src/
├── App.tsx
├── types.ts                    # Interfaz Kpi
├── data/kpis.ts                # Arreglo tipado Kpi[] con los indicadores
├── utils/format.ts             # Formato de moneda, números y porcentajes
└── components/
    ├── SalesSummary.tsx        # Componente "Resumen de ventas E-commerce"
    ├── KpiRow.tsx              # Fila reutilizable de indicador
    └── DetailsDialog.tsx       # Diálogo de "Ver detalles"
```

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Despliegue

Cada `push` a `main` compila y publica el sitio en GitHub Pages mediante `.github/workflows/deploy.yml`.
