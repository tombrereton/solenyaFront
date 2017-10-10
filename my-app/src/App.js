import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HelloPage from './HelloPage';
import ErrorPage from './ErrorPage';

import {Router, Route, Link, IndexRoute,  browserHistory, Switch } from 'react-router'

class App extends Component {
  render() {
    return (
      
      <div className="App">
    
        <Switch>
         <Route exact path="/" component={HelloPage} />
         <Route path ="*" component={ErrorPage} />
        </Switch>
      </div>
   
     );
  }
}

export default App;
