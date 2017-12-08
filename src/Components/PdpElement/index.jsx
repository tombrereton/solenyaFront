import React, { Component } from "react";
import PropTypes from "prop-types";
import Dropdown from "react-dropdown";
import { getColours, getImages } from "./functions.js";
import "./style.css";
import getDeviceWidth from "../../GlobalFunctions/GetDeviceWidth";
import logToNewRelic from "../../GlobalFunctions/LogToNewRelic";
//import Pdp from "../Pdp";
var Carousel = require("nuka-carousel");
class PdpElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagePaths: [],
      colours: getColours(props.ImageOptions),
      currentColour: getColours(props.ImageOptions)[0],
      mixins: [Carousel.ControllerMixin],
    };
  }

  componentDidMount() {
    let deviceWidth = getDeviceWidth();
    logToNewRelic(
      "Pdp-" +
        this.props.ProductName +
        "-" +
        this.props.ProductId +
        "-LoadedWithDeviceWidth-" +
        deviceWidth
    );
  }

  handleImageLoaded() {
    var resizeEvent = window.document.createEvent('UIEvents');
    resizeEvent.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(resizeEvent);
  }

  onColourChangeWeb(e) {
    console.log("event fired web: ", e.value);
    this.setState({ currentColour: e.value });
  }

  onColourChangePhone(e) {
    console.log("event fired phone: ", e.target.value);
    this.setState({ currentColour: e.target.value });
  }

  render() {
    const images = getImages(this.props.ImageOptions, this.state.currentColour);
    return (
      <div className="PdpElement">
        <div className="imageCarousel">
          <Carousel edgeEasing="easeOutCirc">
          {images.map((element, index) => {
      return (
        <img
          id={"img" + index}
          src={element}
          alt={this.props.ProductName}
          key={index}
        />
      );
    })}
          </Carousel>
        </div>
        <div className ="tabletImageCarousel">
        <Carousel  slidesToShow={2} slidesToScroll={2} edgeEasing="easeOutCirc" >
            {images.map((element, index) => {
              return (
                <img
                  id={"img" + index}
                  width="150"
                  src={element}
                  alt={this.props.ProductName}
                  key={index}
                />
              );
            })}
          </Carousel>
          </div>
        <div className ="webImageCarousel">
        <Carousel  slidesToShow={3} slidesToScroll={3} edgeEasing="easeOutCirc" >
        {images.map((element, index) => {
          return (
            <img
              id={"img" + index}
              src={element}
              alt={this.props.ProductName}
              key={index}
              onLoad={this.handleImageLoaded}
            />
          );
        })}
          </Carousel>
          </div>

        <div className="productMainInfo">
          <div className="productMainInfoText">
            <div className="pdpProductName">
              <div className="pdpNameValue">{this.props.ProductName}</div>
            </div>
            <div className="pdpPrice">
              <div className="pdpDiscountValue">
                {this.props.DiscountPrice === null ? (
                  <div className="pdpProductPrice">
                    £{(this.props.Price / 100).toFixed(2)}
                  </div>
                ) : (
                  <div>
                    <div className="pdpProductPriceSlashed">
                      £{(this.props.Price / 100).toFixed(2)}
                    </div>
                    <div className="pdpProductDiscount">
                      £{(this.props.DiscountPrice / 100).toFixed(2)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="pdpVariants">
            <h4 className="colourName">COLOUR:</h4>
            <div className="colourWebMenu">
              {this.state.colours.length === 1 ? (
                <div className="productColourValueWeb">{this.state.colours}</div>
              ) : (
                <Dropdown
                  className="colourWebSelector"
                  options={getColours(this.props.ImageOptions)}
                  value={this.state.currentColour}
                  onChange={event => this.onColourChangeWeb(event)}
                />
              )}
            </div>

            <div className="colourPhoneMenu">
              {this.state.colours.length === 1 ? (
                <div className="productColourValuePhone">{this.state.colours}</div>
              ) : (

                <select className = "colourPhoneSelector" onChange={event => this.onColourChangePhone(event)}>

                  {getColours(this.props.ImageOptions).map((colour, index) => {
                    return (
                      <option value={colour} key={index}>
                        {colour}
                      </option>

                    );
                  })}
                </select>

              )}
            </div>

            <h4 className="sizeHeader">SIZE:</h4>
            <Dropdown
              className="sizeWebSelector"
              options={["XS", "S", "M", "L", "XL"]}
              value={"XS"}
            />

                <select className = "sizePhoneSelector">
                  <option value = "XS"> XS </option>
                  <option value = "S"> S </option>
                  <option value = "M"> M </option>
                  <option value = "L"> L </option>
                  <option value = "XL"> XL </option>
                </select>

          </div>
          <div className="bagButtonContainer">
            <button className="bagButton" type="button">
              ADD TO BAG
            </button>
          </div>
        </div>
        <div className="productExtraInfo">
          <div className="productDescription">
            <h4 className="prodDescHeader">PRODUCT DESCRIPTION</h4>
            <div className="productDescriptionValue">
              {this.props.ProductDescription}
            </div>
          </div>
          <div className="productBrand">
            <h4 className="prodBrandHeader">PRODUCT BRAND</h4>
            <div className="productBrandValue">{this.props.ProductBrand}</div>
          </div>
          <div className="brandDescription">
            <h4 className="brandDescHeader">BRAND DESCRIPTION</h4>
            <div className="brandDescriptionValue">
              {this.props.BrandDescription}
            </div>
          </div>
          <div className="materials">
            <h4 className="materialsHeader">MATERIALS</h4>
            <div className="materialsValue">{this.props.Materials}</div>
          </div>
        </div>
      </div>
    );
  }

}

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
