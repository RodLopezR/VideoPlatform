import nock from 'nock';
import {
  SearchMovieService,
  GetMovieByIdService,
} from '../../services/MovieService';
import {
  MockGetMovieByIdBadResponse,
  MockGetMovieByIdError,
  MockGetMovieByIdOk,
  MockGetSearchBadResponse,
  MockGetSearchError,
  MockGetSearchOk,
} from '../../utils/NockService';

describe('Services tests', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });
  test('SearchMovieService', async () => {
    const query = 'Megaman';
    MockGetSearchOk(query, 1);

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
    MockGetSearchError(query, 1);

    try {
      await SearchMovieService(query, 1);
    } catch (e) {
      expect(e.message).not.toBeNull();
      expect(e.message).toMatch('404');
    }
  });
  test('SearchMovieService with bad response format', async () => {
    const query = 'Megaman';
    MockGetSearchBadResponse(query, 1);

    try {
      await SearchMovieService(query, 1);
    } catch (e) {
      expect(e.message).not.toBeNull();
      expect(e.message).toMatch('El formato de respuesta no es el esperado');
    }
  });
  test('GetMovieByIdService test', async () => {
    const query = 1726;
    MockGetMovieByIdOk(query);

    const oResponse = await GetMovieByIdService(query);
    expect(oResponse).not.toBeNull();
    expect(oResponse.genres).not.toBeNull();
    expect(oResponse.backdrop_path).not.toBeNull();
    expect(oResponse.original_language).not.toBe(0);
    expect(oResponse.release_date).not.toBeNull();
    expect(oResponse.title).not.toBeNull();
  });
  test('GetMovieByIdService with server error', async () => {
    const query = 1726;
    MockGetMovieByIdError(query);

    try {
      await GetMovieByIdService(query);
    } catch (e) {
      expect(e.message).not.toBeNull();
      expect(e.message).toMatch('404');
    }
  });
  test('GetMovieByIdService with bad response format', async () => {
    const query = 1726;
    MockGetMovieByIdBadResponse(query);

    try {
      await GetMovieByIdService(query);
    } catch (e) {
      expect(e.message).not.toBeNull();
      expect(e.message).toMatch('El formato de respuesta no es el esperado');
    }
  });
});
