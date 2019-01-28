import React, { Component } from 'react';
import logo from '../resources/monneo-logo.png';
import Navigation from '../presentational/navigation.component';
import Footer from '../presentational/footer.component';
// import '../src';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <img src="../resources/monneo-logo.png" alt="logo"/>
        <img src="../resources/monneo-logo.png" alt="logo"/>
        <img src="../resources/monneo-logo.png" alt="logo"/>
        <Footer />
      </div>
    );
  }
}

export default App;
