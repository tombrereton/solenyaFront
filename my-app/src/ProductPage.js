import React, {Component} from 'react';
import productData from './ProductData';
import ProductCard from './ProductCard';
import CardList from './CardList';
import fetchDataToJSON from './dataFetcher';

const testUrl = 'http://localhost:3000/Products';

class ProductPage extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    fetchDataToJSON(testUrl).then(cards => this.setState({cards}));
  }

  render() {
    return (
      <CardList cards={this.state.cards} /> 
    )
  }
}



// const ProductPage = (props) => (
//       fetchDataToJSON(testUrl)
//         .then(jsonData => {
//           console.log("jsondata",jsonData);
//           <CardList cards={jsonData}/> 
//         })
//     )


    // console.log(fetchDataToJSON()));
    // fetchDataToJSON().then((myListOfProducts) => { // fetching your array of products with fetchDataToJSON(). Then with the array myListOfProducts
    //   myListOfProducts.forEach((product) => { // for each of the products in your products array, apply the arrow function to the individual product.
    //     // put the product on the page. Ollie dunno how to do this in your code ;)
    //     console.log(product);

// console.log(fetchDataToJSON().then(
//   (mylist) => {
//     mylist.forEach(
//       (item) => {
//         console.log(item);
//       }
//     )
//   }
// ));

export default ProductPage;
