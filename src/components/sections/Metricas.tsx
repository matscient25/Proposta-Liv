import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Users, Zap, BarChart3, CheckCircle } from "lucide-react";

export default function Metricas() {
  const kpis = [
    {
      categoria: "Migração & Setup",
      icon: Zap,
      metricas: [
        { nome: "Taxa de migração de contatos", meta: "100% dos contatos válidos migrados", baseline: "0%" },
        { nome: "Preservação de histórico", meta: "90% dos touchpoints preservados", baseline: "0%" },
        { nome: "Tempo de setup por BU", meta: "< 4 semanas por BU", baseline: "N/A" },
        { nome: "Landing Pages recriadas", meta: "Top 10 LPs em produção", baseline: "0" }
      ]
    },
    {
      categoria: "Adoção & Uso",
      icon: Users,
      metricas: [
        { nome: "Usuários ativos semanalmente", meta: "100% (15 usuários)", baseline: "0%" },
        { nome: "Taxa de conclusão de treinamento", meta: "100% do time treinado", baseline: "0%" },
        { nome: "Net Promoter Score (NPS) interno", meta: "> 8/10", baseline: "N/A" },
        { nome: "Tempo para autonomia", meta: "< 30 dias pós go-live", baseline: "N/A" }
      ]
    },
    {
      categoria: "Performance de Marketing",
      icon: TrendingUp,
      metricas: [
        { nome: "Taxa de entrega de emails", meta: "> 95%", baseline: "~90%" },
        { nome: "Leads qualificados por mês", meta: "+20% vs baseline", baseline: "Atual RD" },
        { nome: "Taxa de conversão LP", meta: "+15% vs baseline", baseline: "Atual RD" },
        { nome: "Tempo médio de resposta WhatsApp", meta: "< 2h durante horário comercial", baseline: "N/A" }
      ]
    },
    {
      categoria: "ROI & Atribuição",
      icon: BarChart3,
      metricas: [
        { nome: "Visibilidade de atribuição", meta: "100% dos deals com atribuição", baseline: "< 30%" },
        { nome: "CAC (Custo de Aquisição)", meta: "-10% vs baseline", baseline: "Atual" },
        { nome: "Cycle time de lead a customer", meta: "-15% vs baseline", baseline: "Atual" },
        { nome: "ROI de campanhas trackável", meta: "100% das campanhas", baseline: "< 40%" }
      ]
    },
    {
      categoria: "Integração & Automação",
      icon: Zap,
      metricas: [
        { nome: "Automações ativas", meta: "> 15 workflows em produção", baseline: "0" },
        { nome: "Taxa de handoff Mkt→Vendas", meta: "> 90% automático", baseline: "Manual" },
        { nome: "Breeze AI queries mensais", meta: "> 500 queries/mês", baseline: "0" },
        { nome: "Uptime da plataforma", meta: "> 99.9%", baseline: "N/A" }
      ]
    },
    {
      categoria: "Conteúdo & SEO",
      icon: Target,
      metricas: [
        { nome: "Blog posts publicados/mês", meta: "> 8 posts/mês", baseline: "~4/mês" },
        { nome: "SEO score médio", meta: "> 85/100", baseline: "~70/100" },
        { nome: "Tráfego orgânico", meta: "+30% em 6 meses", baseline: "Atual" },
        { nome: "Content library itens", meta: "> 100 assets catalogados", baseline: "0" }
      ]
    }
  ];

  const criteriosAceitacao = [
    {
      fase: "Discovery & Fundação",
      criterios: [
        "Mapeamento completo de processos das 3 BUs documentado",
        "Auditoria RD Station finalizada com relatório de gaps",
        "Arquitetura de campos aprovada pelo time LIV",
        "3 Business Units configuradas e testadas",
        "15 usuários criados com permissões corretas"
      ]
    },
    {
      fase: "Migração LIV",
      criterios: [
        "225k contatos migrados com taxa de erro < 1%",
        "Histórico de interações preservado em 90%+ dos contatos",
        "Top 10 Landing Pages em produção e aprovadas",
        "Templates de email recriados e testados (A/B test)",
        "WhatsApp Business integrado e funcional"
      ]
    },
    {
      fase: "Setup BUs (MeuMundo & DiaLab)",
      criterios: [
        "MeuMundo operacional com 10k contatos migrados",
        "DiaLab pronto para BETT maio/2026 com formulários e LPs ativos",
        "Cross-sell configurado entre as 3 BUs",
        "Opt-in separado funcionando por BU",
        "Branding e domínios específicos configurados"
      ]
    },
    {
      fase: "Content Hub & IA",
      criterios: [
        "Blog HubSpot publicando conteúdo regularmente",
        "SEO recommendations implementadas em 100% das páginas",
        "Biblioteca de conteúdo com > 50 assets catalogados",
        "4 Breeze Agents configurados e em uso",
        "Brand Voice definido para cada BU"
      ]
    },
    {
      fase: "Go-Live & Handover",
      criterios: [
        "100% do time (15 usuários) treinado e certificado",
        "Documentação completa entregue (playbooks, SOPs)",
        "RD Station desligado sem impacto nas operações",
        "Período de convivência de 2 semanas concluído",
        "Handover formal aceito pela liderança LIV"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
        <div className="flex items-center gap-3 mb-3">
          <Target className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-bold text-purple-900">Métricas de Sucesso & KPIs</h2>
        </div>
        <p className="text-slate-700">
          Definição clara de sucesso através de KPIs mensuráveis e critérios de aceitação objetivos
          para cada fase do projeto.
        </p>
      </Card>

      {/* KPIs por Categoria */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-900">KPIs de Acompanhamento</h3>

        {kpis.map((categoria, index) => {
          const Icon = categoria.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-purple-900">{categoria.categoria}</h4>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 text-slate-700 font-semibold">Métrica</th>
                      <th className="text-left py-2 text-slate-700 font-semibold">Meta</th>
                      <th className="text-left py-2 text-slate-700 font-semibold">Baseline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoria.metricas.map((metrica, mIndex) => (
                      <tr key={mIndex} className="border-b border-slate-100">
                        <td className="py-3 text-slate-900">{metrica.nome}</td>
                        <td className="py-3 text-green-700 font-semibold">{metrica.meta}</td>
                        <td className="py-3 text-slate-600">{metrica.baseline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Critérios de Aceitação */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-900">Critérios de Aceitação por Fase</h3>

        {criteriosAceitacao.map((fase, index) => (
          <Card key={index} className="p-6 bg-blue-50 border-blue-200">
            <h4 className="text-lg font-semibold text-blue-900 mb-4">{fase.fase}</h4>
            <ul className="space-y-2">
              {fase.criterios.map((criterio, cIndex) => (
                <li key={cIndex} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{criterio}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      {/* Como Medimos o Sucesso */}
      <Card className="p-6 bg-purple-50 border-purple-200">
        <h3 className="text-lg font-semibold text-purple-900 mb-4">Como Mediremos o Sucesso</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">📊 Dashboards de Acompanhamento</h4>
            <ul className="space-y-1">
              <li>• Dashboard semanal de progresso do projeto</li>
              <li>• Relatórios quinzenais de KPIs</li>
              <li>• Alertas automáticos para desvios</li>
              <li>• Review mensal com stakeholders</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">✅ Gates de Qualidade</h4>
            <ul className="space-y-1">
              <li>• Sign-off formal em cada épico</li>
              <li>• Testes de aceitação do usuário (UAT)</li>
              <li>• Período de homologação por BU</li>
              <li>• Go/No-go decision baseada em critérios</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Definição de Done */}
      <Card className="p-6 bg-green-50 border-green-300">
        <h3 className="text-lg font-semibold text-green-900 mb-3">✅ Definição de "Projeto Concluído"</h3>
        <p className="text-slate-700 mb-4">
          O projeto será considerado concluído quando <strong>TODOS</strong> os seguintes critérios forem atendidos:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">1.</span>
              <span>Todas as 3 BUs operacionais no HubSpot</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">2.</span>
              <span>250k+ contatos migrados e validados</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">3.</span>
              <span>15 usuários treinados e autônomos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">4.</span>
              <span>RD Station desligado sem impacto</span>
            </li>
          </ul>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">5.</span>
              <span>Integração Mkt/Vendas/CS funcionando</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">6.</span>
              <span>Atribuição de receita trackável</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">7.</span>
              <span>Documentação completa entregue</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">8.</span>
              <span>Handover formal aceito pela liderança</span>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
