import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import State from '../../types/StateType';
import HeaderDetail from '../../components/MovieDetail/HeaderDetail';

describe('HeaderDetail tests', () => {
  test('Normal render loading', () => {
    const oData: State = {
      data: null,
      loading: true,
      error: false,
    };
    const oMounted = mount(
      <BrowserRouter>
        <HeaderDetail data={oData} />
      </BrowserRouter>
    );

    const oButton = oMounted.find('.buttonBack');
    oButton.simulate('click');

    expect(oButton).not.toBeNull();
  });
  test('Normal render with data', () => {
    const oData: State = {
      data: {
        title: 'Soy el titulo',
        release_data: 'Fecha de lanzamiento',
      },
      loading: false,
      error: false,
    };
    const oMounted = mount(
      <BrowserRouter>
        <HeaderDetail data={oData} />
      </BrowserRouter>
    );

    const oButton = oMounted.find('.buttonBack');
    oButton.simulate('click');

    expect(oButton).not.toBeNull();
    expect(oMounted.text()).toMatch(oData.data.title);
  });
});
