import React, {Component} from 'react';
import fetchDataToJSON from "../../DataAccess/DataFetcher";
import {PdpTestUrl} from "../../Config.js";
import PdpElement from "../PdpElement"



class Pdp extends Component {
    constructor() {
        super();

        this.state = {
            productElement: null
        };
    }

    componentDidMount() {
        const url = PdpTestUrl+'/'+this.props.match.params.id;
        fetchDataToJSON(url)
            .then(productElement => this.setState({productElement}))
    }

    render() {
        return (
            <PdpElement {...this.state.productElement}/>
        )
    }
}

// const Pdp = ({match}) => (
//     <div>
//         <h3>Product ID: {match.params.productId}</h3>
//     </div>
// );

export default Pdp;