import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
	return (
  	<div  className="productCard" style={{margin: '1em'}}>
  	  <img width="150" src={props.splash_img_url} alt={props.product_name}/>
      <div>
        <div className="productName" style={{fontWeight: 'bold'}}>
        	{props.product_name}
        </div>
        <div className="productPrice">
        	{props.price}
        </div>
      </div>
  	</div>	
  );
};

ProductCard.propTypes ={
  splash_img_url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  product_name: PropTypes.string.isRequired,
}

export default ProductCard;
