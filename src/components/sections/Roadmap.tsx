import { Card } from "@/components/ui/card";
import { Calendar, GitBranch, Zap, Flag, Milestone } from "lucide-react";

export default function Roadmap() {
  const meses = ["Mar", "Abr", "Mai", "Jun", "Jul", "Ago"];

  // Épicos principais com degradês
  const epicos = [
    {
      numero: 1,
      nome: "Discovery & Fundação",
      gradiente: "from-purple-600 via-purple-500 to-purple-400",
      inicio: 0,
      fim: 0,
      prioridade: "Crítica",
      sprint: "Sprint 0"
    },
    {
      numero: 2,
      nome: "Migração LIV (Marca Principal)",
      gradiente: "from-blue-600 via-blue-500 to-blue-400",
      inicio: 1,
      fim: 2,
      prioridade: "Crítica",
      sprint: "Sprints 1-3"
    },
    {
      numero: 3,
      nome: "MeuMundo & DiaLab",
      gradiente: "from-green-600 via-green-500 to-green-400",
      inicio: 2,
      fim: 3,
      prioridade: "Alta",
      sprint: "Sprints 3-4"
    },
    {
      numero: 4,
      nome: "Content Hub & IA",
      gradiente: "from-orange-600 via-orange-500 to-orange-400",
      inicio: 1,
      fim: 4,
      prioridade: "Média-Alta",
      sprint: "Sprints 1-5"
    },
    {
      numero: 5,
      nome: "Capacitação & Go-Live",
      gradiente: "from-pink-600 via-pink-500 to-pink-400",
      inicio: 1,
      fim: 5,
      prioridade: "Crítica",
      sprint: "Sprints 1-6"
    }
  ];

  // Marcos importantes
  const marcos = [
    { mes: 0, label: "Kick-off" },
    { mes: 2, label: "BETT DiaLab" },
    { mes: 2, label: "LIV no HubSpot" },
    { mes: 5, label: "Go-Live Final" }
  ];

  const getPriorityBadge = (prioridade: string) => {
    const badges = {
      "Crítica": "bg-red-100 text-red-800 border-red-300",
      "Alta": "bg-orange-100 text-orange-800 border-orange-300",
      "Média-Alta": "bg-yellow-100 text-yellow-800 border-yellow-300",
      "Média": "bg-yellow-100 text-yellow-800 border-yellow-300"
    };
    return badges[prioridade as keyof typeof badges] || badges.Média;
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 border-purple-200 shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-lg">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent">
            Roadmap Gantt - Épicos e Marcos
          </h2>
        </div>
        <p className="text-slate-700 mb-2">
          <strong>Timeline:</strong> Março - Agosto/2026 | <strong>Metodologia:</strong> Ágil com Sprints Quinzenais
        </p>
        <p className="text-slate-700">
          Visualização dos <strong>5 épicos principais</strong> com marcos estratégicos
        </p>
      </Card>

      {/* Gantt Chart Melhorado */}
      <Card className="p-6 overflow-x-auto shadow-xl">
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-600">
          <Milestone className="w-5 h-5 text-purple-600" />
          <span className="font-semibold">6 meses | 12 sprints quinzenais | 5 épicos</span>
        </div>

        <div className="min-w-[800px]">
          {/* Header com meses */}
          <div className="flex mb-4">
            <div className="w-64 md:w-72 flex-shrink-0"></div>
            <div className="flex-1 flex">
              {meses.map((mes, index) => (
                <div key={index} className="flex-1 text-center">
                  <div className="font-bold text-base md:text-lg text-purple-900 mb-1">{mes}</div>
                  <div className="text-xs text-slate-600 font-medium">2026</div>
                </div>
              ))}
            </div>
          </div>

          {/* Épicos */}
          <div className="space-y-3">
            {epicos.map((epico, epicoIndex) => (
              <div key={epicoIndex} className="flex items-center">
                {/* Info do épico */}
                <div className="w-64 md:w-72 flex-shrink-0 pr-3 md:pr-4">
                  <div className="bg-white rounded-lg p-2 md:p-3 shadow-md border-2 border-purple-200">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${epico.gradiente} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                        {epico.numero}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-purple-900 truncate">
                          {epico.nome}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap text-xs">
                      <span className={`px-1.5 py-0.5 rounded-full border font-semibold ${getPriorityBadge(epico.prioridade)}`}>
                        {epico.prioridade}
                      </span>
                      <span className="text-slate-500 font-medium">{epico.sprint}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline bar com degradê */}
                <div className="flex-1 flex relative h-16">
                  {meses.map((_, mesIndex) => (
                    <div key={mesIndex} className="flex-1 border-l border-slate-200 relative">
                      {mesIndex >= epico.inicio && mesIndex <= epico.fim && (
                        <>
                          {/* Barra principal com degradê */}
                          <div
                            className={`absolute inset-y-2 inset-x-1 bg-gradient-to-r ${epico.gradiente}
                              shadow-lg group-hover:shadow-xl transition-all
                              ${mesIndex === epico.inicio ? 'rounded-l-xl' : ''}
                              ${mesIndex === epico.fim ? 'rounded-r-xl' : ''}
                            `}
                          >
                            {/* Brilho no topo */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-xl"></div>

                            {/* Ícone de início */}
                            {mesIndex === epico.inicio && (
                              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white font-bold text-sm flex items-center gap-1">
                                <span>▶</span>
                              </div>
                            )}

                            {/* Progresso visual */}
                            <div className="absolute bottom-1 left-2 right-2 h-1 bg-white/40 rounded-full">
                              <div className="h-full bg-white/80 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Legenda dos Épicos */}
      <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
        <h3 className="text-lg font-bold text-purple-900 mb-4 flex items-center gap-2">
          <GitBranch className="w-5 h-5" />
          Legenda dos Épicos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {epicos.map((epico) => (
            <div key={epico.numero} className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${epico.gradiente} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                {epico.numero}
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-slate-900">Épico {epico.numero}</div>
                <div className="text-xs text-slate-600">{epico.nome}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Destaques */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-300 shadow-lg">
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

        <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-300 shadow-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            Marcos Críticos
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
            {marcos.map((marco, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white rounded-lg p-2 border border-blue-200">
                <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">{marco.mes + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-blue-900 text-xs">{meses[marco.mes]}</div>
                  <div className="text-xs text-slate-600 truncate">{marco.label}</div>
                </div>
              </div>
            ))}
          </div>
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
