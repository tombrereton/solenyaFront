import React from "react";
import PropTypes from 'prop-types';
import ProductElement from "../ProductElement";
import "./style.css";

const Products = props => (
  <div className="productContainer">
    {props.productElements.map((productElements, index) => (
      <ProductElement {...productElements} key={index} />
    ))}
  </div>
);

Products.propTypes = {
  productElements: PropTypes.array
}

export default Products;
