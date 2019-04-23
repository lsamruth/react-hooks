import React, { Component } from 'react';
import './App.css';
import UseStateDemo from "./views/UseStateDemo";
import UseEffectDemo from "./views/UseEffectDemo";
import UseRefDemo from "./views/UseRefDemo";

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
        <Title title="useRef Hook Demo"/>
        <UseRefDemo/>
      </div>
    );
  }
}

export default App;
