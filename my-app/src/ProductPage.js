import React from 'react';

const ProductCard = (props) => {
	return (
  	<div style={{margin: '1em'}}>
  	  <img width="150" src={props.splash_img_url} alt={props.product_name}/>
      <div>
        <div style={{fontWeight: 'bold'}}>
        	{props.product_name}
        </div>
        <div>
        	{props.price}
        </div>
      </div>
  	</div>	
  );
};

let productData = [
	{ product_name: "Warehouse Side Split Roll Neck Jumper",
		splash_img_url: require("./products/product1/prod1-img1.jpg"),
		price: "£46.00" },
  { product_name: "French Connection Checked Lined Harrington Jacket with Borg Collar",
		splash_img_url: require("./products/product2/prod2-img1.jpg"),
		price: "£60.00" },
  { product_name: "Adidas Originals Trefoil Hoodie In Grey",
		splash_img_url: require("./products/product3/prod3-img1.jpg"),
		price: "£50.00" },
  { product_name: "ASOS Body With Plunge Neck Long Sleeve And Thong",
		splash_img_url: require("./products/product4/prod4-img1.jpg"),
		price: "£10.50" },
  { product_name: "All Saints Oversized Zip Biker Jacket in Leather",
		splash_img_url: require("./products/product5/prod5-img1.jpg"),
		price: "£420.00" }
]

const CardList = (props) => {
	return (
  	<div>
    	{props.cards.map(card => <ProductCard {...card} />)}
    </div>
  )
};

const ProductPage = (props) => (
        <CardList cards={productData}/>
)

export default ProductPage;
