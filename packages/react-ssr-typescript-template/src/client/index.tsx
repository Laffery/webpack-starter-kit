import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.hydrate(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
