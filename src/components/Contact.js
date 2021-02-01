import React, {Component} from 'react';
// import mongoose from '../database/database';


export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sended: false,
    };
    this.handleClick = this.handleClick.bind(this);
  } // end constructor

  handleClick() {
    this.setState({
      submitted: true,
    });
  } // end handleClick

  render() {
    if (this.state.submitted) {
      return <h1>Thanks for contacting us</h1>;
    } else {
      return (
        <section id="contact-form" className="container text-center">
          <h2>Contacto</h2>

          <form id="contact" className="container text-center" action="send_mail" method="post" >
            {/*onClick={document.forms['contact-form'].submit('send_mail')}>*/}
            <label id="lb-mail" for="input-mail">Email</label>
            <input id="input-mail" type="email" name="email" required></input>

            <label id="lb-msg" for="tx-msg">Your message</label>
            <textarea id="tx-msg" type="text" name="message" required></textarea>

            <button id="btn-msg" onClick={this.handleClick} type="submit">
              <i className="fas fa-mail-forward">Send</i>
            </button>
          </form>
        </section>
      );
    }
  } // end render
  
} // end Class Contact





     