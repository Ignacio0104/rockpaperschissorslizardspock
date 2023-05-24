import Pentagon from "../../assets/images/bg-pentagon.svg";
import Token from "../pure/Tokens/Token";
import "./Options.css";
import lizardIcon from "../../assets/images/icon-lizard.svg";
import scissorsIcon from "../../assets/images/icon-scissors.svg";
import rockIcon from "../../assets/images/icon-rock.svg";
import spockIcon from "../../assets/images/icon-spock.svg";
import paperIcon from "../../assets/images/icon-paper.svg";
import { useState, useEffect } from "react";

export interface ITokenObject {
  name: string;
  image: string;
  beats: string[];
  defeatedBy: string[];
  winningMessage: string[];
}

const tokensObjects = [
  {
    name: "lizard",
    image: lizardIcon,
    beats: ["spock", "paper"],
    defeatedBy: ["rock", "scissors"],
    winningMessage: ["Lizzard poisons Spock", "Lizard eats paper"],
  },
  {
    name: "spock",
    image: spockIcon,
    beats: ["scissors", "rock"],
    defeatedBy: ["lizard", "paper"],
    winningMessage: ["Spock smashes scissors", "Spock vaporizes rock"],
  },
  {
    name: "scissors",
    image: scissorsIcon,
    beats: ["paper", "lizard"],
    defeatedBy: ["spock", "rock"],
    winningMessage: ["Scissors cuts paper", "Scissors decapitates lizard"],
  },
  {
    name: "paper",
    image: paperIcon,
    beats: ["rock", "spock"],
    defeatedBy: ["scissors", "lizard"],
    winningMessage: ["Paper covers rock", "Paper disproves Spock"],
  },
  {
    name: "rock",
    image: rockIcon,
    beats: ["lizard", "scissors"],
    defeatedBy: ["paper", "spock"],
    winningMessage: ["Rock crushes lizard", "Rock crushes scissors"],
  },
];

const Options = () => {
  const [selectedToken, setSelectedToken] = useState<ITokenObject | null>(null);

  const handleClick = (optionSelected: ITokenObject) => {
    setSelectedToken(optionSelected);
  };

  const selectedOptionCheck = (token: ITokenObject) => {
    if (selectedToken !== null && token.name !== selectedToken?.name) {
      return "dissapear";
    }
  };

  return (
    <div className="main-options-container">
      <div className="pentagon-container">
        <img
          className={`${selectedToken !== null ? "dissapear" : ""}`}
          src={Pentagon}
          alt="pentagon"
        ></img>
      </div>
      <div>
        {tokensObjects.map((token, index) => (
          <div className={`${selectedOptionCheck(token)}`}>
            <Token
              key={index}
              handleChange={handleClick}
              token={token}
              selectedToken={selectedToken}
            ></Token>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
