import { Card } from "@/components/ui/card";
import { Lightbulb, GraduationCap, Users, Baby } from "lucide-react";

export default function CasosDeUso() {
  const casosDeUso = [
    {
      bu: "LIV - Marca Principal",
      icon: GraduationCap,
      cor: "purple",
      descricao: "Programa de educação socioemocional para escolas",
      casos: [
        {
          titulo: "Campanha de Matrículas 2027",
          cenario: "Campanha anual de captação de novas escolas parceiras para o ano letivo 2027",
          solucao: [
            "Landing Page com formulário de interesse (campo: tamanho da escola, cidade, rede)",
            "Workflow de nurturing automático baseado no estágio do funil",
            "Emails personalizados por região e tipo de escola (pública/privada)",
            "Handoff automático para Vendas quando MQL atingido (score > 50)",
            "Dashboard de atribuição mostrando ROI por canal (Ads, Orgânico, Eventos)"
          ],
          resultadoEsperado: "Aumento de 20% em leads qualificados vs 2026"
        },
        {
          titulo: "Nurturing de Escolas Existentes",
          cenario: "Manter engajamento e upsell para escolas que já são parceiras LIV",
          solucao: [
            "Segmentação de clientes por tipo de contrato (básico, premium)",
            "Newsletter mensal com conteúdo exclusivo sobre educação socioemocional",
            "Campanha de cross-sell para MeuMundo (famílias dos alunos)",
            "Automação de renovação de contrato (3 meses antes do vencimento)",
            "NPS automático e seguimento baseado em resposta"
          ],
          resultadoEsperado: "Taxa de renovação > 90%, cross-sell MeuMundo em 15% das escolas"
        }
      ]
    },
    {
      bu: "MeuMundo",
      icon: Users,
      cor: "cyan",
      descricao: "Plataforma complementar para famílias",
      casos: [
        {
          titulo: "Onboarding de Famílias via Escola",
          cenario: "Escola parceira LIV quer oferecer MeuMundo para as famílias dos alunos",
          solucao: [
            "Link de cadastro personalizado por escola (tracking de origem)",
            "Workflow de boas-vindas automático com vídeo explicativo",
            "Email sequencial com dicas de uso da plataforma (dias 1, 3, 7, 14)",
            "Push via WhatsApp para ativação de funcionalidades premium",
            "Webinar ao vivo mensal para novos usuários"
          ],
          resultadoEsperado: "Taxa de ativação > 60% nos primeiros 7 dias"
        },
        {
          titulo: "Retenção e Engajamento Contínuo",
          cenario: "Manter famílias engajadas e reduzir churn",
          solucao: [
            "Emails semanais com conteúdo sobre desenvolvimento infantil",
            "Notificações de novos cursos/conteúdos (baseado em interesses)",
            "Campanha de reengajamento para usuários inativos (30+ dias)",
            "Pesquisa de satisfação trimestral",
            "Programa de indicação (refer-a-friend) com incentivos"
          ],
          resultadoEsperado: "Churn < 5% ao mês, NPS > 70"
        }
      ]
    },
    {
      bu: "DiaLab",
      icon: Baby,
      cor: "green",
      descricao: "Formação para professores - Lançamento 2026",
      casos: [
        {
          titulo: "Campanha de Lançamento BETT 2026",
          cenario: "Lançamento do DiaLab na BETT (maio/2026) para captar primeiros clientes",
          solucao: [
            "Landing Page de pré-cadastro BETT com oferta early bird",
            "QR Code no estande da BETT linkando para LP",
            "Workflow de follow-up automático pós-evento (1h, 24h, 7 dias)",
            "Segmentação de leads por perfil (professor, coordenador, diretor)",
            "Campanha de WhatsApp para agendamento de demos"
          ],
          resultadoEsperado: "500+ leads captados na BETT, 10% de conversão em clientes"
        },
        {
          titulo: "Formação Contínua de Educadores",
          cenario: "Professores já clientes precisam de conteúdo contínuo e suporte",
          solucao: [
            "Biblioteca de recursos no Content Hub (vídeos, PDFs, templates)",
            "Email semanal com dica prática de sala de aula",
            "Comunidade online moderada (integração HubSpot + plataforma externa)",
            "Certificação de conclusão de cursos (automação de badge)",
            "Webinars mensais com especialistas"
          ],
          resultadoEsperado: "Engajamento > 40% (abertura de emails), certificações emitidas/mês > 100"
        }
      ]
    }
  ];

  const jornadas = [
    {
      titulo: "Jornada do Lead: Escola Interessada em LIV",
      etapas: [
        { fase: "Awareness", acao: "Diretor descobre LIV via Google Search", ferramenta: "Blog HubSpot + SEO" },
        { fase: "Consideration", acao: "Baixa ebook sobre educação socioemocional", ferramenta: "Landing Page + Form" },
        { fase: "Decision", acao: "Recebe emails de nurturing com cases", ferramenta: "Workflow automático" },
        { fase: "MQL", acao: "Score atinge 50 pontos, vira MQL", ferramenta: "Lead Scoring" },
        { fase: "Vendas", acao: "Deal criado automaticamente no Sales Hub", ferramenta: "Integração Mkt→Sales" },
        { fase: "Cliente", acao: "Contrato fechado, inicia onboarding", ferramenta: "Service Hub" }
      ]
    },
    {
      titulo: "Jornada do Cliente: Família no MeuMundo",
      etapas: [
        { fase: "Aquisição", acao: "Família recebe convite da escola", ferramenta: "Email personalizado" },
        { fase: "Onboarding", acao: "Cadastro e primeiro acesso à plataforma", ferramenta: "Workflow de boas-vindas" },
        { fase: "Ativação", acao: "Assiste primeiro curso/conteúdo", ferramenta: "Push via WhatsApp" },
        { fase: "Engajamento", acao: "Uso regular da plataforma (2x/semana)", ferramenta: "Emails semanais" },
        { fase: "Retenção", acao: "Renovação automática de assinatura", ferramenta: "Automação de billing" },
        { fase: "Advocacy", acao: "Indica MeuMundo para outras famílias", ferramenta: "Programa de referral" }
      ]
    }
  ];

  const getCorClasses = (cor: string) => {
    const classes = {
      purple: "bg-purple-100 border-purple-300",
      cyan: "bg-cyan-100 border-cyan-300",
      green: "bg-green-100 border-green-300"
    };
    return classes[cor as keyof typeof classes] || classes.purple;
  };

  const getIconColor = (cor: string) => {
    const colors = {
      purple: "text-purple-600",
      cyan: "text-cyan-600",
      green: "text-green-600"
    };
    return colors[cor as keyof typeof colors] || colors.purple;
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
        <div className="flex items-center gap-3 mb-3">
          <Lightbulb className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-purple-900">Casos de Uso Práticos</h2>
        </div>
        <p className="text-slate-700">
          Exemplos concretos de como cada Business Unit utilizará o HubSpot Marketing no dia a dia,
          demonstrando o valor prático da implementação.
        </p>
      </Card>

      {/* Casos de Uso por BU */}
      {casosDeUso.map((bu, buIndex) => {
        const Icon = bu.icon;
        return (
          <div key={buIndex} className="space-y-4">
            <div className={`p-4 rounded-lg border-2 ${getCorClasses(bu.cor)}`}>
              <div className="flex items-center gap-3">
                <Icon className={`w-6 h-6 ${getIconColor(bu.cor)}`} />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{bu.bu}</h3>
                  <p className="text-sm text-slate-600">{bu.descricao}</p>
                </div>
              </div>
            </div>

            {bu.casos.map((caso, casoIndex) => (
              <Card key={casoIndex} className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-purple-900 mb-2">
                    📌 {caso.titulo}
                  </h4>
                  <p className="text-slate-700 italic">"{caso.cenario}"</p>
                </div>

                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-slate-900 mb-2">💡 Solução HubSpot:</h5>
                  <ul className="space-y-2">
                    {caso.solucao.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-purple-600 mt-0.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-900">
                    <strong>🎯 Resultado Esperado:</strong> {caso.resultadoEsperado}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        );
      })}

      {/* Jornadas Completas */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-900">🗺️ Jornadas Completas do Cliente</h3>

        {jornadas.map((jornada, jIndex) => (
          <Card key={jIndex} className="p-6">
            <h4 className="text-lg font-semibold text-purple-900 mb-4">{jornada.titulo}</h4>

            <div className="space-y-3">
              {jornada.etapas.map((etapa, eIndex) => (
                <div key={eIndex} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {eIndex + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-purple-900">{etapa.fase}</span>
                      <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                        {etapa.ferramenta}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700">{etapa.acao}</p>
                  </div>
                  {eIndex < jornada.etapas.length - 1 && (
                    <div className="absolute left-8 top-10 w-0.5 h-6 bg-purple-300"></div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Automações-Chave */}
      <Card className="p-6 bg-purple-50 border-purple-200">
        <h3 className="text-lg font-semibold text-purple-900 mb-4">⚙️ Automações-Chave que Serão Configuradas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Automações de Aquisição</h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600">▸</span>
                <span>Lead magnet → Email de entrega → Nurturing sequencial</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">▸</span>
                <span>Formulário preenchido → Notificação Vendas → Task criada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">▸</span>
                <span>Score atingido → MQL flag → Deal automático</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">▸</span>
                <span>Evento BETT → Workflow follow-up 1h/24h/7d</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Automações de Retenção</h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">▸</span>
                <span>Cliente inativo 30d → Campanha de reengajamento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">▸</span>
                <span>Contrato vence em 90d → Workflow de renovação</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">▸</span>
                <span>NPS {'<'} 6 → Alerta CS + Task de follow-up</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">▸</span>
                <span>Uso da plataforma → Badge de certificação automático</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
