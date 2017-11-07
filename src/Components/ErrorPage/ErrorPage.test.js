import React from 'react';
import ErrorPage from './';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

describe('ErrorPage', () => {

	it('shows an error message', () => {
		const wrapper = shallow(<ErrorPage />);
		const header = wrapper.find('.EP-header');
		expect(header.contains('Sorry, Something Went Wrong')).toEqual(true);
	});
});
