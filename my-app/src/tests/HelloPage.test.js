import React from 'react';
import ReactDOM from 'react-dom';
import HelloPage from '../HelloPage';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';


configure({ adapter: new Adapter() });


describe('<HelloPage/>', () => {


	it('the main page says hello', () => {

	   const wrapper = shallow(<HelloPage />);
       const header = wrapper.find('.HelloPage-title');    

       expect(header.contains('HELLO')).toEqual(true);
	
   });
	
});




