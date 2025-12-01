import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import { instrumentService } from '@/lib/instrumentService';
import { getWhatsAppGenericLink } from '@/lib/whatsapp';

interface InstrumentoPageProps {
  params: {
    codigo: string;
  };
}

export async function generateMetadata({ params }: InstrumentoPageProps): Promise<Metadata> {
  const instrumento = await instrumentService.getByCodigo(params.codigo);

  if (!instrumento) {
    return {
      title: 'Instrumento não encontrado - PenseMed',
    };
  }

  return {
    title: `${instrumento.nome} - PenseMed`,
    description: instrumento.descricao || instrumento.nome,
  };
}

export default async function InstrumentoPage({ params }: InstrumentoPageProps) {
  const instrumento = await instrumentService.getByCodigo(params.codigo);

  if (!instrumento) {
    notFound();
  }

  const kit = await instrumentService.getKitByCategoria(instrumento.categoria);
  const whatsappLink = getWhatsAppGenericLink();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-medical">
              Início
            </Link>
            {kit && (
              <>
                <span className="mx-2 text-gray-400">/</span>
                <Link href={`/kits/${kit.slug}`} className="text-gray-500 hover:text-medical">
                  {kit.nome}
                </Link>
                <span className="mx-2 text-gray-400">/</span>
                <Link href={`/kits/${kit.slug}/instrumentos`} className="text-gray-500 hover:text-medical">
                  Instrumentos
                </Link>
              </>
            )}
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{instrumento.nome}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="sticky top-24">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
                {instrumento.imagem_url ? (
                  <Image
                    src={instrumento.imagem_url}
                    alt={instrumento.nome}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-medical-light to-gray-200">
                    <svg
                      className="w-32 h-32 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-medical-light text-medical text-sm font-semibold rounded-full">
                Cód: {instrumento.codigo}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {instrumento.nome}
            </h1>

            {kit && (
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Parte do kit:</p>
                <Link
                  href={`/kits/${kit.slug}`}
                  className="inline-flex items-center gap-2 text-medical hover:text-medical-dark font-semibold"
                >
                  {kit.nome}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            )}

            {instrumento.descricao && (
              <div className="mb-8 bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-medical" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Descrição
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {instrumento.descricao}
                </p>
              </div>
            )}

            <div className="mb-8">
              <WhatsAppButton
                href={whatsappLink}
                label="Solicitar Informações por WhatsApp"
                className="w-full md:w-auto text-lg"
              />
              <p className="text-sm text-gray-600 mt-3">
                Entre em contato para conhecer as condições de locação e disponibilidade
              </p>
            </div>

            {kit && (
              <div className="bg-gradient-to-br from-medical-light to-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Ver mais instrumentos
                </h3>
                <p className="text-gray-700 mb-4">
                  Explore todos os instrumentos do {kit.nome}
                </p>
                <Link
                  href={`/kits/${kit.slug}/instrumentos`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-medical hover:bg-medical-dark text-white rounded-lg font-semibold transition-colors"
                >
                  Ver todos os instrumentos
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
