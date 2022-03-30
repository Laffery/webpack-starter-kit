import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const rootNode = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootNode).render(
  <StrictMode>
    <App />
  </StrictMode>
);
