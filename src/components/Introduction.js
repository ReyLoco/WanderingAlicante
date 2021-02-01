import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

export default class Introduction extends Component {
  render() {
    let main_image = this.ExtractImage();

    return (
      <section id="main-content" className="container text-center">
        <h3>
          <i className="fa fa-home"></i> Introduction
        </h3>
        <article id="content">
          {this.props.introductionText.map((elem, i) => {
            return <p key={"main-content-parr-" + i}>{elem}</p>;
          })}
          <div id="main-img">
            <img id="main-image" className="img-responsive" src={main_image[0]} alt={main_image[1]} title={main_image[1]} aria-labelledby="main-image-label" />
            <p id="main-image-label">{main_image[1]}</p>
          </div>
        </article>
      </section>
    );
  } // end render

  ExtractImage() {
    let num = Math.floor(Math.random() * this.props.photosNumber) + 1;
    let img_url = "./images/villages/Alicante/Alicante (" + num + ").jpg";

    return [img_url, this.props.altImages[num]];
  } // end ExtractImage
  
} // end class Introduction
