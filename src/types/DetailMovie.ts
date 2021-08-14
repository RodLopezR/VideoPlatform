export interface ProductionCompany {
  id: string;
  name: string;
  logo_path?: string;
}

export interface Genrer {
  id: string;
  name: string;
}
export interface Languajes {
  english_name: string;
  iso_639_1: string;
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
  spoken_languages: Languajes[]; 
  popularity?: number;
  homepage?: string;
  status?: string;
  genres: Genrer[];
  production_companies: ProductionCompany[];
}

export default DetailMovieType;
