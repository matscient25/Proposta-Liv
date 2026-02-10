"use client";

import { useState } from "react";
import Login from "@/components/Login";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-50 to-purple-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg shadow-lg">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <h1 className="text-3xl font-bold text-purple-900">LIV - Proposta Digital</h1>
              </div>
              <p className="text-purple-600 text-sm">HubSpot Marketing Hub | Desenvolvido por SCIENT</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-600">Acesso concedido para:</p>
              <p className="text-sm font-semibold text-purple-900">{userEmail}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Proposta: HubSpot Marketing Hub</h2>

          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Sobre o Projeto</h3>
              <p className="text-slate-700 leading-relaxed">
                Esta proposta apresenta uma solução completa de implementação do HubSpot Marketing Hub
                para o Laboratório Inteligência de Vida (LIV), com foco em automação de marketing,
                gestão de leads e otimização de processos comerciais.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Benefícios da Solução</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Automação completa de campanhas de marketing digital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Gestão centralizada de leads e oportunidades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Integração com processos de vendas e CRM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Análise avançada de performance e ROI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Personalização de jornadas do cliente</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Próximos Passos</h3>
              <p className="text-slate-700 leading-relaxed">
                Nossa equipe está pronta para apresentar os detalhes técnicos da implementação,
                cronograma de projeto e investimento necessário. Entre em contato para agendar
                uma reunião de apresentação completa.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-purple-200">
            <p className="text-center text-sm text-purple-600">
              Proposta confidencial - © {new Date().getFullYear()} SCIENT Consultoria
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
