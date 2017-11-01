import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import PdpElement from '../PdpElement';
import fetchDataToJSON from "../../DataAccess/DataFetcher";
import TestData from "../../DataAccess/ProductApiPdpDataTest.json";

Enzyme.configure({ adapter: new Adapter() });

let dataElem = TestData[0];

console.log(TestData[0])

console.error = message => {
    throw new Error(message);
 };

 describe('PdpElement',() => {

    
	it('the name of the product is not empty', () => {
      
        const card = <PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price} SplashImgUrl={dataElem.SplashImgUrl} DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>;
        const wrapper = shallow(card);
        const name = wrapper.find('.productName');
        expect(name.contains(dataElem.ProductName)).toEqual(true);
    });

    it('the price of the product is not empty', () => {
        const card = <PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price} SplashImgUrl={dataElem.SplashImgUrl} DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>;
        const wrapper = shallow(card);
        const price = wrapper.find('.priceValue');
        const priceString = "£"+((dataElem.Price.toString())/100).toFixed(2);

        expect(price.text()).toEqual(priceString);
    });

    it('the img url of the product is not empty', () => {
        const card = <PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price} SplashImgUrl={'foo'} DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>;
        const wrapper = shallow(card);
        const img = wrapper.find('img');
        expect(img.prop("src")).toEqual('foo');
    });

    it('requires a name prop', () => {
        expect(() => shallow(<PdpElement Price={dataElem.Price} SplashImgUrl={'foo'} DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>)).toThrow();
    });

    it('requires a price prop', () => {
        expect(() => shallow(<PdpElement ProductName={dataElem.ProductName} SplashImgUrl={'foo'} DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>)).toThrow();
    });

     it('requires a splash url prop', () => {
        expect(() => shallow(<PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price} DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>)).toThrow();
    });

    it('requires a product description prop', () => {
        expect(() => shallow(<PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price} DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>)).toThrow();
    });

    it('requires a product brand prop', () =>{
        expect(() => shallow(<PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price} DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>)).toThrow();
    });

    it('requires a brand description prop', () =>{
        expect(() => shallow(<PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price} DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} Materials={dataElem.Materials}/>)).toThrow(); 
    });
    
    it('requires a materials prop', () => {
        expect(() => shallow(<PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price} DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} BrandDescription={dataElem.BrandDescription}/>)).toThrow();
    });

    it('requires an image options props', () => {
        expect(() => shallow(<PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price} SplashImgUrl={'foo'} DiscountPrice = {dataElem.DiscountPrice} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>)).toThrow();
    });

 })