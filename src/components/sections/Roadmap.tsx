import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function Roadmap() {
  const timeline = [
    {
      mes: "Março",
      epico: "Discovery & Fundação",
      status: "Planejado",
      cor: "blue"
    },
    {
      mes: "Abril",
      epico: "Migração LIV",
      status: "Planejado",
      cor: "blue"
    },
    {
      mes: "Maio",
      epico: "Migração LIV + DiaLab (BETT)",
      status: "Planejado",
      cor: "blue"
    },
    {
      mes: "Junho",
      epico: "MeuMundo & Cross-sell",
      status: "Planejado",
      cor: "gray"
    },
    {
      mes: "Julho",
      epico: "Content Hub & IA",
      status: "Planejado",
      cor: "gray"
    },
    {
      mes: "Agosto",
      epico: "Capacitação & Go-Live",
      status: "Planejado",
      cor: "gray"
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-purple-50 border-purple-200">
        <div className="flex items-center gap-3 mb-3">
          <Calendar className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-purple-900">Roadmap de Implementação</h2>
        </div>
        <p className="text-slate-700 mb-2">
          <strong>Timeline:</strong> Março - Agosto/2026
        </p>
        <p className="text-slate-700">
          Implementação de 6 meses com épicos distribuídos estrategicamente
        </p>
      </Card>

      {/* Timeline Visual */}
      <div className="space-y-4">
        {timeline.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-24 text-right">
              <span className="text-sm font-semibold text-slate-700">{item.mes}</span>
            </div>

            <div className="flex-1">
              <div className={`p-4 rounded-lg border-2 ${
                item.cor === "blue"
                  ? "bg-blue-600 border-blue-700"
                  : "bg-slate-300 border-slate-400"
              }`}>
                <div className="flex items-center justify-between">
                  <span className={`font-semibold ${
                    item.cor === "blue" ? "text-white" : "text-slate-700"
                  }`}>
                    {item.epico}
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    item.cor === "blue"
                      ? "bg-blue-500 text-white"
                      : "bg-slate-200 text-slate-700"
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Destaque Crítico */}
      <Card className="p-6 bg-yellow-50 border-yellow-300">
        <h3 className="text-lg font-semibold text-yellow-900 mb-2 flex items-center gap-2">
          ⚡ Destaque Crítico
        </h3>
        <p className="text-slate-700">
          O setup do <strong>DiaLab será priorizado</strong> para estar pronto para a{" "}
          <strong>BETT em maio/2026</strong>, enquanto MeuMundo e configuração de cross-sell
          se estenderão até junho.
        </p>
      </Card>

      {/* Legenda */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-purple-900 mb-4">Fases do Projeto</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded bg-blue-600"></div>
            <div>
              <p className="font-semibold text-slate-900">Fase Crítica</p>
              <p className="text-sm text-slate-600">Março - Maio (Base + DiaLab)</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded bg-slate-400"></div>
            <div>
              <p className="font-semibold text-slate-900">Fase de Expansão</p>
              <p className="text-sm text-slate-600">Junho - Julho</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded bg-slate-400"></div>
            <div>
              <p className="font-semibold text-slate-900">Fase de Estabilização</p>
              <p className="text-sm text-slate-600">Agosto (Go-Live)</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
