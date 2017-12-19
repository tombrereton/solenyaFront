import React from "react";
/* eslint-disable*/
import {BrowserRouter as Router} from "react-router-dom";
/* eslint-enable*/
import {Route, browserHistory} from "react-router-dom";
import Plp from "../Plp";
import Pdp from "../Pdp";
import "./style.css";
import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";

const App = () => (

  <Router>

    <div>

      <Header />

      <Route exact path="/" component={Plp} history={browserHistory} />
      <Route path="/products/:id" component={Pdp} />

      <Footer />

    </div>

  </Router>

);

export default App;
