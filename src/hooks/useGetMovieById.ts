import { useEffect, useState } from 'react';
import { GetMovieByIdService } from '../services/MovieService';

import DetailMovieType from '../types/DetailMovie';
import State from '../types/StateType';

const useGetMovieById = (nIdMovie: number) => {
  const [service, setService] = useState({
    data: null,
    loading: true,
    error: false,
  } as State);

  useEffect((): any => {
    let mounted = true;
    (async () => {
      try {
        const oMovieResponse: DetailMovieType = await GetMovieByIdService(
          nIdMovie
        );
        if (!mounted) return;
        setService({ data: oMovieResponse, loading: false, error: false });
      } catch (e) {
        setService({ data: null, loading: false, error: false });
      }
    })();
    return () => (mounted = false);
  }, [nIdMovie]);

  return service;
};

export default useGetMovieById;
