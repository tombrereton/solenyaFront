import React from 'react';
import PropTypes from 'prop-types';

const ProductElement = (props) => {
    return (
        <div  className="ProductElement" style={{margin: '1em'}}>
            <img width="150" src={props.SplashImgUrl} alt={props.ProductName}/>
            <div>
                <div className="productName" style={{fontWeight: 'bold'}}>
                    {props.ProductName}
                </div>
                <div className="productPrice">
                    £{(props.Price / 100).toFixed(2)}
                </div>
                <div className="productDiscount">
                    {props.DiscountPrice !== null &&
                    <div id = "discount">£{(props.DiscountPrice / 100).toFixed(2)}</div>}
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
}

export default ProductElement;
