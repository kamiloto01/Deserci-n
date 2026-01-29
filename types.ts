
export interface RetentionData {
  IES: string;
  Periodo: string;
  Desertores: number;
  Matriculados: number;
  Desercion: number; // Decimal percentage (e.g. 0.026)
  Ranking: number;
  NombreInstitucion: string;
  Departamento: string;
  Municipio: string;
  CaracterAcademico?: string;
  Acreditada?: string;
  UReferencia?: string;
}

export enum RankingType {
  NACIONAL = 'Ranking_Nacional',
  UNIVERSIDADES = 'Ranking_Universidades',
  U_REF = 'Ranking_U_Ref',
  U_ACREDITADAS = 'Ranking_U_Acreditadas'
}

export interface AnalysisResponse {
  answer: string;
  source: string;
  data: RetentionData[];
  comparisonData?: RetentionData[];
}
