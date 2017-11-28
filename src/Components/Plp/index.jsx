import React, { Component } from "react";
import Products from "../Products";
import getDeviceWidth from "../../GlobalFunctions/GetDeviceWidth";
import logToNewRelic from "../../GlobalFunctions/LogToNewRelic";
import fetchDataToJSON from "../../DataAccess/DataFetcher";
import Preloader from "../Preloader";
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
    if (this.state.productElements === undefined) {
      return (
        <div className="productsUnavailable">
          <h2>Sorry, no products avaiblable</h2>
        </div>
      );
    } else if (this.state.productElements.length === 0) {
      return (
        <div className="preloaderContainer">
          <Preloader />
        </div>
      );
    } else {
      return <Products productElements={this.state.productElements} />;
    }
  }
}

export default Plp;
