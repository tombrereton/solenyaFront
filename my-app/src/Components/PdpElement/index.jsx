import React from 'react';
import PropTypes from 'prop-types';

const PdpElement = (props) => {

  let colours = getColours(props.ImageOptions);

  return (
    <div className="PdpElement" style={{margin: '1em'}}>
      <img width="150" src={props.SplashImgUrl} alt={props.ProductName}/>
      <div>
        <div className="productName">
          <h4>Product Name:</h4>
          <div className ="productNameValue">
          {props.ProductName}
          </div>
        </div>
        <div className="productPrice">
          <h4>Price:</h4>
          <div className ="priceValue">
          £{(props.Price / 100).toFixed(2)}
          </div>
        </div>
        <div className="productDiscount">
          <h4>Discount Price:</h4>
          <div className ="productDiscountValue">
          {props.DiscountPrice !== null &&
          <div id="discount">£{(props.DiscountPrice / 100).toFixed(2)}</div>}
          </div>
        </div>
        <div className="productColour">
          <h4>Colour:</h4>
          <div className ="productColourValue">
          {colours}
          </div>
        </div>
        <div className="productDescription">
          <h4>Product Description:</h4>
          <div className ="productDescriptionValue">
          {props.ProductDescription}
          </div>
        </div>
        <div className="productBrand">
          <h4>Product Brand:</h4>
          <div className ="productBrandValue">
          {props.ProductBrand}
          </div>
        </div>
        <div className="brandDescription">
          <h4>Brand Description:</h4>
          <div className ="brandDescriptionValue">
          {props.BrandDescription}
          </div>
        </div>
        <div className="materials">
          <h4>Materials:</h4>
          <div className ="materialsValue">
          {props.Materials}
          </div>
        </div>
      </div>
    </div>

  );
};

function getColours(imageOptions) {
  let colours = [];

  for (let i = 0; i < imageOptions.length; i++) {
    colours.push(imageOptions[i]["Colour"])
  }

  return colours
}

PdpElement.propTypes = {
  SplashImgUrl: PropTypes.string.isRequired,
  Price: PropTypes.number.isRequired,
  ProductName: PropTypes.string.isRequired,
  ProductDescription: PropTypes.string.isRequired,
  ProductBrand: PropTypes.string.isRequired,
  BrandDescription: PropTypes.string.isRequired,
  Materials: PropTypes.string.isRequired,
  ImageOptions: PropTypes.array.isRequired,
};

export default PdpElement;
