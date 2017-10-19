import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import ProductCard from '../ProductCard';
import productData from '../ProductData';
import fetchDataToJSON from "../dataFetcher";
import datajson from "../product_api_data_test.json";
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

const productServiceEndpoint = 'http://team-solenya-product-dev.azurewebsites.net/';
jest.mock("../dataFetcher");
fetchDataToJSON.mockImplementation(() => {
    return productData;
});
// Fail tests on any warning
console.error = message => {
   throw new Error(message);
};

let dataElem = datajson[0];


describe('ProductCard', () => {



    it.skip('It should match snapshot', () => {
        const wrapper = shallow(
            <ProductCard />
        );
        expect(wrapper).toMatchSnapshot();
    });

	it('the name of the product is not empty', () => {
        console.log("what is this", dataElem.ProductName);
        const card = <ProductCard ProductName={dataElem.ProductName} Price={dataElem.Price} SplashImgUrl={dataElem.SplashImgUrl} DiscountPrice = {dataElem.DiscountPrice}/>;
        const wrapper = shallow(card);
        const name = wrapper.find('.productName');
        expect(name.text()).toEqual(dataElem.ProductName);
    });

	it('the price of the product is not empty', () => {
        const card = <ProductCard ProductName={dataElem.ProductName} Price={dataElem.Price} SplashImgUrl={dataElem.SplashImgUrl} DiscountPrice={dataElem.DiscountPrice} />;
        const wrapper = shallow(card);
        const price = wrapper.find('.productPrice');
        const priceString = "£"+((dataElem.Price.toString())/100).toFixed(2);
        expect(price.text()).toEqual(priceString);
    });

	it('the img url of the product is not empty', () => {
        const card = <ProductCard ProductName={dataElem.ProductName} Price={dataElem.Price} SplashImgUrl="foo"  DiscountPrice={dataElem.DiscountPrice} />;
        const wrapper = shallow(card);
        const img = wrapper.find('img');
        expect(img.prop("src")).toEqual('foo');
    });

    it('requires a price prop', () => {
        expect(() => shallow(<ProductCard Price={dataElem.Price} SplashImgUrl={dataElem.SplashImgUrl} />)).toThrow();
    });

    it('requires a name prop', () => {
        expect(() => shallow(<ProductCard ProductName={dataElem.ProductName} SplashImgUrl={dataElem.SplashImgUrl} />)).toThrow();
    });

     it('requires a splash url prop', () => {
        expect(() => shallow(<ProductCard ProductName={dataElem.ProductName} Price={dataElem.Price} />)).toThrow();
    });

    it('the alt tag is not empty', () => {
        const card = <ProductCard ProductName={dataElem.ProductName} Price={dataElem.Price} SplashImgUrl={dataElem.SplashImgUrl} DiscountPrice={dataElem.DiscountPrice} />;
        const wrapper = shallow(card);
        const img = wrapper.find('img');
        expect(img.prop("alt")).toEqual(dataElem.ProductName);
    });    

    it('requires discount price not to be empty when not null', ()=> {
        const card = <ProductCard ProductName={dataElem.ProductName} Price={dataElem.Price} SplashImgUrl={dataElem.SplashImgUrl} DiscountPrice = {dataElem.DiscountPrice} />;
        const wrapper = shallow(card);
        const DiscountPrice = wrapper.find('.productDiscount');
        const discountString = dataElem.DiscountPrice.toString();
        expect(DiscountPrice.text()).toEqual(discountString);
    });
});
//if discout is not null should not be empty
