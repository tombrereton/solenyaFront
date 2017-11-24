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
  it("It should match snapshot", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should have a link tag", () => {
    const wrapper = shallow(<Header />);
    const linkTag = wrapper.find("Link");
    expect(linkTag.exists()).toBe(true);
  });
});
