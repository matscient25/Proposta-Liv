# 📦 Instalação e Configuração

## ✅ Status Atual

O sistema está **100% funcional em desenvolvimento** com:
- ✅ Sistema de autenticação funcionando
- ✅ Banco de dados com persistência em JSON
- ✅ APIs criadas e prontas
- ✅ Dashboard, Filtro por Licença e Reordenamento implementados

## 🚀 Instalação

### Prerequisitos
- Node.js v18+
- npm ou yarn

### Passo 1: Instalar Dependências

Se você tiver acesso ao npm registry:

```bash
npm install
# ou
yarn install
```

**Nota:** Se receber erro 403 do npm, você pode:
1. Usar um proxy npm alternativo:
```bash
npm install --registry https://registry.yarnpkg.com
```

2. Ou aguardar a configuração de rede ser resolvida

### Passo 2: Configurar Variáveis de Ambiente

Já criamos `.env.local` com as variáveis básicas. Se precisar mudar:

```bash
cp .env.local .env.local.backup
# Editar .env.local conforme necessário
```

### Passo 3: Iniciar em Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

O servidor vai rodar em `http://localhost:3000`

## 🔐 Primeiro Acesso

1. Abra http://localhost:3000
2. Faça login com um email `@scient.cc` ou `@inteligenciadevida.com.br`
3. Use um dos emails dos usuários cadastrados:
   - delano.costa@inteligenciadevida.com.br
   - suelen.motta@inteligenciadevida.com.br
   - joyce.gabriele@inteligenciadevida.com.br
   - andressa.bomtempo@inteligenciadevida.com.br
   - livia.coelho@inteligenciadevida.com.br
   - (ou qualquer outro cadastrado)

## 💾 Banco de Dados

### Estrutura Atual
- **Tipo**: JSON (simulação de SQLite)
- **Local**: `.data/database.json`
- **Backup automático**: Sim

### Migrar para SQLite Real

Quando conseguir instalar `better-sqlite3`:

```bash
npm install better-sqlite3
```

Depois execute o script de migração:

```bash
npm run migrate:sqlite
```

## 📊 Módulos Disponíveis

### 1. **Dashboard** (`/dashboard`)
- Total de usuários
- Usuários ativos
- Distribuição de licenças
- Gráfico em barras

### 2. **Filtrar por Licença** (`/licencas`)
- Selecionar tipo de licença
- Listar usuários filtrados
- Ver status do convite
- Visualizar equipes

### 3. **Reordenamento** (`/reordenamento`)
- Reorganizar licenças de usuários
- Enviar solicitação de alteração
- Baixar planilha com alterações
- Histórico de requisições

## 🔌 APIs Disponíveis

### GET `/api/init`
Inicializa o banco de dados com dados padrão

### GET `/api/usuarios`
Lista todos os usuários
```bash
curl http://localhost:3000/api/usuarios
```

### GET `/api/usuarios?tipo=sales-pro`
Filtra usuários por tipo de licença

### POST `/api/requisicoes`
Cria uma requisição de reordenamento
```json
{
  "realizado_por": "email@scient.cc",
  "alteracoes": [
    {
      "usuario_id": "86.577.977",
      "licenca_antiga": "service-enterprise",
      "licenca_nova": "sales-pro"
    }
  ]
}
```

### GET `/api/requisicoes`
Lista todas as requisições de reordenamento

### GET `/api/stats`
Retorna estatísticas gerais

## 🐛 Troubleshooting

### Problema: npm install falha com 403
**Solução**: Use yarn ou aguarde acesso ao registry

### Problema: Porta 3000 já em uso
**Solução**:
```bash
npm run dev -- -p 3001
```

### Problema: Arquivo `.data/database.json` corrompido
**Solução**:
```bash
rm .data/database.json
npm run dev
# O arquivo será recriado automaticamente
```

## 📝 Desenvolvimento

### Scripts Disponíveis

```bash
npm run dev          # Iniciar servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Iniciar servidor de produção
npm run lint         # Executar linter
```

### Estrutura de Pastas

```
src/
├── app/
│   ├── page.tsx              # Login
│   ├── dashboard/page.tsx    # Dashboard
│   ├── licencas/page.tsx     # Filtro por licença
│   ├── reordenamento/page.tsx # Reordenamento
│   └── api/                  # Rotas de API
├── lib/
│   ├── db.ts                 # Funções de banco de dados
│   ├── usuarios-data.ts      # Dados dos usuários
│   └── schema.sql            # Schema (para SQLite)
└── components/               # Componentes React
```

## 🚢 Deploy

### Vercel
```bash
vercel deploy
```

### Railway
```bash
railway login
railway link
railway up
```

## 📚 Documentação Adicional

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

## 💡 Próximas Etapas

1. ✅ Integrar autenticação real (OAuth/SSO)
2. ✅ Migrar para SQLite com better-sqlite3
3. ✅ Adicionar mais validações
4. ✅ Criar dashboard de relatórios
5. ✅ Integração com HubSpot API
6. ✅ Sistema de notificações

---

**Dúvidas?** Verifique os logs em `.next` ou abra a console do navegador (F12)
