import React, { Component } from 'react';
import './App.css';
import Game from './component/Game';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
      <Game />
      </div>
    );
  }
}

export default App;
