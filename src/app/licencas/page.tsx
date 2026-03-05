'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LogOut } from 'lucide-react';
import { usuariosData, getLicencaLabel, getStatusConviteLabel } from '@/lib/usuarios-data';

export default function LicencasPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [selectedLicenca, setSelectedLicenca] = useState<string | null>(null);

  useEffect(() => {
    const userEmail = localStorage.getItem('user_email');
    const isAuthenticated = localStorage.getItem('user_authenticated');

    if (!isAuthenticated) {
      router.push('/');
    } else {
      setEmail(userEmail || '');
    }
  }, [router]);

  // Obter lista de tipos de licença
  const tiposLicenca = Array.from(new Set(usuariosData.map(u => u.tipo_licenca)));

  // Filtrar usuários pela licença selecionada
  const usuariosFiltrados = selectedLicenca
    ? usuariosData.filter(u => u.tipo_licenca === selectedLicenca)
    : [];

  const handleLogout = () => {
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_authenticated');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Gestão de Licenças</h1>
              <p className="text-sm text-gray-600">Bem-vindo, {email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              <LogOut className="w-5 h-5" />
              Sair
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <button
              onClick={() => router.push('/dashboard')}
              className="px-4 py-3 border-b-2 border-transparent text-gray-600 hover:border-gray-300 font-medium"
            >
              Dashboard
            </button>
            <button
              onClick={() => router.push('/licencas')}
              className="px-4 py-3 border-b-2 border-blue-600 text-blue-600 font-medium"
            >
              Filtrar por Licença
            </button>
            <button
              onClick={() => router.push('/reordenamento')}
              className="px-4 py-3 border-b-2 border-transparent text-gray-600 hover:border-gray-300 font-medium"
            >
              Reordenamento
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Tipos de Licença */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Tipos de Licença</h2>
            <div className="space-y-2">
              {tiposLicenca.map((tipo) => {
                const count = usuariosData.filter(u => u.tipo_licenca === tipo).length;
                return (
                  <button
                    key={tipo}
                    onClick={() => setSelectedLicenca(tipo)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      selectedLicenca === tipo
                        ? 'bg-blue-100 border-l-4 border-blue-600 text-blue-900'
                        : 'hover:bg-gray-100 border-l-4 border-transparent'
                    }`}
                  >
                    <p className="font-medium">{getLicencaLabel(tipo)}</p>
                    <p className="text-xs text-gray-600">{count} usuário(s)</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Listagem de Usuários */}
          <div className="lg:col-span-3">
            {selectedLicenca ? (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Usuários - {getLicencaLabel(selectedLicenca)}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-gray-200">
                      <tr>
                        <th className="text-left text-sm font-medium text-gray-700 py-3">Nome</th>
                        <th className="text-left text-sm font-medium text-gray-700 py-3">Email</th>
                        <th className="text-left text-sm font-medium text-gray-700 py-3">Status do Convite</th>
                        <th className="text-left text-sm font-medium text-gray-700 py-3">Último Acesso</th>
                        <th className="text-left text-sm font-medium text-gray-700 py-3">Equipe</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usuariosFiltrados.map((user) => (
                        <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-3 text-sm font-medium text-gray-900">
                            {user.nome} {user.sobrenome}
                          </td>
                          <td className="py-3 text-sm text-gray-600">{user.email}</td>
                          <td className="py-3 text-sm">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              user.status_convite === 'invite_accepted' ? 'bg-green-100 text-green-700'
                              : user.status_convite === 'invite_pending' ? 'bg-yellow-100 text-yellow-700'
                              : user.status_convite === 'invite_bounced' ? 'bg-red-100 text-red-700'
                              : 'bg-gray-100 text-gray-700'
                            }`}>
                              {getStatusConviteLabel(user.status_convite)}
                            </span>
                          </td>
                          <td className="py-3 text-sm text-gray-600">{user.ultimo_acesso}</td>
                          <td className="py-3 text-sm text-gray-600">{user.equipe_primaria}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <p className="text-gray-600">Selecione um tipo de licença para ver os usuários</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
