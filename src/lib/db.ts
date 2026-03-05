import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data.db');

// Placeholder para banco de dados
// Quando conseguirmos instalar better-sqlite3, substituímos isso
export interface Usuario {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  status: 'ativo' | 'inativo';
  licenca_paga: boolean;
  tipo_licenca: string | null;
  status_convite: 'pendente' | 'aceito' | 'recusado';
  equipe_primaria: string | null;
  equipe_secundaria: string | null;
  ultimo_acesso_hubspot: string | null;
  criado_em: string;
  atualizado_em: string;
}

export interface TipoLicenca {
  id: string;
  nome: string;
  descricao: string | null;
  quantidade_total: number;
  quantidade_usada: number;
  criado_em: string;
}

export interface RequisicaoReordenamento {
  id: string;
  realizado_por: string;
  data_requisicao: string;
  status: 'pendente' | 'processada' | 'cancelada';
  numero_mudancas: number;
  observacoes: string | null;
}

// Store em memória para desenvolvimento
let usuariosStore: Map<string, Usuario> = new Map();
let tiposLicencaStore: Map<string, TipoLicenca> = new Map();
let requisicoeStore: Map<string, RequisicaoReordenamento> = new Map();

export function initDB() {
  // Inicializa com dados vazios
  if (typeof window === 'undefined') {
    console.log('Database initialized');
  }
}

export function addUsuario(usuario: Usuario) {
  usuariosStore.set(usuario.id, usuario);
}

export function getUsuarios(): Usuario[] {
  return Array.from(usuariosStore.values());
}

export function getUsuarioById(id: string): Usuario | undefined {
  return usuariosStore.get(id);
}

export function getUsuariosByTipoLicenca(tipoLicenca: string): Usuario[] {
  return Array.from(usuariosStore.values()).filter(
    (u) => u.tipo_licenca === tipoLicenca
  );
}

export function getUsuariosAtivos(): Usuario[] {
  return Array.from(usuariosStore.values()).filter((u) => u.status === 'ativo');
}

export function updateUsuario(id: string, updates: Partial<Usuario>) {
  const usuario = usuariosStore.get(id);
  if (usuario) {
    usuariosStore.set(id, { ...usuario, ...updates, atualizado_em: new Date().toISOString() });
  }
}

export function addTipoLicenca(tipo: TipoLicenca) {
  tiposLicencaStore.set(tipo.id, tipo);
}

export function getTiposLicenca(): TipoLicenca[] {
  return Array.from(tiposLicencaStore.values());
}

export function addRequisicao(requisicao: RequisicaoReordenamento) {
  requisicoeStore.set(requisicao.id, requisicao);
}

export function getRequisicoes(): RequisicaoReordenamento[] {
  return Array.from(requisicoeStore.values());
}
