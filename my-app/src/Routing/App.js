import React, {Component} from 'react';
import './App.css';

import ErrorPage from '../ResponsePages/ErrorPage';
import Plp from '../Plp/Plp';
import Pdp from '../Components/Pdp'
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Plp}/>
          <Route path="/product=:productId" component={Pdp}/>
          <Route path="/*" component={ErrorPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
