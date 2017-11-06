import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Plp from "../Plp";
import Pdp from "../Pdp";
import "./style.scss";

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products/1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/3">Product 3</Link>
        </li>
        <li>
          <Link to="/products/4">Product 4</Link>
        </li>
        <li>
          <Link to="/products/5">Product 5</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Plp} />
      <Route path="/products/:id" component={Pdp} />
    </div>
  </Router>
);

export default App;
