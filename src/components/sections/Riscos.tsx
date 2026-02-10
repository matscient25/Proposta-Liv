import { Card } from "@/components/ui/card";
import { AlertTriangle, Shield, TrendingDown, Clock } from "lucide-react";

export default function Riscos() {
  const riscos = [
    {
      categoria: "Riscos de Migração",
      icon: TrendingDown,
      nivel: "Alto",
      itens: [
        {
          risco: "Perda de histórico de interações durante migração",
          probabilidade: "Média",
          impacto: "Alto",
          mitigacao: [
            "Export completo do RD antes da migração",
            "Testes de migração em ambiente sandbox",
            "Validação por amostragem (10% dos contatos)",
            "Backup completo disponível por 90 dias"
          ]
        },
        {
          risco: "Dados inconsistentes ou duplicados na base",
          probabilidade: "Média",
          impacto: "Médio",
          mitigacao: [
            "Limpeza de dados pré-migração (fase Discovery)",
            "Uso de ferramentas de deduplicação do HubSpot",
            "Validação de campos obrigatórios",
            "Processo de quarentena para registros suspeitos"
          ]
        },
        {
          risco: "Quebra de integrações existentes",
          probabilidade: "Baixa",
          impacto: "Alto",
          mitigacao: [
            "Mapeamento completo de integrações atuais",
            "Testes de integração em sandbox",
            "Plano de rollback documentado",
            "Período de convivência RD + HubSpot"
          ]
        }
      ]
    },
    {
      categoria: "Riscos de Prazo",
      icon: Clock,
      nivel: "Médio",
      itens: [
        {
          risco: "Atraso no deadline do DiaLab para BETT (maio/2026)",
          probabilidade: "Baixa",
          impacto: "Crítico",
          mitigacao: [
            "DiaLab priorizado no roadmap (track paralela)",
            "Buffer de 2 semanas no cronograma",
            "Revisão semanal de progresso do DiaLab",
            "Recursos dedicados para DiaLab em abril-maio"
          ]
        },
        {
          risco: "Disponibilidade limitada do time LIV para validações",
          probabilidade: "Média",
          impacto: "Médio",
          mitigacao: [
            "Agendamento de sessões de validação com antecedência",
            "Uso de homologação assíncrona (vídeos, Loom)",
            "SLA de resposta acordado (48h para validações)",
            "Escalação para Fabi/Beny quando necessário"
          ]
        }
      ]
    },
    {
      categoria: "Riscos Operacionais",
      icon: AlertTriangle,
      nivel: "Médio",
      itens: [
        {
          risco: "Resistência à mudança do time de marketing",
          probabilidade: "Média",
          impacto: "Alto",
          mitigacao: [
            "Capacitação contínua desde o início do projeto",
            "Change management com comunicação clara de benefícios",
            "Quick wins demonstrados cedo (semana 3-4)",
            "Champions internos (Igor como Marketing Ops)"
          ]
        },
        {
          risco: "Curva de aprendizado impactando produtividade inicial",
          probabilidade: "Alta",
          impacto: "Médio",
          mitigacao: [
            "Período de convivência de 2 semanas (RD + HubSpot)",
            "Suporte SCIENT estendido por 30 dias pós go-live",
            "Documentação detalhada e vídeos de treinamento",
            "Office hours semanais para dúvidas"
          ]
        }
      ]
    },
    {
      categoria: "Riscos Técnicos",
      icon: Shield,
      nivel: "Baixo",
      itens: [
        {
          risco: "Limitações técnicas do HubSpot vs RD Station",
          probabilidade: "Baixa",
          impacto: "Médio",
          mitigacao: [
            "Discovery detalhado de funcionalidades críticas",
            "Validação de gaps na fase de planejamento",
            "Workarounds documentados para gaps identificados",
            "Uso de Custom Objects quando necessário"
          ]
        },
        {
          risco: "Performance degradada com base de 250k+ contatos",
          probabilidade: "Baixa",
          impacto: "Alto",
          mitigacao: [
            "HubSpot Enterprise dimensionado para essa volumetria",
            "Segmentação de listas para evitar timeouts",
            "Testes de carga durante migração",
            "Monitoramento de performance pós go-live"
          ]
        }
      ]
    }
  ];

  const getNivelColor = (nivel: string) => {
    const colors = {
      "Alto": "bg-red-100 text-red-800 border-red-300",
      "Médio": "bg-yellow-100 text-yellow-800 border-yellow-300",
      "Baixo": "bg-green-100 text-green-800 border-green-300"
    };
    return colors[nivel as keyof typeof colors] || colors.Médio;
  };

  const getProbabilidadeColor = (prob: string) => {
    const colors = {
      "Alta": "text-red-600",
      "Média": "text-yellow-600",
      "Baixa": "text-green-600"
    };
    return colors[prob as keyof typeof colors] || colors.Média;
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
        <div className="flex items-center gap-3 mb-3">
          <Shield className="w-6 h-6 text-orange-600" />
          <h2 className="text-2xl font-bold text-purple-900">Gestão de Riscos & Mitigações</h2>
        </div>
        <p className="text-slate-700">
          Identificação proativa de riscos potenciais e estratégias de mitigação para garantir
          o sucesso do projeto e minimizar impactos negativos.
        </p>
      </Card>

      {/* Matriz de Riscos */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-purple-900 mb-4">Matriz de Riscos</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mb-6">
          <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="text-3xl font-bold text-red-600">3</div>
            <div className="text-slate-700 font-semibold">Riscos Altos</div>
            <div className="text-xs text-slate-600 mt-1">Atenção máxima</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="text-3xl font-bold text-yellow-600">5</div>
            <div className="text-slate-700 font-semibold">Riscos Médios</div>
            <div className="text-xs text-slate-600 mt-1">Monitoramento ativo</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="text-3xl font-bold text-green-600">2</div>
            <div className="text-slate-700 font-semibold">Riscos Baixos</div>
            <div className="text-xs text-slate-600 mt-1">Monitoramento passivo</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-3xl font-bold text-blue-600">10</div>
            <div className="text-slate-700 font-semibold">Mitigações</div>
            <div className="text-xs text-slate-600 mt-1">Ações planejadas</div>
          </div>
        </div>
      </Card>

      {/* Riscos Detalhados */}
      {riscos.map((categoria, catIndex) => {
        const Icon = categoria.icon;
        return (
          <div key={catIndex} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-900">{categoria.categoria}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getNivelColor(categoria.nivel)}`}>
                Nível: {categoria.nivel}
              </span>
            </div>

            {categoria.itens.map((item, itemIndex) => (
              <Card key={itemIndex} className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">{item.risco}</h4>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Probabilidade: </span>
                      <span className={`font-semibold ${getProbabilidadeColor(item.probabilidade)}`}>
                        {item.probabilidade}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-600">Impacto: </span>
                      <span className={`font-semibold ${getProbabilidadeColor(item.impacto)}`}>
                        {item.impacto}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-purple-900 mb-2">🛡️ Estratégias de Mitigação:</h5>
                  <ul className="space-y-2">
                    {item.mitigacao.map((estrategia, estIndex) => (
                      <li key={estIndex} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>{estrategia}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        );
      })}

      {/* Plano de Contingência */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">📋 Plano de Contingência</h3>
        <div className="space-y-4 text-sm text-slate-700">
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Se a migração de dados falhar:</h4>
            <ul className="space-y-1 ml-4">
              <li>• Rollback para RD Station (backup completo disponível)</li>
              <li>• Re-execução de migração com ajustes identificados</li>
              <li>• Migração parcial por BU (LIV primeiro, depois MeuMundo/DiaLab)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Se o prazo do DiaLab for comprometido:</h4>
            <ul className="space-y-1 ml-4">
              <li>• Escopo mínimo viável para BETT (formulário + LP básica)</li>
              <li>• Recursos adicionais alocados (squad extra)</li>
              <li>• Extensão do cronograma de MeuMundo para priorizar DiaLab</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Se houver resistência do time:</h4>
            <ul className="space-y-1 ml-4">
              <li>• Sessões adicionais de treinamento hands-on</li>
              <li>• Período estendido de convivência (RD + HubSpot)</li>
              <li>• Suporte dedicado SCIENT por mais 30 dias</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Responsabilidades */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-purple-900 mb-4">👥 Responsabilidades de Gestão de Riscos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">SCIENT (PM - Matheus)</h4>
            <ul className="space-y-1 text-slate-700">
              <li>• Identificação e registro de riscos</li>
              <li>• Monitoramento semanal de riscos ativos</li>
              <li>• Escalação de riscos críticos</li>
              <li>• Execução de planos de mitigação</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">LIV (Igor + Liderança)</h4>
            <ul className="space-y-1 text-slate-700">
              <li>• Validação de riscos identificados</li>
              <li>• Aprovação de planos de contingência</li>
              <li>• Comunicação interna sobre riscos</li>
              <li>• Decisão de go/no-go em marcos críticos</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
