import testIcon from "../../../assets/images/icon-lizard.svg";
import "./Token.css";

interface IData {
  name: string;
  image: string;
  beats: string[];
  defeatedBy: string[];
  winningMessage: string[];
}

interface ITokens {
  token: IData;
}

const Token = (token: ITokens) => {
  return (
    <div className={`token-container ${token.token.name}`}>
      <div className="imagen-container">
        <img className="icon" src={token.token.image} alt="icon"></img>
      </div>
    </div>
  );
};

export default Token;
