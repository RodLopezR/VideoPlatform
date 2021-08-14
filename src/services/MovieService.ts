import axios from 'axios';
import DetailMovieType, {
  Genrer,
  ProductionCompany,
} from '../types/DetailMovie';
import MovieType from '../types/MovieType';
import { SearchMovieType } from '../types/Services';

const SearchMovieService = async (
  query: string,
  page: number
): Promise<SearchMovieType> => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const oAxiosResponse = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`
  );

  if (
    oAxiosResponse.status !== 200 ||
    !oAxiosResponse ||
    !oAxiosResponse.data ||
    !oAxiosResponse.data.results
  ) {
    throw new Error('El formato de respuesta no es el esperado');
  }

  const lMovies: MovieType[] = oAxiosResponse.data.results.map(
    (item: any): MovieType => {
      const {
        id,
        title,
        overview,
        release_date,
        poster_path,
        backdrop_path,
        video,
        vote_average,
        vote_count,
        original_language,
      } = item;
      return {
        id,
        title,
        overview,
        release_date,
        poster_path,
        backdrop_path,
        video,
        vote_average,
        vote_count,
        original_language,
      };
    }
  );

  const oSearchResult: SearchMovieType = {
    results: lMovies,
    page: oAxiosResponse.data.page,
    total_pages: oAxiosResponse.data.total_pages,
    total_results: oAxiosResponse.data.total_results,
  };

  return oSearchResult;
};

const GetMovieByIdService = async (
  idMovie: number
): Promise<DetailMovieType> => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const oAxiosResponse = await axios.get(
    `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${apiKey}`
  );

  if (
    oAxiosResponse.status !== 200 ||
    !oAxiosResponse ||
    !oAxiosResponse.data
  ) {
    throw new Error('El formato de respuesta no es el esperado');
  }

  const {
    id,
    title,
    overview,
    release_date,
    poster_path,
    backdrop_path,
    video,
    vote_average,
    vote_count,
    original_language,
  } = oAxiosResponse.data;

  const lGenres: Genrer[] = (oAxiosResponse.data.genres || []).map(
    (item: any): Genrer => {
      const { id, name } = item;
      return { id, name };
    }
  );
  const lCompanies: ProductionCompany[] = (
    oAxiosResponse.data.production_companies || []
  ).map((item: any): ProductionCompany => {
    const { id, name, logo_path } = item;
    return { id, name, logo_path };
  });

  const oResponse: DetailMovieType = {
    id,
    title,
    overview,
    release_date,
    poster_path,
    backdrop_path,
    video,
    vote_average,
    vote_count,
    original_language,
    genres: lGenres,
    production_companies: lCompanies,
  };
  return oResponse;
};

export { SearchMovieService, GetMovieByIdService };
