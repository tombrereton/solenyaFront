import React from 'react';
import ProductCard from './ProductCard';

const CardList = props => (
	<div>
		{props.cards.map((card,index) => <ProductCard {...card} key={index} />)}
	</div>
)

export default CardList;