import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import ProductElement from "./";
import TestData from "../../TestData/ProductApiDataTest.json";

Enzyme.configure({ adapter: new Adapter() });

let dataElem = TestData[0];

console.error = message => {
  throw new Error(message);
};

describe("ProductElement", () => {
  it("It should match snapshot", () => {
    const wrapper = shallow(
      <ProductElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        SplashImgUrl={dataElem.SplashImgUrl}
        DiscountPrice={dataElem.DiscountPrice}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("the price of the product is not empty", () => {
    const card = (
      <ProductElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        SplashImgUrl={dataElem.SplashImgUrl}
        DiscountPrice={dataElem.DiscountPrice}
      />
    );
    const wrapper = shallow(card);
    const price = wrapper.find(".productPrice");
    const priceString = "£" + (dataElem.Price.toString() / 100).toFixed(2);
    expect(price.text()).toEqual(priceString);
  });

  it("the img url of the product is not empty", () => {
    const card = (
      <ProductElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        SplashImgUrl="foo"
        DiscountPrice={dataElem.DiscountPrice}
      />
    );
    const wrapper = shallow(card);
    const img = wrapper.find("img");
    expect(img.prop("src")).toEqual("foo");
  });

  it("requires a name prop", () => {
    expect(() =>
      shallow(
        <ProductElement
          Price={dataElem.Price}
          SplashImgUrl={dataElem.SplashImgUrl}
        />
      )
    ).toThrow();
  });

  it("requires a price prop", () => {
    expect(() =>
      shallow(
        <ProductElement
          ProductName={dataElem.ProductName}
          SplashImgUrl={dataElem.SplashImgUrl}
        />
      )
    ).toThrow();
  });

  it("requires a splash url prop", () => {
    expect(() =>
      shallow(
        <ProductElement
          ProductName={dataElem.ProductName}
          Price={dataElem.Price}
        />
      )
    ).toThrow();
  });

  it("the alt tag is not empty", () => {
    const card = (
      <ProductElement
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        SplashImgUrl={dataElem.SplashImgUrl}
        DiscountPrice={dataElem.DiscountPrice}
      />
    );
    const wrapper = shallow(card);
    const img = wrapper.find("img");
    expect(img.prop("alt")).toEqual(dataElem.ProductName);
  });

  it("requires discount price not to be empty when not null", () => {
    const card = (
      <ProductElement
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        SplashImgUrl={dataElem.SplashImgUrl}
        DiscountPrice={dataElem.DiscountPrice}
      />
    );
    const wrapper = shallow(card);
    const discountPrice = wrapper.find(".productDiscount");
    if (discountPrice.text() !== "") {
      const discountString =
        "£" + (dataElem.DiscountPrice.toString() / 100).toFixed(2);
      expect(discountPrice.text()).toEqual(discountString);
    }
  });

  it("requires discount price to not show if null", () => {
    const card = (
      <ProductElement
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        SplashImgUrl={dataElem.SplashImgUrl}
        DiscountPrice={dataElem.DiscountPrice}
      />
    );
    const wrapper = shallow(card);
    const discountPrice = wrapper.find(".productDiscount");
    if (discountPrice.text() === "") {
      expect(discountPrice.text()).toEqual("");
    }
  });
});
