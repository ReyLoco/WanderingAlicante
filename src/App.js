import React, {Component} from 'react';
import './assets/css/App.scss';

import * as Constants from './Constants';

// Importación de Componentes
import Header from './components/Header';
import Menu from './components/Menu';
import Introduction from './components/Introduction';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Contact from './components/Contact';


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      actualId : 0,
      actualVillageObj : Constants.VILLAGES[0]
    }

    this.clickHandler = this.clickHandler.bind(this);
  } // end Constructor
  
  // Function to change page, updating the name of village
  clickHandler(id) {
    if (id > 0 && id < 100){
      this.setState({      
        actualId : id,
        actualVillageObj : Constants.VILLAGES[id]
      });
    } else
    {
      this.setState({      
        actualId : id,
      });
    }
  } // end clickHandler

  // Function to obtain and urls array depending of the name of the village.
  getArrayUrls (villageObj){
    let urlArr=[];
  
    for(let i= 1; i <= villageObj.h; i++ ){
      urlArr.push( Constants.IMAGESFOLDER + villageObj.name + "/Horizontales/" + villageObj.name + "_H(" + i + ").jpg")
    };
    
    for(let i= 1; i <= villageObj.v; i++ ){
      urlArr.push( Constants.IMAGESFOLDER + villageObj.name + "/Verticales/" + villageObj.name + "_V(" + i + ").jpg")
    }

    console.log(urlArr);
  
    return urlArr;
  } // end getArrayUrls
  
  
  render(){ 
    return (
      <div className="App container-fluid text-center">

        <section className="section-header">
          <Header title={Constants.APP_TITLE} slogan={Constants.APP_SLOGAN}/>
          <Menu clickHandler={this.clickHandler} />
        </section>

        {/* In that section we paint depending of the value of actualId */}
        {
          (this.state.actualId === 0) ? 

            <Introduction altImages={Constants.ALT_IMAGES} photosNumber={Constants.PHOTOS_NUMBER} introductionText={Constants.E_INTRODUCTION_TEXT}/>

          : (this.state.actualId === 100) ? 

            <Contact />

          : 

            <Gallery village={this.state.actualVillageObj} imgUrls={this.getArrayUrls(this.state.actualVillageObj)}/>
        }

        <section className="section-footer"><Footer /></section>
      </div>
      ); // end return
  } // end render  
} // end class App
