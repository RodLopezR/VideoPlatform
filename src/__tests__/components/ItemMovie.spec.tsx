import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import MovieType from '../../types/MovieType';
import ItemMovie from '../../components/Home/ItemMovie';

jest.useFakeTimers();

describe('ItemMovie ests', () => {
  test('Normal render', () => {
    const oMovie: MovieType = {
      title: 'Soy un titulo',
      overview:
        'La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. La mejor pelicula del mundo. ',
      poster_path: 'image.png',
    };
    const oMounted = mount(
      <BrowserRouter>
        <ItemMovie movie={oMovie} />
      </BrowserRouter>
    );

    const link = oMounted.find('a');
    link.simulate('click');

    expect(oMounted.text()).toMatch(`${oMovie.title}`);
    expect(oMounted.text()).toMatch(`${oMovie.overview?.substr(0, 200)}...`);
  });
  test('Normal render without image and long overview', () => {
    const oMovie: MovieType = {
      title: 'Soy un titulo',
    };
    const oMounted = mount(
      <BrowserRouter>
        <ItemMovie movie={oMovie} />
      </BrowserRouter>
    );

    expect(oMounted.text()).toMatch(`${oMovie.title}`);
  });
});
