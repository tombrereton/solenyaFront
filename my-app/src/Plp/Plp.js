import React, {Component} from 'react';
import Products from './Products';
import fetchDataToJSON from '../DataAccess/DataFetcher';
import {ProductServiceEndpoint} from '../Config';

class Plp extends Component {
  constructor() {
    super();

    this.state = {
      productElements: []
    };
  }

  componentDidMount() {
    fetchDataToJSON(ProductServiceEndpoint)
      .then(productElements => this.setState({productElements}))
  }

  render() {
    return (
      <Products productElements={this.state.productElements} /> 
    )
  }
}


export default Plp;
