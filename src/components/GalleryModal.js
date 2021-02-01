import React, { Component } from "react";

export default class GalleryModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: "",
      topValue: 250,
    };
    // this.changePhoto = this.changePhoto.bind(this);
  } // end constructor

  // UNSAFE_componentWillReceiveProps(nextProps){
  //     if(nextProps.src !== '') {
  //         this.setState({
  //             src: nextProps.src
  //         })
  //     }
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState){
  //     if(prevProps.src !== '') {
  //         this.setState({
  //            src: prevProps.src,
  //         //   topValue: this.CenterOfPhoto(nextProps.src)
  //         })
  //     }
  // }

  // changePhoto(n){
  //     let newPhoto = this.props.imgUrls[this.props.imgUrls.indexOf(this.state.src) + n];
  //     console.log(newPhoto);
  //     if(newPhoto !== '')
  //     {
  //         this.setState({
  //             src : newPhoto
  //         })
  //     }
  // }

  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    return (
      <div
        isOpen={this.props.isOpen}
        className="modal-overlay"
        name={this.props.name}
      >
        <div className="modal-body">
          <a className="modal-close" href="/#" onClick={this.props.closeModal} onKeyDown={this.props.onKeyDown}>
            <span className="fa fa-times" />
          </a>
          <img src={this.props.src} alt="" onClick={this.props.closeModal}/>

          {/* <a className='card-arrow-left' href='/#' onClick={this.changePhoto(-1)} style={{top: this.state.topValue}}>
                <span className='fa fa-arrow-left' />
              </a>

              <a className='card-arrow-right' href='/#' onClick={this.changePhoto(+1)} style={{top: this.state.topValue}}>
                <span className='fa fa-arrow-right' />
              </a>  */}

          {/* <a className='card-arrow-left' href='/#' onClick={() => this.changeImage(this.props.imgUrls[this.props.imgUrls.indexOf(this.state.src)-1])} style={{top: this.state.topValue}}>
                <span className='fa fa-arrow-left' />
              </a>

              <a className='card-arrow-right' href='/#' onClick={() => this.changeImage(this.props.imgUrls[this.props.imgUrls.indexOf(this.state.src)+1])} style={{top: this.state.topValue}}>
                <span className='fa fa-arrow-right' />
              </a>     */}
        </div>
      </div>
    ); // end return
  } // end render

  changeImage = (url) => {
    // console.log("ChangeImage url: " + url);
    if (url !== undefined) {
      this.setState({
        src: url,
        topValue: this.CenterOfPhoto(url),
      });
    }
    // console.log("src: " + this.state.src);
  }; // end changeImage

  CenterOfPhoto(url) {
    return String(url).includes("_H ") ? 250 : 400;
  } // end CenterOfPhoto

} // end Class GalleryModal
