import React from 'react';
import productData from './ProductData';
import ProductCard from './ProductCard';

const CardList = (props) => {
	return (
  	<div>
    	{props.cards.map((card,index) => <ProductCard {...card} key={index} />)}
    </div>
  )
};

const ProductPage = (props) => (
        <CardList cards={productData}/>
)

export default ProductPage;
