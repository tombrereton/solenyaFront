import React, {Component} from 'react';
import Products from './Products';
import fetchDataToJSON from '../DataAccess/DataFetcher';
import {ProductServiceEndpoint} from '../Config';

class ProductPage extends Component {
  constructor() {
    super();

    this.state = {
      productElements: []
    };
  }

  componentDidMount() {
    fetch(ProductServiceEndpoint)
      .then(resp => resp.json())
      .then(productElements => this.setState({productElements}))
      .catch(error => console.log("Error fetching in product page:",error));
  }

  render() {
    return (
      <Products productElements={this.state.productElements} /> 
    )
  }
}


export default ProductPage;
