"use client";

import { useState, useEffect } from "react";
import LandingCover from "@/components/LandingCover";
import Login from "@/components/Login";
import { Eye, FileText, Lightbulb, Rocket, Calendar, DollarSign, Sparkles, HelpCircle, RefreshCcw, GitBranch } from "lucide-react";
import VisaoGeral from "@/components/sections/VisaoGeral";
import GTMFlywheel from "@/components/sections/GTMFlywheel";
import Metodologia from "@/components/sections/Metodologia";
import Contexto from "@/components/sections/Contexto";
import Solucao from "@/components/sections/Solucao";
import Epicos from "@/components/sections/Epicos";
import Roadmap from "@/components/sections/Roadmap";
import CasosDeUso from "@/components/sections/CasosDeUso";
import Investimento from "@/components/sections/Investimento";
import FAQs from "@/components/sections/FAQs";

type Tab = "visao-geral" | "gtm-flywheel" | "metodologia" | "contexto" | "solucao" | "epicos" | "roadmap" | "casos-de-uso" | "investimento" | "faqs";

const AUTH_STORAGE_KEY = "liv_proposta_auth";
const COVER_VIEWED_KEY = "liv_proposta_cover_viewed";

export default function Home() {
  const [showCover, setShowCover] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("visao-geral");
  const [isLoading, setIsLoading] = useState(true);

  // Verificar autenticação persistente ao carregar
  useEffect(() => {
    // Verificar se a capa já foi visualizada
    const coverViewed = localStorage.getItem(COVER_VIEWED_KEY);
    if (coverViewed === "true") {
      setShowCover(false);
    }

    const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
    if (storedAuth) {
      try {
        const { email, timestamp } = JSON.parse(storedAuth);
        // Verificar se a sessão não expirou (7 dias)
        const sevenDays = 7 * 24 * 60 * 60 * 1000;
        if (Date.now() - timestamp < sevenDays) {
          setUserEmail(email);
          setIsAuthenticated(true);
          setShowCover(false); // Se já está autenticado, não mostrar capa
        } else {
          // Sessão expirada, limpar
          localStorage.removeItem(AUTH_STORAGE_KEY);
        }
      } catch (error) {
        console.error("Erro ao recuperar autenticação:", error);
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  const handleViewProposal = () => {
    setShowCover(false);
    localStorage.setItem(COVER_VIEWED_KEY, "true");
  };

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setIsAuthenticated(true);
    // Salvar no localStorage com timestamp
    localStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify({ email, timestamp: Date.now() })
    );
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserEmail("");
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-purple-50 to-purple-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-purple-900 font-medium">Carregando...</p>
        </div>
      </div>
    );
  }

  // Mostrar capa primeiro
  if (showCover) {
    return <LandingCover onViewProposal={handleViewProposal} />;
  }

  // Depois mostrar login
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  const tabs = [
    { id: "visao-geral" as Tab, label: "Visão Geral", icon: Eye },
    { id: "gtm-flywheel" as Tab, label: "GTM Flywheel", icon: RefreshCcw },
    { id: "metodologia" as Tab, label: "Metodologia", icon: GitBranch },
    { id: "contexto" as Tab, label: "Contexto", icon: FileText },
    { id: "solucao" as Tab, label: "Solução", icon: Lightbulb },
    { id: "epicos" as Tab, label: "Épicos", icon: Rocket },
    { id: "roadmap" as Tab, label: "Roadmap", icon: Calendar },
    { id: "casos-de-uso" as Tab, label: "Casos de Uso", icon: Sparkles },
    { id: "investimento" as Tab, label: "Investimento", icon: DollarSign },
    { id: "faqs" as Tab, label: "FAQs", icon: HelpCircle },
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
              <p className="text-sm font-semibold text-purple-900 truncate max-w-xs mb-2">{userEmail}</p>
              <button
                onClick={handleLogout}
                className="text-xs text-purple-600 hover:text-purple-800 underline transition-colors"
              >
                Sair
              </button>
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
          {activeTab === "gtm-flywheel" && <GTMFlywheel />}
          {activeTab === "metodologia" && <Metodologia />}
          {activeTab === "contexto" && <Contexto />}
          {activeTab === "solucao" && <Solucao />}
          {activeTab === "epicos" && <Epicos />}
          {activeTab === "roadmap" && <Roadmap />}
          {activeTab === "casos-de-uso" && <CasosDeUso />}
          {activeTab === "investimento" && <Investimento />}
          {activeTab === "faqs" && <FAQs />}
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
