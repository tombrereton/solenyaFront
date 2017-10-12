import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import ProductPage from './ProductPage';
import ProductCard from './ProductCard';
import productData from './ProductData';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
// Fail tests on any warning
console.error = message => {
   throw new Error(message);
};

describe('ProductCard', () => {

    it.skip('It should match snapshot', () => {
        const wrapper = shallow(
            <ProductCard />
        );
        expect(wrapper).toMatchSnapshot();
    });

	it('the name of the product is not empty', () => {
        let data_elem = productData[0];
        const card = <ProductCard product_name={data_elem.product_name} price={data_elem.price} splash_img_url={data_elem.splash_img_url} />;
        const wrapper = shallow(card);
        const name = wrapper.find('.productName');
        expect(name.text()).toEqual(data_elem.product_name);
    });

	it('the price of the product is not empty', () => {
        let data_elem = productData[0];
        const card = <ProductCard product_name={data_elem.product_name} price={data_elem.price} splash_img_url={data_elem.splash_img_url} />;
        const wrapper = shallow(card);
        const price = wrapper.find('.productPrice');
        expect(price.isEmpty()).toEqual(false);
    });

	it('the img url of the product is not empty', () => {
        let data_elem = productData[0];
        const card = <ProductCard product_name={data_elem.product_name} price={data_elem.price} splash_img_url="foo" />;
        const wrapper = shallow(card);
        const img = wrapper.find('img');
        expect(img.prop("src")).toEqual('foo');
    });

    it('requires a price prop', () => {
        let data_elem = productData[0];
        expect(() => shallow(<ProductCard product_name={data_elem.product_name} splash_img_url={data_elem.splash_img_url} />)).toThrow();
    })

    // test alt tag
    // prop types (done)
    // rename to camelcase

});
