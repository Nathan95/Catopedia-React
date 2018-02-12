import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles.css';
import {Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
<div>

  <div className="mobileMenu">sadasdsa</div>

  <Navbar>
        <Nav>
          <NavItem eventKey={1} href="#">
            <Link to='/'>Home</Link>
          </NavItem>
          <NavItem eventKey={2} href="#">
              <Link to='/'>cat-alogue</Link>
          </NavItem>
        </Nav>
      </Navbar>
  </div>
);

export default Header;
