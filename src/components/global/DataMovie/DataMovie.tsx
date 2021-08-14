import clsx from 'clsx';
import { FunctionComponent } from 'react';
import MovieType from '../../../types/MovieType';
import StarIcon from '@material-ui/icons/Star';
import Styles from './DataMovie.module.scss';

interface PropsDataMovie {
  movie: MovieType;
  className?: string;
}

const DataMovie: FunctionComponent<PropsDataMovie> = ({
  movie,
  className = '',
}) => (
  <div className={clsx(Styles.info, className)}>
    {movie.release_date}
    <div className={Styles.votes}>
      <StarIcon />
      {movie.vote_average}
    </div>
    <div className={Styles.lang}>
      <strong>{movie.original_language?.toUpperCase()}</strong>
    </div>
  </div>
);

export default DataMovie;
