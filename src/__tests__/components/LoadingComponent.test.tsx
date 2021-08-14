import { mount } from 'enzyme';
import LoadingComponent from '../../components/global/LoadingComponent';

describe('LoadingComponent Test', () => {
  test('Normal render', () => {
    const oMounted = mount(<LoadingComponent />);
    expect(oMounted.text()).toMatch('Cargando');
  });
});
