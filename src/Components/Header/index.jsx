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
        <div className={toggledClass} onClick={() => this.toggleMenu()}>
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
        <div className={menuClass}>
          <div style={{ display: "inline-block" }}>
            <Link
              className="home-link"
              to="/"
              onClick={() => this.toggleMenu()}
            >
              Home
            </Link>
          </div>
          <div className="bag" style={{ display: "inline-block" }}>
            <a>Bag</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
