import { NextResponse, NextRequest } from 'next/server';
import { getUsuarios, getUsuariosByTipoLicenca } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tipo = searchParams.get('tipo');

    let usuarios;
    if (tipo) {
      usuarios = getUsuariosByTipoLicenca(tipo);
    } else {
      usuarios = getUsuarios();
    }

    return NextResponse.json({
      success: true,
      count: usuarios.length,
      data: usuarios,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar usuários', details: error },
      { status: 500 }
    );
  }
}
