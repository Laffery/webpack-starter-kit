import logo from "./logo.svg";
import "./App.css";
import { GetServerSideProps } from "../shared/lib/getServerSideProps";

function App(props: { mode?: "CSR" | "SSR" }) {
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
        <pre>Current render mode is {props.mode ?? "CSR"}</pre>
        <img className="logo" src={logo} alt="logo" />
      </header>
    </div>
  );
}

export default App;

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { mode: "SSR" } };
};
