import React, { Component } from "react";
import PropTypes from "prop-types";
import Dropdown from "react-dropdown";
import { getColours, getImages, getDropdownValue } from "./functions.js";
import "./style.css";
import getDeviceWidth from "../../GlobalFunctions/GetDeviceWidth";
import logToNewRelic from "../../GlobalFunctions/LogToNewRelic";
//import Pdp from "../Pdp";
var Carousel = require("nuka-carousel");
class PdpElement extends Component {
  constructor() {
    super();

    this.state = {
      imagePaths: [],
      colours: [],
      defaultOption: null
    };
  }
  componentDidMount() {
    let iOptions = this.props.ImageOptions;
    let iColour = "Grey";
    // let iColour = this.props.colours[0];

    this.setState({colours : getColours(this.props.ImageOptions)});
    this.setState({imagePaths:getImages(iOptions, iColour)});
    this.setState({defaultOption : iColour});
    
    console.log("VAlue:" , this.state.colours )
    console.log("Options are:" , iOptions);
    console.log("Colours are:",iColour);
    
    //const getSelected = getSelected(value);

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
  componentWillReceiveProps(nextProps){
    let iOptions = nextProps.ImageOptions;
    let iColour = "Grey";
    // let iColour = this.props.colours[0];

    this.setState({colours : getColours(nextProps.ImageOptions)});
    this.setState({imagePaths:getImages(iOptions, iColour)});
    this.setState({defaultOption : iColour});
    
    console.log("VAlue:" , this.state.colours )
    console.log("Options are:" , iOptions);
    console.log("Colours are:",iColour);
  }

  render() {
    return (
      <div className="PdpElement">
        <div className="imageCarousel">
          <Carousel>
            {this.state.imagePaths.map((element, index) => {
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
            <div className="colourMenu">
              {this.state.colours.length === 1 ? (
                <div className="productColourValue">{this.state.colours}</div>
              ) : (
                <Dropdown
                  className="colourSelector"
                  options={this.state.colours}
                  //onChange={}
                  value={this.state.defaultOption}
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

// const PdpElement = props => {
//   const colours = getColours(props.ImageOptions);
//   const imagePaths = getImages(props.ImageOptions, colours[0]);
//   const defaultOption = colours[0];
//   //const getSelected = getSelected(value);

//   let deviceWidth = getDeviceWidth();
//   logToNewRelic(
//     "Pdp-" +
//       props.ProductName +
//       "-" +
//       props.ProductId +
//       "-LoadedWithDeviceWidth-" +
//       deviceWidth
//   );

//   return (
//     <div className="PdpElement">
//       <div className="imageCarousel">
//         <Carousel>
//           {imagePaths.map((element, index) => {
//             return (
//               <img
//                 id={"img" + index}
//                 width="150"
//                 src={element}
//                 alt={props.ProductName}
//                 key={index}
//               />
//             );
//           })}
//         </Carousel>
//       </div>

//       <div className="productMainInfo">
//         <div className="productMainInfoText">
//           <div className="pdpProductName">
//             <div className="pdpNameValue">{props.ProductName}</div>
//           </div>
//           <div className="pdpPrice">
//             <div className="pdpDiscountValue">
//               {props.DiscountPrice === null ? (
//                 <div className="pdpProductPrice">
//                   £{(props.Price / 100).toFixed(2)}
//                 </div>
//               ) : (
//                 <div>
//                   <div className="pdpProductPriceSlashed">
//                     £{(props.Price / 100).toFixed(2)}
//                   </div>
//                   <div className="pdpProductDiscount">
//                     £{(props.DiscountPrice / 100).toFixed(2)}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="pdpVariants">
//           <h4 className="colourName">COLOUR:</h4>
//           <div className="colourMenu">
//             {colours.length === 1 ? (
//               <div className="productColourValue">{colours}</div>
//             ) : (
//               <Dropdown
//                 className="colourSelector"
//                 options={colours}
//                 //onChange={}
//                 value={defaultOption}
//               />
//             )}
//           </div>
//           <h4 className="sizeHeader">SIZE:</h4>
//           <Dropdown
//             className="sizeSelector"
//             options={["XS", "S", "M", "L", "XL"]}
//             value={"XS"}
//           />
//         </div>
//         <div className="bagButtonContainer">
//           <button className="bagButton" type="button">
//             ADD TO BAG
//           </button>
//         </div>
//       </div>
//       <div className="productExtraInfo">
//         <div className="productDescription">
//           <h4 className="prodDescHeader">PRODUCT DESCRIPTION</h4>
//           <div className="productDescriptionValue">
//             {props.ProductDescription}
//           </div>
//         </div>
//         <div className="productBrand">
//           <h4 className="prodBrandHeader">PRODUCT BRAND</h4>
//           <div className="productBrandValue">{props.ProductBrand}</div>
//         </div>
//         <div className="brandDescription">
//           <h4 className="brandDescHeader">BRAND DESCRIPTION</h4>
//           <div className="brandDescriptionValue">{props.BrandDescription}</div>
//         </div>
//         <div className="materials">
//           <h4 className="materialsHeader">MATERIALS</h4>
//           <div className="materialsValue">{props.Materials}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

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
