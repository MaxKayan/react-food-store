import logo from "./logo.svg";
import "./App.css";

function App() {
  const arr = [1, 2, 3];
  const multy = (x, y, z) => x * y * z;

  console.log(multy(...arr));
  console.log(arr);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Nice!!!
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
    </div>
  );
}

export default App;
