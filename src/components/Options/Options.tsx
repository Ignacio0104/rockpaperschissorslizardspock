import Pentagon from "../../assets/images/bg-pentagon.svg";
import Token from "../pure/Tokens/Token";
import "./Options.css";
import lizardIcon from "../../assets/images/icon-lizard.svg";
import scissorsIcon from "../../assets/images/icon-scissors.svg";
import rockIcon from "../../assets/images/icon-rock.svg";
import spockIcon from "../../assets/images/icon-spock.svg";
import paperIcon from "../../assets/images/icon-paper.svg";

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
  return (
    <div className="main-options-container">
      <div className="pentagon-container">
        <img src={Pentagon} alt="pentagon"></img>
      </div>
      <div className="tokens-container">
        {tokensObjects.map((token) => (
          <Token key={token.name} token={token}></Token>
        ))}
      </div>
    </div>
  );
};

export default Options;
