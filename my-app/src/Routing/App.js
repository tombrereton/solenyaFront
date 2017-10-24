import React, { Component } from 'react';
import './App.css';

import ErrorPage from '../ResponsePages/ErrorPage';
import ProductPage from '../Plp/ProductPage';
import {Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
         <Route exact path="/" component={ProductPage} />
         <Route path ="/*" component={ErrorPage} />
        </Switch>
      </div>
     );
  }
}

export default App;
