import { Card } from "@/components/ui/card";

export default function VisaoGeral() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-sm font-medium text-slate-600 mb-2">Base de Contatos</h3>
          <p className="text-4xl font-bold text-purple-900 mb-1">250K+</p>
          <p className="text-sm text-slate-600">Contatos a migrar e gerenciar</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-slate-600 mb-2">Business Units</h3>
          <p className="text-4xl font-bold text-purple-900 mb-1">3</p>
          <p className="text-sm text-slate-600">LIV, MeuMundo, DiaLab</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-slate-600 mb-2">Duração</h3>
          <p className="text-4xl font-bold text-purple-900 mb-1">6</p>
          <p className="text-sm text-slate-600">Meses de implementação</p>
        </Card>
      </div>

      {/* Objetivo Principal */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="text-lg font-semibold text-purple-900 mb-3">Objetivo Principal</h3>
        <p className="text-slate-700 leading-relaxed">
          Implementar uma plataforma HubSpot Marketing Hub Enterprise unificada que permita gerenciar as três Business Units de forma separada,
          integrada completamente com Vendas e CS, e acelerada por Inteligência Artificial (Breeze AI) para otimizar operações de marketing e
          rastrear ROI de ponta a ponta.
        </p>
      </Card>
    </div>
  );
}
