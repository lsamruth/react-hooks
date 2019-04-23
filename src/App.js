import React, { Component } from 'react';
import './App.css';
import UseStateDemo from "./views/UseStateDemo";

let Title = ({ title }) =>
  <h2>{title}</h2>
  ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title title="useState Hook Demo" />
        <UseStateDemo />
      </div>
    );
  }
}

export default App;
