import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>E-RDP</title>
        <link rel="canonical" href="http://e-rdp.com" />
        <meta
          name="description"
          content="Revamp your time-series data with our lightning-fast Enhanced Ramer-Douglas-Peucker algorithm. Reduce up to 98% points while preserving your data's essence."
        />
      </Helmet>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl font-bold underline">
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </>
  );
}

export default App;
