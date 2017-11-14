import React from 'react';
import ProductElement from '../ProductElement';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import TestData from "../../TestData/ProductApiDataTest.json";
// import {addPageAction} from 'newrelic';

Enzyme.configure({ adapter: new Adapter() });

let dataElem = TestData[0]

console.error = message => {
  throw new Error(message); 
};

describe('logging', () => {
  beforeEach(() => {
    global.newrelic = {
      addPageAction: jest.fn()
    }
    console.log("hits from the bong");
  });

	it('logs a single click for one link', () => {

        const wrapper = shallow(<ProductElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        SplashImgUrl={dataElem.SplashImgUrl}
        DiscountPrice={dataElem.DiscountPrice}
      />);

      const linkTag = wrapper.find("Link").first();
      expect(linkTag.exists()).toBe(true);

      linkTag.simulate('click');

      expect(global.newrelic.addPageAction).toHaveBeenCalledTimes(1);
		
  });
  it('logs the correct click', () => {
    const wrapper = shallow(<ProductElement
        ProductId={dataElem.ProductId}
        ProductName={dataElem.ProductName}
        Price={dataElem.Price}
        SplashImgUrl={dataElem.SplashImgUrl}
        DiscountPrice={dataElem.DiscountPrice}
      />);

      const linkTag = wrapper.find("Link").first();
      expect(linkTag.exists()).toBe(true);

      linkTag.simulate('click');

      expect(global.newrelic.addPageAction).toHaveBeenCalledWith("clickedTryMe");

  })

});
