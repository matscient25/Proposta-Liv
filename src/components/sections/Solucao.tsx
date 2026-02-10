import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function Solucao() {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
        <h2 className="text-2xl font-bold text-purple-900 mb-4">Nossa Solução</h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          Implementação completa do <strong>HubSpot Marketing Hub Enterprise</strong> com arquitetura multi-BU,
          migração de 250k+ contatos do RD Station, recriação de assets críticos, e integração total com
          Vendas e Customer Success através de Revenue Operations.
        </p>
      </Card>

      {/* Diferenciais da Solução */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-purple-900">Arquitetura Multi-BU</h3>
          </div>
          <p className="text-slate-700">
            Separação clara das 3 Business Units (LIV, MeuMundo, DiaLab) dentro de uma única conta Enterprise,
            com permissões, branding e fluxos independentes.
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-purple-900">Migração Completa</h3>
          </div>
          <p className="text-slate-700">
            Transferência de 250k+ contatos do RD Station preservando histórico, campos customizados,
            segmentações e principais automações recriadas no HubSpot.
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-purple-900">Content Hub + IA</h3>
          </div>
          <p className="text-slate-700">
            Blog gerenciado no HubSpot com SEO automático, recomendações de IA (Breeze),
            Brand Voice por BU e geração assistida de conteúdo.
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-purple-900">Integração Total</h3>
          </div>
          <p className="text-slate-700">
            Marketing, Vendas e CS trabalhando na mesma plataforma com visão unificada do cliente,
            rastreamento de ROI e handoff automático entre times.
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-purple-900">WhatsApp Business</h3>
          </div>
          <p className="text-slate-700">
            Integração nativa do WhatsApp Business API com HubSpot para atendimento,
            automações e campanhas via WhatsApp integradas ao CRM.
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-purple-900">Capacitação Completa</h3>
          </div>
          <p className="text-slate-700">
            Treinamento hands-on para 15 usuários, documentação detalhada, playbooks operacionais
            e acompanhamento durante período de convivência RD + HubSpot.
          </p>
        </Card>
      </div>

      {/* Tecnologias Utilizadas */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-purple-900 mb-4">Stack Tecnológico</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="font-semibold text-purple-900">HubSpot</p>
            <p className="text-sm text-slate-600">Marketing Hub Enterprise</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="font-semibold text-purple-900">Breeze AI</p>
            <p className="text-sm text-slate-600">Inteligência Artificial</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="font-semibold text-purple-900">Content Hub</p>
            <p className="text-sm text-slate-600">SEO + Blog</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="font-semibold text-purple-900">WhatsApp</p>
            <p className="text-sm text-slate-600">Business API</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
