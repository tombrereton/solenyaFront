import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import ProductData from "../../TestData/ProductData";
import Products from "./";
import ProductElement from "../ProductElement";

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe("Plp", () => {
  it("renders all products", () => {
    const wrapper = shallow(<Products productElements={ProductData} />);
    const products = wrapper.find(ProductElement);
    expect(ProductData.length).toEqual(products.length);
  });
});
