import React from "react";

import Header from "../Header/index.jsx";

import Enzyme, { shallow } from "enzyme";

import ProductElement from "../ProductElement";

import Adapter from "enzyme-adapter-react-15";

import TestData from "../../TestData/ProductApiDataTest.json";

Enzyme.configure({ adapter: new Adapter() });

let dataElem = TestData[0];

console.error = message => {
  throw new Error(message);
};

describe("Link Logging", () => {
  beforeEach(() => {
    global.newrelic = {
      addPageAction: jest.fn()
    };
  });

  it("Should have a link tag", () => {
    const wrapper = shallow(<Header />);
    const linkTag = wrapper.find("Link");
    expect(linkTag.exists()).toBe(true);
  });

  it("Should log a single click for one link", () => {
    const wrapper = shallow(<Header />);
    const linkTag = wrapper.find("Link");
    linkTag.simulate("click");
    expect(global.newrelic.addPageAction).toHaveBeenCalledTimes(1);
  });

  it("Should log the home click", () => {
    const wrapper = shallow(<Header />);
    const linkTag = wrapper.find("Link");
    linkTag.simulate("click");
    expect(global.newrelic.addPageAction).toHaveBeenCalledWith("clickToHome");
  });


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
});
