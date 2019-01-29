import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import Main from './Main.component';
import AppStyles from '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>      
          <Main/> 
        </HashRouter>             
      </div>
    );
  }
}

export default App;
