import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, BarChart3, RefreshCcw, ArrowRight } from "lucide-react";

export default function GTMFlywheel() {
  const stages = [
    {
      name: "RECONHECIMENTO",
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-400",
      bgColor: "bg-blue-50",
      metrics: ["CONTAS", "MQAs"],
      icon: "👁️",
      description: "Atrair atenção e gerar awareness"
    },
    {
      name: "EDUCAÇÃO",
      color: "from-cyan-500 to-cyan-600",
      borderColor: "border-cyan-400",
      bgColor: "bg-cyan-50",
      metrics: ["SQLs"],
      icon: "📚",
      description: "Educar prospects sobre soluções"
    },
    {
      name: "SELEÇÃO",
      color: "from-indigo-500 to-indigo-600",
      borderColor: "border-indigo-400",
      bgColor: "bg-indigo-50",
      metrics: ["SALs"],
      icon: "🎯",
      description: "Qualificar e selecionar leads"
    },
    {
      name: "ONBOARDING",
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-400",
      bgColor: "bg-purple-50",
      metrics: ["CLIENTES"],
      icon: "🚀",
      description: "Ativar novos clientes"
    },
    {
      name: "ROI",
      color: "from-pink-500 to-pink-600",
      borderColor: "border-pink-400",
      bgColor: "bg-pink-50",
      metrics: ["ATIVOS"],
      icon: "💰",
      description: "Demonstrar retorno sobre investimento"
    },
    {
      name: "RETENÇÃO",
      color: "from-orange-500 to-orange-600",
      borderColor: "border-orange-400",
      bgColor: "bg-orange-50",
      metrics: ["GRR"],
      icon: "🔄",
      description: "Manter clientes engajados"
    },
    {
      name: "EXPANSÃO",
      color: "from-red-500 to-red-600",
      borderColor: "border-red-400",
      bgColor: "bg-red-50",
      metrics: ["NRR", "LTV"],
      icon: "📈",
      description: "Expandir relacionamento"
    }
  ];

  const crmLayers = [
    { name: "Marketing CRM", color: "bg-blue-600", tools: ["E-mails", "WhatsApps", "Reuniões"] },
    { name: "Vendas CRM", color: "bg-cyan-600", tools: ["E-mails", "WhatsApps", "Reuniões", "Documentos"] },
    { name: "CS CRM", color: "bg-purple-600", tools: ["E-mails", "WhatsApps", "Reuniões", "Documentos", "Resultados", "Produtos"] }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-blue-200 shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-lg">
            <RefreshCcw className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
            GTM Flywheel: Nossa Visão de Métricas
          </h2>
        </div>
        <p className="text-slate-700 text-lg mb-2">
          <strong>Go-to-Market Flywheel</strong> é nossa metodologia para acompanhar a jornada completa do cliente
        </p>
        <p className="text-slate-600">
          Do primeiro contato até a expansão e advocacy, medindo cada etapa com precisão
        </p>
      </Card>

      {/* Flywheel Visual */}
      <Card className="p-8 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              O Flywheel de Crescimento
            </h3>
            <p className="text-slate-600">
              Cada etapa alimenta a próxima, criando momentum contínuo
            </p>
          </div>

          {/* Stages em círculo */}
          <div className="relative">
            {/* Centro do flywheel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl z-10">
              <div className="text-white text-center">
                <RefreshCcw className="w-8 h-8 mx-auto mb-1 animate-spin" style={{ animationDuration: '3s' }} />
                <div className="text-xs font-bold">FLYWHEEL</div>
              </div>
            </div>

            {/* Stages */}
            <div className="grid grid-cols-1 md:grid-cols-7 gap-3 mb-8">
              {stages.map((stage, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-full h-32 bg-gradient-to-br ${stage.color} rounded-xl shadow-lg p-4 flex flex-col items-center justify-center text-white transform hover:scale-105 transition-transform`}>
                    <div className="text-3xl mb-2">{stage.icon}</div>
                    <div className="text-xs font-bold text-center leading-tight">
                      {stage.name}
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    {stage.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-xs font-bold text-slate-700 bg-white border-2 border-slate-200 rounded-full px-3 py-1 mb-1">
                        {metric}
                      </div>
                    ))}
                  </div>
                  {index < stages.length - 1 && (
                    <ArrowRight className="hidden md:block w-5 h-5 text-slate-400 mx-auto mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Descrições das etapas */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
            {stages.map((stage, index) => (
              <div key={index} className={`p-4 ${stage.bgColor} ${stage.borderColor} border-2 rounded-lg`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{stage.icon}</span>
                  <h4 className="text-xs font-bold text-slate-900">{stage.name}</h4>
                </div>
                <p className="text-xs text-slate-700">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* CRM Layers */}
      <Card className="p-6 shadow-xl">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-purple-600" />
          Camadas de CRM e Touchpoints
        </h3>

        <div className="space-y-4">
          {crmLayers.map((layer, index) => (
            <div key={index} className="relative">
              <div className={`${layer.color} text-white rounded-xl p-4 shadow-lg`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold">{layer.name}</h4>
                  <Users className="w-5 h-5" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {layer.tools.map((tool, tIdx) => (
                    <div key={tIdx} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {index < crmLayers.length - 1 && (
                <div className="flex justify-center my-2">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-slate-300 to-slate-400"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200">
          <p className="text-sm text-slate-700 text-center">
            <strong>Integração total:</strong> Todos os touchpoints conectados para visão 360° do cliente
          </p>
        </div>
      </Card>

      {/* Métricas Chave */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-300 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-green-900">Aquisição</h4>
          </div>
          <ul className="space-y-1 text-sm text-green-800">
            <li>• Contas alcançadas</li>
            <li>• MQAs gerados</li>
            <li>• SQLs qualificados</li>
            <li>• Taxa de conversão</li>
          </ul>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-blue-900">Ativação</h4>
          </div>
          <ul className="space-y-1 text-sm text-blue-800">
            <li>• Clientes ativos</li>
            <li>• Time to value</li>
            <li>• Adoção de features</li>
            <li>• Engagement score</li>
          </ul>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-purple-900">Retenção & Expansão</h4>
          </div>
          <ul className="space-y-1 text-sm text-purple-800">
            <li>• GRR (Gross Revenue Retention)</li>
            <li>• NRR (Net Revenue Retention)</li>
            <li>• LTV (Lifetime Value)</li>
            <li>• Churn rate</li>
          </ul>
        </Card>
      </div>

      {/* Como implementamos no HubSpot */}
      <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 shadow-xl">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">
          Como Implementamos no HubSpot para o LIV
        </h3>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              1
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Dashboards por Etapa do Flywheel</h4>
              <p className="text-sm text-slate-700">
                Cada etapa do flywheel terá seu próprio dashboard customizado com as métricas específicas
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              2
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Automações de Lifecycle</h4>
              <p className="text-sm text-slate-700">
                Workflows automáticos para mover contatos através das etapas baseado em comportamento e engajamento
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              3
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Relatórios de Attribution</h4>
              <p className="text-sm text-slate-700">
                Entender quais canais e campanhas geram mais valor em cada etapa do flywheel
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              4
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Segmentação por Business Unit</h4>
              <p className="text-sm text-slate-700">
                Métricas separadas para LIV, DiaLab e MeuMundo, com visão consolidada quando necessário
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
