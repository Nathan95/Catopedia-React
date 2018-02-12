import React, { Component } from "react";
import '../Styles.css';

class MenuButton extends Component {
  render() {
    return (
      <div id="boxButton"
              onMouseDown={this.props.handleMouseDown}>
            <div className="boxStyle"></div>
            <div className="boxStyle"></div>
            <div className="boxStyle"></div>

      </div>
    );
  }
}

export default MenuButton;
