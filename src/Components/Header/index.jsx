import React from "react";
/* eslint-disable */
import { BrowserRouter as Router} from "react-router-dom";
/* eslint-enable */
import { Link } from "react-router-dom";
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

  toggleMenuLogo() {
    if (this.state.toggled) {
      this.setState({
        toggled: false
      });
    }
  }

  render() {
    const toggled = this.state.toggled;
    const toggledClass = "burgerContainer" + (toggled ? " change" : "");
    const menuClass = toggled ? "openMenu" : "closedMenu";

    return (
      <header>
        <div className="headerHolder">
          <div className="logo">
            <Link
              className="logoLink"
              to="/"
              onClick={() => {
                this.toggleMenuLogo();
                newrelic.addPageAction("clickToHome");
              }}
            >
              <img src="https://i.imgur.com/zkkUfhc.png" alt="logo" />
            </Link>
          </div>
          <div className="headerTeamName">
            <Link
              className="nameLink"
              to="/"
              onClick={() => newrelic.addPageAction("clickToHome")}
            >
              SOLENYA
            </Link>
          </div>

          <div className="menuLinks">
            <div className="webHome">
              <Link
                className="webHomeLink"
                to="/"
                onClick={() => newrelic.addPageAction("clickToHome")}
              >
                PRODUCTS
              </Link>
            </div>
            <div className="webBag">
              <Link className="bagLink" 
              to="#">
                BAG
              </Link>
            </div>
          </div>

          <div className="burgerMenu">
            <div className={toggledClass} onClick={() => this.toggleMenu()}>
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </div>
          </div>
        </div>
        <div className={menuClass}>
          <div className="homeLink">
            <Link
              className="home-link"
              to="/"
              onClick={() => this.toggleMenu()}
            >
              Products
            </Link>
          </div>
          <div className="bagLink">
            <Link className="bag-link" to="#">
              Bag
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
