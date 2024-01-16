import logo from "./logo.svg";
import "./App.css";
import Gepel from "./model/Gepel";
import Kiegeszit from "./komponensek/Kiegeszit";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Learn English! </h1>
        <h3>Gépeld be</h3>
        </header>
        <Kiegeszit />
    </div>
  );
}

export default App;
