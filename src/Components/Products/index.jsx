import React from 'react';
import ProductElement from '../ProductElement';

const Products = props => (
	<div>
		{props.productElements.map((productElements,index) => <ProductElement {...productElements} key={index} />)}
	</div>
)

export default Products;
