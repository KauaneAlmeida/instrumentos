import { supabase } from './supabaseClient';
import { Instrumento, Kit } from './instrumentTypes';

export const instrumentService = {
  async getByCategoria(categoria: string): Promise<Instrumento[]> {
    try {
      const { data, error } = await supabase
        .from('instrumentos')
        .select('*')
        .eq('categoria', categoria)
        .order('nome', { ascending: true });

      if (error) {
        console.error('Erro ao buscar instrumentos por categoria:', error);
        throw new Error(`Erro ao buscar instrumentos: ${error.message}`);
      }

      return data || [];
    } catch (error) {
      console.error('Erro na função getByCategoria:', error);
      return [];
    }
  },

  async getByCodigo(codigo: string): Promise<Instrumento | null> {
    try {
      const { data, error } = await supabase
        .from('instrumentos')
        .select('*')
        .eq('codigo', codigo)
        .single();

      if (error) {
        console.error('Erro ao buscar instrumento por código:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Erro na função getByCodigo:', error);
      return null;
    }
  },

  async getAllCategorias(): Promise<string[]> {
    try {
      const { data, error } = await supabase
        .from('instrumentos')
        .select('categoria')
        .order('categoria', { ascending: true });

      if (error) {
        console.error('Erro ao buscar categorias:', error);
        throw new Error(`Erro ao buscar categorias: ${error.message}`);
      }

      const categoriasUnicas = [...new Set(data.map(item => item.categoria))];
      return categoriasUnicas;
    } catch (error) {
      console.error('Erro na função getAllCategorias:', error);
      return [];
    }
  },

  async getKitByCategoria(categoria: string): Promise<Kit | null> {
    try {
      const { data, error } = await supabase
        .from('kits')
        .select('*')
        .eq('categoria', categoria)
        .single();

      if (error) {
        console.error('Erro ao buscar kit por categoria:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Erro na função getKitByCategoria:', error);
      return null;
    }
  },

  async getKitBySlug(slug: string): Promise<Kit | null> {
    try {
      const { data, error } = await supabase
        .from('kits')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        console.error('Erro ao buscar kit por slug:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Erro na função getKitBySlug:', error);
      return null;
    }
  },

  async getAllKits(): Promise<Kit[]> {
    try {
      const { data, error } = await supabase
        .from('kits')
        .select('*')
        .order('nome', { ascending: true });

      if (error) {
        console.error('Erro ao buscar kits:', error);
        throw new Error(`Erro ao buscar kits: ${error.message}`);
      }

      return data || [];
    } catch (error) {
      console.error('Erro na função getAllKits:', error);
      return [];
    }
  }
};
