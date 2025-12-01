import Link from 'next/link';
import Image from 'next/image';
import { Instrumento } from '@/lib/instrumentTypes';

interface InstrumentoCardProps {
  instrumento: Instrumento;
}

export default function InstrumentoCard({ instrumento }: InstrumentoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {instrumento.imagem_url ? (
          <Image
            src={instrumento.imagem_url}
            alt={instrumento.nome}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-medical-light to-gray-200">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="p-5">
        <p className="text-xs text-medical font-semibold mb-2">
          Cód: {instrumento.codigo}
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
          {instrumento.nome}
        </h3>

        <Link
          href={`/instrumentos/${instrumento.codigo}`}
          className="block w-full text-center px-4 py-2.5 bg-medical hover:bg-medical-dark text-white rounded-lg font-semibold transition-colors duration-200"
        >
          Detalhes
        </Link>
      </div>
    </div>
  );
}
