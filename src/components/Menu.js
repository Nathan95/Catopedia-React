import React, { Component } from "react";
import { Link } from 'react-router-dom'
import {Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap';
import '../Styles.css';

class Menu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div>
            <div id="flyoutMenu"
                 className={visibility}>
                 <h2><Link to='/'><a href="">Home</a></Link></h2>
                 <div className="seperator"></div>
                 <h2><Link to='/'><a href="#" >Cata-logue</a></Link></h2>
          </div>
          
      </div>
    );
  }
}

export default Menu;

//
