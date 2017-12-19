import React, { Component } from "react";
import Products from "../Products";
import getDeviceWidth from "../../GlobalFunctions/GetDeviceWidth";
import logToNewRelic from "../../GlobalFunctions/LogToNewRelic";
import fetchDataToJSON from "../../DataAccess/DataFetcher";
import PreloaderContainer from "../PreloaderContainer";
import ProductsUnavailable from "../ProductsUnavailable";
import "./style.css";

class Plp extends Component {
  constructor() {
    super();

    this.state = {
      productElements: []
    };
  }

  componentDidMount() {
    let ProductServiceEndpoint = process.env.PRODUCT_API;

    let deviceWidth = getDeviceWidth();
    logToNewRelic("Plp-LoadedWithDeviceWidth-" + deviceWidth);

    fetchDataToJSON(ProductServiceEndpoint).then(productElements =>
      this.setState({ productElements })
    );
  }

  render() {
    if (this.state.productElements.length === 0) {
      return <PreloaderContainer />;
    } else if (
      typeof this.state.productElements === "undefined" ||
      this.state.productElements[0].ErrorCode ===
        "CollectionNameDoesNotExist" ||
      this.state.productElements[0].ErrorCode === "CollectionEmpty"
    ) {
      return <ProductsUnavailable />;
    } else {
      return <Products productElements={this.state.productElements} />;
    }
  }
}

export default Plp;
