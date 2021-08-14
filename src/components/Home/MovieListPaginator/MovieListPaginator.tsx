import { useState, FunctionComponent, useEffect } from 'react';
import { SearchMovieType } from '../../../types/Services';

import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';

import ItemMovie from '../ItemMovie';
import MovieType from '../../../types/MovieType';
import Styles from './MovieListPaginator.module.scss';

type Props = {
  paginationData: SearchMovieType;
  onChangePage: (page: number) => void;
};

const MovieListPaginator: FunctionComponent<Props> = ({
  paginationData,
  onChangePage,
}) => {
  const [isFixed, setIsFixed] = useState(true);
  const handleChange = (_: any, page: number) => onChangePage(page);

  const handleScroll = () => {
    const { offsetHeight } = document.body;
    const {
      scrollY,
      screen: { height },
    } = window;
    if (offsetHeight - (scrollY + height) > -4) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Grid container className={Styles.container}>
      <div className={Styles.infoResult}>
        Se encontraron <strong>{paginationData.total_results}</strong>{' '}
        resultados. Página {paginationData.page}
      </div>
      <Grid container className={Styles.containerMovies}>
        {paginationData.results.map((movie: MovieType, index: Number) => (
          <ItemMovie key={movie.id} movie={movie} />
        ))}
      </Grid>
      {paginationData.total_pages > 1 ? (
        <div
          id="pagination-zone"
          className={clsx(Styles.pagination, isFixed ? Styles.fixed : '')}
        >
          <div className={Styles.paginationContent}>
            <Pagination
              count={paginationData.total_pages}
              page={paginationData.page}
              hidePrevButton
              hideNextButton
              onChange={handleChange}
            />
          </div>
        </div>
      ) : null}
    </Grid>
  );
};

export default MovieListPaginator;
