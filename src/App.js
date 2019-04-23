import React, { Component } from 'react';
import './App.css';
import UseStateDemo from "./views/UseStateDemo";
import UseEffectDemo from "./views/UseEffectDemo";

let Title = ({ title }) =>
  <h2>{title}</h2>
  ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title title="useState Hook Demo" />
        <UseStateDemo />
        <Title title="useEffect Hook Demo"/>
        <UseEffectDemo/>
      </div>
    );
  }
}

export default App;
