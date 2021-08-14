interface MovieType {
  id?: string;
  adult?: boolean;
  title?: string;
  overview?: string;
  release_date?: string;
  poster_path?: string;
  backdrop_path?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  original_language?: string;
}

export default MovieType;
