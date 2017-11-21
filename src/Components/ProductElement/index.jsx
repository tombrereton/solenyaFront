import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductElement = props => {
  return (
    
    <div className="ProductElement" style={{ margin: "1em" }}>
      <Link 
        id={"productImageId-" + props.ProductId}        
        className="productLink"
        to={"products/" + props.ProductId}
        onClick={() =>
          newrelic.addPageAction(
            "clickToProduct-" +
              props.ProductName +
              "-" +
              props.ProductId +
              "-WithImage"
          )}
      >
        <img width="150" src={props.SplashImgUrl} alt={props.ProductName} />
      </Link>
     
      <div>
      
      <div className="productName" style={{ fontWeight: "bold" }}>
      
          <Link
            id={"productNameId-" + props.ProductId}
            className="productLink"
            to={"products/" + props.ProductId}
            onClick={() =>
              newrelic.addPageAction(
                "clickToProduct-" +
                  props.ProductName +
                  "-" +
                  props.ProductId +
                  "-WithName"
              )}
          >
          
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
  ProductId: PropTypes.number.isRequired,
  SplashImgUrl: PropTypes.string.isRequired,
  Price: PropTypes.number.isRequired,
  ProductName: PropTypes.string.isRequired,
  DiscountPrice: PropTypes.number
};

export default ProductElement;
