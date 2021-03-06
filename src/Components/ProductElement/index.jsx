import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "../Header/index.jsx";
import logToNewRelic from "../../GlobalFunctions/LogToNewRelic";
import "./style.css";

const ProductElement = props => {
  return (
    <div className="ProductElement">
      <div className="imageCard">
        <Link
          id={"productImageId-" + props.ProductId}
          to={"products/" + props.ProductId}
          onClick={() => {
            Header.toggleMenu();
            logToNewRelic(props.ProductName + props.ProductId + "-WithImage");
          }}
        >
          <img src={props.SplashImgUrl} alt={props.ProductName} />
        </Link>
      </div>

      <Link
        id={"productNameId-" + props.ProductId}
        to={"products/" + props.ProductId}
        className="divLink"
        onClick={() => {
          Header.toggleMenu();
          logToNewRelic(props.ProductName + props.ProductId + "-WithName");
        }}
      >
        <div className="productLabelContainer">
          <div className="centeringContainer">
            <div className="productLabel">{props.ProductName}</div>
            {props.DiscountPrice === null ? (
              <div className="productPrice">
                £{(props.Price / 100).toFixed(2)}
              </div>
            ) : (
              <div>
                <div className="productPriceSlashed">
                  £{(props.Price / 100).toFixed(2)}
                </div>
                <div className="productDiscount">
                  £{(props.DiscountPrice / 100).toFixed(2)}
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
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
