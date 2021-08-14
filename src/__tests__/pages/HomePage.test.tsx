import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import HomePage from '../../pages/HomePage';

describe('HomePage tests', () => {
  test('Normal render loading', () => {
    const oMounted = mount(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(oMounted.text()).toMatch('El mejor catálogo de peliculas');
  });
});
