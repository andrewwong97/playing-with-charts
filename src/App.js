import React, { Component } from 'react';
import './App.css';
import MyChart from './MyChart.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Wyzant Chart Data</h1>
        <MyChart />
      </div>
    );
  }
}

export default App;
