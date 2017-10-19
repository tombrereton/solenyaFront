import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
	return (
  	<div  className="productCard" style={{margin: '1em'}}>
  	  <img width="150" src={props.SplashImgUrl} alt={props.ProductName}/>
      <div>
        <div className="productName" style={{fontWeight: 'bold'}}>
        	{props.ProductName}
        </div>
        <div className="productPrice">
          £{(props.Price/100).toFixed(2)}
        </div>
        <div className="productDiscount">
        {props.DiscountPrice}
          </div>
      </div>
  	</div>	
  );
};
//Discount price needs too be added above in div.
//conversion to to decimal does not match the value in Product data so test cannot succeeded
ProductCard.propTypes ={
  SplashImgUrl: PropTypes.string.isRequired,
  Price: PropTypes.number.isRequired,
  ProductName: PropTypes.string.isRequired,
  DiscountPrice: PropTypes.number.isRequired,
}

export default ProductCard;
