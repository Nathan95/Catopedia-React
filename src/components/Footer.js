import React, { Component } from 'react';
import '../Styles.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap';

class Footer extends Component {

  render() {
    return (
      <div>
        <div className="footerMargin"></div>
        <div className="footer">Contact Us - Careers</div>
      </div>
    );
  }
}


export default Footer;
