import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";

const ProductElement = props => {
  return (
    <div className="ProductElement" style={{ margin: "1em" }}>
      <Link className="productLink" to={"products/" + props.ProductId}>
        <img width="150" src={props.SplashImgUrl} alt={props.ProductName} />
      </Link>
      <div>
        <div className="productName" style={{ fontWeight: "bold" }}>
          <Link className="productLink" to={"products/" + props.ProductId}>
            {props.ProductName}
          </Link>
        </div>
        <div className="productPrice">£{(props.Price / 100).toFixed(2)}</div>
        <div className="productDiscount">
          {props.DiscountPrice !== null && (
            <div id="discount">£{(props.DiscountPrice / 100).toFixed(2)}</div>
          )}
        </div>
      </div>
    </div>
  );
};

ProductElement.propTypes = {
  SplashImgUrl: PropTypes.string.isRequired,
  Price: PropTypes.number.isRequired,
  ProductName: PropTypes.string.isRequired,
  DiscountPrice: PropTypes.number
};

export default ProductElement;
