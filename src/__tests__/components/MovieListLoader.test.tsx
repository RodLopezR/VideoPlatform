import nock from 'nock';
import { mount } from 'enzyme';
import MovieListLoader from '../../components/Home/MovieListLoader';
import { act } from 'react-dom/test-utils';

process.env.REACT_APP_API_KEY = '1234';

describe('MovieListLoader Test', () => {
  test('Initial State', () => {
    const oQuerySearch: string = '';
    const oMounted = mount(<MovieListLoader querySearch={oQuerySearch} />);
    expect(oMounted.text()).toMatch('Ingresa un texto para buscar algo');
  });
  test('Normal render', async () => {
    const oQuerySearch: string = 'Iron man';
    nock('https://api.themoviedb.org')
      .get(
        `/3/search/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&query=${oQuerySearch}&page=${1}`
      )
      .reply(200, {
        access_token: 'fakeToken',
      });

    const oMounted = mount(<MovieListLoader querySearch={oQuerySearch} />);

    oMounted.update();
    expect(oMounted.text()).toMatch('Cargando');
  });
});
