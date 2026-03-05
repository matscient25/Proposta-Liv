'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Users, UserCheck, Award, LogOut } from 'lucide-react';
import { usuariosData, getLicencaLabel } from '@/lib/usuarios-data';

export default function DashboardPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const userEmail = localStorage.getItem('user_email');
    const isAuthenticated = localStorage.getItem('user_authenticated');

    if (!isAuthenticated) {
      router.push('/');
    } else {
      setEmail(userEmail || '');
    }
  }, [router]);

  const totalUsuarios = usuariosData.length;
  const usuariosAtivos = usuariosData.filter(u => u.status === 'ativo').length;

  // Contar por tipo de licença
  const licencasCount: { [key: string]: number } = {};
  usuariosData.forEach(u => {
    const tipo = u.tipo_licenca || 'N/A';
    licencasCount[tipo] = (licencasCount[tipo] || 0) + 1;
  });

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
              className="px-4 py-3 border-b-2 border-blue-600 text-blue-600 font-medium"
            >
              Dashboard
            </button>
            <button
              onClick={() => router.push('/licencas')}
              className="px-4 py-3 border-b-2 border-transparent text-gray-600 hover:border-gray-300 font-medium"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total de Usuários */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total de Usuários</p>
                <p className="text-3xl font-bold text-gray-900">{totalUsuarios}</p>
              </div>
              <Users className="w-12 h-12 text-blue-500" />
            </div>
          </div>

          {/* Usuários Ativos */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Usuários Ativos</p>
                <p className="text-3xl font-bold text-gray-900">{usuariosAtivos}</p>
                <p className="text-xs text-gray-500 mt-1">{Math.round((usuariosAtivos / totalUsuarios) * 100)}% do total</p>
              </div>
              <UserCheck className="w-12 h-12 text-green-500" />
            </div>
          </div>

          {/* Licenças Atribuídas */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Licenças Atribuídas</p>
                <p className="text-3xl font-bold text-gray-900">{Object.keys(licencasCount).length}</p>
                <p className="text-xs text-gray-500 mt-1">tipos diferentes</p>
              </div>
              <Award className="w-12 h-12 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Distribuição por Tipo de Licença */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Distribuição por Tipo de Licença</h2>
          <div className="space-y-3">
            {Object.entries(licencasCount).map(([tipo, count]) => (
              <div key={tipo} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">{getLicencaLabel(tipo)}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(count / totalUsuarios) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <span className="ml-4 text-sm font-medium text-gray-900">{count} ({Math.round((count / totalUsuarios) * 100)}%)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Últimos Usuários */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Últimos Usuários Adicionados</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="text-left text-sm font-medium text-gray-700 py-3">Nome</th>
                  <th className="text-left text-sm font-medium text-gray-700 py-3">Email</th>
                  <th className="text-left text-sm font-medium text-gray-700 py-3">Tipo de Licença</th>
                  <th className="text-left text-sm font-medium text-gray-700 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {usuariosData.slice(0, 5).map((user) => (
                  <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 text-sm text-gray-900">{user.nome} {user.sobrenome}</td>
                    <td className="py-3 text-sm text-gray-600">{user.email}</td>
                    <td className="py-3 text-sm">{getLicencaLabel(user.tipo_licenca)}</td>
                    <td className="py-3 text-sm">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        user.status === 'ativo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {user.status === 'ativo' ? 'Ativo' : 'Inativo'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
