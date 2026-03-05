# 🚀 Deploy no Vercel

## ⚡ Deploy em 2 Minutos

### Passo 1: Criar Conta no Vercel
1. Abra [vercel.com](https://vercel.com)
2. Clique em "Sign Up"
3. Use GitHub/GitLab/Email para criar conta

### Passo 2: Conectar GitHub
1. Abra [vercel.com/new](https://vercel.com/new)
2. Clique em "Import Git Repository"
3. Selecione seu repositório `matscient25/Proposta-Liv`

### Passo 3: Configurar Deploy
1. **Framework**: Next.js (detecta automaticamente)
2. **Build Command**: `npm run build` (padrão está ok)
3. **Environment Variables**: Deixe como está por enquanto
4. Clique em **Deploy**

### Passo 4: Pronto! 🎉
Após ~3-5 minutos, seu site estará online!

URL será algo como: `https://proposta-liv.vercel.app`

---

## 🔄 Como Funciona

### Automático
- Toda vez que você faz `git push` para a branch `claude/user-data-import-6MEln`
- Vercel detecta, faz build e deploy automaticamente
- Sem fazer nada manualmente!

### Parar Atualizações
Se quiser parar de fazer deploy automático:
1. Vá no Vercel dashboard
2. Projeto → Settings → Git
3. Desative "Automatic Deployments"

---

## 📊 Após Deploy

### URL Pública
- Production: `https://proposta-liv.vercel.app`
- Preview: `https://proposta-liv-git-branch-name.vercel.app`

### Dados Persistem?
⚠️ **Importante**: Vercel usa sistema de arquivos **efêmero**.

Isso significa:
- `.data/database.json` **será apagado a cada deploy**
- Dados não persistem entre deployments

### Solução: Integrar com Banco Real

**Opção 1: MongoDB (Recomendado - Gratuito)**
```javascript
// Depois você muda src/lib/db.ts para usar MongoDB
```

**Opção 2: PostgreSQL (Railway/Supabase)**
```javascript
// Integrar com banco SQL real
```

Para agora, use **dados em memória** (funciona normalmente no Vercel).

---

## 🔑 Variáveis de Ambiente

Se precisar adicionar depois:

1. Vá em **Project Settings** → **Environment Variables**
2. Adicione suas variáveis:
   ```
   DATABASE_URL=sua_url_do_banco
   NEXT_PUBLIC_API_URL=https://proposta-liv.vercel.app
   ```

---

## 📈 Monitoramento

### Analytics
Vercel tem analytics built-in:
- Quantas pessoas usam
- Tempo de resposta
- Erros

Acesse em: **Project → Analytics**

### Logs
Ver o que está acontecendo:
- **Project → Deployments** → clique em um deploy
- Ver console output

---

## 🆘 Troubleshooting

### Build falha no Vercel mas funciona local
1. Verifique `npm run build` localmente:
   ```bash
   npm run build
   ```

2. Se falhar, corrija o erro e faça `git push`

3. Vercel refaz deploy automaticamente

### Erro 404 em rotas
- Vercel precisa do `next.config.ts` correto
- Arquivo já está pronto, não precisa mudar

### Dados desaparecem após deploy
- Esperado (filesystem efêmero)
- Solução: usar banco de dados externo
- Por enquanto, isso é normal

---

## 🎯 Checklist Deploy

- [ ] Conta Vercel criada
- [ ] Repositório conectado
- [ ] Deploy iniciado
- [ ] Teste URL pública
- [ ] Faça login no site
- [ ] Teste reordenamento
- [ ] Compartilhe URL com equipe

---

## 📞 URLs Importantes

| Link | Descrição |
|------|-----------|
| https://vercel.com/dashboard | Dashboard Vercel |
| https://github.com/matscient25/Proposta-Liv | Repositório GitHub |
| https://proposta-liv.vercel.app | Seu site (produção) |

---

## 💡 Próximas Etapas

### Melhorar Persistência de Dados
1. **MongoDB**: https://www.mongodb.com/cloud/atlas (free tier)
2. **Supabase**: https://supabase.com (PostgreSQL + auth)
3. **Railway**: https://railway.app (tudo integrado)

### Adicionar Autenticação Real
- OAuth com Google/GitHub
- Integração HubSpot

### Custom Domain
- Compre domínio (GoDaddy, Namecheap)
- Adicione em Vercel → Domains

---

## 🎉 Pronto!

Seu sistema está **online e acessível para toda a equipe**! 🚀

Compartilhe a URL com:
- `https://seu-projeto.vercel.app`
