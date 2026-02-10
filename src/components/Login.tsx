"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface LoginProps {
  onLogin: (email: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (emailValue: string): boolean => {
    const emailRegex = /^[^\s@]+@(inteligenciadevida\.com\.br|scient\.cc|hubspot\.com)$/;
    return emailRegex.test(emailValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email.trim()) {
      setError("Por favor, insira seu e-mail");
      return;
    }

    if (!validateEmail(email)) {
      setError("Acesso restrito a e-mails @inteligenciadevida.com.br, @scient.cc ou @hubspot.com");
      return;
    }

    setLoading(true);
    // Simular validação
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        onLogin(email);
      }, 1500);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-purple-50 to-purple-100 p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
      </div>
      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl mb-4 shadow-lg">
            <span className="text-white font-bold text-2xl">L</span>
          </div>
          <h1 className="text-4xl font-bold text-purple-900 mb-1">LIV</h1>
          <p className="text-lg text-purple-700 font-semibold mb-2">Laboratório Inteligência de Vida</p>
          <p className="text-sm text-purple-600">Proposta Digital: HubSpot Marketing | Desenvolvido por SCIENT</p>
        </div>

        {/* Card */}
        <Card className="border-0 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          <CardHeader className="space-y-2 pb-6">
            <CardTitle className="text-2xl">Acesso à Proposta</CardTitle>
            <CardDescription>
              Insira seu e-mail corporativo para acessar a proposta completa
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                  E-mail Corporativo
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu.nome@inteligenciadevida.com.br"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  disabled={loading || success}
                  className="h-11 text-base"
                />
                <p className="text-xs text-purple-600 mt-1">
                  Acesso: @inteligenciadevida.com.br, @scient.cc ou @hubspot.com
                </p>
              </div>

              {/* Error Alert */}
              {error && (
                <Alert variant="destructive" className="bg-red-50 border-red-200">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Success Alert */}
              {success && (
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    E-mail validado! Acessando proposta...
                  </AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading || success}
                className="w-full h-11 text-base font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all duration-200"
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {success && <CheckCircle2 className="mr-2 h-4 w-4" />}
                {loading ? "Validando..." : success ? "Acesso Concedido" : "Acessar Proposta"}
              </Button>
            </form>

            {/* Footer Info */}
            <div className="mt-6 pt-6 border-t border-purple-200">
              <p className="text-xs text-purple-600 text-center">
                Proposta confidencial para o LIV - Laboratório Inteligência de Vida
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Branding */}
        <div className="mt-8 text-center">
          <p className="text-sm text-purple-700">
            Desenvolvido por <span className="font-semibold text-purple-900">SCIENT Consultoria</span>
          </p>
          <p className="text-xs text-purple-600 mt-1">
            Revenue Operations & HubSpot Implementation
          </p>
        </div>
      </div>
    </div>
  );
}
