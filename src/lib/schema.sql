-- Usuarios
CREATE TABLE IF NOT EXISTS usuarios (
  id TEXT PRIMARY KEY,
  nome TEXT NOT NULL,
  sobrenome TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'ativo', -- 'ativo', 'inativo'
  licenca_paga BOOLEAN DEFAULT false,
  tipo_licenca TEXT,
  status_convite TEXT DEFAULT 'pendente', -- 'pendente', 'aceito', 'recusado'
  equipe_primaria TEXT,
  equipe_secundaria TEXT,
  ultimo_acesso_hubspot TEXT,
  criado_em TEXT DEFAULT CURRENT_TIMESTAMP,
  atualizado_em TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Tipos de Licenca
CREATE TABLE IF NOT EXISTS tipos_licenca (
  id TEXT PRIMARY KEY,
  nome TEXT NOT NULL UNIQUE,
  descricao TEXT,
  quantidade_total INTEGER DEFAULT 0,
  quantidade_usada INTEGER DEFAULT 0,
  criado_em TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Historico de Alteracoes
CREATE TABLE IF NOT EXISTS historico_alteracoes (
  id TEXT PRIMARY KEY,
  usuario_id TEXT NOT NULL,
  tipo_licenca_anterior TEXT,
  tipo_licenca_novo TEXT,
  data_alteracao TEXT DEFAULT CURRENT_TIMESTAMP,
  realizado_por TEXT NOT NULL,
  observacoes TEXT,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (realizado_por) REFERENCES usuarios(email)
);

-- Requisicoes de Reordenamento
CREATE TABLE IF NOT EXISTS requisicoes_reordenamento (
  id TEXT PRIMARY KEY,
  realizado_por TEXT NOT NULL,
  data_requisicao TEXT DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'pendente', -- 'pendente', 'processada', 'cancelada'
  numero_mudancas INTEGER DEFAULT 0,
  observacoes TEXT,
  FOREIGN KEY (realizado_por) REFERENCES usuarios(email)
);

-- Detalhes de Reordenamento
CREATE TABLE IF NOT EXISTS detalhes_reordenamento (
  id TEXT PRIMARY KEY,
  requisicao_id TEXT NOT NULL,
  usuario_id TEXT NOT NULL,
  licenca_antiga TEXT,
  licenca_nova TEXT,
  data_criacao TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (requisicao_id) REFERENCES requisicoes_reordenamento(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Criar indexes para melhor performance
CREATE INDEX IF NOT EXISTS idx_usuarios_email ON usuarios(email);
CREATE INDEX IF NOT EXISTS idx_usuarios_tipo_licenca ON usuarios(tipo_licenca);
CREATE INDEX IF NOT EXISTS idx_usuarios_status ON usuarios(status);
CREATE INDEX IF NOT EXISTS idx_historico_usuario_id ON historico_alteracoes(usuario_id);
CREATE INDEX IF NOT EXISTS idx_reordenamento_data ON requisicoes_reordenamento(data_requisicao);
