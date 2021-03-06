import nock from 'nock';
import { mount, shallow } from 'enzyme';
import SearchForm from '../../components/Home/SearchForm';

describe('SearchForm Test', () => {
  test('Render normal', () => {
    const props = {
      onChange: jest.fn(),
      lastValue: '123',
    };
    const oMounted = mount(<SearchForm {...props} />);
    expect(oMounted.text()).toMatch('Buscar');

    const input = oMounted.find('input');
    const button = oMounted.find('button');
    const form = oMounted.find('form');

    input.simulate('change', { target: { value: 'Iron Man' } });
    oMounted.update();

    button.simulate('click');
    oMounted.update();

    input.simulate('keypress', { key: 'A' });
    oMounted.update();
    form.simulate('submit');
    oMounted.update();

    expect(input).not.toBeNull();
    expect(button).not.toBeNull();
    expect(props.onChange).toHaveBeenCalled();
  });
  test('Submit without data', () => {
    const props = {
      onChange: jest.fn(),
      lastValue: '123',
    };
    const oMounted = mount(<SearchForm {...props} />);
    expect(oMounted.text()).toMatch('Buscar');

    const input = oMounted.find('input');
    const button = oMounted.find('button');
    const form = oMounted.find('form');

    form.simulate('submit');
    oMounted.update();

    expect(input).not.toBeNull();
    expect(button).not.toBeNull();
  });
  test('Render with same querySearch', () => {
    const props = {
      onChange: jest.fn(),
      lastValue: '123',
    };
    const oMounted = mount(<SearchForm {...props} />);
    expect(oMounted.text()).toMatch('Buscar');

    const input = oMounted.find('input');
    const button = oMounted.find('button');
    const form = oMounted.find('form');

    input.simulate('keypress', { key: 'A' });
    oMounted.update();
    form.simulate('submit');
    oMounted.update();
    form.simulate('submit');
    oMounted.update();

    expect(input).not.toBeNull();
    expect(button).not.toBeNull();
  });
});
