import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import InstrumentoGrid from '@/components/InstrumentoGrid';
import { instrumentService } from '@/lib/instrumentService';

interface InstrumentosPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: InstrumentosPageProps): Promise<Metadata> {
  const kit = await instrumentService.getKitBySlug(params.slug);

  if (!kit) {
    return {
      title: 'Kit não encontrado - PenseMed',
    };
  }

  return {
    title: `Instrumentos - ${kit.nome} - PenseMed`,
    description: `Lista completa de instrumentos do ${kit.nome}`,
  };
}

export default async function InstrumentosPage({ params }: InstrumentosPageProps) {
  const kit = await instrumentService.getKitBySlug(params.slug);

  if (!kit) {
    notFound();
  }

  const instrumentos = await instrumentService.getByCategoria(kit.categoria);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm mb-4">
            <Link href="/" className="text-gray-500 hover:text-medical">
              Início
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/kits/${params.slug}`} className="text-gray-500 hover:text-medical">
              {kit.nome}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Instrumentos</span>
          </nav>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Instrumentos
              </h1>
              <p className="text-lg text-gray-600">
                {kit.nome}
              </p>
            </div>

            <Link
              href={`/kits/${params.slug}`}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-medical hover:bg-medical-light rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Voltar ao Kit
            </Link>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {instrumentos.length > 0 && (
          <div className="mb-8">
            <p className="text-gray-600">
              <span className="font-semibold text-medical">{instrumentos.length}</span>{' '}
              {instrumentos.length === 1 ? 'instrumento encontrado' : 'instrumentos encontrados'}
            </p>
          </div>
        )}

        <InstrumentoGrid instrumentos={instrumentos} />
      </section>
    </div>
  );
}
