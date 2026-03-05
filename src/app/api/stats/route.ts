import { NextResponse } from 'next/server';
import { getEstatisticas } from '@/lib/db';

export async function GET() {
  try {
    const stats = getEstatisticas();

    return NextResponse.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar estatísticas', details: error },
      { status: 500 }
    );
  }
}
