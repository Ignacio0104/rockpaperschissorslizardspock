import Pentagon from "../../assets/images/bg-pentagon.svg";
import Token from "../pure/Tokens/Token";
import "./Options.css";
import lizardIcon from "../../assets/images/icon-lizard.svg";
import scissorsIcon from "../../assets/images/icon-scissors.svg";
import rockIcon from "../../assets/images/icon-rock.svg";
import spockIcon from "../../assets/images/icon-spock.svg";
import paperIcon from "../../assets/images/icon-paper.svg";
import { useState, useEffect } from "react";
import Result from "../Result/Result";

export interface ITokenObject {
  name: string;
  image: string;
  beats: string[];
  defeatedBy: string[];
  winningMessage: string[];
}

interface IWinner {
  winner: string;
  winningMessage: string;
}

interface IOptions {
  handleScore: (arg: number) => void;
}

const tokensObjects = [
  {
    name: "lizard",
    image: lizardIcon,
    beats: ["spock", "paper"],
    defeatedBy: ["rock", "scissors"],
    winningMessage: ["LIZZARD POISONS SPOCK", "LIZARD EATS PAPER"],
  },
  {
    name: "spock",
    image: spockIcon,
    beats: ["scissors", "rock"],
    defeatedBy: ["lizard", "paper"],
    winningMessage: ["SPOCK SMASHES SCISSORS", "SPOCK VAPORIZES ROCK"],
  },
  {
    name: "scissors",
    image: scissorsIcon,
    beats: ["paper", "lizard"],
    defeatedBy: ["spock", "rock"],
    winningMessage: ["SCISSORS CUTS PAPER", "SCISSORS DECAPITATES LIZARD"],
  },
  {
    name: "paper",
    image: paperIcon,
    beats: ["rock", "spock"],
    defeatedBy: ["scissors", "lizard"],
    winningMessage: ["PAPER COVERS ROCK", "PAPER DISPROVES SPOCK"],
  },
  {
    name: "rock",
    image: rockIcon,
    beats: ["lizard", "scissors"],
    defeatedBy: ["paper", "spock"],
    winningMessage: ["ROCK CRUSHES LIZARD", "ROCK CRUSHES SCISSORS"],
  },
];

const Options = (props: IOptions) => {
  const [selectedToken, setSelectedToken] = useState<ITokenObject | null>(null);
  const [computerToken, setComputerToken] = useState<ITokenObject>(
    tokensObjects[0]
  );
  const [randomEnd, setRandomEnd] = useState(false);
  const [winner, setWinner] = useState<IWinner>({
    winner: "",
    winningMessage: "",
  });

  useEffect(() => {
    checkWinner();
  }, [randomEnd]);

  const handleClick = (optionSelected: ITokenObject) => {
    if (!selectedToken) {
      setSelectedToken(optionSelected);
      let timer = 100;
      let interval = setInterval(() => {
        if (timer < 5000) {
          let index = Math.floor(Math.random() * 4);
          setComputerToken(tokensObjects[index]);
          timer += 100;
        } else {
          clearInterval(interval);
          setRandomEnd(true);
        }
      }, timer);
    }
  };
  const checkWinner = () => {
    if (selectedToken) {
      let indexLoserComputer = selectedToken.beats.indexOf(computerToken.name);
      let indexLoserUser = computerToken.beats.indexOf(selectedToken.name);
      if (indexLoserComputer >= 0) {
        setWinner({
          winner: "user",
          winningMessage: selectedToken.winningMessage[indexLoserComputer],
        });
        props.handleScore(1);
      } else if (indexLoserUser >= 0) {
        setWinner({
          winner: "computer",
          winningMessage: computerToken.winningMessage[indexLoserUser],
        });
        props.handleScore(-1);
      } else {
        setWinner({ winner: "none", winningMessage: "Tie" });
      }
    }
  };

  const selectedOptionCheck = (token: ITokenObject) => {
    if (selectedToken !== null && token.name !== selectedToken?.name) {
      return "dissapear";
    }
  };

  const resetGame = () => {
    setSelectedToken(null);
    setComputerToken(tokensObjects[0]);
    setRandomEnd(false);
    setWinner({ winner: "", winningMessage: "" });
  };

  return (
    <div
      className={`${
        !selectedToken ? "main-options-container" : "main-active-container"
      }`}
    >
      <div className="pentagon-container">
        <img
          style={{ opacity: selectedToken ? 0 : 1 }}
          src={Pentagon}
          alt="pentagon"
        ></img>
      </div>
      <div className="token-selection-container">
        {tokensObjects.map((token, index) => (
          <div className={`${selectedOptionCheck(token)}`} key={index}>
            <Token
              key={index}
              handleChange={handleClick}
              token={token}
              selectedToken={selectedToken}
              isComputer={false}
            ></Token>
          </div>
        ))}
        {winner.winningMessage !== "" && (
          <Result
            winningMessage={winner.winningMessage}
            winner={winner.winner}
            reset={resetGame}
          />
        )}

        {selectedToken && (
          <div className="token-oponnent-container">
            <Token
              handleChange={handleClick}
              token={computerToken}
              selectedToken={selectedToken}
              isComputer={true}
            ></Token>
          </div>
        )}
      </div>
    </div>
  );
};

export default Options;
