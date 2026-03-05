# 📊 Gestão de Licenças HubSpot

Sistema completo para gerenciar usuários e licenças do HubSpot da Inteligência de Vida.

## 🎯 Funcionalidades

✅ **Dashboard** - Métricas e gráficos de usuários
✅ **Filtrar por Licença** - Buscar usuários por tipo de licença
✅ **Reordenamento** - Reorganizar atribuição de licenças
✅ **Histórico** - Rastrear todas as alterações
✅ **Exportação** - Baixar relatórios em CSV

## 🚀 Quick Start

### Local
```bash
npm install
npm run dev
# Abra http://localhost:3000
```

### Vercel (Online)
1. Push para GitHub
2. Conecte no Vercel
3. Deploy automático em 3-5 minutos

Veja detalhes em: **`DEPLOY_VERCEL.md`**

## 📖 Documentação

| Arquivo | Descrição |
|---------|-----------|
| **`COMECE_AQUI.md`** | Guia rápido de 3 minutos ⭐ |
| **`INSTALACAO.md`** | Documentação completa |
| **`DEPLOY_VERCEL.md`** | Como hospedar no Vercel |

## 🔐 Login

Use qualquer email com:
- `@scient.cc`
- `@inteligenciadevida.com.br`

Exemplos:
- delano.costa@inteligenciadevida.com.br
- suelen.motta@inteligenciadevida.com.br
- livia.coelho@inteligenciadevida.com.br

## 📁 Estrutura

```
src/
├── app/
│   ├── page.tsx              # Login
│   ├── dashboard/page.tsx    # Dashboard
│   ├── licencas/page.tsx     # Filtro por Licença
│   ├── reordenamento/page.tsx # Reordenamento (MAIN)
│   └── api/                  # APIs REST
├── lib/
│   ├── db.ts                 # Banco de dados
│   ├── usuarios-data.ts      # Dados
│   └── schema.sql            # Schema SQL
└── components/               # Componentes React
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: JSON (pronto para SQLite/PostgreSQL)
- **Deployment**: Vercel

## 📊 Módulos

### 1. Dashboard (`/dashboard`)
- Total de usuários
- Usuários ativos
- Distribuição de licenças
- Gráfico em barras

### 2. Filtro por Licença (`/licencas`)
- Selecionar tipo de licença
- Listar usuários filtrados
- Ver status e equipes

### 3. Reordenamento (`/reordenamento`) ⭐
- Reorganizar licenças
- Enviar solicitações
- Histórico de alterações
- Exportar CSV

## 🔌 APIs

```
GET    /api/init                 - Inicializar BD
GET    /api/usuarios             - Listar usuários
GET    /api/usuarios?tipo=sales  - Filtrar por tipo
POST   /api/requisicoes          - Criar reordenamento
GET    /api/requisicoes          - Listar requisições
GET    /api/stats                - Estatísticas
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# 1. Conecte GitHub no vercel.com
# 2. Selecione este repositório
# 3. Deploy automático em ~3-5 minutos
```

Veja: **`DEPLOY_VERCEL.md`** para detalhes

### Localhost
```bash
npm install
npm run dev
```

## 📝 Variáveis de Ambiente

`.env.local` (já criado):
```
NEXT_PUBLIC_APP_NAME="Gestão de Licenças HubSpot"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
DATABASE_URL="data.db"
NODE_ENV="development"
```

## 🐛 Troubleshooting

**Porta 3000 em uso:**
```bash
npm run dev -- -p 3001
```

**npm install não funciona:**
```bash
npm install --legacy-peer-deps
```

**Dados desaparecem no Vercel:**
- Esperado (filesystem efêmero)
- Use banco de dados externo para produção

## 🎓 Próximas Etapas

- [ ] Deploy no Vercel
- [ ] Adicionar autenticação OAuth
- [ ] Integrar com HubSpot API
- [ ] Usar banco de dados externo (MongoDB/PostgreSQL)
- [ ] Adicionar notificações por email

## 📞 Suporte

1. Leia `COMECE_AQUI.md` para início rápido
2. Verifique `INSTALACAO.md` para problemas
3. Veja `DEPLOY_VERCEL.md` para fazer deploy

## 📄 License

Confidencial - Scient Consultoria

---

**Pronto para usar!** Siga as instruções em `COMECE_AQUI.md` 🚀
