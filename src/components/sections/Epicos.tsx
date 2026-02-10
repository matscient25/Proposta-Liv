import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingUp, Users, Sparkles, GraduationCap } from "lucide-react";

export default function Epicos() {
  const epicos = [
    {
      numero: 1,
      titulo: "Discovery & Fundação",
      prioridade: "Crítica",
      icon: AlertCircle,
      color: "red",
      tarefas: [
        "Mapeamento de processos por BU",
        "Auditoria completa do RD Station",
        "Definição de campos HubSpot",
        "Configuração das 3 Business Units",
        "Setup de usuários e permissões"
      ]
    },
    {
      numero: 2,
      titulo: "Migração LIV (Marca Principal)",
      prioridade: "Crítica",
      icon: TrendingUp,
      color: "red",
      tarefas: [
        "Limpeza e preparação da base (225k)",
        "Migração de contatos com histórico",
        "Recriação de Landing Pages (Top 10)",
        "Migração de templates de email",
        "Configuração de automações",
        "Integração WhatsApp Business"
      ]
    },
    {
      numero: 3,
      titulo: "MeuMundo & DiaLab",
      prioridade: "Alta",
      icon: Users,
      color: "orange",
      tarefas: [
        "Setup completo MeuMundo",
        "Setup DiaLab do zero",
        "Configuração de cross-sell",
        "Priorização para BETT maio/2026"
      ]
    },
    {
      numero: 4,
      titulo: "Content Hub & IA",
      prioridade: "Média-Alta",
      icon: Sparkles,
      color: "yellow",
      tarefas: [
        "Blog HubSpot configurado",
        "SEO recommendations ativos",
        "Biblioteca de conteúdo centralizada",
        "Breeze Agents configurados",
        "Brand Voice por BU definido"
      ]
    },
    {
      numero: 5,
      titulo: "Capacitação & Go-Live",
      prioridade: "Crítica",
      icon: GraduationCap,
      color: "red",
      tarefas: [
        "Treinamento Marketing Ops",
        "Treinamento time completo (15 usuários)",
        "Documentação e playbooks",
        "Período de convivência RD + HubSpot",
        "Desligamento RD Station",
        "Handover formal"
      ]
    }
  ];

  const getPriorityColor = (color: string) => {
    const colors = {
      red: "bg-red-100 border-red-300 text-red-800",
      orange: "bg-orange-100 border-orange-300 text-orange-800",
      yellow: "bg-yellow-100 border-yellow-300 text-yellow-800"
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  const getIconColor = (color: string) => {
    const colors = {
      red: "text-red-600",
      orange: "text-orange-600",
      yellow: "text-yellow-600"
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  return (
    <div className="space-y-6">
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-purple-900 mb-2">Épicos de Implementação</h2>
        <p className="text-slate-700">
          A implementação está dividida em 5 épicos estratégicos, priorizados para garantir que as
          necessidades críticas sejam atendidas primeiro, especialmente o deadline da BETT em maio/2026.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {epicos.map((epico) => {
          const Icon = epico.icon;
          return (
            <Card key={epico.numero} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${epico.color === 'red' ? 'bg-red-100' : epico.color === 'orange' ? 'bg-orange-100' : 'bg-yellow-100'}`}>
                  <Icon className={`w-6 h-6 ${getIconColor(epico.color)}`} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-purple-900">
                      Épico {epico.numero}: {epico.titulo}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(epico.color)}`}>
                      {epico.prioridade}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {epico.tarefas.map((tarefa, index) => (
                      <li key={index} className="flex items-start text-slate-700">
                        <span className="text-purple-600 mr-2 mt-1">→</span>
                        <span>{tarefa}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="text-lg font-semibold text-purple-900 mb-2">Nota Importante</h3>
        <p className="text-slate-700">
          Os Épicos 1 e 2 são <strong>críticos e sequenciais</strong> - devem ser concluídos antes dos demais.
          O Épico 3 tem deadline fixo (BETT maio/2026) e será priorizado no cronograma.
        </p>
      </Card>
    </div>
  );
}
