import React, { Component } from "react";
import Products from "../Products";
import getDeviceWidth from "../../GlobalFunctions/GetDeviceWidth";
import logToNewRelic from "../../GlobalFunctions/LogToNewRelic";
import fetchDataToJSON from "../../DataAccess/DataFetcher";

class Plp extends Component {
  constructor() {
    super();

    this.state = {
      productElements: []
    };
  }

  componentDidMount() {
    console.log("(Deleted in next pull request) Endpoint: ", process.env.ENDPOINT);

    let ProductServiceEndpoint =
      window.config[window.envName].ProductServiceEndpoint;

    let deviceWidth = getDeviceWidth();
    logToNewRelic("Plp-LoadedWithDeviceWidth-" + deviceWidth);

    fetchDataToJSON(ProductServiceEndpoint).then(productElements =>
      this.setState({ productElements })
    );
  }

  render() {
    return <Products productElements={this.state.productElements} />;
  }
}

export default Plp;
