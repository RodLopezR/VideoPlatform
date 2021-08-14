import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Grid } from '@material-ui/core';

import DataMovie from '../../global/DataMovie';
import Styles from './ItemMovie.module.scss';
import ItemMovieProps from './ItemMovie.types';
import AppRoutes from '../../../constants/AppRoutes';

const ItemMovie: FunctionComponent<ItemMovieProps> = ({ movie }) => {
  const linkToMovie = AppRoutes.Detail.replace(':id', String(movie.id));
  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <NavLink
        to={linkToMovie}
        style={{ textDecoration: 'none' }}
        className="link-item"
      >
        <Card className={Styles.card}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : `./images.png`
            }
            alt={movie.title}
            className={Styles.img}
            onError={console.log}
          />
          <div className={Styles.shadow} />
          <div className={Styles.info_movie}>
            <h3 className={Styles.title}>{movie.title}</h3>
            <DataMovie movie={movie} />
            <div className={Styles.desc}>
              {movie.overview?.substr(0, 200)}
              {(movie.overview || '').length > 200 ? '...' : ''}
            </div>
          </div>
          <div className={Styles.shadowHover} />
        </Card>
      </NavLink>
    </Grid>
  );
};

export default ItemMovie;
