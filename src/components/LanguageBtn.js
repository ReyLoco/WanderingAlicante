import React, { Component } from 'react';

export default class LanguageBtn extends Component {
  
  render() {
    return (
      <div id="button-lang">
        <button id="btn-esp">
          <img
            src="https://img.icons8.com/color/48/000000/spain.png"
            title="español"
            alt="español"
            onClick={() => this.props.clickLanguage(false)}
          />
        </button>
        <button id="btn-eng">
          <img
            src="https://img.icons8.com/color/48/000000/great-britain.png"
            title="english"
            alt="english"
            onClick={() => this.props.clickLanguage(true)}
          />
        </button>
      </div>
    );
  }
}

