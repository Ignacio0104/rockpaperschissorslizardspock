import { useEffect, useState } from "react";
import "./Scoreboard.css";

const Scoreboard = () => {
  const [points, setPoints] = useState(0);
  useEffect(() => {
    let score = localStorage.getItem("score");
    if (score) {
      setPoints(+score);
    }
  }, []);

  return (
    <div className="score-main-container">
      <div className="score-text-container">
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
        <p>LIZARD</p>
        <p>SPOCK</p>
      </div>
      <div className="score-number-container">
        <h4>SCORE</h4>
        <h1>{points}</h1>
      </div>
    </div>
  );
};

export default Scoreboard;
