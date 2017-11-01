import React, {Component} from 'react';
import './App.css';

import Plp from '../Plp/Plp';
import Pdp from '../Components/Pdp'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products/1">Product 1</Link></li>
        <li><Link to="/products/2">Product 2</Link></li>
        <li><Link to="/products/3">Product 3</Link></li>
        <li><Link to="/products/4">Product 4</Link></li>
        <li><Link to="/products/5">Product 5</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Plp}/>
      <Route path="/products/:id" component={Pdp}/>
    </div>
  </Router>
);

export default App;
