import { Card } from "@/components/ui/card";

export default function Contexto() {
  return (
    <div className="space-y-6">
      {/* De Onde Estamos Partindo */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-purple-900 mb-6">De Onde Estamos Partindo</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stack Atual */}
          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Stack Atual</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>RD Station Marketing (LIV)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>RD separados (MeuMundo/DiaLab)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>3 marcas com comunicações isoladas</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>~250.000 contatos</span>
              </li>
            </ul>
          </div>

          {/* Contexto */}
          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Contexto</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Vendas em HubSpot (em implementação)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>CS em HubSpot (em implementação)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Necessidade de integração end-to-end</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Deadline: DiaLab pronto para BETT maio/2026</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Principais Dores */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-purple-900 mb-6">Principais Dores</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dores de Migração */}
          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Dores de Migração</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Histórico de leads não preservado</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Campos personalizados a reconstruir</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Automações não exportáveis</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Templates e LPs a reconstruir</span>
              </li>
            </ul>
          </div>

          {/* Dores Operacionais */}
          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Dores Operacionais</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Impossibilidade de separar marcas</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>CS usando conta de marketing</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Falta de integração mkt/vendas/CS</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Dificuldade de rastrear ROI</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
