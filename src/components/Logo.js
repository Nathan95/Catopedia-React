import React, { Component } from 'react';
import '../Styles.css';
import {Grid, Row, Col, Button, Glyphicon} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import MobileMenu from './MobileMenu';


//ReactDOM.render(<CatLanding />, document.getElementById('root'));


const Logo = () => (

      <div className="App">

        <header className="App-header">
        <MobileMenu />
          <h1 className="App-title">Catopedia <div className="smallText">By cats for cats</div></h1>
        </header>
            <div className="seperator"></div>
          
      </div>
);




export default Logo;
