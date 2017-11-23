import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import TestData from "../../TestData/ProductApiDataTest.json";
import ProductElement from "../ProductElement";

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
});
