import React from 'react';
import productData from './ProductData';
import ProductCard from './ProductCard';
import CardList from './CardList';

const ProductPage = (props) => (
        <CardList cards={productData}/>
)

export default ProductPage;
