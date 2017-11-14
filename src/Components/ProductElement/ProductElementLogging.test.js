import React from "react";
import ProductElement from "../ProductElement";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import TestData from "../../TestData/ProductApiDataTest.json";

Enzyme.configure({ adapter: new Adapter() });

let dataElem = TestData[0];

console.error = message => {
  throw new Error(message);
};

describe("Product Element Logging", () => {
  beforeEach(() => {
    global.newrelic = {
      addPageAction: jest.fn()
    };
  });

  it("Should have a link tag", () => {
    const wrapper = shallow(
      <ProductElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        SplashImgUrl={dataElem.SplashImgUrl}
        DiscountPrice={dataElem.DiscountPrice}
      />
    );

    const linkTag = wrapper.find("Link").first();
    expect(linkTag.exists()).toBe(true);
  });

  it("Should log a single click for one link", () => {
    const wrapper = shallow(
      <ProductElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        SplashImgUrl={dataElem.SplashImgUrl}
        DiscountPrice={dataElem.DiscountPrice}
      />
    );

    const linkTag = wrapper.find("Link").first();
    linkTag.simulate("click");

    expect(global.newrelic.addPageAction).toHaveBeenCalledTimes(1);
  });

  it("Should log the correct image click", () => {
    const wrapper = shallow(
      <ProductElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        SplashImgUrl={dataElem.SplashImgUrl}
        DiscountPrice={dataElem.DiscountPrice}
      />
    );

    const linkTag = wrapper.find("Link").first();
    linkTag.simulate("click");

    expect(global.newrelic.addPageAction).toHaveBeenCalledWith(
      "clickToProduct-" +
        dataElem.ProductName +
        "-" +
        dataElem.ProductId +
        "-WithImage"
    );
  });

  it("Should log the correct name click", () => {
    const wrapper = shallow(
      <ProductElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        SplashImgUrl={dataElem.SplashImgUrl}
        DiscountPrice={dataElem.DiscountPrice}
      />
    );

    const linkTag = wrapper.find("Link").last();
    linkTag.simulate("click");

    expect(global.newrelic.addPageAction).toHaveBeenCalledWith(
      "clickToProduct-" +
        dataElem.ProductName +
        "-" +
        dataElem.ProductId +
        "-WithName"
    );
  });
});
