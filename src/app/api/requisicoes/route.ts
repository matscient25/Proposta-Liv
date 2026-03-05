import { NextResponse, NextRequest } from 'next/server';
import { addRequisicao, getRequisicoes, getUsuarioById, updateUsuario, addHistoricoAlteracao } from '@/lib/db';

export async function GET() {
  try {
    const requisicoes = getRequisicoes();

    return NextResponse.json({
      success: true,
      count: requisicoes.length,
      data: requisicoes,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar requisições', details: error },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { realizado_por, alteracoes } = body;

    if (!realizado_por || !alteracoes || alteracoes.length === 0) {
      return NextResponse.json(
        { error: 'Dados inválidos: realizado_por e alteracoes são obrigatórios' },
        { status: 400 }
      );
    }

    // Criar requisição
    const requisicao = {
      id: `REQ-${Date.now()}`,
      realizado_por,
      data_requisicao: new Date().toISOString(),
      status: 'pendente' as const,
      numero_mudancas: alteracoes.length,
      alteracoes,
    };

    const resultado = addRequisicao(requisicao);

    // Atualizar usuários e criar histórico
    alteracoes.forEach((alt: any) => {
      const usuario = getUsuarioById(alt.usuario_id);
      if (usuario) {
        // Atualizar licença do usuário
        updateUsuario(alt.usuario_id, {
          tipo_licenca: alt.licenca_nova,
        });

        // Registrar no histórico
        addHistoricoAlteracao({
          id: `HIST-${Date.now()}-${alt.usuario_id}`,
          usuario_id: alt.usuario_id,
          tipo_licenca_anterior: alt.licenca_antiga,
          tipo_licenca_novo: alt.licenca_nova,
          data_alteracao: new Date().toISOString(),
          realizado_por,
          observacoes: `Alteração realizada via requisição ${requisicao.id}`,
        });
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Requisição criada com sucesso',
      data: resultado,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao criar requisição', details: error },
      { status: 500 }
    );
  }
}
