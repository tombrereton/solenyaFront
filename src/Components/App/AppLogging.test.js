import React from "react";
import App from "../App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

Enzyme.configure({ adapter: new Adapter() });

console.error = message => {
  throw new Error(message);
};

describe("App Logging", () => {
  beforeEach(() => {
    global.newrelic = {
      addPageAction: jest.fn()
    };
  });

  it("Should have a link tag", () => {
    const wrapper = shallow(<App />);

    const linkTag = wrapper.find("Link");
    expect(linkTag.exists()).toBe(true);
  });

  it("Should log a single click for one link", () => {
    const wrapper = shallow(<App />);

    const linkTag = wrapper.find("Link");
    linkTag.simulate("click");

    expect(global.newrelic.addPageAction).toHaveBeenCalledTimes(1);
  });

  it("Should log the home click", () => {
    const wrapper = shallow(<App />);

    const linkTag = wrapper.find("Link");
    linkTag.simulate("click");

    expect(global.newrelic.addPageAction).toHaveBeenCalledWith("clickToHome");
  });
});
