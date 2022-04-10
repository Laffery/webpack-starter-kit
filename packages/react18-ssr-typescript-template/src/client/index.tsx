import React from "react";
import { Context, useContext, getInitialContextValue } from "shared/context";
import ReactDOM from "react-dom/client";
import "./index.css";

function Page() {
  const { props } = useContext(Context);
  const Component = require(`./pages${window.location.pathname}`).default;
  return <Component {...props} />;
}

function App() {
  const initialContextValue = getInitialContextValue();
  return (
    <React.StrictMode>
      <Context.Provider value={initialContextValue}>
        <Page />
      </Context.Provider>
    </React.StrictMode>
  );
}

function render() {
  const rootNode = document.getElementById("root") as HTMLDivElement;

  if (window && window.SSR) {
    ReactDOM.hydrateRoot(rootNode, <App />);
  } else {
    ReactDOM.createRoot(rootNode).render(<App />);
  }
}

render();
