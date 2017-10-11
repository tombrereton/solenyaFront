import React, { Component } from 'react';
import './App.css';

import ErrorPage from './ErrorPage';
import ProductPage from './ProductPage';
import HelloPage from './HelloPage';
import {Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
         <Route exact path="/" component={ProductPage} />
         <Route exact path="/HelloPage" component={HelloPage} />
         <Route path ="/*" component={ErrorPage} />
        </Switch>
      </div>
     );
  }
}

export default App;
