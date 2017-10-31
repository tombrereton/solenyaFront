import React from 'react';
import PropTypes from 'prop-types';

const PdpElement = (props) => {
  return (

    <div className="PdpElement" style={{margin: '1em'}}>
      <img width="150" src={props.SplashImgUrl} alt={props.ProductName}/>
      <div>
        <div className="productName" style={{fontWeight: 'bold'}}>
          {props.ProductName}
          {console.log(props.SplashImgUrl)}
        </div>
        <div className="productPrice">
          £{(props.Price / 100).toFixed(2)}
        </div>
        <div className="productDiscount">
          {props.DiscountPrice !== null &&
          <div id="discount">£{(props.DiscountPrice / 100).toFixed(2)}</div>}
        </div>
        <div className="productColour" style={{fontWeight: 'bold'}}>
          {props.Colour}
        </div>
        <div className="productDescription" style={{fontWeight: 'bold'}}>
          {props.ProductDescription}
        </div>
        <div className="productBrand" style={{fontWeight: 'bold'}}>
          {props.ProductBrand}
        </div>
        <div className="brandDescription" style={{fontWeight: 'bold'}}>
          {props.BrandDescription}
        </div>
        <div className="materials" style={{fontWeight: 'bold'}}>
          {props.Materials}
        </div>
      </div>
    </div>

  );
};

PdpElement.propTypes = {
  SplashImgUrl: PropTypes.string.isRequired,
  Price: PropTypes.number.isRequired,
  ProductName: PropTypes.string.isRequired,
  ProductDescription: PropTypes.string.isRequired,
  ProductBrand: PropTypes.string.isRequired,
  BrandDescription: PropTypes.string.isRequired,
  Materials: PropTypes.string.isRequired,
  Colour: PropTypes.string.isRequired,
};

export default PdpElement;
