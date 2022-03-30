import { useState } from "react";
import logo from "../../logo.svg";
import "./index.css";

function HelloWorld(props: { page: string; mode?: "CSR" | "SSR" }) {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h2>
          Welcome to use <strong>Webpack Starter Kit!</strong>
        </h2>
        <p>
          Edit <code>{props.page}</code> and save to reload.
        </p>
        <pre>Current render mode is {props.mode ?? "CSR"}</pre>
        <pre>Count is {count}</pre>
        <button onClick={() => setCount(count + 1)}>add</button>
        <img className="logo" src={logo} alt="logo" />
      </header>
    </div>
  );
}

export default HelloWorld;
