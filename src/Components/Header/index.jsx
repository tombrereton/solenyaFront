import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import Plp from "../Plp";
import "./style.css";

class Header extends React.Component  {
    constructor(props){      
        super(props)
        this.state = {
            toggled: false
        }
    }

    onButtonClicked(){
        this.setState({
            toggled: !this.state.toggled
        })
        console.log("click happened");
    }

    onLinkClicked(){
        this.setState({
            toggled: !this.state.toggled
        })
        newrelic.addPageAction("clickToHome")
    }

    render (){ 
        const toggled = this.state.toggled;
        const toggledClass = "container" + (toggled ? " change" : "");
        const menuClass = (toggled ? "openMenu" : "closedMenu");

        return(
            <header>     
                    <div className={toggledClass}  onClick={() => this.onButtonClicked()}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>          
                    </div> 
                    <div className={menuClass}>                        
                        <div>
                                    <Link  className = "home-link" to="/" onClick={() => this.onLinkClicked()}>
                                        Home
                                    </Link> 
                        </div>
                    </div>  

            </header > 
            );
            
        }

    

}


    export default Header;

