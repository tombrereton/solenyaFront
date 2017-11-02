import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';
import './style.css';


const PdpElement = (props) => {

  let colours = getColours(props.ImageOptions);
  let imagePaths = getImages(props.ImageOptions);
  const defaultOption = colours[0];

  return (
    <div className="PdpElement" style={{margin: '1em'}}>
      <div className="imageCarousel">
          <img id = "img1" width="150" src={imagePaths[0]} alt={props.ProductName}/>
          <img id = "img2" width="150" src={imagePaths[1]} alt={props.ProductName}/>
          <img id = "img3" width="150" src={imagePaths[2]} alt={props.ProductName}/>
          <img id = "img4" width="150" src={imagePaths[3]} alt={props.ProductName}/>
      </div>
      <div>
        <div className="productName">
          <h4>Product Name:</h4>
          <div className ="productNameValue">
          {props.ProductName}
          </div>
        </div>
        <div className="productPrice">
          <h4>Price:</h4>
          <div className ="priceValue">
          £{(props.Price / 100).toFixed(2)}
          </div>
        </div>
        <div className="productDiscount">
          <h4>Discount Price:</h4>
          <div className ="productDiscountValue">
          {props.DiscountPrice !== null &&
          <div id="discount">£{(props.DiscountPrice / 100).toFixed(2)}</div>}
          </div>
        </div>
        <div className="productColour">
          <h4>Colour:</h4>
            {colours.length === 1 ?
            <div className ="productColourValue">{colours}</div> :
            <Dropdown className = "colourSelector" options={colours} value={defaultOption} placeholder={"Select colour"}/>
          }
        </div>
        </div>
        <div className="productDescription">
          <h4>Product Description:</h4>
          <div className ="productDescriptionValue">
          {props.ProductDescription}
          </div>
        </div>
        <div className="productBrand">
          <h4>Product Brand:</h4>
          <div className ="productBrandValue">
          {props.ProductBrand}
          </div>
        </div>
        <div className="brandDescription">
          <h4>Brand Description:</h4>
          <div className ="brandDescriptionValue">
          {props.BrandDescription}
          </div>
        </div>
        <div className="materials">
          <h4>Materials:</h4>
          <div className ="materialsValue">
          {props.Materials}
          </div>
          <div className="button">
            <button type ="button">Add To Bag</button>
          </div>
        </div>
      </div>
  );
};

function getColours(imageOptions) {
  let colours = [];

  for (let i = 0; i < imageOptions.length; i++) {
    colours.push(imageOptions[i]["Colour"])
  }

  return colours
}

function getImages(imageOptions) {
    let images = [];

    for (let i = 0; i < imageOptions.length; i++) {
        for(let j = 0; j< imageOptions[i]["ImageList"].length; j++){
            images.push(imageOptions[i]["ImageList"][j]);
        }
    }
    return images;
}


PdpElement.propTypes = {
  Price: PropTypes.number.isRequired,
  ProductName: PropTypes.string.isRequired,
  ProductDescription: PropTypes.string.isRequired,
  ProductBrand: PropTypes.string.isRequired,
  BrandDescription: PropTypes.string.isRequired,
  Materials: PropTypes.string.isRequired,
  ImageOptions: PropTypes.array.isRequired,
};

export default PdpElement;
