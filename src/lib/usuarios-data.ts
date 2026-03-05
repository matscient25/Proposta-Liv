// Dados dos usuários importados do HubSpot
export const usuariosData = [
  {
    id: "86.577.977",
    nome: "Delano",
    sobrenome: "De Carvalho Costa",
    email: "delano.costa@inteligenciadevida.com.br",
    status: "ativo",
    licenca_paga: true,
    tipo_licenca: "service-enterprise",
    status_convite: "invite_pending",
    equipe_primaria: "Pedagógico",
    ultimo_acesso: "2025-12-26",
  },
  {
    id: "85.121.125",
    nome: "Suelen",
    sobrenome: "Pereira da Motta",
    email: "suelen.motta@inteligenciadevida.com.br",
    status: "ativo",
    licenca_paga: true,
    tipo_licenca: "core",
    status_convite: "invite_accepted",
    equipe_primaria: "Relacionamento",
    ultimo_acesso: "2026-01-12",
  },
  {
    id: "86.577.421",
    nome: "Joyce",
    sobrenome: "Gabriele Dos Santos De Souza",
    email: "joyce.gabriele@inteligenciadevida.com.br",
    status: "inativo",
    licenca_paga: true,
    tipo_licenca: "sales-pro",
    status_convite: "deactivated",
    equipe_primaria: "Comercial - Padrão",
    ultimo_acesso: "2025-12-26",
  },
  {
    id: "86.578.194",
    nome: "Andressa",
    sobrenome: "Chambarelli Bomtempo",
    email: "andressa.bomtempo@inteligenciadevida.com.br",
    status: "ativo",
    licenca_paga: true,
    tipo_licenca: "service-enterprise",
    status_convite: "invite_bounced",
    equipe_primaria: "Relacionamento",
    ultimo_acesso: "2025-12-26",
  },
  {
    id: "86.577.330",
    nome: "Lívia",
    sobrenome: "Coelho Pereira",
    email: "livia.coelho@inteligenciadevida.com.br",
    status: "ativo",
    licenca_paga: false,
    tipo_licenca: "view-only",
    status_convite: "invite_pending",
    equipe_primaria: "Administrativo",
    ultimo_acesso: "2026-01-20",
  },
];

export function getLicencaLabel(tipo: string): string {
  const labels: { [key: string]: string } = {
    "sales-pro": "Sales Pro",
    "service-enterprise": "Service Enterprise",
    "core": "Core",
    "view-only": "View Only",
    "partner": "Partner",
  };
  return labels[tipo] || tipo;
}

export function getStatusConviteLabel(status: string): string {
  const labels: { [key: string]: string } = {
    "invite_pending": "Pendente",
    "invite_accepted": "Aceito",
    "invite_bounced": "Devolvido",
    "deactivated": "Desativado",
  };
  return labels[status] || status;
}
