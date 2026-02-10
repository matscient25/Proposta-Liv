"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface LandingCoverProps {
  onViewProposal: () => void;
}

export default function LandingCover({ onViewProposal }: LandingCoverProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="w-full max-w-4xl relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
        {/* Logo/Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl mb-8 shadow-2xl border border-white/20 animate-in zoom-in duration-700 delay-200">
          <span className="text-white font-bold text-4xl">L</span>
        </div>

        {/* Company name */}
        <div className="mb-6 animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
          <p className="text-purple-200 text-lg font-semibold mb-2 tracking-wide">
            LIV - Laboratório Inteligência de Vida
          </p>
        </div>

        {/* Main title */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 animate-in fade-in zoom-in duration-700 delay-400">
          <span className="bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
            Proposta Comercial
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/90 to-pink-500/90 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-white" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              HubSpot Marketing
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-purple-100 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600">
          Transformação digital do marketing com implementação completa do HubSpot para suas 3 Business Units
        </p>

        {/* CTA Button */}
        <div className="animate-in fade-in zoom-in duration-700 delay-700">
          <Button
            onClick={onViewProposal}
            size="lg"
            className="h-16 px-10 text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            <span className="relative z-10 flex items-center gap-3">
              Visualizar a Proposta
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>

        {/* Footer info */}
        <div className="mt-16 pt-8 border-t border-white/10 animate-in fade-in duration-700 delay-900">
          <p className="text-purple-200 text-sm mb-2">
            Desenvolvido por <span className="font-bold text-white">SCIENT Consultoria</span>
          </p>
          <p className="text-purple-300 text-xs">
            Revenue Operations & HubSpot Implementation Partner
          </p>
        </div>
      </div>
    </div>
  );
}
