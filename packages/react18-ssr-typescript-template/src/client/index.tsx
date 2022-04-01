import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
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
  const rootNode = document.getElementById("root") as HTMLDivElement;

  if (window && window.SSR) {
    ReactDOM.hydrateRoot(rootNode, <App />);
  } else {
    ReactDOM.createRoot(rootNode).render(<App />);
  }
}

render();
