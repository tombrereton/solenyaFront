import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ErrorPage from './ErrorPage';
import {Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      
      <div className="App">
    
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Switch>
         <Route exact path="/errorpage" component={ErrorPage} />
         
        </Switch>
      </div>
   

 
 
    
  //   <Switch>
  //   <Route exact path="/errorpage" component={ErrorPage} />
  //   <Route exact path="/" component={App} />
  // </Switch>

    // const App = () => (
    //   <Router>
    //     <switch>
    //       <Route exact path ="/ErrorPage" component ={ErrorPage} />
    //       </switch>
    //     </Router>
       
    // )
     );
  }
}

export default App;
