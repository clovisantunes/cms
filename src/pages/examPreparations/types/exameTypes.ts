export interface DadosPreparo {
  jejum?: string;
  medicamentos?: string;
  tempoPreparo?: string;
  outrosCuidados?: string[];
}

export interface PreparoExameProps {
  preparacao: DadosPreparo;
  duracaoExame?: string;
  resultados?: string;
  quandoFazer?: string;
  contraIndicacoes?: string[];
  
  titulo?: string;
  mostrarQuandoFazer?: boolean;
  mostrarContraIndicacoes?: boolean;
  mostrarResultados?: boolean;
  variante?: 'completo' | 'simples' | 'card';
  
  onAgendarClick?: () => void;
  onLigarClick?: () => void;
}

export interface Exame {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  bannerImage: string;
  icon: string;
  tag: string;
  preparacao: DadosPreparo;
  duracaoExame: string;
  resultados: string;
  quandoFazer: string;
  contraIndicacoes?: string[];
  breadcrumb: Array<{ name: string; path: string }>;
}