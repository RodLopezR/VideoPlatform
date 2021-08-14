import nock from 'nock';
import {
  SearchMovieService,
  GetMovieByIdService,
} from '../../services/MovieService';
import GetMovieByIdMock from '../../utils/mocks/GetMovieByIdMock';
import SearchServiceMock from '../../utils/mocks/SearchServiceMock';

describe('Services tests', () => {
  test('SearchMovieService', async () => {
    const query = 'Megaman';
    nock('https://api.themoviedb.org/3/search')
      .get(
        `/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&query=${query}&page=${1}`
      )
      .reply(200, SearchServiceMock, { 'Access-Control-Allow-Origin': '*' });

    const oResponse = await SearchMovieService(query, 1);
    expect(oResponse).not.toBeNull();
    expect(oResponse.page).not.toBeNull();
    expect(oResponse.results).not.toBeNull();
    expect(oResponse.results.length).not.toBe(0);
    expect(oResponse.total_pages).not.toBeNull();
    expect(oResponse.total_results).not.toBeNull();
  });
  test('SearchMovieService with server error', async () => {
    const query = 'Megaman';
    nock('https://api.themoviedb.org/3/search')
      .get(
        `/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&query=${query}&page=${1}`
      )
      .reply(404, {}, { 'Access-Control-Allow-Origin': '*' });

    try {
      await SearchMovieService(query, 1);
    } catch (e) {
      expect(e.message).not.toBeNull();
      expect(e.message).toMatch('404');
    }
  });
  test('SearchMovieService with bad response format', async () => {
    const query = 'Megaman';
    nock('https://api.themoviedb.org/3/search')
      .get(
        `/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&query=${query}&page=${1}`
      )
      .reply(200, { Hola: '123' }, { 'Access-Control-Allow-Origin': '*' });

    try {
      await SearchMovieService(query, 1);
    } catch (e) {
      expect(e.message).not.toBeNull();
      expect(e.message).toMatch('El formato de respuesta no es el esperado');
    }
  });
  test('GetMovieByIdService test', async () => {
    const query = 1726;
    nock('https://api.themoviedb.org/3/movie')
      .get(`/${query}?api_key=${process.env.REACT_APP_API_KEY}`)
      .reply(200, GetMovieByIdMock, { 'Access-Control-Allow-Origin': '*' });

    const oResponse = await GetMovieByIdService(query);
    expect(oResponse).not.toBeNull();
    expect(oResponse.genres).not.toBeNull();
    expect(oResponse.backdrop_path).not.toBeNull();
    expect(oResponse.original_language).not.toBe(0);
    expect(oResponse.release_date).not.toBeNull();
    expect(oResponse.title).not.toBeNull();
  });
  test('SearchMovieService with server error', async () => {
    const query = 1726;
    nock('https://api.themoviedb.org/3/movie')
      .get(`/${query}?api_key=${process.env.REACT_APP_API_KEY}`)
      .reply(404, {}, { 'Access-Control-Allow-Origin': '*' });

    try {
      await GetMovieByIdService(query);
    } catch (e) {
      expect(e.message).not.toBeNull();
      expect(e.message).toMatch('404');
    }
  });
  test('SearchMovieService with bad response format', async () => {
    const query = 1726;
    nock('https://api.themoviedb.org/3/movie')
      .get(`/${query}?api_key=${process.env.REACT_APP_API_KEY}`)
      .reply(200, '', { 'Access-Control-Allow-Origin': '*' });

    try {
      await GetMovieByIdService(query);
    } catch (e) {
      expect(e.message).not.toBeNull();
      expect(e.message).toMatch('El formato de respuesta no es el esperado');
    }
  });
});
