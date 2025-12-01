import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { instrumentService } from '@/lib/instrumentService';

interface KitPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: KitPageProps): Promise<Metadata> {
  const kit = await instrumentService.getKitBySlug(params.slug);

  if (!kit) {
    return {
      title: 'Kit não encontrado - PenseMed',
    };
  }

  return {
    title: `${kit.nome} - PenseMed`,
    description: kit.aplicacao,
  };
}

export default async function KitPage({ params }: KitPageProps) {
  const kit = await instrumentService.getKitBySlug(params.slug);

  if (!kit) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
              {kit.imagem_url ? (
                <Image
                  src={kit.imagem_url}
                  alt={kit.nome}
                  fill
                  className="object-cover"
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

            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {kit.nome}
              </h1>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Aplicação
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {kit.aplicacao}
                </p>
              </div>

              <Link
                href={`/kits/${params.slug}/instrumentos`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-medical hover:bg-medical-dark text-white rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Ver Instrumentos
                <svg
                  className="w-6 h-6"
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
          </div>
        </div>
      </div>
    </div>
  );
}
