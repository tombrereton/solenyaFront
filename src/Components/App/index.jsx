import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from "react-router-dom";
import Plp from "../Plp";
import Pdp from "../Pdp";
import "./index.css";

const App = () => (
  
  <header />
  <Router>
    <div id = "link">
      <ul>
        <li>
          <Link to="/" onClick={() => newrelic.addPageAction("clickToHome")}>
            Home{" "}
          </Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Plp} history={browserHistory} />
      <Route path="/products/:id" component={Pdp} />
    </div>
  </Router>
  
);

export default App;
