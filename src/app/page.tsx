"use client";

import { useState } from "react";
import Login from "@/components/Login";
import { Eye, FileText, Lightbulb, Rocket, Calendar, DollarSign } from "lucide-react";
import VisaoGeral from "@/components/sections/VisaoGeral";
import Contexto from "@/components/sections/Contexto";
import Solucao from "@/components/sections/Solucao";
import Epicos from "@/components/sections/Epicos";
import Roadmap from "@/components/sections/Roadmap";
import Investimento from "@/components/sections/Investimento";

type Tab = "visao-geral" | "contexto" | "solucao" | "epicos" | "roadmap" | "investimento";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("visao-geral");

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  const tabs = [
    { id: "visao-geral" as Tab, label: "Visão Geral", icon: Eye },
    { id: "contexto" as Tab, label: "Contexto", icon: FileText },
    { id: "solucao" as Tab, label: "Solução", icon: Lightbulb },
    { id: "epicos" as Tab, label: "Épicos", icon: Rocket },
    { id: "roadmap" as Tab, label: "Roadmap", icon: Calendar },
    { id: "investimento" as Tab, label: "Investimento", icon: DollarSign },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-50 to-purple-100">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg shadow-lg">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-purple-900">SCIENT</h1>
                  <p className="text-xs text-purple-600">Proposta Digital</p>
                </div>
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-slate-700">
                Implementação HubSpot Marketing
              </h2>
              <p className="text-sm text-slate-600">LIV - Laboratório Inteligência de Vida</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm text-slate-600">Acesso concedido para:</p>
              <p className="text-sm font-semibold text-purple-900 truncate max-w-xs">{userEmail}</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-6 border-t border-purple-200 pt-6">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all ${
                      activeTab === tab.id
                        ? "bg-primary text-white shadow-md"
                        : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          {activeTab === "visao-geral" && <VisaoGeral />}
          {activeTab === "contexto" && <Contexto />}
          {activeTab === "solucao" && <Solucao />}
          {activeTab === "epicos" && <Epicos />}
          {activeTab === "roadmap" && <Roadmap />}
          {activeTab === "investimento" && <Investimento />}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-sm text-purple-700">
            <span className="font-semibold">SCIENT Consultoria</span>
          </p>
          <p className="text-xs text-purple-600">
            Revenue Operations & HubSpot Implementation
          </p>
          <div className="pt-4">
            <p className="text-xs text-purple-600">
              © {new Date().getFullYear()} SCIENT Consultoria. Proposta Confidencial - Destinada apenas a membros autorizados do LIV.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
