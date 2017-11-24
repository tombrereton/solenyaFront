import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./style.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    };
  }

  toggleMenu() {
    this.setState({
      toggled: !this.state.toggled
    });
  }

  render() {
    const toggled = this.state.toggled;
    const toggledClass = "container" + (toggled ? " change" : "");
    const menuClass = toggled ? "openMenu" : "closedMenu";

    return (
      <header>
        <div className="headerHolder">
          <div className="logo" style={{ display: "inline-block" }}>
            <img src = "" alt = "logo"/>
          </div>  
          <div className = "burgerMenu" style={{ display: "inline-block" }}>
            <div className={toggledClass} onClick={() => this.toggleMenu()}>
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </div>
           </div>
        </div>
        <div className={menuClass}>
          <div className = "homeLink" style={{ display: "inline-block" }}>
            <Link
              className="home-link"
              to="/"
              onClick={() => this.toggleMenu()}>
              Home
            </Link>
          </div>
          <div className="bagLink" style={{ display: "inline-block" }}>
            <a>Bag</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
