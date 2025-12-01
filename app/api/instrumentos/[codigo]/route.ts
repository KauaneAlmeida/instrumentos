import { NextRequest, NextResponse } from 'next/server';
import { instrumentService } from '@/lib/instrumentService';

export async function GET(
  request: NextRequest,
  { params }: { params: { codigo: string } }
) {
  try {
    const instrumento = await instrumentService.getByCodigo(params.codigo);

    if (!instrumento) {
      return NextResponse.json(
        {
          success: false,
          error: 'Instrumento não encontrado'
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: instrumento
    });
  } catch (error) {
    console.error('Erro na API /api/instrumentos/[codigo]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao buscar instrumento'
      },
      { status: 500 }
    );
  }
}
