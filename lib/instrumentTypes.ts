export interface Instrumento {
  id: string;
  nome: string;
  descricao: string | null;
  categoria: string;
  codigo: string;
  imagem_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Kit {
  id: string;
  nome: string;
  slug: string;
  categoria: string;
  aplicacao: string;
  imagem_url: string | null;
  created_at: string;
  updated_at: string;
}
