import { NextResponse } from 'next/server';
import { initDB, addUsuario, getUsuarios } from '@/lib/db';
import { usuariosData } from '@/lib/usuarios-data';

export async function GET() {
  try {
    initDB();

    // Verificar se já tem dados
    const usuariosExistentes = getUsuarios();

    if (usuariosExistentes.length === 0) {
      // Adicionar dados iniciais
      usuariosData.forEach(user => {
        addUsuario({
          id: user.id,
          nome: user.nome,
          sobrenome: user.sobrenome,
          email: user.email,
          status: user.status as 'ativo' | 'inativo',
          licenca_paga: user.licenca_paga,
          tipo_licenca: user.tipo_licenca,
          status_convite: user.status_convite,
          equipe_primaria: user.equipe_primaria,
          ultima_atualizacao: user.ultima_atualizacao,
          criado_em: user.criado_em,
        });
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Banco de dados inicializado',
      usuarios: usuariosData.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao inicializar banco de dados', details: error },
      { status: 500 }
    );
  }
}
