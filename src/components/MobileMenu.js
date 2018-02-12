import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../Styles.css';
import {Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap';
import MenuButton from './MenuButton';
import Menu from './Menu.js'

// The Header creates links that can be used to navigate
// between routes.
class MobileMenu extends Component {

  constructor(props, context) {
  super(props, context);

  this.state = {
    visible: false
  };

  this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
}

handleMouseDown(e) {
   this.toggleMenu();

   console.log("clicked");
   e.stopPropagation();
 }

toggleMenu() {
  this.setState({
      visible: !this.state.visible
  });
}

render() {
  return (
    <div>
         <MenuButton handleMouseDown={this.handleMouseDown}/>

         <Menu handleMouseDown={this.handleMouseDown}
             menuVisibility={this.state.visible}/>
      </div>
  )
}

}



export default MobileMenu;
