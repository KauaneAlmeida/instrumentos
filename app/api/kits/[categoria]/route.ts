import { NextRequest, NextResponse } from 'next/server';
import { instrumentService } from '@/lib/instrumentService';

export async function GET(
  request: NextRequest,
  { params }: { params: { categoria: string } }
) {
  try {
    const instrumentos = await instrumentService.getByCategoria(params.categoria);

    return NextResponse.json({
      success: true,
      data: instrumentos,
      count: instrumentos.length
    });
  } catch (error) {
    console.error('Erro na API /api/kits/[categoria]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao buscar instrumentos da categoria'
      },
      { status: 500 }
    );
  }
}
