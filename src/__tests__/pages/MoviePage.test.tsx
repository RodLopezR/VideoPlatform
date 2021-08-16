import {
  act,
  cleanup,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter, MemoryRouter, Route, Router } from 'react-router-dom';

import MoviePage from '../../pages/MoviePage';
import {
  MockGetMovieByIdError,
  MockGetMovieByIdOk,
} from '../../utils/NockService';

afterEach(cleanup);
describe('MoviePage tests', () => {
  test('Normal render loading', async () => {
    const idMovie = 1576;
    const route = `/${idMovie}`;
    MockGetMovieByIdError(idMovie);

    const { getByText } = render(
      <MemoryRouter initialEntries={[route]}>
        <Route path="/:id">
          <MoviePage />
        </Route>
      </MemoryRouter>
    );

    getByText('Cargando resultados');
  });
  test('Normal render with data', async () => {
    const idMovie = 1576;
    const route = `/${idMovie}`;
    MockGetMovieByIdOk(idMovie);

    await act(async () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={[route]}>
          <Route path="/:id">
            <MoviePage />
          </Route>
        </MemoryRouter>
      );

      await waitForElementToBeRemoved(() => getByText('Cargando resultados'));
    });
  });
  test('Normal render with error', async () => {
    const idMovie = 1576;
    const route = `/${idMovie}`;
    MockGetMovieByIdError(idMovie);

    await act(async () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={[route]}>
          <Route path="/:id">
            <MoviePage />
          </Route>
        </MemoryRouter>
      );

      await waitForElementToBeRemoved(() => getByText('Cargando resultados'));
    });
  });
});
