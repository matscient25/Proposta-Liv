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

## Como Executar

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
