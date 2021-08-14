import nock from 'nock';
import { mount } from 'enzyme';
import MovieListPaginator from '../../components/Home/MovieListPaginator';
import SearchServiceMock from '../../utils/mocks/SearchServiceMock';
import { BrowserRouter } from 'react-router-dom';

process.env.REACT_APP_API_KEY = '1234';

describe('MovieListPaginator Test', () => {
  test('Initial State', () => {
    const props = {
      paginationData: {
        results: SearchServiceMock.results.map((item: any) => ({
          id: item.id,
          adult: item.adult,
          title: item.title,
          overview: item.overview,
          release_date: item.release_date,
          poster_path: item.poster_path,
          backdrop_path: item.backdrop_path,
          video: item.video,
          vote_average: item.vote_average,
          vote_count: item.vote_count,
          original_language: item.original_language,
        })),
        page: SearchServiceMock.page,
        total_pages: SearchServiceMock.total_pages,
        total_results: SearchServiceMock.total_results,
      },
      onChangePage: jest.fn(),
    };
    const oMounted = mount(
      <BrowserRouter>
        <MovieListPaginator {...props} />
      </BrowserRouter>
    );
    
    oMounted.find('.MuiPaginationItem-root').at(0).simulate("click");

    const mEvent = {
      target: { scrollWidth: 100, scrollLeft: 50, clientWidth: 50 },
    };
    oMounted.update();
    expect(oMounted).toMatchSnapshot();
    oMounted.find('.container').at(0).simulate('scroll', mEvent);

    oMounted.update();
    expect(oMounted.text()).toMatch(
      `Se encontraron ${SearchServiceMock.total_results} resultados`
    );
  });
});
