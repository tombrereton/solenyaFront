import React from 'react';
import PropTypes from 'prop-types';
import ProductElement from '../ProductElement';

const Products = props => (
	<div>
		{props.productElements.map((productElements, index) => <ProductElement {...productElements} key={index} />)}
	</div>
)

Products.propTypes = {
	productElements: PropTypes.productElements
}

export default Products;
