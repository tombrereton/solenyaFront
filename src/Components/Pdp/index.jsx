import React, { Component } from "react";
import PdpElement from "../PdpElement";
import Preloader from "../Preloader";
import { ProductServiceEndpoint } from "../../Config";
import fetchDataToJSON from "../../DataAccess/DataFetcher";

class Pdp extends Component {
  constructor() {
    super();

    this.state = {
      productElement: null
    };
  }

  componentDidMount() {
    const url =
      ProductServiceEndpoint + "products/" + this.props.match.params.id;
    fetchDataToJSON(url).then(productElement =>
      this.setState({ productElement })
    );
  }

  render() {
    if (this.state.productElement !== null) {
      return <PdpElement {...this.state.productElement} />;
    }

    return <Preloader />;
  }
}

export default Pdp;
