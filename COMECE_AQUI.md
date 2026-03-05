# 🚀 COMECE AQUI - Gestão de Licenças HubSpot

## ⚡ Instalação Rápida (3 minutos)

### Passo 1: Clonar e Entrar na Pasta

```bash
cd Proposta-Liv
```

### Passo 2: Instalar Dependências

```bash
npm install
```

**Se tiver erro de npm, tente:**
```bash
npm install --legacy-peer-deps
```

### Passo 3: Iniciar o Servidor

```bash
npm run dev
```

### Passo 4: Acessar no Navegador

Abra: **http://localhost:3000**

---

## 🔐 Fazer Login

Use qualquer um desses emails para testar:

| Email | Status | Licença |
|-------|--------|---------|
| delano.costa@inteligenciadevida.com.br | ✅ Ativo | Service Enterprise |
| suelen.motta@inteligenciadevida.com.br | ✅ Ativo | Core |
| joyce.gabriele@inteligenciadevida.com.br | ❌ Inativo | Sales Pro |
| andressa.bomtempo@inteligenciadevida.com.br | ✅ Ativo | Service Enterprise |
| livia.coelho@inteligenciadevida.com.br | ✅ Ativo | View Only |

**Observação:** Qualquer email com @scient.cc ou @inteligenciadevida.com.br funciona!

---

## 📊 O que Você Pode Fazer

### 1️⃣ Dashboard (`/dashboard`)
- Ver total de usuários
- Ver usuários ativos
- Gráfico de distribuição de licenças
- Tabela com últimos usuários

### 2️⃣ Filtrar por Licença (`/licencas`)
- Selecionar tipo de licença na esquerda
- Ver todos os usuários daquela licença
- Ver status do convite
- Ver equipe de cada um

### 3️⃣ Reordenamento (`/reordenamento`) ⭐ **PRINCIPAL**
- Selecionar nova licença para usuários
- Enviar solicitação de alteração
- Baixar planilha CSV com o reordenamento
- Ver histórico de requisições

---

## 🎯 Teste Rápido

1. Faça login
2. Vá para "Reordenamento"
3. Mude a licença de um usuário
4. Clique "Enviar Solicitação"
5. Baixe a planilha gerada

---

## 📁 Arquivos Importantes

```
Proposta-Liv/
├── src/
│   ├── app/
│   │   ├── page.tsx              ← Login
│   │   ├── dashboard/page.tsx    ← Dashboard
│   │   ├── licencas/page.tsx     ← Filtro por Licença
│   │   ├── reordenamento/page.tsx ← Reordenamento (MAIN)
│   │   └── api/                  ← APIs
│   └── lib/
│       ├── db.ts                 ← Banco de dados
│       └── usuarios-data.ts      ← Dados dos usuários
├── .data/
│   └── database.json             ← BD (criado automaticamente)
├── INSTALACAO.md                 ← Documentação completa
└── package.json                  ← Dependências
```

---

## 🆘 Problemas?

### Erro: "Porta 3000 já em uso"
```bash
npm run dev -- -p 3001
```
Abre em http://localhost:3001

### Erro: "npm install não funciona"
1. Verifique se tem Node.js v18+:
```bash
node --version
```

2. Se tiver npm/registry problema, tente:
```bash
npm cache clean --force
npm install --legacy-peer-deps
```

### Erro: "Arquivo database.json corrompido"
```bash
rm -rf .data/
npm run dev
# Vai recriar automaticamente
```

---

## 📞 Comandos Úteis

```bash
npm run dev      # Iniciar em desenvolvimento
npm run build    # Build para produção
npm run start    # Rodar build de produção
npm run lint     # Verificar código
```

---

## ✨ Próximos Passos

- [ ] Testar todos os 3 módulos
- [ ] Criar reordenamento de teste
- [ ] Baixar planilha CSV
- [ ] Ver histórico de alterações
- [ ] Adicionar mais usuários (editar `src/lib/usuarios-data.ts`)

---

## 🎉 Pronto!

**Tudo está funcionando. Basta instalar e rodar!**

```bash
npm install && npm run dev
```

Dúvidas? Leia `INSTALACAO.md` para documentação completa.
