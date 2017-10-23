import React, {Component} from 'react';
import productData from './ProductData';
import ProductCard from './ProductCard';
import CardList from './CardList';
import fetchDataToJSON from './dataFetcher';

const testUrl = 'http://localhost:3000/Products';
const productServiceEndpoint = 'http://team-solenya-product-dev.azurewebsites.net/';
const testProductServiceEndpoint = 'http://localhost:56669/';

class ProductPage extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    fetchDataToJSON(productServiceEndpoint)
      .then(cards => this.setState({cards}));
  }

  render() {
    return (
      <CardList cards={this.state.cards} /> 
    )
  }
}


export default ProductPage;
