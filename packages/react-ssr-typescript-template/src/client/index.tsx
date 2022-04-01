import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Context = createContext({ props: {} });

const getInitialContextValue = () => {
  return window && window.SSR_DATA ? window.SSR_DATA : { props: {} };
};

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
  const container = document.getElementById("root");

  if (window && window.SSR) {
    ReactDOM.hydrate(<App />, container);
  } else {
    ReactDOM.render(<App />, container);
  }
}

render();
