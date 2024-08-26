import lgo from "./logo.svg";
import "./App.css";
import Hello from "./componenets/hello";
// import Fruits from "./componenets/fruits";
// import Conditional from "./componenets/conditional";
import Counter from "./componenets/counter";
import Formstuff from "./componenets/form";

// import Name from "./componenets/name";
function App() {
  const person = {
    name: "lament",
    message: "hi there ",
    message_two: "welcome ",
    setofnum: [1, 2, 3],
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={lgo} className="App-logo" alt="logo" />
        <Hello person={person} />
        {/* <Fruits />
        <Conditional /> */}
        <Counter />
        <Formstuff />
        <p>
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
    </div>
  );
}

export default App;
