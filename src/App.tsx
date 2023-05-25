import "./App.css";
import Options from "./components/Options/Options";
import Rules from "./components/Rules/Rules";
import Scoreboard from "./components/scoreboard/Scoreboard";
import { useState, useEffect } from "react";

function App() {
  const [score, setScore] = useState<number>();
  useEffect(() => {
    const savedScore = localStorage.getItem("score");
    if (savedScore) {
      setScore(+savedScore);
    } else {
      setScore(0);
    }
  }, []);
  useEffect(() => {
    if (score !== undefined) {
      localStorage.setItem("score", score.toString());
    }
  }, [score]);

  const handleScore = (value: number) => {
    if (score !== undefined) {
      setScore(score + value);
    }
  };

  return (
    <div className="App">
      <Scoreboard score={score} />
      <Options handleScore={handleScore} />
      <Rules />
    </div>
  );
}

export default App;
