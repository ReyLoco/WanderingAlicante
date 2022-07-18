import React, {Component} from 'react';
import './assets/css/App.scss';

import * as Constants from './Constants';

// Importación de Componentes
import LanguageBtn from './components/LanguageBtn';
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
      actualVillageObj : Constants.VILLAGES[0],
      english : false,

      menuOptions : Constants.VILLAGES.map((v) => {return {id: v.id, name: (v.name) === "Monforte del Cid" ? "Monforte" : v.name}} ),

    }

    this.clickHandler = this.clickHandler.bind(this);
    this.clickLanguage = this.clickLanguage.bind(this);
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

  clickLanguage(eng){
    this.setState({
      english : eng
    })
  }

  // Function to obtain and urls array depending of the name of the village.
  getArrayUrls (villageObj){
    let urlArr=[];
  
    for(let i= 1; i <= villageObj.h; i++ ){
      urlArr.push( Constants.IMAGESFOLDER + villageObj.name + "/Horizontales/" + villageObj.name + "_H(" + i + ").jpg")
    };
    
    for(let i= 1; i <= villageObj.v; i++ ){
      urlArr.push( Constants.IMAGESFOLDER + villageObj.name + "/Verticales/" + villageObj.name + "_V(" + i + ").jpg")
    }
  
    return urlArr;
  } // end getArrayUrls
  
  
  render(){ 
    return (
      <div className="App container-fluid text-center">

        <section className="section-header">
          <LanguageBtn clickLanguage={this.clickLanguage}/>
          
          <Header title={Constants.APP_TITLE} slogan={(this.state.english) ? Constants.APP_E_SLOGAN : Constants.APP_S_SLOGAN} english={this.state.english}/>
          
          <Menu clickHandler={this.clickHandler} menuOptions={this.state.menuOptions} />
        </section>

        {/* In that section we paint depending of the value of actualId */}
        {
          (this.state.actualId === 0) ? 

            <Introduction altImages={Constants.ALT_IMAGES} photosNumber={Constants.ALICANTE_PHOTOS_NUMBER} introductionText={(this.state.english) ? Constants.E_INTRODUCTION_TEXT : Constants.S_INTRODUCTION_TEXT}/>

          : (this.state.actualId === 100) ? 

            <Contact />

          : 

            <Gallery village={this.state.actualVillageObj} imgUrls={this.getArrayUrls(this.state.actualVillageObj)} english={this.state.english} menuOpCount={this.state.menuOptions.length}/>
        }

        <section className="section-footer"><Footer /></section>
      </div>
      ); // end return
  } // end render  
} // end class App
