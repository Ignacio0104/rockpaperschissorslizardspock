import { useEffect, useState } from "react";
import "./Scoreboard.css";

interface IScoreboard {
  score: number | undefined;
}

const Scoreboard = (score: IScoreboard) => {
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
        <h1>{score.score}</h1>
      </div>
    </div>
  );
};

export default Scoreboard;
