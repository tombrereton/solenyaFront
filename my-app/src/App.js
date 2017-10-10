import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HelloPage from './HelloPage';
import ErrorPage from './ErrorPage';
import ProductPage from './ProductPage';

import {Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      
      <div className="App">
    
        <Switch>
         <Route exact path="/" component={ProductPage} />
         <Route path ="*" component={ErrorPage} />
        </Switch>
      </div>
   
     );
  }
}

export default App;
