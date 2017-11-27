import React from "react";
import PropTypes from "prop-types";
import Dropdown from "react-dropdown";
import { getColours, getImages } from "./functions.js";
import "./style.css";
import getDeviceWidth from "../../GlobalFunctions/GetDeviceWidth";
import logToNewRelic from "../../GlobalFunctions/LogToNewRelic";

var Carousel = require('nuka-carousel');

const PdpElement = props => {
  let colours = getColours(props.ImageOptions);
  let imagePaths = getImages(props.ImageOptions);
  const defaultOption = colours[0];


  let deviceWidth = getDeviceWidth();
  logToNewRelic(
    "Pdp-" +
    props.ProductName +
    "-" +
    props.ProductId +
    "-LoadedWithDeviceWidth-" +
    deviceWidth
  );

  return (
    <div className="PdpElement">
      <div className="imageCarousel">
        <Carousel>
          <img
            id="img1"
            width="150"
            src={imagePaths[0]}
            alt={props.ProductName}
          />
          <img
            id="img2"
            width="150"
            src={imagePaths[1]}
            alt={props.ProductName}
          />
          <img
            id="img3"
            width="150"
            src={imagePaths[2]}
            alt={props.ProductName}
          />
          <img
            id="img4"
            width="150"
            src={imagePaths[3]}
            alt={props.ProductName}
          />
        </Carousel>
      </div>

      <div className="productMainInfo">
        <div className="productMainInfoText">
          <div className="pdpProductName">
            <div className="pdpNameValue">{props.ProductName}</div>
          </div>
          <div className="pdpPrice">
            <div className="pdpDiscountValue">
              {props.DiscountPrice === null ? (
                <div className="pdpProductPrice">
                  £{(props.Price / 100).toFixed(2)}
                </div>
              ) : (
                  <div>
                    <div className="pdpProductPriceSlashed">
                      £{(props.Price / 100).toFixed(2)}
                    </div>
                    <div className="pdpProductDiscount">
                      £{(props.DiscountPrice / 100).toFixed(2)}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
        <div className="pdpVariants">
          <h4 className="colourName">COLOUR:</h4>
          <div className="colourMenu">
            {colours.length === 1 ? (
              <div className="productColourValue">{colours}</div>
            ) : (
                <Dropdown
                  className="colourSelector"
                  options={colours}
                  value={defaultOption}
                />
              )}
          </div>
          <h4 className="sizeHeader">SIZE:</h4>
          <Dropdown
            className="sizeSelector"
            options={["XS", "S", "M", "L", "XL"]}
            value={"XS"}
          />
        </div>
        <div className="bagButtonContainer">
          <button className="bagButton" type="button">ADD TO BAG</button>
        </div>
      </div>
      <div className="productExtraInfo">
        <div className="productDescription">
          <h4 className="prodDescHeader">PRODUCT DESCRIPTION</h4>
          <div className="productDescriptionValue">
            {props.ProductDescription}
          </div>
        </div>
        <div className="productBrand">
          <h4 className="prodBrandHeader">PRODUCT BRAND</h4>
          <div className="productBrandValue">{props.ProductBrand}</div>
        </div>
        <div className="brandDescription">
          <h4 className="brandDescHeader">BRAND DESCRIPTION</h4>
          <div className="brandDescriptionValue">{props.BrandDescription}</div>
        </div>
        <div className="materials">
          <h4 className="materialsHeader">MATERIALS</h4>
          <div className="materialsValue">{props.Materials}</div>
        </div>
      </div>
    </div>
  );
};

PdpElement.propTypes = {
  ProductId: PropTypes.number.isRequired,
  Price: PropTypes.number.isRequired,
  ProductName: PropTypes.string.isRequired,
  ProductDescription: PropTypes.string.isRequired,
  ProductBrand: PropTypes.string.isRequired,
  BrandDescription: PropTypes.string.isRequired,
  Materials: PropTypes.string.isRequired,
  ImageOptions: PropTypes.array.isRequired,
  DiscountPrice: PropTypes.number
};

export default PdpElement;
