import nock from 'nock';
import GetMovieByIdMock from '../utils/mocks/GetMovieByIdMock';
import SearchServiceMock from '../utils/mocks/SearchServiceMock';

const MockGetSearchOk = (query: string, page: number) => {
  nock('https://api.themoviedb.org/3/search')
    .get(
      `/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${page}`
    )
    .reply(200, SearchServiceMock, { 'Access-Control-Allow-Origin': '*' });
};

const MockGetSearchError = (query: string, page: number) => {
  nock('https://api.themoviedb.org/3/search')
    .get(
      `/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${page}`
    )
    .reply(404, {}, { 'Access-Control-Allow-Origin': '*' });
};

const MockGetSearchBadResponse = (query: string, page: number) => {
  nock('https://api.themoviedb.org/3/search')
    .get(
      `/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${page}`
    )
    .reply(200, '', { 'Access-Control-Allow-Origin': '*' });
};

const MockGetMovieByIdOk = (query: number) => {
  nock('https://api.themoviedb.org/3/movie')
    .get(`/${query}?api_key=${process.env.REACT_APP_API_KEY}`)
    .reply(200, GetMovieByIdMock, { 'Access-Control-Allow-Origin': '*' });
};

const MockGetMovieByIdError = (query: number) => {
  nock('https://api.themoviedb.org/3/movie')
    .get(`/${query}?api_key=${process.env.REACT_APP_API_KEY}`)
    .reply(404, {}, { 'Access-Control-Allow-Origin': '*' });
};

const MockGetMovieByIdBadResponse = (query: number) => {
  nock('https://api.themoviedb.org/3/movie')
    .get(`/${query}?api_key=${process.env.REACT_APP_API_KEY}`)
    .reply(200, '', { 'Access-Control-Allow-Origin': '*' });
};

export {
  MockGetSearchOk,
  MockGetSearchError,
  MockGetSearchBadResponse,
  MockGetMovieByIdOk,
  MockGetMovieByIdError,
  MockGetMovieByIdBadResponse,
};
