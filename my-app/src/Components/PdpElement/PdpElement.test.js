import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import PdpElement from '../PdpElement';
import fetchDataToJSON from "../../DataAccess/DataFetcher";
import TestData from "../../DataAccess/ProductApiPdpDataTest.json";

Enzyme.configure({ adapter: new Adapter() });

let dataElem = TestData[0];

console.error = message => {
    throw new Error(message);
 };

 describe('PdpElement',() => {

    
	it('the name of the product is not empty', () => {
      
        const card = <PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price}  DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>;
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

     it('requires discount price not to be empty when not null', ()=> {
         const card = <PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price} SplashImgUrl={dataElem.SplashImgUrl} DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>;
         const wrapper = shallow(card);
         const discountPrice = wrapper.find('.productDiscountValue');
         if(discountPrice.text() !=""){
             const discountString = "£"+((dataElem.DiscountPrice.toString())/100).toFixed(2);
             expect(discountPrice.text()).toEqual(discountString);
         }
     });

     it('requires discount price to not show if null', ()=> {
         const card = <PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price} SplashImgUrl={dataElem.SplashImgUrl} DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>;
         const wrapper = shallow(card);
         const discountPrice = wrapper.find('.productDiscountValue');
         if(discountPrice.text() == ""){
             expect(discountPrice.text()).toEqual("");
         }
     });

    it('each img url of the products is not empty', () => {
        const card = <PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price} SplashImgUrl={'foo'} DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>;
        const wrapper = shallow(card);
        const img1 = wrapper.find('#img1');
        const img2 = wrapper.find('#img2');
        const img3 = wrapper.find('#img3');
        const img4 = wrapper.find('#img4');
        const imagePaths = getImages(dataElem.ImageOptions);
        expect(img1.prop("src")).toEqual(imagePaths[0]);
        expect(img2.prop("src")).toEqual(imagePaths[1]);
        expect(img3.prop("src")).toEqual(imagePaths[2]);
        expect(img4.prop("src")).toEqual(imagePaths[3]);
    });

    it('requires a name prop', () => {
        expect(() => shallow(<PdpElement Price={dataElem.Price} DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>)).toThrow();
    });

    it('requires a price prop', () => {
        expect(() => shallow(<PdpElement ProductName={dataElem.ProductName}  DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>)).toThrow();
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
        expect(() => shallow(<PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price} DiscountPrice = {dataElem.DiscountPrice} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>)).toThrow();
    });

    it('renders image carousel', () => {
        const card = <PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price} DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>;
        const wrapper = shallow(card);
        const carousel = wrapper.find('.imageCarousel');
        expect(carousel.find('img').exists()).toBe(true);
    });

    it('has one colour options', () => {
        const card = <PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price}  DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={dataElem.ImageOptions} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>;
        const wrapper = shallow(card);
        let colours = getColours(dataElem.ImageOptions);
        if(colours.length == 1) {
            const singleColour = wrapper.find(".productColourValue");
            expect(colours[0]).toEqual(singleColour.text());
        }
    });

    it('has multiple colour options', ()=> {
        let multipleImageOptions = dataElem.ImageOptions;
        multipleImageOptions.push(dataElem.ImageOptions[0]);
        const card = <PdpElement ProductName={dataElem.ProductName} Price={dataElem.Price}  DiscountPrice = {dataElem.DiscountPrice} ImageOptions ={multipleImageOptions} ProductDescription={dataElem.ProductDescription} ProductBrand={dataElem.ProductBrand} BrandDescription={dataElem.BrandDescription} Materials={dataElem.Materials}/>;
        const wrapper = shallow(card);
        let colours = getColours(dataElem.ImageOptions);
        console.log(colours);
        if(colours.length > 1){
            const multiColours = wrapper.find(".colourSelector");
            expect(multiColours.exists()).toBe(true);
        }
   });

     function getColours(imageOptions) {
         let colours = [];

         for (let i = 0; i < imageOptions.length; i++) {
             colours.push(imageOptions[i]["Colour"])
         }
         return colours
     }

     function getImages(imageOptions) {
         let images = [];

         for (let i = 0; i < imageOptions.length; i++) {
             for(let j = 0; j< imageOptions[i]["ImageList"].length; j++){
                 images.push(imageOptions[i]["ImageList"][j]);
             }
         }
         return images;
     }

 })