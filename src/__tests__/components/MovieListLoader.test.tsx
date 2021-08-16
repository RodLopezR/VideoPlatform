import nock from 'nock';
import { mount } from 'enzyme';
import MovieListLoader from '../../components/Home/MovieListLoader';
import { act } from 'react-dom/test-utils';
import { MockGetSearchError, MockGetSearchOk } from '../../utils/NockService';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

process.env.REACT_APP_API_KEY = '1234';

describe('MovieListLoader Test', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });
  test('Initial State', () => {
    const oQuerySearch: string = '';
    const oMounted = mount(<MovieListLoader querySearch={oQuerySearch} />);
    expect(oMounted.text()).toMatch('Ingresa un texto para buscar algo');
  });
  test('Normal render', async () => {
    const oQuerySearch: string = 'Iron man';
    MockGetSearchOk(oQuerySearch, 1);

    await act(async () => {
      const { getByText, getAllByText } = render(
        <BrowserRouter>
          <MovieListLoader querySearch={oQuerySearch} />
        </BrowserRouter>
      );

      await waitForElementToBeRemoved(() => getByText('Cargando resultados'));
      expect(getAllByText('Iron Man')).not.toBeNull();
    });
  });
  test('Render with error', async () => {
    const oQuerySearch: string = 'Iron man';
    MockGetSearchError(oQuerySearch, 1);

    await act(async () => {
      const { getByText } = render(
        <BrowserRouter>
          <MovieListLoader querySearch={oQuerySearch} />
        </BrowserRouter>
      );

      await waitForElementToBeRemoved(() => getByText('Cargando resultados'));
      expect(getByText('Error')).not.toBeNull();
    });
  });
});
