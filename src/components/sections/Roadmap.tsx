import { Card } from "@/components/ui/card";
import { Calendar, GitBranch, Zap } from "lucide-react";

export default function Roadmap() {
  const meses = ["Mar", "Abr", "Mai", "Jun", "Jul", "Ago"];

  // Tracks paralelas - cada uma representa uma linha de trabalho
  const tracks = [
    {
      nome: "Discovery & Fundação",
      cor: "bg-purple-600",
      inicio: 0, // Março
      fim: 0, // Março
      prioridade: "Crítica",
      sprint: "Sprint 0"
    },
    {
      nome: "Migração LIV (225k contatos)",
      cor: "bg-blue-600",
      inicio: 1, // Abril
      fim: 2, // Maio
      prioridade: "Crítica",
      sprint: "Sprints 1-3"
    },
    {
      nome: "Setup DiaLab (BETT Priority)",
      cor: "bg-green-600",
      inicio: 2, // Maio
      fim: 2, // Maio
      prioridade: "Crítica",
      sprint: "Sprint 3"
    },
    {
      nome: "Content Hub & SEO",
      cor: "bg-orange-500",
      inicio: 1, // Abril
      fim: 4, // Julho
      prioridade: "Alta",
      sprint: "Sprints 1-5"
    },
    {
      nome: "Setup MeuMundo",
      cor: "bg-cyan-600",
      inicio: 2, // Maio
      fim: 3, // Junho
      prioridade: "Alta",
      sprint: "Sprints 3-4"
    },
    {
      nome: "Breeze AI & Agents",
      cor: "bg-pink-600",
      inicio: 3, // Junho
      fim: 4, // Julho
      prioridade: "Média",
      sprint: "Sprints 4-5"
    },
    {
      nome: "Cross-sell & Integrações",
      cor: "bg-indigo-600",
      inicio: 3, // Junho
      fim: 4, // Julho
      prioridade: "Média",
      sprint: "Sprints 4-5"
    },
    {
      nome: "Capacitação (Contínua)",
      cor: "bg-yellow-600",
      inicio: 1, // Abril
      fim: 5, // Agosto
      prioridade: "Alta",
      sprint: "Sprints 1-6"
    },
    {
      nome: "Go-Live & Estabilização",
      cor: "bg-red-600",
      inicio: 5, // Agosto
      fim: 5, // Agosto
      prioridade: "Crítica",
      sprint: "Sprint 6"
    }
  ];

  const getPriorityBadge = (prioridade: string) => {
    const badges = {
      "Crítica": "bg-red-100 text-red-800 border-red-300",
      "Alta": "bg-orange-100 text-orange-800 border-orange-300",
      "Média": "bg-yellow-100 text-yellow-800 border-yellow-300"
    };
    return badges[prioridade as keyof typeof badges] || badges.Média;
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
        <div className="flex items-center gap-3 mb-3">
          <GitBranch className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-purple-900">Roadmap Ágil de Implementação</h2>
        </div>
        <p className="text-slate-700 mb-2">
          <strong>Timeline:</strong> Março - Agosto/2026 | <strong>Metodologia:</strong> Ágil com Sprints Quinzenais
        </p>
        <p className="text-slate-700">
          Implementação com <strong>múltiplas tracks paralelas</strong> para maximizar eficiência e reduzir time-to-market
        </p>
      </Card>

      {/* Gantt Chart */}
      <Card className="p-6 overflow-x-auto">
        <div className="mb-4 flex items-center gap-2 text-sm text-slate-600">
          <Calendar className="w-4 h-4" />
          <span>6 meses | 12 sprints quinzenais | Entregas incrementais</span>
        </div>

        <div className="min-w-[800px]">
          {/* Header com meses */}
          <div className="flex mb-4">
            <div className="w-64 flex-shrink-0"></div>
            <div className="flex-1 flex">
              {meses.map((mes, index) => (
                <div key={index} className="flex-1 text-center">
                  <div className="font-semibold text-purple-900 mb-1">{mes}</div>
                  <div className="text-xs text-slate-600">2026</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tracks */}
          <div className="space-y-2">
            {tracks.map((track, trackIndex) => (
              <div key={trackIndex} className="flex items-center">
                {/* Nome da track */}
                <div className="w-64 flex-shrink-0 pr-4">
                  <div className="text-sm font-medium text-slate-900">{track.nome}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${getPriorityBadge(track.prioridade)}`}>
                      {track.prioridade}
                    </span>
                    <span className="text-xs text-slate-500">{track.sprint}</span>
                  </div>
                </div>

                {/* Timeline bar */}
                <div className="flex-1 flex relative h-12">
                  {meses.map((_, mesIndex) => (
                    <div key={mesIndex} className="flex-1 border-l border-slate-200 relative">
                      {mesIndex >= track.inicio && mesIndex <= track.fim && (
                        <div
                          className={`absolute inset-0 ${track.cor} opacity-90 ${
                            mesIndex === track.inicio ? 'rounded-l-lg' : ''
                          } ${
                            mesIndex === track.fim ? 'rounded-r-lg' : ''
                          }`}
                        >
                          {mesIndex === track.inicio && (
                            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-xs font-semibold">
                              ▶
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Destaques do Roadmap Ágil */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6 bg-green-50 border-green-300">
          <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Abordagem Ágil
          </h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span><strong>Sprints quinzenais</strong> com entregas incrementais</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span><strong>Trabalho paralelo</strong> em múltiplas BUs após Discovery</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span><strong>Capacitação contínua</strong> ao longo do projeto</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span><strong>Feedback loops</strong> e ajustes constantes</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6 bg-yellow-50 border-yellow-300">
          <h3 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center gap-2">
            🎯 Marcos Críticos
          </h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="font-bold text-purple-600">Mar:</span>
              <span>Discovery completo e fundação técnica</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-600">Abr-Mai:</span>
              <span>Migração LIV + Setup DiaLab para BETT</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-cyan-600">Mai-Jun:</span>
              <span>Setup MeuMundo + Content Hub ativo</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-red-600">Ago:</span>
              <span>Go-Live completo e handover</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* Dependências */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-purple-900 mb-4">Dependências e Sequenciamento</h3>
        <div className="space-y-3 text-sm text-slate-700">
          <div className="flex items-start gap-3">
            <span className="font-semibold text-purple-600 min-w-[40px]">1️⃣</span>
            <span><strong>Discovery (Mar)</strong> é pré-requisito para todas as outras tracks</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-semibold text-blue-600 min-w-[40px]">2️⃣</span>
            <span><strong>Migração LIV</strong> tem prioridade e acontece antes das outras BUs</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-semibold text-green-600 min-w-[40px]">3️⃣</span>
            <span><strong>DiaLab</strong> é priorizado para BETT (maio/2026) e roda paralelo à migração</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-semibold text-orange-600 min-w-[40px]">4️⃣</span>
            <span><strong>Content Hub</strong> começa cedo e roda em paralelo para gerar valor rápido</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-semibold text-yellow-600 min-w-[40px]">5️⃣</span>
            <span><strong>Capacitação</strong> é contínua desde o início, não apenas no final</span>
          </div>
        </div>
      </Card>

      {/* Benefícios da Abordagem */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          Por que Ágil ao invés de Waterfall?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">✅ Vantagens</h4>
            <ul className="space-y-1 text-slate-700">
              <li>• Time-to-value mais rápido</li>
              <li>• Risco reduzido com entregas incrementais</li>
              <li>• Flexibilidade para ajustes</li>
              <li>• Feedback contínuo do time LIV</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">🎯 Resultados</h4>
            <ul className="space-y-1 text-slate-700">
              <li>• DiaLab pronto para BETT maio/2026</li>
              <li>• LIV operando no HubSpot em maio</li>
              <li>• Todas as BUs ativas até julho</li>
              <li>• Go-live suave e sem riscos</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
