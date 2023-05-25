import "./Result.css";
import { useEffect } from "react";

interface IResult {
  winningMessage: string;
  winner: string;
  reset: () => void;
}

const Result = (props: IResult) => {
  useEffect(() => {}, [props]);

  return (
    <div className="result-container">
      <h3>{props.winningMessage !== "Tie" ? props.winningMessage : ""}</h3>
      <h1>
        {props.winner === "user"
          ? "YOU WIN"
          : props.winner === "computer"
          ? "YOU LOSE"
          : "THERE'S A TIE"}
      </h1>
      <button onClick={props.reset}>PLAY AGAIN</button>
    </div>
  );
};

export default Result;
