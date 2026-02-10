import { Card } from "@/components/ui/card";
import { GitBranch, Users, Zap, Target, RefreshCcw, Lightbulb, Rocket } from "lucide-react";

export default function Metodologia() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-blue-200 shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg shadow-lg">
            <GitBranch className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Nossa Metodologia: Dual Track Agile
          </h2>
        </div>
        <p className="text-slate-700 text-lg">
          Combinamos <strong>descoberta contínua</strong> com <strong>entrega incremental</strong> para maximizar valor e minimizar riscos
        </p>
      </Card>

      {/* Dual Track Visual */}
      <Card className="p-8 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>

        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Duas Tracks em Paralelo
        </h3>

        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          {/* Discovery Track */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold">Discovery Track</h4>
              </div>
              <p className="text-blue-50 mb-4">
                Exploração e validação contínua de ideias e requisitos
              </p>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-xl p-6 space-y-3">
              <h5 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Atividades
              </h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 font-bold">→</span>
                  <span><strong>Research:</strong> Entender necessidades e contexto</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 font-bold">→</span>
                  <span><strong>Ideação:</strong> Gerar e avaliar soluções</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 font-bold">→</span>
                  <span><strong>Validação:</strong> Testar hipóteses com usuários</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 font-bold">→</span>
                  <span><strong>Priorização:</strong> Definir o que entregar</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4">
              <p className="text-sm text-blue-900">
                <strong>Objetivo:</strong> Garantir que estamos construindo a coisa certa
              </p>
            </div>
          </div>

          {/* Delivery Track */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <Rocket className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold">Delivery Track</h4>
              </div>
              <p className="text-purple-50 mb-4">
                Implementação e entrega incremental de valor
              </p>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-xl p-6 space-y-3">
              <h5 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Atividades
              </h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1 font-bold">→</span>
                  <span><strong>Desenvolvimento:</strong> Construir features validadas</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1 font-bold">→</span>
                  <span><strong>Testes:</strong> Garantir qualidade e funcionamento</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1 font-bold">→</span>
                  <span><strong>Deploy:</strong> Entregar valor incremental</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1 font-bold">→</span>
                  <span><strong>Medição:</strong> Monitorar impacto e resultados</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-4">
              <p className="text-sm text-purple-900">
                <strong>Objetivo:</strong> Garantir que estamos construindo da forma certa
              </p>
            </div>
          </div>
        </div>

        {/* Fluxo de integração */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-sm">Discovery</div>
            <RefreshCcw className="w-6 h-6 text-indigo-600" />
            <div className="bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold text-sm">Delivery</div>
            <RefreshCcw className="w-6 h-6 text-indigo-600" />
            <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-sm">Feedback</div>
          </div>
          <p className="text-center text-sm text-slate-700">
            As tracks trabalham em <strong>paralelo e se alimentam continuamente</strong>, criando um ciclo de aprendizado e melhoria constante
          </p>
        </div>
      </Card>

      {/* Benefícios */}
      <Card className="p-6 shadow-xl">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-600" />
          Por que Dual Track Agile?
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-xl">
            <div className="w-10 h-10 mb-3 bg-green-600 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-green-900 mb-2">Reduz Desperdício</h4>
            <p className="text-sm text-green-800">
              Validamos antes de construir, evitando retrabalho e features desnecessárias
            </p>
          </div>

          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl">
            <div className="w-10 h-10 mb-3 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-blue-900 mb-2">Acelera Time-to-Market</h4>
            <p className="text-sm text-blue-800">
              Descoberta e entrega em paralelo significa entregas mais rápidas e contínuas
            </p>
          </div>

          <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-xl">
            <div className="w-10 h-10 mb-3 bg-purple-600 rounded-lg flex items-center justify-center">
              <RefreshCcw className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-purple-900 mb-2">Aprendizado Contínuo</h4>
            <p className="text-sm text-purple-800">
              Feedback constante permite ajustes rápidos e melhoria incremental
            </p>
          </div>
        </div>
      </Card>

      {/* Como aplicamos no projeto LIV */}
      <Card className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200 shadow-xl">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">
          Como Aplicamos no Projeto LIV
        </h3>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              1
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Sprint 0 - Discovery Intensivo</h4>
              <p className="text-sm text-slate-700">
                Mapeamento completo de processos, auditoria RD Station, e definição de arquitetura HubSpot
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              2
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Sprints 1-6 - Dual Track em Ação</h4>
              <p className="text-sm text-slate-700">
                Enquanto entregamos a migração LIV (delivery), já descobrimos requisitos para DiaLab e MeuMundo (discovery)
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              3
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Feedback e Ajustes Constantes</h4>
              <p className="text-sm text-slate-700">
                Retrospectivas quinzenais e validação contínua com stakeholders garantem que estamos no caminho certo
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
