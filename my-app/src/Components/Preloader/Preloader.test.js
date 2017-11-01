/* eslint-disable no-unused-expressions, no-unused-import, no-undef */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Preloader from './';

describe('<Preloader />', () => {
  test('renders in DOM', () => {
    const wrapper = shallow(
      <Preloader
        classList={'Ambria'}
        copy={'Blue Max'}
      />
    );

    expect(wrapper).toExist;
  });

  test('applies class names when passed in', () => {
    const wrapper = shallow(
      <Preloader
        classList={'Hapes'}
        copy={'Mako Spince'}
      />
    );

    expect(wrapper.hasClass('Hapes')).toBe.true;
  });

  test('renders as expected', () => {
    const component = renderer.create(
      <Preloader
        classList={'Mimban'}
        copy={'Max Rebo'}
      />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
