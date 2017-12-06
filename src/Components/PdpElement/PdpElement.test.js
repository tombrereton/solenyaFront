import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import PdpElement from "./";
import TestData from "../../TestData/ProductApiPdpDataTest.json";
import pdpTestData from "../../TestData/pdpTestData.json";
import { getColours, getImages, imageSwitcher } from "./functions";

Enzyme.configure({ adapter: new Adapter() });

let dataElem = TestData[0];

console.error = message => {
  throw new Error(message);
};

describe("PdpElement", () => {
  beforeEach(() => {
    global.newrelic = {
      addPageAction: jest.fn()
    };
  });
  it("the name of the product is not empty", () => {
    const card = (
      <PdpElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        DiscountPrice={dataElem.DiscountPrice}
        ImageOptions={dataElem.ImageOptions}
        ProductDescription={dataElem.ProductDescription}
        ProductBrand={dataElem.ProductBrand}
        BrandDescription={dataElem.BrandDescription}
        Materials={dataElem.Materials}
      />
    );
    const wrapper = shallow(card);
    const name = wrapper.find(".pdpProductName");
    expect(name.contains(dataElem.ProductName)).toEqual(true);
  });

  it("the price of the product is not empty", () => {
    const card = (
      <PdpElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        SplashImgUrl={dataElem.SplashImgUrl}
        DiscountPrice={dataElem.DiscountPrice}
        ImageOptions={dataElem.ImageOptions}
        ProductDescription={dataElem.ProductDescription}
        ProductBrand={dataElem.ProductBrand}
        BrandDescription={dataElem.BrandDescription}
        Materials={dataElem.Materials}
      />
    );
    const wrapper = shallow(card);
    const price = wrapper.find(".pdpProductPrice");
    const priceString = "£" + (dataElem.Price.toString() / 100).toFixed(2);

    expect(price.text()).toEqual(priceString);
  });

  it("requires discount price not to be empty when not null", () => {
    let discountPriceValue = 1200;
    const card = (
      <PdpElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        SplashImgUrl={dataElem.SplashImgUrl}
        DiscountPrice={discountPriceValue}
        ImageOptions={dataElem.ImageOptions}
        ProductDescription={dataElem.ProductDescription}
        ProductBrand={dataElem.ProductBrand}
        BrandDescription={dataElem.BrandDescription}
        Materials={dataElem.Materials}
      />
    );
    const wrapper = shallow(card);
    const discountPrice = wrapper.find(".pdpProductDiscount");
   
      expect(discountPrice.text()).toEqual("£12.00");
    
  });
  it("requires a name prop", () => {
    expect(() =>
      shallow(
        <PdpElement
          ProductId={dataElem.ProductId}
          Price={dataElem.Price}
          DiscountPrice={dataElem.DiscountPrice}
          ImageOptions={dataElem.ImageOptions}
          ProductDescription={dataElem.ProductDescription}
          ProductBrand={dataElem.ProductBrand}
          BrandDescription={dataElem.BrandDescription}
          Materials={dataElem.Materials}
        />
      )
    ).toThrow();
  });

  it("requires a price prop", () => {
    expect(() =>
      shallow(
        <PdpElement
          ProductId={dataElem.ProductId}
          ProductName={dataElem.ProductName}
          DiscountPrice={dataElem.DiscountPrice}
          ImageOptions={dataElem.ImageOptions}
          ProductDescription={dataElem.ProductDescription}
          ProductBrand={dataElem.ProductBrand}
          BrandDescription={dataElem.BrandDescription}
          Materials={dataElem.Materials}
        />
      )
    ).toThrow();
  });

  it("requires a product description prop", () => {
    expect(() =>
      shallow(
        <PdpElement
          ProductId={dataElem.ProductId}
          ProductName={dataElem.ProductName}
          Price={dataElem.Price}
          DiscountPrice={dataElem.DiscountPrice}
          ImageOptions={dataElem.ImageOptions}
          ProductBrand={dataElem.ProductBrand}
          BrandDescription={dataElem.BrandDescription}
          Materials={dataElem.Materials}
        />
      )
    ).toThrow();
  });

  it("requires a product brand prop", () => {
    expect(() =>
      shallow(
        <PdpElement
          ProductId={dataElem.ProductId}
          ProductName={dataElem.ProductName}
          Price={dataElem.Price}
          DiscountPrice={dataElem.DiscountPrice}
          ImageOptions={dataElem.ImageOptions}
          BrandDescription={dataElem.BrandDescription}
          Materials={dataElem.Materials}
        />
      )
    ).toThrow();
  });

  it("requires a brand description prop", () => {
    expect(() =>
      shallow(
        <PdpElement
          ProductId={dataElem.ProductId}
          ProductName={dataElem.ProductName}
          Price={dataElem.Price}
          DiscountPrice={dataElem.DiscountPrice}
          ImageOptions={dataElem.ImageOptions}
          Materials={dataElem.Materials}
        />
      )
    ).toThrow();
  });

  it("requires a materials prop", () => {
    expect(() =>
      shallow(
        <PdpElement
          ProductId={dataElem.ProductId}
          ProductName={dataElem.ProductName}
          Price={dataElem.Price}
          DiscountPrice={dataElem.DiscountPrice}
          ImageOptions={dataElem.ImageOptions}
          BrandDescription={dataElem.BrandDescription}
        />
      )
    ).toThrow();
  });

  it("requires an image options props", () => {
    expect(() =>
      shallow(
        <PdpElement
          ProductId={dataElem.ProductId}
          ProductName={dataElem.ProductName}
          Price={dataElem.Price}
          DiscountPrice={dataElem.DiscountPrice}
          ProductDescription={dataElem.ProductDescription}
          ProductBrand={dataElem.ProductBrand}
          BrandDescription={dataElem.BrandDescription}
          Materials={dataElem.Materials}
        />
      )
    ).toThrow();
  });

  it("renders image carousel", () => {
    const card = (
      <PdpElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        DiscountPrice={dataElem.DiscountPrice}
        ImageOptions={dataElem.ImageOptions}
        ProductDescription={dataElem.ProductDescription}
        ProductBrand={dataElem.ProductBrand}
        BrandDescription={dataElem.BrandDescription}
        Materials={dataElem.Materials}
      />
    );
    const wrapper = shallow(card);
    const carousel = wrapper.find(".imageCarousel");
    expect(carousel.find("img").exists()).toBe(true);
  });

  it("has one colour option for web", () => {
    const card = (
      <PdpElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        DiscountPrice={dataElem.DiscountPrice}
        ImageOptions={dataElem.ImageOptions}
        ProductDescription={dataElem.ProductDescription}
        ProductBrand={dataElem.ProductBrand}
        BrandDescription={dataElem.BrandDescription}
        Materials={dataElem.Materials}
      />
    );
    const wrapper = shallow(card);
    let colours = getColours(dataElem.ImageOptions);
    console.log("colours length: ", colours.length);
    if (colours.length === 1) {
      const singleColour = wrapper.find(".productColourValueWeb");
      console.log("this value: ", singleColour);
      expect(colours[0]).toEqual(singleColour.text());
    }
  });

  it("has multiple colour options for web", () => {
    let multipleImageOptions = dataElem.ImageOptions;
    multipleImageOptions.push(dataElem.ImageOptions[0]);
    const card = (
      <PdpElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        DiscountPrice={dataElem.DiscountPrice}
        ImageOptions={multipleImageOptions}
        ProductDescription={dataElem.ProductDescription}
        ProductBrand={dataElem.ProductBrand}
        BrandDescription={dataElem.BrandDescription}
        Materials={dataElem.Materials}
      />
    );
    const wrapper = shallow(card);
    let colours = getColours(dataElem.ImageOptions);
    if (colours.length > 1) {
      const multiColours = wrapper.find(".colourWebSelector");
      expect(multiColours.exists()).toBe(true);
    }
  });

  it("has one colour option for phone", () => {
    const card = (
      <PdpElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        DiscountPrice={dataElem.DiscountPrice}
        ImageOptions={dataElem.ImageOptions}
        ProductDescription={dataElem.ProductDescription}
        ProductBrand={dataElem.ProductBrand}
        BrandDescription={dataElem.BrandDescription}
        Materials={dataElem.Materials}
      />
    );
    const wrapper = shallow(card);
    let colours = getColours(dataElem.ImageOptions);
    console.log("colours length: ", colours.length);
    if (colours.length === 1) {
      const singleColour = wrapper.find(".productColourValuePhone");
      console.log("this value: ", singleColour);
      expect(colours[0]).toEqual(singleColour.text());
    }
  });

  it("has multiple colour options for phone", () => {
    let multipleImageOptions = dataElem.ImageOptions;
    multipleImageOptions.push(dataElem.ImageOptions[0]);
    const card = (
      <PdpElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        DiscountPrice={dataElem.DiscountPrice}
        ImageOptions={multipleImageOptions}
        ProductDescription={dataElem.ProductDescription}
        ProductBrand={dataElem.ProductBrand}
        BrandDescription={dataElem.BrandDescription}
        Materials={dataElem.Materials}
      />
    );
    const wrapper = shallow(card);
    let colours = getColours(dataElem.ImageOptions);
    if (colours.length > 1) {
      const multiColours = wrapper.find(".colourPhoneSelector");
      expect(multiColours.exists()).toBe(true);
    }
  });

  it("has add to bag button", () => {
    const card = (
      <PdpElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        DiscountPrice={dataElem.DiscountPrice}
        ImageOptions={dataElem.ImageOptions}
        ProductDescription={dataElem.ProductDescription}
        ProductBrand={dataElem.ProductBrand}
        BrandDescription={dataElem.BrandDescription}
        Materials={dataElem.Materials}
      />
    );
    const wrapper = shallow(card);
    expect(wrapper.find("button").exists()).toBe(true);
  });

  // it("has colour in dropdown which matches selected", () => {

  //   expect(imageSwitcher).toBe(pdpTestData);
    
    
  // });
});
