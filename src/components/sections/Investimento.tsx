import { Card } from "@/components/ui/card";
import { CheckCircle2, DollarSign } from "lucide-react";

export default function Investimento() {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-purple-50 border-purple-200">
        <div className="flex items-center gap-3 mb-3">
          <DollarSign className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-purple-900">Modelos de Investimento</h2>
        </div>
        <p className="text-slate-700">
          Apresentamos duas opções de contratação para atender diferentes necessidades de flexibilidade e previsibilidade.
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Squad RevOps Dedicado */}
        <Card className="p-6 border-2 border-purple-600 relative">
          <div className="absolute top-4 right-4">
            <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Melhor Opção
            </span>
          </div>

          <h3 className="text-2xl font-bold text-purple-900 mb-2">Squad RevOps Dedicado</h3>
          <p className="text-sm text-slate-600 mb-6">Recomendado</p>

          <p className="text-slate-700 mb-6 leading-relaxed">
            Um squad focado em HubSpot Marketing dedicado ao projeto por 6 meses, garantindo dedicação
            contínua e flexibilidade para ajustes de escopo.
          </p>

          <div className="mb-6">
            <p className="text-sm text-slate-600 mb-1">Investimento Mensal</p>
            <p className="text-4xl font-bold text-purple-900">R$ 22.000</p>
          </div>

          <div className="mb-6 pb-6 border-b border-purple-200">
            <p className="text-sm text-slate-600 mb-1">Total (6 meses)</p>
            <p className="text-2xl font-bold text-purple-900">R$ 132.000</p>
          </div>

          <div className="space-y-3 mb-6">
            <h4 className="font-semibold text-purple-900">Por que recomendamos:</h4>
            {[
              "Configuração de 3 contas/BUs",
              "Migração de 250k+ contatos",
              "Integração paralela com Vendas/CS",
              "Flexibilidade para ajustes",
              "Acompanhamento até estabilização"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Projeto Fechado */}
        <Card className="p-6">
          <h3 className="text-2xl font-bold text-purple-900 mb-2">Projeto Fechado</h3>
          <p className="text-sm text-slate-600 mb-6">Escopo definido</p>

          <p className="text-slate-700 mb-6 leading-relaxed">
            Escopo fechado após discovery detalhado, com entregas por marcos definidos. Requer definição
            micro do escopo antes do início.
          </p>

          <div className="mb-6">
            <p className="text-sm text-slate-600 mb-1">Investimento Total</p>
            <p className="text-4xl font-bold text-purple-900">R$ 102.000</p>
          </div>

          <div className="mb-6 pb-6 border-b border-slate-200">
            <p className="text-sm text-slate-600 mb-1">Duração</p>
            <p className="text-2xl font-bold text-purple-900">Até 6 meses</p>
          </div>

          <div className="space-y-3 mb-6">
            <h4 className="font-semibold text-slate-900">Características:</h4>
            {[
              "Escopo fechado após discovery",
              "Entregas por marcos definidos",
              "Menos flexibilidade",
              "Requer planejamento detalhado"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Próximos Passos */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="text-lg font-semibold text-purple-900 mb-4">Próximos Passos</h3>
        <ol className="space-y-3">
          {[
            { num: 1, text: "✅ Validação do pré-projeto (Fabi/Beny) - 1ª semana de fevereiro", emoji: "✅" },
            { num: 2, text: "📝 Fechamento contrato HubSpot - Final de fevereiro", emoji: "📝" },
            { num: 3, text: "📊 Aprovação proposta SCIENT - Final de fevereiro", emoji: "📊" },
            { num: 4, text: "🚀 Kick-off presencial - 1ª semana de março", emoji: "🚀" },
            { num: 5, text: "🔍 Início Discovery - Março (Conforme Épico 1)", emoji: "🔍" }
          ].map((step) => (
            <li key={step.num} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                {step.num}
              </span>
              <span className="text-slate-700 pt-0.5">
                {step.emoji} {step.text}
              </span>
            </li>
          ))}
        </ol>
      </Card>

      {/* Observação */}
      <Card className="p-6 bg-slate-50">
        <p className="text-sm text-slate-600">
          <strong>Nota:</strong> Os valores não incluem a licença HubSpot Marketing Hub Enterprise,
          que deve ser contratada diretamente com a HubSpot. A SCIENT pode auxiliar no processo de
          fechamento e negociação com o time HubSpot.
        </p>
      </Card>
    </div>
  );
}
