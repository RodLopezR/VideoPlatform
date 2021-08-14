import { Fragment } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import Footer from '../components/global/Footer';
import LoadingComponent from '../components/global/LoadingComponent';
import HeaderDetail from '../components/MovieDetail/HeaderDetail';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import AppRoutes from '../constants/AppRoutes';
import useGetMovieById from '../hooks/useGetMovieById';
import State from '../types/StateType';

type MoviePageParam = { id: string };

const MoviePage = () => {
  const { id } = useParams<MoviePageParam>();
  const hookState: State = useGetMovieById(Number(id));

  if (hookState.error) {
    return <Redirect to={AppRoutes.Home} />;
  }

  return (
    <Fragment>
      <HeaderDetail data={hookState} />
      {hookState.loading ? (
        <LoadingComponent />
      ) : (
        <MovieDetail movie={hookState.data} />
      )}
      <Footer />
    </Fragment>
  );
};

export default MoviePage;
