import fs from 'fs';
import path from 'path';

const DB_DIR = path.join(process.cwd(), '.data');
const DB_FILE = path.join(DB_DIR, 'database.json');

// Interfaces
export interface Usuario {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  status: 'ativo' | 'inativo';
  licenca_paga: boolean;
  tipo_licenca: string;
  status_convite: string;
  equipe_primaria: string;
  ultima_atualizacao: string;
  criado_em: string;
}

export interface HistoricoAlteracao {
  id: string;
  usuario_id: string;
  tipo_licenca_anterior: string;
  tipo_licenca_novo: string;
  data_alteracao: string;
  realizado_por: string;
  observacoes?: string;
}

export interface RequisicaoReordenamento {
  id: string;
  realizado_por: string;
  data_requisicao: string;
  status: 'pendente' | 'processada' | 'cancelada';
  numero_mudancas: number;
  alteracoes: Array<{
    usuario_id: string;
    licenca_antiga: string;
    licenca_nova: string;
  }>;
  observacoes?: string;
}

interface DatabaseSchema {
  usuarios: Usuario[];
  historico: HistoricoAlteracao[];
  requisicoes: RequisicaoReordenamento[];
}

// Inicializar banco de dados
export function initDB() {
  try {
    if (!fs.existsSync(DB_DIR)) {
      fs.mkdirSync(DB_DIR, { recursive: true });
    }

    if (!fs.existsSync(DB_FILE)) {
      const initialData: DatabaseSchema = {
        usuarios: [],
        historico: [],
        requisicoes: [],
      };
      fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
    }
  } catch (error) {
    console.error('Erro ao inicializar banco de dados:', error);
  }
}

// Ler dados do arquivo
function readDatabase(): DatabaseSchema {
  try {
    if (!fs.existsSync(DB_FILE)) {
      initDB();
    }
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao ler banco de dados:', error);
    return { usuarios: [], historico: [], requisicoes: [] };
  }
}

// Escrever dados no arquivo
function writeDatabase(data: DatabaseSchema) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Erro ao escrever banco de dados:', error);
  }
}

// ========== USUARIOS ==========

export function addUsuario(usuario: Usuario) {
  const db = readDatabase();
  const exists = db.usuarios.find(u => u.id === usuario.id);
  if (!exists) {
    db.usuarios.push(usuario);
    writeDatabase(db);
  }
}

export function getUsuarios(): Usuario[] {
  const db = readDatabase();
  return db.usuarios;
}

export function getUsuarioById(id: string): Usuario | undefined {
  const db = readDatabase();
  return db.usuarios.find(u => u.id === id);
}

export function getUsuariosByTipoLicenca(tipoLicenca: string): Usuario[] {
  const db = readDatabase();
  return db.usuarios.filter(u => u.tipo_licenca === tipoLicenca);
}

export function getUsuariosAtivos(): Usuario[] {
  const db = readDatabase();
  return db.usuarios.filter(u => u.status === 'ativo');
}

export function updateUsuario(id: string, updates: Partial<Usuario>) {
  const db = readDatabase();
  const index = db.usuarios.findIndex(u => u.id === id);
  if (index !== -1) {
    db.usuarios[index] = {
      ...db.usuarios[index],
      ...updates,
      ultima_atualizacao: new Date().toISOString(),
    };
    writeDatabase(db);
  }
}

// ========== HISTORICO ==========

export function addHistoricoAlteracao(alteracao: HistoricoAlteracao) {
  const db = readDatabase();
  db.historico.push(alteracao);
  writeDatabase(db);
}

export function getHistoricoUsuario(usuarioId: string): HistoricoAlteracao[] {
  const db = readDatabase();
  return db.historico.filter(h => h.usuario_id === usuarioId);
}

export function getHistoricoCompleto(): HistoricoAlteracao[] {
  const db = readDatabase();
  return db.historico;
}

// ========== REQUISICOES ==========

export function addRequisicao(requisicao: RequisicaoReordenamento) {
  const db = readDatabase();
  db.requisicoes.push(requisicao);
  writeDatabase(db);
  return requisicao;
}

export function getRequisicoes(): RequisicaoReordenamento[] {
  const db = readDatabase();
  return db.requisicoes.sort((a, b) =>
    new Date(b.data_requisicao).getTime() - new Date(a.data_requisicao).getTime()
  );
}

export function getRequisicaoById(id: string): RequisicaoReordenamento | undefined {
  const db = readDatabase();
  return db.requisicoes.find(r => r.id === id);
}

export function updateRequisicao(id: string, updates: Partial<RequisicaoReordenamento>) {
  const db = readDatabase();
  const index = db.requisicoes.findIndex(r => r.id === id);
  if (index !== -1) {
    db.requisicoes[index] = {
      ...db.requisicoes[index],
      ...updates,
    };
    writeDatabase(db);
  }
}

// ========== ESTATISTICAS ==========

export function getEstatisticas() {
  const db = readDatabase();
  const usuarios = db.usuarios;

  return {
    total_usuarios: usuarios.length,
    usuarios_ativos: usuarios.filter(u => u.status === 'ativo').length,
    licencas_pagas: usuarios.filter(u => u.licenca_paga).length,
    distribuicao_por_licenca: usuarios.reduce((acc, u) => {
      acc[u.tipo_licenca] = (acc[u.tipo_licenca] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number }),
    total_alteracoes: db.historico.length,
    total_requisicoes: db.requisicoes.length,
  };
}
