import React, { Component } from 'react';
import logo from '../resources/monneo-logo.png';
import Navigation from '../presentational/navigation.component';
import Main from '../containers/main.component';
import AppStyles from '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Main>
        <img src="../resources/monneo-logo.png" alt="logo"/>
        <img src="../resources/monneo-logo.png" alt="logo"/>
        <img src="../resources/monneo-logo.png" alt="logo"/>  
        </Main>      
      </div>
    );
  }
}

export default App;
