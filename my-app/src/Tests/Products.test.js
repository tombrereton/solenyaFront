import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import ProductPage from '../Plp/Plp';
import ProductData from '../Plp/ProductData';
import Products from '../Plp/Products';
import ProductElement from '../Plp/ProductElement';



// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


describe('Plp', () => {

  it('renders all products', () => {
    const wrapper = shallow(<Products productElements = {ProductData} />);
    const products = wrapper.find(ProductElement);
    expect(ProductData.length).toEqual(products.length);

  });
});


