import { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from './MovieDetail.module.scss';
import DetailMovieType, {
  Genrer,
  ProductionCompany,
} from '../../../types/DetailMovie';
import DataMovie from '../../global/DataMovie';
import { useIsMobile } from '../../../hooks/useIsMobile';

interface PropsMovieDetail {
  movie: DetailMovieType;
}

const MovieDetail: FunctionComponent<PropsMovieDetail> = ({ movie }) => {
  const isMobile = useIsMobile();
  return (
    <Grid container className={Styles.container}>
      <Grid item xs={12} sm={5} md={6} lg={4}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : `/images.png`
          }
          alt={movie.title}
          className={Styles.img}
          onError={console.log}
        />
      </Grid>
      <Grid item xs={12} sm={7} md={6} lg={8}>
        <DataMovie movie={movie} className={Styles.modifiedData} />
        <div className={Styles.desc}>
          {isMobile ? <div className={Styles.title2}>{movie.title}</div> : null}
          {movie.overview}
        </div>
        <div className={Styles.genres}>
          <strong>Generos:</strong>
          {movie.genres.map((genrer: Genrer) => (
            <div key={genrer.id}>{genrer.name}</div>
          ))}
        </div>
        <div className={Styles.companies}>
          <strong>Producido por:</strong>
          {movie.production_companies.map((company: ProductionCompany) => (
            <div key={company.id}>
              <img
                src={
                  company.logo_path
                    ? `https://image.tmdb.org/t/p/w500${company.logo_path}`
                    : `/images.png`
                }
                alt={company.name}
              />
            </div>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default MovieDetail;
