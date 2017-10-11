import React from 'react';
import productData from './ProductData';

const ProductCard = (props) => {
	return (
  	<div style={{margin: '1em'}}>
  	  <img width="150" src={props.splash_img_url} alt={props.product_name}/>
      <div>
        <div style={{fontWeight: 'bold'}}>
        	{props.product_name}
        </div>
        <div>
        	{props.price}
        </div>
      </div>
  	</div>	
  );
};

const CardList = (props) => {
	return (
  	<div>
    	{props.cards.map(card => <ProductCard {...card} />)}
    </div>
  )
};

const ProductPage = (props) => (
        <CardList cards={productData}/>
)

export default ProductPage;
