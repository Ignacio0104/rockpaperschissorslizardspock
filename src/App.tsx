import "./App.css";
import Options from "./components/Options/Options";
import Scoreboard from "./components/scoreboard/Scoreboard";

function App() {
  return (
    <div className="App">
      <Scoreboard />
      <Options />
    </div>
  );
}

export default App;
