-- =====================================================
-- SCHEMA SQL PARA TABELA INSTRUMENTOS - PENSEMED
-- =====================================================

CREATE TABLE IF NOT EXISTS public.instrumentos (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nome TEXT NOT NULL,
    descricao TEXT,
    categoria TEXT NOT NULL,
    codigo TEXT NOT NULL UNIQUE,
    imagem_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Criar índices para performance
CREATE INDEX IF NOT EXISTS idx_instrumentos_categoria ON public.instrumentos(categoria);
CREATE INDEX IF NOT EXISTS idx_instrumentos_codigo ON public.instrumentos(codigo);

-- Trigger para atualizar updated_at
CREATE OR REPLACE FUNCTION public.update_instrumentos_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_instrumentos_updated_at
    BEFORE UPDATE ON public.instrumentos
    FOR EACH ROW
    EXECUTE FUNCTION public.update_instrumentos_updated_at();

-- Habilitar Row Level Security
ALTER TABLE public.instrumentos ENABLE ROW LEVEL SECURITY;

-- Políticas RLS
CREATE POLICY "Instrumentos são visíveis publicamente"
    ON public.instrumentos
    FOR SELECT
    USING (true);

CREATE POLICY "Apenas usuários autenticados podem inserir instrumentos"
    ON public.instrumentos
    FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Apenas usuários autenticados podem atualizar instrumentos"
    ON public.instrumentos
    FOR UPDATE
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Apenas usuários autenticados podem deletar instrumentos"
    ON public.instrumentos
    FOR DELETE
    USING (auth.role() = 'authenticated');

-- =====================================================
-- TABELA DE KITS
-- =====================================================

CREATE TABLE IF NOT EXISTS public.kits (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nome TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    categoria TEXT NOT NULL UNIQUE,
    aplicacao TEXT NOT NULL,
    imagem_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Índices para kits
CREATE INDEX IF NOT EXISTS idx_kits_categoria ON public.kits(categoria);
CREATE INDEX IF NOT EXISTS idx_kits_slug ON public.kits(slug);

-- Trigger para kits
CREATE TRIGGER update_kits_updated_at
    BEFORE UPDATE ON public.kits
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- RLS para kits
ALTER TABLE public.kits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Kits são visíveis publicamente"
    ON public.kits
    FOR SELECT
    USING (true);

CREATE POLICY "Apenas usuários autenticados podem inserir kits"
    ON public.kits
    FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Apenas usuários autenticados podem atualizar kits"
    ON public.kits
    FOR UPDATE
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Apenas usuários autenticados podem deletar kits"
    ON public.kits
    FOR DELETE
    USING (auth.role() = 'authenticated');

-- =====================================================
-- EXEMPLOS DE INSERÇÃO
-- =====================================================

-- Exemplo de Kit
INSERT INTO public.kits (
    nome,
    slug,
    categoria,
    aplicacao,
    imagem_url
) VALUES (
    'Caixa Cervical Translucente',
    'caixa-cervical-translucente',
    'caixa-cervical-translucente',
    'Kit completo para procedimentos cirúrgicos na região cervical da coluna vertebral. Indicado para artrodese, descompressão e fixação de vértebras cervicais. Contém instrumental específico para abordagem anterior e posterior, incluindo afastadores, curetas, pinças e sistemas de fixação.',
    'https://seu-projeto.supabase.co/storage/v1/object/public/kits/caixa-cervical-translucente.jpg'
);

-- Exemplo de Instrumentos
INSERT INTO public.instrumentos (
    nome,
    descricao,
    categoria,
    codigo,
    imagem_url
) VALUES
(
    'Afastador Caspar',
    'Afastador autoestático para cirurgias cervicais anteriores, com lâminas intercambiáveis e sistema de fixação seguro.',
    'caixa-cervical-translucente',
    'INSTR-001',
    'https://seu-projeto.supabase.co/storage/v1/object/public/instrumentos/afastador-caspar.jpg'
),
(
    'Cureta Cervical 0°',
    'Cureta reta para remoção de disco intervertebral cervical, confeccionada em aço inoxidável cirúrgico.',
    'caixa-cervical-translucente',
    'INSTR-002',
    'https://seu-projeto.supabase.co/storage/v1/object/public/instrumentos/cureta-cervical.jpg'
),
(
    'Pinça Kerrison Cervical',
    'Pinça tipo Kerrison especialmente desenvolvida para ressecção óssea em região cervical.',
    'caixa-cervical-translucente',
    'INSTR-003',
    'https://seu-projeto.supabase.co/storage/v1/object/public/instrumentos/pinca-kerrison.jpg'
);
