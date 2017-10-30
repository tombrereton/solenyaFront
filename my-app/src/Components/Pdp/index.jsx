import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Preloader from '../Preloader';

const Pdp = ({match}) => (
  <div>
    <h3>Product ID: {match.params.productId}</h3>
  </div>
);

export default Pdp;