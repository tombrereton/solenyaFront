import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import ProductPage from './ProductPage';
import productData from './ProductData';
import ProductCard from './ProductCard';
import CardList from './CardList';


// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


describe('ProductPage', () => {

  it('renders all products', () => {
    const wrapper = shallow(<CardList cards = {productData} />);
    const products = wrapper.find(ProductCard);
    expect(products.length).toEqual(productData.length);
  });
});


