import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from "react-router-dom";
import Plp from "../Plp";
import Pdp from "../Pdp";
import "./style.scss";

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/" onClick= { () =>newrelic.addPageAction('clickedTryMe')} >Home </Link >
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Plp} history={browserHistory} />
      <Route path="/products/:id" component={Pdp} />
    </div>
  </Router>
);

export default App;
