import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { useState } from "react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      categoria: "Sobre a Migração",
      perguntas: [
        {
          pergunta: "Quanto tempo leva a migração de 250k contatos do RD para o HubSpot?",
          resposta: "A migração técnica em si leva de 3 a 5 dias úteis (incluindo limpeza, export, import e validação). No entanto, reservamos 6-8 semanas no roadmap (Abril-Maio) para garantir que todo o processo seja feito com cuidado: limpeza de dados, testes, validação por amostragem, recriação de automações e um período de convivência entre RD e HubSpot."
        },
        {
          pergunta: "Vamos perder o histórico de interações dos contatos?",
          resposta: "Não. Preservaremos o máximo possível do histórico através de campos customizados, importação de atividades como 'notas' e uso de propriedades de data. Nossa meta é preservar 90%+ dos touchpoints importantes. O que não puder ser migrado automaticamente será documentado e mantido como backup no RD Station por 90 dias."
        },
        {
          pergunta: "Precisamos parar as operações de marketing durante a migração?",
          resposta: "Não é necessário. Trabalharemos com um período de 'convivência' de 2 semanas onde RD e HubSpot rodarão em paralelo. Isso permite que você continue enviando campanhas no RD enquanto testamos e validamos no HubSpot. Só desligaremos o RD quando tudo estiver 100% validado e aprovado pelo time LIV."
        },
        {
          pergunta: "As Landing Pages e templates de email vão ser migrados automaticamente?",
          resposta: "Não. Landing Pages e emails precisam ser recriados no HubSpot, pois as plataformas usam tecnologias diferentes. Mas faremos isso de forma estratégica: priorizaremos as Top 10 Landing Pages com melhor performance e os templates mais usados. O processo inclui melhoria de design e otimização para conversão, então muitas vezes o resultado é superior ao original."
        }
      ]
    },
    {
      categoria: "Sobre o Projeto",
      perguntas: [
        {
          pergunta: "Por que 6 meses? Não dá para fazer mais rápido?",
          resposta: "Tecnicamente conseguiríamos fazer em menos tempo, mas 6 meses é o ideal considerando: (1) 3 Business Units para configurar; (2) 250k+ contatos para migrar com qualidade; (3) Capacitação contínua do time; (4) Período de convivência e estabilização; (5) Deadline do DiaLab para BETT em maio. Um projeto mais rápido aumentaria riscos e comprometeria a qualidade."
        },
        {
          pergunta: "O que acontece se precisarmos de ajustes depois do go-live?",
          resposta: "A Opção A (Squad Dedicado) já inclui 6 meses de acompanhamento, cobrindo todo o período até agosto. Após o handover formal, oferecemos 30 dias adicionais de suporte estendido sem custo. Para ajustes pontuais após esse período, podemos trabalhar com modelo de horas avulsas ou retainer mensal, dependendo da necessidade."
        },
        {
          pergunta: "Vamos conseguir operar o HubSpot sozinhos depois?",
          resposta: "Sim! Um dos pilares da SCIENT é garantir autonomia do cliente. Por isso fazemos capacitação contínua (não só no final), documentação detalhada, playbooks operacionais e trabalhamos '4 mãos' durante a implementação. Ao final, o time terá skills para gerenciar operações do dia a dia. Para projetos mais complexos (integrações custom, automações avançadas), podemos apoiar pontualmente."
        },
        {
          pergunta: "Qual a diferença entre Opção A (Squad) e Opção B (Projeto Fechado)?",
          resposta: "Opção A: Squad dedicado por 6 meses, flexibilidade para ajustar escopo, acompanhamento contínuo até estabilização. Recomendado para projetos complexos como este. Opção B: Escopo fechado após discovery, entregas por marcos, menos flexibilidade. Exige definição detalhada do escopo antecipadamente. Para um projeto multi-BU com 250k contatos, recomendamos fortemente a Opção A."
        }
      ]
    },
    {
      categoria: "Sobre as Business Units",
      perguntas: [
        {
          pergunta: "Como funciona a separação entre as 3 Business Units?",
          resposta: "O HubSpot permite criar 'Business Units' dentro de uma mesma conta Enterprise. Cada BU tem: (1) Domínio próprio para conteúdo (ex: dialab.inteligenciadevida.com.br); (2) Opt-in e opt-out separados; (3) Templates de email exclusivos com branding específico; (4) Permissões de usuário por BU. Mas todos os dados ficam na mesma conta, permitindo cross-sell e visão unificada quando necessário."
        },
        {
          pergunta: "Um contato pode estar em mais de uma Business Unit?",
          resposta: "Sim! Um contato pode receber comunicações de múltiplas BUs (ex: uma escola parceira LIV também pode ser prospect do DiaLab). O HubSpot gerencia isso através de 'associações' e opt-ins separados. Vamos configurar regras claras para evitar over-communication (ex: limite de 2 emails/semana por contato, independente da BU)."
        },
        {
          pergunta: "O setup do DiaLab vai estar pronto para a BETT em maio?",
          resposta: "Sim, é uma prioridade crítica no roadmap. Dedicaremos uma track paralela exclusiva para o DiaLab em maio, com foco em: Landing Page de captação, formulários de cadastro, workflow de follow-up pós-evento, e integração com WhatsApp para agendamento de demos. O DiaLab estará 100% operacional para a BETT."
        }
      ]
    },
    {
      categoria: "Sobre Inteligência Artificial (Breeze AI)",
      perguntas: [
        {
          pergunta: "O que exatamente a Breeze AI faz?",
          resposta: "Breeze é a IA nativa do HubSpot que acelera operações através de 4 agentes: (1) Content Agent: gera blog posts, variações de copy, emails; (2) Social Agent: cria posts para redes sociais; (3) Prospecting Agent: enriquece dados de leads, faz scoring preditivo; (4) Customer Agent: chatbot inteligente em Landing Pages. Tudo isso integrado nativamente ao HubSpot, sem necessidade de ferramentas externas."
        },
        {
          pergunta: "A IA vai substituir o trabalho do time de marketing?",
          resposta: "Não. A IA é uma ferramenta de aceleração, não substituição. Ela ajuda em tarefas repetitivas (variações de copy, rascunhos de conteúdo, enriquecimento de dados), liberando o time para trabalho estratégico. Por exemplo: ao invés de escrever 10 versões de um email manualmente, a IA gera rascunhos e o time escolhe/ajusta a melhor versão. O fator humano e estratégico continua essencial."
        },
        {
          pergunta: "Tem custo adicional para usar a Breeze AI?",
          resposta: "A Breeze está incluída no Marketing Hub Enterprise sem custo adicional para uso básico (até um limite de queries/mês). Para uso intensivo, pode haver add-ons opcionais. Vamos configurar os 4 agentes e treinar o time no uso, já incluso na implementação."
        }
      ]
    },
    {
      categoria: "Sobre Integrações",
      perguntas: [
        {
          pergunta: "O HubSpot vai se integrar com Vendas e CS que já estão sendo implementados?",
          resposta: "Sim, é um dos pilares da solução! Como Vendas e CS já estão no HubSpot (Sales Hub e Service Hub), a integração é nativa. Configuraremos: (1) Handoff automático de MQL para Sales; (2) Sincronização de dados entre Marketing e Vendas; (3) Atribuição de receita multitoque; (4) Fluxos de CS baseados em comportamento de marketing (ex: NPS baixo → remoção de campanhas)."
        },
        {
          pergunta: "WhatsApp Business está incluído?",
          resposta: "Sim! Está incluída a integração do WhatsApp Business API com o HubSpot, permitindo: (1) Envio de mensagens via workflows; (2) Chatbot no WhatsApp; (3) Histórico de conversas no CRM; (4) Atendimento humano pelo WhatsApp via inbox do HubSpot. A licença inclui 3.000 conversas/mês (conforme proposta HubSpot)."
        },
        {
          pergunta: "Podemos integrar com Google Ads e Meta Ads?",
          resposta: "Sim, as integrações com Google Ads e Meta Ads são nativas do HubSpot e serão configuradas. Isso permite: (1) Sync de audiências para remarketing; (2) Tracking de conversões; (3) Atribuição de receita por campanha; (4) Otimização de audiences com base em dados do CRM."
        }
      ]
    },
    {
      categoria: "Sobre Capacitação",
      perguntas: [
        {
          pergunta: "Quantas horas de treinamento estão incluídas?",
          resposta: "A capacitação é contínua ao longo do projeto, não concentrada em um único momento. Inclui: (1) Treinamento hands-on durante a implementação (learning by doing); (2) Sessões formais para Marketing Ops (Igor) e time completo; (3) Documentação em vídeo de todos os processos; (4) Office hours semanais para dúvidas; (5) 30 dias de suporte estendido pós go-live. Total estimado: 40-60 horas de treinamento."
        },
        {
          pergunta: "Teremos acesso a materiais de apoio depois do projeto?",
          resposta: "Sim! Entregaremos: (1) Documentação completa de todos os processos (SOPs); (2) Playbooks operacionais por BU; (3) Vídeos gravados de treinamentos; (4) Biblioteca de recursos (templates, checklists); (5) Contatos para suporte pontual pós-projeto. Tudo isso fica com o time LIV para consulta futura."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let globalIndex = 0;

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
        <div className="flex items-center gap-3 mb-3">
          <HelpCircle className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-purple-900">Perguntas Frequentes (FAQs)</h2>
        </div>
        <p className="text-slate-700">
          Respostas detalhadas para as principais dúvidas sobre a implementação do HubSpot Marketing no LIV.
        </p>
      </Card>

      {faqs.map((categoria, catIndex) => (
        <div key={catIndex} className="space-y-3">
          <h3 className="text-xl font-semibold text-purple-900 flex items-center gap-2">
            <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">
              {catIndex + 1}
            </span>
            {categoria.categoria}
          </h3>

          <div className="space-y-2">
            {categoria.perguntas.map((faq, faqIndex) => {
              const currentIndex = globalIndex++;
              const isOpen = openIndex === currentIndex;

              return (
                <Card key={faqIndex} className="overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(currentIndex)}
                    className="w-full text-left p-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold text-lg mt-0.5">Q:</span>
                      <span className="flex-1 font-semibold text-slate-900 pr-4">
                        {faq.pergunta}
                      </span>
                      <span className={`text-purple-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 border-t border-slate-200 pt-4">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 font-bold text-lg">A:</span>
                        <p className="flex-1 text-slate-700 leading-relaxed">{faq.resposta}</p>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      ))}

      {/* Ainda tem dúvidas? */}
      <Card className="p-6 bg-purple-50 border-purple-200">
        <h3 className="text-lg font-semibold text-purple-900 mb-3">
          💬 Ainda tem dúvidas?
        </h3>
        <p className="text-slate-700 mb-4">
          Esta proposta cobre os pontos principais, mas estamos à disposição para esclarecer qualquer
          questão adicional antes do início do projeto.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">📧 Entre em contato</h4>
            <p className="text-slate-700">
              Email: contato@scient.cc<br />
              PM do Projeto: Matheus<br />
              Resposta em até 24h úteis
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">📅 Agende uma call</h4>
            <p className="text-slate-700">
              Podemos agendar uma call de 30min<br />
              para tirar dúvidas técnicas ou<br />
              comerciais sobre a proposta
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
