export interface ProductionCompany {
  id: string;
  name: string;
  logo_path?: string;
}

export interface Genrer {
  id: string;
  name: string;
}

interface DetailMovieType {
  id?: string;
  title?: string;
  overview?: string;
  release_date?: string;
  poster_path?: string;
  backdrop_path?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  original_language?: string;
  genres: Genrer[];
  production_companies: ProductionCompany[];
}

export default DetailMovieType;
