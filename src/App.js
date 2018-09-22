import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav/>
        <Users/>
      </div>
    );
  }
}

export default App;
