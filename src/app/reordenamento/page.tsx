'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LogOut, Download, Send } from 'lucide-react';
import { usuariosData, getLicencaLabel } from '@/lib/usuarios-data';

interface UsuarioReordenamento {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  licenca_original: string;
  licenca_nova: string | null;
}

export default function ReordenamentoPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [usuarios, setUsuarios] = useState<UsuarioReordenamento[]>([]);
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem('user_email');
    const isAuthenticated = localStorage.getItem('user_authenticated');

    if (!isAuthenticated) {
      router.push('/');
    } else {
      setEmail(userEmail || '');
      // Inicializar dados
      setUsuarios(usuariosData.map(u => ({
        id: u.id,
        nome: u.nome,
        sobrenome: u.sobrenome,
        email: u.email,
        licenca_original: u.tipo_licenca,
        licenca_nova: null,
      })));
    }
  }, [router]);

  const tiposLicenca = Array.from(new Set(usuariosData.map(u => u.tipo_licenca)));

  const usuariosComAlteracao = usuarios.filter(u => u.licenca_nova !== null && u.licenca_nova !== u.licenca_original);

  const handleMudarLicenca = (id: string, novaLicenca: string) => {
    setUsuarios(usuarios.map(u => u.id === id ? { ...u, licenca_nova: novaLicenca } : u));
  };

  const handleResetarLicenca = (id: string) => {
    setUsuarios(usuarios.map(u => u.id === id ? { ...u, licenca_nova: null } : u));
  };

  const handleEnviarSolicitacao = async () => {
    if (usuariosComAlteracao.length === 0) {
      alert('Nenhuma alteração de licença foi feita');
      return;
    }

    setLoading(true);
    try {
      // Simular envio para o banco de dados
      const requisicao = {
        id: `REQ-${Date.now()}`,
        data: new Date().toISOString(),
        realizado_por: email,
        alteracoes: usuariosComAlteracao,
        status: 'pendente',
      };

      // Salvar no localStorage para simular banco de dados
      const requisicoes = JSON.parse(localStorage.getItem('requisicoes') || '[]');
      requisicoes.push(requisicao);
      localStorage.setItem('requisicoes', JSON.stringify(requisicoes));

      setSucesso(true);
      setTimeout(() => setSucesso(false), 3000);

      // Reset
      setUsuarios(usuariosData.map(u => ({
        id: u.id,
        nome: u.nome,
        sobrenome: u.sobrenome,
        email: u.email,
        licenca_original: u.tipo_licenca,
        licenca_nova: null,
      })));
    } catch (err) {
      alert('Erro ao enviar solicitação');
    } finally {
      setLoading(false);
    }
  };

  const handleBaixarPlanilha = () => {
    const dados = usuariosComAlteracao.map(u => ({
      'Nome': `${u.nome} ${u.sobrenome}`,
      'Email': u.email,
      'Licença Anterior': getLicencaLabel(u.licenca_original),
      'Licença Nova': getLicencaLabel(u.licenca_nova || ''),
    }));

    const csv = [
      Object.keys(dados[0]).join(','),
      ...dados.map(row => Object.values(row).map(v => `"${v}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reordenamento-${Date.now()}.csv`;
    a.click();
  };

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
              className="px-4 py-3 border-b-2 border-transparent text-gray-600 hover:border-gray-300 font-medium"
            >
              Filtrar por Licença
            </button>
            <button
              onClick={() => router.push('/reordenamento')}
              className="px-4 py-3 border-b-2 border-blue-600 text-blue-600 font-medium"
            >
              Reordenamento
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {sucesso && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
            Solicitação enviada com sucesso!
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Resumo */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Resumo</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500">Total de Usuários</p>
                <p className="text-2xl font-bold text-gray-900">{usuarios.length}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Com Alterações</p>
                <p className="text-2xl font-bold text-blue-600">{usuariosComAlteracao.length}</p>
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Ações</h3>
            <div className="flex gap-3">
              <button
                onClick={handleEnviarSolicitacao}
                disabled={usuariosComAlteracao.length === 0 || loading}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <Send className="w-4 h-4" />
                {loading ? 'Enviando...' : 'Enviar Solicitação'}
              </button>
              <button
                onClick={handleBaixarPlanilha}
                disabled={usuariosComAlteracao.length === 0}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <Download className="w-4 h-4" />
                Baixar Planilha
              </button>
            </div>
          </div>
        </div>

        {/* Tabela de Usuários */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Reordenamento de Usuários</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left text-sm font-medium text-gray-700 px-6 py-3">Nome</th>
                  <th className="text-left text-sm font-medium text-gray-700 px-6 py-3">Email</th>
                  <th className="text-left text-sm font-medium text-gray-700 px-6 py-3">Licença Atual</th>
                  <th className="text-left text-sm font-medium text-gray-700 px-6 py-3">Nova Licença</th>
                  <th className="text-left text-sm font-medium text-gray-700 px-6 py-3">Ação</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((user) => (
                  <tr key={user.id} className={user.licenca_nova ? 'bg-blue-50 border-b border-gray-200' : 'border-b border-gray-200 hover:bg-gray-50'}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {user.nome} {user.sobrenome}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {getLicencaLabel(user.licenca_original)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {user.licenca_nova ? (
                        <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {getLicencaLabel(user.licenca_nova)}
                        </span>
                      ) : (
                        <select
                          onChange={(e) => handleMudarLicenca(user.id, e.target.value)}
                          className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600"
                          defaultValue=""
                        >
                          <option value="">Selecionar...</option>
                          {tiposLicenca.map(tipo => (
                            <option key={tipo} value={tipo}>
                              {getLicencaLabel(tipo)}
                            </option>
                          ))}
                        </select>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {user.licenca_nova && (
                        <button
                          onClick={() => handleResetarLicenca(user.id)}
                          className="text-red-600 hover:text-red-700 font-medium"
                        >
                          Remover
                        </button>
                      )}
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
