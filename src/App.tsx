import { SalesSummary } from "./components/SalesSummary";
import { kpis } from "./data/kpis";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <SalesSummary kpis={kpis} />
    </main>
  );
}
