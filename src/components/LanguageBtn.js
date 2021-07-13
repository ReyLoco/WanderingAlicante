import React, { Component } from 'react';
import sIcon from "../assets/img/esp.png";
import eIcon from "../assets/img/eng.png";

export default class LanguageBtn extends Component {
  
  render() {
    return (
      <div id="button-lang">
        <button id="btn-esp">
          <img
            src={sIcon}
          //  src="https://img.icons8.com/color/48/000000/spain.png"
            title="español"
            alt="español"
            onClick={() => this.props.clickLanguage(false)}
          />
        </button>
        <button id="btn-eng">
          <img
            src={eIcon}
            // src="https://img.icons8.com/color/48/000000/great-britain.png"
            title="english"
            alt="english"
            onClick={() => this.props.clickLanguage(true)}
          />
        </button>
      </div>
    );
  }
}

