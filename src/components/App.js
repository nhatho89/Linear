import React, { Component } from 'react';
import Menu from './Menu.jsx';
import './App.css';
import Board from './Board.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Board/>
      </div>
    );
  }
}

export default App;
