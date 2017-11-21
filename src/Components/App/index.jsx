import React from "react";
import {BrowserRouter as Router, Route, Link, browserHistory} from "react-router-dom";
import Plp from "../Plp";
import Pdp from "../Pdp";
import "./style.css";
import {slide as Menu} from "react-burger-menu";

const App = () => (

  <Router>
  
    <div>
      <header>        
        </header >          
          
        <Menu right width={'50%'}>      
        <Link  className = "home-link" to="/" onClick={() => newrelic.addPageAction("clickToHome")}>
            Home{" "}
          </Link>               
          <a className = "menu-item--small" href=""></a>
          </Menu>  
        <div className = "Title"> 
        <a> SOLENYA PRODUCTS</a>
        </div>
      <hr/>
      
      <Route exact path="/" component={Plp} history={browserHistory} />
      <Route path="/products/:id" component={Pdp} />
    </div>
  </Router>

);

export default App;
