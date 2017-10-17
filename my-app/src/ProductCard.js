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
      </div>
  	</div>	
  );
};

ProductCard.propTypes ={
  SplashImgUrl: PropTypes.string.isRequired,
  Price: PropTypes.number.isRequired,
  ProductName: PropTypes.string.isRequired,
}

export default ProductCard;
