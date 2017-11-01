import React, {Component} from 'react';
import fetchDataToJSON from "../../DataAccess/DataFetcher";
import {PdpTestUrl} from "../../Config.js";
import PdpElement from "../PdpElement"
import Preloader from "../Preloader";


class Pdp extends Component {
  constructor() {
    super();

    this.state = {
      productElement: null
    };
  }

  componentDidMount() {
    const url = PdpTestUrl + '/' + this.props.match.params.id;
    fetchDataToJSON(url)
      .then(productElement => this.setState({productElement}))
  }

  render() {
    console.log(this.state.productElement)
    if (this.state.productElement !== null) {
      return (
        <PdpElement {...this.state.productElement}/>
      )
    }

    return (
      // TODO: Fix this
      <Preloader/>
    )
  }
}

export default Pdp;