import { mount } from 'enzyme';
import { MemoryRouter, useParams } from 'react-router-dom';

import MoviePage from '../../pages/MoviePage';

describe('MoviePage tests', () => {
  test('Normal render loading', () => {
    const oMounted = mount(
      <MemoryRouter initialEntries={['123']}>
        <MoviePage />
      </MemoryRouter>
    );

    oMounted.update();
    expect(oMounted.text()).toMatch('Nusflix.com');
  });
});
