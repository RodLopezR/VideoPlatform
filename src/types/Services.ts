import MovieType from './MovieType';

export interface SearchMovieType {
  results: MovieType[];
  page: number;
  total_pages: number;
  total_results: number;
}
