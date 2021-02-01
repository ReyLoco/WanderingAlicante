import React, { Component } from "react";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOptions: [
        { id: 0, name: "Home" },
        { id: 1, name: "Aspe" },
        { id: 2, name: "Novelda" },
        { id: 3, name: "Monforte del Cid" },
        { id: 4, name: "Monóvar" },
        { id: 5, name: "Santa Pola" },
        // { id: 100, name: "Contact" },
      ],
    };

   // this.aInput = React.createRef()
  } // end constructor

  // componentDidMount(){
  //   this.aInput.current.focus();
  // }

  render() {
    return (
      <div id="navbar">
        <ul>
          {this.state.menuOptions.map((option, i) => {
            return (
              <li key={option.id}>
                <a
                  id={"main-menuOption op-" + option.name}
                  className="white-text"
                  href="/#"
                  onClick={() => this.props.clickHandler(option.id)}
                  tabIndex={option.id === 100 ? 7 : option.id + 1}
                  
                >
                  {option.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    ); // end return
  } // end render
} // end class Menu
