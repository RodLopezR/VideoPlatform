import { FunctionComponent, useEffect, useState } from 'react';
import State from '../../../types/StateType';
import MovielistPaginator from '../MovieListPaginator';
import LoadingComponent from '../../global/LoadingComponent';
import WelcomeComponent from '../../global/WelcomeComponent';

import { Container } from '@material-ui/core';
import { SearchMovieService } from '../../../services/MovieService';

interface PropsMovieListLoader {
  querySearch: string;
}

const MovieListLoader: FunctionComponent<PropsMovieListLoader> = ({
  querySearch,
}) => {
  const [page, setPage] = useState<number>(1);
  const [service, setService] = useState({
    data: null,
    loading: true,
    error: false,
  } as State);

  useEffect(() => {
    setPage(1);
  }, [querySearch]);

  useEffect(() => {
    (async () => {
      if (querySearch.trim() === '') return;
      setService({ data: null, loading: true, error: false });

      try {
        const oSearchResponse = await SearchMovieService(querySearch, page);
        setTimeout(() => {
          setService({ data: oSearchResponse, loading: false, error: false });
        }, 500);
      } catch (e) {
        setService({
          data: null,
          loading: false,
          error: true,
          errorMessage: e.message,
        });
      }
    })();
  }, [page, querySearch]);

  if (querySearch.trim() === '') {
    return <WelcomeComponent />;
  }

  const handleChangePage = (pageIn: number) => setPage(pageIn);

  return (
    <Container>
      {service.error ? (
        <div>Error</div>
      ) : service.loading ? (
        <LoadingComponent />
      ) : (
        <MovielistPaginator
          paginationData={service.data}
          onChangePage={handleChangePage}
        />
      )}
    </Container>
  );
};

export default MovieListLoader;
