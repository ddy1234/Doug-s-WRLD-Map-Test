import React, { Component } from 'react';
import * as Wrld from 'wrld.js';

import './App.css';

const wrldApiKey = '534b3767557e7806de79d87b1b400de7';
const pullar = [56.397824, -3.431702];

class App extends Component {

  componentDidMount() {
    Wrld.map('map', wrldApiKey, {
      // These are the options that are referred to at: https://www.wrld3d.com/wrld.js/latest/docs/api/L.Wrld.map/
      center: pullar,
      zoom: 17
    });
    
  }

  render() {
    return (

        <div className='App'>
          <header className='App-header'>

            <div id='overlay' className='wrld-widget-container'>&nbsp;</div>
            <div id='map'>&nbsp;</div>

          </header>
        </div>

    );
  }
}

export default App;
