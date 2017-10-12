import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
	return (
  	<div  className="productCard" style={{margin: '1em'}}>
  	  <img width="150" src={props.splashImgUrl} alt={props.productName}/>
      <div>
        <div className="productName" style={{fontWeight: 'bold'}}>
        	{props.productName}
        </div>
        <div className="productPrice">
        	{props.price}
        </div>
      </div>
  	</div>	
  );
};

ProductCard.propTypes ={
  splashImgUrl: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
}

export default ProductCard;
