# Proposta LIV - HubSpot Marketing Hub

Aplicação web para apresentação de proposta digital do HubSpot Marketing Hub para o Laboratório Inteligência de Vida (LIV).

## Sobre o Projeto

Esta é uma aplicação Next.js que apresenta uma interface de login segura e personalizada para acesso à proposta digital. O acesso é restrito a e-mails corporativos dos domínios:
- @inteligenciadevida.com.br
- @scient.cc
- @hubspot.com

## Tecnologias Utilizadas

- **Next.js 15** - Framework React para produção
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI reutilizáveis e acessíveis
- **Lucide React** - Ícones modernos

## Estrutura do Projeto

```
proposta-liv/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── alert.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── input.tsx
│   │   └── Login.tsx
│   └── lib/
│       └── utils.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🌐 Deploy Online (Como no Lovable!)

### Opção 1: Deploy no Vercel (Recomendado - Grátis)

O jeito mais rápido de colocar no ar:

1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
2. Clique em **"Add New Project"**
3. Importe este repositório: `matscient25/Proposta-Liv`
4. Selecione o branch: `claude/form-validation-component-U3bdQ`
5. Clique em **"Deploy"**
6. ✅ Em 2 minutos você terá uma URL pública tipo: `proposta-liv.vercel.app`

**Ou via CLI:**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy (primeira vez)
vercel

# Deploy em produção
vercel --prod
```

### Opção 2: Deploy no Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Conecte seu GitHub e selecione este repositório
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy!

### Opção 3: Outras plataformas

- **Railway**: [railway.app](https://railway.app)
- **Render**: [render.com](https://render.com)
- **DigitalOcean App Platform**: [digitalocean.com](https://www.digitalocean.com/products/app-platform)

## 💻 Como Executar Localmente

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Funcionalidades

### Tela de Login
- Validação de e-mail em tempo real
- Suporte apenas para domínios autorizados
- Feedback visual de sucesso/erro
- Animações suaves e interface moderna
- Design responsivo

### Área da Proposta
- Apresentação da proposta HubSpot Marketing Hub
- Informações sobre benefícios da solução
- Interface limpa e profissional
- Branding SCIENT

## Segurança

O acesso é controlado por validação de domínio de e-mail no frontend. Para ambiente de produção, recomenda-se:
- Implementar autenticação backend
- Adicionar verificação de e-mail real
- Integrar com sistema de SSO se necessário

## Desenvolvido por

**SCIENT Consultoria**
Revenue Operations & HubSpot Implementation

---

© 2026 SCIENT Consultoria - Todos os direitos reservados
