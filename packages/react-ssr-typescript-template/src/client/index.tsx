import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const Page = require(`./pages${window.location.pathname}`).default;

  console.log(window.location.pathname);
  return <Page />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
