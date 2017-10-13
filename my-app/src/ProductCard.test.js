import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
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

let dataElem = productData[0];

describe('ProductCard', () => {

    it.skip('It should match snapshot', () => {
        const wrapper = shallow(
            <ProductCard />
        );
        expect(wrapper).toMatchSnapshot();
    });

	it('the name of the product is not empty', () => {
        const card = <ProductCard productName={dataElem.productName} price={dataElem.price} splashImgUrl={dataElem.splashImgUrl} />;
        const wrapper = shallow(card);
        const name = wrapper.find('.productName');
        expect(name.text()).toEqual(dataElem.productName);
    });

	it('the price of the product is not empty', () => {
        const card = <ProductCard productName={dataElem.productName} price={dataElem.price} splashImgUrl={dataElem.splashImgUrl} />;
        const wrapper = shallow(card);
        const price = wrapper.find('.productPrice');
        expect(price.text()).toEqual(dataElem.price);
    });

	it('the img url of the product is not empty', () => {
        const card = <ProductCard productName={dataElem.productName} price={dataElem.price} splashImgUrl="foo" />;
        const wrapper = shallow(card);
        const img = wrapper.find('img');
        expect(img.prop("src")).toEqual('foo');
    });

    it('requires a price prop', () => {
        expect(() => shallow(<ProductCard price={dataElem.price} splashImgUrl={dataElem.splashImgUrl} />)).toThrow();
    });

    it('requires a name prop', () => {
        expect(() => shallow(<ProductCard productName={dataElem.productName} splashImgUrl={dataElem.splashImgUrl} />)).toThrow();
    });

     it('requires a splash url prop', () => {
        expect(() => shallow(<ProductCard productName={dataElem.productName} price={dataElem.price} />)).toThrow();
    });

    it('the alt tag is not empty', () => {
        const card = <ProductCard productName={dataElem.productName} price={dataElem.price} splashImgUrl={dataElem.splashImgUrl} />;
        const wrapper = shallow(card);
        const img = wrapper.find('img');
        expect(img.prop("alt")).toEqual(dataElem.productName);
    });    

});
