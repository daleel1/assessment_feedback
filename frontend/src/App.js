import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Componants/Form.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Form />
        </header> */}
        <Form/>
      </div>
    );
  }
}

export default App;
