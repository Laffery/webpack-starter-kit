import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello world!</h1>
        <h2>
          Welcome to use <strong>Webpack Starter Kit!</strong>
        </h2>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <img className="logo" src={logo} alt="logo" />
      </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
