import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ["Created By Luis Massó ~ 2021"],
    };
  } // end constructor

  render() {
    return (
      <div id="footer">
        <div id="content">
          {this.state.text.map((elem, i) => {
            return <p key={"footer-parr-" + i}>{elem}</p>;
          })}
        </div>
      </div>
    ); // end return
  } // end render
  
} // end class Footer
