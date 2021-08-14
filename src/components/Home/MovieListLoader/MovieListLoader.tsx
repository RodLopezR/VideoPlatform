import { FunctionComponent, useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { SearchMovieService } from '../../../services/MovieService';

import State from '../../../types/StateType';
import MovieListPaginator from '../MovieListPaginator';

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
    return <div>Hola, bienvenido</div>;
  }

  const handleChangePage = (pageIn: number) => setPage(pageIn);

  return (
    <Container>
      {service.error ? (
        <div>Error</div>
      ) : service.loading ? (
        <div>Cargando</div>
      ) : (
        <MovieListPaginator
          paginationData={service.data}
          onChangePage={handleChangePage}
        />
      )}
    </Container>
  );
};

export default MovieListLoader;
