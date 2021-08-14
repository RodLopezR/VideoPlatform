import { mount } from 'enzyme';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import DetailMovieType from '../../types/DetailMovie';
import ResponsiveTest from '../../utils/ResponsiveTest';

describe('MovieDetail Test', () => {
  test('Normal render', () => {
    const oMovie: DetailMovieType = {
      title: 'Soy un titulo',
      overview:
        'La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. ',
      poster_path: 'image.png',
      genres: [],
      production_companies: [],
      spoken_languages: [],
    };
    const oMounted = mount(<MovieDetail movie={oMovie} />);
    expect(oMounted.text()).toMatch(oMovie.overview + '');
  });
  test('Mobile render', () => {
    const oMovie: DetailMovieType = {
      title: 'Soy un titulo',
      overview:
        'La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. ',
      genres: [{ id: '1', name: '123' }],
      production_companies: [
        { id: '1', name: '123', logo_path: '/' },
        { id: '2', name: '123' },
      ],
      spoken_languages: [],
    };
    const oMounted = mount(
      <ResponsiveTest initialWidth="sm">
        <MovieDetail movie={oMovie} />
      </ResponsiveTest>
    );
    expect(oMounted.text()).toMatch(oMovie.overview + '');
  });
});
